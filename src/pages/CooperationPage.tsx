import { Link } from 'react-router-dom'
import imgClinicBuilding from '@/assets/images/img-clinic-building.jpg'
import coopBg from '@/assets/images/coop-hero-bg.png'
import coopTintLeft from '@/assets/images/coop-tint-left.png'
import coopTintBottom from '@/assets/images/coop-tint-bottom.png'
import imgOperatingRoom from '@/assets/images/img-operating-room.jpg'
import imgDoctorSenior from '@/assets/images/img-doctor-senior.jpg'
import imgDoctorPortrait from '@/assets/images/img-doctor-portrait.jpg'
import imgDoctorSenior2 from '@/assets/images/img-doctor-senior2.jpg'
import CTASlider from '@/components/ui/CTASlider'
import MobileCarousel from '@/components/ui/MobileCarousel'
import logoMark from '@/assets/images/logo-mark.png'

const directions = [
  { img: imgOperatingRoom,  title: 'Образование и наука',          desc: 'Совместные исследования, клинические испытания и образовательные программы' },
  { img: imgDoctorSenior2,  title: 'Страховые партнерства',         desc: 'Работаем с ведущими страховыми компаниями Казахстана для удобства пациента' },
  { img: imgClinicBuilding, title: 'Корпоративное медобслуживание', desc: 'Комплексные чек-апы и плановые медосмотры для сотрудников компаний' },
  { img: imgDoctorSenior,   title: 'Медицинские клиники',           desc: 'Партнерства с местными и зарубежными клиниками для обмена опытом' },
  { img: imgDoctorPortrait, title: 'Партнеры и инновации',          desc: 'Сотрудничество с фармкомпаниями и IT-партнерами для передовых решений' },
]

export default function CooperationPage() {
  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Hero — карточка: фасад клиники, без оверлея ── */}
      <section className="bg-[#f4f4f4] px-2.5 pt-2 lg:px-3 lg:pt-0 lg:max-w-[1440px] lg:mx-auto">
        <div className="relative overflow-hidden rounded-[24px] lg:rounded-[28px] min-h-[620px] lg:min-h-0 lg:aspect-[1414/707]">
          {/* 1 — Фон: здание клиники (image 142) */}
          <img src={coopBg} alt="" className="absolute inset-0 w-full h-full object-cover object-[50%_20%]" />
          {/* 2 — Голубой градиент слева (Rectangle 40914: #89C5F8 → прозрачный) */}
          <img src={coopTintLeft} alt="" aria-hidden className="absolute left-0 top-0 h-full w-[43.2%] object-fill pointer-events-none select-none" />
          {/* 3 — Светлый градиент снизу (Rectangle 40913: прозрачный → #E3F0F9) */}
          <img src={coopTintBottom} alt="" aria-hidden className="absolute left-0 bottom-0 w-full h-[68%] object-fill pointer-events-none select-none" />
          {/* 4 — Общий синий тон (Rectangle 40915: #016595 @20%) */}
          <div className="absolute inset-0 bg-[#016595]/20 pointer-events-none" />

          <div className="relative z-10 px-6 lg:px-28 pt-10 lg:pt-[146px]">
            <div className="flex items-start gap-3 lg:block mb-6 lg:mb-10">
              <img src={logoMark} alt="" className="lg:hidden h-16 w-auto flex-shrink-0" />
              <h1 className="text-[25px] lg:text-[52px] font-bold text-white leading-[1.25] lg:leading-[1.15] max-w-md drop-shadow-sm">
                Ваш надежный<br />медицинский<br />партнер
              </h1>
            </div>
            <div className="bg-white rounded-2xl lg:rounded-3xl p-5 lg:p-7 max-w-none lg:max-w-[355px] shadow-2xl">
              <p className="text-gray-600 text-[13px] leading-relaxed">
                <span className="text-[#00b5e2] font-semibold">Мы открыты</span> для партнерств, которые
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
        <h2 className="text-[28px] lg:text-[40px] font-bold text-gray-900 text-center mb-9 lg:mb-10 max-w-[260px] lg:max-w-none mx-auto">Основные направления B2B</h2>

        {/* Мобильная карусель B2B */}
        <div className="lg:hidden">
          <MobileCarousel arrowsTop="38%">
            {directions.map((d) => (
              <div key={`${d.title}-m`} className="bg-white rounded-3xl overflow-hidden h-full">
                <div className="h-44 overflow-hidden">
                  <img src={d.img} alt={d.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2.5 leading-snug">{d.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{d.desc}</p>
                  <Link to="/contacts" className="inline-block text-sm font-medium text-gray-900 border border-gray-300 rounded-full px-10 py-2.5">
                    Подробнее
                  </Link>
                </div>
              </div>
            ))}
          </MobileCarousel>
        </div>

        <div className="container-main hidden lg:block">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {directions.map((d) => (
              <div key={d.title} className="bg-white rounded-3xl p-4 group hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden rounded-2xl">
                  <img
                    src={d.img}
                    alt={d.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 pt-5">
                  <h3 className="font-bold text-gray-900 mb-2 leading-snug">{d.title}</h3>
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
          <h2 className="text-[28px] lg:text-[36px] font-bold text-gray-900 text-center mb-10 lg:mb-12 max-w-[320px] lg:max-w-2xl mx-auto leading-tight">
            Вместе с партнерами мы расширяем возможности диагностики и лечения
          </h2>
        </div>

        {/* Мобилка: плитки «кирпичиками» с выходом за края */}
        <div className="lg:hidden space-y-3">
          {[0, 1, 2].map((row) => (
            <div
              key={row}
              className={`flex gap-3 justify-center ${row === 1 ? 'translate-x-10' : '-translate-x-6'}`}
            >
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-white rounded-2xl h-[70px] w-[145px] flex-shrink-0 flex flex-col items-center justify-center">
                  <span className="text-gray-400 font-bold text-base lowercase leading-none">erensau</span>
                  <span className="text-gray-300 text-[8px] tracking-[0.2em] lowercase mt-0.5">hospital</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="container-main">
          <div className="hidden lg:grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl h-20 flex flex-col items-center justify-center">
                <span className="text-gray-400 font-bold text-base lowercase leading-none">erensau</span>
                <span className="text-gray-300 text-[8px] tracking-[0.2em] uppercase mt-0.5">hospital</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contacts" className="inline-block bg-white border border-gray-300 text-gray-900 text-sm font-medium rounded-full px-10 lg:px-8 py-3.5 hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors">
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
