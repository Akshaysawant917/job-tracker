// app/dashboard/page.js
"use client";

import { useEffect, useState, useCallback } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ company: "", position: "", status: "pending" });
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setUser(decoded);
      fetchJobs();
    } catch (err) {
      console.error("Invalid token", err);
      localStorage.removeItem("token");
      router.push("/login");
    }
  }, []);

  const fetchJobs = useCallback(async () => {
    const token = localStorage.getItem("token");
    const res = await fetch("/api/jobs/get", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    if (res.ok) setJobs(data.jobs || []);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddJob = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const token = localStorage.getItem("token");
    const res = await fetch("/api/jobs/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      setMsg("✅ Job added!");
      setForm({ company: "", position: "", status: "pending" });
      fetchJobs();
    } else {
      setMsg(data.message || "Failed to add job");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this job?");
    if (!confirmDelete) return;

    const token = localStorage.getItem("token");
    const res = await fetch(`/api/jobs/delete?id=${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.ok) {
      setJobs(jobs.filter((job) => job._id !== id));
    }
  };

  if (!user) return <p className="p-8 text-gray-600">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold">🎯 Job Tracker</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm text-white bg-red-600 hover:bg-red-700 rounded"
        >
          Logout
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">➕ Add New Job</h2>
          <form onSubmit={handleAddJob} className="space-y-4">
            <input
              name="company"
              placeholder="Company"
              value={form.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              name="position"
              placeholder="Position"
              value={form.position}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="pending">Pending</option>
              <option value="interview">Interview</option>
              <option value="declined">Declined</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              {loading ? "Adding..." : "Add Job"}
            </button>
            {msg && <p className="text-sm text-green-600 mt-2">{msg}</p>}
          </form>
        </div>

        {/* Job List Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">📄 Your Jobs</h2>
          {jobs.length > 0 ? (
            <div className="overflow-x-auto">
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
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          job.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : job.status === "interview"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-red-100 text-red-800"
                        }`}>
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
            </div>
          ) : (
            <p className="text-sm text-gray-500">No jobs added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
