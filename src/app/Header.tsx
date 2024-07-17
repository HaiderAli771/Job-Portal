"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>

            <header>
                <div className="max-w-7xl pt-5 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Image src="/group.png" alt="logo" width={20} height={20} />
                            <h1 className="ml-2 text-white tracking-tight ">StartupLand</h1>
                        </div>

                        <div className="hidden md:flex md:items-center md:gap-6">

                            <Link className={`${pathname === '/' ? 'text-[#309689] ' : 'text-white'} text-[20px] `} href='/'>Home</Link>
                            <Link className={`${pathname === '/Jobs' ? 'text-[#309689] ' : 'text-white'} text-[20px]`} href='/Jobs'>Jobs</Link>
                            <Link className={`${pathname === '/aboutus' ? 'text-[#309689]' : 'text-white'} text-[20px]`} href='/aboutus'>About Us</Link>
                            <Link className={`${pathname === '/contactus' ? 'text-[#309689]' : 'text-white'} text-[20px]`} href='/contactus'>Contact Us</Link>

                        </div>
                        <div className=' md:flex md:flex-row items-center gap-5 hidden  '>
                            <Link className='text-white text-[20px]' href={"/login"}>Login</Link>
                            <Link className='text-white text-[20px] w-[110px] h-[50px] bg-[#309689] flex flex-row justify-center items-center rounded-xl' href={"/Register"}>Register</Link>
                        </div>

                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden flex items-center text-gray-800 hover:text-[#f2d8ae] focus:outline-none focus:text-[#f2d8ae]"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path className='text-[white]' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </div>

                {menuOpen && (
                    <nav className="px-4 py-2 md:hidden bg-transparent text-white border-t border-gray-200 flex flex-col justify-center items-center">
                        <Link className={`${pathname === '/' ? 'text-[#309689] ' : 'text-white'} text-[20px] `} href='/'>Home</Link>
                        <Link className={`${pathname === '/Jobs' ? 'text-[#309689] ' : 'text-white'} text-[20px]`} href='/Jobs'>Jobs</Link>
                        <Link className={`${pathname === '/aboutus' ? 'text-[#309689]' : 'text-white'} text-[20px]`} href='/aboutus'>About Us</Link>
                        <Link className={`${pathname === '/contactus' ? 'text-[#309689]' : 'text-white'} text-[20px]`} href='/contactus'>Contact Us</Link>
                        <Link className='text-white text-[20px] pb-2 ' href={"/Login"}>Login</Link>
                        <Link className='text-white text-[20px]  w-[110px] h-[50px] bg-[#309689] flex flex-row justify-center items-center rounded-xl' href={"/Register"}>Register</Link>

                    </nav>
                )}
            </header >
        </>
    );
};
export default Header;