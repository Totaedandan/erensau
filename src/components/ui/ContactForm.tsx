import { useState } from 'react'

type Props = {
  heading?: string
  text?: string
  /** Мобильный вариант с полями регистрации (как на Главной в мобильном макете) */
  mobileVariant?: 'default' | 'registration'
}

// Большая карточка «Форма обратной связи» — переиспользуется на Главной, Контактах и Вакансиях.
export default function ContactForm({
  heading = 'Форма\nобратной связи',
  text = 'Оставьте заявку — мы свяжемся с вами в течение рабочего дня и ответим на все вопросы',
  mobileVariant = 'default',
}: Props) {
  const [sent, setSent] = useState(false)

  const inputCls =
    'w-full bg-[#f1f1f3] rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#00b5e2]/40 placeholder:text-gray-400 transition'
  const inputClsMobile =
    'w-full bg-[#f1f1f3] rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#00b5e2]/40 placeholder:text-gray-400 transition'

  return (
    <section className="bg-[#f4f4f4] py-9 lg:py-16">
      <div className="container-main">
        <div className="bg-white rounded-[28px] lg:rounded-[32px] shadow-sm p-7 lg:p-12">

          {/* ── Мобильная версия: всё столбиком ── */}
          <div className="lg:hidden">
            <h2 className="text-[28px] font-bold text-gray-900 mb-3 leading-[1.2] whitespace-pre-line">{heading}</h2>
            {mobileVariant === 'default' && (
              <p className="text-gray-400 text-[13px] leading-relaxed mb-5">{text}</p>
            )}
            {sent ? (
              <div className="py-6">
                <h3 className="font-semibold text-gray-900 mb-1">Заявка отправлена!</h3>
                <p className="text-gray-500 text-sm">Мы свяжемся с вами в течение рабочего дня.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="space-y-2.5">
                <input type="text" placeholder="Ваше ФИО" className={inputClsMobile} />
                {mobileVariant === 'registration' ? (
                  <>
                    <input type="text" placeholder="Профиль" className={inputClsMobile} />
                    <input type="text" placeholder="Специализация" className={inputClsMobile} />
                    <input type="text" placeholder="Город" className={inputClsMobile} />
                    <label className="flex items-center gap-2.5 pt-1 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#00b5e2]" />
                      <span className="text-xs text-gray-500">Даю соглашение на обработку медицинских данных</span>
                    </label>
                  </>
                ) : (
                  <>
                    <input type="email" placeholder="e-mail" className={inputClsMobile} />
                    <input type="tel" placeholder="Номер телефона" className={inputClsMobile} />
                    <input type="text" placeholder="Сообщение" className={inputClsMobile} />
                  </>
                )}
                <button type="submit" className="w-full bg-[#00b5e2] text-white text-base font-medium rounded-full py-4 !mt-6 hover:bg-[#0099c4] transition-colors">
                  {mobileVariant === 'registration' ? 'Зарегистрироваться' : 'Отправить'}
                </button>
                <p className="text-xs text-gray-400 text-center leading-snug pt-1">
                  Мы не передаём ваши данные<br />третьим лицам
                </p>
              </form>
            )}
          </div>

          {/* ── Десктопная версия: три колонки ── */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,400px)_auto] gap-10 lg:gap-14 items-center">

            {/* Левая колонка: заголовок + текст */}
            <div>
              <h2 className="text-4xl lg:text-[42px] font-bold text-gray-900 mb-8 leading-[1.1] whitespace-pre-line">
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
                  <button type="submit" form="contact-form" className="bg-[#00b5e2] text-white text-base font-medium rounded-full px-11 py-3.5 whitespace-nowrap hover:bg-[#0099c4] transition-colors">
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
