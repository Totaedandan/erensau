import { useState } from 'react'
import { Link } from 'react-router-dom'
import checkupBg from '@/assets/images/checkup-bg.png'
import checkupFg from '@/assets/images/checkup-fg.png'
import CTASlider from '@/components/ui/CTASlider'

// Стандартные раскрывающиеся пункты карточки (как на «Услугах»)
const STANDARD_DETAILS = [
  { label: 'Порядок оформления', content: 'паспорт, ДМС и т.п.' },
  { label: 'Что можно/нужно брать с собой', content: 'Сменная одежда и обувь, средства личной гигиены, документы.' },
  { label: 'Условия пребывания', content: 'Комфортные палаты, индивидуальный график, медицинское сопровождение.' },
]

const programCards = [
  { name: 'Кардио чек-ап',    price: '50 000тг',  icon: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' },
  { name: 'Базовый чек-ап',   price: '85 000тг',  icon: 'M9 12l2 2 4-4M7.5 21h9a1.5 1.5 0 001.5-1.5V7.5L13.5 3H7.5A1.5 1.5 0 006 4.5v15A1.5 1.5 0 007.5 21z' },
  { name: 'Женское здоровье', price: '100 000тг', icon: 'M12 13a4 4 0 100-8 4 4 0 000 8zm0 0v7m-3-3h6' },
  { name: 'Мужское здоровье', price: '50 000тг',  icon: 'M10 15a4 4 0 100-8 4 4 0 000 8zm2.5-6.5L19 4m0 0h-4.5M19 4v4.5' },
  { name: 'Детский чекап',    price: '85 000тг',  icon: 'M12 21a9 9 0 100-18 9 9 0 000 18zm-3-10h.01M15 11h.01M9 15s1 1.5 3 1.5 3-1.5 3-1.5' },
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
  { q: 'Нужно ли готовиться к обследованию заранее?', a: 'Да, большинство анализов крови сдаётся натощак. Мы высылаем подробную инструкцию по подготовке после записи.' },
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

      {/* ── Hero — 3D-сэндвич: фон + текст + foreground-аппарат ── */}
      <section className="relative overflow-hidden h-[560px] lg:h-[640px]">

        {/* LAYER 1: фон с томографом и плиточным полом */}
        <img
          src={checkupBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* LAYER 2: крупный текст «Checkup программы» — обтекает аппарат */}
        <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
          <div className="container-main flex items-baseline justify-between w-full">
            <h1 className="text-[56px] lg:text-[130px] font-bold text-white/85 leading-[0.85] tracking-tight whitespace-nowrap">
              Checkup
            </h1>
            <h1 className="text-[56px] lg:text-[130px] font-bold text-white/85 leading-[0.85] tracking-tight whitespace-nowrap mt-[70px] lg:mt-[120px]">
              программы
            </h1>
          </div>
        </div>

        {/* LAYER 3: томограф БЕЗ фона — поверх текста (создаёт 3D-эффект) */}
        <img
          src={checkupFg}
          alt=""
          className="absolute inset-0 w-full h-full object-contain object-top z-20 pointer-events-none"
        />

        {/* LAYER 4: контентный блок поверх всего — описание + кнопка */}
        <div className="absolute top-32 lg:top-40 left-0 right-0 z-30">
          <div className="container-main max-w-md">
            <p className="text-gray-900 text-sm lg:text-base leading-relaxed mb-8 font-medium drop-shadow-sm">
              Комплексная диагностика по международным
              стандартам, с заключением врача
              и персональными рекомендациями
            </p>
            <Link
              to="/contacts"
              className="inline-block bg-white border border-gray-300 text-gray-900 text-sm font-medium rounded-full px-10 py-4 hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors shadow-sm"
            >
              Подобрать программу
            </Link>
          </div>
        </div>

        {/* LAYER 5: табы снизу — белая пилюля с активной голубой */}
        <div className="absolute left-0 right-0 bottom-8 z-30">
          <div className="container-main flex justify-center">
            <div className="inline-flex bg-white rounded-full p-1.5 gap-1 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex-wrap justify-center">
              {serviceTabs.map((tab) => (
                <button
                  key={tab}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    tab === 'Check-up программы'
                      ? 'bg-[#00b5e2] text-white'
                      : 'text-gray-800 hover:text-[#00b5e2]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Программы — сетка карточек ── */}
      <section className="container-main py-10 lg:py-14">
        {/* Дропдаун-фильтр справа */}
        <div className="flex justify-end mb-6">
          <div className="relative">
            <button
              onClick={() => setFilterOpen(o => !o)}
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-6 py-3 text-sm text-gray-900 hover:border-[#00b5e2] transition-colors min-w-[220px] justify-between"
            >
              {filter}
              <svg className={`w-4 h-4 text-gray-400 transition-transform ${filterOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {filterOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden z-30 min-w-[220px]">
                {programFilters.map((f) => (
                  <button
                    key={f}
                    onClick={() => { setFilter(f); setFilterOpen(false) }}
                    className="block w-full text-left px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00b5e2] transition-colors"
                  >
                    {f}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

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
      <section className="bg-white py-14 lg:py-20">
        <div className="container-main">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Ответы на популярные вопросы</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#f4f4f4] rounded-2xl overflow-hidden">
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
