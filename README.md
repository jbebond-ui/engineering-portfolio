# James Ly Engineering Portfolio

An Apple-inspired engineering portfolio built with HTML, CSS, and vanilla JavaScript. Large project imagery, quiet typography, and interactive case studies make the work easy to scan and explore. There are no runtime dependencies, package installation, or build steps.

## Content

Project details come from James's updated résumé, co-op project notes, direct clarifications, and [original Wix portfolio](https://lyjames31.wixsite.com/engineeringportfolio). Product imagery comes from Apple's and simplehuman's official product pages; other photographs come from the original portfolio. [content-source.md](content-source.md) records attribution and calculation notes. Images are served locally from `assets/`. The supplied résumé and handoff documents are not distributed with the site.

Nine case studies follow this presentation order:

- **Apple iPhone servicing:** Siemens NX design, material selection, and manufacturability.
- **Apple AirPods:** test coverage, line architecture, and AI-assisted analysis.
- **Apple HomeView:** UDPPM analysis supporting throughput and yield work.
- **simplehuman LED testing:** button endurance, USB-C durability, charging-test development, and TKlamp data analysis.
- **simplehuman sensor cans and mirrors:** operating measurements, return investigations, functional and firmware testing, and fixtures for the sensor-can and Sensor Mirror Trio Max families.
- **simplehuman soap-pump reliability:** teardown analysis, an automated fluid-recycling carousel, and fluid-dispenser R&D.
- **Custom FPV drone:** component selection, assembly, configuration, and flight iteration.
- **BGE infrastructure intelligence:** GIS ranking and automation across utility assets.
- **BGE UAS engineering:** utility drone payload design and field operations.

The Apple analysis-time reduction is an estimate: `(45 − 10) / 45 × 100 ≈ 78%`, rounded to the nearest percent. The approximately 50% touch-test reduction summarizes the source's “nearly halved” description. Both are labeled as estimates in the interface. BGE figures use the owner's updated account: $15M+ in cost efficiencies, 3M+ assets, and three weeks reduced to one day.

The simplehuman split preserves the scope of each result: 100,000+ cycles refers to LED button testing, 25+ units refers to flashlight data visualizations, and the recycler fixture serves approximately ten units. Charging-test development progressed from manual connections to a linear actuator and a magnetic adapter; magnetic reconnection does not reproduce native USB-C port insertion wear. The owner confirmed work on the 58L Sensor Recycler, 58L Sensor Can, semi-round sensor can, and Sensor Mirror Trio Max. Their public product photos illustrate the commercial products rather than custom test fixtures. No additional test-process diagram is included.

Drexel is included as education context only; no additional academic projects are invented. Tesla and Nanotronics are intentionally excluded from this portfolio.

## Interactions and accessibility

Project filters narrow the work by discipline and announce the result count. Native project dialogs provide detailed case studies with Escape-to-close behavior and return focus to the opening button. The engineering process uses keyboard-operable tabs, and compact screens have a collapsible navigation menu.

Visible focus styles, a skip link, descriptive image text, and reduced-motion support are built in. Scroll reveals and subtle imagery movement respect the visitor's motion preference.

## Favicon directions

Open [favicon-options.html](favicon-options.html) to compare JL Precision, JL Studio, Orbit, and Fold at 16, 24, and 32 pixels. The chooser includes light/dark browser-tab previews and SVG downloads. JL Precision is the owner-confirmed default. A `?icon=precision`, `?icon=ligature`, `?icon=orbit`, or `?icon=fold` URL previews an alternative on the portfolio without changing its default.

## Local preview

From the repository root, run:

```sh
python -m http.server 8000
```

Open [localhost:8000](http://localhost:8000). On Windows, `py -m http.server 8000` also works when Python is installed through the Python launcher.

## Editing

- `index.html`: page structure, project summaries, navigation, and contact links.
- `styles.css`: responsive layout, typography, visual states, and motion preferences.
- `script.js`: interactive project details and interface behavior.
- `assets/`: optimized source photographs and product images.
- `content-source.md`: provenance and limits on claims taken from the original portfolio.

Keep asset paths relative so the site works both at a domain root and under GitHub Pages' `/engineering-portfolio/` path. Check keyboard navigation, visible focus, mobile layout, and reduced-motion behavior when changing interactions.

## GitHub Pages

Existing site: [jbebond-ui.github.io/engineering-portfolio](https://jbebond-ui.github.io/engineering-portfolio/).

Repository: [jbebond-ui/engineering-portfolio](https://github.com/jbebond-ui/engineering-portfolio). Its existing Pages deployment runs from `main`.

To publish this version, commit the site files and `assets/`, then push to `main`. In **Settings → Pages**, the branch-based setup should use **main / (root)**. The root `.nojekyll` file tells Pages to publish the static files directly. Wait for **pages build and deployment** in the repository's Actions tab to succeed, then check the live URL.

See [GitHub's publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Vercel

Import the same GitHub repository and use:

| Setting | Value |
| --- | --- |
| Framework Preset | Other |
| Root Directory | Repository root |
| Build Command | Override enabled, left empty |
| Output Directory | `.` (repository root) |
| Install Command | None required |

No `vercel.json`, environment variables, server functions, or routing rewrites are required. Vercel can serve this HTML/CSS/JavaScript site directly. See [Vercel's static-site build settings](https://vercel.com/docs/builds/configure-a-build#skip-build-step).
