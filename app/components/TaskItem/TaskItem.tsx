"use client";

import formatDate from '@/app/utils/formatDate';
import React, { useState } from 'react'
import { deleteTask, toggleTaskCompletion } from '@/lib/actions/actions';
import AddTask from '../AddTask/AddTask';
import UpdateTask from '../UpdateTask/UpdateTask';

interface Props {
    userId: string
    _id: string
    title: string
    description: string
    dueDate: Date
    isCompleted: boolean
}

const handleDelete = async (_id: string) => {
    deleteTask(_id);
}

const handleToggleComplete = async (_id: string, isCompleted: boolean) => {
    toggleTaskCompletion(_id, isCompleted);
}

const TaskItem = ({ _id, title, description, dueDate, isCompleted, userId }: Props) => {
    const [isUpdateTask, setIsUpdateTask] = useState(false);

    const handleEdit = async (_id: string) => {
        setIsUpdateTask(true)
    }

    return (
        <div className='py-5 px-4 rounded-2xl bg-[#011e31] border-2 border-[#0c4a48] h-[16rem] flex flex-col gap-2'>
            {isUpdateTask && <UpdateTask setIsUpdateTask={setIsUpdateTask}  details={{ _id, title, description, completed: isCompleted }} />}
            <h1 className='text-2xl font-semibold'>{title}</h1>
            <p className='text-gray-400'>{description}</p>
            <p className='mt-auto'>{formatDate(dueDate)}</p>
            <div className="flex items-center gap-5">
                {isCompleted ? <button onClick={() => handleToggleComplete(_id, !isCompleted)} className='inline-block py-2 px-4 rounded-3xl bg-green-500'>Completed</button> : <button onClick={() => handleToggleComplete(_id, !isCompleted)} className='inline-block py-2 px-4 rounded-3xl bg-red-500'>Incomplete</button>}
                <button onClick={() => handleEdit(_id)} className='ml-auto'><i className="ri-pencil-line text-2xl text-gray-400"></i></button>
                <button onClick={() => handleDelete(_id)} className='delete'><i className="ri-delete-bin-7-fill text-2xl text-gray-400"></i></button>
            </div>
        </div>
    )
}

export default TaskItem