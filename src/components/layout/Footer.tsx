import { Link } from 'react-router-dom'
import footerOrnament from '@/assets/images/footer-ornament.png'

// ── Иконки соцсетей (точные пути из Figma, node 2672:10562) ──
const IgIcon = () => (
  <svg className="w-[19px] h-[19px]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.4a4.4 4.4 0 110 8.8 4.4 4.4 0 010-8.8zm0 7.3a2.9 2.9 0 100-5.8 2.9 2.9 0 000 5.8zm5.6-7.4a1 1 0 11-2 0 1 1 0 012 0z" />
  </svg>
)
const FbIcon = () => (
  <svg className="w-[19px] h-[19px]" viewBox="0 0 34.148 34.1482" fill="currentColor">
    <path d="M16.9097 8.07662C22.0398 8.07662 26.1985 12.2001 26.1985 17.2867C26.1985 21.8837 22.8017 25.694 18.3611 26.3849V19.949H20.5255L20.9373 17.2867H18.3611V15.5591C18.3611 14.8307 18.721 14.1207 19.8749 14.1207H21.0461V11.8542C21.0461 11.8542 20.8966 11.8289 20.6562 11.7973C20.6161 11.792 20.5735 11.7866 20.5287 11.781C20.1474 11.734 19.6031 11.6806 19.0622 11.6748L18.9668 11.6743C18.9337 11.6743 18.9007 11.6746 18.8679 11.6752C18.8351 11.6759 18.8025 11.6768 18.7701 11.678C18.7539 11.6787 18.7377 11.6794 18.7216 11.6801C18.4798 11.6918 18.2485 11.7208 18.0286 11.7668C17.97 11.779 17.9122 11.7925 17.8552 11.8072C17.7982 11.8219 17.7421 11.8377 17.6868 11.8548C17.6453 11.8676 17.6043 11.8811 17.5638 11.8952C17.5368 11.9047 17.5101 11.9144 17.4835 11.9244C17.4702 11.9294 17.457 11.9345 17.4439 11.9397C17.3912 11.9603 17.3394 11.9821 17.2885 12.0051C17.2758 12.0108 17.2632 12.0167 17.2506 12.0226C17.2254 12.0344 17.2004 12.0465 17.1756 12.0588C17.1385 12.0774 17.1019 12.0966 17.0658 12.1165C16.9215 12.196 16.7856 12.2859 16.6587 12.3862C16.6481 12.3946 16.6376 12.403 16.6271 12.4115C16.6062 12.4285 16.5856 12.4458 16.5652 12.4633C16.555 12.4721 16.5448 12.481 16.5348 12.4899C16.4844 12.5345 16.4356 12.5809 16.3884 12.629C16.379 12.6387 16.3696 12.6484 16.3603 12.6582C16.3231 12.6972 16.287 12.7374 16.2519 12.7787C16.2168 12.8201 16.1828 12.8625 16.1498 12.9061C16.1251 12.9387 16.101 12.972 16.0776 13.0059C16.0619 13.0285 16.0465 13.0514 16.0314 13.0745C16.0163 13.0977 16.0015 13.1211 15.987 13.1448C15.8998 13.287 15.8226 13.4391 15.7561 13.6008C15.745 13.6278 15.7342 13.655 15.7237 13.6825C15.6869 13.7787 15.6539 13.8782 15.6245 13.9809C15.6119 14.025 15.6001 14.0696 15.5889 14.1148C15.5777 14.16 15.5672 14.2058 15.5574 14.2522C15.5476 14.2986 15.5386 14.3456 15.5302 14.3932C15.5246 14.4249 15.5193 14.4568 15.5144 14.4891C15.4947 14.618 15.48 14.7511 15.4707 14.8882C15.4636 14.9911 15.4596 15.0963 15.4586 15.2037C15.4584 15.2216 15.4584 15.2396 15.4584 15.2576V17.2867H13.0999V19.949H15.4584V26.3849C11.0177 25.694 7.62095 21.8837 7.62094 17.2867C7.62094 12.2001 11.7797 8.07662 16.9097 8.07662Z" />
  </svg>
)
const YtIcon = () => (
  <svg className="w-[19px] h-[19px]" viewBox="0 0 34.0614 34.0615" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M22.0034 9.8496C23.7412 9.8496 24.6101 9.84961 25.2739 10.1938C25.8578 10.4965 26.3324 10.9796 26.6299 11.5737C26.9681 12.2492 26.9681 13.1334 26.9681 14.9019V19.0069C26.9681 20.7754 26.9681 21.6596 26.6299 22.3351C26.3324 22.9293 25.8578 23.4123 25.2739 23.7151C24.6101 24.0592 23.7412 24.0592 22.0034 24.0592H12.074C10.3362 24.0592 9.46732 24.0592 8.80357 23.7151C8.21972 23.4123 7.74504 22.9293 7.44755 22.3351C7.10935 21.6596 7.10934 20.7754 7.10934 19.0069V14.9019C7.10934 13.1334 7.10935 12.2492 7.44755 11.5737C7.74504 10.9796 8.21972 10.4965 8.80357 10.1938C9.46732 9.84961 10.3362 9.8496 12.074 9.8496H22.0034ZM14.9055 20.0726L20.7235 16.9918L14.9055 13.8362V20.0726Z" />
  </svg>
)
const LinkedinIcon = () => (
  <svg className="w-[19px] h-[19px]" viewBox="0 0 34.1481 34.1482" fill="currentColor">
    <path d="M16.9331 7.96472C11.8159 7.96472 7.66766 12.1129 7.66766 17.2301C7.66766 22.3473 11.8159 26.4956 16.9331 26.4956C22.0503 26.4956 26.1985 22.3473 26.1985 17.2301C26.1985 12.1129 22.0502 7.96472 16.9331 7.96472ZM12.5378 21.2832V15.0166L14.4799 15.017V21.283L12.5378 21.2831V21.2832ZM13.5804 14.16C13.0755 14.1924 12.6207 13.8817 12.4547 13.4283C12.2758 12.9399 12.4372 12.4073 12.8627 12.1048C13.205 11.8615 13.6564 11.8288 14.0417 12.0303C14.3793 12.2068 14.6223 12.5608 14.6447 12.9662C14.6791 13.586 14.2099 14.1198 13.5804 14.16ZM19.838 21.2831V18.0199C19.8336 17.442 19.7504 16.7409 19.1084 16.6018C18.8734 16.5509 18.6393 16.5635 18.4158 16.6256C17.7779 16.8029 17.6608 17.4827 17.6465 18.0846V21.2834L15.7075 21.2828V15.017L17.5686 15.0166L17.5694 15.8759C17.5999 15.8809 17.6175 15.8653 17.6258 15.8365C17.9753 15.2296 18.7003 14.8647 19.3907 14.8654H19.5351C19.8293 14.8658 20.1093 14.9074 20.3897 14.9928C20.872 15.1397 21.2563 15.468 21.4724 15.9248C21.7453 16.502 21.7859 17.1724 21.793 17.8126L21.7935 21.283H19.8382L19.838 21.2831Z" />
  </svg>
)

