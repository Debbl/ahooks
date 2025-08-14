import { renderHook } from '@testing-library/react'
import { renderHookServer } from '~/tests/renderHookServer'
import { useHydrated } from '.'

const setUpSSR = () => renderHookServer(() => useHydrated())
const setUpCSR = () => renderHook(() => useHydrated())

describe('useLatest', () => {
  it('should return isHydrated false when rendering on the server', () => {
    const { result } = setUpSSR()
    expect(result.current.isHydrated).toBe(false)
  })

  it('should return isHydrated true when hydrated', () => {
    const { result, hydrate } = setUpSSR()
    hydrate()
    expect(result.current.isHydrated).toBe(true)
  })

  it('should return isHydrated true on the client', () => {
    const { result } = setUpCSR()
    expect(result.current.isHydrated).toBe(true)
  })
})
