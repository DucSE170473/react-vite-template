import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '../Header'

// Mock TanStack Router
vi.mock('@tanstack/react-router', () => ({
  Link: ({ children, to, className }: any) => <a href={to} className={className}>{children}</a>,
  useMatchRoute: () => () => false,
  createFileRoute: () => () => ({}),
}))

describe('Header Component', () => {
  it('renders the brand logo and name', () => {
    render(<Header />)
    
    // Check for logo by alt text
    expect(screen.getByAltText(/TTB CORP Logo/i)).toBeDefined()
    // Multiple elements might contain 'TTB CORP' (logo text + alt text)
    expect(screen.getAllByText(/TTB CORP/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/Thành Công/i)).toBeDefined()
  })

  it('renders navigation links', () => {
    render(<Header />)
    
    // Links should be present (they are mapped from internal navLinks array)
    expect(screen.getAllByText(/Trang chủ/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Giới thiệu/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Dự án/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Liên hệ/i).length).toBeGreaterThan(0)
  })
})
