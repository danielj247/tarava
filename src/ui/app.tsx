import React, { useEffect, useState } from "react";
import main from "@/main";
import { TypographyH4 } from "./components/ui/typography";
import AssetSelector from "./components/asset-selector";
import { AssetType, useStore } from "@/store";
import { Asset } from "@/lib/assets";

function calculateCanvasDimensions() {
  return {
    width: window.innerWidth < 500 ? window.innerWidth : 500,
    height: window.innerWidth < 500 ? window.innerWidth : 500,
  };
}

const INITIAL_DIMENSIONS = calculateCanvasDimensions();

export default function App() {
  const store = useStore();
  const [dimensions, setDimensions] = useState(INITIAL_DIMENSIONS);

  const headItems = store.getAssetItems(AssetType.HEAD);
  const eyebrowItems = store.getAssetItems(AssetType.EYEBROWS);
  const eyesItems = store.getAssetItems(AssetType.EYES);
  const noseItems = store.getAssetItems(AssetType.NOSE);
  const mouthItems = store.getAssetItems(AssetType.MOUTH);

  // start the canvas setup and rendering loop
  useEffect(() => {
    main();
  }, []);

  // on resize update the canvas dimensions, < 500px it should be 100% width otherwise 500px
  useEffect(() => {
    function resize() {
      console.log("called", calculateCanvasDimensions());
      setDimensions(calculateCanvasDimensions());
    }

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="flex flex-col items-center gap-y-4 pt-10">
      <canvas id="canvas" data-width={dimensions.width} data-height={dimensions.height} />
      <section>
        <div className="flex flex-col items-center mb-10">
          <TypographyH4 className="mb-2">Head</TypographyH4>
          <AssetSelector items={headItems} onChange={(item) => store.setHead(item.value as Asset)} />
        </div>
        <div className="flex flex-col items-center mb-10">
          <TypographyH4 className="mb-2">Eyebrows</TypographyH4>
          <AssetSelector items={eyebrowItems} onChange={(item) => store.setEyebrows(item.value as Asset)} />
        </div>
        <div className="flex flex-col items-center mb-10">
          <TypographyH4 className="mb-2">Eyes</TypographyH4>
          <AssetSelector items={eyesItems} onChange={(item) => store.setEyes(item.value as Asset)} />
        </div>
        <div className="flex flex-col items-center mb-10">
          <TypographyH4 className="mb-2">Nose</TypographyH4>
          <AssetSelector items={noseItems} onChange={(item) => store.setNose(item.value as Asset)} />
        </div>
        <div className="flex flex-col items-center mb-10">
          <TypographyH4 className="mb-2">Mouth</TypographyH4>
          <AssetSelector items={mouthItems} onChange={(item) => store.setMouth(item.value as Asset)} />
        </div>
      </section>
    </div>
  );
}
