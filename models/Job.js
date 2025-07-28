import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
    trim: true
  },
  position: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  userId: { type: String, required: true },
  salary: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    enum: ['full-time', 'part-time', 'contract', 'internship', 'freelance'],
    default: 'full-time'
  },
  status: {
    type: String,
    enum: ['wishlist', 'applied', 'pending', 'interview', 'offer', 'rejected', 'withdrawn'],
    default: 'wishlist'
  },
  workMode: {
    type: String,
    enum: ['remote', 'onsite', 'hybrid'],
    required: true
  },
  applicationDate: {
    type: Date
  },
  jobUrl: {
    type: String,
    default: ''
  },
  notes: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Job || mongoose.model('Job', JobSchema);
