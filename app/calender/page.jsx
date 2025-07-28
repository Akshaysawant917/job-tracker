import dbConnect from '@/lib/mongoose';
import Job from '@/models/Job';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import CalendarView from '@/components/CalendarView';

export default async function CalendarPage() {
  await dbConnect();
  const cookieStore = cookies();
  const userId = cookieStore.get('userId')?.value;

  if (!userId) redirect('/login');

  const jobs = await Job.find({ userId, applicationDate: { $ne: null } }).lean();
  return <CalendarView jobs={JSON.parse(JSON.stringify(jobs))} />;
}
