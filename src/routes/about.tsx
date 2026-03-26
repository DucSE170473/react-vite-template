import { createFileRoute } from '@tanstack/react-router'
import AboutHero from '../components/AboutHero'
import About from '../components/About'
import Timeline from '../components/Timeline'

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "Về Chúng Tôi - TTB CORP | Hành Trình Khẳng Định Uy Tín",
      },
      {
        name: "description",
        content: "Tìm hiểu về TTB CORP - Lịch sử hình thành, đội ngũ chuyên gia và những giá trị cốt lõi giúp chúng tôi dẫn đầu trong ngành kết cấu thép tại Việt Nam.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <div className="-mt-12 relative z-20">
        <About />
      </div>
      <Timeline />
    </main>
  )
}
