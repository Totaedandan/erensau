import { createContext, useContext, useState, type ReactNode } from 'react'

export type ModalKind = 'login' | 'register' | 'second-opinion' | 'review' | 'vacancy-apply'

type ModalPayload = { position?: string }

type ModalState = { kind: ModalKind; payload?: ModalPayload } | null

type ModalContextValue = {
  modal: ModalState
  openModal: (kind: ModalKind, payload?: ModalPayload) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextValue | null>(null)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalState>(null)
  return (
    <ModalContext.Provider
      value={{
        modal,
        openModal: (kind, payload) => setModal({ kind, payload }),
        closeModal: () => setModal(null),
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useModal must be used within ModalProvider')
  return ctx
}
