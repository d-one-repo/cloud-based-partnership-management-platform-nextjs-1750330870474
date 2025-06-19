import { Home, User, Folder, FileText, Layers, ChevronRight, Plus, Edit, Trash2, Download, Upload, Star, Search, MoreVertical } from 'lucide-react'
import Header from '../components/Header'
import PartnerList from '../components/PartnerList'
import ProjectBoard from '../components/ProjectBoard'
import DocumentLibrary from '../components/DocumentLibrary'
import AnalyticsPanel from '../components/AnalyticsPanel'
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex items-center gap-2 mb-4">
                <User size={20} className="text-blue-600" />
                <h2 className="text-lg font-semibold">Partners</h2>
              </div>
              <PartnerList />
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex items-center gap-2 mb-4">
                <Folder size={20} className="text-green-600" />
                <h2 className="text-lg font-semibold">Documents</h2>
              </div>
              <DocumentLibrary />
            </div>
          </section>
          <section className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex items-center gap-2 mb-4">
                <Layers size={20} className="text-purple-600" />
                <h2 className="text-lg font-semibold">Projects</h2>
              </div>
              <ProjectBoard />
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <div className="flex items-center gap-2 mb-4">
                <Star size={20} className="text-yellow-500" />
                <h2 className="text-lg font-semibold">Performance Analytics</h2>
              </div>
              <AnalyticsPanel />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}