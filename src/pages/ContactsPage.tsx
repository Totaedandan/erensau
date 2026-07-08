import CTASlider from '@/components/ui/CTASlider'
import ContactForm from '@/components/ui/ContactForm'
import ContactsMapCard from '@/components/ui/ContactsMapCard'
import navMap from '@/assets/images/nav-complex-map.png'

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
      <section className="bg-[#f4f4f4] py-14 lg:py-24">
        <div className="container-main">
          <div className="relative rounded-3xl overflow-hidden h-[560px] lg:h-auto lg:aspect-[1302/611] bg-white shadow-sm">

            {/* Карта-схема комплекса (Group 1721909150) */}
            <img src={navMap} alt="Схема комплекса Erensau" className="absolute inset-0 w-full h-full object-cover lg:object-contain object-center" />

            {/* Белый фейд для читаемости текста — слева (десктоп) / сверху (мобилка) */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-[42%] bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none" />
            <div className="lg:hidden absolute inset-x-0 top-0 h-[46%] bg-gradient-to-b from-white via-white/85 to-transparent pointer-events-none" />

            {/* Текст: на мобилке по центру сверху, на десктопе слева */}
            <div className="relative z-10 p-8 lg:pt-[88px] lg:pl-[92px] lg:pr-6 lg:pb-10 max-w-none lg:max-w-[440px] text-center lg:text-left">
              <h2 className="text-[28px] lg:text-[40px] font-semibold text-gray-900 mb-6 lg:mb-9 leading-[1.12]">
                Навигация<br />по комплексу
              </h2>
              <ul className="space-y-2.5 lg:space-y-3 mb-9 lg:mb-11">
                {complexPoints.map((p) => (
                  <li key={p.n} className="text-[15px] text-gray-800">
                    {p.n} - {p.label}
                  </li>
                ))}
              </ul>
              <a
                href="https://2gis.kz/almaty"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-block bg-white border border-gray-800 rounded-full px-8 py-3 text-sm font-semibold text-gray-900 hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors"
              >
                Проложить маршрут
              </a>
            </div>

            {/* Кнопка на мобилке — по центру внизу поверх карты */}
            <a
              href="https://2gis.kz/almaty"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-10 bg-white border border-black rounded-full px-10 py-3.5 text-xs font-semibold text-black whitespace-nowrap"
            >
              Проложить маршрут
            </a>

          </div>
        </div>
      </section>

      {/* ── CTA-слайдер ── */}
      <CTASlider />

    </div>
  )
}
