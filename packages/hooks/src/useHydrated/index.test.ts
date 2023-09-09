import { renderHook as renderHookSSR } from "@testing-library/react-hooks/server";
import { renderHook as renderHookCSR } from "@testing-library/react-hooks/dom";
import useHydrated from ".";

const setUpSSR = () => renderHookSSR(() => useHydrated());
const setUpCSR = () => renderHookCSR(() => useHydrated());

describe("useLatest", () => {
  it("should return isServer true when rendering on the server", () => {
    const { result } = setUpSSR();
    expect(result.current.isServer).toBe(true);
  });

  it("should return isBrowser false when rendering on the server", () => {
    const { result } = setUpSSR();
    expect(result.current.isBrowser).toBe(false);
  });

  it("should return isServer false when hydrated", () => {
    const { result, hydrate } = setUpSSR();
    hydrate();
    expect(result.current.isServer).toBe(false);
  });

  it("should return isBrowser true when hydrated", () => {
    const { result, hydrate } = setUpSSR();
    hydrate();
    expect(result.current.isBrowser).toBe(true);
  });

  it("should return isServer false on the client", () => {
    const { result } = setUpCSR();
    expect(result.current.isServer).toBe(false);
  });

  it("should return isBrowser true on the client", () => {
    const { result } = setUpCSR();
    expect(result.current.isBrowser).toBe(true);
  });
});
