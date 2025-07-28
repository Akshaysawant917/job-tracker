'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  Plus, Briefcase, MapPin, Clock, Pencil, Trash2, Filter, Search,
  BarChart3, Eye, Send, MessageSquare, X, Grid3X3, List, DollarSign, Calendar
} from 'lucide-react';

export default function JobsDashboard({ jobs, deleteJob, logoutUser }) {
  const [statusFilter, setStatusFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const filteredJobs = jobs.filter(job => {
    return (
      (statusFilter ? job.status === statusFilter : true) &&
      (typeFilter ? job.type === typeFilter : true)
    );
  });
  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-amber-50 text-amber-700 border-amber-200',
      applied: 'bg-blue-50 text-blue-700 border-blue-200',
      interview: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      rejected: 'bg-red-50 text-red-700 border-red-200',
      offer: 'bg-purple-50 text-purple-700 border-purple-200',
      wishlist: 'bg-yellow-50 text-yellow-700 border-yellow-200',
      withdrawn: 'bg-gray-100 text-gray-700 border-gray-300'
    };
    return colors[status] || 'bg-gray-50 text-gray-700 border-gray-200';
  };

  const getTypeIcon = (type) => {
    return type === 'remote' ? '🏠' : type === 'hybrid' ? '🏢🏠' : '🏢';
  };

  const stats = {
    total: jobs.length,
    pending: jobs.filter((job) => job.status === 'pending').length,
    interview: jobs.filter((job) => job.status === 'interview').length,
    rejected: jobs.filter((job) => job.status === 'rejected').length,
    applied: jobs.filter((job) => job.status === 'applied').length,
    offer: jobs.filter((job) => job.status === 'offer').length,
    wishlist: jobs.filter((job) => job.status === 'wishlist').length,
  };

  const handleDelete = (e) => {
    if (!confirm('Are you sure you want to delete this job?')) {
      e.preventDefault();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
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
      </div>

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div className="flex space-x-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="">All Statuses</option>
              <option value="wishlist">Wishlist</option>
              <option value="applied">Applied</option>
              <option value="pending">Pending</option>
              <option value="interview">Interview</option>
              <option value="offer">Offer</option>
              <option value="rejected">Rejected</option>
              <option value="withdrawn">Withdrawn</option>
            </select>

            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="">All Types</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
              <option value="freelance">Freelance</option>
            </select>
          </div>
          <p className="text-sm text-gray-500">
            Showing <strong>{filteredJobs.length}</strong> of <strong>{jobs.length}</strong> jobs
          </p>
        </div>
        {/* Job List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Job Applications</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">{jobs.length} jobs</span>
              <div className="flex border rounded-lg">
                <button className="p-1 text-gray-400 hover:text-gray-600 border-r">
                  <List className="h-4 w-4" />
                </button>
                <button className="p-1 text-indigo-600">
                  <Grid3X3 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {jobs.length === 0 ? (
            <div className="text-center py-12">
              <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No jobs found</h3>
              <p className="mt-1 text-sm text-gray-500">Get started by adding your first job application.</p>
              <div className="mt-6">
                <Link href="/jobs/new" className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-indigo-700 transition-colors">
                  <Plus className="h-4 w-4" />
                  <span>Add Job</span>
                </Link>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredJobs.map((job) => (
                <div key={job._id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <h3 className="text-lg font-semibold text-gray-900">{job.position}</h3>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(job.status)}`}>
                              {job.status}
                            </span>
                          </div>
                          <p className="text-base text-gray-700 font-medium mt-1">{job.company}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <span>{getTypeIcon(job.workMode)}</span>
                              <span className="capitalize">{job.workMode}</span>
                            </div>
                            {job.salary && (
                              <div className="flex items-center space-x-1">
                                <DollarSign className="h-4 w-4" />
                                <span>{job.salary} LPA</span>
                              </div>
                            )}
                            {job.applicationDate && (
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(job.applicationDate).toLocaleDateString()}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 ml-6">
                      <Link href={`/jobs/${job._id}`} className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg" title="View Details">
                        <Eye className="h-4 w-4" />
                      </Link>
                      <Link href={`/jobs/${job._id}/edit`} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg" title="Edit Job">
                        <Pencil className="h-4 w-4" />
                      </Link>
                      <form action={deleteJob} className="inline">
                        <input type="hidden" name="id" value={job._id} />
                        <button
                          type="submit"
                          onClick={handleDelete}
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
                          title="Delete Job"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
