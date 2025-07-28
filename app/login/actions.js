'use server';

import dbConnect from '@/lib/mongoose';
import User from '../..models/User';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function loginUser({ email, password }) {
  await dbConnect();

  const user = await User.findOne({ email: email.trim() }).select('+password userId');

  if (!user || !(await bcrypt.compare(password.trim(), user.password))) {
    return { message: 'Invalid credentials' };
  }

  // ✅ Store userId in a secure cookie
 cookies().set('userId', user.userId, {
  httpOnly: true,
  secure: true,
  sameSite: 'lax',
  path: '/',
  maxAge: 60 * 60 * 24 * 7,
});


  redirect('/jobs');
}
