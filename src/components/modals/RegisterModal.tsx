import { useState } from 'react'
import ModalShell from './ModalShell'
import { modalInputCls, modalSelectCls, SelectChevron, PhoneField, AgreementCheckbox, ModalSuccess } from './shared'

const profiles = ['Пациент', 'Врач', 'Партнёр']

export default function RegisterModal() {
  const [sent, setSent] = useState(false)
  const [phone, setPhone] = useState('')

  return (
    <ModalShell maxWidthClass="max-w-[485px]">
      <div className="px-7 py-9 lg:px-10 lg:py-10">
        {sent ? (
          <ModalSuccess text="Регистрация прошла успешно" />
        ) : (
          <>
            <h2 className="text-[26px] lg:text-[30px] font-semibold text-black leading-[1.2] mb-6">
              Регистрационная<br />форма
            </h2>

            <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
              <input type="text" placeholder="Ваше ФИО" className={modalInputCls} required />

              <div className="relative">
                <select className={modalSelectCls} defaultValue="" required>
                  <option value="" disabled>Профиль</option>
                  {profiles.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
                <SelectChevron />
              </div>

              <input type="text" placeholder="Специализация" className={modalInputCls} />
              <input type="text" placeholder="Город" className={modalInputCls} />

              <PhoneField value={phone} onChange={setPhone} />

              <input type="email" placeholder="Электронная почта" className={modalInputCls} required />

              <AgreementCheckbox>Даю соглашение на обработку медицинских данных</AgreementCheckbox>

              <button
                type="submit"
                className="w-full bg-[#00b7e5] text-white text-base font-semibold rounded-full py-4 mt-2 hover:bg-[#0099c4] transition-colors"
              >
                Зарегистрироваться
              </button>
            </form>
          </>
        )}
      </div>
    </ModalShell>
  )
}
