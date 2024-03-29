import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
  },

  language: {
    type: String,
    required: true,
  },

  stack: {
    type: String,
    required: true,
  },

  appType: {
    type: String,
    required: true,
  },

  addedDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },

  status: {
    type: String,
  },

  userId: {
    type: mongoose.ObjectId,
    required: true,
  },
});

export const Task =
  mongoose.models.tasks || mongoose.model("tasks", ProjectSchema);
