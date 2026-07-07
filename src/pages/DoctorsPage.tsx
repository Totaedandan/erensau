import { useState } from 'react'
import { Link } from 'react-router-dom'
import docKuatbekov from '@/assets/images/doc-kuatbekov.png'
import docKospanov from '@/assets/images/doc-kospanov.png'
import docEshmuratov from '@/assets/images/doc-eshmuratov.png'
import docKusainov from '@/assets/images/doc-kusainov.png'
import docIzhanov from '@/assets/images/doc-izhanov.png'
import docAkanov from '@/assets/images/doc-akanov.png'
import doctorsHeroBg from '@/assets/images/doctors-hero-bg.png'
import cardBlur from '@/assets/images/card-blur.png'
import logoMark from '@/assets/images/logo-mark.png'
import CTASlider from '@/components/ui/CTASlider'
import MobileCarousel from '@/components/ui/MobileCarousel'

const EXPERIENCE_OPTIONS = ['Любой стаж', 'До 5 лет', '5-10 лет', '10-20 лет', 'Более 20 лет']
const POSITIONS = ['Любая должность', 'Хирург', 'Анестезиолог', 'Терапевт', 'Кардиолог']
const SPECIALTIES = ['Любая специальность', 'Кардиохирургия', 'Сосудистая хирургия', 'Гинекология', 'Пульмонология']

// В макете сетка — 4 базовых врача, повторённые в 3 рядах (12 карточек)
const baseDoctors = [
  { name: 'Куатбеков Кайрат Ниеталиевич',    title: 'к.м.н., ассоциированный профессор', position: 'Руководитель отделения Кардиохирургии и Кардиологии',       exp: 'Стаж более 32 лет', photo: docKuatbekov,  filter: 'Кардиолог'    },
  { name: 'Коспанов Нурсултан Айдарханович', title: 'к.м.н., ассоциированный профессор', position: 'Руководитель профиля сосудистой хирургии',                 exp: 'Стаж более 30 лет', photo: docKospanov,   filter: 'Хирург'       },
  { name: 'Ешмуратов Темур Шерханович',      title: 'к.м.н., ассоциированный профессор', position: 'Руководитель профиля Торакальной хирургии и Пульмонологии', exp: 'Стаж более 31 год', photo: docEshmuratov, filter: 'Хирург'       },
  { name: 'Кусаинов Адилет Шингисович',      title: 'к.м.н. (PhD), врач анестезиолог-реаниматолог высшей категории', position: 'Руководитель профиля ОАРИТ',   exp: 'Стаж более 33 лет', photo: docKusainov,   filter: 'Анестезиолог' },
  { name: 'Ижанов Ерген Бахчанович',         title: 'Доктор медицинских наук, профессор', position: 'Руководитель профиля общей хирургии и онкологии',         exp: 'Стаж более 32 лет', photo: docIzhanov,    filter: 'Хирург'       },
  { name: 'Аканов Ержан Кусманович',         title: 'к.м.н., профессор',                  position: 'Руководитель узких хирургических профилей',               exp: 'Стаж более 28 лет', photo: docAkanov,     filter: 'Хирург'       },
]
const doctors = [...baseDoctors, ...baseDoctors]

