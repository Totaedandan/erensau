import { Link } from 'react-router-dom'
import imgClinicBuilding from '@/assets/images/img-clinic-building.jpg'
import imgOperatingRoom from '@/assets/images/img-operating-room.jpg'
import imgDoctorSenior from '@/assets/images/img-doctor-senior.jpg'
import imgDoctorPortrait from '@/assets/images/img-doctor-portrait.jpg'
import imgDoctorSenior2 from '@/assets/images/img-doctor-senior2.jpg'
import CTASlider from '@/components/ui/CTASlider'

const directions = [
  { img: imgOperatingRoom,  title: 'Образование и наука',          desc: 'Совместные исследования, клинические испытания и образовательные программы' },
  { img: imgDoctorSenior2,  title: 'Страховые партнерства',         desc: 'Работаем с ведущими страховыми компаниями Казахстана для удобства пациента' },
  { img: imgClinicBuilding, title: 'Корпоративное медобслуживание', desc: 'Комплексные чек-апы и плановые медосмотры для сотрудников компаний' },
  { img: imgDoctorSenior,   title: 'Медицинские клиники',           desc: 'Партнерства с местными и зарубежными клиниками для обмена опытом' },
  { img: imgDoctorPortrait, title: 'Партнеры и инновации',          desc: 'Сотрудничество с фармкомпаниями и IT-партнерами для передовых решений' },
]

export default function CooperationPage() {
  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Hero — карточка: фасад клиники, без оверлея ── */}
      <section className="bg-[#f4f4f4] px-3 pt-2">
        <div className="relative overflow-hidden rounded-[28px] min-h-[780px]">
          <img src={imgClinicBuilding} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: '60% 20%' }} />
          <div className="relative z-10 px-8 lg:px-24 pt-16 lg:pt-24">
            <h1 className="text-4xl lg:text-[44px] font-bold text-white leading-tight mb-16 max-w-md drop-shadow-sm">
              Ваш надежный<br />медицинский<br />партнер
            </h1>
            <div className="bg-white rounded-3xl p-7 max-w-[340px] shadow-2xl">
              <p className="text-gray-600 text-[13px] leading-relaxed">
                <span className="text-[#00b5e2] font-semibold">Мы открыты</span> для партнерств, которые
                повышают качество медицинской помощи.
                Корпоративное обслуживание, страховые
                программы, научные исследования - мы
                выстраиваем долгосрочные партнерства
                на основе доверия и профессионализма
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Основные направления B2B ── */}
      <section className="container-main py-14 lg:py-20">
        <h2 className="text-3xl lg:text-[40px] font-bold text-gray-900 text-center mb-10">Основные направления B2B</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {directions.map((d) => (
            <div key={d.title} className="bg-white rounded-3xl p-4 group hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden rounded-2xl">
                <img
                  src={d.img}
                  alt={d.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 pt-5">
                <h3 className="font-bold text-gray-900 mb-2 leading-snug">{d.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{d.desc}</p>
                <Link to="/contacts" className="inline-block text-sm text-gray-900 border border-gray-300 rounded-full px-6 py-2 hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors">
                  Подробнее
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Логотипы партнёров ── */}
      <section className="bg-[#f4f4f4] py-14 lg:py-20">
        <div className="container-main">
          <h2 className="text-2xl lg:text-[36px] font-bold text-gray-900 text-center mb-12 max-w-2xl mx-auto leading-tight">
            Вместе с партнёрами мы расширяем возможности диагностики и лечения
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl h-20 flex flex-col items-center justify-center">
                <span className="text-gray-400 font-bold text-base lowercase leading-none">erensau</span>
                <span className="text-gray-300 text-[8px] tracking-[0.2em] uppercase mt-0.5">hospital</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contacts" className="inline-block bg-white border border-gray-300 text-gray-900 text-sm font-medium rounded-full px-8 py-3.5 hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors">
              Стать партнером
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA-слайдер ── */}
      <CTASlider />

    </div>
  )
}
