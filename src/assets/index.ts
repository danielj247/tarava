import browA from "./brows/brow-a.png";
import browB from "./brows/brow-b.png";
import browC from "./brows/brow-c.png";
import browD from "./brows/brow-d.png";

import eyesA from "./eyes/eyes-a.png";
import eyesB from "./eyes/eyes-b.png";
import eyesC from "./eyes/eyes-c.png";
import eyesD from "./eyes/eyes-d.png";

import mouthA from "./mouths/mouth-a.png";
import mouthB from "./mouths/mouth-b.png";
import mouthC from "./mouths/mouth-c.png";
import mouthD from "./mouths/mouth-d.png";

import noseA from "./noses/nose-a.png";
import noseB from "./noses/nose-b.png";
import noseC from "./noses/nose-c.png";
import noseD from "./noses/nose-d.png";

import headA from "./heads/head-a.png";
import headB from "./heads/head-b.png";
import headC from "./heads/head-c.png";
import headD from "./heads/head-d.png";

export interface Assets {
  brows: string[];
  eyes: string[];
  mouths: string[];
  noses: string[];
  heads: string[];
}

export default {
  brows: [browA, browB, browC, browD],
  eyes: [eyesA, eyesB, eyesC, eyesD],
  mouths: [mouthA, mouthB, mouthC, mouthD],
  noses: [noseA, noseB, noseC, noseD],
  heads: [headA, headB, headC, headD],
} as Assets;
