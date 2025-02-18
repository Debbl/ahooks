import { useCallback, useInsertionEffect, useRef } from "react";

/**
 * useEffectEvent is a React Hook that lets you extract non-reactive logic into an Effect Event.
 * @see https://react.dev/reference/react/experimental_useEffectEvent
 * @param fn - The stable function.
 * @returns A stable function that always has the latest value of the reactive variables.
 * @example
 * ```ts
 * const fn = useEffectEvent((value: number) => {
 *   console.log(value);
 * });
 * ```
 */
export function useEffectEvent<T extends (...args: any[]) => void>(fn: T) {
  const fnRef = useRef<T>(null);

  useInsertionEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  return useCallback((...args: Parameters<T>) => {
    return fnRef.current?.(...args);
  }, []);
}

export default useEffectEvent;
