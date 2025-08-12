'use server';

import dbConnect from '@/lib/mongoose';
import User from '@/modals/User';
import { cookies } from 'next/headers';

export async function updateUserName(newName) {
  console.log('[updateUserName] Function called with newName:', newName);

  await dbConnect();
  console.log('[updateUserName] Database connected');

  const cookieStore = await cookies(); // ✅ await is required for dynamic API
  console.log('[updateUserName] Cookies fetched:', cookieStore.getAll());

  const userId = cookieStore.get('userId')?.value;
  console.log('[updateUserName] Extracted userId:', userId);

  if (!userId) {
    console.warn('[updateUserName] No userId found in cookies');
    return { message: 'Not logged in' };
  }

  const result = await User.findOneAndUpdate(
    { userId },
    { name: newName.trim() },
    { new: true }
  );

  console.log('[updateUserName] MongoDB update result:', result);

  if (!result) {
    console.warn('[updateUserName] No matching user found for userId:', userId);
    return { message: 'User not found' };
  }

  return { message: 'Name updated successfully!' };
}
