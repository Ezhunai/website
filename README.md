<div align="center">

# Ezhunai · எழுநை
### *Learn together. Build together. Rise together.*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Discord](https://img.shields.io/badge/Discord-Join%20Community-5865F2?logo=discord&logoColor=white)](https://discord.gg/8Pd6nUmWFy)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Community-25D366?logo=whatsapp&logoColor=white)](https://chat.whatsapp.com/LVGGC3lCBJG78k4rkcPijB)
[![Website](https://img.shields.io/badge/Website-ezhunai.isroot.in-354d30)](https://ezhunai.isroot.in)
[![Cloudflare Pages](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-F38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)

<br/>

> **Ezhunai is a Tamil-rooted, globally welcoming peer-to-peer learning community built around a simple belief: everyone has something to learn, and everyone has something to share.**

</div>

---

## 📖 The Name and Identity

The name **Ezhunai** is born from two Tamil words:

| Tamil | Transliteration | Meaning |
| :---: | :---: | :--- |
| **எழு** | *Ezhu* | To rise, grow, awaken, or advance forward |
| **இணை** | *Inai* | To connect, unite, or come together |
| **எழுநை** | **Ezhunai** | **Rise Together** |

> *\"கற்றது கைமண் அளவு, கல்லாதது உலகளவு\"*  
> *(What we have learned is like a handful of sand; what we have yet to learn is like the size of the world).*  
> It reminds us to remain humble and curious, knowing that however much we learn, there is always more to discover and wisdom to gain from one another.

---

## 🌟 Why Ezhunai Exists

Meaningful learning happens through other people. A person may have a question that someone else can answer. One person may understand design while another knows programming. Someone may be good at explaining concepts, while another brings a completely fresh perspective.

Yet people often learn in isolation, feel they must already be experts before participating, or struggle to find peers across diverse disciplines.

Ezhunai creates a collaborative environment addressing these challenges:
- **Breaking Isolation**: Learning through conversation, activities, and shared experiments.
- **Welcoming Beginners**: No portfolio or certificates required; bring your curiosity.
- **Interdisciplinary Synergy**: Bringing together tech, design, writing, business, and science.
- **Authentic Growth**: Welcoming unfinished ideas, practice sessions, and lessons learned from failure.
- **Tamil Roots, Global Circle**: Rooted in cultural identity while welcoming people everywhere across languages.

---

## 🚀 Technical Highlights

- ⚡ **Pure Vanilla Stack**: Semantic HTML5, modern CSS3, and ES6+ JavaScript with zero build pipeline needed.
- 📱 **Mobile & Tablet Optimized**: Fluid typography, responsive grids, and touch-sensitive interactive card tracks.
- ♿ **Accessible by Default**: Keyboard navigable menus (Escape, focus trapping), ARIA state toggles, and high-contrast editorial typography.
- 🌿 **Motion Aware**: Respects OS motion preferences (prefers-reduced-motion: reduce) with user controls to pause/resume motion.
- ☁️ **Cloudflare Native**: Equipped with _headers for strict security policies and asset caching, _redirects for clean community shortcuts, and wrangler.jsonc for instant deployment.
- 🤖 **AI & Agent Discovery**: Includes [/llm.txt](llm.txt) and [/llms-full.txt](llms-full.txt), XML sitemaps, and Schema.org JSON-LD structured data.

---

## 📁 Repository Structure

`	ext
ezhunai-website/
├── assets/                  # High-resolution artwork, logos, and vector assets
├── scripts/
│   └── serve.mjs            # Zero-dependency local Node.js preview server
├── legacy/                  # Historical backend & worker exploration code
├── index.html               # Main landing page markup with SEO & structured data
├── style.css                # Master stylesheet with responsive typography & animations
├── app.js                   # Client interactions, sticky header & motion handling
├── _headers                 # Cloudflare Pages security & caching headers
├── _redirects               # Cloudflare Pages redirects & shortlinks (/discord, etc.)
├── wrangler.jsonc           # Cloudflare deployment manifest
├── llm.txt                  # LLM / AI agent structured markdown specification
├── llms-full.txt            # Extended context for AI agent discovery
├── robots.txt               # Crawler directives
├── sitemap.xml              # XML Sitemap
├── package.json             # Project metadata & npm dev commands
├── CONTRIBUTING.md          # Guide for open-source contributors
├── CODE_OF_CONDUCT.md       # Community values & participant guidelines
├── SECURITY.md              # Security policy
└── LICENSE                  # MIT License
`

---

## 🛠️ Local Development

### Option 1: Direct File Preview
Open index.html directly in any web browser.

### Option 2: Local HTTP Server (Node.js)
`ash
# Clone the repository
git clone https://github.com/Ezhunai/website.git
cd website

# Start the local development server
npm run dev
# Or: node scripts/serve.mjs
`
Preview at http://localhost:3000.

---

## ☁️ Deploying to Cloudflare Pages

### Option A: Git Integration (Recommended)
1. Go to your **Cloudflare Dashboard** → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Select the Ezhunai/website repository.
3. Configure the build settings:
   - **Framework preset**: None
   - **Build command**: *(leave blank)*
   - **Build output directory**: . *(root)*
4. Click **Save and Deploy**. Cloudflare Pages will automatically read _headers and _redirects.

### Option B: Cloudflare Wrangler CLI
`ash
npx wrangler pages deploy . --project-name=ezhunai-website
`

---

## 🌐 Community & Official Links

| Channel | Link |
| :--- | :--- |
| **Official Website** | [ezhunai.isroot.in](https://ezhunai.isroot.in) |
| **Discord Community** | [discord.gg/8Pd6nUmWFy](https://discord.gg/8Pd6nUmWFy) or /discord |
| **WhatsApp Community** | [chat.whatsapp.com](https://chat.whatsapp.com/LVGGC3lCBJG78k4rkcPijB) or /whatsapp |
| **Instagram** | [@ezhunai](https://www.instagram.com/ezhunai/) or /instagram |
| **YouTube** | [@Ezhunai](https://www.youtube.com/@Ezhunai) or /youtube |
| **GitHub Organization** | [github.com/Ezhunai](https://github.com/Ezhunai) |

---

## 🤝 Contributing

We warmly welcome contributions from everyone—beginners and experienced developers alike! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before submitting pull requests.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).