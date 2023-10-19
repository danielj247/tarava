import { onMounted, ref } from "vue";
import main from "@tarava/core";
import useLifecycle from "@/composables/useLifecycle";
import { AssetType } from "@tarava/types";

import type { Ref } from "vue";
import type {
  Asset,
  Avatar,
  LoadAssets,
  Store,
  StoreInstance,
} from "@tarava/types";

export type TaravaStore = StoreInstance<Store>;

export default function useTarava(canvasElement?: Ref<HTMLCanvasElement>) {
  const { onHook: onInit, triggerHook: triggerInit } = useLifecycle();

  if (!canvasElement) {
    throw new Error("canvasElement is required");
  }

  const store = ref<TaravaStore>();
  const assets = ref<LoadAssets>();
  const avatar = ref<Avatar>();

  function setAvatar(avatar: Avatar) {
    store.value?.setState("avatar", avatar);
  }

  function setHeadAsset(asset: Asset) {
    const avatar = store.value?.get("avatar") || ({} as Avatar);

    store.value?.setState("avatar", {
      ...avatar,
      [AssetType.HEAD]: asset,
    });
  }

  function setEyebrowsAsset(asset: Asset) {
    const avatar = store.value?.get("avatar") || ({} as Avatar);

    store.value?.setState("avatar", {
      ...avatar,
      [AssetType.EYEBROWS]: asset,
    });
  }

  function setEyesAsset(asset: Asset) {
    const avatar = store.value?.get("avatar") || ({} as Avatar);

    store.value?.setState("avatar", {
      ...avatar,
      [AssetType.EYES]: asset,
    });
  }

  function setNoseAsset(asset: Asset) {
    const avatar = store.value?.get("avatar") || ({} as Avatar);

    store.value?.setState("avatar", {
      ...avatar,
      [AssetType.NOSE]: asset,
    });
  }

  function setMouthAsset(asset: Asset) {
    const avatar = store.value?.get("avatar") || ({} as Avatar);

    store.value?.setState("avatar", {
      ...avatar,
      [AssetType.MOUTH]: asset,
    });
  }

  onMounted(async () => {
    // @ts-expect-error -> access via $el to get HTMLCanvasElement
    const tarava = await main(canvasElement.value.$el);

    // keep store as ref and export
    store.value = tarava.store;

    // subscribe to asset changes
    store.value.subscribe("assets", (newAssets) => {
      if (!newAssets) return;

      assets.value = newAssets as LoadAssets;
    });

    // subscribe to avatar changes
    store.value.subscribe("avatar", (newAvatar) => {
      if (!newAvatar) return;

      avatar.value = newAvatar as Avatar;
    });

    // trigger onInit hook
    triggerInit();

    // start render process
    tarava.render();
  });

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
