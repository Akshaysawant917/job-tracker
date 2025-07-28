import dbConnect from '@/lib/mongoose';
import Job from '@/models/Job';
import JobsDashboard from '@/components/JobsDashboard';
import { deleteJob } from './actions';

export default async function JobsPage() {
  await dbConnect();
  let jobs = await Job.find().lean();
  jobs = JSON.parse(JSON.stringify(jobs));

  return (
    <JobsDashboard jobs={jobs} deleteJob={deleteJob} />
  );
}
