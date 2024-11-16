import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useTheme } from './use-theme'

describe('useTheme', () => {
  let matchMedia: { matches: boolean; addEventListener: any; removeEventListener: any }

  beforeEach(() => {
    // Mock matchMedia
    matchMedia = {
      matches: false,
      addEventListener: vi.fn((_, callback) => callback),
      removeEventListener: vi.fn(),
    }
    
    vi.stubGlobal('matchMedia', () => matchMedia)
  })

  it('initializes with default theme', () => {
    const { result } = renderHook(() => useTheme())
    
    expect(result.current.theme).toBe('system')
    expect(result.current.systemTheme).toBe('light')
  })

  it('initializes with provided theme', () => {
    const { result } = renderHook(() => useTheme('dark'))
    
    expect(result.current.theme).toBe('dark')
  })

  it('updates theme when setTheme is called', () => {
    const { result } = renderHook(() => useTheme())
    
    act(() => {
      result.current.setTheme('dark')
    })
    
    expect(result.current.theme).toBe('dark')
  })

  it('detects system dark theme preference', () => {
    matchMedia.matches = true
    
    const { result } = renderHook(() => useTheme())
    
    expect(result.current.systemTheme).toBe('dark')
  })

  it('updates system theme when preference changes', () => {
    const { result } = renderHook(() => useTheme())
    
    // Get the callback function from addEventListener
    const callback = matchMedia.addEventListener.mock.results[0].value
    
    act(() => {
      callback({ matches: true })
    })
    
    expect(result.current.systemTheme).toBe('dark')
  })

  it('cleans up event listener on unmount', () => {
    const { unmount } = renderHook(() => useTheme())
    
    unmount()
    
    expect(matchMedia.removeEventListener).toHaveBeenCalled()
  })

  it('updates document classes when theme changes', () => {
    const { result } = renderHook(() => useTheme('light'))
    
    const root = document.documentElement
    expect(root.classList.contains('light')).toBe(true)
    
    act(() => {
      result.current.setTheme('dark')
    })
    
    expect(root.classList.contains('light')).toBe(false)
    expect(root.classList.contains('dark')).toBe(true)
  })
})
