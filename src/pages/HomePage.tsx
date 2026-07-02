import { useState } from 'react'
import { Link } from 'react-router-dom'

import heroDoctorImg from '@/assets/images/hero-surgeon.png'
import imgDoctorSenior from '@/assets/images/img-doctor-senior.jpg'
import imgDoctorSenior2 from '@/assets/images/img-doctor-senior2.jpg'
import imgOperatingRoom from '@/assets/images/img-operating-room.jpg'
import doctor1 from '@/assets/images/doctor1.jpg'
import doctor2 from '@/assets/images/doctor2.jpg'
import doctor3 from '@/assets/images/doctor3.jpg'
import doctor4 from '@/assets/images/doctor4.jpg'
import post1 from '@/assets/images/post1.jpg'
import post2 from '@/assets/images/post2.jpg'

import featureStories from '@/assets/icons/feature-stories.svg'
import featureDoctors from '@/assets/icons/feature-doctors.svg'
import featureEquipment from '@/assets/icons/feature-equipment.svg'
import featurePricing from '@/assets/icons/feature-pricing.svg'
import svcCardiac from '@/assets/icons/picto-heart.png'
import svcVascular from '@/assets/icons/picto-vessels.png'
import svcSurgery from '@/assets/icons/picto-scalpel.png'
import svcThoracic from '@/assets/icons/picto-lungs.png'
import svcGynecology from '@/assets/icons/picto-uterus.png'
import svcAnesthesia from '@/assets/icons/picto-monitor.png'
import LogoMark from '@/assets/icons/logo-group.svg?react'
import logoMark from '@/assets/images/logo-mark.png'

import CTASlider from '@/components/ui/CTASlider'
import ContactForm from '@/components/ui/ContactForm'
import ContactsMapCard from '@/components/ui/ContactsMapCard'
import MobileCarousel from '@/components/ui/MobileCarousel'

const features = [
  { icon: featureDoctors, label: 'Опытные врачи с PhD и международной практикой' },
  { icon: featureStories, label: 'Реальные истории пациентов' },
  { icon: featurePricing, label: 'Прозрачные цены и гибкие условия' },
  { icon: featureEquipment, label: 'Современное оборудование' },
]

const services = [
  { icon: svcCardiac,    title: 'Кардиохирургия / Кардиология',                            desc: 'Современная диагностика, профилактика и лечение заболеваний сердца и сердечно-сосудистой системы' },
  { icon: svcVascular,   title: 'Сосудистая хирургия / Флебология / Лимфология',          desc: 'Диагностика и лечение заболеваний вен, артерий и лимфатической системы с применением современных методов' },
  { icon: svcSurgery,    title: 'Гепатобилиарная хирургия, Общая хирургия и Онкология',    desc: 'Хирургическое лечение различных заболеваний, включая современные подходы в онкологии' },
  { icon: svcThoracic,   title: 'Торакальная хирургия / Пульмонология',                   desc: 'Диагностика и лечение заболеваний легких, дыхательных путей и органов грудной клетки' },
  { icon: svcGynecology, title: 'Гинекология консервативная, оперативная и эстетическая', desc: 'Комплексная диагностика и лечение женского здоровья' },
  { icon: svcAnesthesia, title: 'Анестезиология, реаниматология и интенсивная терапия',   desc: 'Безопасное проведение анестезии и круглосуточное наблюдение пациентов в отделении интенсивной терапии' },
]

const teamDoctors = [
  { name: 'Куатбеков Кайрат Ниеталиевич',    title: 'к.м.н., ассоциированный профессор', position: 'Руководитель отделения Кардиохирургии и Кардиологии', experience: 'Стаж более 32 лет', img: doctor1 },
  { name: 'Коспанов Нурсултан Айдарханович', title: 'к.м.н., ассоциированный профессор', position: 'Руководитель профиля сосудистой хирургии',           experience: 'Стаж более 30 лет', img: doctor2 },
  { name: 'Ешмуратов Темур Шерханович',      title: 'к.м.н., ассоциированный профессор', position: 'Руководитель профиля Торакальной хирургии и Пульмонологии', experience: 'Стаж более 31 год', img: doctor3 },
  { name: 'Кусаинов Адилет Шингисович',      title: 'к.м.н. (PhD), врач анестезиолог-реаниматолог высшей категории', position: 'Руководитель профиля ОАРИТ', experience: 'Стаж более 33 лет', img: doctor4 },
  { name: 'Ижанов Ерген Бахчанович',         title: 'Доктор медицинских наук, профессор', position: 'Руководитель профиля общей хирургии и онкологии',  experience: 'Стаж более 32 лет', img: imgDoctorSenior },
  { name: 'Аканов Ержан Кусманович',         title: 'к.м.н., профессор',                  position: 'Руководитель узких хирургических профилей',        experience: 'Стаж более 28 лет', img: imgDoctorSenior2 },
]

