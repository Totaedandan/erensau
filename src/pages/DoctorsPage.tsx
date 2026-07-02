import { useState } from 'react'
import { Link } from 'react-router-dom'
import doctor1 from '@/assets/images/doctor1.jpg'
import doctor2 from '@/assets/images/doctor2.jpg'
import doctor3 from '@/assets/images/doctor3.jpg'
import doctor4 from '@/assets/images/doctor4.jpg'
import heroSurgeon from '@/assets/images/hero-surgeon.png'
import logoMark from '@/assets/images/logo-mark.png'
import CTASlider from '@/components/ui/CTASlider'
import MobileCarousel from '@/components/ui/MobileCarousel'

const EXPERIENCE_OPTIONS = ['Любой стаж', 'До 5 лет', '5-10 лет', '10-20 лет', 'Более 20 лет']
const POSITIONS = ['Любая должность', 'Хирург', 'Анестезиолог', 'Терапевт', 'Кардиолог']
const SPECIALTIES = ['Любая специальность', 'Кардиохирургия', 'Сосудистая хирургия', 'Гинекология', 'Пульмонология']

// В макете сетка — 4 базовых врача, повторённые в 3 рядах (12 карточек)
const baseDoctors = [
  { name: 'Куатбеков Кайрат Ниеталиевич',    title: 'к.м.н., ассоциированный профессор', position: 'Руководитель отделения Кардиохирургии и Кардиологии',       exp: 'Стаж более 32 лет', photo: doctor1, filter: 'Кардиолог'    },
  { name: 'Коспанов Нурсултан Айдарханович', title: 'к.м.н., ассоциированный профессор', position: 'Руководитель профиля сосудистой хирургии',                 exp: 'Стаж более 30 лет', photo: doctor2, filter: 'Хирург'       },
  { name: 'Ешмуратов Темур Шерханович',      title: 'к.м.н., ассоциированный профессор', position: 'Руководитель профиля Торакальной хирургии и Пульмонологии', exp: 'Стаж более 31 год', photo: doctor3, filter: 'Хирург'       },
  { name: 'Кусаинов Адилет Шингисович',      title: 'к.м.н. (PhD), врач анестезиолог-реаниматолог высшей категории', position: 'Руководитель профиля ОАРИТ',   exp: 'Стаж более 33 лет', photo: doctor4, filter: 'Анестезиолог' },
]
const doctors = [...baseDoctors, ...baseDoctors, ...baseDoctors]

