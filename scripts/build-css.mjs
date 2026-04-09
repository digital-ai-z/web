import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { bundle } from "lightningcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const inputFile = path.join(rootDir, "assets/css/site.css");
const outputFile = path.join(rootDir, "assets/css/site.min.css");

const { code } = bundle({
  filename: inputFile,
  minify: true,
});

await mkdir(path.dirname(outputFile), { recursive: true });
await writeFile(outputFile, code);

console.log(`Built ${path.relative(rootDir, outputFile)}`);
