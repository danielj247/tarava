import type { StoreInstance } from "@tarava/types/store";

export function createStore<T>(initialState: T): StoreInstance<T> {
  let state: T = initialState;
  const listeners: Array<(state: T) => void> = [];

  function get<K extends keyof T>(property: K) {
    return state[property];
  }

  function getState() {
    return state;
  }

  function replaceState(newState: T) {
    state = newState;
    listeners.forEach((listener) => listener(state as T));
  }

  function setStateByProperty(property: keyof T, value: T[keyof T]) {
    console.log("setting state", property, value);

    replaceState({
      ...state,
      [property]: value,
    });
  }

  function subscribe<K extends keyof T>(
    property: K,
    listener: (value: T[keyof T]) => void,
  ) {
    listeners.push((state) => listener(state[property]));
  }

  return {
    get,
    getState,
    setState: setStateByProperty,
    replaceState,
    subscribe,
  };
}
