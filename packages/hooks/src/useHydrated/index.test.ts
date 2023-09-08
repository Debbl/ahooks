import { renderHook } from "@testing-library/react";
import useHydrated from ".";

const setUp = () => renderHook(() => useHydrated());

describe("useLatest", () => {
  it("should return isBrowser true", () => {
    const { result } = setUp();
    expect(result.current.isBrowser).toBe(true);
  });

  it("should return isServer false", () => {
    const { result } = setUp();
    expect(result.current.isServer).toBe(false);
  });
});
