import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroDoctorLab from '@/assets/images/hero-doctor-lab.png'
import heroEllipseBg from '@/assets/images/hero-ellipse-bg.png'
import LogoMark from '@/assets/icons/logo-group.svg?react'
import svcCardiac from '@/assets/icons/svc-cardiac.svg'
import svcSurgery from '@/assets/icons/svc-surgery.svg'
import svcThoracic from '@/assets/icons/svc-thoracic.svg'
import CTASlider from '@/components/ui/CTASlider'

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
  { icon: svcCardiac,    title: 'Эхокардиография',         price: '50 000тг', details: STANDARD_DETAILS },
  { icon: svcCardiac,    title: 'ЭКГ суточный мониторинг', price: '50 000тг', details: STANDARD_DETAILS },
  { icon: svcCardiac,    title: 'Консультация кардиолога', price: '50 000тг', details: STANDARD_DETAILS },
  { icon: svcCardiac,    title: 'Велоэргометрия',          price: '50 000тг', details: STANDARD_DETAILS },
  { icon: svcCardiac,    title: 'Холтер-мониторинг',       price: '50 000тг', details: STANDARD_DETAILS },
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
  { icon: svcThoracic,   title: 'Эхокардиография',              price: '50 000тг', details: STANDARD_DETAILS },
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
        <img src={item.icon} alt="" className="w-6 h-6" />
      </div>

      {/* Заголовок */}
      <h3 className="font-bold text-gray-900 text-xl mb-5 leading-snug">{item.title}</h3>

      {/* Аккордеоны */}
      <div className="flex-1">
        {item.details.map((d, i) => {
          const isOpen = openIdx === i
          return (
            <div key={d.label} className="border-b border-gray-100 last:border-b-0">
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-3 py-3 text-left text-sm text-gray-900 hover:text-[#00b5e2] transition-colors"
              >
                <span className="font-medium">{d.label}</span>
                <svg
                  className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
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

  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Светлый hero — фон-эллипс, фото врача справа, текст слева, визитка возле плеча, табы внизу ── */}
      <section className="relative overflow-hidden bg-[#f4f4f4]">
        {/* Фоновое изображение «эллипс» — мягкие круги */}
        <img
          src={heroEllipseBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        <div className="container-main relative pt-20 lg:pt-24 pb-28 lg:pb-32 min-h-[760px]">

          {/* Двухколоночный grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-8 relative items-center">

            {/* Левая колонка: заголовок + описание + кнопка */}
            <div className="flex flex-col">
              <div className="flex items-start gap-4 mb-10">
                <LogoMark className="h-12 lg:h-16 w-auto flex-shrink-0 mt-2" style={{ ['--fill-0' as string]: '#00b5e2' }} />
                <h1 className="text-5xl lg:text-[80px] font-bold text-gray-900 leading-[0.95] tracking-tight">
                  Медицинские<br />услуги
                </h1>
              </div>
              <p className="text-gray-800 text-sm leading-relaxed mb-10 max-w-md">
                Erensau Hospital предоставляет широкий спектр
                медицинских услуг по международным стандартам.
              </p>
              <Link
                to="/contacts"
                className="bg-white border border-gray-300 text-gray-900 text-sm font-medium rounded-full px-10 py-4 hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors w-fit"
              >
                Записаться на приём
              </Link>
            </div>

            {/* Правая колонка: фото врача + визитка возле плеча */}
            <div className="relative hidden lg:flex justify-center items-end min-h-[640px]">
              <img
                src={heroDoctorLab}
                alt="Врач Erensau"
                className="h-[640px] w-auto object-contain object-bottom relative z-0"
              />

              {/* Белая визитка возле плеча врача */}
              <div className="absolute top-[42%] right-0 lg:-right-4 bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] max-w-[260px] z-10">
                <div className="flex items-baseline gap-3 mb-5">
                  <div className="text-5xl font-bold text-gray-900 leading-none">30+</div>
                  <div className="text-gray-700 text-xs leading-tight">направлений<br />медицины</div>
                </div>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Кардиология, онкология, хирургия
                  и другие специализации
                  под одной крышей.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Табы внизу hero — отдельные пилюли, активная голубая */}
        <div className="absolute left-0 right-0 bottom-6 z-20">
          <div className="container-main flex justify-center">
            <div className="inline-flex gap-2 flex-wrap justify-center">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap shadow-sm ${
                    activeTab === t.id
                      ? 'bg-[#00b5e2] text-white'
                      : 'bg-[#ececec] text-gray-800 hover:bg-white'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Сетка карточек ── */}
      <section className="bg-[#f4f4f4] py-12 lg:py-16">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dataMap[activeTab].map((s, i) => (
              <ServiceCard key={`${s.title}-${i}`} item={s} />
            ))}
          </div>

          {/* Кнопка «Скачать полный прейскурант» */}
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-900 text-sm font-medium rounded-full px-8 py-3.5 hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors"
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
