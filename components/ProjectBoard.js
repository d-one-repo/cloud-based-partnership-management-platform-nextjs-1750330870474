import { Layers, Edit, Plus, ChevronRight, MoreVertical } from 'lucide-react'
const projects = [
  {
    id: 1,
    name: 'AI-Assisted Surgery Research',
    status: 'In Progress',
    partner: 'MedTech Innovations',
    lead: 'Dr. Alice Smith',
    due: '2024-08-15'
  },
  {
    id: 2,
    name: 'Minimally Invasive Techniques',
    status: 'Completed',
    partner: 'Surgical Science Group',
    lead: 'Prof. John Lee',
    due: '2024-04-30'
  },
  {
    id: 3,
    name: 'Global Outcomes Study',
    status: 'Planning',
    partner: 'Global Health Partners',
    lead: 'Dr. Maria Gomez',
    due: '2024-12-01'
  }
]
function statusColor(status) {
  if (status === 'Completed') return 'bg-green-100 text-green-700'
  if (status === 'In Progress') return 'bg-yellow-100 text-yellow-700'
  return 'bg-gray-100 text-gray-700'
}
export default function ProjectBoard() {
  return (
    <div>
      <ul className="divide-y divide-gray-100">
        {projects.map((project) => (
          <li key={project.id} className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <Layers size={20} className="text-purple-500" />
              <div>
                <div className="font-semibold text-gray-800">{project.name}</div>
                <div className="text-xs text-gray-500">{project.partner} &middot; Lead: {project.lead}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className={`px-2 py-1 rounded text-xs font-medium ${statusColor(project.status)}`}>
                {project.status}
              </span>
              <span className="text-xs text-gray-400">{project.due}</span>
              <button className="p-1 rounded hover:bg-gray-100">
                <Edit size={16} />
              </button>
              <button className="p-1 rounded hover:bg-gray-100">
                <MoreVertical size={18} />
              </button>
              <ChevronRight size={16} className="text-gray-300" />
            </div>
          </li>
        ))}
      </ul>
      <button className="mt-4 w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
        <Plus size={18} />
        New Project
      </button>
    </div>
  )
}