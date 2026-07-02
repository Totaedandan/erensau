import { useState } from 'react'
import { Link } from 'react-router-dom'
import checkupBg from '@/assets/images/checkup-bg.png'
import LogoMark from '@/assets/icons/logo-group.svg?react'
import CTASlider from '@/components/ui/CTASlider'

// Стандартные раскрывающиеся пункты карточки (как на «Услугах»)
const STANDARD_DETAILS = [
  { label: 'Порядок оформления', content: 'паспорт, ДМС и т.п.' },
  { label: 'Что можно/нужно брать с собой', content: 'Сменная одежда и обувь, средства личной гигиены, документы.' },
  { label: 'Условия пребывания', content: 'Комфортные палаты, индивидуальный график, медицинское сопровождение.' },
]

// В дизайне иконки повторяются попарно: сердце (Кардио/Мужское), монитор с ЭКГ (Базовый/Детский), матка (Женское)
const IC_HEART = 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
const IC_MONITOR = 'M4 6h16a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1zM7 11h2l1.5 2.5L13 8l1 3h3M9 19h6'
const IC_UTERUS = 'M12 4v5m0 0c-3.5 0-6 2.2-6 5.5M12 9c3.5 0 6 2.2 6 5.5M6.2 14.5a1.9 1.9 0 11-3.8 0 1.9 1.9 0 013.8 0zm15.6 0a1.9 1.9 0 11-3.8 0 1.9 1.9 0 013.8 0z'

const programCards = [
  { name: 'Кардио чек-ап',    price: '50 000тг',  icon: IC_HEART },
  { name: 'Базовый чек-ап',   price: '85 000тг',  icon: IC_MONITOR },
  { name: 'Женское здоровье', price: '100 000тг', icon: IC_UTERUS },
  { name: 'Мужское здоровье', price: '50 000тг',  icon: IC_HEART },
  { name: 'Детский чекап',    price: '85 000тг',  icon: IC_MONITOR },
]

const programFilters = ['Все программы', 'Женское здоровье', 'Детский чекап', 'Мужское здоровье']

// Карточка программы с раскрывающимися пунктами (первый раскрыт по умолчанию)
function ProgramCard({ name, price, icon }: { name: string; price: string; icon: string }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  return (
    <article className="bg-white rounded-2xl p-7 flex flex-col">
      <div className="w-12 h-12 rounded-full bg-[#cdeefb] flex items-center justify-center mb-6">
        <svg className="w-6 h-6 text-[#00b5e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
      <h3 className="font-bold text-gray-900 text-xl mb-5 leading-snug">{name}</h3>
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
  const [filterOpen, setFilterOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const visibleCards = filter === 'Все программы'
    ? programCards
    : programCards.filter(p => p.name === filter)

  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Hero — карточка: «Checkup» слева, «программы» справа, описание и кнопка слева ── */}
      <section className="bg-[#f4f4f4] px-3 pt-2">
        <div className="relative overflow-hidden rounded-[28px] h-[600px] lg:h-[660px]">
          {/* Фон с томографом */}
          <img
            src={checkupBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Водяной знак-логомарк справа */}
          <LogoMark
            className="absolute right-[8%] top-1/2 -translate-y-1/2 h-56 w-auto opacity-40"
            style={{ ['--fill-0' as string]: '#ffffff' }}
          />

          {/* Крупный текст: «Checkup» слева выше, «программы» справа ниже */}
          <h1 className="absolute left-[8%] top-[38%] text-[64px] lg:text-[110px] font-bold text-white/90 leading-none tracking-tight pointer-events-none">
            Checkup
          </h1>
          <h1 className="absolute right-[6%] top-[52%] text-[64px] lg:text-[110px] font-bold text-white/90 leading-none tracking-tight pointer-events-none">
            программы
          </h1>

          {/* Описание + кнопка слева внизу */}
          <div className="absolute left-[7%] top-[57%] max-w-[240px]">
            <p className="text-gray-700 text-[13px] leading-relaxed mb-7">
              Комплексная диагностика по международным
              стандартам, с заключением врача
              и персональными рекомендациями
            </p>
            <Link
              to="/contacts"
              className="inline-block bg-white text-gray-900 text-sm font-medium rounded-full px-9 py-3.5 shadow-md hover:text-[#00b5e2] transition-colors"
            >
              Подобрать программу
            </Link>
          </div>
        </div>
      </section>

      {/* Табы — наполовину на границе hero; «Check-up программы» с рамкой и дропдауном */}
      <div className="container-main relative z-30 -mt-7 flex justify-center">
        <div className="inline-flex bg-white rounded-full p-1.5 gap-1 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex-wrap justify-center">
          {serviceTabs.map((tab, ti) => (
            <div key={tab} className="relative">
              <button
                onClick={() => tab === 'Check-up программы' && setFilterOpen(o => !o)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  ti === 0
                    ? 'bg-[#00b5e2] text-white'
                    : tab === 'Check-up программы'
                      ? 'bg-white text-gray-900 border border-[#00b5e2]'
                      : 'bg-[#f4f4f4] text-gray-800 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
              {tab === 'Check-up программы' && filterOpen && (
                <div className="absolute left-0 top-full mt-2 bg-white rounded-2xl shadow-lg overflow-hidden z-40 min-w-[190px] py-1.5">
                  {programFilters.map((f) => (
                    <button
                      key={f}
                      onClick={() => { setFilter(f); setFilterOpen(false) }}
                      className={`block w-full text-left px-5 py-2 text-sm transition-colors hover:bg-gray-50 ${
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

      {/* ── Программы — сетка карточек ── */}
      <section className="container-main py-10 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleCards.map((p) => (
            <ProgramCard key={p.name} name={p.name} price={p.price} icon={p.icon} />
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
      </section>

      {/* ── FAQ — 2 колонки ── */}
      <section className="bg-[#f4f4f4] py-14 lg:py-20">
        <div className="container-main">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">Ответы на популярные вопросы</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden">
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-gray-900 text-sm pr-4">{faq.q}</span>
                  <span className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-colors ${openFaq === i ? 'bg-[#00b5e2] text-white' : 'bg-[#cdeefb] text-[#00b5e2]'}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      {openFaq === i
                        ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                        : <path strokeLinecap="round" d="M12 5v14M5 12h14" />}
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</div>
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
