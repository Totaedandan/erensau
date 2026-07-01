import { useState } from 'react'
import { Link } from 'react-router-dom'
import imgOperatingRoom from '@/assets/images/img-operating-room.jpg'
import LogoMark from '@/assets/icons/logo-group.svg?react'
import ContactForm from '@/components/ui/ContactForm'
import CTASlider from '@/components/ui/CTASlider'

const duties = ['Работа с пациентами', 'Работа с базой данных пациентов', 'Ведение учёта приёма пациентов']

const HEART = 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
const VENUS = 'M12 13a4 4 0 100-8 4 4 0 000 8zm0 0v7m-3-3h6'
const MONITOR = 'M4 5h16a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zm5 14h6M7 11l2 2 2-4 2 3h2'
const SCALPEL = 'M14 4l6 6-9 9-4 1 1-4 6-6m-9 13l3-3'
const PULSE = 'M3 12h4l2 6 4-14 2 8h6'
const SCAN = 'M12 3a9 9 0 100 18 9 9 0 000-18zm0 6a3 3 0 100 6 3 3 0 000-6z'
const CROSS = 'M12 5v14M5 12h14'

const vacancies = [
  { title: 'Кардиолог',              icon: HEART },
  { title: 'Гинеколог',              icon: VENUS },
  { title: 'Анестезиолог',           icon: MONITOR },
  { title: 'Хирург',                 icon: SCALPEL },
  { title: 'Кардиохирург',           icon: HEART },
  { title: 'Сосудистый хирург',      icon: PULSE },
  { title: 'Врач МРТ / Рентгенолог', icon: SCAN },
  { title: 'Операционная медсестра', icon: CROSS },
]

export default function VacanciesPage() {
  const [search, setSearch] = useState('')
  const filtered = vacancies.filter(v => v.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Тёмный hero ── */}
      <section className="relative overflow-hidden min-h-[520px]">
        <img src={imgOperatingRoom} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0a1628]/80" />
        <div className="relative z-10 container-main flex flex-col justify-center min-h-[520px] py-16">
          <div className="flex items-start gap-4 mb-6">
            <LogoMark className="h-12 lg:h-14 w-auto flex-shrink-0 mt-1" style={{ ['--fill-0' as string]: '#00b5e2' }} />
            <h1 className="text-5xl lg:text-[64px] font-bold text-white leading-[0.95]">
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
      </section>

      {/* ── Список вакансий + поиск ── */}
      <section id="vacancies" className="container-main py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Список вакансий</h2>
          <div className="flex items-center bg-white border border-gray-200 rounded-full pl-5 pr-1.5 py-1.5 w-full lg:w-96">
            <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Вакансий"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent border-0 px-3 py-2 text-sm outline-none placeholder:text-gray-400"
            />
            <button className="bg-[#00b5e2] text-white text-sm font-medium rounded-full px-7 py-2.5 hover:bg-[#0099c4] transition-colors">
              Поиск
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((v) => (
            <div key={v.title} className="bg-white rounded-2xl p-6 flex flex-col">
              <div className="w-12 h-12 rounded-full bg-[#cdeefb] flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[#00b5e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={v.icon} />
                </svg>
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
