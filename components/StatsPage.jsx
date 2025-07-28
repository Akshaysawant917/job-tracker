'use client';

import { useMemo, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Briefcase, Clock, Send, MessageSquare, X, CheckCircle } from 'lucide-react';

export default function StatsPage({ jobs }) {
  const [selectedMonth, setSelectedMonth] = useState('all');

  // Group jobs by status
  const statusCounts = useMemo(() => {
    const counts = {
      applied: 0,
      interview: 0,
      rejected: 0,
      offer: 0,
      wishlist: 0,
      pending: 0,
      withdrawn: 0
    };

    const now = new Date();

    jobs.forEach(job => {
      const createdMonth = new Date(job.createdAt).getMonth();
      if (selectedMonth === 'all' || createdMonth === parseInt(selectedMonth)) {
        counts[job.status] = (counts[job.status] || 0) + 1;
      }
    });

    return Object.entries(counts).map(([status, count]) => ({
      status,
      count
    }));
  }, [jobs, selectedMonth]);

  const COLORS = {
    applied: '#3b82f6',
    interview: '#10b981',
    rejected: '#ef4444',
    offer: '#8b5cf6',
    wishlist: '#facc15',
    pending: '#f59e0b',
    withdrawn: '#6b7280'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">📊 Application Stats</h1>

        {/* Month Filter */}
        <div className="mb-4">
          <select
            value={selectedMonth}
            onChange={e => setSelectedMonth(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="all">All Months</option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={i}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
            ))}
          </select>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          {statusCounts.map(({ status, count }) => (
            <div key={status} className="bg-white shadow-sm rounded-xl p-4 border border-gray-200">
              <p className="text-sm font-medium text-gray-500 capitalize">{status}</p>
              <p className="text-2xl font-bold text-gray-800">{count}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Job Status Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={statusCounts}>
              <XAxis dataKey="status" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count">
                {statusCounts.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[entry.status] || '#8884d8'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