const socials = [
  { id: 'ig', href: 'https://www.instagram.com/erensau.kz/', icon: <IgIcon /> },
  { id: 'fb', href: 'https://www.facebook.com/erensaukz/', icon: <FbIcon /> },
  { id: 'yt', href: 'https://www.youtube.com/@erensau', icon: <YtIcon /> },
  { id: 'in', href: 'https://www.linkedin.com/company/erensau-hospital/', icon: <LinkedinIcon /> },
]

const corporate = [
  { label: 'Сотрудничество', path: '/cooperation' },
  { label: 'Карьера',        path: '/vacancies' },
  { label: 'Лицензии',       path: '/about' },
]

const navigation = [
  { label: 'О клинике',         path: '/about' },
  { label: 'Команда врачей',    path: '/doctors' },
  { label: 'Мед. услуги',       path: '/services' },
  { label: 'Для пациентов',     path: '/patients' },
  { label: 'Контакты',          path: '/contacts' },
  { label: 'Вакансии',          path: '/vacancies' },
]

// Порядок для мобильной сетки 3×2 (по строкам, как в мобильном макете)
const navigationMobile = [
  { label: 'О клинике',      path: '/about' },
  { label: 'Мед. услуги',    path: '/services' },
  { label: 'Контакты',       path: '/contacts' },
  { label: 'Команда врачей', path: '/doctors' },
  { label: 'Для пациентов',  path: '/patients' },
  { label: 'Вакансии',       path: '/vacancies' },
]
const corporateMobile = [
  { label: 'Сотрудничество', path: '/cooperation' },
  { label: 'Лицензии',       path: '/about' },
  { label: 'Карьера',        path: '/vacancies' },
]

