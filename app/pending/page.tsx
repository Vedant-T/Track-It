import { getTasks } from '@/lib/actions/actions';
import { TaskInterface } from '@/lib/models/Task';
import { SignIn } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import React from 'react'
import Tasks from '../components/Tasks/Tasks';

const page = async () => {
  const { userId } = await auth();

  if (!userId) {
    return (
      <>
        <SignIn />
      </>
    );
  }

  const tasks: TaskInterface[] = await getTasks(userId);

  const pendingTasks = tasks.filter((task) => task.completed === false);

  return (
    <>
      <Tasks title="Pending Tasks" userId={userId} tasks={pendingTasks} />
    </>
  )
}

export default page