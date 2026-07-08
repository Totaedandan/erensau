import { useEffect, type ReactNode } from 'react'
import { useModal } from '@/contexts/ModalContext'

// Обёртка для всех попапов сайта (Figma: логин/регистрация/отзыв/вакансия/второе мнение).
// В Figma фон приглушается полупрозрачным #f4f4f4 поверх конкретного мокапа страницы —
// для реального сайта (попап открывается над любой, в т.ч. тёмной, страницей) используем
// нейтральный чёрный оверлей, чтобы карточка читалась одинаково везде.
export default function ModalShell({ children, maxWidthClass = 'max-w-[485px]' }: { children: ReactNode; maxWidthClass?: string }) {
  const { closeModal } = useModal()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [closeModal])

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModal} />
      <div className="relative min-h-full flex items-center justify-center p-4 py-10">
        <div className={`relative bg-white rounded-[28px] lg:rounded-[30px] shadow-[0_24px_80px_rgba(0,0,0,0.25)] w-full ${maxWidthClass}`}>
          <button
            onClick={closeModal}
            aria-label="Закрыть"
            className="absolute right-6 top-6 lg:right-7 lg:top-7 text-black/40 hover:text-black transition-colors z-10"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {children}
        </div>
      </div>
    </div>
  )
}
