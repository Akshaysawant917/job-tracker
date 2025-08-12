import dbConnect from '@/lib/mongoose';
import User from '@/modals/User';
import { cookies } from 'next/headers';
import UpdateProfileForm from '@/components/UpdateProfileForm';

export default async function ProfilePage() {
  await dbConnect();

  const cookieStore = await cookies();
  const userId =  cookieStore.get('userId')?.value;

  if (!userId) {
    return <p>Please log in first.</p>;
  }

  const user = await User.findOne({ userId }).lean();

  if (!user) {
    return <p>User not found.</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      <UpdateProfileForm currentName={user.name || ''} />
    </div>
  );
}
