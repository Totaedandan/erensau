import { useState } from 'react'
import { Link } from 'react-router-dom'
import doctor1 from '@/assets/images/doctor1.jpg'
import doctor2 from '@/assets/images/doctor2.jpg'
import doctor3 from '@/assets/images/doctor3.jpg'
import doctor4 from '@/assets/images/doctor4.jpg'
import imgDoctorSenior from '@/assets/images/img-doctor-senior.jpg'
import imgDoctorSenior2 from '@/assets/images/img-doctor-senior2.jpg'
import imgDoctorPortrait from '@/assets/images/img-doctor-portrait.jpg'
import imgOperatingRoom from '@/assets/images/img-operating-room.jpg'
import LogoMark from '@/assets/icons/logo-group.svg?react'
import CTASlider from '@/components/ui/CTASlider'

const EXPERIENCE_OPTIONS = ['Любой стаж', 'До 5 лет', '5-10 лет', '10-20 лет', 'Более 20 лет']
const POSITIONS = ['Любая должность', 'Хирург', 'Анестезиолог', 'Терапевт', 'Кардиолог']
const SPECIALTIES = ['Любая специальность', 'Кардиохирургия', 'Сосудистая хирургия', 'Гинекология', 'Пульмонология']

const doctors = [
  { name: 'Куатбеков Кайрат Ниеталиевич',    title: 'к.м.н., ассоциированный профессор', position: 'Руководитель отделения Кардиохирургии и Кардиологии',       exp: 'Стаж более 32 лет', photo: doctor1,           filter: 'Кардиолог'    },
  { name: 'Коспанов Нурсултан Айдарханович', title: 'к.м.н., ассоциированный профессор', position: 'Руководитель профиля сосудистой хирургии',                 exp: 'Стаж более 30 лет', photo: doctor2,           filter: 'Хирург'       },
  { name: 'Ешмуратов Темур Шерханович',      title: 'к.м.н., ассоциированный профессор', position: 'Руководитель профиля Торакальной хирургии и Пульмонологии', exp: 'Стаж более 31 год', photo: doctor3,           filter: 'Хирург'       },
  { name: 'Кусаинов Адилет Шингисович',      title: 'к.м.н. (PhD), врач анестезиолог-реаниматолог высшей категории', position: 'Руководитель профиля ОАРИТ',           exp: 'Стаж более 33 лет', photo: doctor4,           filter: 'Анестезиолог' },
  { name: 'Жаксыбеков Серик Маратович',  title: 'к.м.н., ассоциированный профессор', position: 'Руководитель профиля сосудистой хирургии', exp: 'Стаж более 20 лет', photo: imgDoctorSenior,   filter: 'Хирург'       },
  { name: 'Смагулова Гульнар Аскаровна', title: 'к.м.н.',                    position: 'Анестезиолог-реаниматолог, ARNT',          exp: 'Стаж более 14 лет', photo: imgDoctorSenior2,  filter: 'Анестезиолог' },
  { name: 'Темиров Алибек Нурланович',   title: 'к.м.н.',                    position: 'Пульмонолог высшей категории',             exp: 'Стаж более 11 лет', photo: imgDoctorPortrait, filter: 'Пульмонолог'  },
  { name: 'Касымова Дина Болатовна',     title: 'к.м.н.',                    position: 'Кардиолог высшей категории',               exp: 'Стаж более 9 лет',  photo: doctor2,           filter: 'Кардиолог'    },
  { name: 'Мусабеков Ержан Алиевич',     title: 'к.м.н.',                    position: 'Хирург общей практики',                    exp: 'Стаж более 13 лет', photo: doctor3,           filter: 'Хирург'       },
  { name: 'Тоқтарова Гүлмира Серікқызы', title: 'врач высшей категории',     position: 'Гинеколог, специалист по эндокринологии',  exp: 'Стаж более 8 лет',  photo: doctor4,           filter: 'Гинеколог'    },
  { name: 'Ахметов Бауыржан Мратович',   title: 'к.м.н., ассоциированный профессор', position: 'Кардиолог, ангиолог',                       exp: 'Стаж более 16 лет', photo: imgDoctorSenior,   filter: 'Кардиолог'    },
  { name: 'Нурмагамбетова Алия',         title: 'врач высшей категории',     position: 'Анестезиолог-реаниматолог',                exp: 'Стаж более 7 лет',  photo: doctor1,           filter: 'Анестезиолог' },
]

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

      {/* ── Тёмный hero — фото операционной на фон + «60+ экспертов» ── */}
      <section className="relative overflow-hidden min-h-[600px]">
        <img
          src={imgOperatingRoom}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0a1628]/80" />

        <div className="relative z-10 container-main pt-20 lg:pt-24 pb-28 min-h-[600px] flex flex-col justify-center">
          {/* Логомарк + заголовок */}
          <div className="flex items-start gap-4 mb-8">
            <LogoMark className="h-12 lg:h-16 w-auto flex-shrink-0 mt-1" style={{ ['--fill-0' as string]: '#00b5e2' }} />
            <div>
              <h1 className="text-5xl lg:text-[72px] font-bold text-white leading-[0.95] tracking-tight mb-3">
                Командная<br />модель
              </h1>
              <p className="text-white/70 text-base lg:text-lg max-w-md leading-snug">
                высокой подготовки, объединяющая технологии, опыт и заботу
              </p>
            </div>
          </div>

          {/* Карточка «60+ экспертов» — белая */}
          <div className="bg-white rounded-3xl p-6 max-w-sm shadow-xl">
            <div className="text-3xl font-bold text-gray-900 mb-3">
              <span className="text-[#00b5e2]">60+</span> экспертов
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Ассоциированные профессоры, доктора медицинских наук, кандидаты
              медицинских наук, врачи высшей и первой категории с многолетним
              международным опытом.
            </p>
          </div>
        </div>
      </section>

      {/* Поисковый бар — выходит вверх над секцией фильтров, перекрывая низ hero */}
      <section className="bg-[#f4f4f4] relative">
        <div className="container-main relative">
          <div className="-mt-12 lg:-mt-14 relative z-20 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-3 flex flex-col lg:flex-row items-stretch gap-3">
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

      {/* ── Сетка врачей (карточки в стиле главной) ── */}
      <section className="container-main py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((doc) => (
            <article key={doc.name} className="bg-[#ececec] rounded-3xl p-4 flex flex-col">
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
                <p className="text-[#00b5e2] text-[11px] mb-2 leading-snug">{doc.title}</p>
                <h3 className="font-bold text-gray-900 text-[15px] leading-tight mb-2">{doc.name}</h3>
                <p className="text-gray-500 text-xs leading-snug">{doc.position}</p>
              </div>

              {/* Низ: «Записаться» + кнопка с лупой */}
              <div className="flex items-center gap-2 mt-5 px-1">
                <Link to="/contacts" className="bg-white rounded-full px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors">
                  Записаться
                </Link>
                <button
                  aria-label="Подробнее"
                  className="ml-auto w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 17a6 6 0 100-12 6 6 0 000 12z" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
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
