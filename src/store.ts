import React from "react";

export function createStore<T>(initialState: T) {
  let state = initialState;
  const set = new Set<(state: T) => void>();

  const subscribe = (func: (state: T) => void) => {
    set.add(func);

    return () => {
      set.delete(func);
    };
  };

  return {
    getState: () => state,
    setState: (func: (prevState: T) => T) => {
      state = func(state);
      set.forEach((func) => func(state));
    },
    useStore: <U>(selector: (state: T) => U) => {
      return React.useSyncExternalStore(subscribe, () => selector(state));
    },
  };
}

export type InferStoreState<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends { getState: () => any; setState: (val: any) => void }
> = T["getState"] extends () => infer R ? R : never;
