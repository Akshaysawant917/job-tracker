'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  Plus, Briefcase, Clock,  Filter, 
  BarChart3, Send, MessageSquare, X
} from 'lucide-react';

export default function JobsDashboard({ jobs, logoutUser }) {


  const stats = {
    total: jobs.length,
    pending: jobs.filter((job) => job.status === 'pending').length,
    interview: jobs.filter((job) => job.status === 'interview').length,
    rejected: jobs.filter((job) => job.status === 'rejected').length,
    applied: jobs.filter((job) => job.status === 'applied').length,
    offer: jobs.filter((job) => job.status === 'offer').length,
    wishlist: jobs.filter((job) => job.status === 'wishlist').length,
  };


  return (
    <div className=" bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      {/* <div className="bg-white border-b border-gray-200 shadow-sm">
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
                onClick={async () => await logoutUser()}
                className="text-sm bg-red-500 text-white px-3 py-1 rounded-lg shadow-sm hover:bg-red-600 transition"
              >
                Logout
              </button>

              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Filter className="h-5 w-5" />
              </button>
              <Link href="/stats" className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <BarChart3 className="h-5 w-5" />
              </Link>

              <Link href="/jobs/new" className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-indigo-700 transition-colors font-medium">
                <Plus className="h-4 w-4" />
                <span>Add Job</span>
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {[{ label: 'Total Jobs', count: stats.total, icon: Briefcase },
          { label: 'Pending', count: stats.pending, icon: Clock, color: 'amber' },
          { label: 'Applied', count: stats.applied, icon: Send, color: 'blue' },
          { label: 'Interview', count: stats.interview, icon: MessageSquare, color: 'emerald' },
          { label: 'Rejected', count: stats.rejected, icon: X, color: 'red' }
          ].map(({ label, count, icon: Icon, color = 'gray' }, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium text-${color}-600`}>{label}</p>
                  <p className={`text-3xl font-bold text-${color}-900`}>{count}</p>
                </div>
                <div className={`p-3 bg-${color}-100 rounded-lg`}>
                  <Icon className={`h-6 w-6 text-${color}-600`} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
