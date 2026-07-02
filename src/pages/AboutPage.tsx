import { Link } from 'react-router-dom'
import imgDoctorSenior from '@/assets/images/img-doctor-senior.jpg'
import imgDoctorSenior2 from '@/assets/images/img-doctor-senior2.jpg'
import imgDoctorPortrait from '@/assets/images/img-doctor-portrait.jpg'
import heroSurgeon from '@/assets/images/hero-surgeon.png'
import doctor1 from '@/assets/images/doctor1.jpg'
import doctor2 from '@/assets/images/doctor2.jpg'
import doctor3 from '@/assets/images/doctor3.jpg'
import doctor4 from '@/assets/images/doctor4.jpg'
import LogoMark from '@/assets/icons/logo-group.svg?react'
import CTASlider from '@/components/ui/CTASlider'

export default function AboutPage() {
  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Hero — карточка «Почему выбирают нас» ── */}
      <section className="bg-[#f4f4f4] px-3 pt-2">
        <div
          className="relative overflow-hidden rounded-[28px] min-h-[800px]"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 75% 65% at 50% 30%, #ffffff 0%, #f6f6f6 60%, #efefef 100%)',
          }}
        >
          {/* Фото врача — по центру, прижато к низу карточки */}
          <img
            src={imgDoctorSenior}
            alt="Ниеталиев Кайрат"
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-0 h-[660px] w-auto object-contain object-bottom"
          />

          <div className="relative px-8 lg:px-28 pt-12 lg:pt-36 pb-10">

            {/* Верх: заголовок слева + статистика справа */}
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              <div className="flex items-start gap-4">
                <LogoMark className="h-16 lg:h-20 w-auto flex-shrink-0 mt-1" style={{ ['--fill-0' as string]: '#00b5e2' }} />
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.05] tracking-tight">
                  Почему<br />выбирают нас
                </h1>
              </div>

              <div className="grid grid-cols-2 gap-x-14 gap-y-6 lg:pt-2">
                {[
                  { val: '10K', label: 'операций\nна счету' },
                  { val: '12K', label: 'пациентов\nв год' },
                  { val: '60+', label: 'ведущих\nэкспертов' },
                  { val: '20',  label: 'лет\nопыта' },
                ].map((s) => (
                  <div key={s.label} className="flex items-start gap-2.5">
                    <div className="text-4xl font-bold text-[#00b5e2] leading-none">{s.val}</div>
                    <div className="text-gray-600 text-[11px] whitespace-pre-line leading-tight mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Левая колонка: описание → аватары → цитата */}
            <div className="relative z-10 max-w-[320px] mt-10">
              <p className="text-gray-800 text-[13px] leading-relaxed">
                В Erensau Hospital мы применяем современные
                методы сердечно-сосудистой хирургии,
                чтобы восстанавливать здоровье
                и продлевать жизнь нашим пациентам.
              </p>

              {/* Аватары врачей */}
              <div className="hidden lg:flex items-center gap-2.5 mt-28">
                {[doctor1, doctor2, doctor3, doctor4, imgDoctorSenior2, imgDoctorPortrait].map((d, i) => (
                  <div
                    key={i}
                    className={`rounded-full overflow-hidden border-2 shadow-sm ${
                      i === 0 ? 'w-16 h-16 border-[#00b5e2]' : 'w-14 h-14 border-white'
                    }`}
                  >
                    <img src={d} alt="" className="w-full h-full object-cover object-top" />
                  </div>
                ))}
              </div>

              {/* Цитата */}
              <blockquote className="mt-12 text-gray-500 text-[13px] italic leading-relaxed">
                «Сложные операции требуют не только решительности. Они требуют
                опыта, команды и ответственности за каждый миллиметр»
              </blockquote>
            </div>

            {/* Визитка справа от плеча врача */}
            <div className="hidden lg:block absolute right-[15%] top-[54%] bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] w-[270px] z-10">
              <p className="text-[#00b5e2] text-xs font-medium mb-2.5">к.м.н., ассоциированный профессор</p>
              <h3 className="font-bold text-gray-900 text-lg leading-tight mb-3.5">
                Ниеталиев Кайрат<br />Ниеталиевич
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Руководитель отделения<br />Кардиохирургии и Кардиологии
              </p>
            </div>

            {/* Кнопка «Все врачи» */}
            <Link
              to="/doctors"
              className="hidden lg:block absolute right-[21%] bottom-24 bg-white text-gray-900 text-sm font-medium rounded-full px-12 py-3.5 shadow-md hover:text-[#00b5e2] transition-colors z-10"
            >
              Все врачи
            </Link>
          </div>
        </div>
      </section>

      {/* ── Миссия / Видение / Ценности ── */}
      <section className="bg-[#f4f4f4] py-16 lg:py-24">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Левая колонка: Миссия + Видение */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">Миссия</h2>
              <p className="text-gray-500 text-[13px] leading-relaxed max-w-md">
                Обеспечение точных решений для сложных случаев с акцентом на высокое
                качество медицинской помощи с вниманием к каждому пациенту
              </p>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5">Видение</h2>
              <p className="text-gray-500 text-[13px] leading-relaxed max-w-md">
                Стать национальным лидером в решении сложных медицинских случаев,
                формируя в Казахстане центр притяжения лучших врачей, передовых
                медицинских технологий для пациентов из Казахстана и зарубежных стран.
              </p>
            </div>
          </div>

          {/* Правая колонка: Ценности — таблица с разделителями */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Ценности</h2>
            <ul>
              {[
                { t: 'Профессионализм', d: 'предоставление медицинских услуг на самом высоком уровне.' },
                { t: 'Сопереживание',   d: 'забота о здоровье и благополучии каждого пациента.' },
                { t: 'Инновации',       d: 'постоянное внедрение современных технологий и методов лечения.' },
                { t: 'Доверие',         d: 'открытость, честность и прозрачность в отношениях с пациентами и партнерами.' },
                { t: 'Партнерство',     d: 'развитие стратегических партнерств, направленных на общий рост и повышение качества медицинских решений.' },
              ].map((v, i) => (
                <li key={v.t} className="grid grid-cols-[28px_170px_1fr] gap-3 items-start py-3.5 border-b border-gray-200 last:border-b-0">
                  <span className="text-[#00b5e2] font-bold text-[15px] leading-snug">{i + 1}</span>
                  <span className="font-bold text-gray-900 text-sm leading-snug">{v.t}</span>
                  <span className="text-gray-600 text-[13px] italic leading-relaxed">{v.d}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ── Видео-секция ── */}
      <section className="bg-[#f4f4f4] pb-16 lg:pb-24">
        <div className="container-main">
          <div className="relative rounded-[28px] overflow-hidden aspect-[2/1] bg-gray-900">
            <img
              src={heroSurgeon}
              alt="Операционная Erensau"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0a1628]/20" />
            {/* Голубая кнопка play */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                aria-label="Воспроизвести"
                className="w-20 h-20 bg-[#00b5e2] rounded-full flex items-center justify-center hover:bg-[#0099c4] transition-colors shadow-2xl"
              >
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA-слайдер ── */}
      <CTASlider />

    </div>
  )
}
