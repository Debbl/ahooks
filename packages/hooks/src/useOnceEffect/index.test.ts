import { renderHook } from "@testing-library/react";
import { vi } from "vitest";
import type { DependencyList, EffectCallback } from "react";
import useOnceEffect from ".";

describe("useOnceEffect", () => {
  it("should run the effect only once", () => {
    const fn = vi.fn();
    const createEffect = () => () => fn();

    const effect = createEffect();
    const { rerender } = renderHook(
      ({ effect, deps }: { effect: EffectCallback; deps?: DependencyList }) =>
        useOnceEffect(effect, deps),
      {
        initialProps: {
          effect,
          deps: [],
        },
      },
    );

    expect(fn).toBeCalledTimes(1);
    rerender({ effect, deps: [] });
    expect(fn).toBeCalledTimes(1);
  });
  it("should run the effect only once when deps change with effect change", () => {
    const fn = vi.fn();
    const createEffect = () => () => fn();

    const { rerender } = renderHook(
      ({ effect, deps }: { effect: EffectCallback; deps?: DependencyList }) =>
        useOnceEffect(effect, deps),
      {
        initialProps: {
          effect: createEffect(),
        },
      },
    );

    expect(fn).toBeCalledTimes(1);
    rerender({ effect: createEffect() });
    expect(fn).toBeCalledTimes(2);
  });
});
