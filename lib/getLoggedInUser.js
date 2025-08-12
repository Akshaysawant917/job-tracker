// lib/getLoggedInUser.js
import dbConnect from '@/lib/mongoose';
import User from '@/modals/User';
import { cookies } from 'next/headers';

export async function getLoggedInUser() {
  await dbConnect();

  const cookieStore = await cookies();
  const userId = cookieStore.get('userId')?.value;

  if (!userId) return null;

  const user = await User.findOne({ userId }).select('name email');

  return user || null;
}
