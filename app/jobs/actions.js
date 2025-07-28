'use server';

import dbConnect from '@/lib/mongoose';
import Job from '@/models/Job';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function addJob(formData) {
  await dbConnect();

  const cookieStore = cookies();
  const userId = cookieStore.get('userId')?.value;

  if (!userId) {
    throw new Error('Unauthorized: user not logged in');
  }

  const company = formData.get('company');
  const position = formData.get('position');
  const location = formData.get('location');
  const type = formData.get('type');
  const status = formData.get('status');
  const workMode = formData.get('workMode');

  const salary = formData.get('salary') || '';
  const jobUrl = formData.get('jobUrl') || '';
  const notes = formData.get('notes') || '';
  const applicationDate = formData.get('applicationDate') || null;

  await Job.create({
    company,
    position,
    location,
    type,
    status,
    workMode,
    salary,
    jobUrl,
    notes,
    applicationDate: applicationDate ? new Date(applicationDate) : undefined,
    userId,
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
  const workMode = formData.get('workMode');

  const salary = formData.get('salary') || '';
  const jobUrl = formData.get('jobUrl') || '';
  const notes = formData.get('notes') || '';
  const applicationDate = formData.get('applicationDate') || null;

  await Job.findByIdAndUpdate(id, {
    company,
    position,
    location,
    type,
    status,
    workMode,
    salary,
    jobUrl,
    notes,
    applicationDate: applicationDate ? new Date(applicationDate) : undefined,
  });

  redirect('/jobs');
}


export async function deleteJob(formData) {
  await dbConnect();
  const id = formData.get('id');
  await Job.findByIdAndDelete(id);
  redirect('/jobs');
}
