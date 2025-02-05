import mongoose, { Schema, Document } from "mongoose";

export interface TaskInterface {
  _id: string;
  userId: string;
  title: string;
  description: string;
  dueDate: Date;
  completed: boolean;
}

const TaskSchema: Schema = new Schema(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date },
    completed: { type: Boolean }
  },
  {
    timestamps: false
  }
);

export default mongoose.models.Task || mongoose.model<TaskInterface>("Task", TaskSchema);
