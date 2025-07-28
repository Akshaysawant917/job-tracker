'use client';
import Link from 'next/link'; 
import { ArrowLeft, Calendar, DollarSign, MapPin, Pencil, Trash2, Building, Clock, User, ExternalLink, FileText, Briefcase, Home, Users } from 'lucide-react';
export default function JobDetails({ job }) {
    console.log(job);
    
  if (!job) {
    return (
      <div className="text-center py-20 text-gray-600">
        🚫 Job not found or unauthorized access.
      </div>
    );
  }
const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'applied': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'interview': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'offer': return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
      case 'withdrawn': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-purple-100 text-purple-800 border-purple-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'applied': return '📤';
      case 'interview': return '💼';
      case 'offer': return '🎉';
      case 'rejected': return '❌';
      case 'withdrawn': return '↩️';
      default: return '📋';
    }
  };

  return (
    <div className=" ">
      <div className=" mx-auto p-6">
        {/* Back Button */}
    <Link
  href="/jobs"
  className="inline-flex items-center mb-6 px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all duration-200"
>
  <ArrowLeft className="h-4 w-4 mr-2" />
  Back to Dashboard
</Link>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mb-2 capitalize">{job.position}</h1>
                <div className="flex items-center text-blue-100 text-lg">
                  <Building className="h-5 w-5 mr-2" />
                  <span className="capitalize font-medium">{job.company}</span>
                </div>
              </div>
              <div className={`px-4 py-2 rounded-full border-2 font-semibold text-sm flex items-center gap-2 ${getStatusColor(job.status)} bg-white`}>
                <span className="text-lg">{getStatusIcon(job.status)}</span>
                <span className="capitalize">{job.status}</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Key Info Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="rounded-xl p-5 border border-blue-200">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm font-semibold text-gray-700">Location</span>
                </div>
                <p className="text-lg font-bold text-gray-800 capitalize">{job.location}</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border border-green-200">
                <div className="flex items-center mb-2">
                  <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm font-semibold text-gray-700">Salary Range</span>
                </div>
                <p className="text-lg font-bold text-gray-800">{job.salary} LPA</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border border-purple-200">
                <div className="flex items-center mb-2">
                  <Home className="h-5 w-5 text-purple-600 mr-2" />
                  <span className="text-sm font-semibold text-gray-700">Work Mode</span>
                </div>
                <p className="text-lg font-bold text-gray-800 capitalize">{job.workMode}</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-5 border border-orange-200">
                <div className="flex items-center mb-2">
                  <Briefcase className="h-5 w-5 text-orange-600 mr-2" />
                  <span className="text-sm font-semibold text-gray-700">Job Type</span>
                </div>
                <p className="text-lg font-bold text-gray-800 capitalize">{job.type}</p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-5 border border-indigo-200">
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-indigo-600 mr-2" />
                  <span className="text-sm font-semibold text-gray-700">Created</span>
                </div>
                <p className="text-lg font-bold text-gray-800">
                  {new Date(job.createdAt).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-5 border border-teal-200">
                <div className="flex items-center mb-2">
                  <User className="h-5 w-5 text-teal-600 mr-2" />
                  <span className="text-sm font-semibold text-gray-700">User ID</span>
                </div>
                <p className="text-lg font-bold text-gray-800 font-mono">{job.userId}</p>
              </div>
            </div>

            {/* Additional Info */}
            {(job.jobUrl || job.notes) && (
              <div className="space-y-4 mb-8">
                {job.jobUrl && (
                  <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="flex items-center mb-3">
                      <ExternalLink className="h-5 w-5 text-gray-600 mr-2" />
                      <span className="font-semibold text-gray-700">Job URL</span>
                    </div>
                    <a 
                      href={job.jobUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline break-all transition-colors"
                    >
                      {job.jobUrl}
                    </a>
                  </div>
                )}

                {job.notes && (
                  <div className="bg-yellow-50 rounded-xl p-5 border border-yellow-200">
                    <div className="flex items-center mb-3">
                      <FileText className="h-5 w-5 text-yellow-600 mr-2" />
                      <span className="font-semibold text-gray-700">Notes</span>
                    </div>
                    <p className="text-gray-800 leading-relaxed">{job.notes}</p>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
            <Link
  href={`/jobs/${job._id}/edit`}
  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105"
>
  <Pencil className="h-4 w-4 mr-2" />
  Edit Job
</Link>

              
              <button 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105"
                onClick={(e) => {
                  if (!confirm('Are you sure you want to delete this job?')) {
                    e.preventDefault();
                  }
                }}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Job
              </button>
            </div>
          </div>
        </div>

        {/* Metadata Card */}
        <div className="mt-6 bg-white rounded-xl shadow-md border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Technical Details</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Document ID:</span>
              <span className="font-mono text-gray-800">{job._id}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Version:</span>
              <span className="font-mono text-gray-800">{job.__v}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}