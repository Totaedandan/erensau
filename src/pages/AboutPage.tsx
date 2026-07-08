import { useState } from 'react'
import { Link } from 'react-router-dom'
import docNietalievHd from '@/assets/images/doc-nietaliev-hd.png'
import docKospanov from '@/assets/images/doc-kospanov.png'
import docKospanovHd from '@/assets/images/doc-kospanov-hd.png'
import docEshmuratov from '@/assets/images/doc-eshmuratov.png'
import docKusainov from '@/assets/images/doc-kusainov.png'
import docIzhanov from '@/assets/images/doc-izhanov.png'
import docAkanov from '@/assets/images/doc-akanov.png'
import heroSurgeon from '@/assets/images/hero-surgeon.png'
import logoMark from '@/assets/images/logo-mark.png'
import CTASlider from '@/components/ui/CTASlider'

// hero — позиция фото в hero-карточке (из Figma 2672:10604 и 2785:197):
// top/h/w в px при ширине карточки 1440, x — сдвиг центра фото от середины.
// Торсовые фото (290×408) увеличены до бюст-масштаба (h 1064 ≈ ширина 756, как у HD-кропов),
// top подобран по прозрачным полям PNG — макушки у всех почти на одном уровне.
// heroPhoto — крупный кроп для hero (пока есть только у Ниеталиева и Коспанова).
type TeamDoctor = {
  photo: string
  heroPhoto: string
  hero: { top: number; h?: number; w?: number; x: number }
  title: string
  name: string[]
  position: string[]
}
const teamDoctors: TeamDoctor[] = [
  { photo: docNietalievHd, heroPhoto: docNietalievHd, hero: { top: 78, h: 673,  x: 16 },  title: 'к.м.н., ассоциированный профессор', name: ['Ниеталиев Кайрат', 'Ниеталиевич'],   position: ['Руководитель отделения', 'Кардиохирургии и Кардиологии'] },
  { photo: docKospanov,   heroPhoto: docKospanovHd,   hero: { top: 78, h: 520,   x: -40 }, title: 'к.м.н., ассоциированный профессор', name: ['Коспанов Нурсултан', 'Айдарханович'], position: ['Руководитель профиля', 'сосудистой хирургии'] },
  { photo: docEshmuratov, heroPhoto: docEshmuratov,   hero: { top: 49, h: 1064, x: -40 }, title: 'к.м.н., ассоциированный профессор', name: ['Ешмуратов Темур', 'Шерханович'],     position: ['Руководитель профиля Торакальной', 'хирургии и Пульмонологии'] },
  { photo: docKusainov,   heroPhoto: docKusainov,     hero: { top: 69, h: 1064, x: -40 }, title: 'к.м.н. (PhD)',                      name: ['Кусаинов Адилет', 'Шингисович'],     position: ['Руководитель профиля ОАРИТ'] },
  { photo: docIzhanov,    heroPhoto: docIzhanov,      hero: { top: 77, h: 1064, x: -40 }, title: 'Доктор медицинских наук, профессор', name: ['Ижанов Ерген', 'Бахчанович'],        position: ['Руководитель профиля общей', 'хирургии и онкологии'] },
  { photo: docAkanov,     heroPhoto: docAkanov,       hero: { top: 61, h: 1064, x: -40 }, title: 'к.м.н., профессор',                 name: ['Аканов Ержан', 'Кусманович'],        position: ['Руководитель узких', 'хирургических профилей'] },
]

