import dbConnect from './mongodb';
import Job from '../models/Job';

export const jobOperations = {
  async getAllJobs() {
    await dbConnect();
    try {
      const jobs = await Job.find({}).sort({ createdAt: -1 }).lean();
      return JSON.parse(JSON.stringify(jobs));
    } catch (error) {
      throw new Error(`Failed to fetch jobs: ${error.message}`);
    }
  },

  async getJobById(id) {
    await dbConnect();
    try {
      const job = await Job.findById(id).lean();
      if (!job) {
        throw new Error('Job not found');
      }
      return JSON.parse(JSON.stringify(job));
    } catch (error) {
      throw new Error(`Failed to fetch job: ${error.message}`);
    }
  },

  async createJob(jobData) {
    await dbConnect();
    try {
      const job = await Job.create(jobData);
      return JSON.parse(JSON.stringify(job));
    } catch (error) {
      throw new Error(`Failed to create job: ${error.message}`);
    }
  },

  async updateJob(id, jobData) {
    await dbConnect();
    try {
      const job = await Job.findByIdAndUpdate(
        id,
        { ...jobData, updatedAt: new Date() },
        { new: true, runValidators: true }
      ).lean();
      
      if (!job) {
        throw new Error('Job not found');
      }
      return JSON.parse(JSON.stringify(job));
    } catch (error) {
      throw new Error(`Failed to update job: ${error.message}`);
    }
  },

  async deleteJob(id) {
    await dbConnect();
    try {
      const job = await Job.findByIdAndDelete(id);
      if (!job) {
        throw new Error('Job not found');
      }
      return { success: true, message: 'Job deleted successfully' };
    } catch (error) {
      throw new Error(`Failed to delete job: ${error.message}`);
    }
  },

  async getJobStats() {
    await dbConnect();
    try {
      const stats = await Job.aggregate([
        {
          $group: {
            _id: null,
            total: { $sum: 1 },
            applied: {
              $sum: { $cond: [{ $eq: ['$status', 'applied'] }, 1, 0] }
            },
            interviews: {
              $sum: { $cond: [{ $eq: ['$status', 'interview'] }, 1, 0] }
            },
            offers: {
              $sum: { $cond: [{ $eq: ['$status', 'offered'] }, 1, 0] }
            },
            rejected: {
              $sum: { $cond: [{ $eq: ['$status', 'rejected'] }, 1, 0] }
            },
            withdrawn: {
              $sum: { $cond: [{ $eq: ['$status', 'withdrawn'] }, 1, 0] }
            }
          }
        }
      ]);

      const result = stats.length > 0 ? stats[0] : {
        total: 0,
        applied: 0,
        interviews: 0,
        offers: 0,
        rejected: 0,
        withdrawn: 0
      };

      delete result._id;
      return result;
    } catch (error) {
      throw new Error(`Failed to fetch stats: ${error.message}`);
    }
  },
};