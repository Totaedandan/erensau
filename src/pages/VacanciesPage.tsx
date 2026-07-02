import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroSurgeon from '@/assets/images/hero-surgeon.png'
import logoMark from '@/assets/images/logo-mark.png'
import pictoNeuron from '@/assets/icons/picto-neuron.png'
import pictoUterus from '@/assets/icons/picto-uterus.png'
import pictoMonitor from '@/assets/icons/picto-monitor.png'
import pictoScalpel from '@/assets/icons/picto-scalpel.png'
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

export default function VacanciesPage() {
  const [search, setSearch] = useState('')
  const filtered = vacancies.filter(v => v.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Тёмный hero — карточка ── */}
      <section className="bg-[#f4f4f4] px-3 pt-2">
        <div className="relative overflow-hidden rounded-[28px] min-h-[700px]">
        <img src={heroSurgeon} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: '60% 30%' }} />
        <div className="absolute inset-0 bg-[#0a1628]/55" />
        <div className="relative z-10 px-8 lg:px-24 flex flex-col justify-center min-h-[700px] py-16">
          <div className="flex items-start gap-4 mb-6">
            <img src={logoMark} alt="" className="h-16 lg:h-24 w-auto flex-shrink-0" />
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-[1.1]">
              Станьте частью<br />команды erensau
            </h1>
          </div>
          <p className="text-white/60 text-sm max-w-xl mb-8">
            Мы ищем врачей, медсестёр и административных специалистов, готовых работать на высшем уровне
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#vacancies" className="btn-primary text-sm px-8 py-3.5">Присоединиться</a>
            <a
              href="mailto:info@erensau.kz"
              className="inline-flex items-center gap-3 bg-white rounded-full pl-2 pr-6 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-[#00b5e2] flex items-center justify-center text-white">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span className="text-left leading-tight">
                <span className="block text-[10px] text-gray-400">Для отклика на вакансию</span>
                info@erensau.kz
              </span>
            </a>
          </div>
        </div>
        </div>
      </section>

      {/* ── Список вакансий + поиск ── */}
      <section id="vacancies" className="container-main py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Список вакансий</h2>
          <div className="flex items-center gap-4 w-full lg:w-96">
            <div className="flex items-center flex-1 border-b border-gray-300 pb-2">
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
            <button className="bg-[#00b5e2] text-white text-sm font-medium rounded-full px-8 py-2.5 hover:bg-[#0099c4] transition-colors">
              Поиск
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((v, vi) => (
            <div key={`${v.title}-${vi}`} className="bg-white rounded-2xl p-6 flex flex-col">
              <div className="w-12 h-12 rounded-full bg-[#cdeefb] flex items-center justify-center mb-5">
                <img src={v.icon} alt="" className="w-full h-full" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-0.5">{v.title}</h3>
              <p className="text-gray-400 text-xs mb-5">Полный рабочий день</p>
              <p className="text-gray-900 text-sm font-medium mb-2">Обязанности:</p>
              <ul className="space-y-1.5 mb-6 flex-1">
                {duties.map((d) => (
                  <li key={d} className="text-gray-500 text-xs leading-snug flex gap-2">
                    <span className="text-[#00b5e2]">•</span>{d}
                  </li>
                ))}
              </ul>
              <Link
                to="/contacts"
                className="block text-center text-sm font-medium py-2.5 rounded-full border border-gray-300 text-gray-900 hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors"
              >
                Подать заявку
              </Link>
            </div>
          ))}
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
