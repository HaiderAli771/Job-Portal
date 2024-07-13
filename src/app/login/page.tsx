import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
const Login = () => {
    return (
        <>
            <div className='w-full bg flex items-center h-screen justify-center tracking-wider  bg-[#309689] backgroundimg'>
                <div className='w-[38%] h-[70%] text-sm glass content-center'>
                    <div className='w-full text-center my-3'>
                        <h2 className='text-2xl text-black font-medium' >Login</h2>
                    </div>

                    <form className='my-2'>
                        <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                            <input type="text"
                                className='w-11/12 bg-transparent outline-none placeholder-black'
                                placeholder='Enter Your Email'
                            />
                            <div>
                                <Image src="/email.png" alt="" width={30} height={30} />
                            </div>
                        </div>
                        <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                            <input type="password"
                                className='w-11/12 bg-transparent outline-none placeholder-black'
                                placeholder='Enter Your Password'
                            />
                            <div>
                                <Image src="/lock.png" alt="" width={30} height={30} />
                            </div>
                        </div>

                        <div className='mx-5 flex cursor-pointer justify-end tracking-wider text-sm items-center'>

                        </div>

                        <div className='mx-5 my-7 py-2'>
                            <button className='bg-black w-full h-[35px] rounded-sm text-white'>Login</button>
                        </div>
                        <Link href='/' className='mx-5 my-5 py-2 flex items-center justify-center cursor-pointer'>
                            <p>Dont have account <Link href={"/Register"}>/ Register</Link></p>
                        </Link>
                    </form>

                </div>

            </div >
        </>
    )
}

export default Login