import { renderHook } from "@testing-library/react";
import useLatest from ".";

const setUp = (val: any) =>
  renderHook((state) => useLatest(state), { initialProps: val });

describe("useLatest", () => {
  it("should return a ref object", () => {
    const { result } = setUp(1);
    expect(result.current).toHaveProperty("current");
  });

  it("should return a ref object with the initial value", () => {
    const { result } = setUp(1);
    expect(result.current.current).toBe(1);
  });

  it("should return a ref object with the updated value", () => {
    const { result, rerender } = setUp(1);
    rerender(2);
    expect(result.current.current).toBe(2);
  });

  it("should work with reference types", () => {
    const { result, rerender } = setUp({ a: 1 });
    rerender({ a: 2 });
    expect(result.current.current).toEqual({ a: 2 });
  });
});
