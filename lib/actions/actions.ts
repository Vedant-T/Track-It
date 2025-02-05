"use server";

import { connectToDB } from "../config/mongodb";
import Task, { TaskInterface } from "../models/Task";
import { revalidatePath } from "next/cache";

export async function createTask(userId: string, title: string, description: string, dueDate: string, completed: boolean) {
  try {
    await connectToDB();
    const newTask = await Task.create({ userId, title, description, dueDate, completed });
    revalidatePath("/");

    const plainTask = newTask.toObject();
    const { _id, __v, ...task } = plainTask
    return task;
  } catch (error) {
    console.error("Error creating task:", error);
    return null;
  }
}

export async function getTasks(userId: string) {
  try {
    await connectToDB();
    const response = await Task.find({ userId }).select('-__v').lean();

    const tasks = response.map((task) => ({
      ...task,
      _id: task._id.toString()
    }));

    return tasks as unknown as TaskInterface[];
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
}

export async function updateTask(id: string, updates: Partial<TaskInterface>) {
  try {
    await connectToDB();
    const updatedTask = await Task.findOneAndUpdate({ _id: id }, updates).lean();
    revalidatePath("/");

    const plainTask = updatedTask?.toObject();
    const { _id, __v, ...task } = plainTask
    return task;
  } catch (error) {
    console.error("Error updating task:", error);
    return null;
  }
}

export async function deleteTask(id: string) {
  try {
    await connectToDB();
    await Task.findOneAndDelete({ _id: id });
    revalidatePath("/");
    return true;
  } catch (error) {
    console.error("Error deleting task:", error);
    return false;
  }
}

export async function toggleTaskCompletion(id: string, completed: boolean) {
  try {
    await connectToDB();
    const updatedTask = await Task.findOneAndUpdate({ _id: id }, { completed });
    const plainTask = updatedTask.toObject();
    const { _id, __v, ...task } = plainTask
    revalidatePath("/");
    return task;
  } catch (error) {
    console.error("Error toggling task completion:", error);
    return null;
  }
}
