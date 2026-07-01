import { useState } from 'react'
import { Link } from 'react-router-dom'
import imgClinicBuilding from '@/assets/images/img-clinic-building.jpg'
import imgDoctorSenior from '@/assets/images/img-doctor-senior.jpg'
import imgDoctorPortrait from '@/assets/images/img-doctor-portrait.jpg'
import imgOperatingRoom from '@/assets/images/img-operating-room.jpg'
import doctor1 from '@/assets/images/doctor1.jpg'
import LogoMark from '@/assets/icons/logo-group.svg?react'
import CTASlider from '@/components/ui/CTASlider'

const infoBlocks = [
  { img: doctor1, title: 'Какие документы взять', desc: 'Возьмите удостоверение личности и результаты предыдущих исследований — если они есть.' },
  { img: imgDoctorPortrait, title: 'Подготовка к анализам', desc: 'Большинство анализов сдаётся натощак. Исключите алкоголь накануне и уточните перечень текущих препаратов.' },
  { img: imgDoctorSenior, title: 'Как записаться?', desc: 'Позвоните, напишите в WhatsApp или заполните форму на сайте. Администратор подберёт удобное время.' },
  { img: imgOperatingRoom, title: 'Что ожидать при первом визите', desc: 'Врач выслушает жалобы и при необходимости назначит обследование. Консультация занимает от 20 до 40 минут.' },
]

const infoTabs = ['До визита к врачу', 'Перед госпитализацией', 'После операции', 'Выписка']

const reviews = [
  { name: 'Natalya Bragina', text: 'Я была на приёме у Ержана Кусманова — это врач от Бога. Внимательный, всё подробно объяснил и составил понятный план лечения. Огромная благодарность всей команде клиники.', date: 'Март 2024', photo: imgDoctorPortrait },
  { name: 'Antonina Frolova', text: 'Прошла Check-up в Erensau Hospital — всё чётко и профессионально. Врачи объяснили каждый результат и дали конкретные рекомендации. Приятно, когда к тебе относятся как к человеку.', date: 'Февраль 2024', photo: imgDoctorSenior },
  { name: 'Lora Mukhamedova', text: 'Делали операцию близкому человеку. Команда хирургов — профессионалы высочайшего класса, послеоперационный уход на уровне европейских клиник. Рекомендую от всего сердца.', date: 'Январь 2024', photo: doctor1 },
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

  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[520px]">
        <img src={imgClinicBuilding} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0a1628]/55" />
        <div className="relative z-10 container-main flex flex-col justify-end min-h-[520px] py-16">
          <div className="flex items-start gap-4 mb-8">
            <LogoMark className="h-12 lg:h-14 w-auto flex-shrink-0 mt-1" style={{ ['--fill-0' as string]: '#ffffff' }} />
            <h1 className="text-5xl lg:text-[72px] font-bold text-white leading-none">
              Руководство<br />для пациентов
            </h1>
          </div>
          <div className="bg-white rounded-3xl p-6 max-w-sm shadow-xl">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-4xl font-bold text-[#00b5e2] leading-none">4</span>
              <span className="text-gray-900 font-semibold text-sm leading-tight">шага и вы<br />готовы к визиту</span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              Подготовьтесь к визиту заранее. Здесь вы найдёте ответы на самые
              частые вопросы о записи, анализах и правах пациентов.
            </p>
          </div>
        </div>
      </section>

      {/* ── Инфо-блоки с фото ── */}
      <section className="bg-white py-14 lg:py-20">
        <div className="container-main">
          <h2 className="text-3xl lg:text-[40px] font-bold text-gray-900 text-center mb-8 max-w-2xl mx-auto leading-tight">
            Все что нужно знать перед визитом и во время лечения
          </h2>
          {/* Таб-бар */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-[#f4f4f4] rounded-full p-1.5 gap-1 flex-wrap justify-center">
              {infoTabs.map((tab, i) => (
                <button
                  key={tab}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    i === 0 ? 'bg-[#00b5e2] text-white' : 'text-gray-700 hover:text-[#00b5e2]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {infoBlocks.map((block) => (
              <div key={block.title} className="bg-[#f4f4f4] rounded-2xl overflow-hidden">
                <div className="h-36 overflow-hidden">
                  <img src={block.img} alt={block.title} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1.5">{block.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{block.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Отзывы: карточки слева, заголовок справа ── */}
      <section className="container-main py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Карточки — лесенкой */}
          <div className="space-y-5">
            {reviews.map((r, idx) => (
              <div key={r.name} className={`bg-white rounded-3xl p-7 ${idx % 2 === 1 ? 'lg:ml-12' : 'lg:mr-12'}`}>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                      <img src={r.photo} alt={r.name} className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{r.name}</div>
                      <div className="text-gray-400 text-xs">{r.date}</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[#7dd3ec]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>

          {/* Заголовок + CTA */}
          <div className="lg:sticky lg:top-28">
            <h2 className="text-2xl lg:text-[40px] font-bold text-gray-900 mb-5 leading-tight">
              Нам доверяют<br />и говорят об этом
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
              Лучшая оценка нашей работы — слова людей, которым мы помогли. Читайте
              отзывы наших пациентов и поделитесь своим опытом после визита в Erensau Hospital.
            </p>
            <Link to="/contacts" className="btn-primary text-sm px-8 py-3.5">Оставьте отзыв</Link>
            <div className="bg-white rounded-2xl p-5 flex items-center gap-3 mt-8 max-w-sm">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                <img src={imgDoctorSenior} alt="" className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-0.5">Врач упомянутый в отзыве</p>
                <div className="font-semibold text-gray-900 text-sm">Ижанов Ерген Бахчанович</div>
                <div className="text-[#00b5e2] text-xs leading-snug">Руководитель профиля общей хирургии и онкологии</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ — 2 колонки ── */}
      <section className="bg-white py-14 lg:py-20">
        <div className="container-main">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Ответы на популярные вопросы</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-3xl overflow-hidden">
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-gray-900 text-sm pr-4">{faq.q}</span>
                  <span className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-colors ${openFaq === i ? 'bg-[#00b5e2] text-white' : 'bg-[#cdeefb] text-[#00b5e2]'}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      {openFaq === i
                        ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                        : <path strokeLinecap="round" d="M12 5v14M5 12h14" />}
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</div>
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
