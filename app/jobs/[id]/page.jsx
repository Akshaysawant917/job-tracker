import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import dbConnect from '@/lib/mongoose';
import Job from '@/modals/Job';
import JobDetails from '@/components/JobDetails';

export default async function JobDetailsPage({ params }) {
  const { id } = params;
  const cookieStore = cookies();
  const userId = cookieStore.get('userId')?.value;

  if (!userId) redirect('/login');

  await dbConnect();

  const job = await Job.findOne({ _id: id, userId }).lean();

  return (
    <div className="min-h-screen  py-10 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <JobDetails job={job ? JSON.parse(JSON.stringify(job)) : null} />
    </div>
  );
}
