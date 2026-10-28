# Art Nouveau Carrd

Open `index.html` through a local server (or upload the folder to any static host).

## Customising

**Colours, fonts and sizes** – edit the variables at the top of `style.css` (`:root { ... }`):

| Variable | Controls |
| --- | --- |
| `--page-bg-image`, `--page-bg-color` | Background behind the card |
| `--frame`, `--frame-dark`, `--line` | Outer sage frame and outline colour |
| `--cream` | Inner page colour |
| `--nav-bg`, `--nav-text`, `--nav-sep` | Navigation pill |
| `--title-color`, `--label-color`, `--text-color` | Heading, Name/Timezone labels, body text |
| `--accent`, `--highlight`, `--link` | Bold coloured phrases, highlighted words, links |
| `--font-*` | Fonts (change the Google Fonts link in `index.html` to match) |
| `--card-width`, `--title-size`, `--body-size`, `--nav-size` | Sizing |

**Text** – edit `index.html`. Each page is a `<section class="page" id="...">`; the nav links jump to them by id. The page with class `default` shows first.

- `<span class="accent">` – bold coloured phrase
- `<span class="hl">` – highlighted phrase
- `.info` list – Name / Timezone / Pronouns rows (add or remove `<li>`s)

**Images** – swap files in `assets/` keeping the same names, or change the `src` in `index.html`:

- `header.png` – swan banner
- `strip.png` – floral border strip
- `title-ornament.png` – lily frame behind each page title (transparent)
- `portrait.png` – profile picture
- `painting.png` – picture under the about text
- `footer.png` – bottom panel
- `background.jpg` – page background

**Adding a page** – copy a `<section class="page">` block, give it a new `id`, and add a matching `<li><a href="#id">` to the nav.
