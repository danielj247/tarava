// get all folders and .PNG files in ./src/assets and rename them from "{NAME}.png.PNG" to "{NAME}.png" as krita exports strange extensions

import { readdirSync, renameSync } from "fs";
import path, { join } from "path";

const ASSETS_DIR = path.resolve("./src/assets");

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

  assets.forEach((f) => {
    const oldPath = join(dirs[i], f);
    const newPath = join(dirs[i], f.toLowerCase().replace(".png.png", ".png"));

    renameSync(oldPath, newPath);
  });
}
