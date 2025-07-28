// models/Session.js
import mongoose from 'mongoose';

const SessionSchema = new mongoose.Schema(
  {
    sessionId: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Session || mongoose.model('Session', SessionSchema);
