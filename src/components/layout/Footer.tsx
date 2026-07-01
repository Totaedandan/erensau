import { Link } from 'react-router-dom'

// ── Иконки соцсетей (как в Header) ──
const IgIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.4a4.4 4.4 0 110 8.8 4.4 4.4 0 010-8.8zm0 7.3a2.9 2.9 0 100-5.8 2.9 2.9 0 000 5.8zm5.6-7.4a1 1 0 11-2 0 1 1 0 012 0z" />
  </svg>
)
const FbIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.4 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.2-1.5 1.6-1.5h1.7V3.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.6V13h2.7v8h3.1z" />
  </svg>
)
const YtIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.6 7.2c-.2-.9-.9-1.5-1.7-1.7C18.2 5 12 5 12 5s-6.2 0-7.9.5c-.9.2-1.5.9-1.7 1.7C2 8.9 2 12 2 12s0 3.1.4 4.8c.2.9.9 1.5 1.7 1.7C5.8 19 12 19 12 19s6.2 0 7.9-.5c.9-.2 1.5-.9 1.7-1.7.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM10 15V9l5.2 3L10 15z" />
  </svg>
)
const LinkedinIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.4 3H3.6C3.3 3 3 3.3 3 3.6v16.8c0 .3.3.6.6.6h16.8c.3 0 .6-.3.6-.6V3.6c0-.3-.3-.6-.6-.6zM8.3 18.3H5.7V9.7h2.7v8.6zM7 8.5C6.1 8.5 5.4 7.8 5.4 7c0-.9.7-1.5 1.5-1.5.9 0 1.5.7 1.5 1.5.1.8-.6 1.5-1.4 1.5zm11.3 9.8h-2.7v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3h-2.7V9.7h2.6v1.2c.4-.7 1.2-1.4 2.5-1.4 2.7 0 3.2 1.8 3.2 4.1v4.7z" />
  </svg>
)

const socials = [
  { id: 'ig', href: '#', icon: <IgIcon /> },
  { id: 'fb', href: '#', icon: <FbIcon /> },
  { id: 'yt', href: '#', icon: <YtIcon /> },
  { id: 'in', href: '#', icon: <LinkedinIcon /> },
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

export default function Footer() {
  return (
    <footer className="bg-[#f4f4f4] relative overflow-hidden">
      <div className="container-main pt-16 lg:pt-20 pb-8 lg:pb-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Brand + соцсети */}
          <div className="lg:col-span-3">
            <Link to="/" className="flex flex-col leading-none mb-7">
              <span className="text-gray-900 font-bold text-4xl lg:text-5xl tracking-tight lowercase">erensau</span>
              <span className="text-[#00b5e2] text-lg lg:text-xl font-medium tracking-wider lowercase mt-1">hospital</span>
            </Link>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  aria-label={s.id}
                  className="w-8 h-8 rounded-full bg-[#00b5e2] text-white flex items-center justify-center hover:bg-[#0099c4] transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Корпоративные */}
          <div className="lg:col-span-2">
            <h3 className="text-gray-900 font-bold text-base mb-5">Корпоративные:</h3>
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
            <h3 className="text-gray-900 font-bold text-base mb-5">Навигация:</h3>
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
            <h3 className="text-gray-900 font-bold text-base mb-5">Колл-центр:</h3>
            <ul className="space-y-4 text-sm text-gray-900">
              <li>
                <div className="font-bold mb-1">Телефон:</div>
                <a href="tel:+77273394040" className="hover:text-[#00b5e2] transition-colors">+7 727 339 40 40</a>
              </li>
              <li>
                <div className="font-bold mb-1">WhatsApp/Telegram:</div>
                <a href="tel:+77273394040" className="hover:text-[#00b5e2] transition-colors">+7 727 339 40 40</a>
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
            <h3 className="text-gray-900 font-bold text-base mb-5">Администрация:</h3>
            <ul className="space-y-4 text-sm text-gray-900">
              <li>
                <div className="font-bold mb-1">Телефон:</div>
                <a href="tel:+77273394040" className="hover:text-[#00b5e2] transition-colors">+7 727 339 40 40</a>
              </li>
              <li>
                <div className="font-bold mb-1">WhatsApp/Telegram:</div>
                <a href="tel:+77273394282" className="hover:text-[#00b5e2] transition-colors">+7 727 339 42 82</a>
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

      {/* Декоративный орнамент-паттерн снизу (мотив дуг из логотипа) */}
      <div className="relative w-full overflow-hidden pointer-events-none select-none h-24 lg:h-32">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <pattern id="erensau-arcs" width="120" height="120" patternUnits="userSpaceOnUse">
              <g fill="none" stroke="#e2e2e2" strokeWidth="14">
                <path d="M0 120 A120 120 0 0 1 120 0" />
                <path d="M0 60 A60 60 0 0 1 60 0" />
                <path d="M60 120 A60 60 0 0 1 120 60" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#erensau-arcs)" />
        </svg>
      </div>
    </footer>
  )
}
