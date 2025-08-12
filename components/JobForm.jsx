// app/dashboard/JobForm.jsx
"use client";

import { useState } from "react";
// import { addJob } from "@/lib/jobs";

export default function JobForm({ onJobAdded }) {
  const [form, setForm] = useState({ company: "", position: "", status: "pending" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      // await addJob(form);
      setMsg("✅ Job added!");
      setForm({ company: "", position: "", status: "pending" });
      if (onJobAdded) onJobAdded(); // trigger refetch
    } catch (err) {
      setMsg("❌ Failed to add job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold">Add New Job</h2>
      <input
        name="company"
        placeholder="Company"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <input
        name="position"
        placeholder="Position"
        value={form.position}
        onChange={(e) => setForm({ ...form, position: e.target.value })}
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <select
        name="status"
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
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
      {msg && <p className="text-sm text-green-600">{msg}</p>}
    </form>
  );
}
