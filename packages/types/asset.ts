export enum AssetType {
  HEAD = "head",
  EYEBROWS = "eyebrows",
  EYES = "eyes",
  NOSE = "nose",
  MOUTH = "mouth",
}

export interface Asset {
  img: HTMLImageElement;
  sized: (
    widthFactor: number,
    heightFactor?: number,
  ) => { width: number; height: number };
}

export interface LoadAssets {
  [AssetType.HEAD]: Asset[];
  [AssetType.EYEBROWS]: Asset[];
  [AssetType.EYES]: Asset[];
  [AssetType.NOSE]: Asset[];
  [AssetType.MOUTH]: Asset[];
}
