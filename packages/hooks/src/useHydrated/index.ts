import { useEffect, useState } from "react";

/**
 *  Returns a boolean indicating whether the component is hydrated or not.
 * @returns A object contains isBrowser and isServer
 */
const useHydrated = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return {
    isBrowser: hydrated,
    isServer: !hydrated,
  };
};

export default useHydrated;
