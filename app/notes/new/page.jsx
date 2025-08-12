import { addNote } from '../actions';
import Link from 'next/link';
import { ArrowLeft, Plus } from 'lucide-react';

export default function AddNotePage() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded shadow">
      <div className="flex items-center mb-6">
        <Link href="/notes" className="p-2 text-gray-400 hover:text-gray-600 rounded">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="ml-4 text-2xl font-bold">Add New Note</h1>
      </div>
      <form action={addNote} className="space-y-6">
        <div>
          <label className="block font-semibold mb-2" htmlFor="title">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            name="title"
            required
            placeholder="Note title"
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2" htmlFor="body">
            Body <span className="text-red-500">*</span>
          </label>
          <textarea
            id="body"
            name="body"
            required
            rows={6}
            placeholder="Write your note here..."
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded font-semibold"
        >
          <Plus className="mr-2 h-5 w-5" />
          Add Note
        </button>
      </form>
    </div>
  );
}
