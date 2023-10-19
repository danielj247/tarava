export function throttle(fn: () => void, wait: number): () => void {
  let time = Date.now();

  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}
