import { useState } from 'react'

const projectData = [
  {
    id: 1,
    name: 'Nhà Máy Sản Xuất Linh Kiện TTB-01',
    type: 'Nhà xưởng tiền chế',
    location: 'KCN Sóng Thần, Bình Dương',
    img: '/img-factory.jpg',
    size: '5.000m2'
  },
  {
    id: 2,
    name: 'Trung Tâm Logistics & Kho Vận Thông Minh',
    type: 'Kho bãi & Logistics',
    location: 'Bến Lức, Long An',
    img: '/img-logistics.jpg',
    size: '12.000m2'
  },
  {
    id: 3,
    name: 'Showroom Ô Tô & Trưng Bày Hệ Thép',
    type: 'Showroom & Dân dụng',
    location: 'Quận 7, TP. HCM',
    img: '/img-showroom.jpg',
    size: '3.000m2'
  },
  {
    id: 4,
    name: 'Tổ Hợp Nhà Xưởng Cho Thuê TTB-Central',
    type: 'Nhà xưởng tiền chế',
    location: 'KCN VSIP II, Bình Dương',
    img: '/img-workshop.jpg',
    size: '8.500m2'
  },
  {
    id: 5,
    name: 'Cầu Trục & Kết Cấu Thép Hạng Nặng',
    type: 'Gia công cấu kiện',
    location: 'Nhà máy TTB CORP, TP. HCM',
    img: '/img-crane.jpg',
    size: 'Theo thiết kế'
  },
  {
    id: 6,
    name: 'Mái Che Sân Vận Động Nhịp Lớn',
    type: 'Showroom & Dân dụng',
    location: 'TP. Thủ Đức, TP. HCM',
    img: '/img-stadium.jpg',
    size: '4.200m2'
  },
]

export function Projects() {
  const [filter, setFilter] = useState('Tất cả')

  const categories = ['Tất cả', 'Nhà xưởng tiền chế', 'Kho bãi & Logistics', 'Showroom & Dân dụng', 'Gia công cấu kiện']

  const filtered = filter === 'Tất cả'
    ? projectData
    : projectData.filter(p => p.type === filter)

  return (
    <div className="bg-slate-50 py-12 md:py-24 transition-colors duration-500">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        {/* Header của Section - Tối ưu Flex-col cho mobile */}
        <div className="mb-10 md:mb-16 flex flex-col items-start justify-between gap-6 md:gap-8 border-l-4 border-[var(--brand-primary)] pl-4 md:pl-6 md:flex-row md:items-end">
          <div className="space-y-1 md:space-y-2">
            <span className="text-[var(--brand-primary)] font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">Hồ sơ năng lực</span>
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-black leading-tight md:leading-[0.85] tracking-tighter uppercase text-slate-900">
              <span className="block text-lg md:text-2xl lg:text-3xl font-light tracking-[0.2em] text-slate-400 mb-1">
                Dự án tiêu biểu
              </span>
              Khẳng định <br className="hidden md:block" /> vị thế
            </h2>
          </div>

          {/* Tab chọn nhanh (Filter) - Tối ưu thanh cuộn ngang trên Mobile */}
          <div className="flex w-full overflow-x-auto pb-4 no-scrollbar md:w-auto md:flex-wrap md:pb-0 gap-2 scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-[10px] md:text-xs font-black uppercase tracking-widest transition-all duration-300 shrink-0 ${
                  filter === cat
                  ? 'bg-[var(--brand-primary)] text-white shadow-lg shadow-[var(--brand-primary)]/30 scale-105'
                  : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200 hover:border-[var(--brand-primary)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Lưới dự án (Grid) - Tối ưu Gap và Border Radius */}
        <div className="grid gap-6 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-slate-100"
            >
              {/* Vùng ảnh với Aspect Ratio ổn định */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 pr-4">
                  <span className="rounded-lg bg-[var(--brand-primary)]/90 px-3 py-1.5 text-[9px] font-black uppercase text-white backdrop-blur-md shadow-sm">
                    {item.type}
                  </span>
                  <span className="rounded-lg bg-[var(--brand-accent)] px-3 py-1.5 text-[9px] font-black uppercase text-slate-900 shadow-sm">
                    {item.size}
                  </span>
                </div>
              </div>

              {/* Vùng nội dung - Tối ưu Padding cho Mobile */}
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-black text-slate-900 group-hover:text-[var(--brand-primary)] transition-colors leading-tight line-clamp-2 uppercase tracking-tight">
                  {item.name}
                </h3>

                <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center text-xs font-bold text-slate-500">
                    <div className="mr-3 p-2 bg-[var(--brand-primary)]/5 rounded-xl text-[var(--brand-primary)] shrink-0">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                    </div>
                    <span className="line-clamp-1">{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}