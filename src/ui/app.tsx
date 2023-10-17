import React, { useEffect, useState } from "react";
import main from "@/main";
import { TypographyH4 } from "./components/ui/typography";
import AssetSelector from "./components/asset-selector";
import { AssetType, useStore } from "@/store";
import { Asset } from "@/lib/assets";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/components/ui/tabs";
import AssetGridSelector from "./components/asset-grid-selector";

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

  // start the canvas setup and rendering loop
  useEffect(() => {
    main();
  }, []);

  // on resize update the canvas dimensions, < 500px it should be 100% width otherwise 500px
  useEffect(() => {
    function resize() {
      setDimensions(calculateCanvasDimensions());
    }

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-y-4 pt-10 px-10 lg:flex-row">
      <canvas id="canvas" data-width={dimensions.width} data-height={dimensions.height} />
      <section>
        <Tabs defaultValue="head" className="w-full max-w-[400px]">
          <TabsList className="flex justify-center">
            <TabsTrigger value="head">head</TabsTrigger>
            <TabsTrigger value="eyebrows">eyebrows</TabsTrigger>
            <TabsTrigger value="eyes">eyes</TabsTrigger>
            <TabsTrigger value="nose">nose</TabsTrigger>
            <TabsTrigger value="mouth">mouth</TabsTrigger>
          </TabsList>
          <TabsContent value="head">
            <AssetGridSelector
              assets={store.assets.head}
              selected={store.selected.head}
              onSelect={(asset) => store.setHead(asset as Asset)}
            />
          </TabsContent>
          <TabsContent value="eyebrows">
            <AssetGridSelector
              assets={store.assets.eyebrows}
              selected={store.selected.eyebrows}
              onSelect={(asset) => store.setEyebrows(asset as Asset)}
            />
          </TabsContent>
          <TabsContent value="eyes">
            <AssetGridSelector
              assets={store.assets.eyes}
              selected={store.selected.eyes}
              onSelect={(asset) => store.setEyes(asset as Asset)}
            />
          </TabsContent>
          <TabsContent value="nose">
            <AssetGridSelector
              assets={store.assets.nose}
              selected={store.selected.nose}
              onSelect={(asset) => store.setNose(asset as Asset)}
            />
          </TabsContent>
          <TabsContent value="mouth">
            <AssetGridSelector
              assets={store.assets.mouth}
              selected={store.selected.mouth}
              onSelect={(asset) => store.setMouth(asset as Asset)}
            />
          </TabsContent>
        </Tabs>
        {/* 
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
        </div> */}
      </section>
    </div>
  );
}
