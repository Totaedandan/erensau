import type { ReactNode } from 'react'
import CTASlider from './CTASlider'

export type SeeAlsoItem = {
  title: string
  date: string
  img: string
}

type Props = {
  title: ReactNode
  paragraphs: string[]
  heroImage: string
  seeAlso: SeeAlsoItem[]
}

// Шаблон детальной страницы новости/публикации (Figma 2945:296) — переиспользуется для всех статей.
export default function ArticleTemplate({ title, paragraphs, heroImage, seeAlso }: Props) {
  return (
    <div className="bg-[#f4f4f4]">

      {/* ── Hero: фото + заголовок + текст статьи ── */}
      <section className="pt-6 lg:pt-10 pb-14 lg:pb-20">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[52px] items-start">
            <div className="w-full lg:w-[608px] lg:flex-shrink-0 rounded-3xl lg:rounded-[15px] overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[707px]">
              <img src={heroImage} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 lg:pt-[45px]">
              <h1 className="text-2xl lg:text-[42px] font-semibold text-black leading-[1.15] tracking-[-0.02em] mb-7 lg:mb-10">{title}</h1>
              <div className="text-black text-sm lg:text-base leading-[1.35] text-justify space-y-4 lg:max-w-[540px]">
                {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Смотрите также — карточки в столбик на мобилке, сетка 4 кол. на десктопе ── */}
      <section className="pb-16 lg:pb-24">
        <div className="container-main">
          <h2 className="text-2xl lg:text-[40px] font-semibold text-gray-900 text-center mb-9 lg:mb-14 leading-tight">Смотрите также</h2>

          <div className="lg:hidden flex flex-col gap-8 max-w-[298px] mx-auto">
            {seeAlso.map((item, i) => (
              <div key={i} className="cursor-pointer group">
                <div className="h-[203px] rounded-[14px] overflow-hidden shadow-[-2px_4px_12.7px_rgba(0,0,0,0.08)]">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-sm font-semibold text-black leading-tight tracking-[-0.02em] mt-4 mb-2 text-center group-hover:text-[#00b5e2] transition-colors line-clamp-2">{item.title}</h3>
                <p className="text-black/50 text-[10px] text-center">{item.date}</p>
              </div>
            ))}
          </div>

          <div className="hidden lg:grid grid-cols-4 gap-x-3.5 gap-y-8">
            {seeAlso.map((item, i) => (
              <div key={i} className="cursor-pointer group">
                <div className="h-[206px] rounded-[20px] overflow-hidden shadow-[-2px_4px_12.7px_rgba(0,0,0,0.08)]">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-[18px] font-semibold text-black leading-[1.25] tracking-[-0.02em] mt-5 mb-2 min-h-[2.5em] group-hover:text-[#00b5e2] transition-colors line-clamp-2">{item.title}</h3>
                <p className="text-black/50 text-[14px]">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASlider />
    </div>
  )
}
