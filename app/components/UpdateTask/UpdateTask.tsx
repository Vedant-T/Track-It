"use client"
import { createTask, updateTask } from '@/lib/actions/actions'
import React, { useState } from 'react'

interface Props {
    setIsUpdateTask: React.Dispatch<React.SetStateAction<boolean>>,
    details: {
        _id: string;
        title: string;
        description: string;
        completed: boolean
    }
}

const UpdateTask = ({ setIsUpdateTask, details }: Props) => {
    const [title, setTitle] = useState(details.title)
    const [description, setDescription] = useState(details.description)
    const [date, setDate] = useState("")
    const [completed, setCompleted] = useState(details.completed)

    const handleChange = (field: string) => (e: any) => {
        switch (field) {
            case "title":
                setTitle(e.target.value)
                break
            case "description":
                setDescription(e.target.value)
                break
            case "date":
                setDate(e.target.value)
                break
            case "completed":
                setCompleted(e.target.checked)
                break
            default:
                break
        }
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const formattedDate = date ? new Date(date) : undefined;

        await updateTask(details._id, {title, description, dueDate: formattedDate, completed} )

        setIsUpdateTask(false)
    }

    const handleOutsideClick = (e: any) => {
        setIsUpdateTask(false)
    }

    return (
        <div onClick={handleOutsideClick} className='absolute top-0 left-0 h-screen w-screen flex justify-center items-center bg-[#00000052] z-10'>
            <form onClick={(e)=>{
                e.stopPropagation()
            }} className='w-4/12 p-8 bg-[#0A1828] rounded-2xl max-lg:w-8/12' onSubmit={handleSubmit}>
                <h1 className='text-2xl font-semibold'>Update Task</h1>
                <div className='relative my-6 font-semibold'>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        required
                        id='title'
                        value={title}
                        name='title'
                        onChange={handleChange("title")}
                        placeholder='e.g. Go for a walk in park'
                    />
                </div>

                <div className='relative my-6 font-semibold'>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id='description'
                        value={description}
                        name='description'
                        rows={3}
                        onChange={handleChange("description")}
                        placeholder='e.g. Walk for 30 mins in the town park'
                    />
                </div>

                <div className='relative my-6 font-semibold'>
                    <label htmlFor="date">Date</label>
                    <input
                        id='date'
                        value={date}
                        name='date'
                        type='date'
                        onChange={handleChange("date")}
                    />
                </div>

                <div className='relative my-6 font-semibold flex justify-between items-center'>
                    <label htmlFor="completed">Toggle Completed</label>
                    <input
                        className='w-[initial]'
                        id='completed'
                        value={completed.toString()}
                        name='completed'
                        type='checkbox'
                        defaultChecked={completed}
                        onChange={handleChange("completed")}
                    />
                </div>

                <div className='rounded-2xl bg-green-400 w-1/3 text-white font-semibold ml-auto'>
                    <button className='w-full h-full py-2' type='submit'>Update</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateTask