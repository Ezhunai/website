# Contributing to Ezhunai Website

Welcome! First off, thank you for considering contributing to Ezhunai.

Ezhunai is a Tamil-rooted, globally welcoming peer-to-peer learning community. We believe that **everyone has something to learn, and everyone has something to share**. This philosophy extends to our code and repositories.

Whether you are fixing a typo, improving mobile responsiveness, optimizing asset performance, or adding accessibility features, your contributions are appreciated.

---

## 🧭 Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please treat all contributors and members with kindness, humility, and respect.

---

## 🛠️ How Can I Contribute?

### 1. Reporting Bugs & Suggesting Enhancements
- Check existing GitHub issues before creating a new one.
- Provide a clear and descriptive title and reproduction steps.
- If suggesting a design tweak, explain the reasoning and attach screenshots if relevant.

### 2. Improving Documentation & SEO
- Help expand documentation for beginners.
- Help refine accessibility (ria-* labels, contrast ratios).
- Improve SEO meta tags and LLM context files (llm.txt).

### 3. Making Code Contributions
1. **Fork the Repository** and clone your fork locally:
   `ash
   git clone https://github.com/<your-username>/website.git
   cd website
   `
2. **Create a Feature Branch**:
   `ash
   git checkout -b feature/your-improvement-name
   `
3. **Make and Test Your Changes**:
   - Run 
pm run dev to test locally.
   - Test across multiple browser viewport widths (mobile, tablet, desktop).
   - Ensure semantic HTML, vanilla CSS/JS principles, and WCAG AA accessibility standards are maintained.
4. **Commit Your Changes**:
   - Write clear, concise commit messages (e.g., ix(responsive): improve card wrapping on narrow screens).
5. **Push and Open a Pull Request**:
   - Push your branch to GitHub and open a Pull Request against the main branch.
   - Describe what changed and why.

---

## 🎨 Design & Code Principles

- **Zero Unnecessary Dependencies**: We keep the website fast, lean, and easily maintainable with vanilla web technologies.
- **Human & Intentional Aesthetic**: Warm, thoughtful, high-contrast typography, generous negative space, and authentic creative presentation.
- **Privacy First**: We do not introduce trackers, analytics scripts, or forced personal data collection.
- **Accessibility by Default**: Every interactive element should be keyboard navigable and screen-reader friendly.