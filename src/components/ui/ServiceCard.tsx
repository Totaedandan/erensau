interface ServiceCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="card p-6 hover:shadow-md transition-shadow duration-300 group">
      {icon && (
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
          <span className="text-primary group-hover:text-white transition-colors">{icon}</span>
        </div>
      )}
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
