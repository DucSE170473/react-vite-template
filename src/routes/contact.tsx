import { createFileRoute } from '@tanstack/react-router'
import Contact from '../components/Contact' // Đảm bảo đường dẫn này đúng với vị trí file của bạn

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Liên Hệ Tư Vấn - TTB CORP | Phản Hồi Trong 24h",
      },
      {
        name: "description",
        content: "Gửi yêu cầu hoặc gọi ngay Hotline 0792.51.51.51 để được TTB CORP tư vấn giải pháp kết cấu thép và báo giá thi công trọn gói.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  // Kết nối component Contact vào đây
  return <Contact />
}