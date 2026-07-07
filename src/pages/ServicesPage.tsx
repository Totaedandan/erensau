import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroWoman from '@/assets/images/svc-hero-woman.png'
import logoMark from '@/assets/images/logo-mark.png'
import svcCardiac from '@/assets/icons/picto-heart.png'
import svcSurgery from '@/assets/icons/picto-scalpel.png'
import svcThoracic from '@/assets/icons/picto-lungs.png'
import CTASlider from '@/components/ui/CTASlider'
import MobileCarousel from '@/components/ui/MobileCarousel'

type Tab = 'cardio' | 'onco' | 'diagnostics' | 'lab' | 'checkup' | 'surgery'

type ServiceItem = {
  icon: string
  title: string
  price: string
  details: { label: string; content: string }[]
}

const STANDARD_DETAILS = [
  { label: 'Порядок оформления',         content: 'паспорт, ДМС и т.п.' },
  { label: 'Что можно/нужно брать с собой', content: 'Сменная одежда и обувь, средства личной гигиены, документы.' },
  { label: 'Условия пребывания',          content: 'Комфортные палаты, индивидуальный график, медицинское сопровождение.' },
]

const profiles: ServiceItem[] = [
  { icon: svcCardiac,    title: 'Анализ крови',           price: '50 000тг', details: STANDARD_DETAILS },
  { icon: svcCardiac,    title: 'Анализ крови',         price: '50 000тг', details: STANDARD_DETAILS },
  { icon: svcCardiac,    title: 'Анализ крови', price: '50 000тг', details: STANDARD_DETAILS },
  { icon: svcCardiac,    title: 'Анализ крови', price: '50 000тг', details: STANDARD_DETAILS },
  { icon: svcCardiac,    title: 'Анализ крови',          price: '50 000тг', details: STANDARD_DETAILS },
  { icon: svcCardiac,    title: 'Анализ крови',       price: '50 000тг', details: STANDARD_DETAILS },
]

const blood: ServiceItem[] = [
  { icon: svcCardiac, title: 'Общий анализ крови',         price: '50 000тг', details: STANDARD_DETAILS },
  { icon: svcCardiac, title: 'Биохимический анализ крови', price: '50 000тг', details: STANDARD_DETAILS },
  { icon: svcCardiac, title: 'Гормональный профиль',        price: '50 000тг', details: STANDARD_DETAILS },
  { icon: svcCardiac, title: 'Коагулограмма',               price: '50 000тг', details: STANDARD_DETAILS },
  { icon: svcCardiac, title: 'Иммунологический анализ',     price: '50 000тг', details: STANDARD_DETAILS },
  { icon: svcCardiac, title: 'Онкомаркеры',                 price: '50 000тг', details: STANDARD_DETAILS },
]

const kdo: ServiceItem[] = [
  { icon: svcThoracic,   title: 'МРТ головного мозга',         price: '50 000тг', details: STANDARD_DETAILS },
  { icon: svcThoracic,   title: 'КТ органов грудной клетки',    price: '50 000тг', details: STANDARD_DETAILS },
  { icon: svcThoracic,   title: 'УЗИ органов брюшной полости',  price: '50 000тг', details: STANDARD_DETAILS },
  { icon: svcThoracic,   title: 'Анализ крови',              price: '50 000тг', details: STANDARD_DETAILS },
  { icon: svcThoracic,   title: 'Эндоскопия ЖКТ',               price: '50 000тг', details: STANDARD_DETAILS },
  { icon: svcThoracic,   title: 'Цифровая рентгенография',      price: '50 000тг', details: STANDARD_DETAILS },
]

const surgery: ServiceItem[] = [
  { icon: svcSurgery, title: 'Лапароскопические операции',   price: '50 000тг', details: STANDARD_DETAILS },
  { icon: svcSurgery, title: 'Операции на открытом сердце',  price: '50 000тг', details: STANDARD_DETAILS },
  { icon: svcSurgery, title: 'Флебэктомия',                  price: '50 000тг', details: STANDARD_DETAILS },
  { icon: svcSurgery, title: 'Гинекологические операции',    price: '50 000тг', details: STANDARD_DETAILS },
  { icon: svcSurgery, title: 'Торакальные операции',         price: '50 000тг', details: STANDARD_DETAILS },
  { icon: svcSurgery, title: 'Онкологические операции',      price: '50 000тг', details: STANDARD_DETAILS },
]

