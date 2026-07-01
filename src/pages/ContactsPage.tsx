import mapBg from '@/assets/icons/map-bg.svg'
import CTASlider from '@/components/ui/CTASlider'
import ContactForm from '@/components/ui/ContactForm'
import ContactsMapCard from '@/components/ui/ContactsMapCard'

const complexPoints = [
  { n: '1', label: 'Главное здание' },
  { n: '2', label: 'Парковка' },
  { n: '3', label: 'ул. Каппарова' },
]

export default function ContactsPage() {
  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Карта + карточка контактов ── */}
      <ContactsMapCard showHeading={false} />

      {/* ── Форма обратной связи ── */}
      <ContactForm />

      {/* ── Навигация по комплексу ── */}
      <section className="bg-white py-14 lg:py-20">
        <div className="container-main">
          <div className="bg-[#f4f4f4] rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

            {/* Левая часть: список */}
            <div className="p-8 lg:p-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                Навигация<br />по комплексу
              </h2>
              <ul className="space-y-3 mb-8">
                {complexPoints.map((p) => (
                  <li key={p.n} className="flex gap-3 items-center text-sm text-gray-700">
                    <span className="text-[#00b5e2] font-bold w-4">{p.n}</span>
                    <span>- {p.label}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://2gis.kz/almaty"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white border border-gray-300 rounded-full px-7 py-3 text-sm text-gray-900 hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors"
              >
                Проложить маршрут
              </a>
            </div>

            {/* Правая часть: карта-иллюстрация с маршрутом */}
            <div className="relative min-h-[280px] lg:min-h-0 overflow-hidden">
              <img src={mapBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                <path d="M40 280 L40 160 L220 160 L300 90" fill="none" stroke="#00b5e2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="absolute left-[8%] bottom-[6%] w-7 h-7 rounded-full bg-[#00b5e2] text-white text-xs font-bold flex items-center justify-center shadow">3</div>
              <div className="absolute left-[52%] top-[50%] w-7 h-7 rounded-full bg-[#00b5e2] text-white text-xs font-bold flex items-center justify-center shadow">2</div>
              <div className="absolute left-[72%] top-[26%] w-7 h-7 rounded-full bg-[#00b5e2] text-white text-xs font-bold flex items-center justify-center shadow">1</div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA-слайдер ── */}
      <CTASlider />

    </div>
  )
}
