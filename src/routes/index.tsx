import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { 
  CheckCircle2, Star, Zap, Download, Phone, Building2, Factory, 
  DraftingCompass, ShieldCheck, Mail, MapPin, QrCode, ArrowRight, 
  ArrowUpRight, Award, Info, Sparkles, Send 
} from "lucide-react"

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: "TTB CORP - Giải Pháp Kết Cấu Thế & PCCC Toàn Diện",
      },
      {
        name: "description",
        content: "TTB CORP cung cấp giải pháp trọn gói: Tư vấn, thiết kế, sản xuất và lắp dựng kết cấu thép chuyên nghiệp. Đối tác tin cậy cho mọi công trình công nghiệp.",
      },
    ],
  }),
  component: HomePage,
})

// Dữ liệu dịch vụ
const steelServices = [
  {
    title: "Tư vấn & Thiết kế",
    icon: <DraftingCompass size={24} />,
    desc: "Tính toán kết cấu tối ưu bằng phần mềm chuyên dụng (Tekla, SAP2000), đảm bảo an toàn và tiết kiệm 15% vật tư.",
    accent: "text-blue-600 bg-blue-50 dark:bg-blue-950/30"
  },
  {
    title: "Gia công Sản xuất",
    icon: <Factory size={24} />,
    desc: "Sản xuất cấu kiện thép tại xưởng tự động, kiểm soát chặt chẽ phôi thép đầu vào đạt chuẩn ISO 9001.",
    accent: "text-amber-600 bg-amber-50 dark:bg-amber-950/30"
  },
  {
    title: "Lắp dựng Trọn gói",
    icon: <Building2 size={24} />,
    desc: "Đội ngũ kỹ sư lành nghề lắp dựng tại công trường nhanh chóng, đảm bảo tuyệt đối an toàn lao động.",
    accent: "text-blue-800 bg-blue-50 dark:bg-blue-900/30"
  },
  {
    title: "Bảo trì & Nâng cấp",
    icon: <ShieldCheck size={24} />,
    desc: "Dịch vụ bảo dưỡng định kỳ và cải tạo nhà xưởng, giúp kéo dài tối đa tuổi thọ công trình.",
    accent: "text-slate-700 bg-slate-100 dark:bg-slate-800/30"
  },
]

// Dữ liệu dự án tiêu biểu
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
    img: '/showroom.jpg',
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

