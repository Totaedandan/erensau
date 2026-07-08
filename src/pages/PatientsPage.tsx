import { useState } from 'react'
import { Link } from 'react-router-dom'
import imgDoctorSenior from '@/assets/images/img-doctor-senior.jpg'
import docIzhanov from '@/assets/images/doc-izhanov.png'
import imgDoctorPortrait from '@/assets/images/img-doctor-portrait.jpg'
import imgOperatingRoom from '@/assets/images/img-operating-room.jpg'
import patientsBg from '@/assets/images/patients-hero-bg.png'
import patientsGlow from '@/assets/images/patients-glow.png'
import doctor1 from '@/assets/images/doctor1.jpg'
import imgInfoDocuments from '@/assets/images/patients-info-documents.jpg'
import imgInfoBloodtest from '@/assets/images/patients-info-bloodtest.jpg'
import imgInfoConsultation from '@/assets/images/patients-info-consultation.jpg'
import imgInfoFirstvisit from '@/assets/images/patients-info-firstvisit.jpg'
import LogoMark from '@/assets/icons/logo-group.svg?react'
import CTASlider from '@/components/ui/CTASlider'
import MobileCarousel from '@/components/ui/MobileCarousel'

// zoom — масштаб/сдвиг фото внутри карточки, посчитано из Figma (2672:11693/11687/11699/11706):
// x/y — центр фото в % от контейнера, w — ширина фото в % от контейнера (высота — по пропорции).
const infoBlocks = [
  { img: imgInfoDocuments, title: 'Какие документы взять', desc: 'Возьмите удостоверение личности и результаты предыдущих исследований — если они есть.', zoom: { x: 81.16, y: 31.67, w: 176 } },
  { img: imgInfoBloodtest, title: 'Подготовка к анализам', desc: 'Большинство анализов сдаётся натощак. Исключите алкоголь накануне и уточните перечень текущих препаратов.', zoom: { x: 27.05, y: -2.18, w: 290, rotate: 2.94 } },
  { img: imgInfoConsultation, title: 'Как записаться?', desc: 'Позвоните, напишите в WhatsApp или заполните форму на сайте. Администратор подберёт удобное время.', zoom: { x: 33.41, y: 15.61, w: 239 } },
  { img: imgInfoFirstvisit, title: 'Что ожидать при первом визите', desc: 'Врач выслушает жалобы и при необходимости назначит обследование. Консультация занимает от 20 до 40 минут.', zoom: { x: 55.8, y: 11.54, w: 212 } },
]

const infoTabs = ['До визита к врачу', 'Перед госпитализацией', 'После операции', 'Выписка']

const reviews = [
  { name: 'Natalya Bragina', text: 'Это счастье, попасть в руки прекрасного доктора. Жарас Асхатович Долаев - грамотный специалист, доброжелательный', date: '18 мая 2026', photo: imgDoctorPortrait },
  { name: 'Antonina Frolova', text: 'Я была на приеме у Ержан Кусманович, это врач от Бога. Пусть Бог благословит его и всю его семью.', date: '6 мая 2026', photo: imgDoctorSenior },
  { name: 'Lora Mukhamedova', text: 'Хочу выразить огромную благодарность торакальному хирургу Ешмуратову Т.Ш. и моему лечащему врачу Таменову И. Ж', date: '18 мая 2026', photo: doctor1 },
]

const faqs = [
  { q: 'Нужно ли готовиться к обследованию заранее?', a: 'Да, большинство анализов крови сдаётся натощак. Мы высылаем подробную инструкцию по подготовке после записи.' },
  { q: 'Нужно ли готовиться к обследованию заранее?', a: 'Исключите алкоголь за сутки и по возможности отмените плановые препараты. Подробные инструкции вы получите после записи.' },
  { q: 'Что входит в чек-ап программу?', a: 'Состав зависит от выбранного пакета. Все программы включают лабораторные анализы, инструментальные исследования и консультации специалистов.' },
  { q: 'Что входит в чек-ап программу?', a: 'Полный перечень исследований указан в описании каждой программы. Индивидуальный состав согласовывается с врачом.' },
  { q: 'Сколько времени занимает обследование?', a: 'Базовый Check-up — 1 день. Расширенные программы рассчитаны на 1–3 дня в зависимости от состава.' },
  { q: 'Сколько времени занимает обследование?', a: 'Зависит от программы: от 1 рабочего дня (базовый) до 3 дней (расширенный).' },
]

