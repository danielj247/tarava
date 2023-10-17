import React from "react";
import { Asset } from "@/lib/assets";
import { cn } from "@/lib/utils";

export interface AssetGridSelectorProps {
  assets: Asset[];
  selected: Asset;
  onSelect: (asset: Asset) => void;
}

export default function AssetGridSelector(props: AssetGridSelectorProps) {
  const { assets, selected, onSelect } = props;

  function handleSelect(asset: Asset) {
    onSelect(asset);
  }

  return (
    <div className="grid grid-cols-2 gap-2 w-full">
      {assets.map((asset: Asset, ix) => (
        <div
          key={ix}
          className={cn("bg-gray-100 p-4 rounded-lg", asset === selected && "ring-2 ring-primary")}
          onClick={() => handleSelect(asset)}
        >
          <img src={asset.img.src} alt={`Asset item ${ix}`} className="w-full" />
        </div>
      ))}
    </div>
  );
}
