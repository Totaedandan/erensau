import { useState } from 'react'
import ModalShell from './ModalShell'
import { modalInputCls, StarRating, ModalSuccess } from './shared'

type Step = 'select' | 'doctor' | 'service' | 'clinic'

const DoctorIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#00b5e2" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.5h3l2-4 3 7 2-5.5h5" />
  </svg>
)
const ServiceIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#00b5e2" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8L6 21l1.6-7-5.4-4.7 7.1-.6L12 2z" />
  </svg>
)
const ClinicIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#00b5e2" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V7l8-4 8 4v14M9 21v-6h6v6M12 8v3m-1.5-1.5h3" />
  </svg>
)

const options: { step: Step; title: string; desc: string; cta: string; icon: () => React.ReactElement }[] = [
  { step: 'doctor', title: 'О враче', desc: 'Оставьте отзыв о работе врача, его профессионализме и внимании к вам.', cta: 'Оставить отзыв о враче', icon: DoctorIcon },
  { step: 'service', title: 'О сервисе', desc: 'Поделитесь мнением о качестве обслуживания, комфорте и удобстве в клинике.', cta: 'Оставить отзыв о сервисе', icon: ServiceIcon },
  { step: 'clinic', title: 'О клинике', desc: 'Расскажите о клинике в целом: условиях, оборудовании и организации работы.', cta: 'Оставить отзыв о клинике', icon: ClinicIcon },
]

const questionByStep: Record<Exclude<Step, 'select'>, string> = {
  doctor: 'работу врача?',
  service: 'работу сервиса?',
  clinic: 'работу клиники?',
}

export default function ReviewModal() {
  const [step, setStep] = useState<Step>('select')
  const [sent, setSent] = useState(false)
  const [rating, setRating] = useState(0)

  if (step === 'select') {
    return (
      <ModalShell maxWidthClass="max-w-[1000px]">
        <div className="px-6 py-10 lg:px-12 lg:py-14">
          <h2 className="text-[24px] lg:text-[28px] font-semibold text-black text-center mb-8 lg:mb-10">
            Оставьте отзыв
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {options.map((o) => (
              <div key={o.step} className="border-[3px] border-[#efefef] rounded-[24px] p-7 flex flex-col items-center text-center">
                <span className="w-16 h-16 rounded-full bg-[#00b5e2]/20 flex items-center justify-center mb-5">
                  <o.icon />
                </span>
                <h3 className="font-semibold text-black text-lg mb-2">{o.title}</h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6">{o.desc}</p>
                <button
                  onClick={() => setStep(o.step)}
                  className="mt-auto bg-[#00b5e2] text-white text-sm font-semibold rounded-full px-6 py-3.5 w-full hover:bg-[#0099c4] transition-colors"
                >
                  {o.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </ModalShell>
    )
  }

  return (
    <ModalShell maxWidthClass="max-w-[485px]">
      <div className="px-7 py-9 lg:px-10 lg:py-10">
        {sent ? (
          <ModalSuccess text="Спасибо за ваш отзыв!" />
        ) : (
          <>
            <button
              onClick={() => setStep('select')}
              className="flex items-center gap-1.5 text-black/40 hover:text-black text-sm mb-5 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              Назад
            </button>

            <h2 className="text-[24px] lg:text-[27px] font-semibold text-black leading-[1.2] mb-6">
              На сколько Вы оцениваете<br />{questionByStep[step]}
            </h2>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
              {step === 'doctor' && (
                <input type="text" placeholder="Имя врача" className={modalInputCls} required />
              )}

              <StarRating value={rating} onChange={setRating} />

              <textarea
                placeholder="Напишите поподробнее о том что вам понравилось"
                rows={4}
                className={`${modalInputCls} resize-none`}
                required
              />

              <button
                type="submit"
                className="w-full bg-[#00b5e2] text-white text-base font-semibold rounded-full py-4 mt-2 hover:bg-[#0099c4] transition-colors"
              >
                Отправить отзыв
              </button>
            </form>
          </>
        )}
      </div>
    </ModalShell>
  )
}
