import { addJob } from '../actions';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Building2, 
  MapPin, 
  Briefcase, 
  Clock, 
  Target,
  DollarSign,
  Calendar,
  FileText,
  Plus,
  Save
} from 'lucide-react';

export default function AddJobPage() {
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
                  <Plus className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Add New Job</h1>
                  <p className="text-sm text-gray-500">Track your job application</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Progress Steps */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-6">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold">1</span>
                </div>
                <span className="font-medium">Job Details</span>
              </div>
              <div className="flex items-center space-x-2 opacity-50">
                <div className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold">2</span>
                </div>
                <span className="font-medium">Application Status</span>
              </div>
              <div className="flex items-center space-x-2 opacity-50">
                <div className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold">3</span>
                </div>
                <span className="font-medium">Additional Info</span>
              </div>
            </div>
          </div>

          <form action={addJob} className="p-8">
            {/* Basic Information Section */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <Briefcase className="h-5 w-5 text-indigo-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Company */}
                  <div className="lg:col-span-2">
                    <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                      <Building2 className="h-4 w-4 text-gray-500" />
                      <span>Company Name</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="company"
                      placeholder="e.g. Google, Microsoft, Stripe"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-gray-900 placeholder-gray-400"
                    />
                  </div>

                  {/* Position */}
                  <div className="lg:col-span-2">
                    <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                      <Target className="h-4 w-4 text-gray-500" />
                      <span>Job Position</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="position"
                      placeholder="e.g. Senior Frontend Developer, Product Manager"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-gray-900 placeholder-gray-400"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>Location</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="location"
                      placeholder="e.g. Bengaluru, Remote, San Francisco"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-gray-900 placeholder-gray-400"
                    />
                  </div>

                  {/* Salary */}
                  <div>
                    <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                      <DollarSign className="h-4 w-4 text-gray-500" />
                      <span>Salary Range</span>
                      <span className="text-gray-400 text-sm">(optional)</span>
                    </label>
                    <input
                      name="salary"
                      placeholder="e.g. ₹15-25 LPA, $80k-120k"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-gray-900 placeholder-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* Job Details Section */}
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <Clock className="h-5 w-5 text-indigo-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Job Details</h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Job Type */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Job Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="type"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-gray-900 bg-white"
                    >
                      <option value="">Select Type</option>
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="contract">Contract</option>
                      <option value="internship">Internship</option>
                      <option value="freelance">Freelance</option>
                    </select>
                  </div>

                  {/* Work Mode */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Work Mode <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="workMode"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-gray-900 bg-white"
                    >
                      <option value="">Select Mode</option>
                      <option value="remote">Remote</option>
                      <option value="onsite">On-site</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>

                  {/* Status */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Application Status <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="status"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-gray-900 bg-white"
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

              {/* Additional Information */}
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <FileText className="h-5 w-5 text-indigo-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Application Date */}
                  <div>
                    <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>Application Date</span>
                      <span className="text-gray-400 text-sm">(optional)</span>
                    </label>
                    <input
                      name="applicationDate"
                      type="date"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-gray-900"
                    />
                  </div>

                  {/* Job URL */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Job Posting URL <span className="text-gray-400 text-sm">(optional)</span>
                    </label>
                    <input
                      name="jobUrl"
                      type="url"
                      placeholder="https://company.com/careers/job-id"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-gray-900 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div className="mt-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Notes <span className="text-gray-400 text-sm">(optional)</span>
                  </label>
                  <textarea
                    name="notes"
                    rows={4}
                    placeholder="Any additional notes about this job application, interview feedback, or requirements..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-gray-900 placeholder-gray-400 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-8 border-t border-gray-200 mt-8">
              <Link
                href="/jobs"
                className="inline-flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors font-medium"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Cancel</span>
              </Link>
              
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  className="px-6 py-3 border border-indigo-300 rounded-lg text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition-colors font-medium"
                >
                  Save as Draft
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg shadow-sm transition-colors font-medium"
                >
                  <Save className="h-4 w-4" />
                  <span>Add Job Application</span>
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Quick Tips Card */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6">
          <h4 className="font-semibold text-blue-900 mb-3">💡 Quick Tips</h4>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-start space-x-2">
              <span className="text-blue-500 mt-0.5">•</span>
              <span>Use specific job titles to make tracking easier</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-500 mt-0.5">•</span>
              <span>Include salary ranges to compare opportunities</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-500 mt-0.5">•</span>
              <span>Add notes about requirements or interview details</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-500 mt-0.5">•</span>
              <span>Keep job posting URLs for easy reference</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}