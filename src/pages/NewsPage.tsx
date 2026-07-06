import { useState } from 'react'
import { Link } from 'react-router-dom'
import newsHeroBg from '@/assets/images/news/news-hero-bg.jpg'
import confBg from '@/assets/images/news/conf-bg.jpg'
import featuredImg from '@/assets/images/news/featured.jpg'
import latest1 from '@/assets/images/news/latest-1.jpg'
import latest2 from '@/assets/images/news/latest-2.jpg'
import latest3 from '@/assets/images/news/latest-3.jpg'
import latest4 from '@/assets/images/news/latest-4.jpg'
import lecturerImg from '@/assets/images/news/lecturer.png'
import lectAv1 from '@/assets/images/news/lect-av-1.png'
import lectAv2 from '@/assets/images/news/lect-av-2.png'
import lectAv3 from '@/assets/images/news/lect-av-3.png'
import lectAv4 from '@/assets/images/news/lect-av-4.png'
import rec1 from '@/assets/images/news/rec-1.jpg'
import rec2 from '@/assets/images/news/rec-2.jpg'
import rec3 from '@/assets/images/news/rec-3.jpg'
import rec4 from '@/assets/images/news/rec-4.jpg'
import pictoHeart from '@/assets/icons/picto-heart.png'
import CTASlider from '@/components/ui/CTASlider'
import MobileCarousel from '@/components/ui/MobileCarousel'

const heroTabs = ['Новости клиники', 'Конференции', 'Научные публикации']

const featured = {
  title: '«Они её вытащили…»: как работает Erensau',
  excerpt:
    '«Это невозможно вылечить», «Для операции много рисков, мы не возьмёмся» — такие фразы слышат многие пациенты со сложными заболеваниями. Есть диагнозы, которые ставят в тупик даже опытных специалистов. Есть пациенты, которых сочли «неперспективными»…',
  date: '25 окт 2025',
  category: 'О клинике',
  img: featuredImg,
}

const latestPosts = [
  { title: 'Единичный случай в мировой практике',            date: '24 июля 2024', img: latest1 },
  { title: 'Врачи Erensau Hospital спасли жизнь пациенту…',   date: '24 июля 2024', img: latest2 },
  { title: '«Пневмония» оказалась ловушкой. В Алматы…',       date: '24 июля 2024', img: latest3 },
  { title: 'В Алматы спасли новорождённую…',                  date: '24 июля 2024', img: latest4 },
]

const lecture = {
  name: ['Куатбеков Кайрат', 'Ниеталиевич'],
  degree: 'к.м.н., ассоциированный профессор',
  position: 'Руководитель отделения Кардиохирургии и Кардиологии',
  title: 'Инновационные технологии в кардиохирургии: от диагностики до успешного лечения',
  excerpt:
    'Лекция посвящена современным методам диагностики, профилактики и хирургического лечения сердечно-сосудистых заболеваний. В ходе выступления рассмотрены актуальные клинические случаи и инновационные технологии кардиохирургии.',
  date: '25 окт 2025',
  img: lecturerImg,
}

const lectures = [
  { title: 'Современные подходы в хирургии',                   author: 'Ижанов Ерген Бахчанович',        img: lectAv1 },
  { title: 'Малоинвазивные технологии в сосудистой хирургии',  author: 'Коспанов Нурсултан Айдарханович', img: lectAv2 },
  { title: 'Профилактика и лечение заболеваний органов',       author: 'Ешмуратов Темур Шерханович',      img: lectAv3 },
  { title: 'Современная анестезиология и интенсивная терапия', author: 'Кусаинов Адилет Шингисович',      img: lectAv4 },
]

