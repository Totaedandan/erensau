import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import { ModalProvider } from '@/contexts/ModalContext'
import ModalRoot from '@/components/modals/ModalRoot'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import DoctorsPage from '@/pages/DoctorsPage'
import DoctorCardPage from '@/pages/DoctorCardPage'
import ServicesPage from '@/pages/ServicesPage'
import CheckupPage from '@/pages/CheckupPage'
import PatientsPage from '@/pages/PatientsPage'
import CooperationPage from '@/pages/CooperationPage'
import ContactsPage from '@/pages/ContactsPage'
import NewsPage from '@/pages/NewsPage'
import NewsArticlePage from '@/pages/NewsArticlePage'
import VacanciesPage from '@/pages/VacanciesPage'
import LicensesPage from '@/pages/LicensesPage'
import UnderConstructionPage from '@/pages/UnderConstructionPage'

export default function App() {
  return (
    <ModalProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/doctors/kuatbekov" element={<DoctorCardPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/checkup" element={<CheckupPage />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/cooperation" element={<CooperationPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/kak-rabotaet-erensau" element={<NewsArticlePage />} />
          <Route path="/vacancies" element={<VacanciesPage />} />
          <Route path="/licenses" element={<LicensesPage />} />
          <Route path="*" element={<UnderConstructionPage />} />
        </Route>
      </Routes>
      <ModalRoot />
    </ModalProvider>
  )
}
