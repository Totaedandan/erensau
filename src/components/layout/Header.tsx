import { useState } from 'react'
import type { ComponentType } from 'react'
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

// ── Иконки соцсетей (канонические бренд-глифы, как в дизайне) ──
const IgIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)
const FbIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 011.141.195v3.325a8.623 8.623 0 00-.653-.036 26.805 26.805 0 00-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 00-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647z" />
  </svg>
)
const YtIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)
const LinkedinIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const socials = [
  { id: 'ig', href: 'https://www.instagram.com/erensau.kz/', icon: <IgIcon /> },
  { id: 'fb', href: 'https://www.facebook.com/erensaukz/', icon: <FbIcon /> },
  { id: 'yt', href: 'https://www.youtube.com/@erensau', icon: <YtIcon /> },
  { id: 'in', href: 'https://www.linkedin.com/company/erensau-hospital/', icon: <LinkedinIcon /> },
]

// Флаги как SVG
const KzFlag = () => (
  <svg className="w-5 h-3.5 rounded-sm" viewBox="0 0 30 20" fill="none">
    <rect width="30" height="20" fill="#00AFCA" />
    <circle cx="11" cy="10" r="3.2" fill="#FFC107" />
    <path d="M8 10h6M9.5 7.5l3 5M9.5 12.5l3-5" stroke="#FFC107" strokeWidth="0.6" />
  </svg>
)
const RuFlag = () => (
  <svg className="w-5 h-3.5 rounded-sm" viewBox="0 0 30 20">
    <rect width="30" height="6.7" fill="#ffffff" />
    <rect y="6.7" width="30" height="6.6" fill="#0039A6" />
    <rect y="13.3" width="30" height="6.7" fill="#D52B1E" />
  </svg>
)
const UsFlag = () => (
  <svg className="w-5 h-3.5 rounded-sm" viewBox="0 0 30 20">
    <rect width="30" height="20" fill="#B22234" />
    <g fill="#ffffff">
      <rect y="2.3" width="30" height="1.5" /><rect y="5.4" width="30" height="1.5" />
      <rect y="8.5" width="30" height="1.5" /><rect y="11.6" width="30" height="1.5" />
      <rect y="14.7" width="30" height="1.5" /><rect y="17.8" width="30" height="1.5" />
    </g>
    <rect width="12" height="10.8" fill="#3C3B6E" />
  </svg>
)
const langFlags: Record<Lang, ComponentType> = { kz: KzFlag, ru: RuFlag, en: UsFlag }

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lang, setLang] = useState<Lang>('kz')
  const [langOpen, setLangOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const CurrentFlag = langFlags[lang]

  return (
    <header className="bg-white sticky top-0 z-50">

      {/* ── Row 1: utility bar ── */}
      <div className="container-main flex items-center justify-between h-16 lg:h-[100px]">

        {/* Logo erensau / hospital — «hospital» прижат вправо (начинается под буквой «s») */}
        <Link to="/" className="flex flex-col items-stretch leading-none flex-shrink-0">
          <span className="text-gray-900 font-bold text-2xl lg:text-[28px] tracking-tight lowercase">erensau</span>
          <span className="text-[#00b5e2] text-[11px] lg:text-xs font-medium tracking-wide lowercase mt-0.5 text-right">hospital</span>
        </Link>

        {/* Desktop utility row — блоки растянуты до правого края с равными промежутками */}
        <div className="hidden lg:flex flex-1 items-center justify-between pl-[50px] xl:pl-[87px]">

          {/* Записаться — текст с подчёркиванием */}
          <Link
            to="/contacts"
            className="text-sm font-medium text-[#00b5e2] underline underline-offset-4 hover:text-[#0099c4] transition-colors whitespace-nowrap"
          >
            Записаться на приём
          </Link>

          {/* Открыть чат: WhatsApp | Telegram — дропдаун с выбором мессенджера */}
          <div className="relative">
            <button
              onClick={() => setChatOpen(o => !o)}
              className="flex items-center gap-2.5 text-sm font-medium text-gray-900 hover:text-[#00b5e2] transition-colors"
            >
              <svg className="w-5 h-5 text-[#00b5e2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>
              <span className="text-gray-300 font-light">|</span>
              <svg className="w-5 h-5 text-[#00b5e2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.7 4.3c-.3-.3-.7-.3-1.1-.2L2.9 11.4c-.5.2-.7.6-.7 1 .1.4.3.8.8.9l4.5 1.4 1.7 5.4c.1.4.5.7.9.7.3 0 .5-.1.7-.3l2.6-2.5 4.5 3.3c.5.4 1.2.1 1.4-.5L22 5.4c.1-.4 0-.8-.3-1.1z" />
              </svg>
              <span className="underline underline-offset-4">Открыть чат</span>
            </button>
            {chatOpen && (
              <div className="absolute left-0 top-full mt-4 bg-white rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.14)] px-7 py-5 space-y-5 min-w-[195px] z-50">
                <a
                  href="https://wa.me/77273394040"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setChatOpen(false)}
                  className="block text-sm font-medium text-gray-900 underline underline-offset-4 whitespace-nowrap hover:text-[#00b5e2] transition-colors"
                >
                  Написать в Whatsapp
                </a>
                <a
                  href="https://t.me/erensau"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setChatOpen(false)}
                  className="block text-sm font-medium text-gray-900 underline underline-offset-4 whitespace-nowrap hover:text-[#00b5e2] transition-colors"
                >
                  Написать в Telegram
                </a>
              </div>
            )}
          </div>

          {/* Phone */}
          <a
            href="tel:+77273394040"
            className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-[#00b5e2] transition-colors whitespace-nowrap"
          >
            <svg className="w-5 h-5 text-[#00b5e2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
            </svg>
            <span className="underline underline-offset-4">+7 (727) 339 40 40</span>
          </a>

          {/* Социальные сети — 5 голубых кругов */}
          <div className="flex items-center gap-1.5">
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
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
              <CurrentFlag />
              <span>{langLabels[lang]}</span>
              <svg className={`w-3.5 h-3.5 transition-transform ${langOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute left-0 top-full mt-3 bg-white rounded-lg shadow-[0_12px_32px_rgba(0,0,0,0.14)] overflow-hidden min-w-[96px] z-50">
                {(['kz', 'ru', 'en'] as const).filter((l) => l !== lang).map((l) => {
                  const Flag = langFlags[l]
                  return (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangOpen(false) }}
                      className="flex items-center gap-2.5 w-full text-left px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 hover:text-[#00b5e2] transition-colors"
                    >
                      <Flag />
                      {langLabels[l]}
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          {/* Войти */}
          <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-[#00b5e2] transition-colors">
            <svg className="w-6 h-6 text-[#00b5e2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
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
      <div className="hidden lg:block container-main relative z-10 -mb-[14px] pb-0">
        <nav className="bg-white rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.08)] h-[62px] px-16 xl:px-[110px] flex items-center justify-between">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="relative text-[15px] font-semibold text-gray-900 hover:text-[#00b5e2] transition-colors whitespace-nowrap pb-1"
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
                    <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-[#00b5e2] text-white flex items-center justify-center">
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
