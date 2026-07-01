import { useState } from 'react'
import { Link } from 'react-router-dom'

import heroDoctorImg from '@/assets/images/hero-surgeon.png'
import imgClinicBuilding from '@/assets/images/img-clinic-building.jpg'
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
import svcCardiac from '@/assets/icons/svc-cardiac.svg'
import svcVascular from '@/assets/icons/svc-vascular.svg'
import svcSurgery from '@/assets/icons/svc-surgery.svg'
import svcThoracic from '@/assets/icons/svc-thoracic.svg'
import svcGynecology from '@/assets/icons/svc-gynecology.svg'
import svcAnesthesia from '@/assets/icons/svc-anesthesia.svg'
import LogoMark from '@/assets/icons/logo-group.svg?react'

import CTASlider from '@/components/ui/CTASlider'
import ContactForm from '@/components/ui/ContactForm'
import ContactsMapCard from '@/components/ui/ContactsMapCard'

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
  { icon: svcThoracic,   title: 'Торакальная хирургия / Пульмонология',                   desc: 'Диагностика и лечение заболеваний лёгких, дыхательных путей и органов грудной клетки' },
  { icon: svcGynecology, title: 'Гинекология консервативная, оперативная и эстетическая', desc: 'Комплексная диагностика и лечение женского здоровья' },
  { icon: svcAnesthesia, title: 'Анестезиология, реаниматология и интенсивная терапия',   desc: 'Безопасное проведение анестезии и круглосуточное наблюдение пациентов в отделении интенсивной терапии' },
]

const teamDoctors = [
  { name: 'Куатбеков Кайрат Нығметович',     title: 'к.м.н., ассоциированный профессор', position: 'Руководитель отделения Кардиохирургии и Кардиологии', experience: 'Стаж более 32 лет', img: doctor1 },
  { name: 'Коспанов Нурсултан Айдарханович', title: 'к.м.н., ассоциированный профессор', position: 'Руководитель профиля сосудистой хирургии',           experience: 'Стаж более 30 лет', img: doctor2 },
  { name: 'Ешмуратов Темур Шерханович',      title: 'д.м.н., профессор',                 position: 'Руководитель профиля Торакальной хирургии и Пульмонологии', experience: 'Стаж более 31 год', img: doctor3 },
  { name: 'Кусаинов Адилет Шингисович',      title: 'к.м.н.',                            position: 'Руководитель профиля ОАРИТ',                        experience: 'Стаж более 33 лет', img: doctor4 },
  { name: 'Ижанов Ерген Бахчанович',         title: 'Доктор медицинских наук, профессор', position: 'Руководитель профиля общей хирургии и онкологии',  experience: 'Стаж более 32 лет', img: imgDoctorSenior },
  { name: 'Аканов Ержан Кусманович',         title: 'к.м.н., профессор',                  position: 'Руководитель узких хирургических профилей',        experience: 'Стаж более 28 лет', img: imgDoctorSenior2 },
]

const posts = [
  { title: 'Визит профессора Linas Velicka из Литвы', date: '24 июля 2024', img: post2 },
  { title: 'Эндоваскулярная хирургия в лечении дефектов межжелудочковой перегородки', date: '24 июля 2024', img: post1 },
  { title: 'Открытие нового отделения реабилитации в Erensau', date: '24 июля 2024', img: imgClinicBuilding },
  { title: 'Внедрение роботизированной хирургии Da Vinci', date: '24 июля 2024', img: imgOperatingRoom },
]

const servicesTabs = ['Профили', 'Клинико-диагностическое отделение', 'Check-up'] as const

