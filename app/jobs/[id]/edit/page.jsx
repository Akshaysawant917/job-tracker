import dbConnect from '@/lib/mongoose';
import Job from '@/modals/Job';
import { updateJob } from '../../actions';
import Link from 'next/link';
import {
  ArrowLeft,
  Briefcase,
  Building2,
  MapPin,
  Target,
  Clock,
  DollarSign,
  Calendar,
  FileText,
  Save
} from 'lucide-react';

export default async function EditJobPage({ params }) {
  await dbConnect();
  const job = await Job.findById(params.id).lean();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                href="/jobs"
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-indigo-600 rounded-lg">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Edit Job</h1>
                  <p className="text-sm text-gray-500">Update your job application</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <form action={updateJob} className="p-8 space-y-8">
            <input type="hidden" name="id" value={job._id.toString()} />

            {/* Basic Information */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Briefcase className="h-5 w-5 text-indigo-600" />
                <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="lg:col-span-2">
                  <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                    <Building2 className="h-4 w-4 text-gray-500" />
                    <span>Company Name</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="company"
                    defaultValue={job.company}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="lg:col-span-2">
                  <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                    <Target className="h-4 w-4 text-gray-500" />
                    <span>Job Position</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="position"
                    defaultValue={job.position}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>Location</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="location"
                    defaultValue={job.location}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                    <span>Salary Range</span>
                    <span className="text-gray-400 text-sm">(optional)</span>
                  </label>
                  <input
                    name="salary"
                    defaultValue={job.salary || ''}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>

            {/* Job Details */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Clock className="h-5 w-5 text-indigo-600" />
                <h3 className="text-lg font-semibold text-gray-900">Job Details</h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Job Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="type"
                    defaultValue={job.type}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  >
                    <option value="">Select Type</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="internship">Internship</option>
                    <option value="freelance">Freelance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Work Mode <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="workMode"
                    defaultValue={job.workMode}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  >
                    <option value="">Select Mode</option>
                    <option value="remote">Remote</option>
                    <option value="onsite">On-site</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Application Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="status"
                    defaultValue={job.status}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  >
                    <option value="">Select Status</option>
                    <option value="wishlist">Wishlist</option>
                    <option value="applied">Applied</option>
                    <option value="pending">Pending</option>
                    <option value="interview">Interview</option>
                    <option value="offer">Offer</option>
                    <option value="rejected">Rejected</option>
                    <option value="withdrawn">Withdrawn</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <FileText className="h-5 w-5 text-indigo-600" />
                <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span>Application Date</span>
                    <span className="text-gray-400 text-sm">(optional)</span>
                  </label>
                  <input
                    name="applicationDate"
                    type="date"
                    defaultValue={job.applicationDate ? new Date(job.applicationDate).toISOString().split('T')[0] : ''}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="flex items-center justify-between pt-8 border-t border-gray-200 mt-8">
              <Link
                href="/jobs"
                className="inline-flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors font-medium"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Cancel</span>
              </Link>
              <button
                type="submit"
                className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg shadow-sm transition-colors font-medium"
              >
                <Save className="h-4 w-4" />
                <span>Update Job</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
