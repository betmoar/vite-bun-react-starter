import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { type ButtonProps } from "@/components/ui/button"

interface TestButtonProps extends Omit<ButtonProps, "className" | "variant"> {
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}

export function TestButton({ 
  className,
  variant = "default",
  ...props
}: TestButtonProps) {
  return (
    <Button 
      variant={variant}
      className={cn(
        "min-w-[100px]",
        className
      )}
      {...props}
    />
  )
}