export default function PatientsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [mobileTab, setMobileTab] = useState(infoTabs[0])
  const [mobileTabOpen, setMobileTabOpen] = useState(false)

  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Hero — палата пациента (Для пациентов) ── */}
      <section className="bg-[#f4f4f4] px-2.5 pt-2 lg:px-3 lg:pt-0 lg:max-w-[1440px] lg:mx-auto">
        <div className="relative overflow-hidden rounded-[24px] lg:rounded-[28px] min-h-[620px] lg:min-h-0 lg:aspect-[1414/707]">
          {/* 1 — Фон: палата */}
          <img src={patientsBg} alt="" className="absolute inset-0 w-full h-full object-cover" />

          {/* 2 — Градиент-скрим снизу (Rectangle 40688, #042531 ~10%) */}
          <div className="absolute inset-x-0 bottom-0 h-[54%] bg-gradient-to-t from-[#042531]/10 to-transparent pointer-events-none" />

          {/* 3 — Свет от фонаря (Vector 1904) */}
          <img src={patientsGlow} alt="" aria-hidden className="hidden lg:block absolute left-[5%] top-[1%] w-[32%] pointer-events-none select-none" />

          {/* Затемнение для читаемости на мобилке */}
          <div className="absolute inset-0 bg-[#0a1628]/15 lg:hidden" />

          {/* ── Десктоп: заголовок и карточка по замерам макета ── */}
          <div className="hidden lg:flex absolute left-[7.5%] top-[33%] items-start gap-5">
            <LogoMark className="h-[112px] w-auto flex-shrink-0" style={{ ['--fill-0' as string]: '#ffffff' }} />
            <h1 className="text-[50px] font-semibold text-white leading-[1.3]">
              Руководство<br />для пациентов
            </h1>
          </div>
          <div className="hidden lg:block absolute left-[7.5%] top-[54%] bg-white rounded-3xl p-11 w-[305px] shadow-xl">
            <div className="flex items-start gap-3 mb-1">
              <span className="text-[38px] font-bold text-[#00b5e2] leading-none">4</span>
              <span className="text-gray-900 font-semibold text-sm leading-tight">шага и вы<br />готовы к визиту</span>
            </div>
            <p className="text-gray-500 text-[13px] leading-relaxed">
              Подготовьтесь к визиту заранее. Здесь вы найдёте ответы на самые
              частые вопросы о записи, анализах и правах пациента.
            </p>
          </div>

          {/* ── Мобилка: заголовок + карточка одним блоком ── */}
          <div className="lg:hidden relative z-10 px-6 flex flex-col justify-start min-h-[620px] py-10">
            <div className="flex items-start gap-3 mb-6">
              <LogoMark className="h-11 w-auto flex-shrink-0 mt-1" style={{ ['--fill-0' as string]: '#ffffff' }} />
              <h1 className="text-[27px] font-semibold text-white leading-[1.2]">
                Руководство<br />для пациентов
              </h1>
            </div>
            <div className="bg-white rounded-3xl p-6 max-w-[265px] shadow-xl ml-5">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-4xl font-bold text-[#00b5e2] leading-none">4</span>
                <span className="text-gray-900 font-semibold text-sm leading-tight">шага и вы<br />готовы к визиту</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Подготовьтесь к визиту заранее. Здесь вы найдёте ответы на самые
                частые вопросы о записи, анализах и правах пациента.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Инфо-блоки с фото ── */}
      <section className="bg-[#f4f4f4] py-14 lg:py-24">
        <div className="container-main">
          <h2 className="text-[28px] lg:text-[40px] font-semibold text-gray-900 text-center mb-8 max-w-[320px] lg:max-w-2xl mx-auto leading-tight">
            Все что нужно знать перед визитом и во время лечения
          </h2>
          {/* Таб-бар: на мобилке — голубой дропдаун */}
          <div className="lg:hidden relative flex justify-center mb-9 z-30">
            <div className="relative">
              <button
                onClick={() => setMobileTabOpen(o => !o)}
                className="flex items-center gap-2 bg-[#00b5e2] text-white text-sm font-semibold rounded-full px-8 py-3"
              >
                {mobileTab}
                <svg className={`w-4 h-4 transition-transform ${mobileTabOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileTabOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white rounded-2xl shadow-lg py-1.5 min-w-[230px] z-40">
                  {infoTabs.map((tab) => (
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
          <div className="hidden lg:flex justify-center mb-10">
            <div className="inline-flex gap-2 flex-wrap justify-center">
              {infoTabs.map((tab, i) => (
                <button
                  key={tab}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                    i === 0 ? 'bg-[#00b5e2] text-white' : 'bg-white text-gray-800 shadow-sm hover:text-[#00b5e2]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Мобильная карусель инфо-блоков */}
        <div className="lg:hidden">
          <MobileCarousel arrowsTop="35%" progress={false}>
            {infoBlocks.map((block) => (
              <div key={`${block.title}-m`}>
                <div className="bg-white rounded-3xl p-2">
                  <div className="relative h-56 overflow-hidden rounded-[20px] bg-[#ececec]">
                    <img
                      src={block.img}
                      alt={block.title}
                      className="absolute max-w-none"
                      style={{
                        left: `${block.zoom.x}%`,
                        top: `${block.zoom.y}%`,
                        width: `${block.zoom.w}%`,
                        transform: `translate(-50%, -50%)${block.zoom.rotate ? ` rotate(${block.zoom.rotate}deg)` : ''}`,
                      }}
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mt-5 mb-2 px-1">{block.title}</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed px-1">{block.desc}</p>
              </div>
            ))}
          </MobileCarousel>
        </div>

        <div className="container-main hidden lg:block">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {infoBlocks.map((block) => (
              <div key={block.title} className="bg-white rounded-[28px] shadow-[-2px_16px_25px_rgba(0,0,0,0.04)] p-2">
                <div className="relative h-[221px] rounded-[20px] overflow-hidden bg-[#ececec]">
                  <img
                    src={block.img}
                    alt={block.title}
                    className="absolute max-w-none"
                    style={{
                      left: `${block.zoom.x}%`,
                      top: `${block.zoom.y}%`,
                      width: `${block.zoom.w}%`,
                      transform: `translate(-50%, -50%)${block.zoom.rotate ? ` rotate(${block.zoom.rotate}deg)` : ''}`,
                    }}
                  />
                </div>
                <div className="px-3 pt-8 pb-3">
                  <h3 className="font-semibold text-black text-[20px] tracking-[-0.4px] leading-[1.35] mb-4">{block.title}</h3>
                  <p className="text-black font-light text-sm leading-[1.35]">{block.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Отзывы: карточки слева, заголовок справа ── */}
      <section className="bg-[#f4f4f4] pt-10 pb-12 lg:py-24">
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
          <div className="space-y-4 lg:space-y-5">
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
                      <svg key={i} className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#b8e9f5]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-900 text-xs lg:text-sm leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>

          {/* Заголовок + CTA (десктоп) */}
          <div className="hidden lg:block lg:sticky lg:top-28">
            <h2 className="text-2xl lg:text-[40px] font-semibold text-gray-900 mb-5 leading-tight">
              Нам доверяют<br />и говорят об этом
            </h2>
            <p className="text-gray-900 text-sm leading-relaxed mb-8 max-w-md">
              Лучшая оценка нашей работы — слова людей, которым мы помогли. Читайте
              отзывы наших пациентов и поделитесь своим опытом после визита в Erensau Hospital.
            </p>
            <Link to="/contacts" className="bg-[#00b5e2] text-white text-sm font-semibold rounded-full px-28 py-5 inline-block hover:bg-[#0099c4] transition-colors">Оставьте отзыв</Link>
            <div className="flex items-start gap-3 mt-14 max-w-sm">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                <img src={docIzhanov} alt="" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-gray-900 text-xs mb-0.5">Врач упомянутый в отзыве</p>
                <div className="font-semibold text-gray-900 text-sm">Ижанов Ерген Бахчанович</div>
                <div className="text-gray-900 text-xs leading-snug">Руководитель профиля общей хирургии и онкологии</div>
              </div>
            </div>
          </div>
        </div>

        {/* Мобилка: врач из отзыва + кнопка */}
        <div className="lg:hidden mt-6">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
              <img src={docIzhanov} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="pt-1">
              <p className="text-gray-900 text-xs mb-1">Врач упомянутый в отзыве</p>
              <div className="font-bold text-gray-900 text-base">Ижанов Ерген Бахчанович</div>
              <div className="text-gray-900 text-xs leading-snug mt-0.5">Руководитель профиля общей хирургии и онкологии</div>
            </div>
          </div>
          <div className="text-center mt-9">
            <Link to="/contacts" className="inline-block bg-[#00b5e2] text-white text-sm font-semibold rounded-full px-16 py-4">Оставьте отзыв</Link>
          </div>
        </div>

        </div>
      </section>

      {/* ── FAQ — 2 колонки ── */}
      <section className="bg-[#f4f4f4] pt-10 pb-12 lg:py-24">
        <div className="container-main">
          <h2 className="text-[28px] lg:text-3xl font-semibold text-gray-900 mb-7 lg:mb-8 text-center max-w-[280px] lg:max-w-none mx-auto leading-[1.3]">Ответы на популярные вопросы</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 lg:gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <button
                  className="w-full flex justify-between items-center px-5 lg:px-6 py-3 lg:py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-gray-900 text-xs lg:text-sm pr-3 lg:pr-4 whitespace-nowrap lg:whitespace-normal overflow-hidden text-ellipsis">{faq.q}</span>
                  <span className={`w-6 h-6 lg:w-7 lg:h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-colors ${openFaq === i ? 'bg-[#00b5e2] text-white' : 'bg-[#cdeefb] text-[#00b5e2]'}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      {openFaq === i
                        ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                        : <path strokeLinecap="round" d="M12 5v14M5 12h14" />}
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 lg:px-6 pb-4 lg:pb-5 text-gray-500 text-[13px] lg:text-sm leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA-слайдер ── */}
      <CTASlider />

    </div>
  )
}
