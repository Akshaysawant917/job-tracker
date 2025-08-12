// app/dashboard/DashboardClient.jsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import JobForm from "./JobForm";
import JobList from "./JobList";

export default function DashboardClient({ jobs }) {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return router.push("/login");

    try {
      const decoded = jwtDecode(token);
      setUser(decoded);
    } catch {
      localStorage.removeItem("token");
      router.push("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
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
        <JobForm />
        <JobList jobs={jobs} />
      </div>
    </div>
  );
}
