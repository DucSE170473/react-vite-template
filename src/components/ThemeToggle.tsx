import { Sun, Moon } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Kiểm tra preference người dùng hoặc trạng thái đã lưu trước
    const saved = localStorage.getItem('ttb-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const dark = saved ? saved === 'dark' : prefersDark
    setIsDark(dark)
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    localStorage.setItem('ttb-theme', next ? 'dark' : 'light')
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
      className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
    >
      {isDark ? (
        <Sun size={18} className="text-yellow-300" />
      ) : (
        <Moon size={18} />
      )}
    </button>
  )
}