function HomePage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'about' | 'services' | 'projects' | 'why-us' | 'contact'>('overview')
  const [projectFilter, setProjectFilter] = useState('Tất cả')

  const categories = ['Tất cả', 'Nhà xưởng tiền chế', 'Kho bãi & Logistics', 'Showroom & Dân dụng', 'Gia công cấu kiện']

  const filteredProjects = projectFilter === 'Tất cả'
    ? projectData
    : projectData.filter(p => p.type === projectFilter)

  // Form liên hệ nhanh
  const [formSent, setFormSent] = useState(false)
  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSent(true)
    setTimeout(() => {
      alert("Cảm ơn quý khách! TTB CORP đã nhận thông tin tư vấn và sẽ liên hệ lại ngay trong 24 giờ.")
      setFormSent(false)
      const form = e.target as HTMLFormElement
      form.reset()
    }, 500)
  }

  return (
    <main className="flex flex-col lg:flex-row w-full min-h-[calc(100vh-64px)] lg:h-[calc(100vh-64px)] lg:overflow-hidden bg-slate-50 dark:bg-slate-950 font-sans">
      {/* 1. LEFT SIDEBAR: THƯƠNG HIỆU CỐ ĐỊNH */}
      <div className="w-full lg:w-[320px] xl:w-[360px] bg-gradient-to-br from-[var(--brand-primary)] to-slate-900 text-white p-6 lg:p-8 flex flex-col justify-between shrink-0 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 z-10">
        {/* Họa tiết nền trang trí chìm */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-[-10%] left-[-10%] text-[8rem] font-black text-white/5 italic select-none">TTB</div>
        </div>

        <div className="space-y-6 relative z-10">
          {/* Badge Chứng nhận */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[9px] font-black uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand-accent)]"></span>
            </span>
            Kết cấu thép & PCCC chuyên nghiệp
          </div>

          {/* Tiêu đề chính */}
          <div className="space-y-3">
            <p className="text-[10px] font-bold text-blue-300 uppercase tracking-[0.3em] leading-none">Công ty Cổ Phần Thành Công</p>
            <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight leading-[1.1] text-white">
              Vững nền tảng <br/>
              <span className="text-[var(--brand-accent)] italic">Sáng tương lai</span>
            </h1>
            <div className="w-16 h-1.5 bg-[var(--brand-accent)] rounded-full"></div>
          </div>

          {/* Mô tả ngắn */}
          <p className="text-xs text-slate-300 leading-relaxed font-medium">
            Hệ sinh thái hạ tầng công nghiệp trọn gói hàng đầu Việt Nam. TTB CORP cam kết mang lại giải pháp thiết kế sản xuất, thi công kết cấu thép tối ưu chi phí và thẩm duyệt PCCC an toàn, nhanh chóng.
          </p>
        </div>

        {/* Các nút tải hồ sơ, hotline và chứng nhận dưới cùng */}
        <div className="mt-8 lg:mt-auto pt-6 border-t border-white/10 space-y-4 relative z-10">
          <div className="flex flex-col gap-2.5">
            {/* Gọi điện nhanh */}
            <a
              href="tel:0792515151"
              className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-[var(--brand-primary)] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[var(--brand-accent)] text-slate-900 rounded-lg group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-colors">
                  <Phone size={14} />
                </div>
                <div className="text-left">
                  <p className="text-[8px] uppercase tracking-wider text-slate-400 font-bold">Tổng đài hỗ trợ 24/7</p>
                  <p className="text-xs font-black">0792.51.51.51</p>
                </div>
              </div>
              <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Tải hồ sơ năng lực */}
            <a
              href="/PROFILE TTB - Thanh Cong TTB Joint Stock Company.pdf"
              target="_blank"
              className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-[var(--brand-primary)] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 text-white rounded-lg group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-colors">
                  <Download size={14} />
                </div>
                <div className="text-left">
                  <p className="text-[8px] uppercase tracking-wider text-slate-400 font-bold">Hồ sơ năng lực</p>
                  <p className="text-xs font-black">Tải bản đầy đủ (PDF)</p>
                </div>
              </div>
              <ArrowRight size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Info ISO */}
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium">
            <span>Tiêu chuẩn ISO 9001:2015</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]"></span>
            <span>TTB CORP</span>
          </div>
        </div>
      </div>

      {/* 2. RIGHT PANEL: MÀN HÌNH TƯƠNG TÁC TABS */}
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-white dark:bg-slate-900">
        {/* TABS HEADER BAR - Thanh tab chuyển đổi nhanh (Cuộn ngang tốt trên mobile) */}
        <div className="flex items-center gap-1.5 p-3 md:p-4 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar shrink-0 scroll-smooth">
          {[
            { id: 'overview', label: 'Tổng quan', icon: <Sparkles size={16} /> },
            { id: 'about', label: 'Về TTB', icon: <Info size={16} /> },
            { id: 'services', label: 'Dịch vụ', icon: <Building2 size={16} /> },
            { id: 'projects', label: 'Dự án', icon: <Award size={16} /> },
            { id: 'why-us', label: 'Sự khác biệt', icon: <CheckCircle2 size={16} /> },
            { id: 'contact', label: 'Liên hệ & QR', icon: <Mail size={16} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all shrink-0 ${
                activeTab === tab.id
                  ? 'bg-[var(--brand-primary)] text-white shadow-md shadow-[var(--brand-primary)]/20 scale-105'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* CONTENT VIEWPORT: Khu vực hiển thị chi tiết (Tự cuộn dọc nếu nội dung vượt chiều cao trên màn hình nhỏ) */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 scroll-smooth">
          
          {/* TAB 1: TỔNG QUAN */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Thẻ Hero compact với Ảnh */}
              <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[21/9] flex items-end p-4 md:p-8 bg-slate-900 text-white group min-h-[160px]">
                <div className="absolute inset-0 z-0">
                  <img
                    src="/img-hero-steel.jpg"
                    alt="TTB Steel Structure"
                    className="w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-[2s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-lg space-y-1.5 text-left">
                  <span className="text-[9px] font-black uppercase bg-[var(--brand-accent)] text-slate-950 px-2 py-0.5 rounded tracking-widest inline-block">Năng lực cốt lõi</span>
                  <h3 className="text-base md:text-2xl font-black uppercase tracking-tight">Giải pháp kết cấu thép tối ưu</h3>
                  <p className="text-[10px] md:text-xs text-slate-200 line-clamp-2 md:line-clamp-none">
                    TTB CORP tự hào là nhà thầu thi công tin cậy của hàng trăm đối tác công nghiệp, cung cấp dây chuyền lắp dựng hiện đại giúp đẩy nhanh 20% tiến độ bàn giao công trình.
                  </p>
                </div>
              </div>

              {/* Lưới chỉ số Trust Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "An toàn lao động", value: "100%", sub: "Cam kết tuyệt đối", desc: "Đảm bảo không sự cố tại công trường", color: "text-blue-600" },
                  { label: "Đúng tiến độ", value: "98%", sub: "Bàn giao thần tốc", desc: "Quy trình lắp dựng tự động, chuẩn xác", color: "text-amber-600" },
                  { label: "Chất lượng", value: "ISO 9001", sub: "Tiêu chuẩn quốc tế", desc: "Kiểm định phôi thép đạt độ cứng cao", color: "text-emerald-600" },
                  { label: "Hỗ trợ kỹ thuật", value: "24/7", sub: "Hỗ trợ tận tâm", desc: "Tư vấn thiết kế 3D tối ưu mặt bằng", color: "text-purple-600" }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-2 text-left">
                    <div>
                      <span className="text-[8px] font-black uppercase tracking-widest text-slate-400 block">{item.label}</span>
                      <span className="text-2xl font-black tracking-tight text-[var(--brand-primary)] dark:text-blue-400 mt-1 block">{item.value}</span>
                    </div>
                    <div className="pt-2 border-t border-slate-50 dark:border-slate-700">
                      <p className="text-[10px] font-black text-slate-700 dark:text-slate-200 uppercase">{item.sub}</p>
                      <p className="text-[9px] text-slate-400 font-medium leading-tight mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick CTA Banner */}
              <div className="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-left">
                  <div className="p-2.5 bg-blue-100 dark:bg-blue-950/50 text-blue-600 rounded-xl shrink-0">
                    <Zap size={20} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-black uppercase text-slate-900 dark:text-white">Quý khách đang cần tư vấn thiết kế nhà xưởng?</h4>
                    <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400">Nhận ngay bản vẽ phác thảo sơ bộ 3D và bảng bóc tách vật tư tối ưu hoàn toàn miễn phí.</p>
                  </div>
                </div>
                <button 
                  onClick={() => setActiveTab('contact')} 
                  className="whitespace-nowrap px-4 py-2 bg-[var(--brand-primary)] text-white text-[10px] font-black uppercase tracking-wider rounded-xl shadow hover:-translate-y-0.5 active:translate-y-0 transition-transform"
                >
                  Yêu cầu báo giá ngay
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: VỀ CHÚNG TÔI */}
          {activeTab === 'about' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-2">
                    <Award className="text-[var(--brand-accent)]" size={20} />
                    <span className="text-xs font-black text-[var(--brand-primary)] dark:text-blue-400 uppercase tracking-widest">Hành trình khẳng định uy tín</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white uppercase leading-tight">
                    Đối tác tin cậy trong xây dựng hạ tầng công nghiệp
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                    Thành Công TTB CORP khẳng định vị thế qua hàng loạt dự án kết cấu thép quy mô tại các khu công nghiệp trọng điểm. Bằng việc ứng dụng phần mềm kỹ thuật tối tân và quy trình sản xuất tự động khép kín, chúng tôi giúp chủ đầu tư an tâm tối đa về chi phí lẫn chất lượng thép đầu ra.
                  </p>

                  {/* Chỉ số thống kê nhanh */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-center lg:text-left">
                    <div>
                      <p className="text-2xl md:text-3xl font-black text-[var(--brand-primary)] dark:text-blue-400">10+</p>
                      <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400">Năm kinh nghiệm</p>
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-black text-[var(--brand-primary)] dark:text-blue-400">500+</p>
                      <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400">Dự án bàn giao</p>
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-black text-[var(--brand-primary)] dark:text-blue-400">TOP 10</p>
                      <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400">Thương hiệu uy tín</p>
                    </div>
                  </div>
                </div>

                {/* Hình ảnh bên phải */}
                <div className="relative rounded-2xl overflow-hidden shadow-md aspect-video md:aspect-[4/3] max-h-[220px] lg:max-h-full">
                  <img
                    src="/img-factory.jpg"
                    alt="Nhà máy kết cấu thép TTB"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[var(--brand-primary)] text-white text-[8px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wider">
                    Nhà xưởng chuẩn ISO
                  </div>
                </div>
              </div>

              {/* Các điểm nhấn chất lượng */}
              <div className="grid md:grid-cols-2 gap-3 pt-4 border-t border-slate-50 dark:border-slate-800">
                {[
                  { title: "Sản xuất chuẩn ISO 9001:2015", desc: "Giám sát chặt chẽ mọi công đoạn từ thiết kế chi tiết đến chế tạo cấu kiện tại xưởng." },
                  { title: "Thi công lắp dựng an toàn", desc: "Cam kết 100% an toàn lao động bằng quy trình giám sát trực tiếp từ kỹ sư trưởng." },
                  { title: "Chế độ bảo hành kết cấu lâu dài", desc: "Hỗ trợ chủ đầu tư kiểm tra định kỳ và sửa chữa gia cố trọn vòng đời công trình." },
                  { title: "Trọn gói thủ tục nghiệm thu PCCC", desc: "Hỗ trợ nhanh chóng phần pháp lý nghiệm thu PCCC trước khi đưa dự án đi vào vận hành." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 p-3 bg-slate-50 dark:bg-slate-800/30 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                    <div className="text-left">
                      <h4 className="text-[11px] font-black text-slate-900 dark:text-white uppercase">{item.title}</h4>
                      <p className="text-[9px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: DỊCH VỤ */}
          {activeTab === 'services' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center md:text-left max-w-xl">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Hệ sinh thái dịch vụ trọn gói</h3>
                <p className="text-xs text-slate-400 mt-1">Giải pháp khép kín từ bóc tách bản vẽ kỹ thuật đến sản xuất và lắp dựng trực tiếp tại công trường.</p>
              </div>

              {/* Lưới các thẻ dịch vụ */}
              <div className="grid md:grid-cols-2 gap-4">
                {steelServices.map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 md:p-5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                    <div className={`p-2.5 rounded-xl shrink-0 self-start ${item.accent}`}>
                      {item.icon}
                    </div>
                    <div className="text-left space-y-1 z-10">
                      <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">{item.title}</h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">{item.desc}</p>
                    </div>
                    <div className="absolute top-0 right-0 w-8 h-1.5 bg-[var(--brand-accent)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>

              {/* Nổi bật dịch vụ PCCC */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm text-left">
                <div className="space-y-1">
                  <span className="bg-white/20 text-white px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider inline-block">Hạng mục thế mạnh</span>
                  <h4 className="text-sm font-black uppercase tracking-wide">Giải pháp phòng cháy chữa cháy (PCCC) toàn diện</h4>
                  <p className="text-[11px] text-red-100/90 leading-tight">Đội ngũ chuyên nghiệp hỗ trợ hoàn thiện hồ sơ nghiệm thu phòng cháy chữa cháy an toàn nhanh nhất.</p>
                </div>
                <a href="tel:0792515151" className="whitespace-nowrap px-4 py-2 bg-white text-red-600 text-xs font-black uppercase tracking-wider rounded-lg hover:bg-slate-100 transition-colors shadow">
                  Tư vấn PCCC ngay
                </a>
              </div>
            </div>
          )}

          {/* TAB 4: DỰ ÁN */}
          {activeTab === 'projects' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="text-left">
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Dự án tiêu biểu</h3>
                  <p className="text-xs text-slate-400">Khẳng định chất lượng qua từng công trình thực tế.</p>
                </div>
                
                {/* Lọc dự án dạng cuộn ngang trên mobile */}
                <div className="flex gap-1.5 overflow-x-auto no-scrollbar w-full md:w-auto pb-1.5 md:pb-0 shrink-0 scroll-smooth">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setProjectFilter(cat)}
                      className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all ${
                        projectFilter === cat
                          ? 'bg-[var(--brand-primary)] text-white shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-800 text-slate-500 hover:bg-slate-100 border border-slate-200/60 dark:border-slate-700'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Lưới hiển thị danh sách dự án với thanh cuộn dọc nội bộ gọn gàng */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-h-[380px] overflow-y-auto pr-1">
                {filteredProjects.map((item) => (
                  <div key={item.id} className="group border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-800 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-750">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-2 left-2 flex gap-1">
                        <span className="bg-slate-950/80 text-white text-[8px] font-black px-2 py-0.5 rounded uppercase tracking-wider backdrop-blur-sm">
                          {item.type}
                        </span>
                      </div>
                    </div>
                    <div className="p-3 text-left space-y-1.5">
                      <h4 className="text-xs font-black text-slate-900 dark:text-white line-clamp-1 group-hover:text-[var(--brand-primary)] transition-colors uppercase tracking-tight">{item.name}</h4>
                      <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold border-t border-slate-50 dark:border-slate-700 pt-2">
                        <span className="flex items-center gap-1">
                          <MapPin size={10} className="text-slate-400 shrink-0" />
                          <span className="line-clamp-1">{item.location}</span>
                        </span>
                        <span className="text-[var(--brand-accent)] shrink-0 font-black">{item.size}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: SỰ KHÁC BIỆT */}
          {activeTab === 'why-us' && (
            <div className="space-y-6 animate-in fade-in duration-300 text-left">
              <div className="max-w-xl">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Sự khác biệt từ Thành Công Group</h3>
                <p className="text-xs text-slate-400">Các thế mạnh cốt lõi tạo nên lòng tin vững bền với mọi đối tác.</p>
              </div>

              {/* Lưới 3 cột thế mạnh */}
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { t: "Kỹ thuật tối ưu", d: "Tính toán kết cấu chuẩn xác giúp tiết kiệm đến 15% khối lượng vật liệu thép mà vẫn đảm bảo tải trọng an toàn tuyệt đối." },
                  { t: "Xưởng cơ khí hiện đại", d: "Sử dụng dây chuyền cắt CNC, hàn tự động đảm bảo mối nối kết cấu thép đồng đều, chất lượng cao nhất." },
                  { t: "Hỗ trợ pháp lý PCCC", d: "Am hiểu các quy chuẩn nghiệm thu của cơ quan PCCC, hỗ trợ cấp giấy phép hoạt động nhanh chóng cho chủ đầu tư." }
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 rounded-xl flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <div className="w-7 h-7 rounded-lg bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] dark:text-blue-400 flex items-center justify-center font-black text-xs">
                        0{i + 1}
                      </div>
                      <h4 className="font-black text-slate-900 dark:text-white uppercase text-xs tracking-tight">{item.t}</h4>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">{item.d}</p>
                    </div>
                    <CheckCircle2 className="text-blue-600 dark:text-blue-400 mt-2" size={14} />
                  </div>
                ))}
              </div>

              {/* Lời chứng thực khách hàng */}
              <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm relative overflow-hidden">
                <div className="flex gap-0.5 text-[var(--brand-accent)] mb-2">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={10} />)}
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 italic font-semibold leading-relaxed">
                  "Chúng tôi hoàn toàn yên tâm khi bàn giao gói thầu kết cấu thép cho Thành Công Group. Tiến độ lắp dựng thực tế nhanh hơn 10 ngày so với cam kết ban đầu, kỹ thuật bóc tách bản vẽ rất chuyên nghiệp."
                </p>
                <div className="mt-3 flex items-center justify-between text-[9px] text-slate-400 font-black border-t border-slate-50 dark:border-slate-700 pt-2">
                  <span className="uppercase text-slate-800 dark:text-white">Chị Linh - Giám đốc dự án Viettel Group</span>
                  <span className="uppercase text-blue-600 tracking-wider">Đánh giá thực tế</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: LIÊN HỆ & QR */}
          {activeTab === 'contact' && (
            <div className="space-y-6 animate-in fade-in duration-300 text-left">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Form tư vấn nhanh */}
                <div className="bg-slate-50 dark:bg-slate-800/30 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-4">
                  <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Gửi yêu cầu tư vấn nhanh</h4>
                  
                  <form onSubmit={handleQuickSubmit} className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-[var(--brand-primary)] dark:text-blue-400 tracking-wider">Họ và tên *</label>
                      <input
                        required
                        type="text"
                        placeholder="Ví dụ: Nguyễn Văn A"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-[var(--brand-primary)]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-[var(--brand-primary)] dark:text-blue-400 tracking-wider">Số điện thoại *</label>
                      <input
                        required
                        type="tel"
                        placeholder="Ví dụ: 0908xxxxxx"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-[var(--brand-primary)]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-[var(--brand-primary)] dark:text-blue-400 tracking-wider">Nội dung yêu cầu</label>
                      <textarea
                        rows={2}
                        placeholder="Mô tả ngắn dự án của quý khách (ví dụ: cần xây nhà xưởng tiền chế 3.000m2)..."
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-[var(--brand-primary)] resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={formSent}
                      className="w-full py-2 bg-[var(--brand-primary)] text-white text-xs font-black uppercase tracking-wider rounded-lg shadow hover:bg-[var(--brand-primary)]/90 transition-all flex items-center justify-center gap-2"
                    >
                      <span>{formSent ? 'Đang gửi...' : 'Gửi thông tin tư vấn'}</span>
                      <Send size={12} />
                    </button>
                  </form>
                </div>

                {/* Liên hệ văn phòng và Zalo QR */}
                <div className="space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">Thông tin văn phòng đại diện</h4>
                    <ul className="space-y-2.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
                      <li className="flex items-start gap-2.5">
                        <MapPin size={14} className="text-blue-600 shrink-0 mt-0.5" />
                        <span>166/12 Huỳnh Văn Nghệ, P. Tân Sơn, Q. Gò Vấp, TP. HCM</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Mail size={14} className="text-blue-600 shrink-0" />
                        <span>info@ttbcorp.vn</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Phone size={14} className="text-blue-600 shrink-0" />
                        <span>028.665.666.64</span>
                      </li>
                    </ul>
                  </div>

                  {/* Mã QR Zalo */}
                  <div className="flex gap-4 p-3 bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-slate-800 items-center justify-around">
                    <div className="flex flex-col items-center gap-1 group">
                      <div className="p-1 bg-white rounded-lg shadow-sm border border-slate-100 group-hover:scale-105 transition-transform">
                        <img src="/QR-TTB-Corp.png" alt="Zalo TTB" className="w-14 h-14 object-contain" />
                      </div>
                      <span className="text-[8px] font-black uppercase text-slate-400 mt-0.5">Zalo OA Công ty</span>
                    </div>
                    <div className="w-[1px] h-12 bg-slate-200 dark:bg-slate-700"></div>
                    <div className="flex flex-col items-center gap-1 group">
                      <div className="p-1 bg-white rounded-lg shadow-sm border border-slate-100 group-hover:scale-105 transition-transform">
                        <img src="/tuan.jpg" alt="Zalo Tuấn" className="w-14 h-14 object-contain" />
                      </div>
                      <span className="text-[8px] font-black uppercase text-slate-400 mt-0.5">Zalo Lãnh đạo (24/7)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}