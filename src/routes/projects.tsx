import { createFileRoute } from '@tanstack/react-router'
import { Projects } from '../components/Projects'
import PageHeader from '../components/PageHeader'

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      {
        title: "Dự Án Tiêu Biểu - TTB CORP | Công Trình Chất Lượng Cao",
      },
      {
        name: "description",
        content: "Khám phá danh mục các dự án kết cấu thép và nhà xưởng tiêu biểu đã thực hiện bởi TTB CORP. Khẳng định chất lượng qua từng công trình thực tế.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageHeader
        title="Dự Án Tiêu Biểu"
        subtitle="Khám phá những công trình kết cấu thép hiện đại và quy mô được thực hiện bởi TTB CORP trên khắp cả nước."
        breadcrumb="Dự án"
        bgImage="/img-logistics.jpg"
      />
      <div className="-mt-16 relative z-20">
        <Projects />
      </div>
    </main>
  )
}