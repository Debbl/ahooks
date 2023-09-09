import { renderHook as renderHookSSR } from "@testing-library/react-hooks/server";
import { renderHook as renderHookCSR } from "@testing-library/react-hooks/dom";
import useHydrated from ".";

const setUpSSR = () => renderHookSSR(() => useHydrated());
const setUpCSR = () => renderHookCSR(() => useHydrated());

describe("useLatest", () => {
  it("should return isHydrated false when rendering on the server", () => {
    const { result } = setUpSSR();
    expect(result.current.isHydrated).toBe(false);
  });

  it("should return isHydrated true when hydrated", () => {
    const { result, hydrate } = setUpSSR();
    hydrate();
    expect(result.current.isHydrated).toBe(true);
  });

  it("should return isHydrated true on the client", () => {
    const { result } = setUpCSR();
    expect(result.current.isHydrated).toBe(true);
  });
});
