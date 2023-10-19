import type { Avatar } from "@tarava/types/avatar";
import { LoadAssets } from "./asset";

export interface Store {
  init: boolean;
  avatar?: Avatar;
  assets?: LoadAssets;
  element?: HTMLCanvasElement;
}

export interface StoreInstance<T> {
  get: <K extends keyof T>(property: K) => T[K];
  getState: () => T;
  setState: <K extends keyof T>(property: K, value: T[K]) => void;
  replaceState: (newState: T) => void;
  subscribe: <K extends keyof T>(
    property: K,
    listener: (value: T[keyof T]) => void,
  ) => void;
}
