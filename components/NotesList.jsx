'use client';

import { useState } from 'react';
import { Trash2, Edit } from 'lucide-react';
import Link from 'next/link';

export default function NotesList({ notes, deleteNoteAction }) {
  // Local state to track deleting status (optional)
  const [deletingNoteId, setDeletingNoteId] = useState(null);

  async function handleDelete(e, id) {
    if (!confirm('Delete this note?')) {
      e.preventDefault();
      return;
    }
    setDeletingNoteId(id);
  }

  return (
    <div className="grid gap-4">
      {notes.map((note) => (
        <div
          key={note._id}
          className="p-4 border rounded shadow-sm bg-white flex justify-between items-start"
        >
          <div>
            <h2 className="font-semibold text-lg">{note.title}</h2>
            <p className="mt-1 text-gray-700 line-clamp-3">{note.body}</p>
            <p className="mt-2 text-xs text-gray-400">
              Updated: {new Date(note.updatedAt).toLocaleString()}
            </p>
          </div>
          <div className="flex space-x-2">
            <Link
              href={`/notes/${note._id}/edit`}
              className="p-1 rounded hover:bg-indigo-100 text-indigo-600"
              aria-label="Edit note"
            >
              <Edit className="h-5 w-5" />
            </Link>

            <form
              action={deleteNoteAction}
              onSubmit={(e) => handleDelete(e, note._id)}
            >
              <input type="hidden" name="id" value={note._id} />
              <button
                type="submit"
                className="p-1 rounded hover:bg-red-100 text-red-600"
                aria-label="Delete note"
                disabled={deletingNoteId === note._id}
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}
