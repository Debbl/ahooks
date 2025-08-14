import { renderHook } from '@testing-library/react'
import { vi } from 'vitest'
import { useMount } from '.'

describe('useMount', () => {
  it('should run once on component mount', () => {
    const fn = vi.fn()

    const hook = renderHook(() => useMount(fn))
    expect(fn).toHaveBeenCalledTimes(1)

    hook.rerender()
    expect(fn).toHaveBeenCalledTimes(1)

    hook.unmount()
    expect(fn).toHaveBeenCalledTimes(1)

    renderHook(() => useMount(fn)).unmount()
    expect(fn).toHaveBeenCalledTimes(2)
  })
})
