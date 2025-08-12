import Link from 'next/link';
import { getNotes } from './actions';
import NotesList from '@/components/NotesList';
import { deleteNote } from './actions';
import { Plus } from 'lucide-react';

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Notes</h1>
        <Link
          href="/notes/new"
          className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
        >
          <Plus className="h-5 w-5" />
          <span>Add New Note</span>
        </Link>
      </div>

      {notes.length === 0 ? (
        <p className="text-gray-600">No notes yet. Add one above!</p>
      ) : (
        <NotesList notes={notes} deleteNoteAction={deleteNote} />
      )}
    </div>
  );
}
