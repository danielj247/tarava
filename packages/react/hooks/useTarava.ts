import { RefObject, useEffect, useRef, useState } from "react";
import main from "@tarava/core";
import { AssetType } from "@tarava/types";
import useLifecycle from "./useLifecycle";

import type {
  Asset,
  Avatar,
  LoadAssets,
  Store,
  StoreInstance,
} from "@tarava/types";

export type TaravaStore = StoreInstance<Store>;

export default function useTarava(canvasRef: RefObject<HTMLCanvasElement>) {
  const { onHook: onInit, triggerHook: triggerInit } = useLifecycle();

  const store = useRef<TaravaStore>();
  const [assets, _setAssets] = useState<LoadAssets>();
  const [avatar, _setAvatar] = useState<Avatar>();

  function setAvatar(avatar: Avatar) {
    store.current?.setState("avatar", avatar);
  }

  function setHeadAsset(asset: Asset) {
    const avatar = store.current?.get("avatar") || ({} as Avatar);

    store.current?.setState("avatar", {
      ...avatar,
      [AssetType.HEAD]: asset,
    });
  }

  function setEyebrowsAsset(asset: Asset) {
    const avatar = store.current?.get("avatar") || ({} as Avatar);

    store.current?.setState("avatar", {
      ...avatar,
      [AssetType.EYEBROWS]: asset,
    });
  }

  function setEyesAsset(asset: Asset) {
    const avatar = store.current?.get("avatar") || ({} as Avatar);

    store.current?.setState("avatar", {
      ...avatar,
      [AssetType.EYES]: asset,
    });
  }

  function setNoseAsset(asset: Asset) {
    const avatar = store.current?.get("avatar") || ({} as Avatar);

    store.current?.setState("avatar", {
      ...avatar,
      [AssetType.NOSE]: asset,
    });
  }

  function setMouthAsset(asset: Asset) {
    const avatar = store.current?.get("avatar") || ({} as Avatar);

    store.current?.setState("avatar", {
      ...avatar,
      [AssetType.MOUTH]: asset,
    });
  }

  useEffect(() => {
    async function init() {
      const tarava = await main(canvasRef.current);

      store.current = tarava.store;

      store.current.subscribe("assets", (newAssets) => {
        if (!newAssets) return;

        _setAssets(newAssets as LoadAssets);
      });

      store.current.subscribe("avatar", (newAvatar) => {
        if (!newAvatar) return;

        _setAvatar(newAvatar as Avatar);
      });

      triggerInit();

      tarava.render();
    }

    if (!canvasRef.current) return;

    init();
  }, [canvasRef.current]);

  return {
    store,

    assets,
    avatar,

    setAvatar,
    setHeadAsset,
    setEyebrowsAsset,
    setEyesAsset,
    setNoseAsset,
    setMouthAsset,

    onInit,
  };
}
