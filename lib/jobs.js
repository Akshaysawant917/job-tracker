import { connectToDb } from "./db";
import Job from "@/models/job";

export async function getAllJobs() {
  await connectToDb();
  const jobs = await Job.find().lean(); // lean() helps strip methods already
  return JSON.parse(JSON.stringify(jobs)); // ensure plain JS objects
}

export async function addJob(data) {
  await connectToDb();
  const job = await Job.create(data);
  return JSON.parse(JSON.stringify(job));
}

export async function deleteJob(id) {
  await connectToDb();
  const deleted = await Job.findByIdAndDelete(id);
  return JSON.parse(JSON.stringify(deleted));
}
