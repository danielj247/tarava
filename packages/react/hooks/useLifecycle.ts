import { useRef } from "react";

export default function useLifecycle() {
  const listener = useRef<() => void>();

  function onHook(callback: () => void) {
    listener.current = callback;
  }

  function triggerHook() {
    listener.current?.();
  }

  return { onHook, triggerHook };
}
