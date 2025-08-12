// components/TopNav.jsx
import Link from 'next/link';
import { Plus, Briefcase, Filter, BarChart3 } from 'lucide-react';

export default function TopNav() {
  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-indigo-600 rounded-lg">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Job Tracker</h1>
              <p className="text-sm text-gray-500">Manage your job applications</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              // onClick={async () => await logoutUser()}
              className="text-sm bg-red-500 text-white px-3 py-1 rounded-lg shadow-sm hover:bg-red-600 transition"
            >
              Logout
            </button>

            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Filter className="h-5 w-5" />
            </button>
            <Link
              href="/stats"
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <BarChart3 className="h-5 w-5" />
            </Link>

            <Link
              href="/jobs/new"
              className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-indigo-700 transition-colors font-medium"
            >
              <Plus className="h-4 w-4" />
              <span>Add Job</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
