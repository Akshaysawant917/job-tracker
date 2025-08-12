'use server';

import dbConnect from '@/lib/mongoose';
import User from '../../modals/User.js';
import { redirect } from 'next/navigation';

export async function registerUser({name, email, password }) {
  await dbConnect();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return 'User already exists';
  }

await User.create({ name,email, password }); // let pre-save hook hash it


  // ❗ Do not wrap redirect in try/catch
  redirect('/login');
}
