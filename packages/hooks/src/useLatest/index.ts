import { useRef } from "react";

/**
 *  Returns a ref object whose `.current` property is always set to the latest value passed to `useLatest`.
 * @param value - The value to be stored in the ref
 * @returns A ref object whose `.current` property is always set to the latest value passed to `useLatest`
 */
export const useLatest = <T>(value: T) => {
  const ref = useRef(value);
  ref.current = value;

  return ref;
};

export default useLatest;
