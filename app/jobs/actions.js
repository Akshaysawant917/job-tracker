'use server';

import dbConnect from '@/lib/mongoose';
import Job from '@/models/Job';
import { redirect } from 'next/navigation';

export async function addJob(formData) {
  await dbConnect();
  const company = formData.get('company');
  const position = formData.get('position');
  const location = formData.get('location');
  const type = formData.get('type');
  const status = formData.get('status');

  await Job.create({
    company,
    position,
    location,
    type,
    status
  });

  redirect('/jobs');
}

export async function updateJob(formData) {
  await dbConnect();
  const id = formData.get('id');
  const company = formData.get('company');
  const position = formData.get('position');
  const location = formData.get('location');
  const type = formData.get('type');
  const status = formData.get('status');

  await Job.findByIdAndUpdate(id, {
    company,
    position,
    location,
    type,
    status
  });

  redirect('/jobs');
}

export async function deleteJob(formData) {
  await dbConnect();
  const id = formData.get('id');
  await Job.findByIdAndDelete(id);
  redirect('/jobs');
}
