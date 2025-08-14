import { renderHook } from '@testing-library/react'
import { useUnmount } from '.'

describe('useUnmount', () => {
  it('should run once on component unmount', () => {
    const fn = vi.fn()

    const hook = renderHook(() => useUnmount(fn))
    expect(fn).toHaveBeenCalledTimes(0)

    hook.rerender()
    expect(fn).toHaveBeenCalledTimes(0)

    hook.unmount()
    expect(fn).toHaveBeenCalledTimes(1)

    renderHook(() => useUnmount(fn)).unmount()
    expect(fn).toHaveBeenCalledTimes(2)
  })
})