const posts = [
  { title: 'Визит профессора Linas Velicka', date: '24 июля 2024', img: post2 },
  { title: 'Эндоваскулярная хирургия в лечении дефектов межжелудочковой перегородки', date: '24 июля 2024', img: post1 },
  { title: 'Визит профессора Linas Velicka', date: '24 июля 2024', img: post2 },
  { title: 'Эндоваскулярная хирургия в лечении дефектов межжелудочковой перегородки', date: '24 июля 2024', img: post1 },
]

const servicesTabs = ['Профили', 'Клиника-диагностическое отделение', 'Check-up'] as const

// Карточка врача: на мобилке фото от края до края (белая карточка), на десктопе серая с рамкой
function TeamCard({ d }: { d: (typeof teamDoctors)[number] }) {
  return (
    <article className="bg-white lg:bg-[#ececec] rounded-3xl p-0 lg:p-4 flex flex-col overflow-hidden h-full">
      {/* Фото со «стажем» — пилюлей сверху */}
      <div className="relative rounded-none lg:rounded-2xl overflow-hidden aspect-[4/5] mb-0 lg:mb-5">
        <span className="absolute top-4 left-4 lg:top-3 lg:left-3 bg-white rounded-full px-3.5 py-1.5 text-[11px] font-medium text-gray-900 shadow-sm z-10">
          {d.experience}
        </span>
        <img
          src={d.img}
          alt={d.name}
          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Текстовый блок: звание → имя → должность */}
      <div className="px-5 pt-4 lg:px-1 lg:pt-0 flex-1">
        <p className="text-[#00b5e2] text-[13px] mb-2 leading-snug">{d.title}</p>
        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">{d.name}</h3>
        <p className="text-gray-600 text-[13px] leading-snug">{d.position}</p>
      </div>

      {/* Низ: пилюля «Записаться» + круглая кнопка с лупой */}
      <div className="flex items-center gap-2 mt-4 lg:mt-5 px-5 pb-5 lg:px-1 lg:pb-0">
        <Link
          to="/contacts"
          className="bg-[#f4f4f4] lg:bg-white rounded-full px-6 lg:px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
        >
          Записаться
        </Link>
        <Link
          to="/doctors/kuatbekov"
          aria-label="Подробнее"
          className="ml-auto w-10 h-10 rounded-full bg-[#f4f4f4] lg:bg-white flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 17a6 6 0 100-12 6 6 0 000 12z" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

export default function HomePage() {
  const [servicesTab, setServicesTab] = useState<(typeof servicesTabs)[number]>('Профили')
  const [mobileTabOpen, setMobileTabOpen] = useState(false)
  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Hero — на мобилке карточка со скруглениями, на десктопе фото на всю ширину ── */}
      <section className="bg-[#f4f4f4] px-2.5 pt-2 lg:px-0 lg:pt-0">
        <div className="relative overflow-hidden rounded-[24px] lg:rounded-none min-h-[620px] lg:min-h-[750px]">

          {/* Фото хирурга — полный фон */}
          <img
            src={heroDoctorImg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: '55% center' }}
          />

          {/* Градиент: тёмно-синий слева → прозрачный справа, чтобы лицо хирурга оставалось видимым */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/85 via-[#0a1628]/55 to-[#0a1628]/85 lg:bg-gradient-to-r lg:from-[#0a1628] lg:via-[#0a1628]/85 lg:to-[#0a1628]/10" />

          {/* Контент */}
          <div className="relative z-10 container-main">
            <div className="flex flex-col justify-start lg:justify-center min-h-[620px] lg:min-h-[750px] py-10 lg:py-16">

              <div className="max-w-[720px]">
                <div className="flex items-start gap-3.5 lg:gap-4 mb-9">
                  <img src={logoMark} alt="" className="h-12 lg:h-20 w-auto flex-shrink-0 mt-1" />
                  <h1 className="text-[26px] lg:text-[56px] font-bold text-white leading-[1.15] lg:leading-[1.05]">
                    Точные решения<br />для сложных случаев
                  </h1>
                </div>

                <div className="flex flex-col lg:flex-row lg:flex-wrap items-start lg:items-end gap-y-4 lg:gap-y-5 gap-x-10 mb-10">
                  {[
                    { val: '12 000+', label: 'пациентов\nв год',   order: 'order-1' },
                    { val: '60+',     label: 'ведущих\nэкспертов', order: 'order-3' },
                    { val: '10 000+', label: 'операций\nна счету', order: 'order-2' },
                  ].map((s) => (
                    <div key={s.label} className={`flex items-end gap-2.5 ${s.order} lg:order-none`}>
                      <div className="text-[30px] lg:text-[38px] font-bold text-white leading-none">{s.val}</div>
                      <div className="text-white/60 text-[13px] whitespace-pre-line leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col lg:flex-row lg:flex-wrap items-stretch lg:items-center gap-3.5 lg:gap-3 mb-3.5 lg:mb-3">
                  <Link to="/contacts" className="bg-[#00b5e2] text-white text-[15px] lg:text-base font-medium rounded-full px-9 py-4 text-center hover:bg-[#0099c4] transition-colors">
                    Записаться на приём
                  </Link>
                  <Link to="/checkup" className="text-white text-[15px] lg:text-base font-medium rounded-full px-9 py-4 border lg:border-2 border-white/80 lg:border-white text-center hover:bg-white/10 transition-colors">
                    Записаться на Check-up
                  </Link>
                </div>
                <Link to="/contacts" className="block lg:inline-block text-white text-[15px] lg:text-base font-medium rounded-full px-9 py-4 border lg:border-2 border-white/80 lg:border-white text-center hover:bg-white/10 transition-colors">
                  Получить второе мнение
                </Link>
              </div>

            </div>
          </div>

          {/* Плавающая кнопка чата (только десктоп) */}
          <button
            aria-label="Чат"
            className="hidden lg:flex absolute right-10 lg:right-24 bottom-24 z-20 w-14 h-14 bg-white rounded-full shadow-xl items-center justify-center hover:scale-105 transition-transform"
          >
            <svg className="w-6 h-6 text-[#00b5e2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2zM8 9h8a1 1 0 010 2H8a1 1 0 010-2zm4 5H8a1 1 0 010-2h4a1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </section>

      {/* ── Фич-чипы: на мобилке столбиком под hero, на десктопе выходят за его край ── */}
      <div className="container-main relative z-20 mt-4 lg:mt-0 lg:-mt-9">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3.5 lg:gap-4">
          {features.map((f) => (
            <div key={f.label} className="flex items-center gap-3.5 lg:gap-3 bg-white rounded-full px-3 lg:px-4 py-2.5 lg:py-3 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
              <span className="w-12 h-12 lg:w-11 lg:h-11 rounded-full lg:bg-[#cdeefb] flex items-center justify-center flex-shrink-0">
                <img src={f.icon} alt="" className="w-full h-full lg:w-6 lg:h-6" />
              </span>
              <span className="text-gray-800 text-[13px] lg:text-[12px] font-medium leading-snug">{f.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Team ── */}
      <section className="bg-[#f4f4f4] pb-16 lg:pb-24 pt-14 lg:pt-32">
        <div className="container-main">
          {/* Заголовок по центру */}
          <h2 className="text-[26px] lg:text-[40px] font-bold text-gray-900 text-center mb-10 lg:mb-12 max-w-[300px] lg:max-w-none mx-auto">
            Командная модель высокой подготовки
          </h2>
        </div>

        {/* Мобильная карусель врачей */}
        <div className="lg:hidden">
          <MobileCarousel arrowsTop="30%">
            {teamDoctors.map((d, i) => (
              <TeamCard key={`${d.name}-m${i}`} d={d} />
            ))}
          </MobileCarousel>
          <div className="text-center mt-9">
            <Link to="/doctors" className="inline-block bg-[#00b5e2] text-white text-sm font-medium rounded-full px-10 py-3.5">
              Смотреть всех врачей
            </Link>
          </div>
        </div>

        <div className="container-main hidden lg:block">
          {/* Единая сетка 4×2: 6 врачей + голубая карточка (col-span-2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamDoctors.map((d, i) => (
              <TeamCard key={`${d.name}-${i}`} d={d} />
            ))}

            {/* Голубая карточка — последняя ячейка сетки, шириной 2 ячеек */}
            <div className="bg-[#00b5e2] rounded-3xl p-7 lg:p-8 text-white flex flex-col lg:col-span-2">
              <div className="mb-7">
                <LogoMark className="h-10 w-auto" style={{ ['--fill-0' as string]: '#ffffff' }} />
              </div>

              {/* Аватары команды */}
              <div className="flex items-center gap-2 mb-7">
                {[doctor1, doctor2, doctor3, doctor4, imgDoctorSenior].map((d, i) => (
                  <div key={i} className="w-16 h-16 rounded-full overflow-hidden bg-white/20">
                    <img src={d} alt="" className="w-full h-full object-cover object-top" />
                  </div>
                ))}
              </div>

              <h3 className="text-2xl lg:text-[28px] font-bold mb-3 leading-tight">Команда Erensau Hospital</h3>
              <p className="text-white/85 text-sm leading-relaxed mb-7 max-w-md">
                Современная клиника с командной моделью высочайшей подготовки, объединяющая технологии, опыт и заботу о пациенте.
              </p>

              <Link to="/doctors" className="bg-white text-[#00b5e2] text-sm font-semibold py-2.5 px-6 rounded-full hover:bg-gray-50 transition-colors w-fit mt-auto">
                Смотреть всех врачей
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-[#f4f4f4] py-14 lg:py-24">
        <div className="container-main">
          {/* Заголовок по центру */}
          <h2 className="text-[26px] lg:text-[40px] font-bold text-gray-900 text-center mb-8 lg:mb-9 max-w-[300px] lg:max-w-none mx-auto">
            Широкий спектр медицинских услуг
          </h2>

          {/* Табы: на мобилке — голубой дропдаун, на десктопе — ряд пилюль */}
          <div className="lg:hidden relative flex justify-center mb-9 z-30">
            <div className="relative">
              <button
                onClick={() => setMobileTabOpen(o => !o)}
                className="flex items-center gap-2 bg-[#00b5e2] text-white text-sm font-medium rounded-full px-9 py-3"
              >
                {servicesTab}
                <svg className={`w-4 h-4 transition-transform ${mobileTabOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileTabOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white rounded-2xl shadow-lg py-1.5 min-w-[230px] z-40">
                  {servicesTabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => { setServicesTab(tab); setMobileTabOpen(false) }}
                      className={`block w-[calc(100%-2.5rem)] mx-5 text-left py-2.5 text-sm border-b border-gray-200 last:border-b-0 ${
                        servicesTab === tab ? 'text-[#00b5e2]' : 'text-gray-800'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="hidden lg:flex justify-center mb-10">
            <div className="inline-flex bg-white rounded-full p-1.5 gap-1 flex-wrap justify-center shadow-sm">
              {servicesTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setServicesTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    servicesTab === tab
                      ? 'bg-[#00b5e2] text-white'
                      : 'text-gray-800 hover:text-[#00b5e2]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Мобильная карусель услуг */}
        <div className="lg:hidden">
          <MobileCarousel arrowsTop="45%">
            {services.map((s) => (
              <article key={`${s.title}-m`} className="bg-white rounded-3xl p-7 flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-[#cdeefb] flex items-center justify-center mb-7">
                  <img src={s.icon} alt="" className="w-full h-full" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-4 leading-snug">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </article>
            ))}
          </MobileCarousel>
          <div className="text-center mt-9">
            <Link
              to="/services"
              className="inline-block bg-white border border-gray-300 text-gray-900 text-sm font-medium rounded-full px-10 py-3.5"
            >
              Смотреть все услуги
            </Link>
          </div>
        </div>

        <div className="container-main hidden lg:block">
          {/* Сетка карточек 4×N — последние 2 центрируются (col-start-2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <article
                key={s.title}
                className={`bg-white rounded-2xl p-7 flex flex-col hover:shadow-md transition-shadow ${
                  i === 4 ? 'lg:col-start-2' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-[#cdeefb] flex items-center justify-center mb-9">
                  <img src={s.icon} alt="" className="w-full h-full" />
                </div>
                <h3 className="font-bold text-gray-900 text-[19px] mb-4 leading-snug">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </article>
            ))}
          </div>

          {/* Кнопка снизу */}
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-900 text-sm font-medium rounded-full px-8 py-3.5 hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors"
            >
              Смотреть все услуги
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contacts — карта + карточка контактов ── */}
      <ContactsMapCard />

      {/* ── Виртуальный тур по клинике ── */}
      <section className="bg-[#f4f4f4] py-14 lg:py-24">
        <div className="container-main">
          <h2 className="text-[26px] lg:text-[40px] font-bold text-gray-900 text-center mb-8 lg:mb-10 max-w-[260px] lg:max-w-none mx-auto">
            Виртуальный тур по клинике
          </h2>
          <div className="relative rounded-[24px] lg:rounded-[32px] overflow-hidden h-[470px] lg:h-auto lg:min-h-[400px] lg:flex lg:items-center">
            {/* Тёплый коричневый интерьер: фото с фильтрами + коричневый оверлей */}
            <img
              src={imgOperatingRoom}
              alt=""
              className="absolute inset-0 w-full h-full object-cover grayscale sepia-[0.45] brightness-[0.5]"
            />
            <div className="absolute inset-0 bg-[#403732]/70" />
            {/* Водяной знак-логомарк: на мобилке слева у края, на десктопе левее центра */}
            <LogoMark
              className="absolute left-2 lg:left-[30%] top-16 lg:top-1/2 lg:-translate-y-1/2 h-32 lg:h-60 w-auto opacity-[0.18]"
              style={{ ['--fill-0' as string]: '#ffffff' }}
            />

            {/* Мобильный контент: словомарка справа сверху, кнопка по центру */}
            <div className="lg:hidden relative z-10 h-full">
              <div className="absolute top-6 right-6 flex flex-col items-end">
                <div className="text-white/70 font-bold text-3xl lowercase leading-none">erensau</div>
                <div className="text-white/50 text-sm lowercase tracking-wide mt-1">hospital</div>
                <p className="text-white/50 text-[10px] text-right leading-snug mt-2">
                  Точные решения<br />для сложных случаев
                </p>
              </div>
              <button className="absolute top-[88px] left-1/2 -translate-x-1/2 -translate-y-0 bg-[#00b5e2] text-white text-sm font-medium rounded-full px-9 py-3.5 whitespace-nowrap">
                Начать 3D - тур
              </button>
            </div>

            {/* Десктопный контент: словомарка сверху, ниже кнопка + слоган в строку */}
            <div className="hidden lg:flex relative z-10 w-full px-8 py-12 flex-col items-center lg:translate-x-14">
              <div className="flex flex-col items-end">
                <div className="text-white/70 font-bold text-5xl lg:text-6xl lowercase leading-none">erensau</div>
                <div className="text-white/50 text-xl lowercase tracking-wide mt-1">hospital</div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 mt-8">
                <button className="btn-primary text-sm px-8 py-3.5 rounded-full">Начать 3D - тур</button>
                <p className="text-white/60 text-sm text-center sm:text-left leading-snug">
                  Точные решения<br />для сложных случаев
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Последние публикации — сетка из 4 карточек ── */}
      <section className="bg-[#f4f4f4] pb-16 lg:pb-24">
        <div className="container-main">
          <h2 className="text-3xl lg:text-[40px] font-bold text-gray-900 text-center mb-12">
            Последние публикации
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {posts.map((p, i) => (
              <article key={`${p.title}-${i}`} className="group cursor-pointer bg-white lg:bg-transparent rounded-3xl lg:rounded-none overflow-hidden lg:overflow-visible">
                <div className="aspect-[9/8] lg:aspect-[4/3] rounded-none lg:rounded-2xl overflow-hidden mb-0 lg:mb-4 bg-gray-200">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base leading-snug line-clamp-2 mb-2 lg:mb-3 text-center lg:text-left px-5 lg:px-0 pt-4 lg:pt-0 group-hover:text-[#00b5e2] transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-xs text-center lg:text-left px-5 lg:px-0 pb-5 lg:pb-0">{p.date}</p>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-900 text-sm font-medium rounded-full px-8 py-3.5 hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors"
            >
              Смотреть все новости
            </Link>
          </div>
        </div>
      </section>

      {/* ── Форма обратной связи ── */}
      <ContactForm mobileVariant="registration" />

      {/* ── CTA-слайдер ── */}
      <CTASlider />

    </div>
  )
}
