import dbConnect from '@/lib/mongoose';
import Note from '@/modals/Note';
import { updateNote } from '../../actions';
import Link from 'next/link';
import { ArrowLeft, Save } from 'lucide-react';

export default async function EditNotePage({ params }) {
  await dbConnect();
  const note = await Note.findById(params.id).lean();

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded shadow">
      <div className="flex items-center mb-6">
        <Link href="/notes" className="p-2 text-gray-400 hover:text-gray-600 rounded">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="ml-4 text-2xl font-bold">Edit Note</h1>
      </div>
      <form action={updateNote} className="space-y-6">
        <input type="hidden" name="id" value={note._id.toString()} />
        <div>
          <label className="block font-semibold mb-2" htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            defaultValue={note.title}
            required
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2" htmlFor="body">Body</label>
          <textarea
            id="body"
            name="body"
            rows={6}
            defaultValue={note.body}
            required
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded font-semibold"
        >
          <Save className="mr-2 h-5 w-5" />
          Update Note
        </button>
      </form>
    </div>
  );
}
