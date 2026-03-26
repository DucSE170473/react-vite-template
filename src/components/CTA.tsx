import { ArrowRight, Phone } from "lucide-react"
import { useState } from "react"
import { Link } from "@tanstack/react-router"

export default function CTA() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="py-12 md:py-24 bg-slate-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-[var(--brand-primary)] shadow-2xl group transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(30,58,138,0.4)]">

          {/* Lớp ảnh nền thực tế & Xử lý lỗi ảnh */}
          <div className="absolute inset-0 z-0">
            {!imgError ? (
              <img
                src="/steel-cta-bg.jpg"
                alt="TTB Corp Industrial Project"
                loading="lazy"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover opacity-30 mix-blend-overlay scale-105 group-hover:scale-110 transition-transform duration-[2000ms] blur-[0.3px] group-hover:blur-0"
              />
            ) : (
              // Fallback khi ảnh lỗi: Gradient nghệ thuật theo tone màu thương hiệu
              <div className="w-full h-full bg-gradient-to-br from-[var(--brand-primary)] via-[var(--brand-secondary)] to-[var(--brand-primary-hover)] opacity-50" />
            )}

            {/* Lớp phủ Gradient thông minh */}
            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-primary)]/90 md:via-[var(--brand-primary)]/70 to-transparent"></div>
          </div>

          <div className="relative z-10 px-6 py-12 md:px-20 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12">

            {/* Khối Tiêu đề & Nội dung */}
            <div className="max-w-2xl text-center lg:text-left space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-accent)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand-accent)]"></span>
                </span>
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white">
                  Tư vấn khảo sát miễn phí 24/7
                </span>
              </div>

              <h2 className="text-3xl md:text-6xl font-black leading-[1.1] md:leading-[0.9] text-white uppercase tracking-tighter">
                <span className="block text-lg md:text-3xl font-light tracking-[0.1em] md:tracking-[0.2em] text-blue-200 mb-2 md:mb-4 opacity-80">
                  Bắt đầu ngay
                </span>
                Dự án công nghiệp <br className="hidden md:block" />
                <span className="text-[var(--brand-accent)] drop-shadow-2xl">của bạn hôm nay</span>
              </h2>

              <p className="text-blue-50 text-base md:text-lg font-medium max-w-xl opacity-90 leading-relaxed italic border-l-4 border-[var(--brand-accent)] pl-4 md:pl-6 mx-auto lg:mx-0 w-fit text-left">
                "TTB CORP cam kết mang lại giải pháp kết cấu thép tối ưu về chi phí và bền bỉ cùng thời gian."
              </p>
            </div>

            {/* Khối Nút hành động */}
            <div className="flex flex-col w-full sm:w-auto gap-4 shrink-0 relative z-20">
              {/* Nút Gọi ngay */}
              <a
                href="tel:0792515151"
                className="group/btn bg-white text-[var(--brand-primary)] px-8 md:px-10 py-5 md:py-6 rounded-2xl font-black flex items-center justify-center gap-4 hover:bg-[var(--brand-accent)] hover:text-white transition-all duration-300 shadow-xl hover:-translate-y-1 uppercase text-sm"
              >
                <div className="bg-[var(--brand-primary)] group-hover/btn:bg-white p-2 rounded-full transition-colors animate-pulse group-hover/btn:animate-none">
                  <Phone size={18} className="text-white group-hover/btn:text-[var(--brand-accent)] transition-colors" />
                </div>
                0792.51.51.51
              </a>

              {/* Nút Chuyển trang Contact */}
              <Link
                to="/contact"
                className="group/btn2 bg-transparent text-white border-2 border-white/30 px-8 md:px-10 py-5 md:py-6 rounded-2xl font-black flex items-center justify-center gap-4 hover:bg-white/10 hover:border-white transition-all duration-300 uppercase text-sm overflow-hidden relative"
              >
                <span className="relative z-10">Gửi yêu cầu thiết kế</span>
                <ArrowRight size={20} className="relative z-10 group-hover/btn2:translate-x-2 transition-transform text-[var(--brand-accent)]" />
              </Link>
            </div>

          </div>

          {/* Họa tiết TTB Branding chìm */}
          <div className="absolute bottom-[-10%] right-[-2%] text-[10rem] md:text-[18rem] font-black text-white/5 pointer-events-none select-none italic tracking-tighter leading-none hidden md:block">
            TTB
          </div>
        </div>
      </div>
    </section>
  )
}