import { User, ChevronRight, Plus, MoreVertical } from 'lucide-react'
const partners = [
  {
    id: 1,
    name: 'MedTech Innovations',
    contact: 'Dr. Alice Smith',
    email: 'alice@medtech.com'
  },
  {
    id: 2,
    name: 'Surgical Science Group',
    contact: 'Prof. John Lee',
    email: 'john.lee@ssg.org'
  },
  {
    id: 3,
    name: 'Global Health Partners',
    contact: 'Dr. Maria Gomez',
    email: 'maria.gomez@ghp.net'
  }
]
export default function PartnerList() {
  return (
    <div>
      <ul className="divide-y divide-gray-100">
        {partners.map((partner) => (
          <li key={partner.id} className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <User size={20} className="text-blue-500" />
              <div>
                <div className="font-medium text-gray-800">{partner.name}</div>
                <div className="text-xs text-gray-500">{partner.contact}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1 rounded hover:bg-gray-100">
                <MoreVertical size={18} />
              </button>
              <ChevronRight size={16} className="text-gray-400" />
            </div>
          </li>
        ))}
      </ul>
      <button className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        <Plus size={18} />
        Add Partner
      </button>
    </div>
  )
}