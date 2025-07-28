import Link from 'next/link';
import { Briefcase, Calendar, BarChart3, LogIn } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-6 py-12 flex flex-col items-center justify-center text-center">
      {/* Hero */}
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 text-indigo-600 text-sm font-semibold uppercase tracking-wide mb-4">
          <Briefcase className="h-5 w-5" />
          <span>Job Tracker</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Your Ultimate Job Application Tracker
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Organize your job hunt with ease — track, manage, and visualize your job applications in one beautiful dashboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/login" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
            Login
          </Link>
          <Link href="/register" className="px-6 py-3 bg-white text-indigo-600 font-semibold border border-indigo-600 rounded-lg hover:bg-indigo-50 transition">
            Get Started
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="mt-20 grid gap-10 grid-cols-1 sm:grid-cols-3 max-w-5xl w-full">
        {[
          {
            icon: Briefcase,
            title: "Track Applications",
            desc: "Save job info, status, salary, work mode, notes, and more."
          },
          {
            icon: BarChart3,
            title: "Visual Insights",
            desc: "Get pie charts, stats, and reports of your job hunt."
          },
          {
            icon: Calendar,
            title: "Calendar View",
            desc: "See applied dates, interview dates and more on a calendar."
          }
        ].map(({ icon: Icon, title, desc }, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 text-left shadow-sm">
            <Icon className="h-6 w-6 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600 mt-2">{desc}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-20 text-gray-500 text-sm">
        Built with ❤️ by Akshay · © {new Date().getFullYear()}
      </footer>
    </main>
  );
}
