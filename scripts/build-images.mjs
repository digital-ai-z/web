import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const dirs = [
  path.join(rootDir, "assets/images"),
  path.join(rootDir, "assets/images/mobile"),
];

let converted = 0;
let skipped = 0;

for (const dir of dirs) {
  const entries = await readdir(dir);
  const pngs = entries.filter((f) => f.toLowerCase().endsWith(".png"));

  for (const file of pngs) {
    const src = path.join(dir, file);
    const dest = path.join(dir, file.replace(/\.png$/i, ".webp"));

    const [srcStat, destStat] = await Promise.all([
      stat(src),
      stat(dest).catch(() => null),
    ]);

    if (destStat && destStat.mtimeMs >= srcStat.mtimeMs) {
      skipped++;
      continue;
    }

    await sharp(src).webp({ quality: 82 }).toFile(dest);
    const destSize = (await stat(dest)).size;
    const savings = (((srcStat.size - destSize) / srcStat.size) * 100).toFixed(1);
    console.log(`  ${file} → ${path.basename(dest)} (${savings}% smaller)`);
    converted++;
  }
}

console.log(`\nConverted ${converted} image(s), skipped ${skipped} up-to-date.`);
