import { Link } from 'react-router-dom'

interface DoctorCardProps {
  name: string
  specialty: string
  experience: string
  photo?: string
  id?: string
}

export default function DoctorCard({ name, specialty, experience, photo, id }: DoctorCardProps) {
  return (
    <div className="card hover:shadow-md transition-shadow duration-300">
      <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
        {photo ? (
          <img src={photo} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-20 h-20 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-primary text-sm mb-2">{specialty}</p>
        <p className="text-gray-500 text-xs mb-3">Стаж: {experience}</p>
        {id && (
          <Link
            to={`/doctors/${id}`}
            className="text-primary text-sm font-medium hover:underline"
          >
            Подробнее →
          </Link>
        )}
      </div>
    </div>
  )
}
