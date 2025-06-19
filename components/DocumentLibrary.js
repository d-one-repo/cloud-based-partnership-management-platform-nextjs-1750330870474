import { FileText, Download, Upload, Edit, Trash2, MoreVertical } from 'lucide-react'
const documents = [
  {
    id: 1,
    name: 'AI Surgery Whitepaper.pdf',
    uploaded: '2024-05-01',
    owner: 'Caroline Halford'
  },
  {
    id: 2,
    name: 'Partner Agreement.docx',
    uploaded: '2024-04-15',
    owner: 'Dr. Alice Smith'
  },
  {
    id: 3,
    name: 'Outcomes Data.xlsx',
    uploaded: '2024-03-28',
    owner: 'Prof. John Lee'
  }
]
export default function DocumentLibrary() {
  return (
    <div>
      <ul className="divide-y divide-gray-100">
        {documents.map((doc) => (
          <li key={doc.id} className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <FileText size={20} className="text-green-500" />
              <div>
                <div className="font-medium text-gray-800">{doc.name}</div>
                <div className="text-xs text-gray-500">Uploaded: {doc.uploaded} &middot; {doc.owner}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1 rounded hover:bg-gray-100">
                <Download size={16} />
              </button>
              <button className="p-1 rounded hover:bg-gray-100">
                <Edit size={16} />
              </button>
              <button className="p-1 rounded hover:bg-gray-100">
                <Trash2 size={16} />
              </button>
              <button className="p-1 rounded hover:bg-gray-100">
                <MoreVertical size={18} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className="mt-4 w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
        <Upload size={18} />
        Upload Document
      </button>
    </div>
  )
}