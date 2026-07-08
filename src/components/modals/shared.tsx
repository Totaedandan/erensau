import { useState } from 'react'

export const modalInputCls =
  'w-full bg-[#f2f2f2] rounded-[10px] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#00b5e2]/40 placeholder:text-black/30 transition'

export const modalSelectCls =
  `${modalInputCls} appearance-none text-black/30 pr-10 cursor-pointer`

export function SelectChevron() {
  return (
    <svg className="w-4 h-4 text-black/40 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export function KzFlag({ className = 'w-5 h-3.5' }: { className?: string }) {
  return (
    <svg className={`${className} rounded-[2px] flex-shrink-0`} viewBox="0 0 30 20" fill="none">
      <rect width="30" height="20" fill="#00AFCA" />
      <circle cx="11" cy="10" r="3.2" fill="#FFC107" />
      <path d="M8 10h6M9.5 7.5l3 5M9.5 12.5l3-5" stroke="#FFC107" strokeWidth="0.6" />
    </svg>
  )
}

export function PhoneField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex items-center gap-2.5 bg-[#f2f2f2] rounded-[10px] px-4 py-3">
      <KzFlag />
      <span className="text-sm text-black">+7</span>
      <input
        type="tel"
        placeholder="000 000 00 00"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-transparent border-0 outline-none text-sm placeholder:text-black/30"
      />
    </div>
  )
}

export function StarRating({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hover, setHover] = useState(0)
  return (
    <div className="flex items-center gap-2">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          onMouseEnter={() => setHover(n)}
          onMouseLeave={() => setHover(0)}
          aria-label={`${n} из 5`}
          className="transition-transform hover:scale-110"
        >
          <svg
            className={`w-8 h-8 ${(hover || value) >= n ? 'text-[#00b5e2]' : 'text-[#e4e4e4]'}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8L6 21l1.6-7-5.4-4.7 7.1-.6L12 2z" />
          </svg>
        </button>
      ))}
    </div>
  )
}

export function FileDropzone({ label, hint, file, onFile }: { label: string; hint: string; file: File | null; onFile: (f: File | null) => void }) {
  return (
    <label className="block border border-dashed border-black/20 rounded-[10px] px-4 py-6 text-center cursor-pointer hover:border-[#00b5e2]/50 transition-colors">
      <input
        type="file"
        accept=".jpg,.jpeg,.png,.pdf"
        className="hidden"
        onChange={(e) => onFile(e.target.files?.[0] ?? null)}
      />
      <svg className="w-5 h-5 mx-auto mb-2 text-black/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V4m0 0L8 8m4-4l4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
      </svg>
      <div className="text-sm font-semibold text-black truncate">{file ? file.name : label}</div>
      <div className="text-xs text-black/40 mt-1">{hint}</div>
    </label>
  )
}

export function AgreementCheckbox({ children }: { children: React.ReactNode }) {
  return (
    <label className="flex items-start gap-2.5 pt-1 cursor-pointer">
      <input type="checkbox" required className="w-4 h-4 mt-0.5 rounded border-black/20 accent-[#00b5e2] flex-shrink-0" />
      <span className="text-xs text-black/40">{children}</span>
    </label>
  )
}

export function ModalSuccess({ text }: { text: string }) {
  return (
    <div className="py-14 px-8 text-center">
      <div className="w-14 h-14 bg-[#00b5e2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-7 h-7 text-[#00b5e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="font-semibold text-gray-900 text-lg mb-1">{text}</h3>
      <p className="text-gray-500 text-sm">Мы свяжемся с вами в течение рабочего дня.</p>
    </div>
  )
}
