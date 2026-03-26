import { useEffect, useRef } from 'react'

/**
 * useReveal - Hook kích hoạt hoạt ảnh scroll-reveal
 * 
 * Cách dùng:
 *   const ref = useReveal()
 *   <div ref={ref} className="reveal">...</div>
 * 
 * Hỗ trợ class: reveal | reveal-left | reveal-right
 */
export function useReveal<T extends HTMLElement = HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

/**
 * useRevealAll - Hook kích hoạt tất cả các phần tử con trong một container
 * 
 * Cách dùng:
 *   const ref = useRevealAll()
 *   <ul ref={ref} className="reveal-stagger">
 *     <li className="reveal">...</li>
 *     <li className="reveal">...</li>
 *   </ul>
 */
export function useRevealAll<T extends HTMLElement = HTMLElement>(threshold = 0.1) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const targets = container.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
