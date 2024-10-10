import { useEffect } from "react";

/**
 * A hook that executes a function after the component is mounted.
 * @param effectCallback a effect callback to run on mount
 */
export function useMount(effectCallback: () => void) {
  useEffect(() => effectCallback?.(), []);
}

export default useMount;
