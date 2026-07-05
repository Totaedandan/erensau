import { Link } from 'react-router-dom'
import heroLab from '@/assets/images/underconstruction-hero.png'
import heroFade from '@/assets/images/underconstruction-fade.png'
import logoMark from '@/assets/images/logo-mark.png'
import CTASlider from '@/components/ui/CTASlider'

// Заглушка «Страница в разработке» — показывается на несуществующих роутах
export default function UnderConstructionPage() {
  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Hero — светлая карточка с фото лаборатории ── */}
      <section className="bg-[#f4f4f4] px-2.5 pt-2 lg:px-3 lg:pt-0 lg:max-w-[1440px] lg:mx-auto">
        <div className="relative overflow-hidden rounded-[24px] lg:rounded-[28px] min-h-[560px] lg:min-h-0 lg:aspect-[1414/707]">
          {/* Фон — фото лаборатории */}
          <img src={heroLab} alt="" className="absolute inset-0 w-full h-full object-cover" />

          {/* Белый фейд слева (десктоп) — читаемость тёмного заголовка */}
          <img
            src={heroFade}
            alt=""
            aria-hidden
            className="hidden lg:block absolute inset-y-0 left-0 h-full w-auto select-none pointer-events-none"
          />
          {/* Белый фейд слева (мобайл) */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/10 pointer-events-none" />

          {/* Контент */}
          <div className="relative z-10 flex flex-col justify-center min-h-[560px] lg:min-h-0 lg:h-full px-6 lg:px-28 py-12">
            <div className="flex items-center gap-4 lg:gap-6">
              <img src={logoMark} alt="" className="h-[52px] lg:h-[100px] w-auto flex-shrink-0" />
              <h1 className="font-semibold text-gray-900 text-[32px] lg:text-[56px] leading-[1.2] tracking-[-0.06em]">
                Страница в<br />разработке
              </h1>
            </div>

            <Link
              to="/"
              className="mt-8 lg:mt-10 w-full lg:w-auto lg:self-start bg-[#00b5e2] text-white text-sm lg:text-base font-semibold text-center rounded-full px-12 lg:px-14 py-4 lg:py-[18px] shadow-lg hover:bg-[#0099c4] transition-colors"
            >
              Вернуться на главную
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA-слайдер «Многопрофильная клиника» ── */}
      <CTASlider />

    </div>
  )
}
