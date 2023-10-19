import store from "@/store";
import render from "@/lib/render";
import { setupCanvas } from "@/lib/canvas";
import { Store, StoreInstance } from "@tarava/types/store";
import { loadAssets } from "@/lib/assets";

interface MainReturn {
  store: StoreInstance<Store>;
  render: () => void;
}

export default async function main(
  canvasElement: HTMLCanvasElement,
): Promise<MainReturn> {
  store.setState("element", canvasElement);

  setupCanvas();

  const assets = await loadAssets();

  store.setState("assets", assets);

  return {
    store,
    render: () => {
      const init = store.get("init");

      if (init) {
        return;
      }

      store.setState("init", true);
      render(store);
    },
  };
}
