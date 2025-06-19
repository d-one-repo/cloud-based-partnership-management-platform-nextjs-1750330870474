import { Star, Layers, User, FileText } from 'lucide-react'
const analytics = [
  {
    id: 1,
    label: 'Active Projects',
    value: 7,
    icon: Layers,
    color: 'bg-purple-100 text-purple-700'
  },
  {
    id: 2,
    label: 'Partners',
    value: 12,
    icon: User,
    color: 'bg-blue-100 text-blue-700'
  },
  {
    id: 3,
    label: 'Documents Shared',
    value: 34,
    icon: FileText,
    color: 'bg-green-100 text-green-700'
  },
  {
    id: 4,
    label: 'Avg. Partner Rating',
    value: '4.8',
    icon: Star,
    color: 'bg-yellow-100 text-yellow-700'
  }
]
export default function AnalyticsPanel() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {analytics.map((item) => (
        <div key={item.id} className={`flex flex-col items-center justify-center rounded-lg p-4 ${item.color}`}>
          <item.icon size={28} className="mb-2" />
          <div className="text-2xl font-bold">{item.value}</div>
          <div className="text-xs font-medium">{item.label}</div>
        </div>
      ))}
    </div>
  )
}