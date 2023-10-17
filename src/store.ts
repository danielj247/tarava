import { create } from "zustand";
import { Asset, LoadAssets, loadAssets } from "./lib/assets";
import { AssetSelectorItem } from "./ui/components/asset-selector";

interface Avatar {
  [AssetType.HEAD]: Asset;
  [AssetType.EYEBROWS]: Asset;
  [AssetType.EYES]: Asset;
  [AssetType.NOSE]: Asset;
  [AssetType.MOUTH]: Asset;
}

export interface Store {
  assets: LoadAssets;
  getAssetItems: (type: AssetType) => AssetSelectorItem[];

  selected: Avatar;

  setHead: (head: Asset) => void;
  setEyebrows: (eyebrows: Asset) => void;
  setEyes: (eyes: Asset) => void;
  setNose: (nose: Asset) => void;
  setMouth: (mouth: Asset) => void;
}

export enum AssetType {
  HEAD = "head",
  EYEBROWS = "eyebrows",
  EYES = "eyes",
  NOSE = "nose",
  MOUTH = "mouth",
}

const ASSETS = await loadAssets();

const useStore = create<Store>((set, get) => ({
  assets: ASSETS,

  selected: {
    head: ASSETS.head[0],
    eyebrows: ASSETS.eyebrows[0],
    eyes: ASSETS.eyes[0],
    nose: ASSETS.nose[0],
    mouth: ASSETS.mouth[0],
  },

  getAssetItems: (type: AssetType) => {
    return get().assets?.[type]?.map((asset, ix) => ({
      name: ix.toString(),
      value: asset,
    }));
  },

  setHead: (head: Asset) =>
    set((state) => {
      return { selected: { ...state.selected, head } };
    }),
  setEyebrows: (eyebrows: Asset) =>
    set((state) => {
      return { selected: { ...state.selected, eyebrows } };
    }),
  setEyes: (eyes: Asset) =>
    set((state) => {
      return { selected: { ...state.selected, eyes } };
    }),
  setNose: (nose: Asset) =>
    set((state) => {
      return { selected: { ...state.selected, nose } };
    }),
  setMouth: (mouth: Asset) =>
    set((state) => {
      return { selected: { ...state.selected, mouth } };
    }),
}));

const getStore = useStore.getState;

export { useStore, getStore };
