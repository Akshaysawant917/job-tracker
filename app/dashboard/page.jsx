import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import dbConnect from '@/lib/mongoose';
import Job from '@/modals/Job';
import Dashboard from '@/components/Dashboard';
import StatsPage from '@/components/StatsPage';


export default async function JobsPage() {
  const cookieStore = await cookies();
  const userId = cookieStore.get('userId')?.value;

  // 🚫 Redirect if not logged in
  if (!userId) {
    redirect('/login');
  }

  // ✅ Connect to DB and fetch only this user's jobs
  await dbConnect();
  let jobs = await Job.find({ userId }).sort({ updatedAt: -1 }).lean()
  jobs = JSON.parse(JSON.stringify(jobs));

  return (<>
    <Dashboard jobs={jobs} />
    <StatsPage jobs={jobs} />;
    </>
  );
}
