import { getStore } from "../store";
import { getCanvas } from "./canvas";

export default function render() {
  const { canvas, ctx } = getCanvas();
  const store = getStore();

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const headDimensions = store.selected.head.sized(350, 350);
  const eyebrowDimensions = store.selected.eyebrows.sized(350, 350);
  const eyesDimensions = store.selected.eyes.sized(350, 350);
  const noseDimensions = store.selected.nose.sized(350, 350);
  const mouthDimensions = store.selected.mouth.sized(350, 350);

  if (!canvas.dataset.width || !canvas.dataset.height) {
    throw new Error(
      "Canvas width and height not set via data attributes. Use [data-width] and [data-height] on the canvas element.",
    );
  }

  // offset to be centered
  const offset = {
    x: +canvas.dataset.width / 2 - headDimensions.width / 2,
    y: +canvas.dataset.height / 2 - headDimensions.height / 2,
  };

  ctx.drawImage(store.selected.head.img, offset.x, offset.y, headDimensions.width, headDimensions.height);
  ctx.drawImage(store.selected.eyebrows.img, offset.x, offset.y, eyebrowDimensions.width, eyebrowDimensions.height);
  ctx.drawImage(store.selected.eyes.img, offset.x, offset.y, eyesDimensions.width, eyesDimensions.height);
  ctx.drawImage(store.selected.nose.img, offset.x, offset.y, noseDimensions.width, noseDimensions.height);
  ctx.drawImage(store.selected.mouth.img, offset.x, offset.y, mouthDimensions.width, mouthDimensions.height);

  window.requestAnimationFrame(render);
}
