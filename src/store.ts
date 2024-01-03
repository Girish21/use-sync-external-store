export function createStore<T>(initialState: T) {
  let state = initialState;

  return {
    getState: () => state,
    setState: (func: (prevState: T) => T) => {
      state = func(state);
    },
  };
}

export type InferStoreState<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends { getState: () => any; setState: (val: any) => void }
> = T["getState"] extends () => infer R ? R : never;
