'use server';

import dbConnect from '@/lib/mongoose';
import User from '../../models/User.js';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';

export async function registerUser({ email, password }) {
  await dbConnect();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return 'User already exists';
  }

await User.create({ email, password }); // let pre-save hook hash it


  // ❗ Do not wrap redirect in try/catch
  redirect('/login');
}
