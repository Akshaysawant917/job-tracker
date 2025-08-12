import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
  userId: { type: String, required: true },   // to associate note with user
  title: { type: String, required: true },
  body: { type: String, required: true },
}, { timestamps: true });  // createdAt & updatedAt

export default mongoose.models.Note || mongoose.model('Note', NoteSchema);
