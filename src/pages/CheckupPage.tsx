import { useState } from 'react'
import { Link } from 'react-router-dom'
import checkupBg from '@/assets/images/checkup-bg.png'
import checkupFg from '@/assets/images/checkup-fg.png'
import checkupGradient from '@/assets/images/checkup-gradient.png'
import checkupVector from '@/assets/images/checkup-vector.png'
import pictoHeart from '@/assets/icons/picto-heart.png'
import pictoMonitor from '@/assets/icons/picto-monitor.png'
import pictoUterus from '@/assets/icons/picto-uterus.png'
import CTASlider from '@/components/ui/CTASlider'
import MobileCarousel from '@/components/ui/MobileCarousel'

// Стандартные раскрывающиеся пункты карточки (как на «Услугах»)
const STANDARD_DETAILS = [
  { label: 'Порядок оформления', content: 'паспорт, ДМС и т.п.' },
  { label: 'Что можно/нужно брать с собой', content: 'Сменная одежда и обувь, средства личной гигиены, документы.' },
  { label: 'Условия пребывания', content: 'Комфортные палаты, индивидуальный график, медицинское сопровождение.' },
]

// Пиктограммы из дизайна; для «Мужского здоровья» в наборе нет знака Марса — оставлен SVG
const IC_MARS = 'M10 21a6 6 0 100-12 6 6 0 000 12zm4.2-10.2L21 4m0 0h-5.5M21 4v5.5'

const programCards: { name: string; price: string; img?: string; path?: string }[] = [
  { name: 'Кардио чек-ап',    price: '50 000тг',  img: pictoHeart },
  { name: 'Базовый чек-ап',   price: '85 000тг',  img: pictoMonitor },
  { name: 'Женское здоровье', price: '100 000тг', img: pictoUterus },
  { name: 'Мужское здоровье', price: '50 000тг',  path: IC_MARS },
  { name: 'Детский чекап',    price: '85 000тг',  img: pictoMonitor },
]

const programFilters = ['Все программы', 'Женское здоровье', 'Детский чекап', 'Мужское здоровье']

// Карточка программы с раскрывающимися пунктами (первый раскрыт по умолчанию)
function ProgramCard({ name, price, img, path }: { name: string; price: string; img?: string; path?: string }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  return (
    <article className="bg-white rounded-2xl p-7 flex flex-col">
      <div className="w-12 h-12 rounded-full bg-[#cdeefb] flex items-center justify-center mb-6">
        {img ? (
          <img src={img} alt="" className="w-full h-full" />
        ) : (
          <svg className="w-6 h-6 text-[#00b5e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d={path} />
          </svg>
        )}
      </div>
      <h3 className="font-semibold text-gray-900 text-xl mb-5 leading-snug">{name}</h3>
      <div className="flex-1">
        {STANDARD_DETAILS.map((d, i) => {
          const isOpen = openIdx === i
          return (
            <div key={d.label} className="border-b border-gray-100 last:border-b-0">
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-3 py-3 text-left text-sm text-gray-900 hover:text-[#00b5e2] transition-colors"
              >
                <span className="font-medium">{d.label}</span>
                <svg className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isOpen && <p className="text-gray-500 text-xs leading-relaxed pb-3">{d.content}</p>}
            </div>
          )
        })}
      </div>
      <div className="flex items-center justify-between mt-6">
        <Link to="/contacts" className="text-gray-900 text-sm font-medium underline underline-offset-4 hover:text-[#00b5e2] transition-colors">Записаться</Link>
        <span className="text-gray-900 text-sm">{price}</span>
      </div>
    </article>
  )
}

// Табы услуг для нижней панели Hero (как на странице «Медицинские услуги»)
const serviceTabs = ['Профили', 'Консультации специалистов', 'Диагностика', 'Лаборатория', 'Эндоскопия', 'Check-up программы'] as const

// Соответствие пилюль их вкладке на странице «Медицинские услуги»
const SERVICE_TAB_IDS: Record<string, string> = {
  'Профили':                  'cardio',
  'Консультации специалистов': 'onco',
  'Диагностика':               'diagnostics',
  'Лаборатория':               'lab',
  'Эндоскопия':                'checkup',
}

