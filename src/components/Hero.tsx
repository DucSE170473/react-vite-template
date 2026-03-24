import { Download, Zap } from "lucide-react"
import { Link } from "@tanstack/react-router"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-white overflow-hidden pt-20 md:pt-0">

      {/* Lớp ảnh nền đại cảnh */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-steel-bg.jpg"
          alt="TTB Corp Industrial Foundation"
          className="w-full h-full object-cover opacity-[0.05] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">

        {/* Khối nội dung bên trái - Tối ưu Typography Mobile */}
        <div className="order-2 lg:order-1 space-y-6 md:space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 py-2 rounded-full bg-[var(--brand-primary)]/5 border border-[var(--brand-primary)]/10 text-[var(--brand-primary)] text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] shadow-sm backdrop-blur-sm mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand-primary)]"></span>
            </span>
            Chuyên gia kết cấu thép & PCCC
          </div>

          {/* Tiêu đề chính */}
          <h1 className="flex flex-col gap-2 md:gap-4 mb-4 md:mb-6">
            <span className="text-slate-400 font-medium text-sm md:text-xl tracking-[0.3em] md:tracking-[0.5em] uppercase">Vững nền tảng</span>
            <span className="text-4xl md:text-6xl lg:text-8xl font-black text-[var(--brand-primary)] leading-[1.1] tracking-tighter uppercase relative inline-block">
              Sáng tương lai
              <span className="absolute -bottom-2 left-0 w-24 md:w-48 h-1.5 md:h-2 bg-[var(--brand-accent)] rounded-full"></span>
            </span>
          </h1>

          <p className="text-sm md:text-lg text-slate-600 max-w-lg leading-relaxed font-medium border-l-0 lg:border-l-4 border-[var(--brand-primary)]/20 pl-0 lg:pl-6 mx-auto lg:mx-0 mt-6 md:mt-0">
            <span className="text-[var(--brand-primary)] font-black italic uppercase tracking-wider">TTB CORP</span>
            <br className="hidden md:block" />
            Hệ sinh thái hạ tầng công nghiệp trọn gói:
            <br className="hidden md:block" />
            Tư vấn tối ưu - Thiết kế chính xác - Thi công thần tốc.
          </p>

          {/* Button Group - Tăng contrast cho text nút chính */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 md:gap-5 pt-4">
            <Link
              to="/contact"
              aria-label="Liên hệ tư vấn với TTB CORP"
              className="bg-[var(--brand-primary)] text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black hover:bg-[var(--brand-primary)]/90 transition-all flex items-center justify-center gap-3 shadow-xl shadow-[var(--brand-primary)]/20 hover:-translate-y-1 active:scale-95 uppercase text-xs md:text-sm tracking-widest"
            >
              Liên hệ tư vấn
              <Zap size={18} fill="white" />
            </Link>

            <a
              href="/PROFILE TTB - Thanh Cong TTB Joint Stock Company.pdf"
              target="_blank"
              className="bg-white border-2 border-slate-200 px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-slate-700 hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-all flex items-center justify-center gap-3 group uppercase text-xs md:text-sm tracking-tighter"
            >
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              Hồ sơ năng lực
            </a>
          </div>
        </div>

        {/* Khối ảnh bên phải - Giảm size trên mobile để không chiếm hết màn hình */}
        <div className="order-1 lg:order-2 relative px-4 md:px-0">
          <div className="relative z-10 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] md:border-[12px] border-white group">
            <img
              src="/img-hero-steel.jpg"
              alt="Steel Structure"
              className="w-full object-cover aspect-[4/3] md:aspect-[4/5] group-hover:scale-105 transition-transform duration-1000"
            />
          </div>

          {/* Badge ISO - Định vị trong ảnh, không tràn ra ngoài */}
          <div className="absolute bottom-4 -left-2 md:bottom-6 md:-left-8 z-20 bg-white p-4 md:p-6 rounded-2xl md:rounded-[2rem] shadow-xl border border-slate-100 animate-bounce-slow scale-75 md:scale-100">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-amber-100 text-amber-600 rounded-xl md:rounded-2xl flex items-center justify-center">
                <Zap className="w-5 h-5 md:w-7 md:h-7" fill="currentColor" />
              </div>
              <div>
                <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Tiêu chuẩn</p>
                <p className="text-lg md:text-2xl font-black text-[var(--brand-primary)]">ISO 9001</p>
              </div>
            </div>
          </div>

          {/* Blur Orbs - Ẩn bớt trên mobile để mượt máy */}
          <div className="absolute -top-10 -right-10 h-40 md:h-80 w-40 md:w-80 bg-[var(--brand-primary)]/10 rounded-full -z-10 blur-[50px] md:blur-[80px]"></div>
        </div>
      </div>

      {/* Text chạy chìm khổng lồ - Ẩn trên Mobile để tránh lỗi layout */}
      <div className="absolute bottom-[-5%] left-[-2%] text-[10rem] lg:text-[20rem] font-black text-slate-50 pointer-events-none select-none italic tracking-tighter opacity-40 hidden md:block">
        TTB CORP
      </div>
    </section>
  )
}