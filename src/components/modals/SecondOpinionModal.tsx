import { useState } from 'react'
import ModalShell from './ModalShell'
import { modalInputCls, modalSelectCls, SelectChevron, PhoneField, FileDropzone, AgreementCheckbox, ModalSuccess } from './shared'

export default function SecondOpinionModal() {
  const [sent, setSent] = useState(false)
  const [phone, setPhone] = useState('')
  const [file, setFile] = useState<File | null>(null)

  return (
    <ModalShell maxWidthClass="max-w-[485px]">
      <div className="px-7 py-9 lg:px-10 lg:py-10">
        {sent ? (
          <ModalSuccess text="Заявка отправлена" />
        ) : (
          <>
            <h2 className="text-[26px] lg:text-[30px] font-semibold text-black leading-[1.2] mb-6">
              Получить второе<br />мнение
            </h2>

            <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
              <input type="text" placeholder="Ваше ФИО" className={modalInputCls} required />

              <div className="relative">
                <select className={modalSelectCls} defaultValue="">
                  <option value="" disabled>Профиль</option>
                  <option value="Пациент">Пациент</option>
                  <option value="Родственник пациента">Родственник пациента</option>
                </select>
                <SelectChevron />
              </div>

              <input type="email" placeholder="Электронная почта" className={modalInputCls} required />
              <input type="text" placeholder="Город" className={modalInputCls} />

              <PhoneField value={phone} onChange={setPhone} />

              <textarea
                placeholder="Описание вашей ситуации"
                rows={4}
                className={`${modalInputCls} resize-none`}
                required
              />

              <FileDropzone
                label="Прикрепить имеющиеся исследования/заключения"
                hint="JPEG, PNG, PDF форматы, до 20 МБ"
                file={file}
                onFile={setFile}
              />

              <div className="space-y-2 pt-1">
                <AgreementCheckbox>Даю соглашение на обработку персональных данных</AgreementCheckbox>
                <AgreementCheckbox>Даю соглашение на обработку медицинских данных</AgreementCheckbox>
              </div>

              <button
                type="submit"
                className="w-full bg-[#00b7e5] text-white text-base font-semibold rounded-full py-4 mt-2 hover:bg-[#0099c4] transition-colors"
              >
                Отправить заявку
              </button>
            </form>
          </>
        )}
      </div>
    </ModalShell>
  )
}
