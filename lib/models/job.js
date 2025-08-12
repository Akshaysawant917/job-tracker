import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Job title is required'],
    trim: true,
  },
  company: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  salary: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['applied', 'interview', 'offered', 'rejected', 'withdrawn'],
    default: 'applied',
  },
  jobType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'],
    default: 'Full-time',
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
  appliedDate: {
    type: Date,
    default: Date.now,
  },
  notes: {
    type: String,
    trim: true,
  },
  jobUrl: {
    type: String,
    trim: true,
  },
  contactPerson: {
    type: String,
    trim: true,
  },
  contactEmail: {
    type: String,
    trim: true,
    lowercase: true,
  },
}, {
  timestamps: true,
});

JobSchema.index({ status: 1 });
JobSchema.index({ company: 1 });
JobSchema.index({ appliedDate: -1 });
JobSchema.index({ createdAt: -1 });

export default mongoose.models.Job || mongoose.model('Job', JobSchema);