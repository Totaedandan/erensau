import { useState } from 'react'
import { useModal } from '@/contexts/ModalContext'
import ModalShell from './ModalShell'
import { modalInputCls, modalSelectCls, SelectChevron, PhoneField, FileDropzone, AgreementCheckbox, ModalSuccess } from './shared'

export default function VacancyApplyModal() {
  const { modal } = useModal()
  const [sent, setSent] = useState(false)
  const [phone, setPhone] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const position = modal?.payload?.position

  return (
    <ModalShell maxWidthClass="max-w-[485px]">
      <div className="px-7 py-9 lg:px-10 lg:py-10">
        {sent ? (
          <ModalSuccess text="Заявка отправлена" />
        ) : (
          <>
            <h2 className="text-[26px] lg:text-[30px] font-semibold text-black leading-[1.2] mb-6">
              Форма для<br />подачи на вакансию
            </h2>

            <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
              <div className="relative">
                <select className={modalSelectCls} defaultValue={position ?? ''} required>
                  <option value="" disabled>Позиция</option>
                  {position && <option value={position}>{position}</option>}
                  {position !== 'Кардиолог' && <option value="Кардиолог">Кардиолог</option>}
                  {position !== 'Гинеколог' && <option value="Гинеколог">Гинеколог</option>}
                  {position !== 'Анестезиолог' && <option value="Анестезиолог">Анестезиолог</option>}
                  {position !== 'Хирург' && <option value="Хирург">Хирург</option>}
                </select>
                <SelectChevron />
              </div>

              <input type="text" placeholder="Ваше ФИО" className={modalInputCls} required />
              <input type="email" placeholder="Почта" className={modalInputCls} required />

              <PhoneField value={phone} onChange={setPhone} />

              <FileDropzone
                label="Прикрепить резюме"
                hint="JPEG, PNG, PDF форматы, до 20 МБ"
                file={file}
                onFile={setFile}
              />

              <AgreementCheckbox>Даю соглашение на обработку персональных данных</AgreementCheckbox>

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
