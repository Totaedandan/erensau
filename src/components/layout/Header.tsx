import { useState } from 'react'
import type { ComponentType } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useModal } from '@/contexts/ModalContext'

const navItems = [
  { label: 'О клинике', path: '/about' },
  { label: 'Команда врачей', path: '/doctors' },
  { label: 'Медицинские услуги', path: '/services' },
  { label: 'Для пациентов', path: '/patients' },
  { label: 'Сотрудничество', path: '/cooperation' },
  { label: 'Контакты', path: '/contacts' },
]

type Lang = 'ru' | 'kz' | 'en'
const langLabels: Record<Lang, string> = { ru: 'RU', kz: 'KZ', en: 'EN' }

// ── Иконки соцсетей (точные глифы из Figma) ──
const IgIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 26.8214 26.8214" fill="currentColor">
    <path d="M7.93029 13.4026C7.93029 11.996 7.93107 10.9812 8.03632 10.2079C8.14014 9.44518 8.33868 8.97963 8.68701 8.63561C9.03358 8.29337 9.49994 8.09963 10.2663 7.99792C11.0463 7.89438 12.071 7.89349 13.4962 7.89349C14.9217 7.89349 15.9464 7.89439 16.7263 7.99792C17.4926 8.09963 17.9588 8.29335 18.3054 8.63561C18.6537 8.97961 18.8523 9.44526 18.9561 10.2081C19.0614 10.9814 19.0621 11.9963 19.0621 13.4026C19.0621 14.8092 19.0614 15.8241 18.9561 16.5974C18.8523 17.3602 18.6538 17.8258 18.3054 18.1699C17.9588 18.5121 17.4925 18.7057 16.7262 18.8074C15.9461 18.9109 14.9214 18.912 13.4962 18.912C12.0707 18.912 11.046 18.9109 10.2661 18.8074C9.49985 18.7057 9.0336 18.5121 8.68701 18.1699C8.33865 17.8259 8.14016 17.3601 8.03632 16.5972C7.93106 15.8239 7.93029 14.809 7.93029 13.4026ZM7.07373 13.4026C7.07373 14.7865 7.07294 15.8646 7.1871 16.7033C7.30269 17.5525 7.54292 18.2181 8.07223 18.7408C8.60332 19.2652 9.2825 19.5047 10.1486 19.6197C11.0009 19.7328 12.0957 19.732 13.4962 19.732C14.8965 19.732 15.9912 19.7328 16.8437 19.6197C17.7098 19.5047 18.3891 19.2652 18.9202 18.7408C19.4495 18.2181 19.6897 17.5526 19.8053 16.7035C19.9195 15.8648 19.9187 14.7868 19.9187 13.4026C19.9187 12.0188 19.9195 10.9407 19.8053 10.102C19.6897 9.25283 19.4495 8.58722 18.9202 8.06453C18.3891 7.54009 17.7099 7.30055 16.8439 7.18559C15.9915 7.07245 14.8968 7.07324 13.4962 7.07324C12.096 7.07324 11.0012 7.07244 10.1488 7.18559C9.28265 7.30054 8.60333 7.54008 8.07223 8.06453C7.54293 8.58722 7.30269 9.25267 7.1871 10.1018C7.07294 10.9405 7.07373 12.0185 7.07373 13.4026Z" />
    <path d="M11.0856 13.4023C11.0856 12.7634 11.3427 12.1531 11.7964 11.705C12.2497 11.2575 12.8616 11.0085 13.4967 11.0085C14.1319 11.0085 14.7438 11.2575 15.1971 11.705C15.6507 12.1531 15.9077 12.7634 15.9077 13.4023C15.9077 14.0411 15.6508 14.6514 15.1971 15.0995C14.7438 15.5471 14.1319 15.796 13.4967 15.796C12.8616 15.796 12.2497 15.547 11.7964 15.0995C11.3427 14.6514 11.0856 14.0411 11.0856 13.4023ZM10.229 13.4023C10.229 14.2506 10.5702 15.0668 11.1814 15.6704C11.7931 16.2744 12.6258 16.6161 13.4967 16.6161C14.3676 16.6161 15.2002 16.2744 15.8119 15.6704C16.4231 15.0668 16.7643 14.2506 16.7643 13.4023C16.7643 12.5539 16.4231 11.7378 15.8119 11.1341C15.2002 10.5301 14.3676 10.1882 13.4967 10.1882C12.6258 10.1882 11.7931 10.5301 11.1814 11.1341C10.5702 11.7378 10.229 12.5539 10.229 13.4023Z" />
    <path d="M17.2959 9.95768C17.2959 9.85893 17.2141 9.73958 17.0639 9.72507L17.0331 9.72363C16.8632 9.72363 16.7701 9.85236 16.77 9.95768C16.77 10.063 16.8632 10.1917 17.0331 10.1917V10.5437L17.0024 10.543C16.6889 10.5273 16.4395 10.2712 16.4395 9.95768C16.4395 9.63402 16.7053 9.37165 17.0331 9.37165C17.3608 9.37169 17.6264 9.63405 17.6264 9.95768C17.6264 10.2813 17.3608 10.5437 17.0331 10.5437V10.1917C17.2029 10.1917 17.2959 10.063 17.2959 9.95768Z" />
  </svg>
)
const FbIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 26.8214 26.8214" fill="currentColor">
    <path d="M13.2817 6.34375C17.3111 6.34375 20.5775 9.58254 20.5775 13.5778C20.5775 17.1885 17.9095 20.1812 14.4216 20.7239V15.6689H16.1216L16.4451 13.5778H14.4217V12.2208C14.4217 11.6487 14.7043 11.0911 15.6106 11.0911H16.5306V9.31083C16.5306 9.31083 16.4132 9.29095 16.2243 9.26612C16.1928 9.26198 16.1594 9.25772 16.1242 9.25337C15.8247 9.21643 15.3972 9.1745 14.9724 9.16995L14.8974 9.16955C14.8714 9.16955 14.8455 9.16978 14.8197 9.17027C14.794 9.17076 14.7684 9.17149 14.7429 9.17247C14.7302 9.17296 14.7175 9.1735 14.7048 9.17411C14.5149 9.18324 14.3332 9.20604 14.1605 9.24217C14.1144 9.2518 14.069 9.26238 14.0243 9.27391C13.9795 9.28543 13.9354 9.2979 13.892 9.31131C13.8594 9.32137 13.8273 9.33197 13.7954 9.34308C13.7742 9.35048 13.7532 9.35812 13.7324 9.36599C13.7219 9.36993 13.7116 9.37391 13.7012 9.37796C13.6598 9.39417 13.6192 9.4113 13.5792 9.42936C13.5692 9.43387 13.5593 9.43845 13.5494 9.44308C13.5296 9.45234 13.51 9.46184 13.4905 9.47156C13.4614 9.48614 13.4326 9.50122 13.4043 9.51684C13.2909 9.57928 13.1842 9.64995 13.0845 9.72869C13.0762 9.73525 13.0679 9.74188 13.0597 9.74856C13.0433 9.76191 13.0271 9.77548 13.0111 9.78928C13.003 9.79617 12.9951 9.80312 12.9872 9.81013C12.9476 9.84518 12.9093 9.88161 12.8722 9.91943C12.8648 9.927 12.8575 9.93462 12.8502 9.94229C12.8209 9.97299 12.7925 10.0046 12.765 10.037C12.7374 10.0695 12.7107 10.1028 12.6848 10.137C12.6654 10.1627 12.6465 10.1888 12.6281 10.2154C12.6158 10.2332 12.6037 10.2511 12.5918 10.2693C12.58 10.2875 12.5683 10.3059 12.5569 10.3245C12.4884 10.4362 12.4278 10.5557 12.3755 10.6827C12.3668 10.7039 12.3583 10.7253 12.3501 10.7469C12.3212 10.8224 12.2953 10.9006 12.2722 10.9813C12.2623 11.0159 12.253 11.0509 12.2442 11.0864C12.2354 11.1219 12.2272 11.1579 12.2195 11.1944C12.2118 11.2308 12.2047 11.2677 12.1981 11.3051C12.1938 11.33 12.1896 11.3551 12.1857 11.3804C12.1702 11.4816 12.1587 11.5862 12.1514 11.6939C12.1459 11.7747 12.1427 11.8573 12.1419 11.9417C12.1418 11.9558 12.1417 11.9699 12.1417 11.984V13.5778H10.2893V15.6689H12.1417V20.7239C8.65382 20.1812 5.98584 17.1885 5.98584 13.5778C5.98584 9.58254 9.2523 6.34375 13.2817 6.34375Z" />
  </svg>
)
const YtIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 26.7533 26.7533" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M17.2829 7.73646C18.6479 7.73646 19.3304 7.73647 19.8517 8.00679C20.3103 8.24458 20.6831 8.624 20.9168 9.09067C21.1824 9.62122 21.1824 10.3157 21.1824 11.7048V14.929C21.1824 16.3181 21.1824 17.0126 20.9168 17.5432C20.6831 18.0098 20.3103 18.3892 19.8517 18.627C19.3304 18.8974 18.6479 18.8974 17.2829 18.8974H9.48393C8.11897 18.8974 7.43649 18.8974 6.91515 18.627C6.45657 18.3892 6.08373 18.0098 5.85007 17.5432C5.58443 17.0126 5.58443 16.3181 5.58443 14.929V11.7048C5.58443 10.3157 5.58443 9.62122 5.85007 9.09067C6.08373 8.624 6.45657 8.24458 6.91515 8.00679C7.43649 7.73647 8.11897 7.73646 9.48393 7.73646H17.2829ZM11.7079 15.7661L16.2776 13.3462L11.7079 10.8677V15.7661Z" />
  </svg>
)
const LinkedinIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 26.8214 26.8214" fill="currentColor">
    <path d="M13.2999 6.25587C9.28065 6.25587 6.02244 9.51408 6.02244 13.5334C6.02244 17.5526 9.28065 20.8109 13.2999 20.8109C17.3192 20.8109 20.5774 17.5526 20.5774 13.5334C20.5774 9.51408 17.3191 6.25587 13.2999 6.25587ZM9.8477 16.7169V11.7947L11.3731 11.795V16.7166L9.8477 16.7167V16.7169ZM10.6665 11.122C10.27 11.1473 9.91281 10.9033 9.78238 10.5472C9.64191 10.1636 9.76867 9.74524 10.1028 9.5077C10.3717 9.3166 10.7263 9.2909 11.0289 9.44919C11.2941 9.58782 11.485 9.86584 11.5026 10.1842C11.5296 10.6711 11.161 11.0903 10.6665 11.122ZM15.5816 16.7167V14.1536C15.5781 13.6997 15.5128 13.1491 15.0086 13.0398C14.8239 12.9999 14.6401 13.0097 14.4645 13.0585C13.9635 13.1978 13.8715 13.7317 13.8603 14.2045V16.717L12.3373 16.7165V11.795L13.7991 11.7947L13.7997 12.4696C13.8237 12.4736 13.8375 12.4613 13.844 12.4388C14.1186 11.9621 14.688 11.6754 15.2302 11.676H15.3437C15.5747 11.6763 15.7947 11.709 16.0149 11.776C16.3937 11.8915 16.6956 12.1493 16.8653 12.5081C17.0796 12.9614 17.1116 13.488 17.1171 13.9908L17.1175 16.7166H15.5818L15.5816 16.7167Z" />
  </svg>
)

