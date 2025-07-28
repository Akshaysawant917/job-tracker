'use client';

import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import { Briefcase } from 'lucide-react';

export default function CalendarView({ jobs }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  const jobDates = jobs
    .filter((job) => job.applicationDate)
    .map((job) => format(new Date(job.applicationDate), 'yyyy-MM-dd'));

  return (
    <div className="p-6 bg-white rounded-xl shadow border border-gray-200 max-w-4xl mx-auto mt-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Briefcase className="w-5 h-5 text-indigo-600" />
        Job Application Calendar
      </h2>

      <Calendar
        tileContent={({ date }) => {
          const dateStr = format(date, 'yyyy-MM-dd');
          if (jobDates.includes(dateStr)) {
            return (
              <div className="mt-1 flex justify-center items-center">
                <Briefcase className="w-4 h-4 text-indigo-500" />
              </div>
            );
          }
          return null;
        }}
        tileClassName={({ date }) => {
          const dateStr = format(date, 'yyyy-MM-dd');
          if (jobDates.includes(dateStr)) {
            return 'bg-indigo-50 border border-indigo-300 rounded-full';
          }
          return '';
        }}
      />
    </div>
  );
}
