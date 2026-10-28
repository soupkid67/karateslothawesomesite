// ✰ webmeji ✰
// little creatures that walk around your website =w=b
// inspired by shimeji, put together by Lars de Rooij
// not affiliated with any other shimeji projects
// last updated: 29 august 2026 — added walkable-div platforms (creatures can
// stand, walk, fall off, and climb onto any element with an id or class
// containing "walkable"); fixed wall/roof jump landings snapping into place
// a frame after arrival, made physics (air drag) frame-rate independent,
// made a "jump to the roof/wall" prefer landing on a walkable object sitting
// up there instead of flying into/behind it, fixed a dragged/thrown creature
// falling straight through a walkable object if dropped directly onto it,
// let jump arcs go off the top of the screen and arc back down onto a
// platform naturally instead of flattening against y=0, fixed a jump
// between platforms playing its animation in place and then teleporting to
// the destination (the main loop was still syncing to the OLD platform
// mid-flight), fixed creatures piling up at the same edge of a platform
// instead of spreading out across it when jumping on, made `scale` in
// config.js produce the same absolute size on every screen instead of being
// baked in relative to whatever viewport the page happened to load on,
// fixed walking creatures always drifting right and never turning left on
// platforms (direction was never randomized outside of window-edge
// bounces/climbs), fixed walking off a platform edge instantly re-landing
// back on the same platform instead of actually falling, and made a bounce
// impact hold the fallen/get-up pose instead of resuming the mid-air falling
// animation between bounces
// homepage: webmeji.neocities.org

// this is likely very unoptimized and quite messy code, i apologize for that. plain info on each function is at the bottom of the readme
// this project was made with the intention that changing anything in the config.js would be easy. this is not that. modifying this comes at your own risk.
// stop looking at my code you silly goober!
// I SAID STOP!
// stop.
// >:(
// go away.
// Proceed.
window.addEventListener('DOMContentLoaded', () => {
  // collect unique config names from SPAWNING
  const configNames = [...new Set(
    window.SPAWNING.map(spawn => spawn.config)
  )];

  // resolve them to actual config objects on window
  const configs = configNames
    .map(name => window[name])
    .filter(Boolean);

  // preload all images
  Promise.all(configs.map(preloadImages))
    .then(() => {
      console.log("all images are loaded!");

      const creatures = [];
      window.SPAWNING.forEach(({ id, config }) => {
        const cfg = window[config];
        if (!cfg) {
          console.warn(`config not found: ${config}`);
          return;
        }
        creatures.push(new Creature(id, cfg));
      });
    })
    .catch(error => {
      console.error("error loading images:", error);
    });
});


// preloads all frames from a given configuration
function preloadImages(config) {
  // collect all frames from every action in the config
  const imagePaths = Object.values(config)
    .flatMap(item => (item.frames && Array.isArray(item.frames)) ? item.frames : []);

  // return a promise that resolves when all images are loaded
  return Promise.all(imagePaths.map(src => new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;  // resolve when image loads
    img.onerror = reject;  // reject if error occurs
    img.src = src;
  })));
}

// default physics constants — overridable per-creature via spriteConfig.physics
const DEFAULT_PHYSICS = {
  gravity: 2200,          // px/s^2, downward acceleration
  bounceDamping: 0.45,    // vertical restitution on floor impact (0 = no bounce, 1 = perfectly elastic)
  wallDamping: 0.6,       // horizontal restitution off side walls
  groundFriction: 0.8,    // horizontal velocity retained per floor bounce
  minBounceVelocity: 60,  // px/s — below this, stop bouncing and settle
  terminalVelocity: 2200, // px/s cap on fall speed
  airDrag: 0.999          // per-frame horizontal velocity decay while airborne
};

const WALK_TURN_CHANCE = 1.3;
const PLATFORM_JUMP_BOOST = 1.3;

// ------------------------------------------------------------------------
// WalkableManager — tracks every element on the page marked as walkable,
// i.e. anything matching `#walkable` or `.walkable`. Creatures can stand,
// walk, fall off, and climb onto these just like the floor/walls/ceiling
// of the window itself.
//
// Use `class="walkable"` if you want more than one element to count (ids
// are only meant to be unique — `id="walkable"` still works for a single
// element, and is matched too, but don't rely on it for several divs).
//
// Rects are viewport-relative (like everything else in this file), and
// each one keeps a reference to its source element so a creature standing
// on it can re-read its live position every frame — this keeps them stuck
// to the div correctly even if the page scrolls or the div moves/resizes.
// ------------------------------------------------------------------------
const WalkableManager = {
  rects: [],

  refresh() {
    // matches an id OR class that *contains* "walkable" anywhere, case-
    // insensitively — so id="walkable", id="shelf-walkable-2",
    // class="walkable", class="my-walkable-shelf", etc. all count, and you
    // aren't limited to a single element sitewide the way an exact
    // id="walkable" match would be (ids must be unique per page).
    const els = document.querySelectorAll('[id*="walkable" i], [class*="walkable" i]');
    this.rects = Array.from(els)
      .map(el => {
        const r = el.getBoundingClientRect();
        return { left: r.left, right: r.right, top: r.top, bottom: r.bottom, el };
      })
      .filter(r => r.right > r.left && r.bottom > r.top); // skip hidden/zero-size elements
  },

  // fresh rect for a specific element, used to resync a creature that's
  // currently standing on it (handles scrolling, resizing, layout shifts)
  liveRectFor(el) {
    if (!el || !document.contains(el)) return null;
    const r = el.getBoundingClientRect();
    if (r.right <= r.left || r.bottom <= r.top) return null; // became hidden
    return { left: r.left, right: r.right, top: r.top, bottom: r.bottom, el };
  }
};

WalkableManager.refresh();
window.addEventListener('resize', () => WalkableManager.refresh());
window.addEventListener('scroll', () => WalkableManager.refresh(), { passive: true });
// catches walkable elements that appear/move/resize from other scripts/content changes
setInterval(() => WalkableManager.refresh(), 500);