export default function AboutPage() {
  const [selected, setSelected] = useState(0)
  const doc = teamDoctors[selected]
  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Hero — карточка «Почему выбирают нас» ── */}
      <section className="bg-[#f4f4f4] px-3 pt-2 lg:pt-0 lg:max-w-[1440px] lg:mx-auto">
        <div
          className="relative overflow-hidden rounded-[24px] lg:rounded-[15px] border border-[#c2c2c2] bg-[#eaeaea] min-h-[800px] lg:min-h-0 lg:aspect-[1414/707]"
          style={{
            // Концентрические кольца фона (Figma 2672:10598–10602): центр за спиной врача, радиусы 337/524/676/858/1035
            backgroundImage:
              'radial-gradient(circle at 48.4% 98.2%, #efefef 0px, #f5f5f5 337px, #ebebeb 430px, #f3f3f3 524px, #eaeaea 600px, #f1f1f1 676px, #eaeaea 767px, #f0f0f0 858px, #eaeaea 947px, #eeeeee 1035px, #eaeaea 1120px)',
          }}
        >
          {/* Прямоугольник снизу (Figma 2672:10603): тёмная дымка #042531 → прозрачный, 10% */}
          <div className="absolute inset-x-0 -bottom-[41px] h-[370px] bg-gradient-to-t from-[#042531] to-transparent opacity-10 pointer-events-none" />

          {/* Фото выбранного врача — позиция и масштаб свои у каждого (головы на одном уровне), низ уходит за карточку */}
          <img
            src={doc.heroPhoto}
            alt={doc.name.join(' ')}
            className="hidden lg:block absolute -translate-x-1/2 max-w-none"
            style={{
              top: doc.hero.top,
              height: doc.hero.h,
              width: doc.hero.w,
              left: `calc(50% + ${doc.hero.x}px)`,
            }}
          />

          {/* ── Десктоп: заголовок + статистика + левая колонка ── */}
          <div className="hidden lg:block relative z-10 px-28 pt-[116px]">
            <div className="flex justify-between gap-8">
              <div className="flex items-center gap-5">
                <img src={logoMark} alt="" className="h-[119px] w-auto flex-shrink-0" />
                <h1 className="text-5xl font-semibold text-gray-900 leading-[1.08] tracking-tight">
                  Почему<br />выбирают нас
                </h1>
              </div>

              <div className="grid grid-cols-2 gap-x-16 gap-y-7 pt-1">
                {[
                  { val: '10K', label: 'операций\nна счету' },
                  { val: '12K', label: 'пациентов\nв год' },
                  { val: '60+', label: 'ведущих\nэкспертов' },
                  { val: '20',  label: 'лет\nопыта' },
                ].map((s) => (
                  <div key={s.label} className="flex items-start gap-3">
                    <div className="text-[42px] font-bold text-[#00b5e2] leading-none">{s.val}</div>
                    <div className="text-gray-700 text-[13px] whitespace-pre-line leading-tight mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-[330px]">
              <p className="text-gray-800 text-[13px] leading-relaxed mt-6">
                В Erensau Hospital мы применяем современные
                методы сердечно-сосудистой хирургии,
                чтобы восстанавливать здоровье
                и продлевать жизнь нашим пациентам.
              </p>

              {/* Аватары врачей — выбор меняет фото и визитку; все 56px, gap 12 (Figma 2672:10628) */}
              <div className="flex items-center gap-3 mt-[92px]">
                {teamDoctors.map((d, i) => (
                  <button
                    key={i}
                    onClick={() => setSelected(i)}
                    aria-label={d.name.join(' ')}
                    className="relative flex-shrink-0 rounded-full transition-transform hover:scale-105"
                  >
                    {i === selected && (
                      <span className="absolute -top-[17px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#00b5e2]" />
                    )}
                    <span
                      className={`block rounded-full overflow-hidden w-[56px] h-[56px] ${
                        i === selected ? 'bg-[#00b5e2]' : 'bg-white'
                      }`}
                    >
                      <img src={d.photo} alt="" className="w-full h-full object-cover object-top" />
                    </span>
                  </button>
                ))}
              </div>

              <blockquote className="mt-11 text-gray-700 text-[13px] italic leading-relaxed">
                «Сложные операции требуют не только решительности. Они требуют
                опыта, команды и ответственности за каждый миллиметр»
              </blockquote>
            </div>
          </div>

          {/* Десктоп: визитка выбранного врача — поверх правого плеча */}
          <div className="hidden lg:block absolute z-10 left-[calc(50%+215px)] top-[335px] w-[292px] bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <p className="text-[#00b5e2] text-xs font-semibold mb-3">{doc.title}</p>
            <h3 className="font-semibold text-gray-900 text-xl leading-tight mb-4">
              {doc.name.map((l, i) => (
                <span key={i}>{l}{i < doc.name.length - 1 && <br />}</span>
              ))}
            </h3>
            <p className="text-gray-700 text-[13px] leading-relaxed">
              {doc.position.map((l, i) => (
                <span key={i}>{l}{i < doc.position.length - 1 && <br />}</span>
              ))}
            </p>
          </div>

          {/* Десктоп: кнопка «Все врачи» */}
          <Link
            to="/doctors"
            className="hidden lg:block absolute z-10 left-[calc(50%+220px)] top-[600px] bg-white text-gray-900 text-sm font-semibold rounded-full px-12 py-4 shadow-md hover:text-[#00b5e2] transition-colors"
          >
            Все врачи
          </Link>

          {/* ── Мобилка ── */}
          <div className="lg:hidden relative px-7 pt-10 pb-6">
            <div className="flex items-center gap-3.5 mb-6">
              <img src={logoMark} alt="" className="h-[74px] w-auto flex-shrink-0" />
              <h1 className="text-[27px] font-semibold text-gray-900 leading-[1.12] tracking-tight">
                Почему<br />выбирают нас
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-4 mb-6">
              {[
                { val: '10K', label: 'операций\nна счету' },
                { val: '12K', label: 'пациентов\nв год' },
                { val: '60+', label: 'ведущих\nэкспертов' },
                { val: '20',  label: 'лет\nопыта' },
              ].map((s) => (
                <div key={s.label} className="flex items-start gap-2.5">
                  <div className="text-[34px] font-bold text-gray-900 leading-none">{s.val}</div>
                  <div className="text-gray-700 text-[11px] whitespace-pre-line leading-tight mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-800 text-[13px] leading-relaxed mb-6">
              В Erensau Hospital мы применяем современные методы сердечно-сосудистой хирургии, чтобы восстанавливать здоровье и продлевать жизнь нашим пациентам.
            </p>
            <div className="flex items-center gap-2 mb-6">
              {teamDoctors.map((d, i) => (
                <button key={i} onClick={() => setSelected(i)} aria-label={d.name.join(' ')} className="relative flex-shrink-0">
                  {i === selected && <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#00b5e2]" />}
                  <span className={`block rounded-full overflow-hidden ${i === selected ? 'w-12 h-12 bg-[#00b5e2]' : 'w-11 h-11 bg-white ring-2 ring-white'}`}>
                    <img src={d.photo} alt="" className="w-full h-full object-cover object-top" />
                  </span>
                </button>
              ))}
            </div>
            <blockquote className="text-gray-700 text-[13px] italic leading-relaxed">
              «Сложные операции требуют не только решительности. Они требуют опыта, команды и ответственности за каждый миллиметр»
            </blockquote>

            <div className="relative -mx-7 mt-4">
              <img src={doc.heroPhoto} alt={doc.name.join(' ')} className="w-full h-[440px] object-contain object-bottom" />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[250px] bg-white rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
                <p className="text-[#00b5e2] text-xs font-semibold mb-2">{doc.title}</p>
                <h3 className="font-semibold text-gray-900 text-base leading-tight mb-2.5">
                  {doc.name.map((l, i) => (<span key={i}>{l}{i < doc.name.length - 1 && <br />}</span>))}
                </h3>
                <p className="text-gray-700 text-xs leading-relaxed">
                  {doc.position.map((l, i) => (<span key={i}>{l}{i < doc.position.length - 1 && <br />}</span>))}
                </p>
              </div>
              <Link to="/doctors" className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-900 text-sm font-semibold rounded-full px-16 py-3.5 shadow-md whitespace-nowrap">
                Все врачи
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Миссия / Видение / Ценности ── */}
      <section className="bg-[#f4f4f4] py-12 lg:py-24">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-20">

          {/* Левая колонка: Миссия + Видение (с разделителями) */}
          <div className="space-y-9 lg:space-y-11">
            <div className="max-w-[520px] border-b border-neutral-300 pb-9 lg:pb-11">
              <h2 className="text-3xl lg:text-[42px] font-semibold text-neutral-900 mb-5">Миссия</h2>
              <p className="text-[#656565] text-[13px] leading-relaxed">
                Обеспечение точных решений для сложных случаев с акцентом на высокое
                качество медицинской помощи с вниманием к каждому пациенту
              </p>
            </div>
            <div className="max-w-[520px] border-b border-neutral-300 pb-9 lg:pb-11">
              <h2 className="text-3xl lg:text-[42px] font-semibold text-neutral-900 mb-5">Видение</h2>
              <p className="text-[#656565] text-[13px] leading-relaxed">
                Стать национальным лидером в решении сложных медицинских случаев,
                формируя в Казахстане центр притяжения лучших врачей, передовых
                медицинских технологий для пациентов из Казахстана и зарубежных стран.
              </p>
            </div>
          </div>

          {/* Правая колонка: Ценности — таблица с разделителями */}
          <div>
            <h2 className="text-3xl lg:text-[42px] font-semibold text-neutral-900 mb-6">Ценности</h2>
            <ul>
              {[
                { t: 'Профессионализм', d: ['предоставление медицинских', 'услуг на самом высоком уровне.'] },
                { t: 'Сопереживание',   d: ['забота о здоровье', 'и благополучии каждого пациента.'] },
                { t: 'Инновации',       d: ['постоянное внедрение современных', 'технологий и методов лечения.'] },
                { t: 'Доверие',         d: ['открытость, честность и прозрачность', 'в отношениях с пациентами и партнерами'] },
                { t: 'Партнерство',     d: ['развитие стратегических партнерств,', 'направленных на общий рост и повышение', 'качества медицинских решений.'] },
              ].map((v, i) => (
                <li key={v.t} className="grid grid-cols-[20px_126px_1fr] lg:grid-cols-[32px_185px_1fr] gap-3 items-start py-3 lg:py-4 border-b border-neutral-200 last:border-b-0">
                  <span className="text-[#00b5e2] font-bold text-base lg:text-lg leading-snug">{i + 1}</span>
                  <span className="font-bold text-neutral-900 text-[13px] lg:text-sm leading-snug">{v.t}</span>
                  <span className="text-[#565656] text-[13px] italic leading-relaxed">
                    {v.d.map((l, j) => (<span key={j}>{l}{j < v.d.length - 1 && <br />}</span>))}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ── Видео-секция ── */}
      <section className="bg-[#f4f4f4] pb-12 lg:pb-24">
        <div className="container-main">
          <div className="relative rounded-[28px] overflow-hidden h-[530px] lg:h-auto lg:aspect-[2/1] bg-gray-900">
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
