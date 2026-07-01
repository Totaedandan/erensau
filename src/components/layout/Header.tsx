import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'О клинике', path: '/about' },
  { label: 'Команда врачей', path: '/doctors' },
  { label: 'Медицинские услуги', path: '/services' },
  { label: 'Для пациентов', path: '/patients' },
  { label: 'Сотрудничество', path: '/cooperation' },
  { label: 'Контакты', path: '/contacts' },
]

type Lang = 'ru' | 'kz' | 'en'
const langLabels: Record<Lang, string> = { ru: 'RU', kz: 'KZ', en: 'EN' }

// ── Иконки соцсетей (Heroicons-style inline SVG) ──
const IgIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 2c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1C2.6 8.5 2.6 8.9 2.6 12s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4C15.5 4.2 15.1 4.2 12 4.2zm0 3.4a4.4 4.4 0 110 8.8 4.4 4.4 0 010-8.8zm0 7.3a2.9 2.9 0 100-5.8 2.9 2.9 0 000 5.8zm5.6-7.4a1 1 0 11-2 0 1 1 0 012 0z" />
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
const TgIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.7 4.3c-.3-.3-.7-.3-1.1-.2L2.9 11.4c-.5.2-.7.6-.7 1 .1.4.3.8.8.9l4.5 1.4 1.7 5.4c.1.4.5.7.9.7.3 0 .5-.1.7-.3l2.6-2.5 4.5 3.3c.2.2.5.3.8.3.6 0 1.1-.4 1.2-1L22 5.4c.1-.4 0-.8-.3-1.1zm-12 11.5L8 18.5l-1.1-3.6 11.4-7.5-8.6 8.4z" />
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
  { id: 'tg', href: '#', icon: <TgIcon /> },
  { id: 'in', href: '#', icon: <LinkedinIcon /> },
]

// Флаг Казахстана как SVG
const KzFlag = () => (
  <svg className="w-5 h-3.5 rounded-sm" viewBox="0 0 30 20" fill="none">
    <rect width="30" height="20" fill="#00AFCA" />
    <circle cx="11" cy="10" r="3.2" fill="#FFC107" />
    <path d="M8 10h6M9.5 7.5l3 5M9.5 12.5l3-5" stroke="#FFC107" strokeWidth="0.6" />
  </svg>
)

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lang, setLang] = useState<Lang>('kz')
  const [langOpen, setLangOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-50">

      {/* ── Row 1: utility bar ── */}
      <div className="container-main flex items-center justify-between h-16 lg:h-20">

        {/* Logo erensau / hospital */}
        <Link to="/" className="flex flex-col leading-none flex-shrink-0">
          <span className="text-gray-900 font-bold text-2xl lg:text-[28px] tracking-tight lowercase">erensau</span>
          <span className="text-[#00b5e2] text-[11px] lg:text-xs font-medium tracking-wider lowercase mt-0.5">hospital</span>
        </Link>

        {/* Desktop utility row */}
        <div className="hidden lg:flex items-center gap-5">

          {/* Записаться — текст с подчёркиванием */}
          <Link
            to="/contacts"
            className="text-sm font-medium text-[#00b5e2] underline underline-offset-4 hover:text-[#0099c4] transition-colors whitespace-nowrap"
          >
            Записаться на приём
          </Link>

          {/* Открыть чат WhatsApp */}
          <a
            href="https://wa.me/77172000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#00b5e2] transition-colors"
          >
            <span className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>
            </span>
            Открыть чат
          </a>

          {/* Phone */}
          <a
            href="tel:+77273394040"
            className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-[#00b5e2] transition-colors whitespace-nowrap"
          >
            <span className="w-7 h-7 rounded-full bg-[#00b5e2] flex items-center justify-center text-white">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
            </span>
            +7 (727) 339 40 40
          </a>

          {/* Социальные сети — 5 голубых кругов */}
          <div className="flex items-center gap-1.5">
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                aria-label={s.id}
                className="w-7 h-7 rounded-full bg-[#00b5e2] text-white flex items-center justify-center hover:bg-[#0099c4] transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Селектор языка с флагом */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(o => !o)}
              className="flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:text-[#00b5e2] transition-colors"
            >
              <KzFlag />
              <span>{langLabels[lang]}</span>
              <svg className={`w-3.5 h-3.5 transition-transform ${langOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden min-w-[80px]">
                {(['kz', 'ru', 'en'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false) }}
                    className={`block w-full text-left px-3 py-2 text-sm font-medium hover:bg-gray-50 ${lang === l ? 'text-[#00b5e2]' : 'text-gray-700'}`}
                  >
                    {langLabels[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Войти */}
          <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#00b5e2] transition-colors">
            <span className="w-7 h-7 rounded-full bg-[#00b5e2] flex items-center justify-center text-white">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </span>
            Войти
          </button>
        </div>

        {/* Mobile right side */}
        <div className="lg:hidden flex items-center gap-2">
          <Link to="/contacts" className="text-[#00b5e2] underline underline-offset-4 text-xs font-medium">
            Записаться
          </Link>
          <button
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Row 2: navigation in white pill — выходит за нижний край header, перекрывая Hero ── */}
      <div className="hidden lg:block container-main relative z-10 -mb-10 pb-0">
        <nav className="bg-white rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-gray-100 px-6 py-3.5 flex items-center justify-between">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors whitespace-nowrap pb-1 ${
                  isActive
                    ? 'text-[#00b5e2]'
                    : 'text-gray-700 hover:text-[#00b5e2]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#00b5e2] rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
          <nav className="container-main py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#00b5e2] bg-[#00b5e2]/5'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-3 pt-4 border-t border-gray-100 space-y-3">
              <a
                href="https://wa.me/77172000000"
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <span className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0a12 12 0 100 24 12 12 0 000-24z" /></svg>
                </span>
                Открыть чат WhatsApp
              </a>
              <a href="tel:+77273394040" className="flex items-center gap-2 text-sm font-semibold text-[#00b5e2]">
                +7 (727) 339 40 40
              </a>
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-1.5">
                  {socials.map((s) => (
                    <a key={s.id} href={s.href} className="w-7 h-7 rounded-full bg-[#00b5e2] text-white flex items-center justify-center">
                      {s.icon}
                    </a>
                  ))}
                </div>
                <button className="text-xs font-medium text-gray-700 flex items-center gap-1.5">
                  <span className="w-6 h-6 rounded-full bg-[#00b5e2] flex items-center justify-center text-white">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                  </span>
                  Войти
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
