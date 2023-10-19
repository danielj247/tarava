import { ref } from "vue";

export default function useLifecycle() {
  const listener = ref<() => void>();

  function onHook(callback: () => void) {
    listener.value = callback;
  }

  function triggerHook() {
    listener.value?.();
  }

  return { onHook, triggerHook };
}
