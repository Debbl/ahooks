import { useEffect } from "react";

/**
 * A hook that executes a function after the component is mounted.
 * @param fn a effect callback to run on mount
 */
export function useMount(fn: () => void) {
  useEffect(() => fn?.(), []);
}

export default useMount;
