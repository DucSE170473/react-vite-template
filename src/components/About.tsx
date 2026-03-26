import { CheckCircle2, Award } from 'lucide-react'

export default function About() {
  return (
    <section className="py-12 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Họa tiết chìm - Ẩn trên mobile để tránh rối mắt */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--brand-primary)]/5 -skew-x-12 translate-x-1/2 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 md:gap-20 items-center relative">

        {/* Khối Hình ảnh (Bên trái) - Tối ưu Layout Mobile */}
        <div className="relative order-2 lg:order-1 px-4 md:px-0">
          {/* Ảnh 1: Nhà máy */}
          <div className="relative z-10 w-full md:w-4/5 aspect-[4/3] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 md:border-8 border-white">
            <img
              src="/img-factory.jpg"
              alt="Nhà máy kết cấu thép TTB"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Ảnh 2: Công trình - Chỉnh lại vị trí để không bị lấp mất trên mobile */}
          <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-4 z-20 w-1/2 md:w-3/5 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 md:border-8 border-white">
            <img
              src="/img-project-site.jpg"
              alt="Dự án thực tế TTB CORP"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Badge TOP 10 - Điều chỉnh size cho Mobile */}
          <div className="absolute -top-6 -left-2 md:top-10 md:-left-10 z-30 bg-[var(--brand-primary)] text-white p-3 md:p-6 rounded-xl md:rounded-2xl shadow-xl animate-bounce-slow">
            <Award size={24} className="text-[var(--brand-accent)] mb-1 md:mb-2 md:size-8" />
            <p className="text-lg md:text-2xl font-black leading-none">TOP 10</p>
            <p className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest opacity-70 mt-1">Uy tín</p>
          </div>
        </div>

        {/* Nội dung (Bên phải) - Tối ưu Typography */}
        <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
          <div className="space-y-4 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-8 md:w-10 h-[2px] bg-[var(--brand-primary)]"></div>
              <span className="text-[var(--brand-primary)] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px]">
                Hành trình vươn tầm
              </span>
            </div>

            <h2 className="text-3xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter">
              Uy tín khẳng định qua <br />
              <span className="text-[var(--brand-primary)] italic">chất lượng công trình</span>
            </h2>

            <p className="text-[var(--brand-primary)] text-lg md:text-xl font-black border-l-4 border-[var(--brand-accent)] pl-4 mx-auto lg:mx-0 w-fit">
              Thành Công TTB CORP
            </p>

            <p className="text-slate-600 leading-relaxed text-base md:text-lg">
              Xây dựng khung thép vững chãi và <strong>niềm tin tuyệt đối</strong> cho đối tác thông qua giải pháp tối ưu công năng.
            </p>
          </div>

          {/* Icon List - Chuyển sang 1 cột trên mobile */}
          <div className="grid gap-4 md:gap-6">
            {[
              { title: 'Sản xuất chuẩn ISO', desc: 'Kiểm soát chặt chẽ phôi thép đầu vào.' },
              { title: 'Tiến độ thần tốc', desc: 'Cam kết bàn giao đúng hạn.' }
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all group">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white shadow-md flex items-center justify-center text-[var(--brand-primary)] group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-all">
                  <CheckCircle2 size={24} />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-slate-900 text-sm md:text-base">{item.title}</h4>
                  <p className="text-xs md:text-sm text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Kinh nghiệm - Cân đối lại trên Mobile */}
          <div className="pt-6 border-t border-slate-200 flex justify-around lg:justify-start gap-8 md:gap-12">
            <div className="text-center lg:text-left">
              <p className="text-3xl md:text-4xl font-black text-[var(--brand-primary)]">10+</p>
              <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400">Kinh nghiệm</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-3xl md:text-4xl font-black text-[var(--brand-primary)]">500+</p>
              <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400">Dự án thép</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}