export default function Footer() {
  return (
    <footer className="bg-[#f4f4f4] relative overflow-hidden">
      {/* ── Мобильная версия (по мобильному макету) ── */}
      <div className="lg:hidden container-main pt-8 pb-4 relative z-10">
        {/* Лого + соцсети в одну строку */}
        <div className="flex items-start justify-between mb-7">
          <Link to="/" className="flex flex-col items-stretch leading-none w-fit">
            <span className="text-gray-900 font-bold text-[34px] tracking-tight lowercase">erensau</span>
            <span className="text-[#00b5e2] text-base font-medium tracking-wider lowercase mt-1 text-right">hospital</span>
          </Link>
          <div className="flex gap-2 pt-2">
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.id}
                className="w-9 h-9 rounded-full bg-[#00b5e2] text-white flex items-center justify-center"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Колл-центр / Администрация — 2 колонки */}
        <div className="grid grid-cols-2 gap-x-6 mb-5 text-sm text-gray-900">
          <div>
            <h3 className="font-semibold text-[15px] mb-2.5">Колл-центр:</h3>
            <div className="font-bold mb-0.5">Телефон:</div>
            <a href="tel:+77273394040" className="block mb-2.5">+7 727 339 40 40</a>
            <div className="font-bold mb-0.5">WhatsApp/Telegram:</div>
            <a href="tel:+77713999444" className="block">+7 771 399 94 44</a>
          </div>
          <div>
            <h3 className="font-semibold text-[15px] mb-2.5">Администрация:</h3>
            <div className="font-bold mb-0.5">Телефон:</div>
            <a href="tel:+77273394282" className="block mb-2.5">+7 727 339 42 82</a>
            <div className="font-bold mb-0.5">WhatsApp/Telegram:</div>
            <a href="tel:+77717044848" className="block">+7 771 704 48 48</a>
          </div>
        </div>

        {/* Навигация — ссылки в 3 колонки */}
        <h3 className="font-semibold text-[15px] text-gray-900 mb-2.5">Навигация:</h3>
        <div className="grid grid-cols-[auto_auto_auto] justify-between gap-y-1.5 mb-5">
          {navigationMobile.map((l) => (
            <Link key={l.path + l.label} to={l.path} className="text-gray-900 text-[13px] underline underline-offset-4 whitespace-nowrap">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Корпоративные — в строку */}
        <h3 className="font-semibold text-[15px] text-gray-900 mb-2.5">Корпоративные:</h3>
        <div className="grid grid-cols-[auto_auto_auto] justify-between gap-y-1.5 mb-5">
          {corporateMobile.map((l) => (
            <Link key={l.path + l.label} to={l.path} className="text-gray-900 text-[13px] underline underline-offset-4 whitespace-nowrap">
              {l.label}
            </Link>
          ))}
        </div>

        <a href="mailto:info@erensau.kz" className="block text-[13px] text-gray-900 mb-1">info@erensau.kz</a>
        <p className="text-[13px] text-gray-900 mb-4">г. Алматы ул. Нурлана Каппарова, дом 4, кор. 1</p>

        <div className="pt-4 border-t border-gray-300 space-y-1.5">
          <a href="#" className="block text-gray-900 text-[13px] underline underline-offset-4 w-fit">Политика конфиденциальности</a>
          <p className="text-gray-900 text-[13px]">©{new Date().getFullYear()} Все права защищены.</p>
        </div>
      </div>

      {/* ── Десктопная версия ── */}
      <div className="hidden lg:block container-main pt-16 lg:pt-20 pb-8 lg:pb-[92px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Brand + соцсети */}
          <div className="lg:col-span-3">
            <Link to="/" className="flex flex-col items-stretch leading-none w-fit mb-7">
              <span className="text-gray-900 font-bold text-4xl lg:text-5xl tracking-tight lowercase">erensau</span>
              <span className="text-[#00b5e2] text-lg lg:text-xl font-medium tracking-wider lowercase mt-1.5 text-right">hospital</span>
            </Link>
            <div className="flex gap-[18px]">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.id}
                  className="w-[34px] h-[34px] rounded-full bg-[#00b5e2] text-white flex items-center justify-center hover:bg-[#0099c4] transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Корпоративные */}
          <div className="lg:col-span-2">
            <h3 className="text-gray-900 font-semibold text-base mb-5">Корпоративные:</h3>
            <ul className="space-y-3">
              {corporate.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-gray-900 text-sm underline underline-offset-4 hover:text-[#00b5e2] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Навигация */}
          <div className="lg:col-span-2">
            <h3 className="text-gray-900 font-semibold text-base mb-5">Навигация:</h3>
            <ul className="space-y-3">
              {navigation.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-gray-900 text-sm underline underline-offset-4 hover:text-[#00b5e2] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Колл-центр */}
          <div className="lg:col-span-3">
            <h3 className="text-gray-900 font-semibold text-base mb-5">Колл-центр:</h3>
            <ul className="space-y-4 text-sm text-gray-900">
              <li>
                <div className="font-bold mb-1">Телефон:</div>
                <a href="tel:+77273394040" className="hover:text-[#00b5e2] transition-colors">+7 727 339 40 40</a>
              </li>
              <li>
                <div className="font-bold mb-1">WhatsApp/Telegram:</div>
                <a href="tel:+77713999444" className="hover:text-[#00b5e2] transition-colors">+7 771 399 94 44</a>
              </li>
              <li>
                <a href="mailto:info@erensau.kz" className="hover:text-[#00b5e2] transition-colors">info@erensau.kz</a>
              </li>
              <li className="leading-relaxed text-gray-700">
                г. Алматы ул. Нурлана<br />Каппарова, дом 4, кор. 1
              </li>
            </ul>
          </div>

          {/* Администрация */}
          <div className="lg:col-span-2">
            <h3 className="text-gray-900 font-semibold text-base mb-5">Администрация:</h3>
            <ul className="space-y-4 text-sm text-gray-900">
              <li>
                <div className="font-bold mb-1">Телефон:</div>
                <a href="tel:+77273394282" className="hover:text-[#00b5e2] transition-colors">+7 727 339 42 82</a>
              </li>
              <li>
                <div className="font-bold mb-1">WhatsApp/Telegram:</div>
                <a href="tel:+77717044848" className="hover:text-[#00b5e2] transition-colors">+7 771 704 48 48</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-3">
          <a href="#" className="text-gray-900 text-sm underline underline-offset-4 hover:text-[#00b5e2] transition-colors">
            Политика конфиденциальности
          </a>
          <p className="text-gray-900 text-sm">
            ©{new Date().getFullYear()} Все права защищены.
          </p>
        </div>
      </div>

      {/* Декоративный орнамент снизу — экспорт из Figma (на мобилке крупнее, с обрезкой по центру) */}
      <img src={footerOrnament} alt="" aria-hidden="true" className="w-full h-14 lg:h-auto object-cover lg:object-fill pointer-events-none select-none" />
    </footer>
  )
}
