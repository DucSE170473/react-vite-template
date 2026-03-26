import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import { Projects } from '../components/Projects'
import CTA from '../components/CTA'
import { CheckCircle2, Star } from "lucide-react"

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: "TTB CORP - Giải Pháp Kết Cấu Thép & PCCC Toàn Diện",
      },
      {
        name: "description",
        content: "TTB CORP cung cấp giải pháp trọn gói: Tư vấn, thiết kế, sản xuất và lắp dựng kết cấu thép chuyên nghiệp. Đối tác tin cậy cho mọi công trình công nghiệp.",
      },
    ],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <main className="flex flex-col w-full overflow-hidden bg-white">
      {/* 1. HERO SECTION */}
      <div className="rise-in">
        <Hero />
      </div>

      {/* 2. TRUST BAR: Nâng cấp sang trọng hơn */}
      <section className="bg-[var(--brand-primary)] py-10 md:py-16 text-white relative overflow-hidden">
        {/* Họa tiết trang trí chìm */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "An toàn lao động", value: "100%", sub: "Cam kết tuyệt đối" },
              { label: "Đúng tiến độ", value: "98%", sub: "Bàn giao thần tốc" },
              { label: "Chất lượng", value: "ISO 9001", sub: "Tiêu chuẩn quốc tế" },
              { label: "Hỗ trợ khách hàng", value: "24/7", sub: "Tận tâm 24/7" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-2 rise-in" style={{ animationDelay: `${i * 100}ms` }}>
                <p className="text-3xl md:text-5xl font-black text-[var(--brand-accent)] tracking-tighter">{item.value}</p>
                <div className="space-y-1">
                  <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">{item.label}</p>
                  <p className="text-[8px] md:text-[9px] font-bold text-white/40 uppercase tracking-widest leading-none">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <div className="rise-in" style={{ animationDelay: '400ms' }}>
        <About />
      </div>

      {/* 4. SERVICES */}
      <div className="bg-slate-50 border-y border-slate-100 rise-in" style={{ animationDelay: '500ms' }}>
        <Services />
      </div>

      {/* 5. WHY CHOOSE US: Tinh chỉnh Spacing */}
      <section className="py-20 md:py-32 bg-white rise-in" style={{ animationDelay: '600ms' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative group">
            {/* Background Accent */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[var(--brand-primary)]/5 rounded-full -z-10 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[var(--brand-accent)]/5 rounded-full -z-10 animate-pulse delay-700"></div>
            
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-b-[12px] border-[var(--brand-primary)] group-hover:scale-105 transition-transform duration-1000">
              <img
                src="/steel-6.jpg"
                alt="Quality Construction"
                loading="lazy"
                className="w-full h-full object-cover aspect-[4/3] md:aspect-square"
              />
            </div>
          </div>

          <div className="space-y-8 md:space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-[2px] bg-[var(--brand-primary)]"></div>
                <span className="text-[var(--brand-primary)] font-black uppercase tracking-[0.3em] text-[10px]">Tại sao chọn chúng tôi</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-[0.9] uppercase tracking-tighter">
                Sự khác biệt từ <span className="text-[var(--brand-primary)] italic">Thành Công Group</span>
              </h2>
            </div>

            <div className="space-y-6 md:space-y-8">
              {[
                { t: "Kỹ thuật tối ưu", d: "Sử dụng phần mềm tiên tiến nhất để bóc tách khối lượng, tiết kiệm 15% vật tư cho chủ đầu tư." },
                { t: "Nhà xưởng hiện đại", d: "Dây chuyền sản xuất tự động đảm bảo độ chính xác tuyệt đối từng chi tiết cấu kiện thép." },
                { t: "Pháp lý hoàn thiện", d: "Hỗ trợ trọn gói thủ tục thẩm duyệt PCCC và xin cấp phép xây dựng nhanh chóng." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group hover:translate-x-2 transition-transform duration-300">
                  <div className="mt-1 shrink-0 bg-slate-50 border border-slate-100 p-3 rounded-2xl text-[var(--brand-primary)] group-hover:bg-[var(--brand-primary)] group-hover:text-white group-hover:shadow-lg transition-all duration-300">
                    <CheckCircle2 size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-black text-slate-900 text-lg md:text-xl uppercase tracking-tight">{item.t}</h4>
                    <p className="text-sm md:text-base text-slate-500 leading-relaxed font-semibold opacity-80">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROJECTS */}
      <div className="border-t border-slate-100 bg-slate-50/50 rise-in" style={{ animationDelay: '700ms' }}>
        <Projects />
      </div>

      {/* 7. TESTIMONIALS */}
      <section className="py-20 md:py-32 bg-[var(--brand-primary)] text-white relative overflow-hidden rise-in" style={{ animationDelay: '800ms' }}>
        {/* Decorative mask */}
        <div className="absolute inset-0 opacity-10 blur-3xl pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="flex justify-center gap-2 mb-12 text-[var(--brand-accent)]">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={28} className="drop-shadow-lg" />)}
          </div>
          <p className="text-2xl md:text-4xl font-black italic text-white leading-tight tracking-tight drop-shadow-md">
            "Chúng tôi hoàn toàn yên tâm khi bàn giao gói thầu kết cấu thép cho Thành Công Group. Tiến độ nhanh, kỹ thuật chuẩn và thái độ làm việc rất chuyên nghiệp."
          </p>
          <div className="mt-12 md:mt-16 flex flex-col items-center">
            <div className="w-16 h-1.5 bg-[var(--brand-accent)] mb-8 rounded-full shadow-lg"></div>
            <p className="font-black text-white uppercase tracking-[0.3em] text-xl">Chị Linh</p>
            <p className="text-[10px] md:text-xs font-bold text-blue-200/50 uppercase tracking-[0.4em] mt-3">Giám đốc dự án - Viettel Group</p>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <div className="rise-in" style={{ animationDelay: '900ms' }}>
        <CTA />
      </div>
    </main>
  )
}