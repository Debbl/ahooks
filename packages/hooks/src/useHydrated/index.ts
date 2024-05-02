import { useEffect, useState } from "react";

/**
 *  Get whether the component is hydrated or not.
 * @returns A object with a isHydrated indicating whether the component is hydrated or not
 */
export function useHydrated() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return {
    isHydrated,
  };
}

export default useHydrated;
