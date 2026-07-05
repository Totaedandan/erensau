import { useState } from 'react'
import { Link } from 'react-router-dom'
import docKuatbekov from '@/assets/images/doc-kuatbekov.png'
import imgDoctorSenior from '@/assets/images/img-doctor-senior.jpg'
import imgDoctorPortrait from '@/assets/images/img-doctor-portrait.jpg'
import imgOperatingRoom from '@/assets/images/img-operating-room.jpg'
import checkupBg from '@/assets/images/checkup-bg.png'
import post1 from '@/assets/images/post1.jpg'
import heroSurgeon from '@/assets/images/hero-surgeon.png'
import logoMark from '@/assets/images/logo-mark.png'
import pictoHeart from '@/assets/icons/picto-heart.png'
import ContactForm from '@/components/ui/ContactForm'
import CTASlider from '@/components/ui/CTASlider'
import MobileCarousel from '@/components/ui/MobileCarousel'

// ── Круглые флаги стажировок ──
const FlagEU = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="12" fill="#003399" />
    <g fill="#ffcc00">
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 * Math.PI) / 180
        return <circle key={i} cx={12 + 6 * Math.sin(a)} cy={12 - 6 * Math.cos(a)} r="1" />
      })}
    </g>
  </svg>
)
const FlagRU = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24">
    <defs><clipPath id="ruClip"><circle cx="12" cy="12" r="12" /></clipPath></defs>
    <g clipPath="url(#ruClip)">
      <rect width="24" height="8" fill="#ffffff" />
      <rect y="8" width="24" height="8" fill="#0039a6" />
      <rect y="16" width="24" height="8" fill="#d52b1e" />
    </g>
  </svg>
)
const FlagUS = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24">
    <defs><clipPath id="usClip"><circle cx="12" cy="12" r="12" /></clipPath></defs>
    <g clipPath="url(#usClip)">
      <rect width="24" height="24" fill="#ffffff" />
      {[0, 2, 4, 6, 8, 10].map((i) => (
        <rect key={i} y={i * 2 - 0.2 + 2} width="24" height="1.8" fill="#b22234" />
      ))}
      <rect width="11" height="10" fill="#3c3b6e" />
    </g>
  </svg>
)
const FlagKR = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="12" fill="#ffffff" stroke="#e5e5e5" strokeWidth="0.5" />
    <path d="M12 7a5 5 0 015 5H7a5 5 0 015-5z" fill="#cd2e3a" />
    <path d="M12 17a5 5 0 01-5-5h10a5 5 0 01-5 5z" fill="#0047a0" />
  </svg>
)

const internships = [
  { flag: <FlagEU />, label: 'Европа' },
  { flag: <FlagRU />, label: 'Россия' },
  { flag: <FlagUS />, label: 'США' },
  { flag: <FlagKR />, label: 'Южная Корея' },
]