// creature class -------------------------------------------------------
class Creature {
  constructor(containerId, spriteConfig) {
    this.currentEdge = 'bottom';
    this.currentPlatform = null; // {left,right,top,bottom,el} of a walkable div, or null = window floor

    // create div to hold the sprite image
    this.container = document.createElement('div');
    this.container.className = 'webmeji-container';
    // pointer-events starts disabled and only gets turned on (by the
    // window-level hover hit-test set up below) while the cursor is
    // actually over a non-transparent pixel of the current sprite frame.
    // Without this, the container's whole bounding box — which is often
    // much bigger than the visible character once you account for a
    // sprite pack's transparent padding — would swallow clicks/hovers
    // meant for whatever's underneath it (or just for the page itself),
    // making it look like the creature got "selected" from nowhere.
    this.container.style.pointerEvents = 'none';
    document.body.appendChild(this.container);

    // offscreen canvas used to read back the alpha channel of whatever
    // frame is currently showing, so hit-testing is pixel-accurate instead
    // of just "anywhere inside the rectangular container"
    this.hitCanvas = document.createElement('canvas');
    this.hitCanvasSrc = null;

    // create img element for first frame of sprite
    this.img = document.createElement('img');
    this.img.id = containerId;
    // force every sprite frame to align to the bottom of the container
    // regardless of that individual PNG's own canvas padding. Packs whose
    // frames don't all share identical transparent-padding proportions
    // (e.g. a walk frame with more headroom than the stand frame) will
    // otherwise visibly bob up/down or "sink into the floor" as frames
    // swap, since this engine has no per-pose anchor correction like real
    // Shimeji-ee — this is the generic substitute for that.
    this.img.style.width = '100%';
    this.img.style.height = '100%';
    this.img.style.objectFit = 'contain';
    this.img.style.objectPosition = 'bottom center';
    this.img.src = spriteConfig.walk.frames[0]; // default to first walk frame
    this.container.appendChild(this.img);

    // store sprite configuration & randomize action sequence
    this.spriteConfig = spriteConfig;
    this.physics = Object.assign({}, DEFAULT_PHYSICS, spriteConfig.physics || {});
    this.actionSequence = this.shuffle([...this.spriteConfig.ORIGINAL_ACTIONS]);
    this.currentActionIndex = 0;
    this.currentAction = null;
    this.frameTimer = null;          // interval for frame updates
    this.dragFrameTimer = null;      // interval for drag animation
    this.actionCompletionTimer = null; // timer for completing actions
    this.currentFrame = 0;
    this.direction = 1;              // movement direction, 1 = right, -1 = left
    this.facing = 'left';            // visual facing direction of base sprites

    // physics state
    this.velocityX = 0;
    this.velocityY = 0;
    this.dragHistory = []; // recent {x,y,t} pointer samples, used to compute throw velocity

    // starting states
    this.isDragging = false;
    this.isFalling = false;
    this.isPetting = false;
    this.isJumping = false;
    this.tripAfterFallActive = false;
    this.wasActionBeforePet = null;

    // pointer / drag detection
    this.isPointerDown = false;
    window.addEventListener('mousedown', () => { this.isPointerDown = true; });
    window.addEventListener('mouseup', () => { this.isPointerDown = false; });
    window.addEventListener('touchstart', () => { this.isPointerDown = true; }, { passive: true });
    window.addEventListener('touchend', () => { this.isPointerDown = false; });

    // this has to be a WINDOW-level listener rather than one on the
    // container itself — a listener attached to the container would stop
    // getting mousemove events the moment pointer-events goes to 'none',
    // so it could never notice the cursor coming back over an opaque pixel
    // to turn itself back on. A window listener always fires regardless of
    // the container's current pointer-events value.
    this.hoverHitTestHandler = (e) => {
      if (this.isDragging) { this.container.style.pointerEvents = 'auto'; return; }
      this.container.style.pointerEvents = this.isOpaqueAtClientPoint(e.clientX, e.clientY) ? 'auto' : 'none';
    };
    window.addEventListener('mousemove', this.hoverHitTestHandler);

    // apply a per-creature size adjustment. `scale` in the pack's config.js
    // multiplies a fixed reference size — 1 = default (128px), 1.5 = 50%
    // bigger, 0.5 = half size, etc.
    //
    // this is deliberately NOT read from the container's live computed
    // style. getComputedStyle() resolves relative CSS units (vw/vh/%)
    // against whatever viewport is current *right now* — so if the base
    // CSS size is responsive, the same `scale` value baked in a different
    // absolute pixel size depending on which screen size the page happened
    // to load on (e.g. tuned on a phone, then huge after loading on a
    // desktop). BASE_SPRITE_SIZE is a plain constant, so a given scale
    // always produces the exact same final size everywhere.
    const BASE_SPRITE_SIZE = 128;
    // GLOBAL_SCALE_MULTIPLIER is expected to be defined elsewhere (e.g. in
    // config.js as `window.GLOBAL_SCALE_MULTIPLIER = ...`) — falls back to 1
    // (no change) if it isn't set anywhere
    const globalScale = window.GLOBAL_SCALE_MULTIPLIER !== undefined ? window.GLOBAL_SCALE_MULTIPLIER : 1;
    const finalScale = (spriteConfig.scale !== undefined ? spriteConfig.scale : 1) * globalScale;
    this.container.style.width = `${BASE_SPRITE_SIZE * finalScale}px`;
    this.container.style.height = `${BASE_SPRITE_SIZE * finalScale}px`;

    // get container size
    const containerStyle = window.getComputedStyle(this.container);
    this.containerWidth = parseFloat(containerStyle.width);
    this.containerHeight = parseFloat(containerStyle.height);

    // spawn at random bottom position
    this.positionX = Math.random() * (window.innerWidth - this.containerWidth);
    this.positionY = window.innerHeight - this.containerHeight;

    this.container.style.left = `${this.positionX}px`;
    this.container.style.top = `${this.positionY}px`;

    this.maxPos = window.innerWidth - this.containerWidth; // max horizontal position
    this.forceWalkAfter = false; // flag for forcing walk after some actions
    this.forceThinkAfter = false;

    this.container.style.left = `${this.positionX}px`;
    this.container.style.top = 'auto'; // reset top for CSS positioning
    this.baseBottom = 0; // reference for bottom alignment

    this.updateImageDirection(); // set initial facing

    // start first action
    this.currentAction = this.actionSequence[this.currentActionIndex];
    this.startAction(this.currentAction);

    // bind animate to this object
    this.animate = this.animate.bind(this);
    this.animationFrameId = requestAnimationFrame(this.animate);

    // handle window resize to adjust max positions
    this.resizeHandler = () => {
      const style = window.getComputedStyle(this.container);
      this.containerWidth = parseFloat(style.width);
      this.containerHeight = parseFloat(style.height);
      this.maxPos = window.innerWidth - this.containerWidth;
      this.positionX = Math.min(this.positionX, this.maxPos);
      this.container.style.left = `${this.positionX}px`;
    };
    window.addEventListener('resize', this.resizeHandler);

    // enable mouse hover and drag interactions
    this.enablePetInteraction();
    this.enableDragInteraction();
  }

