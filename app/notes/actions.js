'use server';

import dbConnect from '@/lib/mongoose';
import Note from '@/modals/Note';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function getNotes() {
  await dbConnect();
  const cookieStore = cookies();
  const userId = cookieStore.get('userId')?.value;
  if (!userId) throw new Error('Not logged in');

  const notes = await Note.find({ userId }).sort({ updatedAt: -1 }).lean();
  return JSON.parse(JSON.stringify(notes));
}

export async function addNote(formData) {
  await dbConnect();
  const cookieStore = cookies();
  const userId = cookieStore.get('userId')?.value;
  if (!userId) throw new Error('Not logged in');

  const title = formData.get('title');
  const body = formData.get('body');

  await Note.create({ userId, title, body });
  redirect('/notes');
}

export async function updateNote(formData) {
  await dbConnect();
  const cookieStore = cookies();
  const userId = cookieStore.get('userId')?.value;
  if (!userId) throw new Error('Not logged in');

  const id = formData.get('id');
  const title = formData.get('title');
  const body = formData.get('body');

  await Note.findOneAndUpdate({ _id: id, userId }, { title, body });
  redirect('/notes');
}

export async function deleteNote(formData) {
  await dbConnect();
  const cookieStore = cookies();
  const userId = cookieStore.get('userId')?.value;
  if (!userId) throw new Error('Not logged in');

  const id = formData.get('id');
  await Note.findOneAndDelete({ _id: id, userId });
  redirect('/notes');
}
