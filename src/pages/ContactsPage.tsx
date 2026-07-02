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

      {/* ── Навигация по комплексу — карта на всю карточку, текст поверх ── */}
      <section className="bg-white py-14 lg:py-20">
        <div className="container-main">
          <div className="relative rounded-3xl overflow-hidden min-h-[400px] bg-[#fafafa] shadow-sm">

            {/* Карта-иллюстрация на всю карточку */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1180 400" preserveAspectRatio="xMidYMid slice">
              <rect width="1180" height="400" fill="#fafafa" />
              {/* кварталы */}
              <g fill="#f0f0f0">
                <rect x="420" y="230" width="240" height="120" rx="8" transform="rotate(-12 540 290)" />
                <rect x="700" y="250" width="200" height="110" rx="8" transform="rotate(-12 800 305)" />
                <rect x="950" y="60" width="180" height="120" rx="8" transform="rotate(-12 1040 120)" />
                <rect x="270" y="40" width="150" height="90" rx="8" transform="rotate(-12 345 85)" />
              </g>
              {/* главное здание (1) */}
              <rect x="560" y="60" width="150" height="110" rx="20" fill="#00b5e2" transform="rotate(-14 635 115)" />
              {/* парковка (2) */}
              <rect x="480" y="70" width="70" height="55" rx="10" fill="#00b5e2" transform="rotate(-14 515 97)" />
              {/* маршрут */}
              <path d="M300 380 C 340 300, 400 220, 520 130" fill="none" stroke="#00b5e2" strokeWidth="7" strokeLinecap="round" />
              <path d="M300 380 C 420 370, 700 330, 900 350" fill="none" stroke="#00b5e2" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
              {/* номера */}
              <g fontFamily="Inter, Arial" fontSize="15" fontWeight="700">
                <circle cx="648" cy="100" r="14" fill="#ffffff" /><text x="648" y="105" textAnchor="middle" fill="#00b5e2">1</text>
                <circle cx="512" cy="92" r="14" fill="#ffffff" /><text x="512" y="97" textAnchor="middle" fill="#00b5e2">2</text>
                <circle cx="560" cy="330" r="14" fill="#00b5e2" /><text x="560" y="335" textAnchor="middle" fill="#ffffff">3</text>
              </g>
            </svg>

            {/* Текст поверх слева */}
            <div className="relative z-10 p-8 lg:p-12 max-w-xs">
              <h2 className="text-2xl lg:text-[32px] font-bold text-gray-900 mb-7 leading-tight">
                Навигация<br />по комплексу
              </h2>
              <ul className="space-y-2.5 mb-9">
                {complexPoints.map((p) => (
                  <li key={p.n} className="text-sm text-gray-800">
                    {p.n} - {p.label}
                  </li>
                ))}
              </ul>
              <a
                href="https://2gis.kz/almaty"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white border border-gray-300 rounded-full px-8 py-3 text-sm text-gray-900 hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors"
              >
                Проложить маршрут
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA-слайдер ── */}
      <CTASlider />

    </div>
  )
}