const recommended = [
  { title: 'Редчайшая операция длилась больше 8 часов',  excerpt: 'Сложнейший диагноз, риск полной остановки сердца — и всё же команда Erensau Hospital справилась…', date: '24 июля 2024', img: rec1 },
  { title: 'За привычными симптомами скрывался',         excerpt: 'Одышка, боль под лопаткой и диагноз «пневмония», но смертельно опасный разрыв грудной аорты…',      date: '24 июля 2024', img: rec2 },
  { title: 'Редкая операция на сердце новорождённой',    excerpt: 'Девочка появилась на свет с тяжёлым врождённым пороком. Многие кардиоцентры отказывались…',         date: '24 июля 2024', img: rec3 },
  { title: 'Операция потребовала слаженной работы',      excerpt: 'Мультидисциплинарная команда кардиохирургов, сосудистых хирургов и анестезиологов…',                date: '24 июля 2024', img: rec4 },
]

// Заголовок лекции: перенос строки после двоеточия («тема: подзаголовок»).
// Работает для любых лекций, в т.ч. подгружаемых динамически, — без хардкода <br>.
function LectureTitle({ title, className }: { title: string; className?: string }) {
  const i = title.indexOf(':')
  return (
    <h3 className={className}>
      {i === -1 ? title : <>{title.slice(0, i + 1)}<br />{title.slice(i + 1).trimStart()}</>}
    </h3>
  )
}

// Эмблема Erensau (точный SVG из Figma, 29×112) — красится через currentColor
function NewsMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 29 112" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M0.102853 72.4495C6.31986 72.4495 11.3511 77.3887 11.3511 83.4922H0.102853V72.4495Z" />
      <path d="M28.4485 83.3121V111.32H0C15.7152 111.32 28.4485 98.7743 28.4485 83.3121Z" />
      <path d="M19.894 83.4919C19.8019 72.7995 11.0174 64.1077 0.0916322 64.0512V55.6646C15.7032 55.7098 28.3445 68.1428 28.4366 83.4919H19.894Z" />
      <path d="M11.3511 83.4922C11.259 89.5505 6.29684 94.4907 0.102853 94.5359V102.923C11.0172 102.877 19.8016 94.1742 19.9053 83.4818H11.3626L11.3511 83.4922Z" />
      <path d="M0.102853 38.8696C6.31986 38.8696 11.3511 33.9303 11.3511 27.8268H0.102853V38.8696Z" />
      <path d="M8.64553 0C8.73764 10.6924 17.522 19.3842 28.4478 19.4407V27.8274C28.3442 43.1765 15.7145 55.6095 0.102853 55.666V47.2794C11.0172 47.2229 19.8016 38.5311 19.9053 27.8387V26.5163C8.47287 22.9333 0.183443 12.4217 0.102853 0.0113138H8.65706L8.64553 0Z" />
      <path d="M28.4481 11.0428C22.2311 11.0428 17.1999 6.09218 17.1999 0H28.4481V11.0428Z" />
    </svg>
  )
}

