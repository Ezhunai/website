# Contributing to Ezhunai

Thank you for your interest in contributing to the Ezhunai project.

Ezhunai is a peer-to-peer learning community founded on the belief that **everyone has something to learn, and everyone has something to share**. This philosophy applies equally to our software repositories and documentation.

Whether you are fixing a minor typographic issue, improving responsive behavior on mobile viewports, refining accessibility compliance, or introducing new documentation, your participation is valued.

---

## Code of Conduct

All contributors and community participants are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Please ensure all interactions remain respectful, welcoming to beginners, and constructive.

---

## Ways to Contribute

### 1. Reporting Issues
- Before opening a new issue, search existing discussions and open issues to avoid duplicates.
- Provide a clear, descriptive title and step-by-step reproduction instructions.
- When reporting design or layout bugs, include browser details and viewport resolution.

### 2. Improving Documentation & SEO
- Refine text clarity, translations, or technical guides.
- Expand machine-readable documentation (llm.txt, llms-full.txt).
- Improve semantic structure and accessibility attributes (ria-* labels, contrast ratios).

### 3. Submitting Code Changes
1. **Fork and Clone**:
   `ash
   git clone https://github.com/<your-username>/website.git
   cd website
   `
2. **Branch**:
   `ash
   git checkout -b fix/issue-description
   # or
   git checkout -b feat/feature-description
   `
3. **Develop & Test Locally**:
   `ash
   npm run dev   # Starts preview server on http://localhost:3000
   npm test      # Runs link and asset integrity validation
   `
4. **Commit Conventions**:
   Use standard conventional commits (e.g., ix(nav): correct mobile menu trap, docs: clarify local setup).
5. **Open a Pull Request**:
   Push your branch and open a PR against main. Automated GitHub Actions will test asset paths and syntax before review.

---

## Architectural Principles

- **Zero Unnecessary Dependencies**: The website is intentionally constructed without frameworks, bundlers, or heavy npm dependencies to ensure long-term stability and fast load times.
- **Human-Crafted Aesthetic**: Editorial typography, thoughtful whitespace, and authentic brand styling should be preserved.
- **Accessibility by Default**: Ensure keyboard navigability (Tab, Escape) and compatibility with prefers-reduced-motion.
- **Privacy-First**: No tracking pixels, analytics cookies, or forced user information collection.