// Карточка врача — общая для мобильной карусели и десктопной сетки
function DoctorGridCard({ doc }: { doc: (typeof baseDoctors)[number] }) {
  return (
    <article className="bg-[#ededed] rounded-3xl p-4 flex flex-col h-full">
      {/* Фото со «стажем» — пилюлей сверху */}
      <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-5">
        <span className="absolute top-3 left-3 bg-white rounded-full px-3.5 py-1.5 text-[11px] font-medium text-gray-900 shadow-sm z-10">
          {doc.exp}
        </span>
        <img
          src={doc.photo}
          alt={doc.name}
          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Текст: звание → имя → должность */}
      <div className="px-1 flex-1">
        <p className="text-[#00b5e2] text-[13px] mb-2 leading-snug">{doc.title}</p>
        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">{doc.name}</h3>
        <p className="text-gray-600 text-[13px] leading-snug">{doc.position}</p>
      </div>

      {/* Низ: «Записаться» + кнопка с лупой */}
      <div className="flex items-center gap-2 mt-5 px-1">
        <Link to="/contacts" className="bg-white rounded-full px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors">
          Записаться
        </Link>
        <Link
          to="/doctors/kuatbekov"
          aria-label="Подробнее"
          className="ml-auto w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 17a6 6 0 100-12 6 6 0 000 12z" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

// Простой дропдаун для фильтров
function Dropdown({ placeholder, options }: { placeholder: string; options: string[] }) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<string | null>(null)
  return (
    <div className="relative min-w-[200px]">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full bg-white border border-gray-100 rounded-xl px-5 py-3.5 text-sm text-gray-700 flex items-center justify-between hover:border-[#00b5e2] transition-colors"
      >
        <span className={value ? 'text-gray-900' : 'text-gray-700'}>{value ?? placeholder}</span>
        <svg className={`w-4 h-4 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden z-30">
          {options.map((o) => (
            <button
              key={o}
              onClick={() => { setValue(o); setOpen(false) }}
              className="block w-full text-left px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00b5e2] transition-colors"
            >
              {o}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function DoctorsPage() {
  const [search, setSearch] = useState('')
  const filtered = doctors.filter(d => {
    if (!search) return true
    const q = search.toLowerCase()
    return d.name.toLowerCase().includes(q)
      || d.position.toLowerCase().includes(q)
      || d.title.toLowerCase().includes(q)
  })

  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Тёмный hero — карточка с фото операционной + «60+ экспертов» ── */}
      <section className="bg-[#f4f4f4] px-2.5 lg:px-3 pt-2">
        <div className="relative overflow-hidden rounded-[24px] lg:rounded-[28px] min-h-[640px] lg:min-h-[720px]">
          <img
            src={heroSurgeon}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-[50%_30%] lg:object-[60%_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/40 to-[#0a1628]/50 lg:bg-gradient-to-r lg:from-[#0a1628]/80 lg:via-[#0a1628]/45 lg:to-[#0a1628]/25" />

          <div className="relative z-10 px-5 lg:px-28 pt-10 lg:pt-24 pb-20 lg:pb-24">
            {/* Логомарк + заголовок */}
            <div className="flex items-start gap-3.5 lg:gap-4 mb-4 lg:mb-6">
              <img src={logoMark} alt="" className="h-12 lg:h-28 w-auto flex-shrink-0" />
              <h1 className="text-[27px] lg:text-5xl font-bold text-white leading-[1.15] lg:leading-[1.1] tracking-tight">
                Командная<br />модель
              </h1>
            </div>
            <p className="text-white/90 lg:text-white/80 text-sm lg:text-[15px] max-w-[240px] lg:max-w-[300px] leading-snug mb-52 lg:mb-14">
              высокой подготовки, объединяющая технологии, опыт и заботу
            </p>

            {/* Карточка «60+ экспертов» — белая */}
            <div className="bg-white rounded-3xl p-6 w-full lg:w-[355px] lg:max-w-full shadow-xl">
              <div className="text-[24px] lg:text-[26px] font-bold text-gray-900 mb-3">
                <span className="text-[#00b5e2]">60+</span> экспертов
              </div>
              <p className="text-gray-600 lg:text-gray-500 text-[13px] leading-relaxed">
                Ассоциированные профессоры, доктора медицинских наук, кандидаты
                медицинских наук, врачи высшей и первой категории с многолетним
                международным опытом.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Поисковый бар — выходит вверх над секцией фильтров, перекрывая низ hero */}
      <section className="bg-[#f4f4f4] relative">
        <div className="container-main relative">

          {/* Мобилка: пилюля поиска с иконкой фильтров */}
          <div className="lg:hidden -mt-7 relative z-20 flex items-center bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.1)] pl-5 pr-2 py-2">
            <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="ФИО врача"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent border-0 px-3 py-2.5 text-sm outline-none placeholder:text-gray-400"
            />
            <button aria-label="Фильтры" className="w-10 h-10 rounded-full bg-[#f4f4f4] flex items-center justify-center text-gray-500 flex-shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" d="M4 7h16M7 12h10M10 17h4" />
              </svg>
            </button>
          </div>

          {/* Десктоп: поиск + три дропдауна */}
          <div className="hidden lg:flex -mt-16 lg:-mt-24 relative z-20 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-3 flex-col lg:flex-row items-stretch gap-3">
            {/* ФИО врача — поле + кнопка «Поиск» */}
            <div className="flex items-center flex-1 min-w-[300px] bg-white border border-gray-100 rounded-xl pl-4 pr-1.5 py-1">
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="ФИО врача"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent border-0 px-3 py-2.5 text-sm outline-none placeholder:text-gray-400"
              />
              <button className="bg-[#00b5e2] text-white text-sm font-medium rounded-xl px-7 py-2.5 hover:bg-[#0099c4] transition-colors">
                Поиск
              </button>
            </div>

            {/* Дропдаун: Стаж */}
            <Dropdown placeholder="Стаж" options={EXPERIENCE_OPTIONS} />
            {/* Дропдаун: Должность */}
            <Dropdown placeholder="Анестезиолог" options={POSITIONS} />
            {/* Дропдаун: Специальность */}
            <Dropdown placeholder="Кардиохирургия" options={SPECIALTIES} />
          </div>
        </div>

      </section>

      {/* ── Врачи: карусель на мобилке, сетка на десктопе ── */}
      <section className="py-12 lg:py-16">
        <div className="lg:hidden">
          <MobileCarousel arrowsTop="35%">
            {filtered.map((doc, i) => (
              <DoctorGridCard key={`${doc.name}-m${i}`} doc={doc} />
            ))}
          </MobileCarousel>
        </div>

        <div className="container-main hidden lg:block">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((doc, i) => (
              <DoctorGridCard key={`${doc.name}-${i}`} doc={doc} />
            ))}
          </div>
        </div>

        {/* Пустое состояние */}
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 text-sm py-12">
            По вашему запросу ничего не найдено.
          </p>
        )}
      </section>

      {/* ── CTA-слайдер ── */}
      <CTASlider />

    </div>
  )
}
