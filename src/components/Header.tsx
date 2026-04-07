import { Link, useMatchRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, ChevronDown, QrCode, UserCheck } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [showQR, setShowQR] = useState(false)
  const matchRoute = useMatchRoute()

  const hotlines = [
    { label: "0792.51.51.51", sub: "Tổng đài hỗ trợ", tel: "0792515151" },
    { label: "0946.234.114", sub: "Hỗ trợ kỹ thuật", tel: "0946234114" },
    { label: "028.665.666.64", sub: "Văn phòng HCM", tel: "02866566664" },
    { label: "0908.528.525", sub: "Hotline Lãnh đạo (24/7)", tel: "0908528525", isBoss: true },
  ]

  const navLinks = [
    { to: "/", label: "Trang chủ", exact: true },
    { to: "/about", label: "Giới thiệu", exact: false },
    { to: "/projects", label: "Dự án", exact: false },
    { to: "/contact", label: "Liên hệ", exact: false },
  ]

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setIsOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="sticky top-0 z-[100] border-b border-white/10 bg-[var(--brand-primary)] shadow-2xl">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-6">

        {/* 1. Logo Section */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 no-underline group z-[110]">
          <div className="bg-white p-1 rounded-lg shadow-sm group-hover:shadow-md transition-all h-10 md:h-12 flex items-center justify-center overflow-hidden mix-blend-multiply">
            <img src="/ttb-white.jpg" alt="TTB CORP Logo" className="h-full w-auto object-contain transition-transform group-hover:scale-105" />
          </div>
          <div className="flex flex-col leading-tight border-l-2 border-white/20 pl-2 md:pl-3">
            <span className="text-white text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mt-1">TTB CORP</span>
            <p className="text-[9px] md:text-[10px] text-white/70 font-bold uppercase mt-2 tracking-wider text-nowrap">Công ty Cổ Phần Thành Công</p>
          </div>
        </Link>

        {/* 2. Menu Desktop */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.15em] text-white/80">
          {navLinks.map((link) => {
            const isActive = !!matchRoute({ to: link.to, fuzzy: !link.exact })
            return (
              <Link key={link.to} to={link.to} className={`relative pb-1.5 transition-colors duration-300 border-b-2 ${isActive ? 'text-white border-[var(--brand-accent)]' : 'text-white/70 border-transparent hover:text-white hover:border-white/40'}`}>
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* 3. Nút Hotline & QR & ThemeToggle */}
        <div className="flex items-center gap-3 md:gap-4">
          <button 
            onClick={() => setShowQR(true)}
            className="hidden sm:flex items-center gap-2 bg-white/10 hover:bg-white text-white hover:text-[var(--brand-primary)] p-2 rounded-lg transition-all"
          >
            <QrCode size={20} />
          </button>

          <div className="hidden lg:block relative group">
            <button className="flex items-center gap-2 border-2 border-white/40 text-white px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-widest group-hover:bg-white group-hover:text-[var(--brand-primary)] transition-all duration-300">
              <Phone size={14} /> 
              <span>Liên hệ</span>
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
            </button>
            
            <div className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 overflow-hidden border border-gray-100">
              {hotlines.map((item, index) => (
                <a key={index} href={`tel:${item.tel}`} className={`flex flex-col px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-none transition-colors ${item.isBoss ? 'bg-amber-50' : ''}`}>
                  <span className={`text-[9px] uppercase font-bold ${item.isBoss ? 'text-amber-600' : 'text-slate-400'}`}>
                    {item.isBoss ? '⭐ Đường dây nóng ' : item.sub}
                  </span>
                  <span className="text-[13px] font-black text-[var(--brand-primary)]">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          <ThemeToggle />

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2 z-[110]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* 4. Overlay Menu Mobile */}
        <div className={`fixed inset-0 bg-[var(--brand-primary)] z-[100] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'}`}>
          <div className="flex flex-col items-center gap-6 w-full px-8 overflow-y-auto pt-20">
            {navLinks.map((link) => {
              const isActive = !!matchRoute({ to: link.to, fuzzy: !link.exact })
              return (
                <Link key={link.to} to={link.to} onClick={() => setIsOpen(false)} className={`text-xl font-black uppercase tracking-[0.2em] transition-colors ${isActive ? 'text-[var(--brand-accent)]' : 'text-white/70 hover:text-white'}`}>
                  {link.label}
                </Link>
              )
            })}
            <div className="w-full flex flex-col gap-3 mt-4 border-t border-white/10 pt-6">
              {hotlines.map((item, index) => (
                <a key={index} href={`tel:${item.tel}`} className={`flex items-center justify-between px-6 py-4 rounded-xl border transition-all ${item.isBoss ? 'bg-amber-500 text-white border-none scale-105 shadow-lg' : 'bg-white/10 text-white border-white/10'}`}>
                  <div className="flex flex-col">
                    <span className={`text-[9px] uppercase font-bold ${item.isBoss ? 'text-white/80' : 'text-white/40'}`}>{item.sub}</span>
                    <span className="text-[15px] font-black tracking-wider">{item.label}</span>
                  </div>
                  <Phone size={18} />
                </a>
              ))}
              <button onClick={() => { setShowQR(true); setIsOpen(false); }} className="flex items-center justify-center gap-3 bg-white text-[var(--brand-primary)] py-4 rounded-xl font-black uppercase text-xs tracking-widest mt-2">
                <QrCode size={20} /> Quét mã Zalo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal QR Code */}
      {showQR && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowQR(false)}>
          <div className="bg-white p-6 md:p-8 rounded-[2rem] max-w-sm w-full text-center relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowQR(false)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500"><X size={24} /></button>
            <h3 className="text-[var(--brand-primary)] font-black uppercase tracking-wider mb-6 text-sm">Quét mã Zalo liên hệ</h3>
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <img src="/QR-TTB-Corp.png" alt="QR Công ty" className="w-full aspect-square object-contain rounded-lg shadow-sm" />
                <p className="text-[11px] font-black text-blue-600 uppercase tracking-widest">Zalo TTB CORP</p>
              </div>
              <div className="space-y-3 p-4 bg-amber-50 rounded-2xl border border-amber-100">
                <img src="/tuan.jpg" alt="QR Lãnh đạo" className="w-full aspect-square object-contain rounded-lg shadow-sm border-2 border-white" />
                <p className="text-[11px] font-black text-amber-600 uppercase tracking-widest">Zalo Lãnh Đạo</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}