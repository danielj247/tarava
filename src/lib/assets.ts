import { AssetType } from "@/store";
import assets from "../assets";

export interface Asset {
  img: HTMLImageElement;
  sized: (widthFactor: number, heightFactor?: number) => { width: number; height: number };
}

export interface LoadAssets {
  [AssetType.HEAD]: Asset[];
  [AssetType.EYEBROWS]: Asset[];
  [AssetType.EYES]: Asset[];
  [AssetType.NOSE]: Asset[];
  [AssetType.MOUTH]: Asset[];
}

export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function _sized(img: HTMLImageElement, width: number, height?: number) {
  const aspect = img.width / img.height;
  const widthFactor = width / img.width;
  const heightFactor = height || 0 / img.height;

  if (heightFactor > widthFactor || !height) {
    return {
      width,
      height: width / aspect,
    };
  }

  return {
    width: height * aspect,
    height,
  };
}

export async function loadAssets(): Promise<LoadAssets> {
  const [browsImgs, eyesImgs, mouthsImgs, nosesImgs, headsImgs] = await Promise.all([
    Promise.all(assets.brows.map(loadImage)),
    Promise.all(assets.eyes.map(loadImage)),
    Promise.all(assets.mouths.map(loadImage)),
    Promise.all(assets.noses.map(loadImage)),
    Promise.all(assets.heads.map(loadImage)),
  ]);

  // get dimensions of each image
  // provide a scale function that takes a width and height and returns a function that takes an image and returns a scaled image
  const eyebrows = browsImgs.map((img) => ({
    img,
    sized: (width: number, height?: number) => _sized(img, width, height),
  }));

  const eyes = eyesImgs.map((img) => ({
    img,
    sized: (width: number, height?: number) => _sized(img, width, height),
  }));

  const mouth = mouthsImgs.map((img) => ({
    img,
    sized: (width: number, height?: number) => _sized(img, width, height),
  }));

  const nose = nosesImgs.map((img) => ({
    img,
    sized: (width: number, height?: number) => _sized(img, width, height),
  }));

  const head = headsImgs.map((img) => ({
    img,
    sized: (width: number, height?: number) => _sized(img, width, height),
  }));

  return { eyebrows, eyes, mouth, nose, head };
}
