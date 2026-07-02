import type { ReactNode } from 'react'
import mapBg from '@/assets/icons/map-bg.svg'
import imgClinicBuilding from '@/assets/images/img-clinic-building.jpg'

const schedule = [
  { day: 'будние дни', clinic: '7:30 – 15:45', call: '7:30 – 20:00' },
  { day: 'суббота', clinic: '8:00 – 12:00', call: '8:00 – 18:00' },
  { day: 'воскресенье', clinic: 'выходной', call: '10:00 – 18:00' },
]

// Маленький синий кружок с иконкой
function Dot({ children }: { children: ReactNode }) {
  return (
    <span className="w-6 h-6 rounded-full bg-[#00b5e2] text-white flex items-center justify-center flex-shrink-0">
      {children}
    </span>
  )
}
const ic = 'w-3 h-3'
const PinIcon = () => <svg className={ic} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8 2 5 5 5 9c0 5.5 7 13 7 13s7-7.5 7-13c0-4-3-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" /></svg>
const PhoneIcon = () => <svg className={ic} fill="currentColor" viewBox="0 0 24 24"><path d="M20 15.5c-1.2 0-2.5-.2-3.6-.6-.3-.1-.7 0-1 .2l-2 2a15 15 0 01-6.6-6.6l2-2c.3-.3.4-.7.2-1C8.7 8.5 8.5 7.2 8.5 6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1 0 9.4 7.6 17 17 17 .5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1z" /></svg>
const WaIcon = () => <svg className={ic} fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1l-.9 1.1c-.2.2-.3.2-.6.1-1.1-.5-1.9-1.3-2.5-2.3-.2-.3 0-.4.1-.6l.4-.5c.1-.2.1-.3 0-.5l-.9-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.2-.7.4-.8.9-.8 2.1-.1 3.2.9 1.5 2.1 2.6 3.7 3.3 1.3.5 1.8.5 2.5.3.4-.1 1.2-.5 1.3-1 .2-.5.2-.9.1-1zm-5.5 6.6a9 9 0 01-4.5-1.2l-3.2.8.8-3.1A9 9 0 1112 21z" /></svg>
const TgIcon = () => <svg className={ic} fill="currentColor" viewBox="0 0 24 24"><path d="M21.7 4.3c-.3-.3-.7-.3-1.1-.2L2.9 11.4c-.5.2-.7.6-.7 1 .1.4.3.8.8.9l4.5 1.4 1.7 5.4c.1.4.5.7.9.7.3 0 .5-.1.7-.3l2.6-2.5 4.5 3.3c.5.4 1.2.1 1.4-.5L22 5.4c.1-.4 0-.8-.3-1.1z" /></svg>
const GlobeIcon = () => <svg className={ic} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" /></svg>
const MailIcon = () => <svg className={ic} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M3 8l8 5 8-5M5 5h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z" /></svg>
const IgIcon = () => <svg className={ic} fill="currentColor" viewBox="0 0 24 24"><path d="M12 7.6a4.4 4.4 0 100 8.8 4.4 4.4 0 000-8.8zm0 7.3a2.9 2.9 0 110-5.8 2.9 2.9 0 010 5.8zM16.5 4h-9A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4zm-4.9 3a1 1 0 110 2 1 1 0 010-2z" /></svg>
const FbIcon = () => <svg className={ic} fill="currentColor" viewBox="0 0 24 24"><path d="M13.4 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.2-1.5 1.6-1.5h1.7V3.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.6V13h2.7v8h3.1z" /></svg>
const YtIcon = () => <svg className={ic} fill="currentColor" viewBox="0 0 24 24"><path d="M21.6 7.2c-.2-.9-.9-1.5-1.7-1.7C18.2 5 12 5 12 5s-6.2 0-7.9.5c-.9.2-1.5.9-1.7 1.7C2 8.9 2 12 2 12s0 3.1.4 4.8c.2.9.9 1.5 1.7 1.7C5.8 19 12 19 12 19s6.2 0 7.9-.5c.9-.2 1.5-.9 1.7-1.7.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM10 15V9l5.2 3L10 15z" /></svg>

