import { useState } from 'react'
import heroSurgeon from '@/assets/images/hero-surgeon.png'
import LogoMark from '@/assets/icons/logo-group.svg?react'
import { useModal } from '@/contexts/ModalContext'
import ModalShell from './ModalShell'
import { modalInputCls } from './shared'

// Соцкнопки — Google/Facebook/Apple (Figma 2745:1144)
const GoogleIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.85A11 11 0 0012 23z" /><path fill="#FBBC05" d="M5.84 14.09A6.6 6.6 0 015.5 12c0-.73.13-1.43.34-2.09V7.06H2.18A11 11 0 001 12c0 1.78.43 3.46 1.18 4.94l3.66-2.85z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1a11 11 0 00-9.82 6.06l3.66 2.85C6.71 7.31 9.14 5.38 12 5.38z" /></svg>
)
const FacebookIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#1877F2"><path d="M13.4 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.2-1.5 1.6-1.5h1.7V3.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.6V13h2.7v8h3.1z" /></svg>
)
const AppleIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="black"><path d="M16.4 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.8-3.5.8s-1.8-.8-3-.8c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2.1-1.1 2.8-2.3.9-1.3 1.3-2.5 1.3-2.6-.1 0-2.5-1-2.5-3.7zM14.2 5.6c.6-.7 1-1.7.9-2.6-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.5 1 .1 1.9-.5 2.5-1.2z" /></svg>
)

export default function LoginModal() {
  const { openModal } = useModal()
  const [sent, setSent] = useState(false)

  return (
    <ModalShell maxWidthClass="max-w-[900px]">
      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr]">
        {/* Левая колонка — фото + слоган (Figma: цветной блок с врачом) */}
        <div className="hidden lg:block relative rounded-l-[30px] overflow-hidden bg-[#00b5e2]">
          <img src={heroSurgeon} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: '65% 20%' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30" />
          <LogoMark className="absolute left-7 top-7 h-16 w-auto text-white" />
          <p className="absolute left-7 bottom-8 right-6 text-white text-[28px] font-semibold leading-[1.2] tracking-tight">
            Точные решения<br />для сложных случаев
          </p>
        </div>

        {/* Правая колонка — форма */}
        <div className="px-7 py-9 lg:px-12 lg:py-12">
          {sent ? (
            <div className="py-10 text-center">
              <div className="w-14 h-14 bg-[#00b5e2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#00b5e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Вы вошли в профиль</h3>
            </div>
          ) : (
            <>
              <h2 className="text-[28px] lg:text-[32px] font-semibold text-black mb-2">Войти в профиль</h2>
              <p className="text-black/50 text-sm leading-relaxed mb-7 max-w-[320px]">
                Клиника работает на основании государственной лицензии МЗ РК, подтверждающей соответствие
              </p>

              <form className="space-y-3.5" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                <div>
                  <label className="block text-sm font-semibold text-black mb-1.5">Ваша почта</label>
                  <input type="email" placeholder="erensauhospital@gmail.com" className={modalInputCls} required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-1.5">Пароль</label>
                  <input type="password" placeholder="••••••••••••••••" className={modalInputCls} required />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00b7e5] text-white text-base font-semibold rounded-full py-4 mt-5 hover:bg-[#0099c4] transition-colors"
                >
                  Войти
                </button>
              </form>

              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-px bg-black/10" />
                <span className="text-black/40 text-sm">продолжить через</span>
                <div className="flex-1 h-px bg-black/10" />
              </div>
              <div className="flex items-center gap-3">
                {[GoogleIcon, FacebookIcon, AppleIcon].map((Icon, i) => (
                  <button key={i} type="button" className="flex-1 h-12 border border-black/10 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors">
                    <Icon />
                  </button>
                ))}
              </div>

              <p className="text-center text-sm mt-6">
                <span className="text-black/50">Нет аккаунта? </span>
                <button type="button" onClick={() => openModal('register')} className="text-[#00b7e5] font-medium hover:underline">
                  Регистрация
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </ModalShell>
  )
}
