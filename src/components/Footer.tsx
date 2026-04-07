import { Mail, Phone, MapPin, Facebook, Youtube, UserCheck } from "lucide-react"
import { Link } from '@tanstack/react-router'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 pt-12 md:pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 border-b border-slate-800 pb-12">

          {/* Cột 1: Thương hiệu */}
          <div className="space-y-6">
            <div className="flex flex-col gap-5">
              <div className="h-12 md:h-14 w-fit overflow-hidden">
                <img src="/ttb-white.jpg" alt="TTB CORP Logo" className="h-full w-auto object-contain transition-opacity hover:opacity-80" />
              </div>
              <div className="flex flex-col leading-tight border-l-4 border-blue-600 pl-4">
                <span className="text-blue-500 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mt-1">TTB CORP</span>
                <p className="text-[9px] md:text-[10px] text-slate-500 font-bold uppercase mt-2 tracking-wider">Công ty Cổ Phần Thành Công</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 font-medium max-w-xs">
              Chuyên gia hàng đầu trong lĩnh vực tư vấn, thiết kế và thi công kết cấu thép nhà xưởng đạt chuẩn quốc tế.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:text-blue-500 hover:bg-slate-700 transition-all active:scale-95"><Facebook size={20} /></a>
              <a href="#" className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:text-red-500 hover:bg-slate-700 transition-all active:scale-95"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm border-b border-slate-800 lg:border-none pb-2 lg:pb-0">Liên kết</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 text-sm font-medium">
              <li><Link to="/" className="hover:text-white hover:translate-x-1 inline-block transition">Trang chủ</Link></li>
              <li><Link to="/about" className="hover:text-white hover:translate-x-1 inline-block transition">Về chúng tôi</Link></li>
              <li><Link to="/projects" className="hover:text-white hover:translate-x-1 inline-block transition">Dự án</Link></li>
              <li><Link to="/contact" className="hover:text-white hover:translate-x-1 inline-block transition">Liên hệ</Link></li>
            </ul>
          </div>

          {/* Cột 3: Dịch vụ */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm border-b border-slate-800 lg:border-none pb-2 lg:pb-0">Dịch vụ</h4>
            <ul className="space-y-3 text-sm font-medium">
              {['Kết cấu thép', 'Hệ thống PCCC', 'Điện mặt trời', 'Xây dựng hạ tầng'].map((svc) => (
                <li key={svc} className="flex items-center gap-2 hover:text-blue-400 transition cursor-pointer group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:w-3 transition-all"></span>
                  {svc}
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 4: Thông tin & QR */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm border-b border-slate-800 lg:border-none pb-2 lg:pb-0">Liên hệ & QR</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-blue-500 shrink-0 mt-1" />
                <span className="leading-snug">166/12 Huỳnh Văn Nghệ, P. Tân Sơn, Q. Tân Bình, TP. HCM</span>
              </li>
              
              {/* Hotline Lãnh Đạo */}
              <li className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <a href="tel:0908528525" className="flex items-center gap-4 text-amber-500 group">
                  <UserCheck size={20} className="shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-tighter opacity-70">Hotline</span>
                    <span className="text-base font-black group-hover:underline">0908.528.525</span>
                  </div>
                </a>
              </li>

              {/* QR Codes Footer */}
              <div className="pt-2 flex gap-4">
                <div className="flex flex-col items-center gap-2 group">
                  <div className="p-2 bg-white rounded-lg group-hover:scale-105 transition-transform"><img src="/QR-TTB-Corp.png" alt="QR" className="w-14 h-14 object-contain" /></div>
                  <span className="text-[9px] font-bold uppercase tracking-tighter text-slate-500">Zalo Công ty</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="p-2 bg-white rounded-lg group-hover:scale-105 transition-transform border border-amber-200"><img src="/tuan.jpg" alt="QR" className="w-14 h-14 object-contain" /></div>
                  <span className="text-[9px] font-bold uppercase tracking-tighter text-amber-600">Zalo Lãnh đạo</span>
                </div>
              </div>
            </ul>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-medium uppercase tracking-widest text-center md:text-left">
          <p className="opacity-60">&copy; {year} <span className="text-blue-500 font-bold">THÀNH CÔNG GROUP</span>. All rights reserved.</p>
          <p className="text-slate-600 flex items-center gap-2">Phát triển bởi <span className="px-2 py-0.5 bg-slate-800 rounded text-blue-400 font-black">TTC TECH</span></p>
        </div>
      </div>
    </footer>
  )
}