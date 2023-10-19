import type { AssetType, Asset } from "@tarava/types/asset";

export interface Avatar {
  [AssetType.HEAD]: Asset;
  [AssetType.EYEBROWS]: Asset;
  [AssetType.EYES]: Asset;
  [AssetType.NOSE]: Asset;
  [AssetType.MOUTH]: Asset;
}
