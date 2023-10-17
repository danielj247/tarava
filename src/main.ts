import render from "./lib/render";
import { setupCanvas } from "./lib/canvas";
import "./style.css";

export default function main() {
  setupCanvas();

  render();
}
