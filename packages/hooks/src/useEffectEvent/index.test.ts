import { renderHook } from '@testing-library/react'
import { useEffectEvent } from '.'

describe('useEffectEvent', () => {
  it('should return a stable function', () => {
    const { result, rerender } = renderHook(
      (reactive: number[]) =>
        useEffectEvent(() => {
          return reactive
        }),
      {
        initialProps: [0],
      },
    )

    const fn = result.current
    expect(fn()).toStrictEqual([0])

    rerender([1])

    // The function should be the stable
    expect(result.current).toBe(fn)

    // value should be updated
    expect(fn()).toStrictEqual([1])
    expect(result.current()).toStrictEqual([1])
  })
})
