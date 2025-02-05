import Tasks from "./components/Tasks/Tasks";
import { SignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { getTasks } from "@/lib/actions/actions";
import { TaskInterface } from "@/lib/models/Task";

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    return (
      <>
        <SignIn />
      </>
    );
  }

  const tasks: TaskInterface[] = await getTasks(userId);  

  return (
    <>
      <Tasks title="All Tasks" userId={userId} tasks={tasks}/>
    </>
  );
}
