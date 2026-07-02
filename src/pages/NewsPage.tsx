import { Link } from 'react-router-dom'
import imgDoctorPortrait from '@/assets/images/img-doctor-portrait.jpg'
import imgDoctorSenior from '@/assets/images/img-doctor-senior.jpg'
import imgOperatingRoom from '@/assets/images/img-operating-room.jpg'
import imgClinicBuilding from '@/assets/images/img-clinic-building.jpg'
import post1 from '@/assets/images/post1.jpg'
import post2 from '@/assets/images/post2.jpg'
import post4 from '@/assets/images/post4.jpg'
import LogoMark from '@/assets/icons/logo-group.svg?react'
import CTASlider from '@/components/ui/CTASlider'

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

export default function NewsPage() {
  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Hero — светлая карточка, контент внизу ── */}
      <section className="bg-[#f4f4f4] px-3 pt-2">
        <div className="relative overflow-hidden rounded-[28px] min-h-[760px]">
          <img src={post1} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 via-transparent to-transparent" />

          <div className="relative z-10 px-8 lg:px-24 flex flex-col justify-end min-h-[760px] pb-20">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="flex items-start gap-4">
                <LogoMark className="h-14 lg:h-20 w-auto flex-shrink-0" style={{ ['--fill-0' as string]: '#ffffff' }} />
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-[1.05]">
                  Новости<br />и исследования
                </h1>
              </div>
              <p className="text-white/90 text-[13px] leading-relaxed max-w-sm lg:pb-1">
                Erensau Hospital - не только практика, но и
                исследования. Следите за новостями клиники,
                научными публикациями и участием наших врачей
                в международных конференциях
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Табы — наполовину на границе hero */}
      <div className="container-main relative z-20 -mt-6 flex justify-start">
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

      {/* ── Главная статья + Последние публикации ── */}
      <section className="container-main py-12 lg:py-16">
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
        <h2 className="text-2xl lg:text-[36px] font-bold text-gray-900 text-center mb-10 leading-tight">
          Сохраните дату<br />ближайшей конференции
        </h2>
        <div className="relative rounded-[32px] overflow-hidden min-h-[380px] flex items-center">
          <img src={imgOperatingRoom} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0a1628]/80" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 w-full p-8 lg:p-12 items-center">
            <div>
              <p className="text-[#00b5e2] text-[10px] font-semibold uppercase tracking-widest mb-4">Конференция</p>
              <h3 className="text-2xl lg:text-4xl font-bold text-white leading-tight mb-7">
                Заболевания органов дыхания в практике врача терапевта
              </h3>
              <div className="grid grid-cols-[auto_auto] gap-x-12 gap-y-5 items-center w-fit text-white">
                <Link to="/contacts" className="bg-[#00b5e2] text-white text-sm font-medium rounded-full px-10 py-3.5 hover:bg-[#0099c4] transition-colors text-center">Зарегистрироваться</Link>
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

      {/* ── Лекции с этой конференции ── */}
      <section className="container-main pb-12 lg:pb-16">
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
      <section className="container-main pb-12 lg:pb-16">
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
      </section>

      {/* ── CTA-слайдер ── */}
      <CTASlider />

    </div>
  )
}
