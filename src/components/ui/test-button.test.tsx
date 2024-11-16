import { describe, it, expect } from 'vitest'
import { render, screen } from '@/test/test-utils'
import { TestButton } from './test-button'

describe('TestButton', () => {
  it('renders with default variant', () => {
    render(<TestButton>Click me</TestButton>)
    
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('min-w-[100px]')
  })

  it('renders with destructive variant', () => {
    render(<TestButton variant="destructive">Delete</TestButton>)
    
    const button = screen.getByRole('button', { name: /delete/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('min-w-[100px]')
    expect(button).toHaveClass('bg-destructive')
  })

  it('renders with outline variant', () => {
    render(<TestButton variant="outline">Outline</TestButton>)
    
    const button = screen.getByRole('button', { name: /outline/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('min-w-[100px]')
    expect(button).toHaveClass('border')
  })

  it('renders with secondary variant', () => {
    render(<TestButton variant="secondary">Secondary</TestButton>)
    
    const button = screen.getByRole('button', { name: /secondary/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('min-w-[100px]')
    expect(button).toHaveClass('bg-secondary')
  })

  it('renders with ghost variant', () => {
    render(<TestButton variant="ghost">Ghost</TestButton>)
    
    const button = screen.getByRole('button', { name: /ghost/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('min-w-[100px]')
    expect(button).toHaveClass('hover:bg-accent')
  })

  it('renders with link variant', () => {
    render(<TestButton variant="link">Link</TestButton>)
    
    const button = screen.getByRole('button', { name: /link/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('min-w-[100px]')
    expect(button).toHaveClass('underline-offset-4')
  })

  it('applies custom className', () => {
    render(
      <TestButton className="custom-class">
        Custom Class
      </TestButton>
    )
    
    const button = screen.getByRole('button', { name: /custom class/i })
    expect(button).toHaveClass('custom-class')
  })

  it('forwards additional props to Button component', () => {
    render(
      <TestButton disabled aria-label="disabled button">
        Disabled
      </TestButton>
    )
    
    const button = screen.getByRole('button', { name: /disabled button/i })
    expect(button).toBeDisabled()
  })
})