const socials = [
  { id: 'ig', href: 'https://www.instagram.com/erensau.kz/', icon: <IgIcon /> },
  { id: 'fb', href: 'https://www.facebook.com/erensaukz/', icon: <FbIcon /> },
  { id: 'yt', href: 'https://www.youtube.com/@erensau', icon: <YtIcon /> },
  { id: 'in', href: 'https://www.linkedin.com/company/erensau-hospital/', icon: <LinkedinIcon /> },
]

// Флаги как SVG
const KzFlag = () => (
  <svg className="w-5 h-3.5 rounded-sm" viewBox="0 0 30 20" fill="none">
    <rect width="30" height="20" fill="#00AFCA" />
    <circle cx="11" cy="10" r="3.2" fill="#FFC107" />
    <path d="M8 10h6M9.5 7.5l3 5M9.5 12.5l3-5" stroke="#FFC107" strokeWidth="0.6" />
  </svg>
)
const RuFlag = () => (
  <svg className="w-5 h-3.5 rounded-sm" viewBox="0 0 30 20">
    <rect width="30" height="6.7" fill="#ffffff" />
    <rect y="6.7" width="30" height="6.6" fill="#0039A6" />
    <rect y="13.3" width="30" height="6.7" fill="#D52B1E" />
  </svg>
)
const UsFlag = () => (
  <svg className="w-5 h-3.5 rounded-sm" viewBox="0 0 30 20">
    <rect width="30" height="20" fill="#B22234" />
    <g fill="#ffffff">
      <rect y="2.3" width="30" height="1.5" /><rect y="5.4" width="30" height="1.5" />
      <rect y="8.5" width="30" height="1.5" /><rect y="11.6" width="30" height="1.5" />
      <rect y="14.7" width="30" height="1.5" /><rect y="17.8" width="30" height="1.5" />
    </g>
    <rect width="12" height="10.8" fill="#3C3B6E" />
  </svg>
)
const langFlags: Record<Lang, ComponentType> = { kz: KzFlag, ru: RuFlag, en: UsFlag }

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lang, setLang] = useState<Lang>('kz')
  const [langOpen, setLangOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const CurrentFlag = langFlags[lang]
  const { openModal } = useModal()

  return (
    <header className="bg-white sticky top-0 z-50">

      {/* ── Row 1: utility bar ── */}
      <div className="container-main flex items-center justify-between h-16 lg:h-[100px]">

        {/* Logo erensau / hospital — «hospital» прижат вправо (начинается под буквой «s») */}
        <Link to="/" className="flex flex-col items-stretch leading-none flex-shrink-0">
          <span className="text-gray-900 font-bold text-2xl lg:text-[28px] tracking-tight lowercase">erensau</span>
          <span className="text-[#00b5e2] text-[11px] lg:text-xs font-medium tracking-wide lowercase mt-0.5 text-right">hospital</span>
        </Link>

        {/* Desktop utility row — блоки растянуты до правого края с равными промежутками */}
        <div className="hidden lg:flex flex-1 items-center justify-between pl-[50px] xl:pl-[87px]">

          {/* Записаться — текст с подчёркиванием */}
          <Link
            to="/contacts"
            className="text-sm font-semibold text-[#00b5e2] underline underline-offset-4 hover:text-[#0099c4] transition-colors whitespace-nowrap"
          >
            Записаться на приём
          </Link>

          {/* Открыть чат: WhatsApp | Telegram — дропдаун с выбором мессенджера */}
          <div className="relative">
            <button
              onClick={() => setChatOpen(o => !o)}
              className="flex items-center gap-2.5 text-sm font-semibold text-gray-900 hover:text-[#00b5e2] transition-colors"
            >
              <svg className="w-[21px] h-[21px] text-[#00b5e2]" fill="currentColor" viewBox="0 0 21 21">
                <path d="M17.941 3.04902C16.0485 1.16527 13.4341 0 10.5461 0C4.77071 0 0.0879426 4.66036 0.0879426 10.4097C0.0879426 12.3228 0.606452 14.1148 1.5105 15.6555L1.48377 15.6064L0 21L5.5432 19.5525C6.98616 20.3501 8.70773 20.8193 10.5398 20.8193H10.544C16.3193 20.8172 21 16.1562 21 10.4076C21 7.53431 19.8307 4.93347 17.9403 3.04972L17.941 3.04902ZM10.544 19.0609H10.5405C8.90894 19.0609 7.38155 18.6127 6.07789 17.8333L6.11729 17.855L5.79999 17.6681L2.51094 18.5273L3.38825 15.3347L3.18141 15.0077C2.34772 13.7038 1.85242 12.1148 1.85242 10.4104C1.85242 5.63305 5.74371 1.7598 10.5433 1.7598C15.3428 1.7598 19.2341 5.63305 19.2341 10.4104C19.2341 15.1877 15.3442 19.0609 10.544 19.0609ZM15.3112 12.5826C15.0502 12.4524 13.7655 11.8242 13.5263 11.7367C13.2864 11.6499 13.1119 11.6071 12.9374 11.8676C12.7643 12.1275 12.2634 12.7129 12.1108 12.8866C11.9588 13.0609 11.8054 13.0819 11.5444 12.9524C10.7353 12.6261 10.0402 12.1912 9.43589 11.6555L9.44293 11.6618C8.8808 11.1436 8.39887 10.5504 8.00982 9.89636L7.99012 9.85994C7.83815 9.60014 7.97394 9.45938 8.10409 9.32983C8.22158 9.21359 8.36581 9.02591 8.49596 8.87465C8.59868 8.7493 8.68662 8.60574 8.75346 8.45168L8.75768 8.43978C8.78793 8.37885 8.80552 8.30812 8.80552 8.23249C8.80552 8.14076 8.77949 8.05532 8.73446 7.98249L8.73587 7.98459C8.66974 7.85434 8.14771 6.57423 7.93032 6.05322C7.71785 5.54622 7.50186 5.61555 7.34216 5.60714C7.19019 5.60014 7.01571 5.59874 6.84123 5.59874C6.56334 5.60574 6.31639 5.73039 6.14614 5.92297L6.14543 5.92437C5.58119 6.45728 5.23083 7.20868 5.23083 8.04132C5.23083 8.05952 5.23083 8.07843 5.23153 8.09664V8.09384C5.3237 9.12115 5.71064 10.0434 6.30584 10.7948L6.2974 10.7843C7.42588 12.4503 8.93005 13.7829 10.6952 14.6807L10.7614 14.7108C11.1469 14.8845 11.6408 15.07 12.1459 15.229L12.2508 15.2577C12.5617 15.3557 12.9198 15.4125 13.2913 15.4125C13.5045 15.4125 13.7141 15.3936 13.9167 15.3578L13.8949 15.3606C14.647 15.2045 15.2711 14.7528 15.6517 14.1359L15.658 14.1239C15.7741 13.8676 15.8416 13.5686 15.8416 13.2542C15.8416 13.1247 15.8304 12.9979 15.8086 12.8746L15.8107 12.888C15.746 12.7794 15.5715 12.715 15.3098 12.584L15.3112 12.5826Z" />
              </svg>
              <span className="w-px h-3 bg-black" />
              <svg className="w-[19.64px] h-[16.91px] text-[#00b5e2]" fill="currentColor" viewBox="0 0 19.64 16.9111">
                <path d="M19.5772 1.53898L16.6018 15.9033C16.3798 16.915 15.8103 17.1428 14.9874 16.6861L10.5242 13.2917L7.73828 11.1692L16.0636 3.36781C16.4113 3.00832 15.9684 2.87769 15.5255 3.17237L5.17429 9.89633L0.710137 8.4928C-0.270877 8.16673 -0.270877 7.48016 0.932067 7.02447L18.279 0.0706423C19.1334 -0.19062 19.862 0.267095 19.5772 1.53898Z" />
              </svg>
              <span className="underline underline-offset-4">Открыть чат</span>
            </button>
            {chatOpen && (
              <div className="absolute left-0 top-full mt-4 bg-white rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.14)] px-7 py-5 space-y-5 min-w-[195px] z-50">
                <a
                  href="https://wa.me/77273394040"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setChatOpen(false)}
                  className="block text-sm font-semibold text-gray-900 underline underline-offset-4 whitespace-nowrap hover:text-[#00b5e2] transition-colors"
                >
                  Написать в Whatsapp
                </a>
                <a
                  href="https://t.me/erensau"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setChatOpen(false)}
                  className="block text-sm font-semibold text-gray-900 underline underline-offset-4 whitespace-nowrap hover:text-[#00b5e2] transition-colors"
                >
                  Написать в Telegram
                </a>
              </div>
            )}
          </div>

          {/* Phone */}
          <a
            href="tel:+77273394040"
            className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-[#00b5e2] transition-colors whitespace-nowrap"
          >
            <svg className="w-5 h-5 text-[#00b5e2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
            </svg>
            <span className="underline underline-offset-4">+7 (727) 339 40 40</span>
          </a>

          {/* Социальные сети — 5 голубых кругов */}
          <div className="flex items-center gap-1.5">
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.id}
                className="w-7 h-7 rounded-full bg-[#00b5e2] text-white flex items-center justify-center hover:bg-[#0099c4] transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Селектор языка с флагом */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(o => !o)}
              className="flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:text-[#00b5e2] transition-colors"
            >
              <CurrentFlag />
              <span>{langLabels[lang]}</span>
              <svg className={`w-3.5 h-3.5 transition-transform ${langOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute left-0 top-full mt-3 bg-white rounded-lg shadow-[0_12px_32px_rgba(0,0,0,0.14)] overflow-hidden min-w-[96px] z-50">
                {(['kz', 'ru', 'en'] as const).filter((l) => l !== lang).map((l) => {
                  const Flag = langFlags[l]
                  return (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangOpen(false) }}
                      className="flex items-center gap-2.5 w-full text-left px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 hover:text-[#00b5e2] transition-colors"
                    >
                      <Flag />
                      {langLabels[l]}
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          {/* Войти */}
          <button onClick={() => openModal('login')} className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-[#00b5e2] transition-colors">
            <svg className="w-6 h-6 text-[#00b5e2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            Войти
          </button>
        </div>

        {/* Mobile right side */}
        <div className="lg:hidden flex items-center gap-2">
          <Link to="/contacts" className="text-[#00b5e2] underline underline-offset-4 text-xs font-medium">
            Записаться
          </Link>
          <button
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Row 2: navigation in white pill — выходит за нижний край header, перекрывая Hero ── */}
      <div className="hidden lg:block container-main relative z-10 -mb-[14px] pb-0">
        <nav className="bg-white rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.08)] h-[62px] px-16 xl:px-[110px] flex items-center justify-between">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="relative text-[15px] font-semibold text-gray-900 hover:text-[#00b5e2] transition-colors whitespace-nowrap pb-1"
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#00b5e2] rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
          <nav className="container-main py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#00b5e2] bg-[#00b5e2]/5'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-3 pt-4 border-t border-gray-100 space-y-3">
              <a
                href="https://wa.me/77172000000"
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <span className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0a12 12 0 100 24 12 12 0 000-24z" /></svg>
                </span>
                Открыть чат WhatsApp
              </a>
              <a href="tel:+77273394040" className="flex items-center gap-2 text-sm font-semibold text-[#00b5e2]">
                +7 (727) 339 40 40
              </a>
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-1.5">
                  {socials.map((s) => (
                    <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-[#00b5e2] text-white flex items-center justify-center">
                      {s.icon}
                    </a>
                  ))}
                </div>
                <button onClick={() => { setMobileOpen(false); openModal('login') }} className="text-xs font-medium text-gray-700 flex items-center gap-1.5">
                  <span className="w-6 h-6 rounded-full bg-[#00b5e2] flex items-center justify-center text-white">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                  </span>
                  Войти
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
