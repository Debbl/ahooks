import type { DependencyList, EffectCallback } from "react";
import { useEffect, useRef } from "react";

/**
 * avoid running the effect multiple times when strict-mode is enabled
 * @param effect a function to useEffect but only run once when strict-mode is enabled
 * @param deps useEffect dependencies
 */
export function useOnceEffect(effect: EffectCallback, deps?: DependencyList) {
  const record = useRef(new Set<EffectCallback>());

  const onceWrapper = () => {
    const shouldStart = !record.current.has(effect);

    if (shouldStart) {
      record.current.add(effect);
      return effect();
    }
  };

  useEffect(onceWrapper, deps);
}

export default useOnceEffect;