// ── Карточка «Персональная информация» — общая для мобилки и десктопа ──
function PersonalInfoCard({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-white rounded-[28px] p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] ${className}`}>
      <h3 className="text-[20px] lg:text-[22px] font-semibold text-gray-900 mb-4 lg:mb-5 whitespace-nowrap">Персональная информация</h3>
      <p className="text-gray-500 text-[13px] lg:text-sm leading-relaxed mb-3.5 lg:mb-4">
        Ему присвоена высшая квалификационная категория по специальности
        "взрослая и детская кардиохирургия".
      </p>
      <p className="text-gray-500 text-[13px] lg:text-sm leading-relaxed mb-5 lg:mb-6">
        Доктор, стоявший у истоков детской кардиохирургии в Казахстане,
        провёл первую открытую операцию на сердце в Кызылординской области.
      </p>
      <div className="border-t border-gray-200 pt-5 lg:pt-6 mb-2">
        <h3 className="text-[20px] lg:text-[22px] font-semibold text-gray-900 mb-4 lg:mb-5 whitespace-nowrap">Пройденные стажировки:</h3>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 lg:gap-y-4 mb-5 lg:mb-6">
          {internships.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              {s.flag}
              <span className="text-gray-900 text-[13px] lg:text-sm font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-200 pt-4 lg:pt-5">
        <p className="text-gray-500 text-[13px] lg:text-sm leading-relaxed">
          Автор 113 научных работ, 8 патентов и 3 методических рекомендаций.
          Наставник многих кардиохирургов страны.
        </p>
      </div>
    </div>
  )
}

// ── Плейсхолдер видео-отзыва (ассета с видео нет — имитация кадра) ──
function VideoTile({ big = false }: { big?: boolean }) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden flex-shrink-0 shadow-sm ${
        big ? 'w-[300px] lg:w-[368px] h-[535px] lg:h-[660px]' : 'w-[150px] h-[330px] md:w-[205px] md:h-[360px]'
      }`}
      style={{ background: 'linear-gradient(160deg, #e9dfd7 0%, #f2d9de 45%, #dfe9e3 100%)' }}
    >
      {/* Водяной знак erensau */}
      <div className={`absolute ${big ? 'top-8 right-8' : 'top-4 right-4'} text-right leading-none`}>
        <span className={`block font-bold lowercase text-[#00b5e2] ${big ? 'text-xl' : 'text-xs'}`}>erensau<sup className="text-[0.5em]">®</sup></span>
        <span className={`block lowercase text-[#7dd3ec] tracking-widest ${big ? 'text-[10px]' : 'text-[6px]'}`}>hospital</span>
      </div>
      {/* Подпись-цитата из видео */}
      <div className="absolute inset-x-0 top-[28%] flex justify-center px-3">
        <span className={`bg-white rounded-lg shadow-sm text-gray-800 text-center leading-snug ${big ? 'px-4 py-2 text-sm' : 'px-2.5 py-1.5 text-[9px]'}`}>
          сильные боли в спине<br />и на правой конечности
        </span>
      </div>
      {/* Нижние пиктограммы «плеера» */}
      <div className={`absolute bottom-3 left-3 rounded-full bg-black/35 text-white flex items-center justify-center ${big ? 'w-7 h-7' : 'w-5 h-5'}`}>
        <svg className={big ? 'w-4 h-4' : 'w-3 h-3'} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4 0-7 2-7 4.5V20h14v-1.5c0-2.5-3-4.5-7-4.5z" />
        </svg>
      </div>
      <div className={`absolute bottom-3 right-3 rounded-full bg-black/35 text-white flex items-center justify-center ${big ? 'w-7 h-7' : 'w-5 h-5'}`}>
        <svg className={big ? 'w-4 h-4' : 'w-3 h-3'} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.6 9H4a1 1 0 00-1 1v4a1 1 0 001 1h1.6L11 19V5L5.6 9zM16 9l5 6m0-6l-5 6" />
        </svg>
      </div>
    </div>
  )
}

const reviews = [
  { name: 'Natalya Bragina', text: 'Это счастье, попасть в руки прекрасного доктора. Жарас Асхатович Долаев - грамотный специалист, доброжелательный', date: '18 мая 2026', photo: imgDoctorPortrait },
  { name: 'Antonina Frolova', text: 'Я была на приеме у Ержан Кусманович, это врач от Бога. Пусть Бог благословит его и всю его семью.', date: '6 мая 2026', photo: imgDoctorSenior },
  { name: 'Lora Mukhamedova', text: 'Хочу выразить огромную благодарность торакальному хирургу Ешмуратову Т.Ш.и моему лечащему врачу Таменову И. Ж', date: '18 мая 2026', photo: docKuatbekov },
]

const lectures = [
  { img: imgOperatingRoom, title: 'Инновационные технологии в кардиохирургии:', desc: 'Сложнейший диагноз, риск полной остановки сердца — и всё же команда Erensau Hospital справилась...' },
  { img: checkupBg,        title: 'Сложные клинические случаи в кардиохирургии', desc: 'Одышка, боль под лопаткой и диагноз «пневмония», но смертельно опасный разрыв грудной аорты...' },
  { img: heroSurgeon,      title: 'Современная диагностика заболеваний сердца',  desc: 'Девочка появилась на свет с тяжелым врожденным пороком. Многие кардиоцентры отказывались устранять его...' },
  { img: post1,            title: 'Современная диагностика заболеваний сердца',  desc: 'Мультидисциплинарная команда врачей кардиохирургов, сосудистых хирургов и анестезиологов...' },
]

const VIDEO_DOTS = 7

