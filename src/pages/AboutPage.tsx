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

      {/* ── Hero — Почему выбирают нас ── */}
      <section
        className="relative overflow-hidden bg-[#f4f4f4]"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 60% at 50% 35%, rgba(255,255,255,0.95) 0%, rgba(244,244,244,0.6) 70%, transparent 100%)',
        }}
      >
        <div className="container-main relative pt-10 lg:pt-14 pb-12">

          {/* Hero контент: 2 ряда */}
          <div className="relative min-h-[680px]">

            {/* ── Верхний ряд: заголовок слева + статистика справа ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Заголовок (на всю ширину левой половины) */}
              <div className="flex items-start gap-4">
                <LogoMark className="h-12 lg:h-16 w-auto flex-shrink-0 mt-2" style={{ ['--fill-0' as string]: '#00b5e2' }} />
                <h1 className="text-5xl lg:text-[80px] font-bold text-gray-900 leading-[0.95] tracking-tight">
                  Почему<br />выбирают нас
                </h1>
              </div>

              {/* Статистики 2×2 — справа сверху, голубые */}
              <div className="grid grid-cols-2 gap-x-10 gap-y-7 lg:pt-4 lg:pl-8">
                {[
                  { val: '10K', label: 'операций\nна счету' },
                  { val: '12K', label: 'пациентов\nв год' },
                  { val: '60+', label: 'ведущих\nэкспертов' },
                  { val: '20',  label: 'лет\nопыта' },
                ].map((s) => (
                  <div key={s.label} className="flex items-baseline gap-3">
                    <div className="text-4xl lg:text-[52px] font-bold text-[#00b5e2] leading-none">{s.val}</div>
                    <div className="text-gray-700 text-xs whitespace-pre-line leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Описание слева + фото в центре + визитка справа ── */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr_1fr] gap-6 lg:gap-4 items-end min-h-[440px]">
              {/* Описание слева */}
              <div className="lg:pb-32">
                <p className="text-gray-800 text-sm leading-relaxed max-w-sm">
                  В Erensau Hospital мы применяем современные
                  методы сердечно-сосудистой хирургии,
                  чтобы восстанавливать здоровье
                  и продлевать жизнь нашим пациентам.
                </p>
              </div>

              {/* Фото врача в центре */}
              <div className="relative hidden lg:flex items-end justify-center">
                <img
                  src={imgDoctorSenior}
                  alt="Ниеталиев Кайрат"
                  className="h-[580px] w-auto object-contain object-bottom"
                />
              </div>

              {/* Визитка + кнопка справа */}
              <div className="flex flex-col gap-8 lg:pb-12">
                <div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                  <p className="text-[#00b5e2] text-xs font-medium mb-2.5">к.м.н., ассоциированный профессор</p>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight mb-3.5">
                    Ниеталиев Кайрат<br />Ниеталиевич
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Руководитель отделения<br />Кардиохирургии и Кардиологии
                  </p>
                </div>
                <Link
                  to="/doctors"
                  className="bg-white border border-gray-300 text-gray-900 text-sm font-medium rounded-full px-14 py-4 hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors text-center mx-auto"
                >
                  Все врачи
                </Link>
              </div>
            </div>

            {/* Аватары врачей (6 в строку) под фото слева */}
            <div className="hidden lg:flex items-center gap-3 absolute left-0 bottom-6 z-10">
              {[doctor1, doctor2, doctor3, doctor4, imgDoctorSenior2, imgDoctorPortrait].map((d, i) => (
                <div key={i} className="relative">
                  {i === 0 && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#00b5e2] rounded-full" />
                  )}
                  <div className={`w-14 h-14 rounded-full overflow-hidden border-2 ${i === 0 ? 'border-[#00b5e2]' : 'border-white'} shadow-sm`}>
                    <img src={d} alt="" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Цитата внизу hero */}
          <blockquote className="mt-10 max-w-md text-gray-500 text-sm lg:text-base italic leading-relaxed">
            «Сложные операции требуют не только решительности. Они требуют опыта,
            команды и ответственности за каждый миллиметр»
          </blockquote>
        </div>
      </section>

      {/* ── Миссия / Видение / Ценности ── */}
      <section className="bg-[#f4f4f4] py-16 lg:py-24">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Левая колонка: Миссия + Видение */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl lg:text-[40px] font-bold text-gray-900 mb-5">Миссия</h2>
              <p className="text-gray-500 text-sm lg:text-base leading-relaxed max-w-md">
                Обеспечение точных решений для сложных случаев с акцентом на высокое
                качество медицинской помощи с вниманием к каждому пациенту
              </p>
            </div>
            <div>
              <h2 className="text-3xl lg:text-[40px] font-bold text-gray-900 mb-5">Видение</h2>
              <p className="text-gray-500 text-sm lg:text-base leading-relaxed max-w-md">
                Стать национальным лидером в решении сложных медицинских случаев,
                формируя в Казахстане центр притяжения лучших врачей, передовых
                медицинских технологий для пациентов из Казахстана и зарубежных стран.
              </p>
            </div>
          </div>

          {/* Правая колонка: Ценности */}
          <div>
            <h2 className="text-3xl lg:text-[40px] font-bold text-gray-900 mb-8">Ценности</h2>
            <ul className="space-y-6">
              {[
                { t: 'Профессионализм', d: 'предоставление медицинских услуг на самом высоком уровне.' },
                { t: 'Сопереживание',   d: 'забота о здоровье и благополучии каждого пациента.' },
                { t: 'Инновации',       d: 'постоянное внедрение современных технологий и методов лечения.' },
                { t: 'Доверие',         d: 'открытость, честность и прозрачность в отношениях с пациентами и партнёрами.' },
                { t: 'Партнёрство',     d: 'развитие стратегических партнёрств, направленных на общий рост и повышение качества медицинских решений.' },
              ].map((v, i) => (
                <li key={v.t} className="flex gap-4">
                  <span className="text-[#00b5e2] font-bold text-lg leading-tight w-6 flex-shrink-0">{i + 1}</span>
                  <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                    <span className="font-bold text-gray-900">{v.t}</span> — {v.d}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ── Видео-секция ── */}
      <section className="bg-[#f4f4f4] pb-16 lg:pb-24">
        <div className="container-main">
          <div className="relative rounded-[40px] overflow-hidden aspect-[16/7] bg-gray-900">
            <img
              src={heroSurgeon}
              alt="Операционная Erensau"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0a1628]/30" />
            {/* Голубая кнопка play */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                aria-label="Воспроизвести"
                className="w-20 h-20 lg:w-24 lg:h-24 bg-[#00b5e2] rounded-full flex items-center justify-center hover:bg-[#0099c4] transition-colors shadow-2xl"
              >
                <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white ml-1.5" fill="currentColor" viewBox="0 0 24 24">
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
