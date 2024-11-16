import { TestButton } from "@/components/ui/test-button"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { useTheme } from "@/hooks/use-theme"

export default function TestPage() {
  const themeConfig = useTheme()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-4">
      {/* Theme Toggle Test */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl font-semibold">Theme Toggle Test</h2>
        <ThemeToggle config={themeConfig} />
        <p className="text-sm text-muted-foreground">
          Current Theme: {themeConfig.theme}
          {themeConfig.theme === "system" && 
            ` (${themeConfig.systemTheme ?? "loading..."})`
          }
        </p>
      </div>

      {/* Button Variants Test */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl font-semibold">Button Variants Test</h2>
        <div className="flex gap-4">
          <TestButton>Default</TestButton>
          <TestButton variant="outline">Outline</TestButton>
          <TestButton variant="ghost">Ghost</TestButton>
        </div>
      </div>
    </div>
  )
}
