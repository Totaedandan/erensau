import { useModal } from '@/contexts/ModalContext'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'
import SecondOpinionModal from './SecondOpinionModal'
import ReviewModal from './ReviewModal'
import VacancyApplyModal from './VacancyApplyModal'

export default function ModalRoot() {
  const { modal } = useModal()
  if (!modal) return null

  switch (modal.kind) {
    case 'login': return <LoginModal />
    case 'register': return <RegisterModal />
    case 'second-opinion': return <SecondOpinionModal />
    case 'review': return <ReviewModal />
    case 'vacancy-apply': return <VacancyApplyModal />
    default: return null
  }
}
