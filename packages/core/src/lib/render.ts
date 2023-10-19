import { getCanvas } from "@/lib/canvas";

import type { Store, StoreInstance } from "@tarava/types/store";

const SIZE = 350;

export default function render(store: StoreInstance<Store>) {
  const { canvas, ctx } = getCanvas();
  const { avatar } = store.getState();

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (!canvas.dataset.width || !canvas.dataset.height) {
    throw new Error(
      "Canvas width and height not set via data attributes. Use [data-width] and [data-height] on the canvas element.",
    );
  }

  if (!avatar) {
    window.requestAnimationFrame(() => render(store));
    return;
  }

  const asset =
    avatar.head ||
    avatar.eyebrows ||
    avatar.eyes ||
    avatar.nose ||
    avatar.mouth;

  if (!asset?.sized) {
    throw new Error(
      "Asset does not have a sized method. Make sure to load assets before rendering.",
    );
  }

  const resized = asset.sized(SIZE, SIZE);

  const offset = {
    x: +canvas.dataset.width / 2 - resized.width / 2,
    y: +canvas.dataset.height / 2 - resized.height / 2,
  };

  if (avatar?.head) {
    const headDimensions = avatar.head.sized(SIZE, SIZE);

    ctx.drawImage(
      avatar.head.img,
      offset.x,
      offset.y,
      headDimensions.width,
      headDimensions.height,
    );
  }

  if (avatar?.eyebrows) {
    const eyebrowDimensions = avatar.eyebrows.sized(SIZE, SIZE);

    ctx.drawImage(
      avatar.eyebrows.img,
      offset.x,
      offset.y,
      eyebrowDimensions.width,
      eyebrowDimensions.height,
    );
  }

  if (avatar?.eyes) {
    const eyesDimensions = avatar.eyes.sized(SIZE, SIZE);

    ctx.drawImage(
      avatar.eyes.img,
      offset.x,
      offset.y,
      eyesDimensions.width,
      eyesDimensions.height,
    );
  }

  if (avatar?.nose) {
    const noseDimensions = avatar.nose.sized(SIZE, SIZE);

    ctx.drawImage(
      avatar.nose.img,
      offset.x,
      offset.y,
      noseDimensions.width,
      noseDimensions.height,
    );
  }

  if (avatar?.mouth) {
    const mouthDimensions = avatar.mouth.sized(SIZE, SIZE);

    ctx.drawImage(
      avatar.mouth.img,
      offset.x,
      offset.y,
      mouthDimensions.width,
      mouthDimensions.height,
    );
  }

  window.requestAnimationFrame(() => render(store));
}
