import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import "../globals.css"
export default function Register() {
  return (
    <div className=' h-[750px] pl-2 pr-2  flex items-center  justify-center background'>

      <div className='md:w-[450px]  glass '>
        <div className=' text-center  '>
          <h2 className='md:text-2xl text-md pt-4 font-semibold text-black'>Register</h2>
        </div>
        <form className='my-2' >
          <div className='flex flex-col justify-center items-center'>
            <div className='flex md:w-[350px] justify-between border-b-black border-b-2 mx-5 my-7 py-1 flex-row '>
              <input
                type="text"
                placeholder="Enter your name"
                className='placeholder-black md:text-lg text-sm md:pl-2 bg-transparent outline-none' />
              <Image className="md:w-[27px] md:h-[27px]" src={'/bxs-user.svg'} alt="" width={20} height={20} />
            </div>
            <div className='flex md:w-[350px] justify-between  border-b-black border-b-2 mx-5 my-7 py-1 flex-row '>
              <input
                type="email"
                placeholder="your email adress"
                className='placeholder-black md:text-lg text-sm md:pl-2 bg-transparent outline-none' />
              <Image className="md:w-[27px] md:h-[27px]" src={'/bxs-lock.svg'} alt="" width={20} height={20} />
            </div>
            <div className='flex md:w-[350px] justify-between border-b-black border-b-2 mx-5 my-7 py-1 flex-row '>
              <input
                type="Password"
                placeholder="Create a strong password"
                className='placeholder-black md:text-lg text-sm md:pl-2 bg-transparent outline-none' />
              <Image className="md:w-[27px] md:h-[27px]" src={'/bxs-envelope.svg'} alt="" width={20} height={20} />
            </div>
            <div className='mx-5 bg-teal-950 rounded-md text-center md:text-base text-sm text-white w-[200px] font-semibold my-7 py-3'>
              <button>Register</button>
            </div >
          </div>
          <div className='m-5 py-2 flex items-center justify-center cursor-pointer'>
            <p className='text-sm'>Already have an account? <Link href={"/Login"} >/Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}