<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Ezhunai/website/main/assets/ezhunai-brand-poster-dark.jpg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Ezhunai/website/main/assets/ezhunai-brand-poster-light.jpg">
  <img alt="Ezhunai — Learn together. Build together. Rise together." src="https://raw.githubusercontent.com/Ezhunai/website/main/assets/ezhunai-brand-poster-light.jpg" width="100%" />
</picture>

<br /><br />

# எழுநை • Ezhunai
### Learn Together • Build Together • Rise Together

<br />

[![Production Portal](https://img.shields.io/badge/PORTAL-ezhunai.isroot.in-0A0A0A?style=for-the-badge&logo=googlechrome&logoColor=F4F1EA&labelColor=354D30)](https://ezhunai.isroot.in)
[![CI Status](https://img.shields.io/github/actions/workflow/status/Ezhunai/website/ci.yml?branch=main&label=CI%20CHECKS&style=for-the-badge&labelColor=171717&color=354D30)](https://github.com/Ezhunai/website/actions/workflows/ci.yml)
[![Deployment](https://img.shields.io/badge/DEPLOYMENT-GITHUB%20PAGES-0A0A0A?style=for-the-badge&logo=githubpages&logoColor=white&labelColor=171717)](https://ezhunai.isroot.in)
[![License](https://img.shields.io/badge/LICENSE-MIT-0A0A0A?style=for-the-badge&labelColor=354D30)](LICENSE)

<br />

[![Discord Community](https://img.shields.io/badge/COMMUNITY-DISCORD-0A0A0A?style=for-the-badge&logo=discord&logoColor=white&labelColor=171717)](https://discord.gg/8Pd6nUmWFy)
[![WhatsApp Channel](https://img.shields.io/badge/UPDATES-WHATSAPP-0A0A0A?style=for-the-badge&logo=whatsapp&logoColor=25D366&labelColor=171717)](https://chat.whatsapp.com/LVGGC3lCBJG78k4rkcPijB)
[![Instagram Dispatch](https://img.shields.io/badge/DISPATCHES-INSTAGRAM-0A0A0A?style=for-the-badge&logo=instagram&logoColor=E4405F&labelColor=171717)](https://www.instagram.com/ezhunai/)
[![YouTube Sessions](https://img.shields.io/badge/TALKS-YOUTUBE-0A0A0A?style=for-the-badge&logo=youtube&logoColor=FF0000&labelColor=171717)](https://www.youtube.com/@Ezhunai)

<br />

**A Tamil-rooted, globally welcoming peer-to-peer learning community.**  
*Built around the principle that everyone has something to learn, and everyone has something to share.*

<br />

[Manifesto](#manifesto) • [Etymology](#etymology--linguistic-identity) • [Architecture](#engineering--architecture) • [Design System](#design-system--tokens) • [Local Development](#local-development) • [Community](#official-channels)

</div>

---

> ### கற்றது கைமண் அளவு, கல்லாதது உலகளவு
> *“What we have learned is like a handful of sand; what we have yet to learn is as vast as the world.”*  
> — **Avvaiyar (ஔவையார்)**

---

## Manifesto

Ezhunai is an independent initiative designed to bring curious minds together to exchange knowledge, explore interdisciplinary interests, develop practical skills, and build collaborative projects.

The initiative does not operate as a conventional academy, a credential institution, or a commercial course provider. Instead, it fosters an environment of equals where members participate simultaneously as apprentices and practitioners.

While deeply rooted in Tamil cultural heritage and linguistic nuance, the community maintains an open, borderless circle. We welcome individuals across all cultures, languages, and technical proficiencies, using English as an inclusive medium of collaboration whenever necessary.

> [!NOTE]
> Ezhunai is non-commercial, privacy-respecting, and free from mandatory tracking or data collection. Participation is driven purely by intrinsic curiosity and peer contribution.

---

## Etymology & Linguistic Identity

The name **Ezhunai** reflects the synthesis of two classical Tamil words:

| Tamil Root | Romanization | Phonetic IPA | Semantic Origin | Community Philosophy |
| :---: | :--- | :--- | :--- | :--- |
| **எழு** | *Ezhu* | `/eɻʊ/` | To rise, awaken, emerge, or ascend | Perpetual curiosity and progressive advancement |
| **இணை** | *Inai* | `/iɳaɪ̯/` | To connect, bond, or unite as equals | Peer-to-peer fellowship without hierarchy |
| **எழுநை** | **Ezhunai** | `/eɻʊnaɪ̯/` | **Rise Together** | **A collective space where everyone learns and teaches** |

---

## Engineering & Architecture

The production web portal is engineered under a zero-dependency philosophy, ensuring resilience, instantaneous paint times, zero client bloat, and generational longevity.

<div align="center">

[![Semantic HTML5](https://img.shields.io/badge/MARKUP-HTML5_SEMANTIC-0A0A0A?style=flat-square&logo=html5&logoColor=E34F26&labelColor=171717)](index.html)
[![Modern CSS3](https://img.shields.io/badge/STYLING-VANILLA_CSS3-0A0A0A?style=flat-square&logo=css3&logoColor=1572B6&labelColor=171717)](style.css)
[![Pure JavaScript](https://img.shields.io/badge/SCRIPTING-ES6+_VANILLA-0A0A0A?style=flat-square&logo=javascript&logoColor=F7DF1E&labelColor=171717)](app.js)
[![Zero Build](https://img.shields.io/badge/RUNTIME-ZERO_DEPENDENCY-0A0A0A?style=flat-square&logo=nodedotjs&logoColor=5FA04E&labelColor=171717)](package.json)
[![Automated CI](https://img.shields.io/badge/ASSURANCE-GITHUB_ACTIONS-0A0A0A?style=flat-square&logo=githubactions&logoColor=2088FF&labelColor=171717)](.github/workflows/ci.yml)
[![Global Edge](https://img.shields.io/badge/NETWORK-GITHUB_PAGES-0A0A0A?style=flat-square&logo=githubpages&logoColor=white&labelColor=171717)](https://ezhunai.isroot.in)

</div>

### Architectural Highlights

- **Pure Semantic Markup**: Structured in WCAG 2.1 AA accessible HTML with logical landmark regions (`<header>`, `<main>`, `<nav>`, `<footer>`).
- **Fluid Editorial Typography**: High-contrast, responsive clamp scales calculated across modern viewports with zero external CSS frameworks.
- **Micro-Interactions**: Vanilla JavaScript powers the persistent glassmorphism header elevation, mobile navigation drawer, and touch-pause marquee track.
- **Motion Accessibility**: Full support for the `prefers-reduced-motion` media query, accompanied by an explicit accessible pause/play toggle.
- **Machine & Agent Discovery**: Adheres strictly to the `/llm.txt` standard alongside XML sitemaps and Schema.org JSON-LD structured semantic graphs.
- **Edge Deployment**: Globally distributed over GitHub Pages Anycast infrastructure with automated Let's Encrypt TLS certificates.

---

## Design System & Tokens

Ezhunai's visual language pairs high-contrast editorial minimalism with warm, tactile paper surfaces and botanically grounded olive accents:

| Token | Swatch | Color Name | Hex Code | Purpose |
| :--- | :---: | :--- | :--- | :--- |
| `--bg-base` | `⬛` | **Deep Obsidian** | `0A0A0A` | Primary dark base, high-density typography, footer anchor |
| `--bg-surface` | `⬜` | **Warm Parchment** | `F4F1EA` | Editorial canvas, tactile paper warmth, natural contrast |
| `--accent-forest` | `🟩` | **Deep Forest Olive** | `354D30` | Core botanical identity, primary action buttons, badge accents |
| `--accent-sage` | `🪨` | **Muted Sage** | `526248` | Secondary badges, border hover states, tertiary accents |
| `--border-subtle` | `◾` | **Onyx Border** | `1E201E` | Monochromatic structure dividers, geometric card outlines |

---

## Repository Structure

```text
website/
├── .github/
│   └── workflows/
│       └── ci.yml               # Automated syntax, link & asset verification
├── assets/
│   ├── ezhunai-brand-poster-dark.jpg   # Brand poster artwork (Dark Mode)
│   ├── ezhunai-brand-poster-light.jpg  # Brand poster artwork (Light Mode)
│   ├── ezhunai-hero-community.webp     # Hero photographic visual
│   ├── ezhunai-logo.jpg                # Vector mark and circular emblem
│   └── *.svg                           # Social & platform SVG iconography
├── scripts/
│   ├── check-links.mjs          # Asset reference and anchor link validator
│   └── serve.mjs                # Zero-dependency local Node.js preview server
├── legacy/                      # Archival backend and Cloudflare Worker artifacts
├── 404.html                     # Clean, static, brand-consistent error page
├── index.html                   # Main production landing page
├── style.css                    # Production stylesheet
├── app.js                       # Interactive client logic
├── CNAME                        # Apex custom domain pointer (ezhunai.isroot.in)
├── .nojekyll                    # Disables Jekyll processing on GitHub Pages
├── llm.txt                      # Concise LLM community manifest
├── llms-full.txt                # Full-context LLM specification
├── robots.txt                   # Search crawler directives
├── sitemap.xml                  # Production XML sitemap
├── package.json                 # Project scripts and manifest
├── CONTRIBUTING.md              # Contributor guidelines
├── CODE_OF_CONDUCT.md           # Community behavioral standards
├── SECURITY.md                  # Vulnerability disclosure policy
└── LICENSE                      # MIT License
```

---

## Local Development

The project is built intentionally with zero runtime dependencies. Running and validating the site requires only Node.js (version 18 or newer).

### Starting the Local Preview Server

```bash
# Clone the repository
git clone https://github.com/Ezhunai/website.git
cd website

# Start the zero-dependency local preview server
npm run dev
```

Navigate to `http://localhost:3000` in any web browser.

### Running Automated Verification

```bash
# Run the automated link, asset, and HTML validator
npm test
```

This script verifies:
- All referenced image and vector assets exist on disk.
- All internal section anchors (`#ethos`, `#spheres`, etc.) resolve to valid element IDs.
- CSS and JS assets are properly linked and formatted.

<details>
<summary><b>View Continuous Integration (CI) Configuration Details</b></summary>

<br />

The `.github/workflows/ci.yml` workflow runs automatically on every push and pull request to `main`. It executes `node scripts/check-links.mjs` against Node.js 18, 20, and 22 across Ubuntu environments to guarantee zero broken links and asset integrity before any deployment goes live.

```yaml
name: CI Link & Asset Integrity Checker
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm test
```

</details>

---

## Official Channels

| Platform | Handle / Identifier | Link | Focus Area |
| :--- | :--- | :--- | :--- |
| **Production Web** | `ezhunai.isroot.in` | [Launch Portal](https://ezhunai.isroot.in) | Primary public gateway and community documentation |
| **Discord Server** | `Ezhunai Collective` | [Join Collective](https://discord.gg/8Pd6nUmWFy) | Daily voice discussions, real-time collaboration, and learning rooms |
| **WhatsApp Community** | `Ezhunai Announcements`| [Join Channel](https://chat.whatsapp.com/LVGGC3lCBJG78k4rkcPijB) | Async notices, weekly agendas, and meeting reminders |
| **Instagram** | `@ezhunai` | [View Dispatches](https://www.instagram.com/ezhunai/) | Visual essays, quote cards, and community highlights |
| **YouTube** | `@Ezhunai` | [Watch Sessions](https://www.youtube.com/@Ezhunai) | Recorded sessions, project demos, and lightning talks |
| **GitHub Organization**| `@Ezhunai` | [Explore Code](https://github.com/Ezhunai) | Open source repositories, toolkits, and educational codebases |

---

## Contributing

We welcome contributions of all kinds—from correcting typos and refining accessibility to sharing new open-source learning tools.

1. Review our [Contributing Guidelines](CONTRIBUTING.md).
2. Familiarize yourself with our [Code of Conduct](CODE_OF_CONDUCT.md).
3. Open a Pull Request or start a discussion in our Discord community.

---

## Community Contact

- **General Inquiries & Partnerships**: [ezhunai.community@gmail.com](mailto:ezhunai.community@gmail.com)
- **GitHub Organization**: [github.com/Ezhunai](https://github.com/Ezhunai)

---

## License

This repository is made available under the open-source **[MIT License](LICENSE)**.
