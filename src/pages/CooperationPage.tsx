import { Link } from 'react-router-dom'
import coopBg from '@/assets/images/coop-hero-bg.png'
import b2bEducation from '@/assets/images/b2b-education.png'
import b2bInsurance from '@/assets/images/b2b-insurance.png'
import b2bCorporate from '@/assets/images/b2b-corporate.png'
import b2bClinics from '@/assets/images/b2b-clinics.png'
import b2bInnovation from '@/assets/images/b2b-innovation.png'
import CTASlider from '@/components/ui/CTASlider'
import MobileCarousel from '@/components/ui/MobileCarousel'
import logoMark from '@/assets/images/logo-mark.png'

const directions = [
  { img: b2bEducation,  title: 'Образование и наука',          desc: 'Совместные исследования, клинические испытания и образовательные программы' },
  { img: b2bInsurance,  title: 'Страховые партнерства',         desc: 'Работаем с ведущими страховыми компаниями Казахстана для удобства пациента' },
  { img: b2bCorporate,  title: 'Корпоративное медобслуживание', desc: 'Комплексные чек-апы и плановые медосмотры для сотрудников компаний' },
  { img: b2bClinics,    title: 'Медицинские клиники',           desc: 'Партнерства с местными и зарубежными клиниками для обмена опытом' },
  { img: b2bInnovation, title: 'Партнеры и инновации',          desc: 'Сотрудничество с фармкомпаниями и IT-партнерами для передовых решений' },
]

export default function CooperationPage() {
  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Hero — карточка: фасад клиники, без оверлея ── */}
      <section className="bg-[#f4f4f4] px-2.5 pt-2 lg:px-3 lg:pt-0 lg:max-w-[1440px] lg:mx-auto">
        <div className="relative overflow-hidden rounded-[24px] lg:rounded-[28px] min-h-[620px] lg:min-h-0 lg:aspect-[1414/707]">
          {/* Фон: здание клиники, без тонирования — как в дизайне */}
          <img src={coopBg} alt="" className="absolute inset-0 w-full h-full object-cover object-[50%_20%]" />

          <div className="relative z-10 px-6 lg:px-28 pt-10 lg:pt-[146px]">
            <div className="flex items-start gap-3 lg:block mb-6 lg:mb-10">
              <img src={logoMark} alt="" className="lg:hidden h-16 w-auto flex-shrink-0" />
              <h1 className="text-[25px] lg:text-[52px] font-semibold text-white leading-[1.25] lg:leading-[1.15] max-w-md drop-shadow-sm">
                Ваш надежный<br />медицинский<br />партнер
              </h1>
            </div>
            <div className="bg-white rounded-2xl lg:rounded-3xl p-5 lg:p-7 max-w-none lg:max-w-[355px] shadow-2xl">
              <p className="text-black font-light text-[10px] lg:text-[13px] leading-relaxed">
                <span className="text-[#00b5e2] font-bold lg:font-semibold">Мы открыты</span> для партнерств, которые
                повышают качество медицинской помощи.
                Корпоративное обслуживание, страховые
                программы, научные исследования - мы
                выстраиваем долгосрочные партнерства
                на основе доверия и профессионализма
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Основные направления B2B ── */}
      <section className="py-14 lg:py-24">
        <h2 className="text-[28px] lg:text-[40px] font-semibold text-gray-900 text-center mb-9 lg:mb-10 max-w-[260px] lg:max-w-none mx-auto">Основные направления B2B</h2>

        {/* Мобильная карусель B2B */}
        <div className="lg:hidden">
          <MobileCarousel arrowsTop="38%">
            {directions.map((d) => (
              <div key={`${d.title}-m`} className="bg-white rounded-3xl overflow-hidden h-full">
                <div className="h-44 overflow-hidden">
                  <img src={d.img} alt={d.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 text-sm mb-2.5 leading-snug">{d.title}</h3>
                  <p className="text-black font-light text-[11px] leading-relaxed mb-5">{d.desc}</p>
                  <Link to="/contacts" className="inline-block text-[11px] font-semibold text-black border border-black rounded-full px-10 py-2.5">
                    Подробнее
                  </Link>
                </div>
              </div>
            ))}
          </MobileCarousel>
        </div>

        <div className="container-main hidden lg:block">
          <div className="flex flex-wrap justify-center gap-5">
            {directions.map((d) => (
              <div key={d.title} className="w-[calc((100%-2.5rem)/3)] bg-white rounded-3xl p-4 group hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden rounded-2xl">
                  <img
                    src={d.img}
                    alt={d.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 pt-5">
                  <h3 className="font-semibold text-gray-900 mb-2 leading-snug">{d.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{d.desc}</p>
                  <Link to="/contacts" className="inline-block text-sm text-gray-900 border border-gray-300 rounded-full px-6 py-2 hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors">
                    Подробнее
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Логотипы партнёров ── */}
      <section className="bg-[#f4f4f4] py-14 lg:py-24 overflow-hidden">
        <div className="container-main">
          <h2 className="text-[28px] lg:text-[36px] font-semibold text-gray-900 text-center mb-10 lg:mb-12 max-w-[320px] lg:max-w-2xl mx-auto leading-tight">
            Вместе с партнерами мы расширяем возможности диагностики и лечения
          </h2>
        </div>

        {/* Мобилка: 3 бегущие строки логотипов партнёров, чередующиеся направления (по Figma) */}
        <div className="lg:hidden flex flex-col gap-3 mb-8">
          {[
            { dir: 'animate-marquee-left', key: 'row1' },
            { dir: 'animate-marquee-right', key: 'row2' },
            { dir: 'animate-marquee-left', key: 'row3' },
          ].map((row) => (
            <div key={row.key} className="overflow-hidden">
              <div className={`flex gap-3 w-max ${row.dir} hover:[animation-play-state:paused]`}>
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl h-[71px] w-[144px] flex-shrink-0 flex flex-col items-center justify-center">
                    <span className="text-gray-400 font-bold text-sm lowercase leading-none">erensau</span>
                    <span className="text-gray-300 text-[7px] tracking-[0.2em] lowercase mt-0.5">hospital</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Десктоп: бесконечная лента — верхний ряд налево, нижний направо (по Figma) */}
        <div className="hidden lg:flex flex-col gap-9 mb-10">
          <div className="overflow-hidden">
            <div className="flex gap-11 w-max animate-marquee-left hover:[animation-play-state:paused]">
              {Array.from({ length: 14 }).map((_, i) => (
                <div key={i} className="bg-white rounded-2xl w-[190px] h-24 flex-shrink-0 flex flex-col items-center justify-center">
                  <span className="text-gray-400 font-bold text-base lowercase leading-none">erensau</span>
                  <span className="text-gray-300 text-[8px] tracking-[0.2em] uppercase mt-0.5">hospital</span>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-11 w-max animate-marquee-right hover:[animation-play-state:paused]">
              {Array.from({ length: 14 }).map((_, i) => (
                <div key={i} className="bg-white rounded-2xl w-[190px] h-24 flex-shrink-0 flex flex-col items-center justify-center">
                  <span className="text-gray-400 font-bold text-base lowercase leading-none">erensau</span>
                  <span className="text-gray-300 text-[8px] tracking-[0.2em] uppercase mt-0.5">hospital</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container-main">
          <div className="text-center">
            <Link to="/contacts" className="inline-block bg-transparent border border-gray-900 text-gray-900 text-sm font-semibold rounded-full px-10 lg:px-8 py-3.5 hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors">
              Стать партнером
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA-слайдер ── */}
      <CTASlider />

    </div>
  )
}
