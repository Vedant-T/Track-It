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

  const completedTasks = tasks.filter((task) => task.completed === true);

  return (
    <>
      <Tasks title="Completed Tasks" userId={userId} tasks={completedTasks} />
    </>
  )
}

export default page