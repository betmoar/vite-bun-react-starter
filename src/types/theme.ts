export type Theme = "light" | "dark" | "system"

export interface ThemeConfig {
  theme: Theme
  systemTheme?: Theme
  setTheme: (theme: Theme) => void
}
