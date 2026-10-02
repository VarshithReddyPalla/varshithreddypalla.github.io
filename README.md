# Varshith Reddy Palla - Portfolio

Personal portfolio showcasing software engineering, Python automation, automotive
software, and AI projects. Built with HTML, CSS, and vanilla JavaScript for GitHub
Pages, with no package installation or build step required.

[GitHub repository](https://github.com/VarshithReddyPalla/varshithreddypalla.github.io)
| [Portfolio URL](https://varshithreddypalla.github.io/)

## Features

- Responsive layout with mobile navigation
- Light and dark themes (light by default), with a saved visitor preference
- German and English content (German by default), with a saved language choice
- Filterable project cards and scroll reveal animations
- Experience, skills, education, and contact sections
- Lebenslauf / CV navigation link opening the same German PDF in a new tab

## Project structure

```text
index.html     Page content and metadata
styles.css     Layout, typography, and responsive styles
script.js      Navigation, filters, animations, and footer year
preferences.js Restores the saved theme before the page is painted
locales/de.js  German text
locales/en.js  English text
assets/        German CV: Varshith_Palla_Lebenslauf.pdf and update instructions
.nojekyll      Disables Jekyll processing on GitHub Pages
.editorconfig  Shared editor formatting defaults
.gitattributes Consistent Git line endings
.gitignore     Excludes local settings and generated files
```

## Local preview

To work from a new computer, clone the repository first:

```sh
git clone https://github.com/VarshithReddyPalla/varshithreddypalla.github.io.git
cd varshithreddypalla.github.io
```

If you already have this project open locally, use its existing folder.

You can open `index.html` directly in a browser, or run a small local server:

```bash
python -m http.server 8000 --bind 127.0.0.1
```

Then open:

```text
http://localhost:8000
```

Stop the server with `Ctrl+C`.

## Repository

The working branch is `main`, tracking `origin/main`. The remote is:

```text
https://github.com/VarshithReddyPalla/varshithreddypalla.github.io.git
```

Use `git status` to review local changes and `git remote -v` to inspect the remote.
The repository is already initialized; there is no need to run `git init` or add
`origin` again. See **Publishing changes** below for routine updates.

## Publish with GitHub Pages

To enable or check deployment in the GitHub repository:

1. Open the repository's **Settings > Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose **main** and **/ (root)**, then **Save**.
4. Wait for the Pages deployment to complete; the Pages settings show the site URL.

The expected address for this repository is
<https://varshithreddypalla.github.io/>. Check the Pages settings and deployment
status on GitHub to confirm publication. Relative asset paths also support
hosting the site under a repository subpath.

See the [GitHub Pages publishing documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Make updates

### Languages and themes

Edit German copy in `locales/de.js` and English copy in `locales/en.js` independently.
Each entry has a stable key such as `projects.job.title`; keep the same keys in both
files. Elements in `index.html` use `data-i18n="projects.job.title"` to select their
text. Use plain text in translations, not HTML. To add a text block, add its key to
both language files and its `data-i18n` attribute to the corresponding HTML element.
The German text in `index.html` is also the fallback when JavaScript is unavailable;
keep that fallback in sync when editing German content. Code examples, company
names, and technology names can stay in their original language.

Theme colors are defined at the top of `styles.css`: `:root` contains the light
palette and `:root[data-theme="dark"]` contains dark overrides. The code sample
keeps its dark editor appearance in both themes.

New visitors start with German and the light theme. Explicit choices are stored in
`localStorage` under `portfolio.language` and `portfolio.theme`; browser language
and operating-system theme do not override these defaults. If storage is disabled,
the controls continue to work for the current visit.

To check the first-visit defaults again, clear this site's local storage in your
browser's developer tools, then reload. The language scripts load directly, so
switching languages also works when opening `index.html` from disk.

### CV / Lebenslauf

Save your German CV as `assets/Varshith_Palla_Lebenslauf.pdf` (match capitalization).
The header link after Kontakt/Contact is labeled **Lebenslauf** in German and
**CV** in English. Both open the same German PDF in a new tab. To update it later,
replace the PDF at the same path.

Only the link label changes with the selected language; the PDF stays German.
The link does not force a download. Browsers with PDF viewing enabled display it
directly; the visitor's browser settings can choose download behavior instead.

### Publishing changes

Edit translated text in `locales/de.js` and `locales/en.js`, the page structure and
German fallback in `index.html`, appearance in `styles.css`, and interactions in
`script.js`. Keep `preferences.js` before the stylesheet so a saved theme applies
before the page is painted.

Before publishing, preview both languages and themes at desktop and mobile widths.
Check navigation, project filters, contact links, and the PDF. Reload to verify
that language and theme choices persist.

```sh
git status
git diff --check
git add README.md assets index.html styles.css script.js preferences.js locales .gitattributes
git diff --cached --stat
git commit -m "Update portfolio"
git push origin main
```

Stage only files you intend to publish. Once Pages is enabled, pushes to `main`
trigger a new deployment. No npm install, build command, or custom workflow is
required for this static site.

## Notes

- Do not publish confidential company code, internal URLs, credentials, logs, or proprietary data.
- Professional project descriptions in this site are intentionally high-level.
- Replace or add repository links to project cards when public repositories are ready.
