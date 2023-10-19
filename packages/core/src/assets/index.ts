import browA from "@/assets/brows/brow-a.png";
import browB from "@/assets/brows/brow-b.png";
import browC from "@/assets/brows/brow-c.png";
import browD from "@/assets/brows/brow-d.png";

import eyesA from "@/assets/eyes/eyes-a.png";
import eyesB from "@/assets/eyes/eyes-b.png";
import eyesC from "@/assets/eyes/eyes-c.png";
import eyesD from "@/assets/eyes/eyes-d.png";

import mouthA from "@/assets/mouths/mouth-a.png";
import mouthB from "@/assets/mouths/mouth-b.png";
import mouthC from "@/assets/mouths/mouth-c.png";
import mouthD from "@/assets/mouths/mouth-d.png";

import noseA from "@/assets/noses/nose-a.png";
import noseB from "@/assets/noses/nose-b.png";
import noseC from "@/assets/noses/nose-c.png";
import noseD from "@/assets/noses/nose-d.png";

import headA from "@/assets/heads/head-a.png";
import headB from "@/assets/heads/head-b.png";
import headC from "@/assets/heads/head-c.png";
import headD from "@/assets/heads/head-d.png";

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
