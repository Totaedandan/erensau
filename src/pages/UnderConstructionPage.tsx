import { Link } from 'react-router-dom'
import checkupBg from '@/assets/images/checkup-bg.png'
import logoMark from '@/assets/images/logo-mark.png'
import LogoMark from '@/assets/icons/logo-group.svg?react'
import CTASlider from '@/components/ui/CTASlider'

// Заглушка «Страница в разработке» — показывается на несуществующих роутах
export default function UnderConstructionPage() {
  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Hero — светлая карточка с фото лаборатории ── */}
      <section className="bg-[#f4f4f4] px-2.5 lg:px-3 pt-2">
        <div className="relative overflow-hidden rounded-[24px] lg:rounded-[28px] min-h-[620px] lg:min-h-[700px]">
          <img src={checkupBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          {/* Белый водяной знак-логомарк слева */}
          <LogoMark
            className="absolute -left-10 top-1/3 h-72 w-auto opacity-70"
            style={{ ['--fill-0' as string]: '#ffffff' }}
          />

          <div className="relative z-10 px-6 lg:px-28 pt-10 lg:pt-24 flex flex-col min-h-[620px] lg:min-h-[700px] pb-16 lg:pb-24">
            <div className="flex items-start gap-3 lg:gap-4">
              <img src={logoMark} alt="" className="h-12 lg:h-20 w-auto flex-shrink-0" />
              <h1 className="text-[27px] lg:text-5xl font-bold text-gray-900 leading-[1.2] lg:leading-[1.1]">
                Страница в<br />разработке
              </h1>
            </div>

            <Link
              to="/"
              className="mt-auto mx-auto w-full lg:w-auto bg-[#00b5e2] text-white text-sm font-medium rounded-full px-12 py-4 text-center shadow-lg hover:bg-[#0099c4] transition-colors"
            >
              Вернуться на главную
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA-слайдер ── */}
      <CTASlider />

    </div>
  )
}
