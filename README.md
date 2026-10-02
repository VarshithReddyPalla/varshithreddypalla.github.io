# Varshith Reddy Palla - Portfolio

Personal portfolio showcasing software engineering, Python automation, automotive
software, and AI projects. Built with HTML, CSS, and vanilla JavaScript for GitHub
Pages, with no package installation or build step required.

## Features

- Responsive layout with mobile navigation
- Light and dark themes (light by default), with a saved visitor preference
- German and English content (German by default), with a saved language choice
- Filterable project cards and scroll reveal animations
- Experience, skills, education, and contact sections

## Project structure

```text
index.html     Page content and metadata
styles.css     Layout, typography, and responsive styles
script.js      Navigation, filters, animations, and footer year
preferences.js Restores the saved theme before the page is painted
locales/de.js  German text
locales/en.js  English text
assets/       German CV: Varshith_Palla_Lebenslauf.pdf
.nojekyll      Disables Jekyll processing on GitHub Pages
.editorconfig  Shared editor formatting defaults
.gitattributes Consistent Git line endings
.gitignore     Excludes local settings and generated files
```

## Local preview

You can open `index.html` directly in a browser, or run a small local server:

```bash
python -m http.server 8000 --bind 127.0.0.1
```

Then open:

```text
http://localhost:8000
```

Stop the server with `Ctrl+C`.

## Push to GitHub

This local repository is initialized on `main` with an initial commit.

1. Create an **empty** repository on GitHub. Leave the options to add a README,
   license, and `.gitignore` unchecked, since the local history already exists.
2. For a personal GitHub Pages site, name it `<username>.github.io`. For example,
   if your account is `VarshithReddyPalla`, use `varshithreddypalla.github.io`.
3. Copy the repository's HTTPS URL, then run these commands from this folder,
   replacing `YOUR_USERNAME` and `YOUR_REPOSITORY`:

```sh
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Authenticate with your GitHub account when prompted. If you already added a
remote, inspect it with `git remote -v` and use `git remote set-url origin URL`
to correct it if needed.

## Publish with GitHub Pages

After the first push:

1. Open the repository's **Settings > Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose **main** and **/ (root)**, then **Save**.
4. Wait for the Pages deployment to complete; the Pages settings show the site URL.

A repository named `<username>.github.io` publishes at
`https://<username>.github.io/`. Other repository names publish at
`https://<username>.github.io/<repository>/`. The site's relative asset links
support both layouts. Use a public repository for GitHub Pages on GitHub Free.

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

### CV / Lebenslauf

Save your German CV as `assets/Varshith_Palla_Lebenslauf.pdf` (match capitalization).
The header link after Kontakt/Contact is labeled **Lebenslauf** in German and
**CV** in English. Both open the same German PDF in a new tab. To update it later,
replace the PDF at the same path.

### Publishing changes

Edit content in `index.html`, appearance in `styles.css`, and interactions in
`script.js`. Preview changes locally and check mobile navigation, project filters,
and contact links before publishing.

```sh
git add index.html styles.css script.js preferences.js locales assets README.md
git commit -m "Update portfolio"
git push
```

Once Pages is enabled, pushes to `main` trigger a new deployment.

## Notes

- Do not publish confidential company code, internal URLs, credentials, logs, or proprietary data.
- Professional project descriptions in this site are intentionally high-level.
- Replace or add repository links to project cards when public repositories are ready.
