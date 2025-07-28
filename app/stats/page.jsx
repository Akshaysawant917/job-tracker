import dbConnect from '@/lib/mongoose';
import Job from '@/modals/Job';
import StatsPage from '@/components/StatsPage';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Stats() {
  await dbConnect();

  const cookieStore = cookies();
  const userId = cookieStore.get('userId')?.value;
  if (!userId) redirect('/login');

  const jobs = await Job.find({ userId }).lean();
  return <StatsPage jobs={JSON.parse(JSON.stringify(jobs))} />;
}
