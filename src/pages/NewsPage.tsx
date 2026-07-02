import { useState } from 'react'
import { Link } from 'react-router-dom'
import imgDoctorPortrait from '@/assets/images/img-doctor-portrait.jpg'
import imgDoctorSenior from '@/assets/images/img-doctor-senior.jpg'
import imgOperatingRoom from '@/assets/images/img-operating-room.jpg'
import imgClinicBuilding from '@/assets/images/img-clinic-building.jpg'
import post1 from '@/assets/images/post1.jpg'
import post2 from '@/assets/images/post2.jpg'
import post4 from '@/assets/images/post4.jpg'
import LogoMark from '@/assets/icons/logo-group.svg?react'
import doctor1 from '@/assets/images/doctor1.jpg'
import pictoHeart from '@/assets/icons/picto-heart.png'
import CTASlider from '@/components/ui/CTASlider'
import MobileCarousel from '@/components/ui/MobileCarousel'

const heroTabs = ['Новости клиники', 'Конференции', 'Научные публикации']

const latestPosts = [
  { title: 'Единичный случай в мировой практике',         date: '24 июля 2024', img: imgDoctorPortrait },
  { title: 'Врачи Erensau Hospital спасли жизнь пациенту', date: '24 июля 2024', img: post2 },
  { title: 'Пневмония оказалась ловушкой. В Алматы…',      date: '24 июля 2024', img: imgOperatingRoom },
  { title: 'В Алматы спасли новорождённую…',               date: '24 июля 2024', img: imgClinicBuilding },
]

const featured = {
  title:    '«Они её вытащили…»: как работает Erensau',
  excerpt:  'В этом материале главный врач клиники рассказывает об уникальной командной модели подготовки специалистов и о том, как коллаборация между отделениями влияет на качество лечения.',
  date:     '25 окт 2025',
  category: 'О клинике',
  img:      imgDoctorPortrait,
}

const lectures = [
  { title: 'Современные подходы в хирургии',                  author: 'Ижанов Ерген Бахчанович',     img: imgDoctorSenior },
  { title: 'Малоинвазивные технологии в сосудистой хирургии', author: 'Коспанов Нурсултан Айдарханович', img: post1 },
  { title: 'Профилактика и лечение заболеваний органов',      author: 'Ешмуратов Темур Шерханович',   img: post2 },
  { title: 'Современная анестезиология и интенсивная терапия', author: 'Кусаинов Адилет Шингисович',  img: post4 },
]

const recommended = [
  { title: 'Редчайшая операция длилась больше 8 часов',   date: '24 июля 2024', img: post1 },
  { title: 'За привычными симптомами скрывался…',          date: '24 июля 2024', img: post2 },
  { title: 'Редкая операция на сердце новорождённой',      date: '24 июля 2024', img: imgDoctorSenior },
  { title: 'Операция потребовала слаженной работы',        date: '24 июля 2024', img: post4 },
]

// Мини-флаг Казахстана для поля телефона в модалке
const KzMiniFlag = () => (
  <svg className="w-5 h-3.5 rounded-sm flex-shrink-0" viewBox="0 0 30 20" fill="none">
    <rect width="30" height="20" fill="#00AFCA" />
    <circle cx="11" cy="10" r="3.2" fill="#FFC107" />
    <path d="M8 10h6M9.5 7.5l3 5M9.5 12.5l3-5" stroke="#FFC107" strokeWidth="0.6" />
  </svg>
)

const regSelects = ['Профиль', 'Специализация', 'Город']

