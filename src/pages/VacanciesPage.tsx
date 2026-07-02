import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroSurgeon from '@/assets/images/hero-surgeon.png'
import logoMark from '@/assets/images/logo-mark.png'
import pictoNeuron from '@/assets/icons/picto-neuron.png'
import pictoUterus from '@/assets/icons/picto-uterus.png'
import pictoMonitor from '@/assets/icons/picto-monitor.png'
import pictoScalpel from '@/assets/icons/picto-scalpel.png'
import MobileCarousel from '@/components/ui/MobileCarousel'
import ContactForm from '@/components/ui/ContactForm'
import CTASlider from '@/components/ui/CTASlider'

const duties = ['Работа с пациентами', 'Работа с базой данных пациентов', 'Ведение учета приема пациентов']

// В макете 2 ряда одних и тех же 4 вакансий (плейсхолдер)
const baseVacancies = [
  { title: 'Кардиолог',    icon: pictoNeuron },
  { title: 'Гинеколог',    icon: pictoUterus },
  { title: 'Анестезиолог', icon: pictoMonitor },
  { title: 'Хирург',       icon: pictoScalpel },
]
const vacancies = [...baseVacancies, ...baseVacancies]

// Карточка вакансии — общая для мобильной карусели и десктопной сетки
function VacancyCard({ v }: { v: (typeof baseVacancies)[number] }) {
  return (
    <div className="bg-white rounded-3xl lg:rounded-2xl p-6 flex flex-col h-full">
      <div className="w-14 h-14 lg:w-12 lg:h-12 rounded-full bg-[#cdeefb] flex items-center justify-center mb-5">
        <img src={v.icon} alt="" className="w-full h-full" />
      </div>
      <h3 className="font-bold text-gray-900 text-lg mb-0.5">{v.title}</h3>
      <p className="text-gray-400 text-base lg:text-xs mb-4 lg:mb-5">Полный рабочий день</p>
      <p className="text-gray-900 text-sm font-medium mb-2">Обязанности:</p>
      <ul className="space-y-1.5 mb-6 flex-1">
        {duties.map((d) => (
          <li key={d} className="text-gray-600 lg:text-gray-500 text-[13px] lg:text-xs leading-snug flex gap-2">
            <span className="text-gray-600 lg:text-[#00b5e2]">•</span>{d}
          </li>
        ))}
      </ul>
      <Link
        to="/contacts"
        className="block text-center text-sm font-medium py-3 lg:py-2.5 rounded-full border border-gray-300 text-gray-900 hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors"
      >
        Подать заявку
      </Link>
    </div>
  )
}

export default function VacanciesPage() {
  const [search, setSearch] = useState('')
  const filtered = vacancies.filter(v => v.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Тёмный hero — карточка ── */}
      <section className="bg-[#f4f4f4] px-2.5 lg:px-3 pt-2">
        <div className="relative overflow-hidden rounded-[24px] lg:rounded-[28px] min-h-[720px] lg:min-h-[700px]">
        <img src={heroSurgeon} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: '60% 30%' }} />
        <div className="absolute inset-0 bg-[#0a1628]/55" />
        <div className="relative z-10 px-5 lg:px-24 flex flex-col justify-start lg:justify-center min-h-[720px] lg:min-h-[700px] pt-10 pb-6 lg:py-16">
          <div className="flex items-start gap-3.5 lg:gap-4 mb-5 lg:mb-6">
            <img src={logoMark} alt="" className="h-12 lg:h-24 w-auto flex-shrink-0" />
            <h1 className="text-[25px] lg:text-5xl font-bold text-white leading-[1.2] lg:leading-[1.1]">
              Станьте частью<br />команды erensau
            </h1>
          </div>
          <p className="text-white/70 lg:text-white/60 text-sm max-w-[280px] lg:max-w-xl mb-8">
            Мы ищем врачей, медсестёр и административных специалистов, готовых работать на высшем уровне
          </p>
          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-3.5 lg:gap-3 mt-auto lg:mt-0">
            <a href="#vacancies" className="bg-[#00b5e2] text-white text-sm font-medium rounded-full px-8 py-4 lg:py-3.5 text-center hover:bg-[#0099c4] transition-colors">Присоединиться</a>
            <a
              href="mailto:info@erensau.kz"
              className="inline-flex items-center gap-3 bg-white rounded-full pl-2.5 lg:pl-2 pr-6 py-2.5 lg:py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
            >
              <span className="w-10 h-10 lg:w-8 lg:h-8 rounded-full bg-[#00b5e2] flex items-center justify-center text-white flex-shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span className="text-left leading-tight">
                <span className="block text-[11px] lg:text-[10px] text-gray-500 lg:text-gray-400">Для отклика на вакансию</span>
                <span className="underline underline-offset-2 lg:no-underline">info@erensau.kz</span>
              </span>
            </a>
          </div>
        </div>
        </div>
      </section>

      {/* ── Список вакансий + поиск ── */}
      <section id="vacancies" className="py-12 lg:py-16">
        <div className="container-main flex flex-col items-center lg:flex-row lg:items-center justify-between gap-6 lg:gap-5 mb-9 lg:mb-8">
          <h2 className="text-[26px] lg:text-3xl font-bold text-gray-900 text-center">Список вакансий</h2>
          <div className="flex flex-col items-center lg:flex-row lg:items-center gap-5 lg:gap-4 w-full lg:w-96">
            <div className="flex items-center w-full max-w-[300px] lg:max-w-none lg:flex-1 border-b border-gray-300 pb-2">
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Вакансия"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent border-0 px-3 text-sm outline-none placeholder:text-gray-400"
              />
            </div>
            <button className="bg-[#00b5e2] text-white text-base lg:text-sm font-medium rounded-full px-10 lg:px-8 py-3 lg:py-2.5 hover:bg-[#0099c4] transition-colors">
              Поиск
            </button>
          </div>
        </div>

        {/* Мобильная карусель вакансий */}
        <div className="lg:hidden">
          <MobileCarousel arrowsTop="42%">
            {filtered.map((v, vi) => (
              <VacancyCard key={`${v.title}-m${vi}`} v={v} />
            ))}
          </MobileCarousel>
        </div>

        <div className="container-main hidden lg:block">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((v, vi) => (
              <VacancyCard key={`${v.title}-${vi}`} v={v} />
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="#vacancies" className="inline-block bg-white border border-gray-200 text-gray-900 text-sm font-medium rounded-full px-8 py-3.5 hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors">
            Смотреть все вакансии
          </a>
        </div>
      </section>

      {/* ── Форма «Мы ищем специалистов» ── */}
      <ContactForm heading={'Мы ищем специалистов,\nкоторые разделяют ценности erensau'} />

      {/* ── CTA-слайдер ── */}
      <CTASlider />

    </div>
  )
}