export default function DoctorCardPage() {
  const [videoDot, setVideoDot] = useState(3)
  const prevVideo = () => setVideoDot((i) => (i - 1 + VIDEO_DOTS) % VIDEO_DOTS)
  const nextVideo = () => setVideoDot((i) => (i + 1) % VIDEO_DOTS)

  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Hero — светлая карточка: имя и рейтинг слева, фото по центру, персональная информация справа ── */}
      <section className="bg-[#f4f4f4] px-3 pt-2">
        <div
          className="relative overflow-hidden rounded-[28px] lg:min-h-[700px]"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 75% 65% at 50% 30%, #ffffff 0%, #f6f6f6 60%, #efefef 100%)',
          }}
        >
          {/* Фото врача — по центру, прижато к низу карточки */}
          <img
            src={docKuatbekov}
            alt="Куатбеков Кайрат Ниеталиевич"
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-0 h-[600px] w-auto object-contain object-bottom"
          />

          <div className="relative px-6 lg:px-28 pt-8 lg:pt-20 pb-0 lg:pb-16">
            {/* Левая колонка */}
            <div className="max-w-[560px]">
              <p className="text-[#00b5e2] text-sm lg:text-lg font-semibold mb-4 text-center lg:text-left">к.м.н., ассоциированный профессор</p>
              <div className="flex items-start gap-3 lg:gap-4 mb-6 lg:mb-9">
                <img src={logoMark} alt="" className="h-12 lg:h-24 w-auto flex-shrink-0" />
                <h1 className="text-[25px] lg:text-[48px] font-semibold text-gray-900 leading-[1.2] lg:leading-[1.15] tracking-tight">
                  Куатбеков Кайрат<br />Ниеталиевич
                </h1>
              </div>

              {/* Пилюля с должностью */}
              <div className="inline-flex items-center gap-3 lg:gap-4 bg-white rounded-full pl-2 lg:pl-2.5 pr-6 lg:pr-8 py-2 lg:py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.06)] mb-7 lg:mb-14">
                <span className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#cdeefb] flex items-center justify-center flex-shrink-0">
                  <img src={pictoHeart} alt="" className="w-full h-full" />
                </span>
                <span className="text-gray-900 text-[13px] lg:text-[15px] leading-snug">
                  Руководитель отделения<br />Кардиохирургии и Кардиологии
                </span>
              </div>

              {/* Рейтинг */}
              <h2 className="text-[24px] lg:text-2xl font-semibold text-gray-900 mb-3">Рейтинг врача</h2>
              <div className="flex items-center gap-1.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-7 h-7 text-[#00b5e2]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-[#00b5e2] text-2xl font-bold ml-2">5.0 / 5</span>
              </div>
              <p className="text-gray-400 text-[13px] mb-0 lg:mb-12">На основе 127 отзывов пациентов</p>

              <Link
                to="/contacts"
                className="hidden lg:inline-block bg-[#00b5e2] text-white text-[15px] font-semibold rounded-full px-10 py-4 shadow-[0_10px_30px_rgba(0,181,226,0.35)] hover:bg-[#0099c4] transition-colors"
              >
                Записаться на прием
              </Link>
            </div>

            {/* Мобилка: фото врача до краёв карточки */}
            <div className="lg:hidden -mx-6 mt-4">
              <img src={docKuatbekov} alt="Куатбеков Кайрат Ниеталиевич" className="w-full h-[245px] object-cover object-top" />
            </div>

            {/* Правая карточка «Персональная информация» (десктоп) */}
            <PersonalInfoCard className="hidden lg:block lg:absolute lg:right-16 lg:top-14 lg:w-[400px] z-10" />
          </div>
        </div>
      </section>

      {/* Мобилка: кнопка записи + персональная информация под hero */}
      <div className="lg:hidden container-main mt-5">
        <Link
          to="/contacts"
          className="block w-full bg-[#00b5e2] text-white text-[15px] font-semibold rounded-full py-4 text-center shadow-[0_10px_30px_rgba(0,181,226,0.35)]"
        >
          Записаться на прием
        </Link>
        <PersonalInfoCard className="mt-7" />
      </div>

      {/* ── Видео отзывы про врача ── */}
      <section className="bg-[#f4f4f4] pt-12 pb-10 lg:py-24">
        <h2 className="text-[28px] lg:text-[40px] font-semibold text-gray-900 text-center mb-4 lg:mb-12 max-w-[240px] lg:max-w-none mx-auto">
          Видео отзывы про врача
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center gap-3.5 px-4">
            <VideoTile />
            <VideoTile />
            <VideoTile big />
            <VideoTile />
            <VideoTile />
          </div>
          {/* Стрелки */}
          <button
            onClick={prevVideo}
            aria-label="Назад"
            className="absolute left-2 lg:left-24 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#00b5e2] text-white flex items-center justify-center hover:bg-[#0099c4] transition-colors shadow-lg z-10"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextVideo}
            aria-label="Вперёд"
            className="absolute right-2 lg:right-24 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#00b5e2] text-white flex items-center justify-center hover:bg-[#0099c4] transition-colors shadow-lg z-10"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        {/* Точки-пагинация */}
        <div className="flex items-center justify-center gap-2 mt-9 lg:mt-12">
          {Array.from({ length: VIDEO_DOTS }).map((_, i) => (
            <button
              key={i}
              onClick={() => setVideoDot(i)}
              aria-label={`Видео ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${i === videoDot ? 'bg-[#00b5e2]' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </section>

      {/* ── Отзывы: карточки слева, заголовок справа ── */}
      <section className="bg-[#f4f4f4] pt-10 pb-12 lg:py-20">
        <div className="container-main">

          {/* Мобильный заголовок над карточками */}
          <div className="lg:hidden text-center mb-6">
            <h2 className="text-[28px] font-semibold text-gray-900 mb-3 leading-tight">
              Нам доверяют<br />и говорят об этом
            </h2>
            <p className="text-gray-600 text-xs leading-relaxed max-w-[320px] mx-auto">
              Лучшая оценка нашей работы — слова людей, которым мы помогли.
              Читайте отзывы наших пациентов или поделитесь своим опытом после
              визита в Erensau Hospital
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Карточки — лесенкой */}
            <div className="space-y-3 lg:space-y-5">
              {reviews.map((r, idx) => (
                <div key={r.name} className={`bg-white rounded-3xl p-4 lg:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)] ${idx % 2 === 1 ? '' : 'mx-3 lg:mx-0 lg:ml-10 lg:mr-6'}`}>
                  <div className="flex items-center justify-between gap-3 mb-2.5 lg:mb-4">
                    <div className="flex items-center gap-2.5 lg:gap-3">
                      <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                        <img src={r.photo} alt={r.name} className="w-full h-full object-cover object-top" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-[13px] lg:text-sm">{r.name}</div>
                        <div className="text-gray-400 text-[11px] lg:text-xs">{r.date}</div>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#7dd3ec]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>

            {/* Заголовок + CTA (десктоп) */}
            <div className="hidden lg:block lg:sticky lg:top-28">
              <h2 className="text-2xl lg:text-[40px] font-semibold text-gray-900 mb-5 leading-tight">
                Нам доверяют<br />и говорят об этом
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
                Лучшая оценка нашей работы — слова людей, которым мы помогли. Читайте
                отзывы наших пациентов или поделитесь своим опытом после визита в Erensau Hospital
              </p>
              <Link to="/contacts" className="bg-[#00b5e2] text-white text-sm font-semibold rounded-full px-16 py-3.5 inline-block hover:bg-[#0099c4] transition-colors">Оставьте отзыв</Link>
            </div>
          </div>

          {/* Мобилка: кнопка после карточек */}
          <div className="lg:hidden text-center mt-7">
            <Link to="/contacts" className="inline-block bg-[#00b5e2] text-white text-sm font-semibold rounded-full px-16 py-4">Оставьте отзыв</Link>
          </div>
        </div>
      </section>

      {/* ── Лекции от Куатбекова К.Н. ── */}
      <section className="bg-[#f4f4f4] pt-10 pb-10 lg:py-20">

        {/* Мобилка: заголовок по центру + карусель */}
        <div className="lg:hidden">
          <h2 className="text-[28px] font-semibold text-gray-900 text-center mb-7 leading-tight max-w-[260px] mx-auto">
            Лекции от Куатбекова К.Н.
          </h2>
          <MobileCarousel arrowsTop="32%">
            {lectures.map((l, i) => (
              <article key={`${l.title}-m${i}`} className="bg-white rounded-3xl overflow-hidden h-full">
                <div className="h-40 overflow-hidden">
                  <img src={l.img} alt={l.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 text-lg leading-snug mb-2">{l.title}</h3>
                  <p className="text-gray-600 text-[13px] leading-relaxed mb-4">{l.desc}</p>
                  <Link
                    to="/news"
                    className="inline-block text-sm font-semibold text-gray-900 border border-gray-300 rounded-full px-10 py-2.5"
                  >
                    Подробнее
                  </Link>
                </div>
              </article>
            ))}
          </MobileCarousel>
        </div>

        <div className="container-main hidden lg:block">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-10">
            <h2 className="text-3xl lg:text-[40px] font-semibold text-gray-900 whitespace-nowrap">
              Лекции от Куатбекова К.Н.
            </h2>
            {/* Полоса прогресса карусели */}
            <div className="hidden lg:block flex-1 h-1 rounded-full bg-gray-300/70 relative ml-6">
              <div className="absolute left-[62%] top-0 h-full w-[18%] rounded-full bg-gray-500/60" />
            </div>
            <div className="flex items-center gap-2.5">
              <button
                aria-label="Назад"
                className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-gray-900 hover:text-[#00b5e2] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                aria-label="Вперёд"
                className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-gray-900 hover:text-[#00b5e2] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {lectures.map((l, i) => (
              <article key={`${l.title}-${i}`} className="bg-white rounded-3xl p-2 flex flex-col shadow-sm">
                <div className="h-56 overflow-hidden rounded-[20px]">
                  <img src={l.img} alt={l.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg leading-snug mb-3">{l.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{l.desc}</p>
                  <Link
                    to="/news"
                    className="inline-block self-start text-sm font-semibold text-gray-900 border border-gray-800 rounded-full px-10 py-3 hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors"
                  >
                    Подробнее
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Форма «Расскажите как прошел ваш визит» ── */}
      <ContactForm
        heading={'Расскажите как\nпрошел ваш визит'}
        text="Мы читаем каждый отзыв и учитываем его в работе. Напишите, что вам понравилось или что можно улучшить"
      />

      {/* ── CTA-слайдер ── */}
      <CTASlider />

    </div>
  )
}
