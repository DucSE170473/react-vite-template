import { useEffect } from 'react'
import {
  createRootRoute,
  Outlet,
  useLocation,
} from '@tanstack/react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TTB CORP - Công ty CP Thành Công | Kết cấu thép & PCCC',
      },
      {
        name: 'description',
        content: 'TTB CORP - Đơn vị hàng đầu về giải pháp kết cấu thép, nhà xưởng tiền chế và hệ thống PCCC chuyên nghiệp tại Việt Nam.',
      },
    ],
  }),
  component: RootLayout,
})

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}