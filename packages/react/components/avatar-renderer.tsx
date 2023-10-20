import React, { forwardRef } from "react";

import type { Ref } from "react";

export interface AvatarRendererProps {
  height: number;
  width: number;
}

// forward ref to canvas

function AvatarRenderer(
  props: AvatarRendererProps,
  ref: Ref<HTMLCanvasElement>,
) {
  return (
    <canvas data-width={props.width} data-height={props.height} ref={ref} />
  );
}

export default forwardRef(AvatarRenderer);
