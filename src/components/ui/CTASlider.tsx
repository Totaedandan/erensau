import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoMark from '@/assets/images/logo-mark.png'
import heroSurgeon from '@/assets/images/hero-surgeon.png'

const TOTAL_DOTS = 7

// Универсальный CTA-слайдер «Многопрофильная клиника»: фото слева, текст справа, стрелки + точки.
export default function CTASlider() {
  const [active, setActive] = useState(0)
  const prev = () => setActive((i) => (i - 1 + TOTAL_DOTS) % TOTAL_DOTS)
  const next = () => setActive((i) => (i + 1) % TOTAL_DOTS)

  return (
    <section className="bg-[#f4f4f4] pt-10 pb-10 lg:py-24">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-16 items-center">

          {/* Мобильный заголовок — над фото (в десктопе заголовок в правой колонке) */}
          <div className="flex items-start gap-3 lg:hidden">
            <img src={logoMark} alt="" className="h-12 w-auto flex-shrink-0" />
            <h2 className="text-[28px] font-bold text-gray-900 leading-[1.15]">
              Многопрофильная<br />клиника
            </h2>
          </div>

          {/* Фото слева + стрелки */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[9/8] lg:aspect-[16/9] bg-[#0a1628]">
              <img src={heroSurgeon} alt="" className="w-full h-full object-cover" />
            </div>
            <button
              onClick={prev}
              aria-label="Назад"
              className="absolute left-3 lg:left-0 lg:-translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#00b5e2] text-white flex items-center justify-center hover:bg-[#0099c4] transition-colors shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Вперёд"
              className="absolute right-3 lg:right-0 lg:translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#00b5e2] text-white flex items-center justify-center hover:bg-[#0099c4] transition-colors shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Точки-пагинация */}
            <div className="flex items-center justify-center gap-2 mt-2.5 lg:mt-5">
              {Array.from({ length: TOTAL_DOTS }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Слайд ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${i === active ? 'bg-[#00b5e2]' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>

          {/* Текст справа (на мобилке — абзац после точек, без кнопки) */}
          <div>
            <div className="hidden lg:flex items-center gap-4 mb-5">
              <img src={logoMark} alt="" className="h-[78px] w-auto flex-shrink-0" />
              <h2 className="text-3xl lg:text-[36px] font-bold text-gray-900 leading-[1.1]">
                Многопрофильная<br />клиника
              </h2>
            </div>
            <p className="text-gray-800 text-[13px] lg:text-base leading-relaxed lg:mb-8 max-w-md">
              Мы сосредоточены на мультидисциплинарном подходе, объединяя как оперативные,
              так и консервативные методы лечения. Нам доверяют случаи, которые нередко
              отличаются редкостью, тяжестью течения и клинической уникальностью.
            </p>
            <Link to="/contacts" className="hidden lg:inline-block bg-[#00b5e2] text-white text-base font-medium rounded-full px-10 py-4 hover:bg-[#0099c4] transition-colors">
              Записаться
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
