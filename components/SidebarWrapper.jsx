// components/SidebarWrapper.jsx
import { cookies } from 'next/headers';
import SidebarClient from './SidebarClient';
import dbConnect from '@/lib/mongoose';
import User from '@/modals/User';

async function getLoggedInUser() {
  await dbConnect();
  const cookieStore = cookies();
  const userId = cookieStore.get('userId')?.value;
  if (!userId) return null;
  return await User.findOne({ userId }).lean();
}

export default async function SidebarWrapper() {
  const user = await getLoggedInUser();
  return <SidebarClient user={user} />;
}
