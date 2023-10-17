import { throttle } from "@/lib/utils";

export function getCanvas(): {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
} {
  const canvas = document.querySelector<HTMLCanvasElement>("#canvas");
  const ctx = canvas?.getContext("2d");

  if (!canvas || !ctx) {
    throw new Error("No canvas");
  }

  return {
    canvas,
    ctx,
  };
}

function _prepareCanvas(): void {
  const dpr = window.devicePixelRatio;
  const { canvas, ctx } = getCanvas();
  const { innerWidth, innerHeight } = window;

  const width = parseInt(canvas.dataset.width || "") || innerWidth;
  const height = parseInt(canvas.dataset.height || "") || innerHeight;

  canvas.width = width * dpr;
  canvas.height = height * dpr;

  ctx.scale(dpr, dpr);

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
}

export function setupCanvas(): void {
  _prepareCanvas();

  window.addEventListener("resize", throttle(_prepareCanvas, 100));
}
