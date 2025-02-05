"use client"

import { useClerk, UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';


const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false)

    const router = useRouter();
    const pathname = usePathname();
    const { signOut } = useClerk();

    const { user } = useUser();

    console.log(user?.firstName)

    const {firstName, lastName, imageUrl} = user || {
        firstName: '',
        lastName: '',
        imageUrl: ''
    }

    const handleClick = (link: string) => {
        router.push(link);
    }

    return (
        <div className={`flex flex-col justify-between relative bg-[#0A1828] w-1/5 h-full max-md:w-3/5 border-2 border-[#0c4a48] rounded-2xl text-gray-400 max-md:fixed max-md:h-[calc(100vh-1rem)] max-md:z-50 ${collapsed ? "-translate-x-[100%]" : "translate-x-0"} transition-all duration-500 ease-in-out`}>
            <button className='absolute top-5 right-[-36px] rounded-tr-2xl rounded-br-2xl bg-[#0A1828] border-r-2 border-b-2 border-[#0c4a48] border-t-2 p-2 hidden max-md:flex' onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <i className="ri-menu-line"></i> : <i className="ri-close-line"></i>}
            </button>
            <div className='m-5 py-4 px-3 relative cursor-pointer border-2 border-[#0A1828] rounded-2xl text-gray-100 flex items-center font-medium hover:bg-[#020c17] hover:border-[#0c4a48] transition-all duration-500 ease-in-out hover:border-2 gap-3 flex-col group'>
                <div className="flex-shrink-0 inline-block overflow-hidden transition-all duration-500 ease-in-out border-0 rounded-full w-[70px] h-[70px]">
                    <Image className='border-0 rounded-full transition-all duration-500 ease-in-out group-hover:scale-110' src={imageUrl} width={80} height={80} alt="profile" />
                </div>
                <div className='absolute z-20 top-0 w-full h-full '>
                    <UserButton/>
                </div>
                <h1 className='capitalize flex flex-col justify-center items-center leading-6'>
                    <span>{firstName}</span>
                    <span>{lastName}</span>
                </h1>
            </div>

            <ul className="nav-items">
                <li className={`relative cursor-pointer flex gap-3 my-1 px-4 py-2 pl-8 max-lg:pl-2 border-y-2 border-[#0A1828] hover:bg-[#020c17] transition-all duration-500 ease-in-out ${pathname === "/" ? "bg-[#020c17] border-[#0c4a48] text-white after:content-[''] after:absolute after:right-0 after:h-[40%] after:w-3 after:bg-[#BFA181] after:top-1/2 after:-translate-y-1/2 after:width-[80%] after:rounded-l-full after:transition-all after:duration-500 after:ease-in-out" : ""}`} onClick={() => handleClick("/")}>
                    <i className="ri-home-2-fill"></i>
                    <Link href="/">All Tasks</Link>
                </li>

                <li className={`relative cursor-pointer flex gap-3 my-1 px-4 py-2 pl-8 max-lg:pl-2 border-y-2 border-[#0A1828] hover:bg-[#020c17] transition-all duration-500 ease-in-out ${pathname === "/completed" ? "bg-[#020c17] border-[#0c4a48] text-white after:content-[''] after:absolute after:right-0 after:h-[40%] after:w-3 after:bg-[#BFA181] after:top-1/2 after:-translate-y-1/2 after:width-[80%] after:rounded-l-full after:transition-all after:duration-500 after:ease-in-out" : ""}`} onClick={() => handleClick("/completed")}>
                    <i className="ri-check-fill"></i>
                    <Link href="/completed">Completed!</Link>
                </li>

                <li className={`relative cursor-pointer flex gap-3 my-1 px-4 py-2 pl-8 max-lg:pl-2 border-y-2 border-[#0A1828] hover:bg-[#020c17] transition-all duration-500 ease-in-out ${pathname === "/pending" ? "bg-[#020c17] border-[#0c4a48] text-white after:content-[''] after:absolute after:right-0 after:h-[40%] after:w-3 after:bg-[#BFA181] after:top-1/2 after:-translate-y-1/2 after:width-[80%] after:rounded-l-full after:transition-all after:duration-500 after:ease-in-out" : ""}`} onClick={() => handleClick("/pending")}>
                    <i className="ri-list-check-3"></i>
                    <Link href="/pending">Pending...</Link>
                </li>
            </ul>

            <button onClick={() => signOut()} className='flex gap-2 justify-center items-center py-2 my-5 
            border-2 border-[#0A1828] hover:bg-[#020c17] transition-all duration-500 ease-in-out hover:border-y-[#0c4a48] hover:text-[#fff] font-semibold'>
                <i className="ri-logout-box-r-line"></i>
                <span>Logout</span>
            </button>
        </div>
    )
}

export default Sidebar