  // shuffle array for random action order
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  }

  // flip sprite horizontally depending on facing
  updateImageDirection() {
    this.img.style.transform = this.facing === 'left' ? 'scaleX(1)' : 'scaleX(-1)';
  }

  // pick a random left/right direction to walk off in and sync the visual
  // facing to match. called whenever a walk-type action starts fresh so
  // creatures actually wander both ways instead of drifting rightward
  // forever (this.direction previously only ever changed when bouncing off
  // the literal window edge or starting a climb, so anything that only
  // ever walked on platforms — which drop creatures off the edge instead of
  // turning them around — never went left).
  randomizeWalkDirection() {
    this.direction = Math.random() < 0.5 ? -1 : 1;
    this.facing = this.direction === 1 ? 'right' : 'left';
    this.updateImageDirection();
  }

  // update facing from horizontal delta (dx)
  setFacingFromDelta(dx) {
    if (dx && !this.isDragging) {
      this.facing = dx < 0 ? 'left' : 'right';
      this.updateImageDirection();
    }
  }

  // stop current animation timers
  resetAnimation() {
    clearInterval(this.frameTimer);
    clearTimeout(this.actionCompletionTimer);
    this.currentFrame = 0;
    this.frameTimer = null;
    this.actionCompletionTimer = null;
  }

  // cancel all timers and animation frames
  clearAllTimers() {
    this.resetAnimation();
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  // check if edge is left/right
  isSideEdge(edge) { return edge === 'left' || edge === 'right'; }
  // check if edge is anything except bottom
  isNonBottomEdge(edge) { return edge !== 'bottom'; }

  // update container class for current edge
  updateEdgeClass() {
    this.container.classList.remove('edge-left', 'edge-right', 'edge-top');
    if (!this.isDragging) {
      this.currentEdge === 'left' && this.container.classList.add('edge-left');
      this.currentEdge === 'right' && this.container.classList.add('edge-right');
      this.currentEdge === 'top' && this.container.classList.add('edge-top');
    }
    this.applyEdgeOffset(); // adjust position based on edge
  }

  // pixel offset applied when resting/hanging on a given edge (0,0 for
  // 'bottom' — i.e. standing on the floor or a walkable platform). shared
  // by applyEdgeOffset() (persistent offset while resting) and by the jump
  // trajectories below, so a jump can blend smoothly *into* this offset
  // instead of snapping to it the instant the jump ends.
  edgeOffset(edge) {
    return {
      x: edge === 'left' ? -this.containerWidth / 2 :
        edge === 'right' ? this.containerWidth / 2 : 0, // was containerHeight — fixed mismatched offset on right-wall landings
      y: edge === 'top' ? -this.containerHeight / 2 : 0
    };
  }

  // apply offsets when at edge to align sprite properly
  applyEdgeOffset() {
    if (this.isDragging) return this.container.style.cssText = `left:${this.positionX}px;top:${this.positionY}px`;

    const { x: offsetX, y: offsetY } = this.edgeOffset(this.currentEdge);

    this.container.style.left = `${(this.positionX || 0) + offsetX}px`;
    this.container.style.top = `${(this.positionY || 0) + offsetY}px`;
  }

  // brief squash/stretch on hard impacts, purely cosmetic
  playLandingSquash(intensity) {
    if (!this.container) return;
    const amount = Math.min(Math.max(intensity, 0), 0.35);
    const squash = 1 - amount;
    const stretch = 1 + amount;
    this.container.style.transition = 'transform 90ms ease-out';
    this.container.style.transform = `scaleX(${stretch}) scaleY(${squash})`;
    setTimeout(() => {
      if (this.container) this.container.style.transform = 'scaleX(1) scaleY(1)';
    }, 90);
  }

  // ---------------------------------------------------------------------
  // walkable-platform helpers
  // ---------------------------------------------------------------------

  // horizontal bounds of whatever surface the creature is currently standing
  // on — a walkable div's own left/right if standing on one, otherwise the
  // window's edges
  getFloorBounds() {
    return this.currentPlatform
      ? { left: this.currentPlatform.left, right: this.currentPlatform.right - this.containerWidth }
      : { left: 0, right: this.maxPos };
  }

  // re-reads the live position of the platform the creature is standing on
  // (if any) every frame, so it stays correctly stuck to it through
  // scrolling, resizing, or the div itself moving. if the div vanished,
  // sends the creature falling.
  syncToPlatform() {
    if (!this.currentPlatform) return;
    const fresh = WalkableManager.liveRectFor(this.currentPlatform.el);
    if (!fresh) {
      this.currentPlatform = null;
      this.startFallOffPlatform(0);
      return;
    }
    this.currentPlatform = fresh;
    this.positionY = fresh.top - this.containerHeight;
    const bounds = this.getFloorBounds();
    this.positionX = Math.min(Math.max(this.positionX, bounds.left), Math.max(bounds.left, bounds.right));
    this.applyEdgeOffset();
  }

  // walked past the edge of the platform they were standing on — drop off
  // with a little horizontal momentum in the direction they were walking
  startFallOffPlatform(carryDirection = this.direction) {
    if (this.isFalling) return;
    const leavingPlatformEl = this.currentPlatform?.el || null;
    this.currentPlatform = null;
    this.resetAnimation();
    // exclude the platform they're stepping off of from landing checks —
    // without this, the moment they cross the edge their center point is
    // still technically over that same platform's rect (only their leading
    // foot has actually cleared it), so findImmediateLanding() caught them
    // and "landed" them right back where they started, one frame later,
    // making platform edges look like they just eat any attempt to leave
    this.fallToBottom(carryDirection * this.spriteConfig.walkspeed * 0.6, 0, leavingPlatformEl);
  }

  // finds a walkable platform worth jumping to from where the creature
  // currently is — used both from the window floor (climb up onto one) and
  // from atop a platform (hop to a different one)
  findNearbyPlatform() {
    const reach = 260; // px — how far off to either side they'll consider jumping
    const centerX = this.positionX + this.containerWidth / 2;
    const candidates = WalkableManager.rects.filter(r => {
      if (this.currentPlatform && r.el === this.currentPlatform.el) return false; // already there
      return centerX >= r.left - reach && centerX <= r.right + reach;
    });
    if (!candidates.length) return null;
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  // finds a walkable platform sitting near a given window edge (top/left/
  // right), within normal jump reach. used so a "jump to the roof/wall"
  // prefers landing on top of an object that's already up there instead of
  // flying past/into it toward the literal window edge — which is what made
  // a walkable div placed near the roof cause creatures to get stuck instead
  // of standing on it (they only ever stand on the TOP of a walkable
  // element, same as any other platform; this just makes sure a roof/wall
  // jump actually aims for that top surface when one is in the way).
  platformNearEdge(edge) {
    const reach = 260;       // px — how far off to either side they'll consider jumping
    const closeMargin = 160; // px — how close to the literal window edge counts as "in the way of it"
    const centerX = this.positionX + this.containerWidth / 2;
    const centerY = this.positionY + this.containerHeight / 2;

    const candidates = WalkableManager.rects.filter(r => {
      if (edge === 'top') return r.top <= closeMargin && centerX >= r.left - reach && centerX <= r.right + reach;
      if (edge === 'left') return r.left <= closeMargin && centerY >= r.top - reach && centerY <= r.bottom + reach;
      if (edge === 'right') return r.right >= window.innerWidth - closeMargin && centerY >= r.top - reach && centerY <= r.bottom + reach;
      return false;
    });
    if (!candidates.length) return null;
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  // parabolic jump onto a walkable platform's top surface — reuses the same
  // "solve initial velocity to land exactly on target after a fixed time"
  // approach as jumpToEdge, just aimed at a div instead of a screen edge
  jumpToPlatform(rect) {
    if (this.isFalling || this.isPetting || this.isDragging || this.isJumping) return;

    this.isJumping = true;
    // if hopping from one platform to another, drop the old one immediately —
    // otherwise the main animate() loop keeps calling syncToPlatform() every
    // frame for the OLD platform for the whole flight (it doesn't know a
    // jump is in progress), which kept re-snapping position back to the old
    // spot and fighting this function's own trajectory updates. that's what
    // caused the jump animation to play in place and then "teleport" once
    // landing finally overwrote currentPlatform with the new target.
    this.currentPlatform = null;
    this.resetAnimation();

    const jumpConfig = this.spriteConfig.jump;
    if (!jumpConfig) { this.isJumping = false; return; }

    const startX = this.positionX;
    const startY = this.positionY;
    // land somewhere across the platform's usable width, not just wherever
    // the jumper's current x happens to clamp to — clamping alone meant
    // every creature approaching from outside the platform (very common,
    // since they roam the whole window but platforms are usually narrower)
    // landed at the exact same edge pixel and visibly piled up there.
    const platformLeft = rect.left;
    const platformRight = Math.max(rect.left, rect.right - this.containerWidth);
    const endX = platformLeft + Math.random() * (platformRight - platformLeft);
    const endY = rect.top - this.containerHeight;

    const dx = endX - startX;
    const dy = endY - startY;
    const distance = Math.hypot(dx, dy);

    if (distance === 0) { this.isJumping = false; return; }

    // clamp hang-time: without this, a long-distance jump (e.g. hopping to a
    // far-off platform) produces a huge duration, which forces vy0 to solve
    // for an absurdly high launch to stay airborne that long — that's the
    // "flies into the air" bug. Capping duration keeps the arc sane no
    // matter how far the target is; horizontal speed just goes up instead.
    const duration = Math.min(distance / this.spriteConfig.jumpspeed, this.spriteConfig.maxJumpDuration || 1.1);
    const g = this.physics.gravity;

    const vx0 = dx / duration;
    const vy0 = (dy - 0.5 * g * duration * duration) / duration;

    const startTime = performance.now();

    let frameIndex = 0;
    const totalFrames = jumpConfig.frames.length;
    this.img.src = jumpConfig.frames[frameIndex];

    const frameTimer = setInterval(() => {
      frameIndex = (frameIndex + 1) % totalFrames;
      this.img.src = jumpConfig.frames[frameIndex];
    }, jumpConfig.interval);

    const step = (time) => {
      if (this.isDragging) {
        clearInterval(frameTimer);
        this.isJumping = false;
        return;
      }

      const t = Math.min((time - startTime) / 1000, duration);

      this.positionX = startX + vx0 * t;
      this.positionY = startY + vy0 * t + 0.5 * g * t * t;

      if (vx0 !== 0) this.setFacingFromDelta(vx0);

      this.container.style.left = `${this.positionX}px`;
      this.container.style.top = `${this.positionY}px`;

      if (t < duration) {
        requestAnimationFrame(step);
      } else {
        clearInterval(frameTimer);
        this.isJumping = false;
        this.positionX = endX;
        this.positionY = endY;
        this.currentPlatform = rect;
        this.currentEdge = 'bottom';
        this.updateEdgeClass();
        this.forceWalkAfter = true;
        this.setNextAction();
      }
    };
    requestAnimationFrame(step);
  }

  // jump to another edge (top, left, right) using a real parabolic trajectory
  jumpToEdge(targetEdge) {
    if (this.isFalling || this.isPetting || this.isDragging || this.isJumping) return; // ignore if busy
    if (!this.spriteConfig.ALLOWANCES.includes(targetEdge)) return; // edge not allowed

    this.isJumping = true;
    this.resetAnimation();

    const jumpConfig = this.spriteConfig.jump;
    if (!jumpConfig) { this.isJumping = false; return; }

    const startX = this.positionX;
    const startY = this.positionY;
    let endX = startX;
    let endY = startY;

    switch (targetEdge) {
      case 'top':
        endY = 0;
        endX = Math.random() * (window.innerWidth - this.containerWidth); // random horizontal
        break;
      case 'left':
        endX = 0;
        endY = Math.random() * (window.innerHeight - this.containerHeight); // random vertical
        break;
      case 'right':
        endX = window.innerWidth - this.containerWidth;
        endY = Math.random() * (window.innerHeight - this.containerHeight); // random vertical
        break;
    }

    const dx = endX - startX;
    const dy = endY - startY;
    const distance = Math.hypot(dx, dy); // calculate distance for speed

    if (distance === 0) { this.isJumping = false; return; }

    // same hang-time clamp as jumpToPlatform — prevents huge distances (e.g.
    // launching to the top edge from across the screen) from demanding a
    // rocket-high launch velocity just to stay up long enough
    const duration = Math.min(distance / this.spriteConfig.jumpspeed, this.spriteConfig.maxJumpDuration || 1.1);
    const g = this.physics.gravity;

    // solve for the initial velocity that lands exactly on the target after
    // `duration` seconds under constant gravity — gives a real arcing jump
    // instead of a straight-line lerp between the two points
    const vx0 = dx / duration;
    const vy0 = (dy - 0.5 * g * duration * duration) / duration;

    // resting on an edge (top/left/right) draws the sprite offset by half its
    // own size, to look like it's actually hanging off that edge. previously
    // that offset only got applied the instant the jump finished (via
    // updateEdgeClass -> applyEdgeOffset), which produced a visible snap —
    // the creature would land flush against the wall/roof mid-air, then jump
    // sideways/upward by half its width/height a frame later. blending the
    // offset in over the course of the jump (0 at takeoff, full on arrival)
    // removes that discontinuity entirely.
    const startOffset = this.edgeOffset(this.currentEdge);
    const endOffset = this.edgeOffset(targetEdge);

    const startTime = performance.now();

    // setup frame animation for jump
    let frameIndex = 0;
    const totalFrames = jumpConfig.frames.length;
    this.img.src = jumpConfig.frames[frameIndex];

    const frameTimer = setInterval(() => {
      frameIndex = (frameIndex + 1) % totalFrames;
      this.img.src = jumpConfig.frames[frameIndex];
    }, jumpConfig.interval);

    // animation loop for jump movement
    const step = (time) => {
      if (this.isDragging) {
        clearInterval(frameTimer);
        this.isJumping = false;
        return;
      }

      const t = Math.min((time - startTime) / 1000, duration); // clamp to [0, duration]
      const p = t / duration; // 0 -> 1 progress through the jump, used for the offset blend below

      this.positionX = startX + vx0 * t;
      this.positionY = startY + vy0 * t + 0.5 * g * t * t;

      if (vx0 !== 0) this.setFacingFromDelta(vx0);

      const renderX = this.positionX + startOffset.x + (endOffset.x - startOffset.x) * p;
      const renderY = this.positionY + startOffset.y + (endOffset.y - startOffset.y) * p;
      this.container.style.left = `${renderX}px`;
      this.container.style.top = `${renderY}px`;

      if (t < duration) {
        requestAnimationFrame(step);
      } else {
        clearInterval(frameTimer);
        this.isJumping = false;
        this.positionX = endX;
        this.positionY = endY;
        this.currentEdge = targetEdge;
        this.currentPlatform = null;
        this.updateEdgeClass(); // p was already 1 above, so this renders identically — no snap
        this.startEdgeIdle(); // start idle after landing
      }
    };
    requestAnimationFrame(step);
  }

  // start idle animation on edge
  startEdgeIdle() {
    this.updateEdgeClass();
    if (this.currentEdge === 'top') this.startAction('hangstillTop');
    else if (this.isSideEdge(this.currentEdge)) this.startAction('hangstillSide');
  }

  // pick random edge action: hang, climb, fall
  edgeAction() {
    if (this.isJumping || this.isFalling) return;
    const choice = this.spriteConfig.EDGE_ACTIONS[Math.floor(Math.random() * this.spriteConfig.EDGE_ACTIONS.length)];
    choice === 'hang' ? this.startEdgeIdle() :
      choice === 'climb' ? this.startAction(this.currentEdge === 'top' ? 'climbTop' : 'climbSide') :
        choice === 'fall' && this.fallToBottom();
  }

  // pixel-accurate hit test: is (clientX, clientY) actually over a
  // non-transparent pixel of the currently-displayed frame, accounting for
  // object-fit:contain + object-position:bottom-center (so the drawn image
  // usually doesn't fill the whole container) and the horizontal flip
  // applied when facing right? Falls back to permissive (true) if the
  // image isn't ready yet or the canvas can't be read (e.g. a cross-origin
  // sprite without CORS headers) so a broken hit-test never fully disables
  // interaction — it just loses the pixel-accuracy in that edge case.
  isOpaqueAtClientPoint(clientX, clientY, alphaThreshold = 20) {
    const rect = this.container.getBoundingClientRect();
    if (clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom) return false;

    const img = this.img;
    if (!img.complete || !img.naturalWidth || !img.naturalHeight) return true;

    const cw = rect.width;
    const ch = rect.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const scale = Math.min(cw / iw, ch / ih);
    const drawW = iw * scale;
    const drawH = ih * scale;
    const offsetX = (cw - drawW) / 2;   // object-position: center (horizontal)
    const offsetY = ch - drawH;         // object-position: bottom (vertical)

    let localX = clientX - rect.left - offsetX;
    let localY = clientY - rect.top - offsetY;

    // outside the actual drawn image — i.e. in the letterboxed padding
    // object-fit:contain leaves around it — counts as transparent
    if (localX < 0 || localY < 0 || localX > drawW || localY > drawH) return false;

    if (this.facing !== 'left') localX = drawW - localX; // undo the scaleX(-1) flip

    const px = Math.min(iw - 1, Math.max(0, Math.floor(localX / scale)));
    const py = Math.min(ih - 1, Math.max(0, Math.floor(localY / scale)));

    if (this.hitCanvas.width !== iw || this.hitCanvas.height !== ih || this.hitCanvasSrc !== img.src) {
      this.hitCanvas.width = iw;
      this.hitCanvas.height = ih;
      const drawCtx = this.hitCanvas.getContext('2d');
      drawCtx.clearRect(0, 0, iw, ih);
      try {
        drawCtx.drawImage(img, 0, 0, iw, ih);
      } catch (e) {
        return true;
      }
      this.hitCanvasSrc = img.src;
    }

    try {
      const alpha = this.hitCanvas.getContext('2d').getImageData(px, py, 1, 1).data[3];
      return alpha > alphaThreshold;
    } catch (e) {
      return true;
    }
  }

  // user interactions ---------------------------------------------------
  // petting animation when hovering
  enablePetInteraction() {
    if (!this.spriteConfig.ALLOWANCES?.includes('pet') || !this.spriteConfig.ALLOWANCES?.includes('bottom')) return;

    this.container.addEventListener('mouseenter', (e) => {
      if (this.isFalling || this.isPointerDown || this.isPetting || this.isJumping || this.currentEdge !== 'bottom') return;
      if (!this.isOpaqueAtClientPoint(e.clientX, e.clientY)) return;
      this.isPetting = true;
      this.wasActionBeforePet = this.currentAction;
      this.startPetAnimation();
    });
    this.container.addEventListener('mouseleave', () => {
      if (this.isFalling || this.isPointerDown || this.isJumping || this.currentEdge === 'top') return;
      this.isPetting = false;
      this.stopPetAnimation();
    });
  }

  // track recent pointer samples while dragging, used to compute throw velocity on release
  recordDragPoint(x, y) {
    const now = performance.now();
    this.dragHistory.push({ x, y, t: now });
    const cutoff = now - 120; // only keep the last 120ms of movement
    while (this.dragHistory.length > 1 && this.dragHistory[0].t < cutoff) {
      this.dragHistory.shift();
    }
  }

  // derive a release velocity (px/s) from the recent drag history
  computeReleaseVelocity() {
    if (this.dragHistory.length < 2) return { vx: 0, vy: 0 };
    const first = this.dragHistory[0];
    const last = this.dragHistory[this.dragHistory.length - 1];
    const dt = (last.t - first.t) / 1000;
    if (dt <= 0) return { vx: 0, vy: 0 };
    return {
      vx: (last.x - first.x) / dt,
      vy: (last.y - first.y) / dt
    };
  }

  // dragging animation and pointer tracking
  enableDragInteraction() {
    if (!this.spriteConfig.ALLOWANCES?.includes('drag')) return;
    if (!this.spriteConfig.ALLOWANCES?.includes('bottom')) return;

    // listen to pointer down to start drag
    this.container.addEventListener('mousedown', (e) => {
      if (!this.isOpaqueAtClientPoint(e.clientX, e.clientY)) return;
      e.preventDefault();
      this.startDrag(e.clientX, e.clientY);
    });

    // touch has no hover state to pre-toggle the container's pointer-events
    // on, so a listener on the container itself could miss the very first
    // touch. A window-level listener does its own bounding-box + opacity
    // check instead, independent of the container's current pointer-events.
    this.touchStartHandler = (e) => {
      if (this.isDragging) return;
      const touch = e.touches[0];
      if (!touch) return;
      if (!this.isOpaqueAtClientPoint(touch.clientX, touch.clientY)) return;
      e.preventDefault();
      this.startDrag(touch.clientX, touch.clientY);
    };
    window.addEventListener('touchstart', this.touchStartHandler, { passive: false });

    // actual drag logic
    this.startDrag = (clientX, clientY) => {
      this.resetAnimation();

      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = null;
      }

      this.isDragging = true;
      this.tripAfterFallActive = false;
      this.isJumping = false;
      this.isFalling = false;
      this.isPetting = false;
      this.currentPlatform = null;
      this.dragHistory = [];

      this.currentAction = 'drag';
      this.img.style.transform = this.facing === 'left' ? 'scaleX(1)' : 'scaleX(-1)';

      if (this.dragFrameTimer) clearInterval(this.dragFrameTimer);

      const dragConfig = this.spriteConfig.drag;
      if (dragConfig?.frames?.length) {
        let frame = 0;
        this.img.src = dragConfig.frames[0];

        this.dragFrameTimer = setInterval(() => {
          frame = (frame + 1) % dragConfig.frames.length;
          this.img.src = dragConfig.frames[frame];
        }, dragConfig.interval);
      }

      const rect = this.container.getBoundingClientRect();
      let offsetX = clientX - rect.left;  // remember grab offset
      let offsetY = clientY - rect.top;

      this.recordDragPoint(clientX, clientY);

      const onPointerMove = (e) => {
        e.preventDefault();

        let clientX = e.clientX ?? e.touches?.[0].clientX;
        let clientY = e.clientY ?? e.touches?.[0].clientY;

        this.positionX = clientX - offsetX;
        this.positionY = clientY - offsetY;

        // clamp to window
        this.positionX = Math.max(0, Math.min(this.positionX, window.innerWidth - this.containerWidth));
        this.positionY = Math.max(0, Math.min(this.positionY, window.innerHeight - this.containerHeight));

        this.container.style.left = this.positionX + 'px';
        this.container.style.top = this.positionY + 'px';

        this.recordDragPoint(clientX, clientY);
      };

      const onPointerUp = () => {
        window.removeEventListener('mousemove', onPointerMove);
        window.removeEventListener('touchmove', onPointerMove);
        window.removeEventListener('mouseup', onPointerUp);
        window.removeEventListener('touchend', onPointerUp);

        this.isDragging = false;
        this.isFalling = false;

        // stop drag animation
        if (this.dragFrameTimer) {
          clearInterval(this.dragFrameTimer);
          this.dragFrameTimer = null;
        }

        // work out how fast it was moving right before release, and throw it
        // with that momentum instead of just dropping it straight down
        const { vx, vy } = this.computeReleaseVelocity();
        this.dragHistory = [];

        this.resetAnimation();
        this.fallToBottom(vx, vy);

        this.animationFrameId = requestAnimationFrame(this.animate);
      };

      window.addEventListener('mousemove', onPointerMove);
      window.addEventListener('touchmove', onPointerMove, { passive: false });
      window.addEventListener('mouseup', onPointerUp);
      window.addEventListener('touchend', onPointerUp);
    };
  }

  // is the creature, right now, already resting on or embedded in a surface
  // (window floor or a walkable platform's top)? checked once before a
  // fall/throw starts falling — the frame-by-frame crossing check in
  // fallToBottom only notices a surface the creature falls *through* over
  // the course of a frame, so a drag that ends with the creature dropped
  // straight onto (or slightly into) a shelf never registers as landing on
  // it there — it just carries on falling past it to the floor below.
  findImmediateLanding(excludeEl = null) {
    const centerX = this.positionX + this.containerWidth / 2;
    const winFloorY = window.innerHeight - this.containerHeight;
    let best = null;

    WalkableManager.rects.forEach(r => {
      if (excludeEl && r.el === excludeEl) return; // don't re-catch the platform we're actively leaving
      if (centerX < r.left || centerX > r.right) return;
      const floorY = r.top - this.containerHeight;
      // "on/inside it" = feet are at or just past its surface, but not
      // already fallen all the way through to below it
      if (this.positionY >= floorY - 1 && this.positionY <= floorY + this.containerHeight) {
        if (!best || floorY < best.floorY) best = { floorY, platform: r };
      }
    });

    if (this.positionY >= winFloorY - 1 && (!best || winFloorY < best.floorY)) {
      best = { floorY: winFloorY, platform: null };
    }
    return best;
  }

  // (re)starts the falling animation loop from its first frame
  startFallingAnimation() {
    const cfg = this.spriteConfig.falling;
    if (!cfg) return;
    let frameIndex = 0;
    this.img.src = cfg.frames[0];
    if (this.frameTimer) clearInterval(this.frameTimer);
    this.frameTimer = setInterval(() => {
      frameIndex = (frameIndex + 1) % cfg.frames.length;
      this.img.src = cfg.frames[frameIndex];
    }, cfg.interval);
  }

  // shows the fallen/get-up animation's first frame the moment the creature
  // hits the ground — the same pose the full get-up animation opens on —
  // and holds it there through any further bounces. Only once they actually
  // come to rest does playTripAfterFall take over and continue seamlessly
  // from that same frame into the rest of the get-up animation.
  playBounceImpactPose() {
    const tripConfig = this.spriteConfig.fallen;
    if (!tripConfig) return;
    if (this.frameTimer) { clearInterval(this.frameTimer); this.frameTimer = null; }
    this.img.src = tripConfig.frames[0];
  }

  // bounces (if fast enough) or settles onto a given landing spot
  // ({floorY, platform}). shared by the immediate-landing check and the
  // per-frame fall loop below so both handle impacts identically. returns
  // true once the creature has actually come to rest there.
  resolveLanding(landing) {
    const { bounceDamping, groundFriction, minBounceVelocity, terminalVelocity } = this.physics;
    this.positionY = landing.floorY;
    const impactSpeed = Math.abs(this.velocityY);

    if (impactSpeed > minBounceVelocity) {
      this.playLandingSquash(impactSpeed / terminalVelocity);
      this.velocityY = -this.velocityY * bounceDamping;
      this.velocityX *= groundFriction;
      this.playBounceImpactPose();
      return false;
    }

    this.velocityX = 0;
    this.velocityY = 0;
    this.currentPlatform = landing.platform;
    this.container.style.left = `${this.positionX}px`;
    this.container.style.top = `${this.positionY}px`;
    return true;
  }

  // falling and recovery -------------------------------------------------
  // gravity-driven fall with optional initial velocity (used for both a plain
  // "slip off an edge" fall and a thrown-after-drag fall). bounces off the
  // floor and side walls with damping until it settles, then plays the
  // fallen/trip animation. lands on the window floor OR the top of any
  // walkable div it crosses on the way down, whichever it reaches first.
  fallToBottom(initialVX = 0, initialVY = 0, excludeEl = null) {
    if (this.isFalling) return;
    this.tripAfterFallActive = false;
    this.isFalling = true;
    this.currentEdge = 'bottom';
    this.currentPlatform = null;
    this.updateEdgeClass();
    this.resetAnimation();

    this.startFallingAnimation();

    this.velocityX = initialVX;
    this.velocityY = initialVY;

    // if released/thrown while already resting on or inside a surface (most
    // commonly: dropped straight onto a walkable div) settle immediately
    // instead of requiring gravity to carry it further down through that
    // surface first before the normal per-frame check would ever notice it
    if (this.velocityY >= 0) {
      const immediate = this.findImmediateLanding(excludeEl);
      if (immediate && this.resolveLanding(immediate)) {
        if (this.frameTimer) { clearInterval(this.frameTimer); this.frameTimer = null; }
        this.playTripAfterFall();
        return;
      }
      // a hard throw straight down into a surface bounces instead of
      // settling — resolveLanding already updated position/velocity for
      // that bounce above, so just fall through into the normal loop below
    }

    const { gravity, wallDamping, bounceDamping, groundFriction, minBounceVelocity, terminalVelocity, airDrag } = this.physics;

    let lastTime = performance.now();

    const step = (time) => {
      if (this.isDragging) {
        if (this.frameTimer) { clearInterval(this.frameTimer); this.frameTimer = null; }
        return this.animationFrameId = requestAnimationFrame(this.animate);
      }

      // clamp dt so a backgrounded/inactive tab doesn't cause a huge jump on return
      const dt = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      // integrate gravity
      this.velocityY = Math.min(this.velocityY + gravity * dt, terminalVelocity);
      // airDrag is tuned as a "per frame at 60fps" decay factor — raising it
      // to the power of (dt*60) makes the actual decay rate consistent
      // whether the browser is running at 60hz, 144hz, or a stuttery 30hz,
      // instead of draining speed faster/slower depending on refresh rate
      this.velocityX *= Math.pow(airDrag, dt * 60);

      const prevY = this.positionY;
      this.positionX += this.velocityX * dt;
      this.positionY += this.velocityY * dt;

      // side wall collisions (window edges — walkable divs don't bounce
      // sideways, creatures just walk/fall off their edges instead)
      if (this.positionX <= 0) {
        this.positionX = 0;
        this.velocityX = -this.velocityX * wallDamping;
      } else if (this.positionX >= this.maxPos) {
        this.positionX = this.maxPos;
        this.velocityX = -this.velocityX * wallDamping;
      }

      // find the nearest surface (window floor or a walkable div's top)
      // that gets crossed this frame, if any
      let landing = null;
      if (this.velocityY >= 0) {
        const centerX = this.positionX + this.containerWidth / 2;

        const winFloorY = window.innerHeight - this.containerHeight;
        if (prevY <= winFloorY && this.positionY >= winFloorY) {
          landing = { floorY: winFloorY, platform: null };
        }

        WalkableManager.rects.forEach(r => {
          if (excludeEl && r.el === excludeEl) return;
          if (centerX < r.left || centerX > r.right) return;
          const platFloorY = r.top - this.containerHeight;
          if (prevY <= platFloorY && this.positionY >= platFloorY) {
            if (!landing || platFloorY < landing.floorY) {
              landing = { floorY: platFloorY, platform: r };
            }
          }
        });
      }

      // floor collision
      if (landing && this.resolveLanding(landing)) {
        if (this.frameTimer) { clearInterval(this.frameTimer); this.frameTimer = null; }
        return this.playTripAfterFall();
      }

      if (this.velocityX) this.setFacingFromDelta(this.velocityX);

      this.container.style.left = `${this.positionX}px`;
      this.container.style.top = `${this.positionY}px`;

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }

  // play fallen/trip animation after landing
  playTripAfterFall() {
    const tripConfig = this.spriteConfig.fallen;
    if (!tripConfig) {
      this.resumeAfterFallen();
      return;
    }

    this.tripAfterFallActive = true;
    let frame = 0;
    const totalFrames = tripConfig.frames.length;
    this.img.src = tripConfig.frames[0];

    const frameTimer = setInterval(() => {
      frame++;

      if (frame >= totalFrames) {
        clearInterval(frameTimer);
        this.img.src = tripConfig.frames[totalFrames - 1];

        setTimeout(() => {
          if (this.tripAfterFallActive) this.resumeAfterFallen();
        }, this.spriteConfig.gettingupspeed);
      } else {
        this.img.src = tripConfig.frames[frame];
      }
    }, tripConfig.interval);
  }

  // continue normal actions after fall
  resumeAfterFallen() {
    if (this.isDragging) return;
    this.isFalling = false;
    this.isPetting = false;
    this.resetAnimation();
    this.lastTime = performance.now();
    this.currentAction = 'sit';
    this.setNextAction();
    this.animationFrameId = requestAnimationFrame(this.animate);
  }

  // action selection and animation --------------------------------------------------
  // pick next action based on edge, jump chance, or forced actions
  // If on an edge choose edge behavior -> Random chance to jump (screen edge or a
  // walkable platform) -> Forced walk / forced think -> Pick next action from shuffled list
  setNextAction() {
    if (this.isDragging || this.isFalling) return;

    this.resetAnimation();

    if (['top', 'left', 'right'].includes(this.currentEdge)) {
      this.edgeAction();
      return;
    }

    if (!this.isJumping && this.currentEdge === 'bottom') {
      const atWindowFloor = this.currentPlatform === null && this.positionY >= window.innerHeight - this.containerHeight;

      // chance to jump to a window edge (top/left/right) — only from the window floor
      if (atWindowFloor && Math.random() < this.spriteConfig.JUMP_CHANCE) {
        const edges = ['top', 'left', 'right']
          .filter(e => this.spriteConfig.ALLOWANCES.includes(e));

        if (edges.length) {
          const target = edges[Math.floor(Math.random() * edges.length)]; // random coordinate on edge

          // if a walkable object sits right where this jump is headed (e.g.
          // a walkable div near the roof), land on top of it instead of
          // flying at the literal window edge and getting stuck against it
          const blockingPlatform = this.platformNearEdge(target);
          if (blockingPlatform) {
            this.jumpToPlatform(blockingPlatform);
          } else {
            this.jumpToEdge(target);
          }
          return;
        }
      }

      // chance to jump onto a nearby walkable platform — from the window
      // floor, or hop from the platform they're already standing on to
      // a different one
      if (Math.random() < Math.min(1, this.spriteConfig.JUMP_CHANCE * PLATFORM_JUMP_BOOST)) {
        const target = this.findNearbyPlatform();
        if (target) {
          this.jumpToPlatform(target);
          return;
        }
      }
    }

    if (this.forceWalkAfter) {
      this.forceWalkAfter = false;
      this.startForcedWalk();
      return;
    }

    if (this.forceThinkAfter) {
      this.forceThinkAfter = false;
      this.startForceThink();
      return;
    }

    this.currentActionIndex++;
    if (this.currentActionIndex >= this.actionSequence.length) {
      this.currentActionIndex = 0;
      this.actionSequence = this.shuffle([...this.spriteConfig.ORIGINAL_ACTIONS]);
    }

    this.currentAction = this.actionSequence[this.currentActionIndex];
    this.startAction(this.currentAction);
  }

  // force walk for a number of cycles
  startForcedWalk() {
    const { frames, interval } = this.spriteConfig.walk;
    const walkCycles = this.spriteConfig.forcewalk;
    this.currentAction = 'forced-walk';
    this.randomizeWalkDirection();
    this.playAnimation(frames, interval, walkCycles, () => this.setNextAction());
  }

  // force think for a number of cycles
  startForceThink() {
    const { frames, interval, loops } = this.spriteConfig.forcethink;
    this.currentAction = 'force-think';
    this.playAnimation(frames, interval, loops, () => this.setNextAction());
  }

  // pet animation loop
  startPetAnimation() {
    this.resetAnimation();

    const petConfig = this.spriteConfig.pet;
    if (!petConfig) return;

    this.currentAction = 'pet';
    let frame = 0;
    this.img.src = petConfig.frames[0];

    this.frameTimer = setInterval(() => {
      frame = (frame + 1) % petConfig.frames.length;
      this.img.src = petConfig.frames[frame];
    }, petConfig.interval);
  }

  // stop pet animation
  stopPetAnimation() {
    this.resetAnimation();
    this.currentAction = this.wasActionBeforePet || 'sit';
    this.wasActionBeforePet = null;
    this.setNextAction();
  }

  // start a given action (handles direction, frames, loops, and special cases)
  startAction(action) {
    if (this.isDragging || this.isFalling) return;
    this.currentAction = action;
    this.resetAnimation();

    if (action === 'walk') {
      this.randomizeWalkDirection();
    }
    if (action === 'climbTop') {
      this.direction = Math.random() < 0.5 ? -1 : 1;
      this.updateImageDirection();
    }
    if (action === 'climbSide') {
      this.direction = Math.random() < 0.5 ? -1 : 1;
    }
    if (this.isJumping) {
      this.animationFrameId = requestAnimationFrame(this.animate);
      return;
    }

    const config = this.spriteConfig[action];
    if (!config) return;

    const { frames, interval, loops = 1, sound, soundVolume } = config;
    if (sound) this.playSound(sound, soundVolume);

    if (action === 'sit' || action === 'hangstillSide' || action === 'hangstillTop') {
      const duration = config.randomizeDuration
        ? Math.random() * (config.max - config.min) + config.min
        : interval * loops;
      this.img.src = frames[0];
      this.actionCompletionTimer = setTimeout(() => {
        this.forceWalkAfter = true;
        this.setNextAction();
      }, duration);
      return;
    }

    this.playAnimation(frames, interval, loops, () => {
      if (action === 'spin') {
        this.direction *= -1;
        this.facing = this.facing === 'left' ? 'right' : 'left';
        this.updateImageDirection();
      }

      // force-actions can be set here
      if (['trip', 'spin'].includes(action)) this.forceWalkAfter = true;
      if (action === 'dance') this.forceThinkAfter = true;

      this.setNextAction();
    });
  }

  // plays an optional sound effect for an action; tolerates missing/blocked audio
  playSound(src, volume = 0.6) {
    if (!window._webmejiAudioCache) window._webmejiAudioCache = {};
    const cache = window._webmejiAudioCache;
    let base = cache[src];
    if (!base) {
      base = new Audio(src);
      cache[src] = base;
    }
    const a = base.cloneNode(true); // clone so overlapping plays don't cut each other off
    a.volume = volume;
    a.play().catch(() => { }); // ignore autoplay-blocked errors
  }

  // helper to play a sequence of frames for a given number of loops
  playAnimation(frames, interval, loops, onComplete) {
    let playCount = 0, f = 0;
    this.currentFrame = 0;
    this.img.src = frames[0];
    if (this.frameTimer) clearInterval(this.frameTimer);

    this.frameTimer = setInterval(() => {
      this.currentFrame = f = (f + 1) % frames.length;
      this.img.src = frames[f];
      if (f === frames.length - 1 && ++playCount >= loops) {
        clearInterval(this.frameTimer);
        this.frameTimer = null;
        this.currentAction = null;
        this.actionCompletionTimer = setTimeout(onComplete, 0);
      }
    }, interval);
  }

  // main animation loop --------------------------------------------------
  animate(time) {
    if (!this.lastTime) this.lastTime = time;
    const delta = (time - this.lastTime) / 1000;
    this.lastTime = time;
    if (this.isDragging || this.isFalling || this.isJumping) {
      this.animationFrameId = requestAnimationFrame(this.animate);
      return;
    }

    // keep the creature glued to its platform (handles scroll/resize/move)
    // before doing any movement math this frame
    this.syncToPlatform();

    if (this.currentAction === 'walk' && Math.random() < WALK_TURN_CHANCE * delta) {
      this.direction *= -1;
      this.facing = this.facing === 'left' ? 'right' : 'left';
      this.updateImageDirection();
    }

    const movingActions = ['walk', 'forced-walk', 'climbTop']; // add actions with horizontal movement here
    if (movingActions.includes(this.currentAction)) {
      const dx = this.direction * this.spriteConfig.walkspeed * delta;
      this.positionX += dx;
      this.setFacingFromDelta(dx);

      // walking on top of a walkable div uses its bounds; walking on the
      // window floor uses the window's bounds like before
      const bounds = (this.currentAction === 'climbTop') ? { left: 0, right: this.maxPos } : this.getFloorBounds();

      if (this.positionX <= bounds.left) {
        this.positionX = bounds.left;
        if (this.currentPlatform && this.currentAction !== 'climbTop') {
          this.startFallOffPlatform(-1);
        } else {
          this.direction = 1;
          this.facing = 'right';
          this.updateImageDirection();
        }
      } else if (this.positionX >= bounds.right) {
        this.positionX = bounds.right;
        if (this.currentPlatform && this.currentAction !== 'climbTop') {
          this.startFallOffPlatform(1);
        } else {
          this.direction = -1;
          this.facing = 'left';
          this.updateImageDirection();
        }
      }
      this.applyEdgeOffset();
    }

    if (this.currentAction === 'climbSide') {
      this.positionY += this.direction * this.spriteConfig.walkspeed * delta;

      if (this.currentEdge === 'left') {
        this.facing = 'left';
      } else if (this.currentEdge === 'right') {
        this.facing = 'right';
      }
      this.updateImageDirection();

      // flips sprites and movement direction upon reaching a wall
      const maxY = window.innerHeight - this.containerHeight;
      if (this.positionY <= 0) {
        this.positionY = 0;
        this.direction = 1;
      } else if (this.positionY >= maxY) {
        this.positionY = maxY;
        this.direction = -1;
      }
      this.applyEdgeOffset();
    }
    this.animationFrameId = requestAnimationFrame(this.animate);
  }
}