// Запись: иконки СВЕРХУ, значение ПОД ними (как в дизайне)
function Entry({ icons, children }: { icons: ReactNode; children: ReactNode }) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex gap-1 mb-1.5">{icons}</div>
      <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
    </div>
  )
}

// Карта + наложенная карточка контактов. Используется на Главной и на странице Контакты.
export default function ContactsMapCard({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="bg-[#f4f4f4]">
      {showHeading && (
        <div className="container-main pt-12 lg:pt-16">
          <h2 className="text-3xl lg:text-[40px] font-bold text-gray-900 text-center lg:text-left">Контакты</h2>
        </div>
      )}

      {/* ── Мобильная версия: карточка сверху, карта ниже ── */}
      <div className="lg:hidden">
        <div className="container-main pt-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-x-6">
              <div>
                <h3 className="text-gray-900 font-bold text-sm mb-2.5">Адрес:</h3>
                <Entry icons={<Dot><PinIcon /></Dot>}>
                  г. Алматы ул. Нурлана Каппарова, дом 4, кор. 1
                </Entry>
                <h3 className="text-gray-900 font-bold text-sm mt-5 mb-2.5">Доп.информация:</h3>
                <Entry icons={<><Dot><GlobeIcon /></Dot><Dot><IgIcon /></Dot><Dot><FbIcon /></Dot><Dot><TgIcon /></Dot></>}>
                  erensau.kz
                </Entry>
                <Entry icons={<Dot><YtIcon /></Dot>}>erensau</Entry>
                <Entry icons={<Dot><MailIcon /></Dot>}>
                  <a href="mailto:info@erensau.kz">info@erensau.kz</a>
                </Entry>
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-sm mb-2.5">Колл-центр:</h3>
                <Entry icons={<Dot><PhoneIcon /></Dot>}>
                  <a href="tel:+77273394040">+7 727 339 40 40</a>
                </Entry>
                <Entry icons={<><Dot><WaIcon /></Dot><Dot><TgIcon /></Dot></>}>
                  <a href="tel:+77713999444">+7 771 399 94 44</a>
                </Entry>
                <h3 className="text-gray-900 font-bold text-sm mt-5 mb-2.5">Администрация:</h3>
                <Entry icons={<Dot><PhoneIcon /></Dot>}>
                  <a href="tel:+77273394282">+7 727 339 42 82</a>
                </Entry>
                <Entry icons={<><Dot><WaIcon /></Dot><Dot><TgIcon /></Dot></>}>
                  <a href="tel:+77717044848">+7 771 704 48 48</a>
                </Entry>
              </div>
            </div>
          </div>
        </div>

        {/* Карта с фото клиники, графиком работы и кнопкой */}
        <div className="relative mt-6 overflow-hidden">
          <img src={mapBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative px-4 pt-16 pb-10">
            <div className="mx-auto w-64 h-44 rounded-2xl overflow-hidden shadow-2xl border-[5px] border-white">
              <img src={imgClinicBuilding} alt="Erensau Hospital" className="w-full h-full object-cover" />
            </div>

            <div className="mt-40">
              <h3 className="text-gray-900 font-bold text-base mb-3">График работы</h3>
              <table className="w-full text-sm mb-6">
                <thead>
                  <tr className="text-[#00b5e2] text-[13px]">
                    <th className="text-left font-medium pb-2">День недели</th>
                    <th className="text-left font-medium pb-2">Клиники</th>
                    <th className="text-left font-medium pb-2">Колл-центр</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row) => (
                    <tr key={row.day} className="text-gray-700">
                      <td className="py-0.5">{row.day}</td>
                      <td className="py-0.5">{row.clinic}</td>
                      <td className="py-0.5">{row.call}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <a
                href="https://2gis.kz/almaty"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white rounded-full px-10 py-4 text-sm font-medium text-gray-900 shadow-md"
              >
                Простроить навигацию
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Десктопная версия: карточка поверх карты ── */}
      <div className="hidden lg:block relative h-[700px] lg:h-[740px] overflow-hidden">
        {/* Карта-фон */}
        <img src={mapBg} alt="" className="absolute inset-0 w-full h-full object-cover" />

        {/* Фото клиники на карте */}
        <div className="hidden lg:block absolute left-[52%] top-[28%] w-72 h-52 rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white">
          <img src={imgClinicBuilding} alt="Erensau Hospital" className="w-full h-full object-cover" />
        </div>

        {/* Карточка контактов поверх карты */}
        <div className="absolute inset-0 container-main py-8 lg:py-10 pointer-events-none">
          <div className="bg-white rounded-3xl p-7 lg:p-8 shadow-2xl pointer-events-auto max-w-[400px] w-full">

            <div className="grid grid-cols-2 gap-x-8 mb-5">
              {/* Левая колонка */}
              <div>
                <h3 className="text-gray-900 font-bold text-sm mb-2.5">Адрес:</h3>
                <Entry icons={<Dot><PinIcon /></Dot>}>
                  г. Алматы ул. Нурлана<br />Каппарова, дом 4, кор. 1
                </Entry>

                <h3 className="text-gray-900 font-bold text-sm mt-5 mb-2.5">Доп.информация:</h3>
                <Entry icons={<><Dot><GlobeIcon /></Dot><Dot><IgIcon /></Dot><Dot><FbIcon /></Dot><Dot><TgIcon /></Dot></>}>
                  erensau.kz
                </Entry>
                <Entry icons={<Dot><YtIcon /></Dot>}>erensau</Entry>
                <Entry icons={<Dot><MailIcon /></Dot>}>
                  <a href="mailto:info@erensau.kz" className="hover:text-[#00b5e2] transition-colors">info@erensau.kz</a>
                </Entry>
              </div>

              {/* Правая колонка */}
              <div>
                <h3 className="text-gray-900 font-bold text-sm mb-2.5">Колл-центр:</h3>
                <Entry icons={<Dot><PhoneIcon /></Dot>}>
                  <a href="tel:+77273394040" className="hover:text-[#00b5e2] transition-colors">+7 727 339 40 40</a>
                </Entry>
                <Entry icons={<><Dot><WaIcon /></Dot><Dot><TgIcon /></Dot></>}>
                  <a href="tel:+77713999444" className="hover:text-[#00b5e2] transition-colors">+7 771 399 94 44</a>
                </Entry>

                <h3 className="text-gray-900 font-bold text-sm mt-5 mb-2.5">Администрация:</h3>
                <Entry icons={<Dot><PhoneIcon /></Dot>}>
                  <a href="tel:+77273394282" className="hover:text-[#00b5e2] transition-colors">+7 727 339 42 82</a>
                </Entry>
                <Entry icons={<><Dot><WaIcon /></Dot><Dot><TgIcon /></Dot></>}>
                  <a href="tel:+77717044848" className="hover:text-[#00b5e2] transition-colors">+7 771 704 48 48</a>
                </Entry>
              </div>
            </div>

            {/* График работы */}
            <div className="border-t border-gray-100 pt-4 mb-5">
              <h3 className="text-gray-900 font-bold text-sm mb-3">График работы</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[#00b5e2] text-[13px]">
                    <th className="text-left font-medium pb-2">День недели</th>
                    <th className="text-left font-medium pb-2">Клиники</th>
                    <th className="text-left font-medium pb-2">Колл-центр</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row) => (
                    <tr key={row.day} className="text-gray-700">
                      <td className="py-0.5">{row.day}</td>
                      <td className="py-0.5">{row.clinic}</td>
                      <td className="py-0.5">{row.call}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Простроить навигацию */}
            <a
              href="https://2gis.kz/almaty"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#f1f1f1] rounded-full px-10 py-3.5 text-sm text-gray-900 hover:bg-[#e8e8e8] transition-colors"
            >
              Простроить навигацию
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