export default function HomePage() {
  const [servicesTab, setServicesTab] = useState<(typeof servicesTabs)[number]>('Профили')
  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Hero — фото полный фон, текст белый ── */}
      <section className="relative overflow-hidden min-h-[680px]">

        {/* Фото хирурга — полный фон */}
        <img
          src={heroDoctorImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '70% center' }}
        />

        {/* Градиент: тёмно-синий слева → прозрачный справа, чтобы лицо хирурга оставалось видимым */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/85 to-[#0a1628]/10" />

        {/* Контент */}
        <div className="relative z-10 container-main h-full">
          <div className="flex flex-col justify-between min-h-[680px] py-14 lg:py-20">

            {/* Верх: заголовок + статистика + кнопки (в левой колонке) */}
            <div className="max-w-[620px]">
              <div className="flex items-start gap-4 mb-9">
                <LogoMark className="h-14 w-auto flex-shrink-0 mt-1" style={{ ['--fill-0' as string]: '#00b5e2' }} />
                <h1 className="text-[38px] lg:text-[56px] font-bold text-white leading-[1.05]">
                  Точные решения<br />для сложных случаев
                </h1>
              </div>

              <div className="flex flex-wrap items-end gap-x-10 gap-y-5 mb-9">
                {[
                  { val: '12 000+', label: 'пациентов\nв год'   },
                  { val: '60+',     label: 'ведущих\nэкспертов' },
                  { val: '10 000+', label: 'операций\nна счету' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-[28px] lg:text-[32px] font-bold text-white leading-none">{s.val}</div>
                    <div className="text-white/60 text-[11px] mt-1.5 whitespace-pre-line leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link to="/contacts" className="btn-primary text-sm px-7 py-3.5">
                  Записаться на приём
                </Link>
                <Link to="/checkup" className="bg-[#0a1628] text-white text-sm font-medium rounded-xl px-7 py-3.5 hover:bg-[#16233a] transition-colors border border-white/15">
                  Записаться на Check-up
                </Link>
                <Link to="/contacts" className="text-white text-sm font-medium rounded-xl px-7 py-3.5 border border-white/40 hover:bg-white/10 transition-colors">
                  Получить второе мнение
                </Link>
              </div>
            </div>

            {/* Низ: 4 фич-чипа в одну строку на всю ширину */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-12">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 shadow-sm">
                  <span className="w-9 h-9 rounded-full bg-[#cdeefb] flex items-center justify-center flex-shrink-0">
                    <img src={f.icon} alt="" className="w-5 h-5" />
                  </span>
                  <span className="text-gray-700 text-[11px] font-medium leading-snug">{f.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="bg-[#f4f4f4] py-16 lg:py-24">
        <div className="container-main">
          {/* Заголовок по центру */}
          <h2 className="text-3xl lg:text-[40px] font-bold text-gray-900 text-center mb-12">
            Командная модель высокой подготовки
          </h2>

          {/* Единая сетка 4×2: 6 врачей + голубая карточка (col-span-2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamDoctors.map((d, i) => (
              <article
                key={`${d.name}-${i}`}
                className="bg-[#ececec] rounded-3xl p-4 flex flex-col"
              >
                {/* Фото со «стажем» — пилюлей сверху */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-5">
                  <span className="absolute top-3 left-3 bg-white rounded-full px-3.5 py-1.5 text-[11px] font-medium italic text-gray-900 shadow-sm z-10">
                    {d.experience}
                  </span>
                  <img
                    src={d.img}
                    alt={d.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Текстовый блок: звание → имя → должность */}
                <div className="px-1 flex-1">
                  <p className="text-[#00b5e2] text-[11px] mb-2 leading-snug">{d.title}</p>
                  <h3 className="font-bold text-gray-900 text-[15px] leading-tight mb-2">{d.name}</h3>
                  <p className="text-gray-500 text-xs leading-snug">{d.position}</p>
                </div>

                {/* Низ: пилюля «Записаться» + круглая кнопка с лупой */}
                <div className="flex items-center gap-2 mt-5 px-1">
                  <Link
                    to="/contacts"
                    className="bg-white rounded-full px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                  >
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

            {/* Голубая карточка — последняя ячейка сетки, шириной 2 ячеек */}
            <div className="bg-[#00b5e2] rounded-2xl p-8 lg:p-10 text-white flex flex-col justify-between lg:col-span-2">
              <div>
                <LogoMark className="h-10 w-auto mb-6" style={{ ['--fill-0' as string]: '#ffffff' }} />
                <h3 className="text-2xl lg:text-[28px] font-bold mb-3 leading-tight">Команда Erensau Hospital</h3>
                <p className="text-white/85 text-sm leading-relaxed mb-7 max-w-md">
                  Современная клиника с командной моделью высочайшей подготовки, объединяющая технологии, опыт и заботу о пациенте.
                </p>
                {/* Мини-аватары */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex -space-x-2.5">
                    {[doctor1, doctor2, doctor3, doctor4, imgDoctorSenior].map((d, i) => (
                      <div key={i} className="w-9 h-9 rounded-full border-2 border-[#00b5e2] overflow-hidden">
                        <img src={d} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <span className="text-white text-sm font-medium">60+ специалистов</span>
                </div>
              </div>
              <Link to="/doctors" className="bg-white text-[#00b5e2] text-sm font-semibold py-3 px-6 rounded-full hover:bg-gray-50 transition-colors w-fit">
                Смотреть всех врачей
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-[#f4f4f4] py-16 lg:py-24">
        <div className="container-main">
          {/* Заголовок по центру */}
          <h2 className="text-3xl lg:text-[44px] font-bold text-gray-900 text-center mb-9">
            Широкий спектр медицинских услуг
          </h2>

          {/* Табы */}
          <div className="flex justify-center mb-10">
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

          {/* Сетка карточек 4×N — последние 2 центрируются (col-start-2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <article
                key={s.title}
                className={`bg-white rounded-2xl p-7 flex flex-col hover:shadow-md transition-shadow ${
                  i === 4 ? 'lg:col-start-2' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-[#cdeefb] flex items-center justify-center mb-12">
                  <img src={s.icon} alt="" className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-[17px] mb-4 leading-snug">{s.title}</h3>
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
      <section className="bg-[#f4f4f4] py-16 lg:py-24">
        <div className="container-main">
          <h2 className="text-3xl lg:text-[40px] font-bold text-gray-900 text-center mb-10">
            Виртуальный тур по клинике
          </h2>
          <div className="relative rounded-[32px] overflow-hidden min-h-[360px] lg:min-h-[420px] flex items-center">
            <img src={imgOperatingRoom} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#0a1628]/70" />
            {/* Водяной знак-логомарк слева */}
            <LogoMark
              className="absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 h-40 lg:h-56 w-auto opacity-20"
              style={{ ['--fill-0' as string]: '#ffffff' }}
            />
            {/* Контент справа */}
            <div className="relative z-10 ml-auto w-full lg:w-1/2 px-8 lg:px-14 py-12 text-right lg:text-left">
              <div className="flex flex-col items-end lg:items-start">
                <div className="text-white font-bold text-4xl lg:text-5xl lowercase leading-none mb-1">erensau</div>
                <div className="text-white/70 text-lg tracking-widest uppercase mb-6">hospital</div>
                <p className="text-white/70 text-sm mb-8">Точные решения для сложных случаев</p>
                <button className="btn-primary text-sm px-8 py-3.5">Начать 3D-тур</button>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {posts.map((p) => (
              <article key={p.title} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-200">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base leading-snug line-clamp-2 mb-3 group-hover:text-[#00b5e2] transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-xs">{p.date}</p>
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
      <ContactForm />

      {/* ── CTA-слайдер ── */}
      <CTASlider />

    </div>
  )
}
