import { useState } from 'react'

type Props = {
  heading?: string
  text?: string
}

// Большая карточка «Форма обратной связи» — переиспользуется на Главной, Контактах и Вакансиях.
export default function ContactForm({
  heading = 'Форма\nобратной связи',
  text = 'Оставьте заявку — мы свяжемся с вами в течении рабочего дня и ответим на все вопросы',
}: Props) {
  const [sent, setSent] = useState(false)

  const inputCls =
    'w-full bg-[#f4f4f4] rounded-xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-[#00b5e2]/40 placeholder:text-gray-400 transition'

  return (
    <section className="bg-[#f4f4f4] py-12 lg:py-16">
      <div className="container-main">
        <div className="bg-white rounded-[40px] shadow-sm p-8 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr_auto] gap-10 lg:gap-12 items-center">

            {/* Левая колонка: заголовок + текст */}
            <div>
              <h2 className="text-4xl lg:text-[52px] font-bold text-gray-900 mb-8 leading-[1.05] whitespace-pre-line">
                {heading}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{text}</p>
            </div>

            {sent ? (
              <div className="lg:col-span-2 flex flex-col items-start justify-center py-6">
                <div className="w-14 h-14 bg-[#00b5e2]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#00b5e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Заявка отправлена!</h3>
                <p className="text-gray-500 text-sm">Мы свяжемся с вами в течение рабочего дня.</p>
              </div>
            ) : (
              <>
                {/* Средняя колонка: поля в одну колонку */}
                <form id="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="space-y-4 w-full">
                  <input type="text" placeholder="Ваше ФИО" className={inputCls} />
                  <input type="email" placeholder="e-mail" className={inputCls} />
                  <input type="tel" placeholder="Номер телефона" className={inputCls} />
                  <input type="text" placeholder="Сообщение" className={inputCls} />
                </form>

                {/* Правая колонка: кнопка + дисклеймер */}
                <div className="flex flex-col items-start gap-4 lg:self-center">
                  <button type="submit" form="contact-form" className="btn-primary text-base px-12 py-4 whitespace-nowrap">
                    Отправить
                  </button>
                  <p className="text-xs text-gray-400 leading-snug">
                    Мы не передаём ваши<br />данные третьим лицам
                  </p>
                </div>
              </>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}
