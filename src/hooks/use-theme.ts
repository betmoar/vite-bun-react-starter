import { useEffect, useState } from "react"
import type { Theme } from "@/types/theme"

export function useTheme(defaultTheme: Theme = "system") {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [systemTheme, setSystemTheme] = useState<Theme | undefined>(undefined)

  useEffect(() => {
    // Check if user prefers dark mode
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    setSystemTheme(mediaQuery.matches ? "dark" : "light")

    const handler = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light")
    }

    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    if (theme === "system") {
      root.classList.add(systemTheme ?? defaultTheme)
    } else {
      root.classList.add(theme)
    }
  }, [theme, systemTheme, defaultTheme])

  return {
    theme,
    systemTheme,
    setTheme,
  }
}
