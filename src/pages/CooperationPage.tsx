import { Link } from 'react-router-dom'
import imgClinicBuilding from '@/assets/images/img-clinic-building.jpg'
import imgOperatingRoom from '@/assets/images/img-operating-room.jpg'
import imgDoctorSenior from '@/assets/images/img-doctor-senior.jpg'
import imgDoctorPortrait from '@/assets/images/img-doctor-portrait.jpg'
import imgDoctorSenior2 from '@/assets/images/img-doctor-senior2.jpg'
import CTASlider from '@/components/ui/CTASlider'

const directions = [
  { img: imgOperatingRoom,  title: 'Образование и наука',          desc: 'Совместные исследования, клинические испытания и образовательные программы' },
  { img: imgDoctorSenior2,  title: 'Страховые партнёрства',         desc: 'Работаем с ведущими страховыми компаниями Казахстана для удобства пациента' },
  { img: imgClinicBuilding, title: 'Корпоративное медобслуживание', desc: 'Комплексные чек-апы и плановые медосмотры для сотрудников компаний' },
  { img: imgDoctorSenior,   title: 'Медицинские клиники',           desc: 'Партнёрство с местными и зарубежными клиниками для обмена опытом' },
  { img: imgDoctorPortrait, title: 'Партнёры и инновации',          desc: 'Сотрудничество с фармкомпаниями и IT-партнёрами для передовых решений' },
]

export default function CooperationPage() {
  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Hero — фото здания + белая карточка ── */}
      <section className="relative overflow-hidden min-h-[520px]">
        <img src={imgClinicBuilding} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/70 via-[#0a1628]/20 to-transparent" />
        <div className="relative z-10 container-main flex flex-col justify-center min-h-[520px] py-16">
          <h1 className="text-4xl lg:text-[56px] font-bold text-white leading-tight mb-8 max-w-xl">
            Ваш надёжный<br />медицинский партнёр
          </h1>
          <div className="bg-white rounded-3xl p-7 lg:p-8 max-w-md shadow-2xl">
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              <span className="text-[#00b5e2] font-semibold">Мы открыты</span> для партнёрства,
              которые повышают качество медицинской помощи. Корпоративное обслуживание,
              страховые программы, научные исследования — мы выстраиваем долгосрочные
              партнёрства на основе доверия и профессионализма.
            </p>
            <Link to="/contacts" className="btn-primary text-sm px-8 py-3.5">
              Обсудить сотрудничество
            </Link>
          </div>
        </div>
      </section>

      {/* ── Основные направления B2B ── */}
      <section className="container-main py-14 lg:py-20">
        <h2 className="text-3xl lg:text-[40px] font-bold text-gray-900 text-center mb-10">Основные направления B2B</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {directions.map((d) => (
            <div key={d.title} className="bg-white rounded-3xl overflow-hidden group hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={d.img}
                  alt={d.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
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
      <section className="bg-white py-14 lg:py-20">
        <div className="container-main">
          <h2 className="text-2xl lg:text-[36px] font-bold text-gray-900 text-center mb-12 max-w-2xl mx-auto leading-tight">
            Вместе с партнёрами мы расширяем возможности диагностики и лечения
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className="bg-[#f4f4f4] rounded-2xl h-20 flex flex-col items-center justify-center">
                <span className="text-gray-400 font-bold text-base lowercase leading-none">erensau</span>
                <span className="text-gray-300 text-[8px] tracking-[0.2em] uppercase mt-0.5">hospital</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contacts" className="inline-block bg-white border border-gray-300 text-gray-900 text-sm font-medium rounded-full px-8 py-3.5 hover:border-[#00b5e2] hover:text-[#00b5e2] transition-colors">
              Стать партнёром
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA-слайдер ── */}
      <CTASlider />

    </div>
  )
}
