import { Home, Menu, User, Settings } from 'lucide-react'
export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Home size={28} className="text-blue-700" />
          <span className="text-xl font-bold text-gray-800">Springer Partnership Platform</span>
        </div>
        <nav className="flex items-center gap-6">
          <button className="flex items-center gap-1 text-gray-700 hover:text-blue-700 font-medium">
            <User size={20} />
            <span className="hidden sm:inline">Caroline Halford</span>
          </button>
          <button className="p-2 rounded hover:bg-gray-100">
            <Settings size={20} />
          </button>
          <button className="p-2 rounded hover:bg-gray-100 sm:hidden">
            <Menu size={24} />
          </button>
        </nav>
      </div>
    </header>
  )
}