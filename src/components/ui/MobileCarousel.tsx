import { useRef, useState } from 'react'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode[]
  /** Tailwind-ширина слайда, по умолчанию 82% — боковые карточки выглядывают по краям */
  itemClassName?: string
  /** Смещение стрелок по вертикали (top в %), по умолчанию центр */
  arrowsTop?: string
  /** Показывать полосу прогресса под каруселью */
  progress?: boolean
  className?: string
}

// Мобильная карусель со scroll-snap: стрелки по краям + полоса прогресса (как в мобильном макете)
// Геометрия из макета (375px): карточка 295px, отступ контейнера 40px, зазор 15px
export default function MobileCarousel({ children, itemClassName = 'w-full', arrowsTop = '50%', progress = true, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [p, setP] = useState(0)

  const scroll = (dir: number) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.82, behavior: 'smooth' })
  }

  return (
    <div className={className}>
      <div className="relative">
        <div
          ref={ref}
          onScroll={(e) => {
            const el = e.currentTarget
            const max = el.scrollWidth - el.clientWidth
            setP(max > 0 ? el.scrollLeft / max : 0)
          }}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none px-10"
        >
          {children.map((c, i) => (
            <div key={i} className={`snap-center flex-shrink-0 ${itemClassName}`}>
              {c}
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll(-1)}
          aria-label="Назад"
          className="absolute left-2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#00b5e2] text-white flex items-center justify-center shadow-lg z-10"
          style={{ top: arrowsTop }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => scroll(1)}
          aria-label="Вперёд"
          className="absolute right-2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#00b5e2] text-white flex items-center justify-center shadow-lg z-10"
          style={{ top: arrowsTop }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {progress && (
        <div className="relative h-[3px] bg-gray-200 rounded-full mx-10 mt-4 overflow-hidden">
          <div
            className="absolute top-0 h-full w-1/4 rounded-full bg-[#00b5e2] transition-[left] duration-150"
            style={{ left: `${p * 75}%` }}
          />
        </div>
      )}
    </div>
  )
}
