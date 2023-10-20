import React from "react";
import { Tabs, TabsTrigger, TabsContent } from "./tabs";
import { AssetType } from "@tarava/types";

import type { LoadAssets, Asset, Avatar } from "@tarava/types";

export interface AssetSelectorProps {
  assets: LoadAssets;
  selected?: Avatar;
  onSelect: (type: AssetType, asset: Asset) => void;
}

function AssetGrid(props: AssetSelectorProps) {
  const { assets, selected, onSelect } = props;

  if (!assets) return null;

  return (
    <div className="grid grid-cols-2 gap-2 w-full">
      {assets?.map((asset, ix) => (
        <div
          key={ix}
          className={[
            "bg-gray-100 p-4 rounded-lg",
            asset === selected?.[AssetType.HEAD] && "ring-2 ring-black",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <img
            src={asset.img.src}
            alt={`Asset item ${ix}`}
            className="w-full"
            onClick={() => onSelect(AssetType.HEAD, asset)}
          />
        </div>
      ))}
    </div>
  );
}

export default function AssetSelector(props: AssetSelectorProps) {
  const { assets, selected, onSelect } = props;

  return (
    <Tabs defaultValue={AssetType.HEAD}>
      {({ activeTab, setActiveTab }) => (
        <>
          <div className="inline-flex h-9 items-center justify-center rounded-lg bg-zinc-100 p-1 w-full mb-2">
            <TabsTrigger
              value={AssetType.HEAD}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            >
              Head
            </TabsTrigger>
            <TabsTrigger
              value={AssetType.EYEBROWS}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            >
              Eyebrows
            </TabsTrigger>
            <TabsTrigger
              value={AssetType.EYES}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            >
              Eyes
            </TabsTrigger>
            <TabsTrigger
              value={AssetType.NOSE}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            >
              Nose
            </TabsTrigger>
            <TabsTrigger
              value={AssetType.MOUTH}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            >
              Mouth
            </TabsTrigger>
          </div>
          <TabsContent value={AssetType.HEAD} activeTab={activeTab}>
            <AssetGrid
              assets={assets?.[AssetType.HEAD]}
              selected={selected}
              onSelect={onSelect}
            />
          </TabsContent>
          <TabsContent value={AssetType.EYEBROWS} activeTab={activeTab}>
            <AssetGrid
              assets={assets?.[AssetType.EYEBROWS]}
              selected={selected}
              onSelect={onSelect}
            />
          </TabsContent>
          <TabsContent value={AssetType.EYES} activeTab={activeTab}>
            <AssetGrid
              assets={assets?.[AssetType.EYES]}
              selected={selected}
              onSelect={onSelect}
            />
          </TabsContent>
          <TabsContent value={AssetType.NOSE} activeTab={activeTab}>
            <AssetGrid
              assets={assets?.[AssetType.NOSE]}
              selected={selected}
              onSelect={onSelect}
            />
          </TabsContent>
          <TabsContent value={AssetType.MOUTH} activeTab={activeTab}>
            <AssetGrid
              assets={assets?.[AssetType.MOUTH]}
              selected={selected}
              onSelect={onSelect}
            />
          </TabsContent>
        </>
      )}
    </Tabs>
  );
}
