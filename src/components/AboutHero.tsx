import { ChevronRight } from "lucide-react"
import { Link } from "@tanstack/react-router"

export default function AboutHero() {
  const backgroundImage = "/steel-1.jpg"

  return (
    <section className="relative py-24 md:py-40 bg-[var(--brand-primary)] overflow-hidden">
      {/* 1. Lớp Nền (Background Layer) */}
      <div className="absolute inset-0">
        {/* Ảnh nền */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
          }}
          aria-hidden="true"
        />

        {/* Lớp phủ màu (Overlay) - Giúp chữ trắng nổi bật trên nền ảnh */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-primary)]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div> {/* Thêm một chút độ tối nếu ảnh quá sáng */}
      </div>

      {/* 2. Nội dung (Content Layer) */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">

          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-blue-100/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
            <Link
              to="/"
              className="hover:text-[var(--brand-accent)] transition-colors duration-300"
            >
              Trang chủ
            </Link>
            <ChevronRight size={14} className="opacity-50" />
            <span className="text-white">Giới thiệu</span>
          </nav>

          {/* Tiêu đề chính */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] uppercase tracking-tighter">
              Về chúng tôi <br />
              <span className="text-[var(--brand-accent)] italic">TTB CORP</span>
            </h1>

            {/* Thanh gạch chân trang trí (tùy chọn) */}
            <div className="w-24 h-1.5 bg-[var(--brand-accent)] mx-auto mt-4"></div>
          </div>

          {/* Đoạn giới thiệu ngắn */}
          <p className="max-w-2xl text-blue-50/80 text-base md:text-xl font-medium leading-relaxed drop-shadow-sm">
            Hơn một thập kỷ kiến tạo những giá trị vững chắc, chúng tôi tự hào là đối tác tin cậy
            trong lĩnh vực kết cấu thép và hạ tầng công nghiệp tại Việt Nam.
          </p>
        </div>
      </div>

      {/* 3. Hiệu ứng chuyển vùng ở đáy (Decorative element) */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent opacity-100"></div>
    </section>
  )
}