// Стрелки-кружки слайдера (голубые — для тёмных секций, серые-контурные — для светлых)
function SliderArrows({ variant = 'blue' }: { variant?: 'blue' | 'outline' }) {
  const base = 'w-11 h-11 rounded-full flex items-center justify-center transition-colors'
  const cls =
    variant === 'blue'
      ? `${base} bg-[#00b5e2] text-white hover:bg-[#0099c4] shadow-lg`
      : `${base} border border-gray-300 text-gray-500 hover:border-[#00b5e2] hover:text-[#00b5e2]`
  return (
    <>
      <button aria-label="Назад" className={cls}>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button aria-label="Вперёд" className={cls}>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
      </button>
    </>
  )
}

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
      <div className="absolute inset-0 bg-white/75" onClick={onClose} />
      <div className="relative min-h-full flex items-center justify-center p-4">
        <div className="relative bg-white rounded-[28px] shadow-[0_24px_80px_rgba(0,0,0,0.14)] w-full max-w-[465px] px-8 lg:px-10 py-9">
          <button
            onClick={onClose}
            aria-label="Закрыть"
            className="absolute right-7 top-7 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h3 className="text-[28px] font-semibold text-gray-900 text-center mb-7">Регистрационная форма</h3>

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
              className="w-full bg-[#00b5e2] text-white text-base font-semibold rounded-full py-4 mt-2 hover:bg-[#0099c4] transition-colors"
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

      {/* ── Hero — тёмная карточка: эмблема + заголовок внизу слева, описание справа ── */}
      <section className="bg-[#f4f4f4] px-3 pt-2 lg:pt-0 lg:max-w-[1440px] lg:mx-auto">
        <div className="relative overflow-hidden rounded-[24px] lg:rounded-[15px] min-h-[640px] lg:min-h-0 lg:aspect-[1414/707]">
          <img src={newsHeroBg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#042531]/80 from-[2%] via-[#042531]/22 via-[32%] to-transparent to-[60%]" />

          <div className="relative z-10 px-6 lg:px-[46px] flex flex-col justify-end min-h-[640px] lg:min-h-full pb-16 lg:pb-[120px]">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 lg:gap-8">
              <div className="flex items-start gap-3 lg:gap-[31px]">
                <NewsMark className="h-[46px] lg:h-[111px] w-auto flex-shrink-0 text-white mt-[2px] lg:mt-[19px]" />
                <h1 className="text-[27px] lg:text-[56px] font-semibold text-white leading-[1.15] lg:leading-[1.2] tracking-[-0.04em] lg:tracking-[-0.06em]">
                  Новости<br />и исследования
                </h1>
              </div>
              <p className="text-white text-[13px] lg:text-[18px] font-medium leading-relaxed lg:leading-[1.35] max-w-[300px] lg:max-w-[455px] lg:pb-2">
                Erensau Hospital — не только практика, но и
                исследования. Следите за новостями клиники,
                научными публикациями и участием наших врачей
                в международных конференциях
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Табы — на мобилке голубой дропдаун; на десктопе — по центру на границе hero */}
      <div className="lg:hidden container-main relative z-30 -mt-6 flex justify-center">
        <div className="relative">
          <button
            onClick={() => setMobileTabOpen(o => !o)}
            className="flex items-center gap-2 bg-[#00b5e2] text-white text-sm font-semibold rounded-full px-8 py-3.5 shadow-lg"
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
      <div className="hidden lg:flex container-main relative z-20 -mt-8 justify-center">
        <div className="inline-flex bg-white rounded-full p-2 gap-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
          {heroTabs.map((tab, i) => (
            <button
              key={tab}
              className={`px-8 py-3 rounded-full text-sm transition-colors whitespace-nowrap ${
                i === 0 ? 'bg-[#00b5e2] text-white font-semibold' : 'bg-[#d3d3d3] text-black hover:bg-[#c7c7c7]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ── Мобилка: «Последние публикации» — карусель ── */}
      <section className="lg:hidden py-12">
        <h2 className="text-[28px] font-semibold text-gray-900 text-center mb-8 leading-tight">
          Последние<br />публикации
        </h2>
        <MobileCarousel arrowsTop="30%" progress={false}>
          {[{ title: featured.title, img: featured.img }, ...latestPosts].map((p, i) => (
            <article key={`${p.title}-m${i}`} className="bg-white rounded-3xl overflow-hidden h-full">
              <div className="h-40 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">{p.title}</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed mb-5 line-clamp-3">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-block text-sm font-semibold text-gray-900 border border-gray-900 rounded-full px-8 py-2.5">Подробнее</span>
                  <span className="text-xs text-gray-500">{featured.date}</span>
                </div>
              </div>
            </article>
          ))}
        </MobileCarousel>
      </section>

      {/* ── Последние публикации (десктоп) ── */}
      <section className="container-main pt-14 pb-12 lg:pt-[70px] lg:pb-16 hidden lg:block">
        <div className="flex gap-[52px]">
          {/* Featured слева */}
          <article className="bg-white rounded-[28px] shadow-card w-[730px] flex-shrink-0 overflow-hidden group cursor-pointer">
            <div className="p-[15px] pb-0">
              <div className="rounded-[24px] overflow-hidden aspect-[699/359]">
                <img src={featured.img} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div className="px-[28px] pt-[26px] pb-[30px]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-semibold text-[#00b5e2] bg-[#00b5e2]/10 px-3 py-1 rounded-full uppercase tracking-wide">{featured.category}</span>
              </div>
              <h3 className="text-[24px] font-semibold text-gray-900 leading-[1.15] tracking-[-0.02em] mb-3 group-hover:text-[#00b5e2] transition-colors">{featured.title}</h3>
              <p className="text-black text-[14px] leading-[1.35] mb-6 line-clamp-3">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="inline-block text-[12px] font-semibold text-black border border-black rounded-[42px] px-6 py-[13px] hover:bg-black hover:text-white transition-colors">Читать подробнее</span>
                <span className="text-[14px] text-black/60">{featured.date}</span>
              </div>
            </div>
          </article>

          {/* Последние публикации справа: заголовок вровень с фото + список из 4 */}
          <div className="flex-1 min-w-0">
            <h2 className="text-[36px] font-semibold text-gray-900 leading-[1.15] tracking-[-0.02em] mb-6">Последние<br />публикации</h2>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-[124px] bg-white rounded-[24px] shadow-card" />
              <div className="relative flex flex-col gap-[14px] py-3.5">
                {latestPosts.map((p) => (
                  <div key={p.title} className="flex gap-5 items-center group cursor-pointer">
                    <div className="w-[100px] h-[100px] ml-3 rounded-[19px] overflow-hidden flex-shrink-0">
                      <img src={p.img} alt={p.title} className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="flex-1 min-w-0 pr-2">
                      <h3 className="text-[20px] font-semibold text-gray-900 leading-[1.2] tracking-[-0.02em] group-hover:text-[#00b5e2] transition-colors line-clamp-2">{p.title}</h3>
                      <p className="text-black/50 text-[16px] mt-1.5">{p.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Сохраните дату ближайшей конференции ── */}
      <section className="container-main pt-[60px] pb-12 lg:pt-[120px] lg:pb-24">
        <h2 className="text-[28px] lg:text-[47px] font-semibold text-gray-900 text-center mb-8 lg:mb-14 leading-tight tracking-[-0.02em] max-w-[280px] lg:max-w-none mx-auto">
          Сохраните дату<br />ближайшей конференции
        </h2>

        {/* Мобильная раскладка */}
        <div className="lg:hidden relative rounded-[24px] overflow-hidden min-h-[380px]">
          <img src={confBg} alt="" className="absolute inset-0 w-full h-full object-cover object-right" />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 p-6 pb-8">
            <p className="text-[#00b5e2] text-[11px] font-bold uppercase tracking-[0.25em] mb-3">Конференция</p>
            <h3 className="text-[28px] font-semibold text-white leading-tight mb-4 max-w-[300px]">
              Заболевания органов дыхания в практике врача терапевта
            </h3>
            <div className="h-40" />
            <div className="bg-white rounded-2xl p-5 mb-6">
              <p className="text-gray-500 text-xs mb-2 leading-relaxed">Конференцию ведёт Руководитель профиля Торакальной хирургии и Пульмонологии</p>
              <div className="font-bold text-gray-900">Ешмуратов Темур Шерханович</div>
              <div className="text-[#00b5e2] text-xs font-semibold mt-0.5">к.м.н., ассоциированный профессор</div>
            </div>
            <div className="grid grid-cols-2 gap-6 text-white mb-6 px-1">
              <div><div className="text-white/60 text-sm mb-1">Дата:</div><div className="text-2xl font-bold">15.06.26</div></div>
              <div><div className="text-white/60 text-sm mb-1">Время:</div><div className="text-2xl font-bold">12:00</div></div>
            </div>
            <button onClick={() => setRegOpen(true)} className="w-full bg-[#00b5e2] text-white text-sm font-semibold rounded-full py-4 mb-6">
              Зарегистрироваться
            </button>
            <div className="text-center text-white">
              <div className="text-white/60 text-sm mb-2">До начало конференций</div>
              <div className="text-2xl font-bold tabular-nums tracking-wider">00 : 00 : 00 : 00</div>
            </div>
          </div>
        </div>

        {/* Десктоп: карточка конференции + стрелки по краям + точки */}
        <div className="hidden lg:block">
        <div className="relative">
        <div className="relative rounded-[15px] overflow-hidden bg-black h-[580px]">
          {/* Фото врача — сдвинуто вправо, голова видна; фикс. пропорции */}
          <img src={confBg} alt="" className="absolute max-w-none w-[108%] left-[14%] top-[-11%] pointer-events-none select-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black from-[6%] via-black/75 via-[40%] to-transparent to-[74%]" />

          {/* Левый контент */}
          <div className="relative z-10 h-full flex flex-col px-[70px] py-[54px]">
            <p className="text-[#00b5e2] text-[16px] font-bold uppercase tracking-[0.2em] mb-5">Конференция</p>
            <h3 className="text-white text-[48px] font-semibold leading-[1.05] tracking-[-0.03em] max-w-[490px] mb-auto">
              Заболевания органов дыхания в практике врача терапевта
            </h3>

            {/* 2 колонки: слева кнопка + таймер, справа дата + время (друг под другом) */}
            <div className="grid grid-cols-[auto_auto] gap-x-16 gap-y-8 items-center w-fit mt-10">
              <button onClick={() => setRegOpen(true)} className="bg-[#00b5e2] text-white text-[14px] font-semibold rounded-[41px] px-[42px] py-[22px] hover:bg-[#0099c4] transition-colors whitespace-nowrap">
                Зарегистрироваться
              </button>
              <div>
                <div className="text-white/90 text-[18px] mb-2">Дата:</div>
                <div className="text-white text-[32px] font-bold leading-none">15.06.26</div>
              </div>
              <div>
                <div className="text-white/90 text-[18px] mb-2.5">До начало конференций</div>
                <div className="text-white text-[32px] font-bold tabular-nums tracking-[0.06em] leading-none whitespace-nowrap">00 : 00 : 00 : 00</div>
              </div>
              <div>
                <div className="text-white/90 text-[18px] mb-2">Время:</div>
                <div className="text-white text-[32px] font-bold leading-none">12:00</div>
              </div>
            </div>
          </div>

          {/* Карточка спикера — снизу справа, поверх торса врача (лицо открыто) */}
          <div className="absolute right-[7%] bottom-[64px] z-10 w-[372px] bg-white rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.25)] p-[32px]">
            <p className="text-black text-[14px] leading-[1.4] mb-4">Конференцию ведёт Руководитель профиля Торакальной хирургии и Пульмонологии</p>
            <div className="border-t border-gray-200 pt-3.5">
              <div className="text-black text-[18px] font-bold leading-[1.4]">Ешмуратов Темур Шерханович</div>
              <div className="text-[#00b5e2] text-[12px] font-semibold mt-1">к.м.н., ассоциированный профессор</div>
            </div>
          </div>

        </div>

          {/* Стрелки — на краях карточки, наполовину снаружи */}
          <button aria-label="Назад" className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#00b5e2] text-white flex items-center justify-center hover:bg-[#0099c4] transition-colors shadow-lg">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button aria-label="Вперёд" className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#00b5e2] text-white flex items-center justify-center hover:bg-[#0099c4] transition-colors shadow-lg">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* Точки — разные конференции */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <span key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#00b5e2]' : 'bg-gray-300'}`} />
          ))}
        </div>
        </div>
      </section>

      {/* ── Мобилка: «Лекции с этой конференции» ── */}
      <section className="lg:hidden pb-12">
        <h2 className="text-[28px] font-semibold text-gray-900 text-center mb-8 leading-tight">
          Лекции с этой<br />конференции
        </h2>
        <MobileCarousel arrowsTop="42%" progress={false}>
          {[0, 1, 2].map((i) => (
            <article key={`lect-m${i}`} className="bg-white rounded-3xl overflow-hidden h-full">
              <div className="relative bg-[#ebebeb] h-64 flex">
                <img src={lecture.img} alt={lecture.name.join(' ')} className="h-full w-1/2 object-cover object-top" />
                <div className="flex-1 p-4 flex flex-col justify-center">
                  <p className="text-[#00b5e2] text-[11px] font-semibold mb-1.5">{lecture.degree}</p>
                  <h3 className="text-[19px] font-bold text-gray-900 leading-tight mb-3">{lecture.name[0]}<br />{lecture.name[1]}</h3>
                  <div className="inline-flex items-center gap-2 bg-white rounded-full pl-1 pr-3 py-1 w-fit shadow-sm">
                    <span className="w-8 h-8 rounded-full bg-[#cdeefb] flex items-center justify-center flex-shrink-0"><img src={pictoHeart} alt="" className="w-full h-full" /></span>
                    <span className="text-gray-900 text-[10px] leading-tight">{lecture.position}</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-gray-900 leading-snug mb-3">{lecture.title}</h4>
                <p className="text-gray-600 text-[13px] leading-relaxed mb-5 line-clamp-4">{lecture.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-block text-sm font-semibold text-gray-900 border border-gray-900 rounded-full px-7 py-2.5">Подробнее</span>
                  <span className="text-xs text-gray-500">{lecture.date}</span>
                </div>
              </div>
            </article>
          ))}
        </MobileCarousel>
      </section>

      {/* ── Лекции с этой конференции (десктоп) ── */}
      <section className="container-main pb-12 lg:pb-24 hidden lg:block">
        <div className="flex gap-9 items-start">
          {/* Карточка лектора слева */}
          <article className="bg-white rounded-[28px] shadow-card flex-1 min-w-0 max-w-[730px] overflow-hidden">
            <div className="p-[15px] pb-0">
              <div className="relative bg-[#ebebeb] rounded-[24px] overflow-hidden h-[340px] flex">
                <div className="relative w-[46%] h-full flex items-end justify-center">
                  <img src={lecture.img} alt={lecture.name.join(' ')} className="h-full w-auto max-w-none object-contain object-bottom select-none" />
                </div>
                <div className="flex-1 relative p-7 flex flex-col justify-center">
                  <p className="text-[#00b5e2] text-[14px] font-semibold mb-2">{lecture.degree}</p>
                  <h4 className="text-black text-[28px] font-bold leading-[1.15] tracking-[-0.03em] mb-5">{lecture.name[0]}<br />{lecture.name[1]}</h4>
                  <div className="inline-flex items-center gap-3 bg-white rounded-[32px] shadow-[0_8px_20px_rgba(0,0,0,0.08)] pl-2 pr-5 py-2 w-fit">
                    <span className="w-[46px] h-[46px] rounded-full bg-[#cdeefb] flex items-center justify-center flex-shrink-0"><img src={pictoHeart} alt="" className="w-full h-full" /></span>
                    <span className="text-black text-[14px] font-light leading-[1.3] max-w-[200px]">{lecture.position}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[28px] pt-[26px] pb-[30px]">
              <LectureTitle title={lecture.title} className="text-[24px] font-semibold text-gray-900 leading-[1.25] tracking-[-0.02em] mb-3" />
              <p className="text-black text-[14px] leading-[1.35] mb-6 line-clamp-2">{lecture.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="inline-block text-[12px] font-semibold text-black border border-black rounded-[42px] px-6 py-[13px] hover:bg-black hover:text-white transition-colors">Посмотреть лекцию</span>
                <span className="text-[14px] text-black/60">{lecture.date}</span>
              </div>
            </div>
          </article>

          {/* Список лекций справа */}
          <div className="w-[448px] shrink-0">
            <h2 className="text-[36px] font-semibold text-gray-900 leading-[1.15] tracking-[-0.02em] mb-6">Лекции с этой<br />конференции</h2>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-[129px] bg-white rounded-[24px] shadow-card" />
              <div className="relative flex flex-col gap-[14px] py-3.5">
                {lectures.map((l) => (
                  <div key={l.title} className="flex items-center group cursor-pointer">
                    {/* Аватар — вырезка врача на сером фоне с затуханием снизу */}
                    <div className="relative w-[105px] h-[100px] ml-3 rounded-[16px] overflow-hidden flex-shrink-0 bg-[#e7e7e7]">
                      <img src={l.img} alt={l.author} className="absolute inset-0 w-full h-full object-cover object-top select-none" />
                      <div className="absolute inset-x-0 bottom-0 h-[36%] bg-gradient-to-b from-transparent to-[#e7e7e7]" />
                    </div>
                    <div className="flex-1 min-w-0 pl-[20px]">
                      <h3 className="text-[20px] font-semibold text-gray-900 leading-[1.2] tracking-[-0.02em] group-hover:text-[#00b5e2] transition-colors line-clamp-2">{l.title}</h3>
                      <p className="text-black/50 text-[16px] mt-1.5">{l.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Рекомендуемое ── */}
      <section className="pb-12 lg:pt-[70px] lg:pb-24">
        {/* Мобилка */}
        <div className="lg:hidden">
          <h2 className="text-[28px] font-semibold text-gray-900 text-center mb-8 leading-tight max-w-[280px] mx-auto">
            Рекомендуемое: другие статьи и публикации
          </h2>
          <MobileCarousel arrowsTop="35%">
            {recommended.map((item, i) => (
              <article key={`${item.title}-m${i}`} className="bg-white rounded-3xl overflow-hidden h-full">
                <div className="p-2 pb-0">
                  <div className="h-52 overflow-hidden rounded-[18px]">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 text-lg leading-snug mb-2.5">{item.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed mb-4 line-clamp-2">{item.excerpt}</p>
                  <p className="text-gray-400 text-xs mb-4">{item.date}</p>
                  <span className="inline-block text-sm font-semibold text-gray-900 border border-gray-900 rounded-full px-8 py-2.5">Подробнее</span>
                </div>
              </article>
            ))}
          </MobileCarousel>
          <div className="text-center mt-9">
            <Link to="/news" className="inline-block border-2 border-[#b7b7b7] text-gray-900 text-sm font-semibold rounded-full px-10 py-3.5">
              Все публикации
            </Link>
          </div>
        </div>

        {/* Десктоп */}
        <div className="container-main hidden lg:block">
          <div className="flex items-center gap-8 mb-8">
            <h2 className="text-[24px] font-semibold text-gray-900 tracking-[-0.02em] whitespace-nowrap">Рекомендуемое: другие статьи и публикации</h2>
            {/* Прогресс-бар прокрутки */}
            <div className="relative flex-1 max-w-[480px] h-[5px] rounded-full bg-black/15">
              <div className="absolute inset-y-0 left-0 w-[62%] rounded-full bg-black/30" />
            </div>
            <div className="flex items-center gap-3 ml-auto"><SliderArrows variant="outline" /></div>
          </div>
          <div className="grid grid-cols-4 gap-[15px]">
            {recommended.map((item) => (
              <article key={item.title} className="bg-white rounded-[28px] shadow-card overflow-hidden group cursor-pointer flex flex-col">
                <div className="p-2 pb-0">
                  <div className="h-[221px] overflow-hidden rounded-[20px]">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                </div>
                <div className="px-[23px] pt-[22px] pb-[26px] flex flex-col flex-1">
                  <h3 className="font-semibold text-gray-900 text-[20px] leading-[1.2] tracking-[-0.02em] group-hover:text-[#00b5e2] transition-colors mb-2.5">{item.title}</h3>
                  <p className="text-black text-[14px] leading-[1.35] mb-4 line-clamp-3">{item.excerpt}</p>
                  <p className="text-black/50 text-[12px] mb-5">{item.date}</p>
                  <span className="mt-auto inline-block text-center text-[14px] font-semibold text-black border border-black rounded-[42px] px-6 py-[13px] hover:bg-black hover:text-white transition-colors self-start">
                    Подробнее
                  </span>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/news" className="inline-block border-2 border-[#b7b7b7] text-gray-900 text-[14px] font-semibold rounded-[39px] px-9 py-[18px] hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors">
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
