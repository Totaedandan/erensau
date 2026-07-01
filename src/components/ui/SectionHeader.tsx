interface SectionHeaderProps {
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export default function SectionHeader({ title, subtitle, center, light }: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`}>
      <h2 className={`text-3xl lg:text-4xl font-bold mb-3 ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed ${light ? 'text-blue-200' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
