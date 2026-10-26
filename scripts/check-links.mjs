import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const htmlFiles = ["index.html", "404.html"];
let hasErrors = false;

console.log("🔍 Running Ezhunai Website Asset & Link Integrity Check...\n");

for (const relFile of htmlFiles) {
  const filePath = path.join(root, relFile);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing HTML file: ${relFile}`);
    hasErrors = true;
    continue;
  }

  const html = fs.readFileSync(filePath, "utf8");
  console.log(`📄 Checking ${relFile}...`);

  // 1. Extract and verify local asset references (src and href)
  const assetRegex = /(?:src|href)=["']([^"']+)["']/g;
  let match;
  const idsInPage = new Set();
  const idRegex = /\bid=["']([^"']+)["']/g;

  while ((match = idRegex.exec(html)) !== null) {
    idsInPage.add(match[1]);
  }

  while ((match = assetRegex.exec(html)) !== null) {
    const rawTarget = match[1].trim();

    // Skip empty, javascript, mailto, tel
    if (
      !rawTarget ||
      rawTarget.startsWith("javascript:") ||
      rawTarget.startsWith("mailto:") ||
      rawTarget.startsWith("tel:")
    ) {
      continue;
    }

    // External URL verification
    if (rawTarget.startsWith("http://") || rawTarget.startsWith("https://")) {
      try {
        new URL(rawTarget);
      } catch (err) {
        console.error(
          `  ❌ Invalid external URL syntax in ${relFile}: ${rawTarget}`,
        );
        hasErrors = true;
      }
      continue;
    }

    // In-page hash link verification
    if (rawTarget.startsWith("#")) {
      const anchorId = rawTarget.slice(1);
      if (anchorId && !idsInPage.has(anchorId)) {
        console.error(
          `  ❌ Broken internal anchor in ${relFile}: ${rawTarget} (No matching id="${anchorId}")`,
        );
        hasErrors = true;
      }
      continue;
    }

    // Root-relative hash link (e.g. /#story from 404 page)
    if (rawTarget.startsWith("/#")) {
      continue;
    }

    // Local file path verification
    const cleanPath = rawTarget.split("?")[0].split("#")[0];
    if (cleanPath === "/" || cleanPath === "") continue;

    const resolvedFile = path.resolve(
      root,
      cleanPath.startsWith("/") ? "." + cleanPath : cleanPath,
    );
    if (!fs.existsSync(resolvedFile)) {
      console.error(
        `  ❌ Missing local asset referenced in ${relFile}: ${rawTarget} -> ${resolvedFile}`,
      );
      hasErrors = true;
    }
  }

  // Check JSON-LD Structured Data
  const jsonLdMatch = html.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/i);
  if (jsonLdMatch) {
    try {
      const parsed = JSON.parse(jsonLdMatch[1]);
      if (parsed["@graph"]) {
        const types = parsed["@graph"].map((item) => item["@type"]);
        console.log(`  ✓ Valid Schema.org JSON-LD graph (${types.join(", ")})`);
      } else {
        console.log(`  ✓ Valid Schema.org JSON-LD (${parsed["@type"]})`);
      }
    } catch (err) {
      console.error(`  ❌ Invalid JSON-LD structured data in ${relFile}: ${err.message}`);
      hasErrors = true;
    }
  }

  // Check CSS assets
  if (relFile === "index.html") {
    const cssPath = path.join(root, "style.css");
    if (fs.existsSync(cssPath)) {
      const css = fs.readFileSync(cssPath, "utf8");
      const urlRegex = /url\(["']?([^"')]+)["']?\)/g;
      let urlMatch;
      while ((urlMatch = urlRegex.exec(css)) !== null) {
        const assetUrl = urlMatch[1].trim();
        if (
          assetUrl.startsWith("http://") ||
          assetUrl.startsWith("https://") ||
          assetUrl.startsWith("data:")
        ) {
          continue;
        }
        const resolvedCssAsset = path.resolve(root, assetUrl);
        if (!fs.existsSync(resolvedCssAsset)) {
          console.error(
            `  ❌ Missing CSS asset referenced in style.css: ${assetUrl} -> ${resolvedCssAsset}`,
          );
          hasErrors = true;
        }
      }
    }
  }
}

if (hasErrors) {
  console.error(
    "\n❌ Integrity checks failed. Please fix the broken links/assets above.",
  );
  process.exit(1);
} else {
  console.log(
    "\n✅ All links, assets, anchors, and references verified successfully!",
  );
}
