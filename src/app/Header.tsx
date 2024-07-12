"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname()
    return (
        <>

            <div className=' flex flex-row justify-around items-center pt-[20px] pl-[70px]'> 

            
                <div className='flex flex-row justify-center items-center '>
                    <Image className='w-[24.51px] h-[25.08px] ' src='/logo.png' alt="" width={200} height={200} />
                    <h1 className='text-white text-[20px]'>Job Portal</h1>
                </div>
                <div className='flex flex-row gap-8'>
                    <Link className={`${pathname === '/' ? 'text-[#309689] ' : 'text-white'} text-[20px]'`} href='/'>Home</Link>
                    <Link className={`${pathname === '/jobs' ? 'text-[#309689] ' : 'text-white'} text-[20px]'`} href='/Jobs'>Jobs</Link>
                    <Link className={`${pathname === '/aboutus' ? 'text-[#309689]' : 'text-white'} text-[20px]'`} href='/aboutus'>About Us</Link>
                    <Link className={`${pathname === '/contactus' ? 'text-[#309689]' : 'text-white'} text-[20px]'`} href='/contactus'>Contact Us</Link>
                </div>
            <div className='flex flex-row items-center gap-5 '>
                <Link className='text-white text-[20px]' href={"/Login"}>Login</Link>
                <Link className='text-white text-[20px] w-[110px] h-[50px] bg-[#309689] flex flex-row justify-center items-center rounded-xl' href={"/Register"}>Register</Link>
            </div >
             </div>
        </>
    );
};
export default Header;