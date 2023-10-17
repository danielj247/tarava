// get all folders and .PNG files in ./src/assets and rename them to lowercase and only one file extension
import { readdirSync, renameSync } from "fs";
import path, { join } from "path";

// use import.meta
const ASSETS_DIR = path.resolve("./src/assets");

console.log("ASSETS_DIR", ASSETS_DIR);

const files = readdirSync(ASSETS_DIR);
const dirs = files
  .filter((f) => {
    if (f === ".DS_Store") return false;
    if (f.includes(".ts")) return false;
    return true;
  })
  .map((f) => path.join(ASSETS_DIR, f));

for (let i = 0; i < dirs.length; i++) {
  const assets = readdirSync(dirs[i]);

  // rename assets from {NAME}.png.PNG to {NAME}.png
  assets.forEach((f) => {
    const oldPath = join(dirs[i], f);
    const newPath = join(dirs[i], f.toLowerCase().replace(".png.png", ".png"));

    renameSync(oldPath, newPath);
  });
}
