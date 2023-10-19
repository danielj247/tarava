import { createStore } from "@/lib/store";

import type { Store } from "@tarava/types/store";

const store = createStore<Store>({
  init: false,
  avatar: undefined,
  element: undefined,
  assets: undefined,
});

export default store;