const faqs = [
  { q: 'Нужно ли готовиться к обследованию заранее?', a: 'Да. Рекомендуется приходить натощак (8–12 часов без еды), исключить алкоголь за сутки и по возможности отменить плановые препараты. Подробные инструкции вы получите при записи.' },
  { q: 'Нужно ли готовиться к обследованию заранее?', a: 'Исключите алкоголь за сутки и по возможности отмените плановые препараты. Подробные инструкции вы получите после записи.' },
  { q: 'Что входит в чек-ап программу?', a: 'Состав зависит от выбранного пакета. Все программы включают лабораторные анализы, инструментальные исследования и консультации.' },
  { q: 'Что входит в чек-ап программу?', a: 'Полный перечень исследований указан в описании каждой программы. Индивидуальный состав согласовывается с врачом.' },
  { q: 'Сколько времени занимает обследование?', a: 'Базовый Check-up — 1 день. Расширенные программы рассчитаны на 1–3 дня в зависимости от состава.' },
  { q: 'Сколько времени занимает обследование?', a: 'Зависит от программы: от 1 рабочего дня (базовый) до 3 дней (Premium).' },
]

export default function CheckupPage() {
  const [filter, setFilter] = useState('Все программы')
  const [filterOpen, setFilterOpen] = useState(true)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const visibleCards = filter === 'Все программы'
    ? programCards
    : programCards.filter(p => p.name === filter)

  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Hero — карточка: «Checkup» слева, «программы» справа, описание и кнопка слева ── */}
      <section className="bg-[#f4f4f4] px-2.5 pt-2 lg:px-3 lg:pt-0 lg:max-w-[1440px] lg:mx-auto">
        <div className="relative overflow-hidden rounded-[24px] lg:rounded-[28px] h-[630px] lg:h-auto lg:aspect-[1414/707]">
          {/* 1 — Фон с томографом (image 116) */}
          <img
            src={checkupBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Лёгкое затемнение на мобилке для читаемости */}
          <div className="absolute inset-0 bg-black/10 lg:hidden" />

          {/* 2 — Градиент-скрим снизу (Rectangle 40855), десктоп */}
          <img
            src={checkupGradient}
            alt=""
            aria-hidden
            className="hidden lg:block absolute inset-x-0 bottom-0 w-full pointer-events-none select-none"
          />

          {/* 3 — Vector-водяной знак справа рядом с «программы» (десктоп) */}
          <img
            src={checkupVector}
            alt=""
            aria-hidden
            className="hidden lg:block absolute right-[5%] top-0 h-full w-auto pointer-events-none select-none"
          />

          {/* 4 — Крупный текст «Checkup» слева, «программы» справа ниже (десктоп) */}
          <h1 className="hidden lg:block absolute left-[9.7%] top-[29%] text-[112px] font-semibold text-white leading-none tracking-tight pointer-events-none">
            Checkup
          </h1>
          <h1 className="hidden lg:block absolute right-[10%] top-[47%] text-[112px] font-semibold text-white leading-none tracking-tight pointer-events-none">
            программы
          </h1>

          {/* 5 — Передний план (image 117, bg removed) — ПОВЕРХ текста: колонна томографа перекрывает конец «Checkup» и начало «программы» */}
          <img
            src={checkupFg}
            alt=""
            aria-hidden
            className="hidden lg:block absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          />

          {/* 6 — Описание + кнопка слева внизу (десктоп) — поверх всех слоёв */}
          <div className="hidden lg:block absolute left-[9%] top-[51%] max-w-[320px] z-10">
            <p className="text-gray-700 text-[14px] leading-[1.85] mb-8">
              Комплексная диагностика по международным
              стандартам, с заключением врача
              и персональными рекомендациями
            </p>
            <Link
              to="/contacts"
              className="inline-block bg-white text-gray-900 text-sm font-semibold rounded-full px-9 py-3.5 shadow-md hover:text-[#00b5e2] transition-colors"
            >
              Подобрать программу
            </Link>
          </div>

          {/* Мобилка: заголовок, описание и кнопка одним блоком слева */}
          <div className="lg:hidden absolute left-6 right-6 top-[30%]">
            <h1 className="text-[32px] font-semibold text-white leading-[1.15] mb-4">
              Checkup<br />программы
            </h1>
            <p className="text-white/95 text-[13px] leading-relaxed max-w-[210px] mb-7">
              Комплексная диагностика по международным стандартам,
              с заключением врача и персональными рекомендациями
            </p>
            <Link
              to="/contacts"
              className="block w-full bg-white text-gray-900 text-sm font-semibold rounded-full px-9 py-4 text-center shadow-md"
            >
              Подобрать программу
            </Link>
          </div>
        </div>
      </section>

      {/* Табы — наполовину на границе hero; «Check-up программы» с рамкой и дропдауном */}
      <div className="lg:hidden container-main relative z-30 -mt-6 flex justify-center">
        <div className="relative">
          <button
            onClick={() => setFilterOpen(o => !o)}
            className="flex items-center gap-2 bg-[#00b5e2] text-white text-sm font-semibold rounded-full px-10 py-3.5 shadow-lg"
          >
            Check-up программы
            <svg className={`w-4 h-4 transition-transform ${filterOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {filterOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white rounded-2xl shadow-lg py-1.5 min-w-[220px] z-40">
              {programFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => { setFilter(f); setFilterOpen(false) }}
                  className={`block w-[calc(100%-2.5rem)] mx-5 text-left py-2.5 text-sm border-b border-gray-200 last:border-b-0 ${
                    filter === f ? 'text-[#00b5e2]' : 'text-gray-800'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="hidden lg:flex container-main relative z-30 -mt-7 justify-center">
        <div className="inline-flex bg-white rounded-full p-1.5 gap-1 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex-wrap justify-center">
          {serviceTabs.map((tab) => (
            <div key={tab} className="relative">
              {tab === 'Check-up программы' ? (
                <button
                  onClick={() => setFilterOpen(o => !o)}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold transition-colors whitespace-nowrap bg-[#00b5e2] text-white"
                >
                  {tab}
                </button>
              ) : (
                <Link
                  to={`/services?tab=${SERVICE_TAB_IDS[tab]}`}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold transition-colors whitespace-nowrap bg-[#f4f4f4] text-gray-800 hover:bg-gray-100 inline-block"
                >
                  {tab}
                </Link>
              )}
              {tab === 'Check-up программы' && filterOpen && (
                <div className="absolute left-0 top-full mt-2 bg-white rounded-2xl shadow-lg overflow-hidden z-40 min-w-[190px] py-1.5">
                  {programFilters.map((f) => (
                    <button
                      key={f}
                      onClick={() => { setFilter(f); setFilterOpen(false) }}
                      className={`block w-[calc(100%-2rem)] mx-4 text-left py-2.5 text-sm transition-colors border-b border-gray-200 last:border-b-0 hover:text-[#00b5e2] ${
                        filter === f ? 'text-[#00b5e2]' : 'text-gray-800'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Программы: карусель на мобилке, сетка на десктопе ── */}
      <section className="py-10 lg:py-16">
        <div className="lg:hidden">
          <MobileCarousel arrowsTop="40%">
            {visibleCards.map((p) => (
              <ProgramCard key={`${p.name}-m`} {...p} />
            ))}
          </MobileCarousel>
          <div className="text-center mt-9">
            <a href="#" className="inline-block bg-white border border-gray-300 text-gray-900 text-sm font-semibold rounded-full px-10 py-3.5">
              Скачать полный прейскурант
            </a>
          </div>
        </div>

        <div className="container-main hidden lg:block">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleCards.map((p) => (
              <ProgramCard key={p.name} {...p} />
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

      {/* ── FAQ — 2 колонки ── */}
      <section className="bg-[#f4f4f4] pt-10 pb-12 lg:py-24">
        <div className="container-main">
          <h2 className="text-[28px] lg:text-3xl font-semibold text-gray-900 mb-7 lg:mb-8 text-center max-w-[280px] lg:max-w-none mx-auto leading-[1.3]">Ответы на популярные вопросы</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 lg:gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden">
                <button
                  className="w-full flex justify-between items-center px-5 lg:px-6 py-3 lg:py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-gray-900 text-xs lg:text-sm pr-3 lg:pr-4 whitespace-nowrap lg:whitespace-normal overflow-hidden text-ellipsis">{faq.q}</span>
                  <span className={`w-6 h-6 lg:w-7 lg:h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-colors ${openFaq === i ? 'bg-[#00b5e2] text-white' : 'bg-[#cdeefb] text-[#00b5e2]'}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      {openFaq === i
                        ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                        : <path strokeLinecap="round" d="M12 5v14M5 12h14" />}
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 lg:px-6 pb-4 lg:pb-5 text-gray-500 text-[13px] lg:text-sm leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA-слайдер ── */}
      <CTASlider />

    </div>
  )
}
