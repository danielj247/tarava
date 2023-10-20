import React, { useRef } from "react";
import { AssetType } from "@tarava/types";
import AvatarRenderer from "./avatar-renderer";
import AssetSelector from "./asset-selector";

import type { Asset, Avatar } from "@tarava/types";
import useTarava from "../hooks/useTarava";

export interface TaravaBuilderProps {
  height: number;
  width: number;
  onSelect: (type: AssetType, asset: Asset, avatar: Avatar) => void;
}

export default function TaravaBuilder(props: TaravaBuilderProps) {
  const { width, height, onSelect } = props;

  const canvas = useRef<HTMLCanvasElement>(null);

  const {
    store,
    setAvatar,
    avatar,
    assets,
    onInit,
    setHeadAsset,
    setEyebrowsAsset,
    setEyesAsset,
    setMouthAsset,
    setNoseAsset,
  } = useTarava(canvas);

  function handleSelect(type: AssetType, asset: Asset) {
    switch (type) {
      case AssetType.HEAD:
        setHeadAsset(asset);
        break;
      case AssetType.EYEBROWS:
        setEyebrowsAsset(asset);
        break;
      case AssetType.EYES:
        setEyesAsset(asset);
        break;
      case AssetType.NOSE:
        setNoseAsset(asset);
        break;
      case AssetType.MOUTH:
        setMouthAsset(asset);
        break;
    }

    if (!avatar) return;

    onSelect?.(type, asset, avatar);
  }

  onInit(() => {
    if (!store || !assets) return;

    setAvatar({
      head: assets.head[0],
      eyebrows: assets.eyebrows[0],
      eyes: assets.eyes[0],
      nose: assets.nose[0],
      mouth: assets.mouth[0],
    });
  });

  return (
    <>
      <AvatarRenderer ref={canvas} width={width} height={height} />
      <AssetSelector
        assets={assets}
        setHeadAsset={setHeadAsset}
        setEyebrowsAsset={setEyebrowsAsset}
        setEyesAsset={setEyesAsset}
        setMouthAsset={setMouthAsset}
        setNoseAsset={setNoseAsset}
        onSelect={handleSelect}
      />
    </>
  );
}
