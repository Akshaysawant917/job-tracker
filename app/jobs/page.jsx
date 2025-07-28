import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import dbConnect from '@/lib/mongoose';
import Job from '@/models/Job';
import JobsDashboard from '@/components/JobsDashboard';
import { deleteJob } from './actions';

export default async function JobsPage() {
  const cookieStore = cookies();
  const userId = cookieStore.get('userId')?.value;

  // 🚫 Redirect if not logged in
  if (!userId) {
    redirect('/login');
  }

  // ✅ Connect to DB and fetch only this user's jobs
  await dbConnect();
  let jobs = await Job.find({ userId }).lean(); // 👈 filter by userId
  jobs = JSON.parse(JSON.stringify(jobs));

  return (
    <JobsDashboard jobs={jobs} deleteJob={deleteJob} />
  );
}
