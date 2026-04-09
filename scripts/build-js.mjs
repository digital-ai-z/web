import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as esbuild from "esbuild";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const inputFile = path.join(rootDir, "assets/js/site.js");
const outputFile = path.join(rootDir, "assets/js/site.min.js");

await mkdir(path.dirname(outputFile), { recursive: true });

await esbuild.build({
  entryPoints: [inputFile],
  bundle: true,
  minify: true,
  format: "iife",
  outfile: outputFile,
  target: ["es2019"],
});

console.log(`Built ${path.relative(rootDir, outputFile)}`);
