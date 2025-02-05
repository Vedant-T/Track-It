"use client"

import React, { useState } from 'react'
import TaskItem from '../TaskItem/TaskItem';
import AddTask from '../AddTask/AddTask';

interface Props {
  userId: string;
  title: string;
  tasks: any[];
}

const Tasks = ({ userId, title, tasks }: Props) => {
  const [isAddTask, setIsAddTask] = useState(false)

  return (<>
    {isAddTask && <AddTask userId={userId} setIsAddTask={setIsAddTask} />}
    <div className='w-full p-8 bg-[#0A1828] border-2 border-[#0c4a48] rounded-2xl overflow-y-auto ml-[25px] scrollbar-custom max-md:ml-[0.5rem]'>
      <h1 className='font-bold text-2xl relative after:content-[""] after:absolute after:bottom-[-0.5rem] after:left-0 after:h-[0.2rem] after:w-[3rem] after:bg-[#BFA181] after:rounded-[0.5rem]'>{title}</h1>
      <div className="my-[2rem] grid">
        {tasks.map((task, index) => (
          <TaskItem
            userId={userId}
            _id={task._id}
            key={index}
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
            isCompleted={task.completed}
          />
        ))}

        <button onClick={() => setIsAddTask(true)} className='flex items-center justify-center gap-2 h-[16rem] font-semibold cursor-pointer rounded-2xl border-2 border-dashed border-[#0c4a48] text-gray-400 hover:bg-[#011e31] hover:text-white transition-all duration-500 ease-in-out'>
          <i className="ri-add-line"></i>
          Add New Task
        </button>
      </div>
    </div>
  </>
  )
}

export default Tasks