// Карточка врача — общая для мобильной карусели и десктопной сетки
function DoctorGridCard({ doc }: { doc: (typeof baseDoctors)[number] }) {
  return (
    <article className="bg-[#ededed] rounded-3xl p-4 flex flex-col h-full">
      {/* Фото со «стажем» — пилюлей сверху */}
      <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-5">
        <span className="absolute top-4 left-4 bg-white rounded-full px-4 py-2 text-[15px] font-semibold text-gray-900 shadow-sm z-10">
          {doc.exp}
        </span>
        <img
          src={doc.photo}
          alt={doc.name}
          className="absolute inset-x-0 bottom-0 top-16 lg:top-[70px] object-cover object-top scale-[1.17] origin-top hover:scale-[1.22] transition-transform duration-300"
        />
        {/* Плавное затухание низа фото в фон карточки */}
        <img src={cardBlur} alt="" aria-hidden className="absolute inset-x-0 bottom-0 w-full h-[20%] pointer-events-none select-none" />
      </div>

      {/* Текст: звание → имя → должность */}
      <div className="px-1 flex-1">
        <p className="text-[#00b5e2] text-[13px] mb-2 leading-snug">{doc.title}</p>
        <h3 className="font-semibold text-gray-900 text-lg leading-tight mb-2">{doc.name}</h3>
        <p className="text-gray-600 text-[13px] leading-snug">{doc.position}</p>
      </div>

      {/* Низ: «Записаться» + кнопка с лупой */}
      <div className="flex items-center gap-2 mt-5 px-1">
        <Link to="/contacts" className="bg-white rounded-full px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
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

// Простой дропдаун для фильтров — серая пилюля по макету
function Dropdown({ placeholder, options, width }: { placeholder: string; options: string[]; width: string }) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<string | null>(null)
  return (
    <div className={`relative ${width}`}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full h-[51px] bg-[#ececec] rounded-full pl-5 pr-[18px] text-[16px] tracking-[-0.32px] text-black flex items-center justify-between hover:bg-[#e3e3e3] transition-colors"
      >
        <span className="truncate">{value ?? placeholder}</span>
        <svg className={`w-[9px] h-[5px] flex-shrink-0 ml-2 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 9 5" fill="none">
          <path d="M0.7 0.7L4.5 4L8.3 0.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-lg overflow-hidden z-30">
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

      {/* ── Тёмный hero — фото операционной + «60+ экспертов» ── */}
      <section className="bg-[#f4f4f4] px-2.5 pt-2 lg:px-3 lg:pt-0 lg:max-w-[1440px] lg:mx-auto">
        <div className="relative overflow-hidden rounded-[24px] lg:rounded-[28px] min-h-[618px] lg:aspect-[1414/707]">
          <img
            src={doctorsHeroBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-[50%_22%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-black/60 lg:bg-gradient-to-r lg:from-black lg:from-[15%] lg:via-black/55 lg:via-[55%] lg:to-transparent" />

          <div className="relative z-10 px-5 lg:px-[96px] pt-10 lg:pt-[128px] pb-20 lg:pb-24">
            {/* Логомарк + заголовок */}
            <div className="flex items-start gap-3.5 lg:gap-5 mb-4 lg:mb-5">
              <img src={logoMark} alt="" className="h-12 lg:h-[109px] w-auto flex-shrink-0" />
              <h1 className="text-[27px] lg:text-5xl font-semibold text-white leading-[1.15] lg:leading-[1.1] tracking-tight">
                Командная<br />модель
              </h1>
            </div>
            <p className="text-white/90 lg:text-white/85 text-sm lg:text-[15px] max-w-[240px] lg:max-w-[245px] leading-snug lg:leading-relaxed mb-52 lg:mb-[68px]">
              высокой подготовки, объединяющая технологии, опыт и заботу
            </p>

            {/* Карточка «60+ экспертов» — белая */}
            <div className="bg-white rounded-3xl p-6 lg:p-7 w-full lg:w-[358px] lg:max-w-full shadow-xl">
              <div className="text-[24px] lg:text-[28px] font-bold text-gray-900 mb-3">
                <span className="text-[#00b5e2]">60+</span> экспертов
              </div>
              <p className="text-gray-700 text-[13px] leading-relaxed">
                Ассоциированные профессоры, доктора медицинских наук, кандидаты
                медицинских наук, врачи высшей и первой категории с многолетним
                международным опытом.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Поисковый бар — наполовину перекрывает низ hero (Figma 2672:10873).
          Секция без фона: серый bg закрашивал бы низ hero из-за схлопывания -mt */}
      <section className="relative">
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

          {/* Десктоп: белая пилюля 1200×63 — наполовину перекрывает низ hero */}
          <div className="hidden lg:flex items-center -mt-8 relative z-20 bg-white rounded-[28px] shadow-[-2px_16px_25px_0px_rgba(0,0,0,0.04)] h-[63px] px-2 max-w-[1200px] mx-auto">
            {/* ФИО врача — серая пилюля с лупой, кнопка «Поиск» на правом торце */}
            <div className="flex items-center w-[463px] h-[51px] bg-[#ececec] rounded-full pl-[17px]">
              <svg className="w-[25px] h-[25px] text-black opacity-20 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="ФИО врача"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 min-w-0 bg-transparent border-0 px-[13px] text-[16px] tracking-[-0.32px] text-black outline-none placeholder:text-black/30"
              />
              <button className="h-full flex-shrink-0 bg-[#00b5e2] text-white text-[18px] font-semibold tracking-[-0.36px] rounded-full px-9 hover:bg-[#0099c4] transition-colors">
                Поиск
              </button>
            </div>

            {/* Дропдауны: Стаж / Должность / Специальность */}
            <div className="ml-auto flex items-center gap-2">
              <Dropdown placeholder="Стаж" options={EXPERIENCE_OPTIONS} width="w-[153px]" />
              <Dropdown placeholder="Анестезиолог" options={POSITIONS} width="w-[226px]" />
              <Dropdown placeholder="Кардиохирургия" options={SPECIALTIES} width="w-[256px]" />
            </div>
          </div>
        </div>

      </section>

      {/* ── Врачи: карусель на мобилке, сетка на десктопе ── */}
      <section className="pt-7 pb-8 lg:pt-[58px] lg:pb-16">
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
