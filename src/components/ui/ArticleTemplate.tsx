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
              <h1 className="text-[32px] lg:text-[42px] font-semibold text-black leading-[1.15] tracking-[-0.02em] mb-7 lg:mb-10">{title}</h1>
              <div className="text-black text-[15px] lg:text-base leading-[1.35] text-justify space-y-4 lg:max-w-[540px]">
                {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Смотрите также ── */}
      <section className="pb-16 lg:pb-24">
        <div className="container-main">
          <h2 className="text-[28px] lg:text-[40px] font-semibold text-gray-900 text-center mb-9 lg:mb-14 leading-tight">Смотрите также</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 lg:gap-x-3.5">
            {seeAlso.map((item, i) => (
              <div key={i} className="cursor-pointer group">
                <div className="h-[160px] lg:h-[206px] rounded-2xl lg:rounded-[20px] overflow-hidden shadow-[-2px_4px_12.7px_rgba(0,0,0,0.08)]">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-[16px] lg:text-[18px] font-semibold text-black leading-[1.25] tracking-[-0.02em] mt-4 lg:mt-5 mb-2 min-h-[2.5em] group-hover:text-[#00b5e2] transition-colors line-clamp-2">{item.title}</h3>
                <p className="text-black/50 text-[13px] lg:text-[14px]">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASlider />
    </div>
  )
}
