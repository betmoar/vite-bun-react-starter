import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@/test/test-utils'
import { ThemeToggle } from './theme-toggle'
import type { ThemeConfig } from '@/types/theme'

describe('ThemeToggle', () => {
  const mockConfig: ThemeConfig = {
    theme: 'light',
    setTheme: vi.fn(),
  }

  it('renders theme toggle button', () => {
    render(<ThemeToggle config={mockConfig} />)
    
    const button = screen.getByRole('button', { name: /toggle theme/i })
    expect(button).toBeInTheDocument()
  })

  it('shows theme options in dropdown', async () => {
    const { user } = render(<ThemeToggle config={mockConfig} />)
    
    // Click the toggle button to open dropdown
    const button = screen.getByRole('button', { name: /toggle theme/i })
    await user.click(button)
    
    // Check if all theme options are present
    expect(screen.getByText('Light')).toBeInTheDocument()
    expect(screen.getByText('Dark')).toBeInTheDocument()
    expect(screen.getByText('System')).toBeInTheDocument()
  })

  it('calls setTheme when selecting a theme', async () => {
    const { user } = render(<ThemeToggle config={mockConfig} />)
    
    // Open dropdown
    const button = screen.getByRole('button', { name: /toggle theme/i })
    await user.click(button)
    
    // Click dark theme option
    const darkOption = screen.getByText('Dark')
    await user.click(darkOption)
    
    expect(mockConfig.setTheme).toHaveBeenCalledWith('dark')
  })

  it('highlights current theme in dropdown', async () => {
    const { user } = render(
      <ThemeToggle 
        config={{
          ...mockConfig,
          theme: 'dark'
        }} 
      />
    )
    
    // Open dropdown
    const button = screen.getByRole('button', { name: /toggle theme/i })
    await user.click(button)
    
    // Check if dark theme option has accent background
    const darkOption = screen.getByText('Dark').closest('div')
    expect(darkOption).toHaveClass('bg-accent')
  })
})