// Модальное окно «Регистрационная форма» для конференции
function RegistrationModal({ onClose }: { onClose: () => void }) {
  const inputCls =
    'w-full bg-[#f1f1f3] rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#00b5e2]/40 placeholder:text-gray-400 transition'
  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto">
      {/* Осветляющий оверлей */}
      <div className="absolute inset-0 bg-white/75" onClick={onClose} />
      <div className="relative min-h-full flex items-center justify-center p-4">
        <div className="relative bg-white rounded-[28px] shadow-[0_24px_80px_rgba(0,0,0,0.14)] w-full max-w-[465px] px-8 lg:px-10 py-9">
          {/* Закрыть */}
          <button
            onClick={onClose}
            aria-label="Закрыть"
            className="absolute right-7 top-7 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h3 className="text-[26px] font-bold text-gray-900 text-center mb-7">Регистрационная форма</h3>

          <form className="space-y-3.5" onSubmit={(e) => { e.preventDefault(); onClose() }}>
            <input type="text" placeholder="Ваше ФИО" className={inputCls} />

            {regSelects.map((label) => (
              <div key={label} className="relative">
                <select className={`${inputCls} appearance-none text-gray-400 pr-10 cursor-pointer`} defaultValue="">
                  <option value="" disabled>{label}</option>
                  <option value="1">{label} 1</option>
                  <option value="2">{label} 2</option>
                </select>
                <svg className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            ))}

            {/* Телефон с кодом страны */}
            <div className="flex items-center gap-2.5 bg-[#f1f1f3] rounded-lg px-4 py-3">
              <svg className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
              <KzMiniFlag />
              <input type="tel" placeholder="+7 000 000 00 00" className="flex-1 bg-transparent border-0 outline-none text-sm placeholder:text-gray-400" />
            </div>

            <input type="email" placeholder="Электронная почта" className={inputCls} />

            <label className="flex items-center gap-2.5 pt-1 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#00b5e2]" />
              <span className="text-xs text-gray-500">Даю соглашение на обработку медицинских данных</span>
            </label>

            <button
              type="submit"
              className="w-full bg-[#00b5e2] text-white text-base font-medium rounded-full py-4 mt-2 hover:bg-[#0099c4] transition-colors"
            >
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default function NewsPage() {
  const [regOpen, setRegOpen] = useState(false)
  const [mobileTab, setMobileTab] = useState(heroTabs[0])
  const [mobileTabOpen, setMobileTabOpen] = useState(false)
  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Hero — светлая карточка, контент внизу ── */}
      <section className="bg-[#f4f4f4] px-3 pt-2">
        <div className="relative overflow-hidden rounded-[24px] lg:rounded-[28px] min-h-[640px] lg:min-h-[760px]">
          <img src={post1} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />

          <div className="relative z-10 px-6 lg:px-24 flex flex-col justify-end min-h-[640px] lg:min-h-[760px] pb-16 lg:pb-20">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 lg:gap-8">
              <div className="flex items-start gap-3 lg:gap-4">
                <LogoMark className="h-11 lg:h-20 w-auto flex-shrink-0" style={{ ['--fill-0' as string]: '#ffffff' }} />
                <h1 className="text-[27px] lg:text-5xl font-bold text-white leading-[1.2] lg:leading-[1.05]">
                  Новости<br />и исследования
                </h1>
              </div>
              <p className="text-white/90 text-[13px] leading-relaxed max-w-[300px] lg:max-w-sm lg:pb-1">
                Erensau Hospital - не только практика, но и
                исследования. Следите за новостями клиники,
                научными публикациями и участием наших врачей
                в международных конференциях
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Табы — наполовину на границе hero: на мобилке голубой дропдаун */}
      <div className="lg:hidden container-main relative z-30 -mt-6 flex justify-center">
        <div className="relative">
          <button
            onClick={() => setMobileTabOpen(o => !o)}
            className="flex items-center gap-2 bg-[#00b5e2] text-white text-sm font-medium rounded-full px-8 py-3.5 shadow-lg"
          >
            {mobileTab}
            <svg className={`w-4 h-4 transition-transform ${mobileTabOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileTabOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white rounded-2xl shadow-lg py-1.5 min-w-[230px] z-40">
              {heroTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setMobileTab(tab); setMobileTabOpen(false) }}
                  className={`block w-[calc(100%-2.5rem)] mx-5 text-left py-2.5 text-sm border-b border-gray-200 last:border-b-0 ${
                    mobileTab === tab ? 'text-[#00b5e2]' : 'text-gray-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="hidden lg:flex container-main relative z-20 -mt-6 justify-start">
        <div className="inline-flex bg-white rounded-full p-1.5 gap-1 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex-wrap">
          {heroTabs.map((tab, i) => (
            <button
              key={tab}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                i === 0 ? 'bg-[#00b5e2] text-white' : 'text-gray-800 hover:text-[#00b5e2]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ── Мобилка: «Последние публикации» — карусель крупных карточек ── */}
      <section className="lg:hidden py-12">
        <h2 className="text-[26px] font-bold text-gray-900 text-center mb-8 leading-tight">
          Последние<br />публикации
        </h2>
        <MobileCarousel arrowsTop="30%" progress={false}>
          {[{ title: featured.title, img: featured.img }, ...latestPosts].map((p, i) => (
            <article key={`${p.title}-m${i}`} className="bg-white rounded-3xl overflow-hidden h-full">
              <div className="h-40 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{p.title}</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-block text-sm font-medium text-gray-900 border border-gray-300 rounded-full px-8 py-2.5">Подробнее</span>
                  <span className="text-xs text-gray-500">{featured.date}</span>
                </div>
              </div>
            </article>
          ))}
        </MobileCarousel>
        <div className="flex items-center justify-center gap-2 mt-7">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((d) => (
            <span key={d} className={`w-1.5 h-1.5 rounded-full ${d === 3 ? 'bg-[#00b5e2]' : 'bg-gray-300'}`} />
          ))}
        </div>
      </section>

      {/* ── Главная статья + Последние публикации (десктоп) ── */}
      <section className="container-main py-12 lg:py-16 hidden lg:block">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Featured */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-3xl overflow-hidden group cursor-pointer hover:shadow-md transition-shadow h-full">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={featured.img} alt={featured.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-semibold text-[#00b5e2] bg-[#00b5e2]/10 px-3 py-1 rounded-full uppercase tracking-wide">{featured.category}</span>
                  <span className="text-xs text-gray-400">{featured.date}</span>
                </div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-[#00b5e2] transition-colors">{featured.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-block text-sm text-gray-900 border border-gray-300 rounded-full px-6 py-2.5 group-hover:border-[#00b5e2] group-hover:text-[#00b5e2] transition-colors">Читать подробнее</span>
                  <span className="text-xs text-gray-400">{featured.date}</span>
                </div>
              </div>
            </article>
          </div>

          {/* Последние публикации */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Последние публикации</h2>
            <div className="space-y-4">
              {latestPosts.map((p) => (
                <div key={p.title} className="flex gap-4 group cursor-pointer">
                  <div className="w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-[#00b5e2] transition-colors line-clamp-2">{p.title}</h3>
                    <p className="text-gray-400 text-xs mt-1">{p.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Сохраните дату ближайшей конференции ── */}
      <section className="container-main pb-12 lg:pb-16">
        <h2 className="text-[26px] lg:text-[36px] font-bold text-gray-900 text-center mb-8 lg:mb-10 leading-tight max-w-[280px] lg:max-w-none mx-auto">
          Сохраните дату<br />ближайшей конференции
        </h2>
        <div className="relative rounded-[24px] lg:rounded-[32px] overflow-hidden min-h-[380px] lg:flex lg:items-center">
          <img src={imgOperatingRoom} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a1628]/80" />

          {/* Мобильная раскладка: всё столбиком, фото проглядывает в середине */}
          <div className="lg:hidden relative z-10 p-6 pb-8">
            <p className="text-[#00b5e2] text-[11px] font-semibold uppercase tracking-[0.25em] mb-3">Конференция</p>
            <h3 className="text-[26px] font-bold text-white leading-tight mb-4 max-w-[300px]">
              Заболевания органов дыхания в практике врача терапевта
            </h3>
            {/* Просвет с фото хирурга */}
            <div className="h-52" />
            <div className="bg-white/95 rounded-2xl p-5 mb-6">
              <p className="text-gray-400 text-xs mb-2">Конференцию ведет Руководитель профиля Торакальной хирургии и Пульмонологии</p>
              <div className="font-bold text-gray-900">Ешмуратов Темур Шерханович</div>
              <div className="text-[#00b5e2] text-xs mt-0.5">к.м.н., ассоциированный<br />профессор</div>
            </div>
            <div className="grid grid-cols-2 gap-6 text-white mb-6 px-2">
              <div>
                <div className="text-white/50 text-xs mb-1">Дата:</div>
                <div className="text-2xl font-bold">15.06.26</div>
              </div>
              <div>
                <div className="text-white/50 text-xs mb-1">Время:</div>
                <div className="text-2xl font-bold">12:00</div>
              </div>
            </div>
            <button onClick={() => setRegOpen(true)} className="w-full bg-[#00b5e2] text-white text-sm font-medium rounded-full py-4 mb-6">
              Отправить
            </button>
            <div className="text-center text-white">
              <div className="text-white/60 text-sm mb-2">До начало конференций</div>
              <div className="text-2xl font-bold tabular-nums tracking-wider">00 : 00 : 00 : 00</div>
            </div>
          </div>

          <div className="hidden lg:grid relative z-10 grid-cols-1 lg:grid-cols-2 gap-8 w-full p-8 lg:p-12 items-center">
            <div>
              <p className="text-[#00b5e2] text-[10px] font-semibold uppercase tracking-widest mb-4">Конференция</p>
              <h3 className="text-2xl lg:text-4xl font-bold text-white leading-tight mb-7">
                Заболевания органов дыхания в практике врача терапевта
              </h3>
              <div className="grid grid-cols-[auto_auto] gap-x-12 gap-y-5 items-center w-fit text-white">
                <button onClick={() => setRegOpen(true)} className="bg-[#00b5e2] text-white text-sm font-medium rounded-full px-10 py-3.5 hover:bg-[#0099c4] transition-colors text-center">Зарегистрироваться</button>
                <div>
                  <div className="text-white/50 text-xs mb-1">Дата:</div>
                  <div className="text-lg font-bold">15.06.26</div>
                </div>
                <div className="text-center">
                  <div className="text-white/50 text-xs mb-1">До начало конференций</div>
                  <div className="text-lg font-bold tabular-nums">00 : 00 : 00 : 00</div>
                </div>
                <div>
                  <div className="text-white/50 text-xs mb-1">Время:</div>
                  <div className="text-lg font-bold">12:00</div>
                </div>
              </div>
            </div>
            <div className="lg:justify-self-end bg-white/95 rounded-2xl p-5 max-w-xs">
              <p className="text-gray-400 text-xs mb-2">Конференцию ведёт Руководитель профиля Торакальной хирургии и Пульмонологии</p>
              <div className="font-bold text-gray-900">Ешмуратов Темур Шерханович</div>
              <div className="text-[#00b5e2] text-xs mt-0.5">к.м.н., ассоциированный профессор</div>
            </div>
          </div>
          {/* Стрелки слайдера */}
          <button aria-label="Назад" className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#00b5e2] text-white flex items-center justify-center hover:bg-[#0099c4] transition-colors shadow-lg">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button aria-label="Вперёд" className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#00b5e2] text-white flex items-center justify-center hover:bg-[#0099c4] transition-colors shadow-lg">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        {/* Точки-пагинация */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {[0, 1, 2, 3, 4, 5, 6].map((d) => (
            <span key={d} className={`w-2 h-2 rounded-full ${d === 0 ? 'bg-[#00b5e2]' : 'bg-gray-300'}`} />
          ))}
        </div>
      </section>

      {/* ── Мобилка: «Лекции с этой конференции» — карусель карточек лектора ── */}
      <section className="lg:hidden pb-12">
        <h2 className="text-[26px] font-bold text-gray-900 text-center mb-8 leading-tight">
          Лекции с этой<br />конференции
        </h2>
        <MobileCarousel arrowsTop="42%" progress={false}>
          {[0, 1, 2].map((i) => (
            <article key={`lect-m${i}`} className="bg-white rounded-3xl overflow-hidden h-full">
              <div className="h-60 overflow-hidden">
                <img src={doctor1} alt="Куатбеков Кайрат Ниеталиевич" className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-5">
                <p className="text-[#00b5e2] text-xs font-medium mb-2">к.м.н., ассоциированный профессор</p>
                <h3 className="text-[22px] font-bold text-gray-900 leading-tight mb-3">
                  Куатбеков Кайрат<br />Ниеталиевич
                </h3>
                <div className="inline-flex items-center gap-3 bg-[#f4f4f4] rounded-full pl-1.5 pr-5 py-1.5 mb-5">
                  <span className="w-9 h-9 rounded-full bg-[#cdeefb] flex items-center justify-center flex-shrink-0">
                    <img src={pictoHeart} alt="" className="w-full h-full" />
                  </span>
                  <span className="text-gray-900 text-xs leading-snug">
                    Руководитель отделения<br />Кардиохирургии и Кардиологии
                  </span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 leading-snug mb-3">
                  Инновационные технологии в кардиохирургии: от диагностики до успешного лечения
                </h4>
                <p className="text-gray-600 text-[13px] leading-relaxed mb-5">
                  Лекция посвящена современным методам диагностики, профилактики и хирургического
                  лечения сердечно-сосудистых заболеваний. В ходе выступления рассмотрены актуальные
                  клинические случаи, инновационные технологии кардиохирургии, а также современные
                  подходы к ведению пациентов с заболеваниями сердца и сосудов.
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-block text-sm font-medium text-gray-900 border border-gray-300 rounded-full px-8 py-2.5">Подробнее</span>
                  <span className="text-xs text-gray-500">25 окт 2025</span>
                </div>
              </div>
            </article>
          ))}
        </MobileCarousel>
        <div className="flex items-center justify-center gap-2 mt-7">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((d) => (
            <span key={d} className={`w-1.5 h-1.5 rounded-full ${d === 3 ? 'bg-[#00b5e2]' : 'bg-gray-300'}`} />
          ))}
        </div>
      </section>

      {/* ── Лекции с этой конференции (десктоп) ── */}
      <section className="container-main pb-12 lg:pb-16 hidden lg:block">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Карточка лектора */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-3xl overflow-hidden group cursor-pointer hover:shadow-md transition-shadow h-full">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={imgDoctorSenior} alt="" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 bg-[#00b5e2]/10 text-[#00b5e2] text-xs font-medium px-3 py-1 rounded-full mb-4">Кардиохирургия</div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#00b5e2] transition-colors">
                  Инновационные технологии в кардиохирургии: от диагностики до успешного лечения
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  Лекция посвящена современным методам диагностики, профилактики и хирургического
                  лечения сердечно-сосудистых заболеваний с разбором актуальных клинических случаев.
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-block text-sm text-gray-900 border border-gray-300 rounded-full px-6 py-2.5 group-hover:border-[#00b5e2] group-hover:text-[#00b5e2] transition-colors">Посмотреть лекцию</span>
                  <span className="text-xs text-gray-400">25 окт 2025</span>
                </div>
              </div>
            </article>
          </div>

          {/* Список лекций */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Лекции с этой конференции</h2>
            <div className="space-y-4">
              {lectures.map((l) => (
                <div key={l.title} className="flex gap-4 group cursor-pointer">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                    <img src={l.img} alt={l.title} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-[#00b5e2] transition-colors line-clamp-2">{l.title}</h3>
                    <p className="text-gray-400 text-xs mt-1">{l.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Рекомендуемые ── */}
      <section className="pb-12 lg:pb-16">

        {/* Мобилка: заголовок по центру + карусель */}
        <div className="lg:hidden">
          <h2 className="text-[26px] font-bold text-gray-900 text-center mb-8 leading-tight max-w-[280px] mx-auto">
            Рекомендуемое: другие статьи и публикации
          </h2>
          <MobileCarousel arrowsTop="35%">
            {recommended.map((item, i) => (
              <article key={`${item.title}-m${i}`} className="bg-white rounded-3xl overflow-hidden h-full">
                <div className="h-56 overflow-hidden bg-gray-100">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-lg leading-snug mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-[13px] leading-relaxed mb-5">
                    Сложнейший диагноз, риск полной остановки сердца — и всё же команда Erensau Hospital справилась...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block text-sm font-medium text-gray-900 border border-gray-300 rounded-full px-8 py-2.5">Подробнее</span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </MobileCarousel>
          <div className="text-center mt-9">
            <Link to="/news" className="inline-block bg-white border border-gray-300 text-gray-900 text-sm font-medium rounded-full px-10 py-3.5">
              Все публикации
            </Link>
          </div>
        </div>

        {/* Десктоп */}
        <div className="container-main hidden lg:block">
          <div className="flex items-center gap-6 mb-6">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 whitespace-nowrap">Рекомендуемое: другие статьи и публикации</h2>
            <div className="flex-1 hidden lg:block h-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <button aria-label="Назад" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button aria-label="Вперёд" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recommended.map((item) => (
              <article key={item.title} className="bg-white rounded-2xl overflow-hidden group cursor-pointer hover:shadow-md transition-shadow flex flex-col">
                <div className="h-40 overflow-hidden bg-gray-100">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-[#00b5e2] transition-colors line-clamp-3 mb-2">{item.title}</h3>
                  <p className="text-[10px] text-gray-400 mb-4">{item.date}</p>
                  <Link to="#" className="mt-auto inline-block text-center text-sm text-gray-900 border border-gray-200 rounded-full px-5 py-2 hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors self-start">
                    Подробнее
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/news" className="inline-block bg-white border border-gray-200 text-gray-900 text-sm font-medium rounded-full px-8 py-3.5 hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors">
              Все публикации
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA-слайдер ── */}
      <CTASlider />

      {/* ── Модалка регистрации на конференцию ── */}
      {regOpen && <RegistrationModal onClose={() => setRegOpen(false)} />}

    </div>
  )
}
