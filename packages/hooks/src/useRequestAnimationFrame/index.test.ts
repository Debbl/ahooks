import { renderHook } from '@testing-library/react'
import { useRequestAnimationFrame } from '.'

describe('useRequestAnimationFrame', () => {
  it('should return a ref object', () => {
    const { result } = renderHook(() =>
      useRequestAnimationFrame(() => () => {}),
    )
    expect(result.current).toBe(undefined)
  })
})
