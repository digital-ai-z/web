import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { transform } from "esbuild";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const inputFile = path.join(rootDir, "assets/css/site.css");
const outputFile = path.join(rootDir, "assets/css/site.min.css");

async function bundleCss(filename, seen = new Set()) {
  const resolvedFile = path.resolve(filename);

  if (seen.has(resolvedFile)) {
    return "";
  }

  seen.add(resolvedFile);

  const source = await readFile(resolvedFile, "utf8");
  const importPattern =
    /^\s*@import\s+(?:url\()?["']([^"')]+)["']\)?\s*;\s*$/gm;

  let bundled = "";
  let lastIndex = 0;

  for (const match of source.matchAll(importPattern)) {
    bundled += source.slice(lastIndex, match.index);
    lastIndex = match.index + match[0].length;

    const importTarget = match[1];

    if (
      !importTarget.endsWith(".css") ||
      importTarget.startsWith("http://") ||
      importTarget.startsWith("https://")
    ) {
      bundled += match[0];
      continue;
    }

    const importedFile = path.resolve(path.dirname(resolvedFile), importTarget);
    bundled += await bundleCss(importedFile, seen);
  }

  bundled += source.slice(lastIndex);
  return bundled;
}

const bundledCss = await bundleCss(inputFile);
const { code } = await transform(bundledCss, {
  loader: "css",
  minify: true,
  legalComments: "none",
});

await mkdir(path.dirname(outputFile), { recursive: true });
await writeFile(outputFile, code);

console.log(`Built ${path.relative(rootDir, outputFile)}`);
