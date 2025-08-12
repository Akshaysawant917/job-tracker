// app/dashboard/JobList.jsx
"use client";

import { useEffect, useState } from "react";
// import { getAllJobs, deleteJob } from "@/lib/jobs";

export default function JobList() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const data = await getAllJobs();
    setJobs(data);
  };

  const handleDelete = async (id) => {
    const ok = confirm("Are you sure?");
    if (!ok) return;

    await deleteJob(id);
    setJobs((prev) => prev.filter((job) => job._id !== id));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="bg-white shadow p-6 rounded">
      <h2 className="text-xl font-semibold mb-4">Your Jobs</h2>
      {jobs.length > 0 ? (
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-2">Company</th>
              <th className="px-4 py-2">Position</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id} className="border-t">
                <td className="px-4 py-2 font-medium">{job.company}</td>
                <td className="px-4 py-2">{job.position}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      job.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : job.status === "interview"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDelete(job._id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-sm text-gray-500">No jobs added yet.</p>
      )}
    </div>
  );
}
