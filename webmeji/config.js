window.SPAWNING = [
  { id: 'ralsei', config: 'Ralsei_CONFIG' },
  { id: 'lancer', config: 'Lancer_CONFIG' },
  { id: 'kris', config: 'Kris_CONFIG' },
  { id: 'aqua', config: 'Aqua_CONFIG' },
  { id: 'flowery', config: 'Flowery_CONFIG' },
  { id: 'noelle', config: 'Noelle_CONFIG' },
  { id: 'miku', config: 'Miku_CONFIG' },
  { id: 'pink', config: 'Pink_CONFIG' },
  { id: 'spamton', config: 'Spamton_CONFIG' },
  { id: 'susie', config: 'Susie_CONFIG' }
];

const GLOBAL_SCALE_MULTIPLIER = 0.6;

window.Ralsei_CONFIG = {
  "ALLOWANCES": [
    "pet",
    "drag",
    "bottom",
    "top",
    "left",
    "right"
  ],
  "scale": 1.1,
  "walkspeed": 50,
  "fallspeed": 150,
  "jumpspeed": 250,
  "gettingupspeed": 3500,
  "walk": {
    "frames": [
      "shimeji/Ralsei/walk/shime1.png",
      "shimeji/Ralsei/walk/shime2.png",
      "shimeji/Ralsei/walk/shime3.png",
      "shimeji/Ralsei/walk/shime4.png",
      "shimeji/Ralsei/walk/shime5.png",
      "shimeji/Ralsei/walk/shime6.png",
      "shimeji/Ralsei/walk/shime7.png",
      "shimeji/Ralsei/walk/shime8.png",
      "shimeji/Ralsei/walk/shime9.png",
      "shimeji/Ralsei/walk/shime10.png",
      "shimeji/Ralsei/walk/shime11.png",
      "shimeji/Ralsei/walk/shime12.png",
      "shimeji/Ralsei/walk/shime13.png",
      "shimeji/Ralsei/walk/shime14.png",
      "shimeji/Ralsei/walk/shime15.png",
      "shimeji/Ralsei/walk/shime16.png",
      "shimeji/Ralsei/walk/shime17.png",
      "shimeji/Ralsei/walk/shime18.png",
      "shimeji/Ralsei/walk/shime19.png",
      "shimeji/Ralsei/walk/shime20.png"
    ],
    "interval": 160,
    "loops": 2
  },
  "run": {
    "frames": [
      "shimeji/Ralsei/run2/shime1.png",
      "shimeji/Ralsei/run2/shime2.png",
      "shimeji/Ralsei/run2/shime3.png"
    ],
    "interval": 200,
    "loops": 4
  },
  "run2": {
    "frames": [
      "shimeji/Ralsei/run/shime1.png",
      "shimeji/Ralsei/run/shime2.png",
      "shimeji/Ralsei/run/shime3.png",
      "shimeji/Ralsei/run/shime4.png",
      "shimeji/Ralsei/run/shime5.png",
      "shimeji/Ralsei/run/shime6.png"
    ],
    "interval": 200,
    "loops": 4
  },
  "stand": {
    "frames": [
      "shimeji/Ralsei/stayanim/shime1.png",
      "shimeji/Ralsei/stayanim/shime2.png",
      "shimeji/Ralsei/stayanim/shime3.png",
      "shimeji/Ralsei/stayanim/shime4.png",
      "shimeji/Ralsei/stayanim/shime5.png"
    ],
    "interval": 160,
    "loops": 2
  },
  "sit": {
    "frames": [
      "shimeji/Ralsei/shime11.png"
    ],
    "interval": 300,
    "loops": 1,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "sleepy": {
    "frames": [
      "shimeji/Ralsei/sleepy/shime1.png",
      "shimeji/Ralsei/sleepy/shime2.png"
    ],
    "interval": 600,
    "loops": 3
  },
  "flapEars": {
    "frames": [
      "shimeji/Ralsei/flop/shime1.png",
      "shimeji/Ralsei/flop/shime2.png",
      "shimeji/Ralsei/flop/shime3.png",
      "shimeji/Ralsei/flop/shime4.png",
      "shimeji/Ralsei/flop/shime5.png",
      "shimeji/Ralsei/flop/shime6.png",
      "shimeji/Ralsei/flop/shime7.png",
      "shimeji/Ralsei/flop/shime8.png"
    ],
    "interval": 150,
    "loops": 3
  },
  "danglelegs": {
    "frames": [
      "shimeji/Ralsei/shime30.png",
      "shimeji/Ralsei/shime31.png",
      "shimeji/Ralsei/shime32.png",
      "shimeji/Ralsei/shime31.png",
      "shimeji/Ralsei/shime33.png",
      "shimeji/Ralsei/shime31.png",
      "shimeji/Ralsei/shime30.png"
    ],
    "interval": 200,
    "loops": 1
  },
  "dance": {
    "frames": [
      "shimeji/Ralsei/dance/shime1.png",
      "shimeji/Ralsei/dance/shime2.png",
      "shimeji/Ralsei/dance/shime3.png",
      "shimeji/Ralsei/dance/shime4.png",
      "shimeji/Ralsei/dance/shime5.png",
      "shimeji/Ralsei/dance/shime6.png",
      "shimeji/Ralsei/dance/shime7.png",
      "shimeji/Ralsei/dance/shime8.png"
    ],
    "interval": 200,
    "loops": 2
  },
  "spin": {
    "frames": [
      "shimeji/Ralsei/pose/shime1.png",
      "shimeji/Ralsei/pose/shime2.png",
      "shimeji/Ralsei/pose/shime3.png",
      "shimeji/Ralsei/pose/shime4.png",
      "shimeji/Ralsei/pose/shime5.png",
      "shimeji/Ralsei/pose/shime6.png",
      "shimeji/Ralsei/pose/shime7.png",
      "shimeji/Ralsei/pose/shime8.png",
      "shimeji/Ralsei/pose/shime9.png"
    ],
    "interval": 80,
    "loops": 1
  },
  "wave": {
    "frames": [
      "shimeji/Ralsei/shime1.png",
      "shimeji/Ralsei/wave/shime1.png",
      "shimeji/Ralsei/wave/shime2.png",
      "shimeji/Ralsei/wave/shime3.png",
      "shimeji/Ralsei/wave/shime4.png",
      "shimeji/Ralsei/wave/shime5.png",
      "shimeji/Ralsei/wave/shime6.png",
      "shimeji/Ralsei/wave/shime7.png",
      "shimeji/Ralsei/wave/shime8.png",
      "shimeji/Ralsei/wave/shime9.png",
      "shimeji/Ralsei/wave/shime10.png",
      "shimeji/Ralsei/wave/shime11.png",
      "shimeji/Ralsei/wave/shime12.png",
      "shimeji/Ralsei/wave/shime13.png",
      "shimeji/Ralsei/wave/shime14.png",
      "shimeji/Ralsei/wave/shime15.png",
      "shimeji/Ralsei/shime1.png"
    ],
    "interval": 200,
    "loops": 1
  },
  "nuzzle": {
    "frames": [
      "shimeji/Ralsei/nuzzle/shime1.png",
      "shimeji/Ralsei/nuzzle/shime2.png",
      "shimeji/Ralsei/nuzzle/shime3.png",
      "shimeji/Ralsei/nuzzle/shime4.png",
      "shimeji/Ralsei/nuzzle/shime5.png",
      "shimeji/Ralsei/nuzzle/shime6.png",
      "shimeji/Ralsei/nuzzle/shime7.png",
      "shimeji/Ralsei/nuzzle/shime8.png"
    ],
    "interval": 120,
    "loops": 2
  },
  "spell": {
    "frames": [
      "shimeji/Ralsei/spell/shime1.png",
      "shimeji/Ralsei/spell/shime2.png",
      "shimeji/Ralsei/spell/shime3.png",
      "shimeji/Ralsei/spell/shime4.png",
      "shimeji/Ralsei/spell/shime5.png",
      "shimeji/Ralsei/spell/shime6.png",
      "shimeji/Ralsei/spell/shime7.png",
      "shimeji/Ralsei/spell/shime8.png",
      "shimeji/Ralsei/spell/shime9.png",
      "shimeji/Ralsei/spell/shime10.png",
      "shimeji/Ralsei/spell/shime11.png",
      "shimeji/Ralsei/spell/shime12.png",
      "shimeji/Ralsei/spell/shime13.png",
      "shimeji/Ralsei/spell/shime14.png",
      "shimeji/Ralsei/spell/shime15.png",
      "shimeji/Ralsei/spell/shime16.png",
      "shimeji/Ralsei/spell/shime17.png",
      "shimeji/Ralsei/spell/shime18.png",
      "shimeji/Ralsei/spell/shime19.png"
    ],
    "interval": 80,
    "loops": 1
  },
  "lullaby": {
    "frames": [
      "shimeji/Ralsei/lullaby/shime1.png",
      "shimeji/Ralsei/lullaby/shime2.png",
      "shimeji/Ralsei/lullaby/shime3.png"
    ],
    "interval": 160,
    "loops": 5
  },
  "trip": {
    "frames": [
      "shimeji/Ralsei/shime19a.png",
      "shimeji/Ralsei/shime18.png",
      "shimeji/Ralsei/shime20.png",
      "shimeji/Ralsei/shime20.png",
      "shimeji/Ralsei/shime19.png"
    ],
    "interval": 160,
    "loops": 1
  },
  "forcewalk": {
    "loops": 6
  },
  "forcethink": {
    "frames": [
      "shimeji/Ralsei/shime26.png",
      "shimeji/Ralsei/shime15.png",
      "shimeji/Ralsei/shime27.png",
      "shimeji/Ralsei/shime16.png",
      "shimeji/Ralsei/shime28.png",
      "shimeji/Ralsei/shime17.png",
      "shimeji/Ralsei/shime29.png",
      "shimeji/Ralsei/shime11.png"
    ],
    "interval": 200,
    "loops": 1
  },
  "pet": {
    "frames": [
      "shimeji/Ralsei/pet/shime1.png",
      "shimeji/Ralsei/pet/shime2.png",
      "shimeji/Ralsei/pet/shime3.png",
      "shimeji/Ralsei/pet/shime4.png",
      "shimeji/Ralsei/pet/shime5.png",
      "shimeji/Ralsei/pet/shime6.png",
      "shimeji/Ralsei/pet/shime7.png",
      "shimeji/Ralsei/pet/shime8.png",
      "shimeji/Ralsei/pet/shime9.png",
      "shimeji/Ralsei/pet/shime10.png",
      "shimeji/Ralsei/pet/shime11.png",
      "shimeji/Ralsei/pet/shime12.png",
      "shimeji/Ralsei/pet/shime13.png",
      "shimeji/Ralsei/pet/shime14.png",
      "shimeji/Ralsei/pet/shime15.png",
      "shimeji/Ralsei/pet/shime16.png",
      "shimeji/Ralsei/pet/shime17.png",
      "shimeji/Ralsei/pet/shime18.png",
      "shimeji/Ralsei/pet/shime19.png",
      "shimeji/Ralsei/pet/shime20.png",
      "shimeji/Ralsei/pet/shime21.png",
      "shimeji/Ralsei/pet/shime22.png",
      "shimeji/Ralsei/pet/shime23.png",
      "shimeji/Ralsei/pet/shime24.png",
      "shimeji/Ralsei/pet/shime25.png",
      "shimeji/Ralsei/pet/shime26.png",
      "shimeji/Ralsei/pet/shime27.png",
      "shimeji/Ralsei/pet/shime28.png",
      "shimeji/Ralsei/pet/shime29.png"
    ],
    "interval": 80
  },
  "drag": {
    "frames": [
      "shimeji/Ralsei/shime9.png",
      "shimeji/Ralsei/shime7.png",
      "shimeji/Ralsei/shime5.png",
      "shimeji/Ralsei/shime5a.png",
      "shimeji/Ralsei/shime6.png",
      "shimeji/Ralsei/shime8.png",
      "shimeji/Ralsei/shime10.png"
    ],
    "interval": 200
  },
  "falling": {
    "frames": [
      "shimeji/Ralsei/shime4.png"
    ],
    "interval": 200,
    "loops": 2
  },
  "fallen": {
    "frames": [
      "shimeji/Ralsei/shime18.png",
      "shimeji/Ralsei/shime19.png"
    ],
    "interval": 160,
    "loops": 1
  },
  "ORIGINAL_ACTIONS": [
    "walk",
    "walk",
    "run",
    "run2",
    "stand",
    "stand",
    "spin",
    "spin",
    "dance",
    "wave",
    "nuzzle",
    "spell",
    "lullaby",
    "sit",
    "sleepy",
    "flapEars",
    "danglelegs",
    "trip"
  ],
  "EDGE_ACTIONS": [
    "hang",
    "hang",
    "climb",
    "climb",
    "climb",
    "fall"
  ],
  "JUMP_CHANCE": 0.15,
  "climbSide": {
    "frames": [
      "shimeji/Ralsei/shime14.png",
      "shimeji/Ralsei/shime12.png",
      "shimeji/Ralsei/shime13.png"
    ],
    "interval": 160,
    "loops": 2
  },
  "hangstillSide": {
    "frames": [
      "shimeji/Ralsei/shime13.png"
    ],
    "interval": 200,
    "loops": 2,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "climbTop": {
    "frames": [
      "shimeji/Ralsei/shime25.png",
      "shimeji/Ralsei/shime23.png",
      "shimeji/Ralsei/shime24.png"
    ],
    "interval": 160,
    "loops": 4
  },
  "hangstillTop": {
    "frames": [
      "shimeji/Ralsei/shime23.png"
    ],
    "interval": 200,
    "loops": 2,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "jump": {
    "frames": [
      "shimeji/Ralsei/shime22.png"
    ],
    "interval": 200
  }
};

window.Lancer_CONFIG = {
  "ALLOWANCES": [
    "drag",
    "bottom",
    "top",
    "left",
    "right"
  ],
  "scale": 0.8,
  "walkspeed": 90,
  "fallspeed": 150,
  "jumpspeed": 250,
  "gettingupspeed": 500,
  "walk": {
    "frames": [
      "shimeji/Lancer/shime2.png",
      "shimeji/Lancer/shime3.png",
      "shimeji/Lancer/shime3a.png",
      "shimeji/Lancer/shime3b.png",
      "shimeji/Lancer/shime3c.png",
      "shimeji/Lancer/shime3d.png"
    ],
    "interval": 120,
    "loops": 2
  },
  "sit": {
    "frames": [
      "shimeji/Lancer/shime11.png"
    ],
    "interval": 300,
    "loops": 1,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "boom": {
    "frames": [
      "shimeji/Lancer/explosion/exp1.png",
      "shimeji/Lancer/explosion/exp2.png",
      "shimeji/Lancer/explosion/exp3.png",
      "shimeji/Lancer/explosion/exp4.png",
      "shimeji/Lancer/explosion/exp5.png",
      "shimeji/Lancer/explosion/exp6.png",
      "shimeji/Lancer/explosion/exp7.png",
      "shimeji/Lancer/explosion/exp8.png",
      "shimeji/Lancer/explosion/exp9.png",
      "shimeji/Lancer/explosion/exp10.png",
      "shimeji/Lancer/explosion/exp11.png",
      "shimeji/Lancer/explosion/exp12.png",
      "shimeji/Lancer/explosion/exp13.png",
      "shimeji/Lancer/explosion/exp14.png",
      "shimeji/Lancer/explosion/exp15.png",
      "shimeji/Lancer/explosion/exp16.png",
      "shimeji/Lancer/explosion/exp17.png"
    ],
    "interval": 80,
    "loops": 1
  },
  "laugh": {
    "frames": [
      "shimeji/Lancer/laugh/shime1.png",
      "shimeji/Lancer/laugh/shime2.png"
    ],
    "interval": 200,
    "loops": 2
  },
  "wave": {
    "frames": [
      "shimeji/Lancer/shime1.png",
      "shimeji/Lancer/wave/shime1.png",
      "shimeji/Lancer/wave/shime2.png",
      "shimeji/Lancer/wave/shime3.png",
      "shimeji/Lancer/wave/shime4.png",
      "shimeji/Lancer/wave/shime5.png",
      "shimeji/Lancer/wave/shime6.png",
      "shimeji/Lancer/wave/shime7.png"
    ],
    "interval": 150,
    "loops": 1
  },
  "trip": {
    "frames": [
      "shimeji/Lancer/shime19.png",
      "shimeji/Lancer/shime18.png",
      "shimeji/Lancer/shime20.png",
      "shimeji/Lancer/shime20.png",
      "shimeji/Lancer/shime19.png"
    ],
    "interval": 160,
    "loops": 1
  },
  "forcewalk": {
    "loops": 6
  },
  "forcethink": {
    "frames": [
      "shimeji/Lancer/shime26.png",
      "shimeji/Lancer/shime27.png"
    ],
    "interval": 200,
    "loops": 2
  },
  "drag": {
    "frames": [
      "shimeji/Lancer/shime9.png",
      "shimeji/Lancer/shime7.png",
      "shimeji/Lancer/shime5.png",
      "shimeji/Lancer/shime5a.png",
      "shimeji/Lancer/shime6.png",
      "shimeji/Lancer/shime8.png",
      "shimeji/Lancer/shime10.png"
    ],
    "interval": 200
  },
  "falling": {
    "frames": [
      "shimeji/Lancer/shime4.png"
    ],
    "interval": 200,
    "loops": 2
  },
  "fallen": {
    "frames": [
      "shimeji/Lancer/shime18.png"
    ],
    "interval": 160,
    "loops": 1
  },
  "ORIGINAL_ACTIONS": [
    "walk",
    "walk",
    "laugh",
    "boom",
    "wave",
    "sit",
    "trip"
  ],
  "EDGE_ACTIONS": [
    "hang",
    "hang",
    "climb",
    "climb",
    "climb",
    "fall"
  ],
  "JUMP_CHANCE": 0.15,
  "climbSide": {
    "frames": [
      "shimeji/Lancer/shime14.png",
      "shimeji/Lancer/shime12.png",
      "shimeji/Lancer/shime13.png"
    ],
    "interval": 160,
    "loops": 2
  },
  "hangstillSide": {
    "frames": [
      "shimeji/Lancer/shime13.png"
    ],
    "interval": 200,
    "loops": 2,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "climbTop": {
    "frames": [
      "shimeji/Lancer/shime25.png",
      "shimeji/Lancer/shime23.png",
      "shimeji/Lancer/shime24.png"
    ],
    "interval": 160,
    "loops": 4
  },
  "hangstillTop": {
    "frames": [
      "shimeji/Lancer/shime23.png"
    ],
    "interval": 200,
    "loops": 2,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "jump": {
    "frames": [
      "shimeji/Lancer/shime22.png"
    ],
    "interval": 200
  }
};

window.Kris_CONFIG = {
  "ALLOWANCES": [
    "drag",
    "bottom",
    "top",
    "left",
    "right"
  ],
  "scale": 0.9,
  "walkspeed": 50,
  "fallspeed": 150,
  "jumpspeed": 250,
  "gettingupspeed": 500,
  "walk": {
    "frames": [
      "shimeji/Kris/shime2.png",
      "shimeji/Kris/shime3.png",
      "shimeji/Kris/shime51.png",
      "shimeji/Kris/shime3.png"
    ],
    "interval": 180,
    "loops": 3
  },
  "run": {
    "frames": [
      "shimeji/Kris/shime2.png",
      "shimeji/Kris/shime3.png",
      "shimeji/Kris/shime51.png",
      "shimeji/Kris/shime3.png"
    ],
    "interval": 90,
    "loops": 4
  },
  "run2": {
    "frames": [
      "shimeji/Kris/shime2.png",
      "shimeji/Kris/shime3.png",
      "shimeji/Kris/shime51.png",
      "shimeji/Kris/shime3.png"
    ],
    "interval": 45,
    "loops": 6
  },
  "stand": {
    "frames": [
      "shimeji/Kris/shime1.png"
    ],
    "interval": 300,
    "loops": 4
  },
  "sit": {
    "frames": [
      "shimeji/Kris/shime11.png"
    ],
    "interval": 300,
    "loops": 1,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "clover": {
    "frames": [
      "shimeji/Kris/shime82.png",
      "shimeji/Kris/shime83.png",
      "shimeji/Kris/shime84.png",
      "shimeji/Kris/shime85.png",
      "shimeji/Kris/shime86.png",
      "shimeji/Kris/shime87.png"
    ],
    "interval": 90,
    "loops": 3
  },
  "flipoff": {
    "frames": [
      "shimeji/Kris/shime52.png"
    ],
    "interval": 300,
    "loops": 5
  },
  "tossknife": {
    "frames": [
      "shimeji/Kris/shime73.png",
      "shimeji/Kris/shime74.png",
      "shimeji/Kris/shime75.png",
      "shimeji/Kris/shime76.png",
      "shimeji/Kris/shime77.png",
      "shimeji/Kris/shime78.png",
      "shimeji/Kris/shime79.png",
      "shimeji/Kris/shime80.png",
      "shimeji/Kris/shime81.png",
      "shimeji/Kris/shime76.png",
      "shimeji/Kris/shime75.png",
      "shimeji/Kris/shime74.png",
      "shimeji/Kris/shime73.png"
    ],
    "interval": 120,
    "loops": 1
  },
  "danglelegs": {
    "frames": [
      "shimeji/Kris/shime31.png",
      "shimeji/Kris/shime32.png",
      "shimeji/Kris/shime33.png",
      "shimeji/Kris/shime65.png",
      "shimeji/Kris/shime66.png",
      "shimeji/Kris/shime67.png",
      "shimeji/Kris/shime68.png",
      "shimeji/Kris/shime67.png",
      "shimeji/Kris/shime68.png",
      "shimeji/Kris/shime67.png",
      "shimeji/Kris/shime68.png",
      "shimeji/Kris/shime33.png",
      "shimeji/Kris/shime32.png",
      "shimeji/Kris/shime31.png"
    ],
    "interval": 150,
    "loops": 1
  },
  "trip": {
    "frames": [
      "shimeji/Kris/shime19.png",
      "shimeji/Kris/shime18.png",
      "shimeji/Kris/shime20.png",
      "shimeji/Kris/shime20.png",
      "shimeji/Kris/shime19.png"
    ],
    "interval": 160,
    "loops": 1
  },
  "forcewalk": {
    "loops": 6
  },
  "forcethink": {
    "frames": [
      "shimeji/Kris/shime26.png",
      "shimeji/Kris/shime15.png",
      "shimeji/Kris/shime27.png",
      "shimeji/Kris/shime16.png",
      "shimeji/Kris/shime28.png",
      "shimeji/Kris/shime17.png",
      "shimeji/Kris/shime29.png",
      "shimeji/Kris/shime11.png"
    ],
    "interval": 200,
    "loops": 1
  },
  "drag": {
    "frames": [
      "shimeji/Kris/shime9.png",
      "shimeji/Kris/shime7.png",
      "shimeji/Kris/shime5.png",
      "shimeji/Kris/shime5.png",
      "shimeji/Kris/shime6.png",
      "shimeji/Kris/shime8.png",
      "shimeji/Kris/shime10.png"
    ],
    "interval": 200
  },
  "falling": {
    "frames": [
      "shimeji/Kris/shime22.png",
      "shimeji/Kris/shime71.png",
      "shimeji/Kris/shime72.png"
    ],
    "interval": 100,
    "loops": 2
  },
  "fallen": {
    "frames": [
      "shimeji/Kris/shime18.png",
      "shimeji/Kris/shime50.png",
      "shimeji/Kris/shime19.png"
    ],
    "interval": 160,
    "loops": 1
  },
  "ORIGINAL_ACTIONS": [
    "walk",
    "walk",
    "run",
    "run2",
    "stand",
    "stand",
    "clover",
    "flipoff",
    "tossknife",
    "sit",
    "danglelegs",
    "trip"
  ],
  "EDGE_ACTIONS": [
    "hang",
    "hang",
    "climb",
    "climb",
    "climb",
    "fall"
  ],
  "JUMP_CHANCE": 0.15,
  "climbSide": {
    "frames": [
      "shimeji/Kris/shime14.png",
      "shimeji/Kris/shime12.png",
      "shimeji/Kris/shime13.png"
    ],
    "interval": 160,
    "loops": 2
  },
  "hangstillSide": {
    "frames": [
      "shimeji/Kris/shime13.png"
    ],
    "interval": 200,
    "loops": 2,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "climbTop": {
    "frames": [
      "shimeji/Kris/shime25.png",
      "shimeji/Kris/shime23.png",
      "shimeji/Kris/shime24.png"
    ],
    "interval": 160,
    "loops": 4
  },
  "hangstillTop": {
    "frames": [
      "shimeji/Kris/shime23.png"
    ],
    "interval": 200,
    "loops": 2,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "jump": {
    "frames": [
      "shimeji/Kris/shime22.png"
    ],
    "interval": 200
  }
};

window.Aqua_CONFIG = {
  "ALLOWANCES": [
    "drag",
    "bottom",
    "top",
    "left",
    "right"
  ],
  "scale": 0.6,
  "walkspeed": 50,
  "fallspeed": 150,
  "jumpspeed": 250,
  "gettingupspeed": 500,
  "walk": {
    "frames": [
      "shimeji/aqua/shime2.png",
      "shimeji/aqua/shime3.png",
      "shimeji/aqua/shime51.png",
      "shimeji/aqua/shime3.png"
    ],
    "interval": 180,
    "loops": 3
  },
  "run": {
    "frames": [
      "shimeji/aqua/shime2.png",
      "shimeji/aqua/shime3.png",
      "shimeji/aqua/shime51.png",
      "shimeji/aqua/shime3.png"
    ],
    "interval": 90,
    "loops": 4
  },
  "run2": {
    "frames": [
      "shimeji/aqua/shime2.png",
      "shimeji/aqua/shime3.png",
      "shimeji/aqua/shime51.png",
      "shimeji/aqua/shime3.png"
    ],
    "interval": 45,
    "loops": 6
  },
  "stand": {
    "frames": [
      "shimeji/aqua/shime1.png"
    ],
    "interval": 300,
    "loops": 4
  },
  "sit": {
    "frames": [
      "shimeji/aqua/shime11.png"
    ],
    "interval": 300,
    "loops": 1,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "clover": {
    "frames": [
      "shimeji/aqua/shime82.png",
      "shimeji/aqua/shime83.png",
      "shimeji/aqua/shime84.png",
      "shimeji/aqua/shime85.png",
      "shimeji/aqua/shime86.png",
      "shimeji/aqua/shime87.png"
    ],
    "interval": 90,
    "loops": 3
  },
  "flipoff": {
    "frames": [
      "shimeji/aqua/shime52.png"
    ],
    "interval": 300,
    "loops": 5
  },
  "tossknife": {
    "frames": [
      "shimeji/aqua/shime73.png",
      "shimeji/aqua/shime74.png",
      "shimeji/aqua/shime75.png",
      "shimeji/aqua/shime76.png",
      "shimeji/aqua/shime77.png",
      "shimeji/aqua/shime78.png",
      "shimeji/aqua/shime79.png",
      "shimeji/aqua/shime80.png",
      "shimeji/aqua/shime81.png",
      "shimeji/aqua/shime76.png",
      "shimeji/aqua/shime75.png",
      "shimeji/aqua/shime74.png",
      "shimeji/aqua/shime73.png"
    ],
    "interval": 120,
    "loops": 1
  },
  "danglelegs": {
    "frames": [
      "shimeji/aqua/shime33.png",
      "shimeji/aqua/shime65.png",
      "shimeji/aqua/shime66.png",
      "shimeji/aqua/shime67.png",
      "shimeji/aqua/shime68.png",
      "shimeji/aqua/shime67.png",
      "shimeji/aqua/shime68.png",
      "shimeji/aqua/shime67.png",
      "shimeji/aqua/shime68.png",
      "shimeji/aqua/shime33.png"
    ],
    "interval": 150,
    "loops": 1
  },
  "trip": {
    "frames": [
      "shimeji/aqua/shime19.png",
      "shimeji/aqua/shime18.png",
      "shimeji/aqua/shime20.png",
      "shimeji/aqua/shime20.png",
      "shimeji/aqua/shime19.png"
    ],
    "interval": 160,
    "loops": 1
  },
  "forcewalk": {
    "loops": 6
  },
  "forcethink": {
    "frames": [
      "shimeji/aqua/shime26.png",
      "shimeji/aqua/shime15.png",
      "shimeji/aqua/shime27.png",
      "shimeji/aqua/shime16.png",
      "shimeji/aqua/shime28.png",
      "shimeji/aqua/shime17.png",
      "shimeji/aqua/shime29.png",
      "shimeji/aqua/shime11.png"
    ],
    "interval": 200,
    "loops": 1
  },
  "drag": {
    "frames": [
      "shimeji/aqua/shime9.png",
      "shimeji/aqua/shime7.png",
      "shimeji/aqua/shime5.png",
      "shimeji/aqua/shime5.png",
      "shimeji/aqua/shime6.png",
      "shimeji/aqua/shime8.png",
      "shimeji/aqua/shime10.png"
    ],
    "interval": 200
  },
  "falling": {
    "frames": [
      "shimeji/aqua/shime22.png",
      "shimeji/aqua/shime71.png",
      "shimeji/aqua/shime72.png"
    ],
    "interval": 100,
    "loops": 2
  },
  "fallen": {
    "frames": [
      "shimeji/aqua/shime18.png",
      "shimeji/aqua/shime50.png",
      "shimeji/aqua/shime19.png"
    ],
    "interval": 160,
    "loops": 1
  },
  "ORIGINAL_ACTIONS": [
    "walk",
    "walk",
    "run",
    "run2",
    "stand",
    "stand",
    "clover",
    "flipoff",
    "tossknife",
    "sit",
    "danglelegs",
    "trip"
  ],
  "EDGE_ACTIONS": [
    "hang",
    "hang",
    "climb",
    "climb",
    "climb",
    "fall"
  ],
  "JUMP_CHANCE": 0.15,
  "climbSide": {
    "frames": [
      "shimeji/aqua/shime14.png",
      "shimeji/aqua/shime12.png",
      "shimeji/aqua/shime13.png"
    ],
    "interval": 160,
    "loops": 2
  },
  "hangstillSide": {
    "frames": [
      "shimeji/aqua/shime13.png"
    ],
    "interval": 200,
    "loops": 2,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "climbTop": {
    "frames": [
      "shimeji/aqua/shime25.png",
      "shimeji/aqua/shime23.png",
      "shimeji/aqua/shime24.png"
    ],
    "interval": 160,
    "loops": 4
  },
  "hangstillTop": {
    "frames": [
      "shimeji/aqua/shime23.png"
    ],
    "interval": 200,
    "loops": 2,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "jump": {
    "frames": [
      "shimeji/aqua/shime22.png"
    ],
    "interval": 200
  }
};

window.Flowery_CONFIG = {
  "ALLOWANCES": [
    "drag",
    "bottom",
    "top",
    "left",
    "right"
  ],
  "scale": 1.3,
  "walkspeed": 50,
  "fallspeed": 150,
  "jumpspeed": 250,
  "gettingupspeed": 500,
  "walk": {
    "frames": [
      "shimeji/Flowery/shime2.png",
      "shimeji/Flowery/shime3.png",
      "shimeji/Flowery/shime51.png",
      "shimeji/Flowery/shime3.png"
    ],
    "interval": 180,
    "loops": 3,
    "sound": "shimeji/Flowery/sound/snd_flowery_voiceclip_sorrytokeepyouwaiting1.wav"
  },
  "run": {
    "frames": [
      "shimeji/Flowery/shime88.png",
      "shimeji/Flowery/shime89.png",
      "shimeji/Flowery/shime90.png",
      "shimeji/Flowery/shime91.png"
    ],
    "interval": 90,
    "loops": 4,
    "sound": "shimeji/Flowery/sound/snd_flowery_voiceclip_leaf_it_to_me.wav"
  },
  "run2": {
    "frames": [
      "shimeji/Flowery/shime88.png",
      "shimeji/Flowery/shime89.png",
      "shimeji/Flowery/shime90.png",
      "shimeji/Flowery/shime91.png"
    ],
    "interval": 45,
    "loops": 6,
    "sound": "shimeji/Flowery/sound/snd_flowery_voiceclip_leaf_it_to_me.wav"
  },
  "stand": {
    "frames": [
      "shimeji/Flowery/shime1.png"
    ],
    "interval": 300,
    "loops": 4,
    "sound": "shimeji/Flowery/sound/snd_flowery_voiceclip_flowery.wav"
  },
  "sit": {
    "frames": [
      "shimeji/Flowery/shime11.png"
    ],
    "interval": 300,
    "loops": 1,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "jarona": {
    "frames": [
      "shimeji/Flowery/shime82.png",
      "shimeji/Flowery/shime83.png",
      "shimeji/Flowery/shime84.png",
      "shimeji/Flowery/shime85.png",
      "shimeji/Flowery/shime86.png",
      "shimeji/Flowery/shime87.png"
    ],
    "interval": 90,
    "loops": 3,
    "sound": "shimeji/Flowery/sound/snd_flowery_voiceclip_jarona1.wav"
  },
  "flipoff": {
    "frames": [
      "shimeji/Flowery/shime52.png"
    ],
    "interval": 300,
    "loops": 5,
    "sound": "shimeji/Flowery/sound/snd_flowery_voiceclip_glue.wav"
  },
  "greet": {
    "frames": [
      "shimeji/Flowery/shime92.png"
    ],
    "interval": 300,
    "loops": 3,
    "sound": "shimeji/Flowery/sound/snd_flowery_voiceclip_heytherelittleguy.wav"
  },
  "skateboard": {
    "frames": [
      "shimeji/Flowery/shime73.png",
      "shimeji/Flowery/shime74.png",
      "shimeji/Flowery/shime74.png",
      "shimeji/Flowery/shime73.png"
    ],
    "interval": 150,
    "loops": 1
  },
  "danglelegs": {
    "frames": [
      "shimeji/Flowery/shime33.png",
      "shimeji/Flowery/shime65.png",
      "shimeji/Flowery/shime66.png",
      "shimeji/Flowery/shime68.png",
      "shimeji/Flowery/shime68.png",
      "shimeji/Flowery/shime68.png",
      "shimeji/Flowery/shime33.png"
    ],
    "interval": 150,
    "loops": 1,
    "sound": "shimeji/Flowery/sound/snd_flowery_voiceclip_try_my_flavor.wav"
  },
  "trip": {
    "frames": [
      "shimeji/Flowery/shime19.png",
      "shimeji/Flowery/shime18.png",
      "shimeji/Flowery/shime20.png",
      "shimeji/Flowery/shime20.png",
      "shimeji/Flowery/shime19.png"
    ],
    "interval": 160,
    "loops": 1,
    "sound": "shimeji/Flowery/sound/snd_flowery_voiceclip_what_a_predictable_creature.wav"
  },
  "forcewalk": {
    "loops": 6
  },
  "forcethink": {
    "frames": [
      "shimeji/Flowery/shime26.png",
      "shimeji/Flowery/shime15.png",
      "shimeji/Flowery/shime27.png",
      "shimeji/Flowery/shime16.png",
      "shimeji/Flowery/shime28.png",
      "shimeji/Flowery/shime17.png",
      "shimeji/Flowery/shime29.png",
      "shimeji/Flowery/shime11.png"
    ],
    "interval": 200,
    "loops": 1,
    "sound": "shimeji/Flowery/sound/snd_flowery_voiceclip_yes.wav"
  },
  "drag": {
    "frames": [
      "shimeji/Flowery/shime9.png",
      "shimeji/Flowery/shime7.png",
      "shimeji/Flowery/shime5.png",
      "shimeji/Flowery/shime5.png",
      "shimeji/Flowery/shime6.png",
      "shimeji/Flowery/shime8.png",
      "shimeji/Flowery/shime10.png"
    ],
    "interval": 200,
    "sound": "shimeji/Flowery/sound/snd_flowery_voiceclip_nonono.wav"
  },
  "falling": {
    "frames": [
      "shimeji/Flowery/shime22.png",
      "shimeji/Flowery/shime71.png",
      "shimeji/Flowery/shime72.png"
    ],
    "interval": 100,
    "loops": 2,
    "sound": "shimeji/Flowery/sound/snd_flowery_voiceclip_im_falling.wav"
  },
  "fallen": {
    "frames": [
      "shimeji/Flowery/shime18.png",
      "shimeji/Flowery/shime50.png",
      "shimeji/Flowery/shime19.png"
    ],
    "interval": 160,
    "loops": 1,
    "sound": "shimeji/Flowery/sound/snd_flowery_voiceclip_hah.wav"
  },
  "ORIGINAL_ACTIONS": [
    "walk",
    "walk",
    "run",
    "run2",
    "stand",
    "stand",
    "jarona",
    "flipoff",
    "skateboard",
    "sit",
    "danglelegs",
    "trip"
  ],
  "EDGE_ACTIONS": [
    "hang",
    "hang",
    "climb",
    "climb",
    "climb",
    "fall"
  ],
  "JUMP_CHANCE": 0.15,
  "climbSide": {
    "frames": [
      "shimeji/Flowery/shime14.png",
      "shimeji/Flowery/shime12.png",
      "shimeji/Flowery/shime13.png"
    ],
    "interval": 160,
    "loops": 2,
    "sound": "shimeji/Flowery/sound/snd_flowery_voiceclip_jarona2.wav"
  },
  "hangstillSide": {
    "frames": [
      "shimeji/Flowery/shime13.png"
    ],
    "interval": 200,
    "loops": 2,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "climbTop": {
    "frames": [
      "shimeji/Flowery/shime25.png",
      "shimeji/Flowery/shime23.png",
      "shimeji/Flowery/shime24.png"
    ],
    "interval": 160,
    "loops": 4,
    "sound": "shimeji/Flowery/sound/snd_flowery_voiceclip_jarona2.wav"
  },
  "hangstillTop": {
    "frames": [
      "shimeji/Flowery/shime23.png"
    ],
    "interval": 200,
    "loops": 2,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "jump": {
    "frames": [
      "shimeji/Flowery/shime22.png"
    ],
    "interval": 200,
    "sound": "shimeji/Flowery/sound/snd_flowery_voiceclip_hereicomesanfrandisco_strong.wav"
  }
};

window.Noelle_CONFIG = {
  "ALLOWANCES": [
    "drag",
    "bottom",
    "left",
    "right"
  ],
  "scale": 0.7,
  "walkspeed": 50,
  "fallspeed": 150,
  "jumpspeed": 250,
  "gettingupspeed": 500,
  "walk": {
    "frames": [
      "shimeji/noelle/sprites/0001.webp",
      "shimeji/noelle/sprites/0002.webp",
      "shimeji/noelle/sprites/0003.webp",
      "shimeji/noelle/sprites/0004.webp",
      "shimeji/noelle/sprites/0005.webp"
    ],
    "interval": 167,
    "loops": 2
  },
  "stand": {
    "frames": [
      "shimeji/noelle/sprites/0000.webp"
    ],
    "interval": 300,
    "loops": 2
  },
  "sit": {
    "frames": [
      "shimeji/noelle/sprites/0008.webp"
    ],
    "interval": 300,
    "loops": 1,
    "randomizeDuration": true,
    "min": 2000,
    "max": 3300
  },
  "sleep": {
    "frames": [
      "shimeji/noelle/sprites/0009.webp"
    ],
    "interval": 2500,
    "loops": 8
  },
  "stretch": {
    "frames": [
      "shimeji/noelle/sprites/0010.webp"
    ],
    "interval": 1000,
    "loops": 1
  },
  "wave": {
    "frames": [
      "shimeji/noelle/sprites/0011.webp",
      "shimeji/noelle/sprites/0012.webp",
      "shimeji/noelle/sprites/0011.webp",
      "shimeji/noelle/sprites/0012.webp",
      "shimeji/noelle/sprites/0011.webp",
      "shimeji/noelle/sprites/0012.webp"
    ],
    "interval": 180,
    "loops": 1
  },
  "lookup": {
    "frames": [
      "shimeji/noelle/sprites/0007.webp"
    ],
    "interval": 2000,
    "loops": 1
  },
  "drag": {
    "frames": [
      "shimeji/noelle/sprites/0006.webp"
    ],
    "interval": 400
  },
  "falling": {
    "frames": [
      "shimeji/noelle/sprites/0006.webp"
    ],
    "interval": 200,
    "loops": 2
  },
  "fallen": {
    "frames": [
      "shimeji/noelle/sprites/0000.webp"
    ],
    "interval": 160,
    "loops": 1
  },
  "ORIGINAL_ACTIONS": [
    "walk",
    "walk",
    "stand",
    "stand",
    "sit",
    "sleep",
    "stretch",
    "wave",
    "lookup"
  ],
  "EDGE_ACTIONS": [
    "hang",
    "hang",
    "climb",
    "climb",
    "climb",
    "fall"
  ],
  "JUMP_CHANCE": 0.15,
  "climbSide": {
    "frames": [
      "shimeji/noelle/sprites/0013.webp",
      "shimeji/noelle/sprites/0014.webp",
      "shimeji/noelle/sprites/0015.webp",
      "shimeji/noelle/sprites/0016.webp"
    ],
    "interval": 167,
    "loops": 3
  },
  "hangstillSide": {
    "frames": [
      "shimeji/noelle/sprites/0013.webp"
    ],
    "interval": 200,
    "loops": 2,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "climbTop": {
    "frames": [
      "shimeji/noelle/sprites/0013.webp",
      "shimeji/noelle/sprites/0014.webp",
      "shimeji/noelle/sprites/0015.webp",
      "shimeji/noelle/sprites/0016.webp"
    ],
    "interval": 167,
    "loops": 3
  },
  "hangstillTop": {
    "frames": [
      "shimeji/noelle/sprites/0013.webp"
    ],
    "interval": 200,
    "loops": 2,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "jump": {
    "frames": [
      "shimeji/noelle/sprites/0017.webp"
    ],
    "interval": 200
  }
};

window.Miku_CONFIG = {
  "ALLOWANCES": [
    "drag",
    "bottom",
    "top",
    "left",
    "right"
  ],
  "scale": 0.5,
  "walkspeed": 50,
  "fallspeed": 150,
  "jumpspeed": 250,
  "gettingupspeed": 500,
  "walk": {
    "frames": [
      "shimeji/Static Miku Shimeji/img/Shimeji/shime1.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime2.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime1.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime3.png"
    ],
    "interval": 90,
    "loops": 3
  },
  "run": {
    "frames": [
      "shimeji/Static Miku Shimeji/img/Shimeji/shime1.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime2.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime1.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime3.png"
    ],
    "interval": 45,
    "loops": 5
  },
  "run2": {
    "frames": [
      "shimeji/Static Miku Shimeji/img/Shimeji/shime1.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime2.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime1.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime3.png"
    ],
    "interval": 25,
    "loops": 8
  },
  "stand": {
    "frames": [
      "shimeji/Static Miku Shimeji/img/Shimeji/shime1.png"
    ],
    "interval": 300,
    "loops": 4
  },
  "sit": {
    "frames": [
      "shimeji/Static Miku Shimeji/img/Shimeji/shime11.png"
    ],
    "interval": 300,
    "loops": 1,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "thinkhead": {
    "frames": [
      "shimeji/Static Miku Shimeji/img/Shimeji/shime26.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime15.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime27.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime16.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime28.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime17.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime29.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime11.png"
    ],
    "interval": 180,
    "loops": 1
  },
  "danglelegs": {
    "frames": [
      "shimeji/Static Miku Shimeji/img/Shimeji/shime30.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime31.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime32.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime31.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime33.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime31.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime30.png"
    ],
    "interval": 150,
    "loops": 1
  },
  "trip": {
    "frames": [
      "shimeji/Static Miku Shimeji/img/Shimeji/shime19.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime18.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime20.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime20.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime19.png"
    ],
    "interval": 160,
    "loops": 1
  },
  "forcewalk": {
    "loops": 6
  },
  "forcethink": {
    "frames": [
      "shimeji/Static Miku Shimeji/img/Shimeji/shime26.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime15.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime27.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime11.png"
    ],
    "interval": 200,
    "loops": 1
  },
  "drag": {
    "frames": [
      "shimeji/Static Miku Shimeji/img/Shimeji/shime9.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime7.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime5.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime1.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime6.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime8.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime10.png"
    ],
    "interval": 200
  },
  "falling": {
    "frames": [
      "shimeji/Static Miku Shimeji/img/Shimeji/shime4.png"
    ],
    "interval": 200,
    "loops": 2
  },
  "fallen": {
    "frames": [
      "shimeji/Static Miku Shimeji/img/Shimeji/shime18.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime19.png"
    ],
    "interval": 150,
    "loops": 1
  },
  "ORIGINAL_ACTIONS": [
    "walk",
    "walk",
    "run",
    "run2",
    "stand",
    "stand",
    "sit",
    "thinkhead",
    "danglelegs",
    "trip"
  ],
  "EDGE_ACTIONS": [
    "hang",
    "hang",
    "climb",
    "climb",
    "climb",
    "fall"
  ],
  "JUMP_CHANCE": 0.15,
  "climbSide": {
    "frames": [
      "shimeji/Static Miku Shimeji/img/Shimeji/shime14.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime12.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime13.png"
    ],
    "interval": 160,
    "loops": 2
  },
  "hangstillSide": {
    "frames": [
      "shimeji/Static Miku Shimeji/img/Shimeji/shime13.png"
    ],
    "interval": 200,
    "loops": 2,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "climbTop": {
    "frames": [
      "shimeji/Static Miku Shimeji/img/Shimeji/shime25.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime23.png",
      "shimeji/Static Miku Shimeji/img/Shimeji/shime24.png"
    ],
    "interval": 160,
    "loops": 4
  },
  "hangstillTop": {
    "frames": [
      "shimeji/Static Miku Shimeji/img/Shimeji/shime23.png"
    ],
    "interval": 200,
    "loops": 2,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "jump": {
    "frames": [
      "shimeji/Static Miku Shimeji/img/Shimeji/shime22.png"
    ],
    "interval": 200
  }
};

window.Pink_CONFIG = {
  "ALLOWANCES": [
    "drag",
    "bottom",
    "top",
    "left",
    "right"
  ],
  "scale": 1.3,
  "walkspeed": 50,
  "fallspeed": 150,
  "jumpspeed": 250,
  "gettingupspeed": 500,
  "walk": {
    "frames": [
      "shimeji/Pink/shime2.png",
      "shimeji/Pink/shime3.png",
      "shimeji/Pink/shime2.png",
      "shimeji/Pink/shime4.png"
    ],
    "interval": 180,
    "loops": 3
  },
  "run": {
    "frames": [
      "shimeji/Pink/shime2.png",
      "shimeji/Pink/shime3.png",
      "shimeji/Pink/shime2.png",
      "shimeji/Pink/shime4.png"
    ],
    "interval": 60,
    "loops": 5
  },
  "run2": {
    "frames": [
      "shimeji/Pink/shime2.png",
      "shimeji/Pink/shime3.png",
      "shimeji/Pink/shime2.png",
      "shimeji/Pink/shime4.png"
    ],
    "interval": 60,
    "loops": 5
  },
  "stand": {
    "frames": [
      "shimeji/Pink/Shime1.png"
    ],
    "interval": 300,
    "loops": 4
  },
  "sit": {
    "frames": [
      "shimeji/Pink/shime25.png"
    ],
    "interval": 300,
    "loops": 1,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "danglelegs": {
    "frames": [
      "shimeji/Pink/shime31.png",
      "shimeji/Pink/shime32.png",
      "shimeji/Pink/shime31.png",
      "shimeji/Pink/shime33.png"
    ],
    "interval": 150,
    "loops": 1
  },
  "greet": {
    "frames": [
      "shimeji/Pink/shime45.png",
      "shimeji/Pink/shime46.png"
    ],
    "interval": 300,
    "loops": 2,
    "sound": "shimeji/Pink/sound/snd_pink_mew.wav"
  },
  "angry": {
    "frames": [
      "shimeji/Pink/shime72.png",
      "shimeji/Pink/shime73.png"
    ],
    "interval": 120,
    "loops": 3
  },
  "cry": {
    "frames": [
      "shimeji/Pink/shime69.png",
      "shimeji/Pink/shime70.png",
      "shimeji/Pink/shime71.png"
    ],
    "interval": 150,
    "loops": 2
  },
  "sing": {
    "frames": [
      "shimeji/Pink/shime74.png",
      "shimeji/Pink/shime75.png",
      "shimeji/Pink/shime76.png",
      "shimeji/Pink/shime77.png",
      "shimeji/Pink/shime78.png",
      "shimeji/Pink/shime79.png",
      "shimeji/Pink/shime80.png",
      "shimeji/Pink/shime81.png"
    ],
    "interval": 120,
    "loops": 2
  },
  "trip": {
    "frames": [
      "shimeji/Pink/shime34.png",
      "shimeji/Pink/shime35.png",
      "shimeji/Pink/shime35.png",
      "shimeji/Pink/shime35.png",
      "shimeji/Pink/shime34.png"
    ],
    "interval": 160,
    "loops": 1,
    "sound": "shimeji/Pink/sound/snd_pink_trip.wav"
  },
  "forcewalk": {
    "loops": 6
  },
  "forcethink": {
    "frames": [
      "shimeji/Pink/shime12.png",
      "shimeji/Pink/shime11.png",
      "shimeji/Pink/shime25.png"
    ],
    "interval": 200,
    "loops": 1
  },
  "drag": {
    "frames": [
      "shimeji/Pink/shime12.png",
      "shimeji/Pink/shime11.png",
      "shimeji/Pink/shime8.png",
      "shimeji/Pink/shime8.png",
      "shimeji/Pink/shime8.png",
      "shimeji/Pink/shime9.png",
      "shimeji/Pink/shime10.png"
    ],
    "interval": 200,
    "sound": "shimeji/Pink/sound/snd_pink_gasp.wav"
  },
  "falling": {
    "frames": [
      "shimeji/Pink/shime22.png",
      "shimeji/Pink/shime23.png",
      "shimeji/Pink/shime24.png"
    ],
    "interval": 100,
    "loops": 2
  },
  "fallen": {
    "frames": [
      "shimeji/Pink/shime36.png",
      "shimeji/Pink/shime36.png",
      "shimeji/Pink/shime37.png"
    ],
    "interval": 160,
    "loops": 1
  },
  "ORIGINAL_ACTIONS": [
    "walk",
    "walk",
    "run",
    "run2",
    "stand",
    "stand",
    "greet",
    "sing",
    "sit",
    "danglelegs",
    "trip"
  ],
  "EDGE_ACTIONS": [
    "hang",
    "hang",
    "climb",
    "climb",
    "climb",
    "fall"
  ],
  "JUMP_CHANCE": 0.15,
  "climbSide": {
    "frames": [
      "shimeji/Pink/shime18.png",
      "shimeji/Pink/shime17.png",
      "shimeji/Pink/shime16.png"
    ],
    "interval": 160,
    "loops": 2
  },
  "hangstillSide": {
    "frames": [
      "shimeji/Pink/shime17.png"
    ],
    "interval": 200,
    "loops": 2,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "climbTop": {
    "frames": [
      "shimeji/Pink/shime21.png",
      "shimeji/Pink/shime20.png",
      "shimeji/Pink/shime19.png"
    ],
    "interval": 160,
    "loops": 4
  },
  "hangstillTop": {
    "frames": [
      "shimeji/Pink/shime19.png"
    ],
    "interval": 200,
    "loops": 2,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "jump": {
    "frames": [
      "shimeji/Pink/shime49.png",
      "shimeji/Pink/shime50.png",
      "shimeji/Pink/shime51.png",
      "shimeji/Pink/shime52.png"
    ],
    "interval": 200
  }
};

window.Spamton_CONFIG = {
  "ALLOWANCES": [
    "pet",
    "drag",
    "bottom",
    "top",
    "left",
    "right"
  ],
  "scale": 0.8,
  "walkspeed": 50,
  "fallspeed": 150,
  "jumpspeed": 250,
  "gettingupspeed": 500,
  "walk": {
    "frames": [
      "shimeji/spamton/img/Shimeji/shime1.png",
      "shimeji/spamton/img/Shimeji/shime2.png",
      "shimeji/spamton/img/Shimeji/shime1.png",
      "shimeji/spamton/img/Shimeji/shime3.png"
    ],
    "interval": 90,
    "loops": 3
  },
  "run": {
    "frames": [
      "shimeji/spamton/img/Shimeji/shime1.png",
      "shimeji/spamton/img/Shimeji/shime2.png",
      "shimeji/spamton/img/Shimeji/shime1.png",
      "shimeji/spamton/img/Shimeji/shime3.png"
    ],
    "interval": 30,
    "loops": 6
  },
  "run2": {
    "frames": [
      "shimeji/spamton/img/Shimeji/shime1.png",
      "shimeji/spamton/img/Shimeji/shime2.png",
      "shimeji/spamton/img/Shimeji/shime1.png",
      "shimeji/spamton/img/Shimeji/shime3.png"
    ],
    "interval": 30,
    "loops": 6
  },
  "stand": {
    "frames": [
      "shimeji/spamton/img/Shimeji/shime0.png"
    ],
    "interval": 300,
    "loops": 4
  },
  "sit": {
    "frames": [
      "shimeji/spamton/img/Shimeji/shime11.png"
    ],
    "interval": 300,
    "loops": 1,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "thinkhead": {
    "frames": [
      "shimeji/spamton/img/Shimeji/shime26.png",
      "shimeji/spamton/img/Shimeji/shime15.png",
      "shimeji/spamton/img/Shimeji/shime27.png",
      "shimeji/spamton/img/Shimeji/shime16.png",
      "shimeji/spamton/img/Shimeji/shime28.png",
      "shimeji/spamton/img/Shimeji/shime17.png",
      "shimeji/spamton/img/Shimeji/shime29.png",
      "shimeji/spamton/img/Shimeji/shime11.png"
    ],
    "interval": 150,
    "loops": 1
  },
  "danglelegs": {
    "frames": [
      "shimeji/spamton/img/Shimeji/shime31.png",
      "shimeji/spamton/img/Shimeji/shime32.png",
      "shimeji/spamton/img/Shimeji/shime31.png",
      "shimeji/spamton/img/Shimeji/shime33.png"
    ],
    "interval": 150,
    "loops": 1
  },
  "pet": {
    "frames": [
      "shimeji/spamton/img/Shimeji/shime48.png",
      "shimeji/spamton/img/Shimeji/shime49.png"
    ],
    "interval": 150,
    "loops": 3
  },
  "kromer": {
    "frames": [
      "shimeji/spamton/img/Shimeji/shime67.png",
      "shimeji/spamton/img/Shimeji/shime67b.png",
      "shimeji/spamton/img/Shimeji/shime67.png",
      "shimeji/spamton/img/Shimeji/shime67b.png",
      "shimeji/spamton/img/Shimeji/shime67.png",
      "shimeji/spamton/img/Shimeji/shime61.png",
      "shimeji/spamton/img/Shimeji/shime62.png",
      "shimeji/spamton/img/Shimeji/shime63.png"
    ],
    "interval": 120,
    "loops": 1
  },
  "eat": {
    "frames": [
      "shimeji/spamton/img/Shimeji/shime71.png",
      "shimeji/spamton/img/Shimeji/shime72.png",
      "shimeji/spamton/img/Shimeji/shime73.png",
      "shimeji/spamton/img/Shimeji/shime74.png",
      "shimeji/spamton/img/Shimeji/shime73.png",
      "shimeji/spamton/img/Shimeji/shime72.png",
      "shimeji/spamton/img/Shimeji/shime71.png",
      "shimeji/spamton/img/Shimeji/shime75.png"
    ],
    "interval": 100,
    "loops": 1
  },
  "trip": {
    "frames": [
      "shimeji/spamton/img/Shimeji/shime19.png",
      "shimeji/spamton/img/Shimeji/shime18.png",
      "shimeji/spamton/img/Shimeji/shime20.png",
      "shimeji/spamton/img/Shimeji/shime20.png",
      "shimeji/spamton/img/Shimeji/shime19.png"
    ],
    "interval": 160,
    "loops": 1
  },
  "forcewalk": {
    "loops": 6
  },
  "forcethink": {
    "frames": [
      "shimeji/spamton/img/Shimeji/shime26.png",
      "shimeji/spamton/img/Shimeji/shime15.png",
      "shimeji/spamton/img/Shimeji/shime27.png",
      "shimeji/spamton/img/Shimeji/shime11.png"
    ],
    "interval": 200,
    "loops": 1
  },
  "drag": {
    "frames": [
      "shimeji/spamton/img/Shimeji/shime9.png",
      "shimeji/spamton/img/Shimeji/shime7.png",
      "shimeji/spamton/img/Shimeji/shime5.png",
      "shimeji/spamton/img/Shimeji/shime47.png",
      "shimeji/spamton/img/Shimeji/shime6.png",
      "shimeji/spamton/img/Shimeji/shime8.png",
      "shimeji/spamton/img/Shimeji/shime10.png"
    ],
    "interval": 200
  },
  "falling": {
    "frames": [
      "shimeji/spamton/img/Shimeji/shime4.png"
    ],
    "interval": 200,
    "loops": 2
  },
  "fallen": {
    "frames": [
      "shimeji/spamton/img/Shimeji/shime18.png",
      "shimeji/spamton/img/Shimeji/shime19.png"
    ],
    "interval": 150,
    "loops": 1
  },
  "ORIGINAL_ACTIONS": [
    "walk",
    "walk",
    "run",
    "run2",
    "stand",
    "stand",
    "sit",
    "thinkhead",
    "danglelegs",
    "kromer",
    "trip"
  ],
  "EDGE_ACTIONS": [
    "hang",
    "hang",
    "climb",
    "climb",
    "climb",
    "fall"
  ],
  "JUMP_CHANCE": 0.15,
  "climbSide": {
    "frames": [
      "shimeji/spamton/img/Shimeji/shime14.png",
      "shimeji/spamton/img/Shimeji/shime12.png",
      "shimeji/spamton/img/Shimeji/shime13.png"
    ],
    "interval": 160,
    "loops": 2
  },
  "hangstillSide": {
    "frames": [
      "shimeji/spamton/img/Shimeji/shime13.png"
    ],
    "interval": 200,
    "loops": 2,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "climbTop": {
    "frames": [
      "shimeji/spamton/img/Shimeji/shime25.png",
      "shimeji/spamton/img/Shimeji/shime23.png",
      "shimeji/spamton/img/Shimeji/shime24.png"
    ],
    "interval": 160,
    "loops": 4
  },
  "hangstillTop": {
    "frames": [
      "shimeji/spamton/img/Shimeji/shime23.png"
    ],
    "interval": 200,
    "loops": 2,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "jump": {
    "frames": [
      "shimeji/spamton/img/Shimeji/shime22.png"
    ],
    "interval": 200
  }
};

window.Susie_CONFIG = {
  "ALLOWANCES": [
    "drag",
    "bottom",
    "top",
    "left",
    "right"
  ],
  "scale": 0.8,
  "walkspeed": 75,
  "fallspeed": 150,
  "jumpspeed": 250,
  "gettingupspeed": 500,
  "walk": {
    "frames": [
      "shimeji/susie shimeji/img/Shimeji/shime2.png",
      "shimeji/susie shimeji/img/Shimeji/shime3.png",
      "shimeji/susie shimeji/img/Shimeji/shime2.png",
      "shimeji/susie shimeji/img/Shimeji/shime3.png"
    ],
    "interval": 110,
    "loops": 3
  },
  "run": {
    "frames": [
      "shimeji/susie shimeji/img/Shimeji/shime30.png",
      "shimeji/susie shimeji/img/Shimeji/shime31.png",
      "shimeji/susie shimeji/img/Shimeji/shime30.png",
      "shimeji/susie shimeji/img/Shimeji/shime31.png"
    ],
    "interval": 45,
    "loops": 5
  },
  "run2": {
    "frames": [
      "shimeji/susie shimeji/img/Shimeji/shime30.png",
      "shimeji/susie shimeji/img/Shimeji/shime31.png",
      "shimeji/susie shimeji/img/Shimeji/shime30.png",
      "shimeji/susie shimeji/img/Shimeji/shime31.png"
    ],
    "interval": 30,
    "loops": 6
  },
  "stand": {
    "frames": [
      "shimeji/susie shimeji/img/Shimeji/shime1.png"
    ],
    "interval": 300,
    "loops": 4
  },
  "sit": {
    "frames": [
      "shimeji/susie shimeji/img/Shimeji/shime11.png"
    ],
    "interval": 300,
    "loops": 1,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "dance": {
    "frames": [
      "shimeji/susie shimeji/img/Shimeji/dance/shime1.png",
      "shimeji/susie shimeji/img/Shimeji/dance/shime2.png",
      "shimeji/susie shimeji/img/Shimeji/dance/shime3.png",
      "shimeji/susie shimeji/img/Shimeji/dance/shime4.png",
      "shimeji/susie shimeji/img/Shimeji/dance/shime5.png",
      "shimeji/susie shimeji/img/Shimeji/dance/shime6.png"
    ],
    "interval": 70,
    "loops": 4
  },
  "kiss": {
    "frames": [
      "shimeji/susie shimeji/img/Shimeji/shime1.png",
      "shimeji/susie shimeji/img/Shimeji/kiss/shime1.png",
      "shimeji/susie shimeji/img/Shimeji/kiss/shime2.png",
      "shimeji/susie shimeji/img/Shimeji/kiss/shime3.png",
      "shimeji/susie shimeji/img/Shimeji/kiss/shime4.png",
      "shimeji/susie shimeji/img/Shimeji/kiss/shime5.png",
      "shimeji/susie shimeji/img/Shimeji/kiss/shime6.png",
      "shimeji/susie shimeji/img/Shimeji/kiss/shime7.png",
      "shimeji/susie shimeji/img/Shimeji/kiss/shime8.png",
      "shimeji/susie shimeji/img/Shimeji/kiss/shime9.png"
    ],
    "interval": 100,
    "loops": 1
  },
  "yummy": {
    "frames": [
      "shimeji/susie shimeji/img/Shimeji/yummy/shime1.png",
      "shimeji/susie shimeji/img/Shimeji/yummy/shime2.png",
      "shimeji/susie shimeji/img/Shimeji/yummy/shime3.png",
      "shimeji/susie shimeji/img/Shimeji/yummy/shime4.png"
    ],
    "interval": 200,
    "loops": 3
  },
  "buster": {
    "frames": [
      "shimeji/susie shimeji/img/Shimeji/shime51a.png",
      "shimeji/susie shimeji/img/Shimeji/shime51b.png",
      "shimeji/susie shimeji/img/Shimeji/shime51c.png",
      "shimeji/susie shimeji/img/Shimeji/shime51d.png",
      "shimeji/susie shimeji/img/Shimeji/shime52a.png",
      "shimeji/susie shimeji/img/Shimeji/shime52b.png",
      "shimeji/susie shimeji/img/Shimeji/shime52c.png",
      "shimeji/susie shimeji/img/Shimeji/shime52d.png"
    ],
    "interval": 80,
    "loops": 1
  },
  "telescope": {
    "frames": [
      "shimeji/susie shimeji/img/Shimeji/telescope/shime1.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime2.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime3.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime4.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime5.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime6.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime7.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime8.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime9.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime10.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime11.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime12.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime13.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime14.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime15.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime16.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime17.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime18.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime19.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime20.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime21.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime22.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime23.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime24.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime25.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime26.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime27.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime28.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime29.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime30.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime31.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime32.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime33.png",
      "shimeji/susie shimeji/img/Shimeji/telescope/shime34.png"
    ],
    "interval": 150,
    "loops": 1
  },
  "laugh": {
    "frames": [
      "shimeji/susie shimeji/img/Shimeji/shime53.png",
      "shimeji/susie shimeji/img/Shimeji/shime54.png",
      "shimeji/susie shimeji/img/Shimeji/shime53.png",
      "shimeji/susie shimeji/img/Shimeji/shime54.png",
      "shimeji/susie shimeji/img/Shimeji/shime53.png",
      "shimeji/susie shimeji/img/Shimeji/shime54.png",
      "shimeji/susie shimeji/img/Shimeji/shime53.png"
    ],
    "interval": 170,
    "loops": 1
  },
  "talk": {
    "frames": [
      "shimeji/susie shimeji/img/Shimeji/shime1.png",
      "shimeji/susie shimeji/img/Shimeji/shime53.png",
      "shimeji/susie shimeji/img/Shimeji/shime54.png",
      "shimeji/susie shimeji/img/Shimeji/shime53.png",
      "shimeji/susie shimeji/img/Shimeji/shime54.png",
      "shimeji/susie shimeji/img/Shimeji/shime53.png",
      "shimeji/susie shimeji/img/Shimeji/shime54.png",
      "shimeji/susie shimeji/img/Shimeji/shime53.png"
    ],
    "interval": 150,
    "loops": 1
  },
  "trip": {
    "frames": [
      "shimeji/susie shimeji/img/Shimeji/shime18aa.png"
    ],
    "interval": 400,
    "loops": 4
  },
  "forcewalk": {
    "loops": 6
  },
  "forcethink": {
    "frames": [
      "shimeji/susie shimeji/img/Shimeji/shime26.png",
      "shimeji/susie shimeji/img/Shimeji/shime27.png",
      "shimeji/susie shimeji/img/Shimeji/shime28.png",
      "shimeji/susie shimeji/img/Shimeji/shime29.png",
      "shimeji/susie shimeji/img/Shimeji/shime11.png"
    ],
    "interval": 200,
    "loops": 1
  },
  "drag": {
    "frames": [
      "shimeji/susie shimeji/img/Shimeji/shime9.png",
      "shimeji/susie shimeji/img/Shimeji/shime7.png",
      "shimeji/susie shimeji/img/Shimeji/shime5.png",
      "shimeji/susie shimeji/img/Shimeji/shime1c.png",
      "shimeji/susie shimeji/img/Shimeji/shime6.png",
      "shimeji/susie shimeji/img/Shimeji/shime8.png",
      "shimeji/susie shimeji/img/Shimeji/shime10.png"
    ],
    "interval": 200
  },
  "falling": {
    "frames": [
      "shimeji/susie shimeji/img/Shimeji/shime4.png"
    ],
    "interval": 200,
    "loops": 2
  },
  "fallen": {
    "frames": [
      "shimeji/susie shimeji/img/Shimeji/shime18.png",
      "shimeji/susie shimeji/img/Shimeji/shime19.png"
    ],
    "interval": 150,
    "loops": 1
  },
  "ORIGINAL_ACTIONS": [
    "walk",
    "walk",
    "run",
    "run2",
    "stand",
    "stand",
    "sit",
    "trip",
    "dance",
    "dance",
    "dance",
    "kiss",
    "yummy",
    "telescope",
    "laugh",
    "talk",
    "talk"
  ],
  "EDGE_ACTIONS": [
    "hang",
    "hang",
    "climb",
    "climb",
    "climb",
    "fall"
  ],
  "JUMP_CHANCE": 0.15,
  "climbSide": {
    "frames": [
      "shimeji/susie shimeji/img/Shimeji/shime14.png",
      "shimeji/susie shimeji/img/Shimeji/shime13.png",
      "shimeji/susie shimeji/img/Shimeji/shime12.png",
      "shimeji/susie shimeji/img/Shimeji/shime13.png"
    ],
    "interval": 160,
    "loops": 2
  },
  "hangstillSide": {
    "frames": [
      "shimeji/susie shimeji/img/Shimeji/shime12.png"
    ],
    "interval": 200,
    "loops": 2,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "climbTop": {
    "frames": [
      "shimeji/susie shimeji/img/Shimeji/shime23.png",
      "shimeji/susie shimeji/img/Shimeji/shime24.png"
    ],
    "interval": 150,
    "loops": 4
  },
  "hangstillTop": {
    "frames": [
      "shimeji/susie shimeji/img/Shimeji/shime25a.png"
    ],
    "interval": 200,
    "loops": 2,
    "randomizeDuration": true,
    "min": 1500,
    "max": 4000
  },
  "jump": {
    "frames": [
      "shimeji/susie shimeji/img/Shimeji/shime22.png"
    ],
    "interval": 200
  }
};

