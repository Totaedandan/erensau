import { Link } from 'react-router-dom'
import aboutCertificate from '@/assets/images/about-certificate.jpg'
import heroLab from '@/assets/images/underconstruction-hero.png'
import logoMark from '@/assets/images/logo-mark.png'
import CTASlider from '@/components/ui/CTASlider'

// Отдельная страница «Лицензии» (ссылка в футере, Корпоративные → Лицензии).
// Десктоп: секция сертификации (Figma 2672:9699). Мобилка: по Figma 2702:2313
// эта страница на мобильном ещё не спроектирована — показывается заглушка
// «Страница в разработке», как на несуществующих роутах (UnderConstructionPage).
export default function LicensesPage() {
  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Мобилка: заглушка «Страница в разработке» (по Figma) ── */}
      <section className="lg:hidden px-2.5 pt-2">
        <div className="relative overflow-hidden rounded-[24px] min-h-[560px]">
          <img src={heroLab} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/10 pointer-events-none" />
          <div className="relative z-10 flex flex-col justify-center min-h-[560px] px-6 py-12">
            <div className="flex items-center gap-4">
              <img src={logoMark} alt="" className="h-[52px] w-auto flex-shrink-0" />
              <h1 className="font-semibold text-gray-900 text-[32px] leading-[1.2] tracking-[-0.06em]">
                Страница в<br />разработке
              </h1>
            </div>
            <Link
              to="/"
              className="mt-8 w-full bg-[#00b5e2] text-white text-sm font-semibold text-center rounded-full px-12 py-4 shadow-lg hover:bg-[#0099c4] transition-colors"
            >
              Вернуться на главную
            </Link>
          </div>
        </div>
      </section>

      {/* ── Десктоп: сертификация клиники ── */}
      <section className="hidden lg:block pt-10 pb-12 lg:pt-16 lg:pb-24">
        <div className="container-main">
          <h1 className="text-[26px] lg:text-[40px] font-semibold text-neutral-900 mb-8 lg:mb-14 leading-[1.25] max-w-[720px]">
            Клиника сертифицирована и соответствует международным стандартам
          </h1>

          <div className="bg-white rounded-[28px] lg:rounded-[47px] p-6 lg:py-16 lg:pl-[170px] lg:pr-[380px] relative">
            {/* Стопка миниатюр — слева, перекрывает край карточки (десктоп) */}
            <div className="hidden lg:flex flex-col gap-3 absolute left-8 top-1/2 -translate-y-1/2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="relative w-[100px] h-[100px] rounded-2xl overflow-hidden bg-[#e4e4e4] shadow-[-2px_16px_25px_rgba(0,0,0,0.04)]">
                  {i === 0 && <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-[#00b5e2] rounded-full" />}
                  <img src={aboutCertificate} alt="" className="w-full h-full object-cover object-top" />
                </div>
              ))}
            </div>

            {/* Крупное фото лицензии — справа, перекрывает край карточки (десктоп) */}
            <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 w-[300px] h-[420px] rounded-[13px] overflow-hidden shadow-[1px_18px_29px_rgba(0,0,0,0.1)]">
              <img src={aboutCertificate} alt="Государственная лицензия МЗ РК" className="w-full h-full object-cover object-top" />
            </div>

            <h2 className="text-xl lg:text-[27px] font-semibold text-neutral-900 mb-3 lg:mb-4 leading-tight">
              Лицензия Министерства здравоохранения РК
            </h2>
            <p className="text-[#656565] text-[13px] lg:text-sm leading-relaxed mb-7 lg:mb-9 max-w-[340px]">
              Клиника работает на основании государственной лицензии МЗ РК, подтверждающей соответствие стандартам безопасности, качества и профессиональной квалификации.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={aboutCertificate}
                download
                className="bg-[#00b5e2] text-white text-sm font-semibold rounded-full px-8 py-4 hover:bg-[#0099c4] transition-colors whitespace-nowrap"
              >
                Скачать сертификаты
              </a>
              <button aria-label="Предыдущий" className="w-12 h-12 rounded-full border border-gray-300 text-gray-500 flex items-center justify-center hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors flex-shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button aria-label="Следующий" className="w-12 h-12 rounded-full bg-[#00b5e2] text-white flex items-center justify-center hover:bg-[#0099c4] transition-colors flex-shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA-слайдер «Многопрофильная клиника» ── */}
      <CTASlider />

    </div>
  )
}