const tabs: { id: Tab; label: string }[] = [
  { id: 'cardio',      label: 'Профили'                     },
  { id: 'onco',        label: 'Консультации специалистов'   },
  { id: 'diagnostics', label: 'Диагностика'                 },
  { id: 'lab',         label: 'Лаборатория'                 },
  { id: 'checkup',     label: 'Эндоскопия'                  },
  { id: 'surgery',     label: 'Check-up программы'          },
]

const dataMap: Record<Tab, ServiceItem[]> = {
  cardio:      profiles,
  onco:        surgery,
  diagnostics: kdo,
  lab:         blood,
  checkup:     blood,
  surgery:     surgery,
}

// Отдельная карточка с раскрывающимися пунктами
function ServiceCard({ item }: { item: ServiceItem }) {
  // По эталону: первая строка («Порядок оформления») развёрнута по умолчанию
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  return (
    <article className="bg-white rounded-2xl p-7 flex flex-col">
      {/* Голубая круглая иконка */}
      <div className="w-12 h-12 rounded-full bg-[#cdeefb] flex items-center justify-center mb-6">
        <img src={item.icon} alt="" className="w-full h-full" />
      </div>

      {/* Заголовок */}
      <h3 className="font-semibold text-gray-900 text-lg mb-5 leading-snug">{item.title}</h3>

      {/* Аккордеоны */}
      <div className="flex-1">
        {item.details.map((d, i) => {
          const isOpen = openIdx === i
          return (
            <div key={d.label} className="border-b border-gray-100 last:border-b-0">
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="w-full flex items-center gap-2 py-3 text-left text-sm text-gray-900 hover:text-[#00b5e2] transition-colors"
              >
                <span className="font-medium">{d.label}</span>
                <svg
                  className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isOpen && (
                <p className="text-gray-500 text-xs leading-relaxed pb-3">{d.content}</p>
              )}
            </div>
          )
        })}
      </div>

      {/* Низ: «Записаться» подчёркнутая + цена */}
      <div className="flex items-center justify-between mt-6">
        <Link
          to="/contacts"
          className="text-gray-900 text-sm font-medium underline underline-offset-4 hover:text-[#00b5e2] transition-colors"
        >
          Записаться
        </Link>
        <span className="text-gray-900 text-sm">{item.price}</span>
      </div>
    </article>
  )
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<Tab>('cardio')
  const [mobileTabOpen, setMobileTabOpen] = useState(false)

  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Hero — карточка: заголовок слева, врач по центру, «30+» справа ── */}
      <section className="bg-[#f4f4f4] px-2.5 pt-2 lg:px-3 lg:pt-0 lg:max-w-[1440px] lg:mx-auto">
        <div
          className="relative overflow-hidden rounded-[24px] lg:rounded-[28px] min-h-[620px] lg:min-h-0 lg:aspect-[1414/707]"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 75% 65% at 50% 30%, #ffffff 0%, #f6f6f6 60%, #efefef 100%)',
          }}
        >
          {/* Фото врача: на мобилке справа, на десктопе по центру, прижато к низу карточки */}
          <img
            src={heroWoman}
            alt="Врач Erensau"
            className="absolute right-[-80px] lg:right-auto lg:left-[calc(50%+40px)] lg:-translate-x-1/2 bottom-0 h-[540px] lg:h-[700px] w-auto object-contain object-bottom"
          />

          <div className="relative px-6 lg:px-28 pt-10 lg:pt-32 pb-10">
            {/* Заголовок + описание слева */}
            <div className="max-w-[420px]">
              <div className="flex items-start gap-3.5 lg:gap-7 mb-6 lg:mb-8">
                <img src={logoMark} alt="" className="h-12 lg:h-24 w-auto flex-shrink-0" />
                <h1 className="text-[27px] lg:text-5xl font-semibold text-gray-900 leading-[1.15] lg:leading-[1.05] tracking-tight">
                  Медицинские<br />услуги
                </h1>
              </div>
              <p className="text-gray-800 text-[13px] leading-relaxed max-w-[180px] lg:max-w-[340px]">
                Erensau Hospital предоставляет широкий спектр
                медицинских услуг по международным стандартам.
              </p>
            </div>

            {/* Белая карточка «30+» справа (десктоп) */}
            <div className="hidden lg:block absolute right-[7.5%] top-[130px] bg-white rounded-2xl p-7 shadow-[0_8px_30px_rgba(0,0,0,0.08)] w-[300px] z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[44px] font-bold text-[#00b5e2] leading-none">30+</div>
                <div className="text-gray-700 text-xs leading-tight">направлений<br />медицины</div>
              </div>
              <p className="text-gray-700 text-xs leading-relaxed">
                Кардиология, онкология, хирургия
                и другие специализации
                под одной крышей.
              </p>
            </div>
          </div>

          {/* Белая карточка «30+» внизу слева (мобилка) */}
          <div className="lg:hidden absolute left-5 bottom-16 bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] w-[262px] z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-[40px] font-bold text-[#00b5e2] leading-none">30+</div>
              <div className="text-gray-700 text-xs leading-tight">направлений<br />медицины</div>
            </div>
            <p className="text-gray-700 text-xs leading-relaxed">
              Кардиология, онкология, хирургия
              и другие специализации
              под одной крышей.
            </p>
          </div>
        </div>
      </section>

      {/* Табы — наполовину на границе hero-карточки */}
      <div className="container-main relative z-20 -mt-7 flex justify-center">
        {/* Мобилка: голубой дропдаун */}
        <div className="lg:hidden relative">
          <button
            onClick={() => setMobileTabOpen(o => !o)}
            className="flex items-center gap-2 bg-[#00b5e2] text-white text-sm font-semibold rounded-full px-9 py-3.5 shadow-lg"
          >
            {tabs.find(t => t.id === activeTab)?.label}
            <svg className={`w-4 h-4 transition-transform ${mobileTabOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileTabOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white rounded-2xl shadow-lg py-1.5 min-w-[230px] z-40">
              {tabs.map((t) =>
                t.id === 'surgery' ? (
                  <Link
                    key={t.id}
                    to="/checkup"
                    className="block w-[calc(100%-2.5rem)] mx-5 text-left py-2.5 text-sm text-gray-800 border-b border-gray-200 last:border-b-0"
                  >
                    {t.label}
                  </Link>
                ) : (
                  <button
                    key={t.id}
                    onClick={() => { setActiveTab(t.id); setMobileTabOpen(false) }}
                    className={`block w-[calc(100%-2.5rem)] mx-5 text-left py-2.5 text-sm border-b border-gray-200 last:border-b-0 ${
                      activeTab === t.id ? 'text-[#00b5e2]' : 'text-gray-800'
                    }`}
                  >
                    {t.label}
                  </button>
                )
              )}
            </div>
          )}
        </div>

        {/* Десктоп: ряд табов */}
        <div className="hidden lg:inline-flex gap-2 bg-white rounded-full p-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex-wrap justify-center">
          {tabs.map((t) =>
            t.id === 'surgery' ? (
              /* «Check-up программы» ведёт на отдельную страницу */
              <Link
                key={t.id}
                to="/checkup"
                className="px-6 py-2.5 rounded-full text-sm font-semibold transition-colors whitespace-nowrap bg-[#f4f4f4] text-gray-800 hover:bg-gray-100"
              >
                {t.label}
              </Link>
            ) : (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                  activeTab === t.id
                    ? 'bg-[#00b5e2] text-white'
                    : 'bg-[#f4f4f4] text-gray-800 hover:bg-gray-100'
                }`}
              >
                {t.label}
              </button>
            )
          )}
        </div>
      </div>

      {/* ── Карточки: карусель на мобилке, сетка на десктопе ── */}
      <section className="bg-[#f4f4f4] py-12 lg:py-20">
        <div className="lg:hidden">
          <MobileCarousel arrowsTop="40%">
            {dataMap[activeTab].map((s, i) => (
              <ServiceCard key={`${s.title}-m${i}`} item={s} />
            ))}
          </MobileCarousel>
          <div className="text-center mt-9">
            <a
              href="#"
              className="inline-block bg-white border border-gray-300 text-gray-900 text-sm font-semibold rounded-full px-10 py-3.5"
            >
              Скачать полный прейскурант
            </a>
          </div>
        </div>

        <div className="container-main hidden lg:block">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dataMap[activeTab].map((s, i) => (
              <ServiceCard key={`${s.title}-${i}`} item={s} />
            ))}
          </div>

          {/* Кнопка «Скачать полный прейскурант» */}
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-900 text-sm font-semibold rounded-full px-8 py-3.5 hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors"
            >
              Скачать полный прейскурант
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA-слайдер ── */}
      <CTASlider />

    </div>
  )
}
