import React from 'react'
import Header from '../Header'
import Image from 'next/image'
import Map from './Map'
import Footer from '../Footer'
import Timing from "@/components/Timing"
const page = () => {
    return (
        <>
            <div className="bg-black pt-5">
                <Header />
                <h1 className="text-white font-bold text-[60px] text-center pt-16 pb-16">Contact Us</h1>
            </div>
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12">
                <div className=" p-8 flex">
                    <div className="w-1/2 p-8">
                        <h1 className="text-4xl font-bold mb-4 w-[500px]">You Will Grow, You Will Succeed. We Promise That</h1>
                        <p className="text-gray-600 mb-8">
                            Pellentesque acu facilisis nunc mi proin. Dignissim mattis in lectus tincidunt tincidunt ultricies. Diam convallis morbi pellentesque adipiscing.
                        </p>
                        <div className='flex flex-row  justify-between'>
                            <div>
                                <Timing descritionClassName=' text-[16px] font-normal text-green-500' className='text-xl font-semibold mb-2' title='Call for inquiry' description='+257 388-6895' ImgSrc='/phone.png' />

                                <Timing descritionClassName=' text-[16px] font-normal text-green-500' className='text-xl font-semibold mb-2' title='Send us email' description='kramulous@sbcglobal.net' ImgSrc='/mail.png' />
                            </div>

                            <div>
                                <Timing descritionClassName=' text-[16px] font-normal text-green-500' className='text-xl font-semibold mb-2' title='Opening hours' description='Mon - Fri: 10AM - 10PM' ImgSrc='/clock.png' />
                                <Timing descritionClassName=' text-[16px] font-normal text-green-500' className='text-xl font-semibold mb-2' title='Office' description='19 North Road Piscataway, NY 08854' ImgSrc='/map.png' />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 bg-blue-50 p-8 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
                        <form className="space-y-4">
                            <div className="flex justify-between">
                                <div>
                                    <h1 className='pl-1'>First Name</h1>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className=" p-3 border w-80 border-gray-300 rounded-lg"
                                    />
                                </div>
                                <div>
                                    <h1 className='pl-1'>Last Name</h1>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className=" p-3 border w-80 border-gray-300 rounded-lg"
                                    />
                                </div>
                            </div>
                            <div>
                                <h1 className='pl-1'>Email Address</h1>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full p-3 border  border-gray-300 rounded-lg"
                                />
                            </div>
                            <div>
                                <h1 className='pl-1'>Message</h1>
                                <textarea
                                    placeholder="Your Message"
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <button
                                type="submit"
                                className=" bg-[#309689] text-white p-3 rounded-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div >
            </div >
            <Map />
            <div className='flex flex-row justify-between gap-10 pt-20 pb-20 pl-36 pr-36'>
                <Image src='/zoom.png' alt="" width={100} height={60} />
                <Image src='/tinder.png' alt="" width={100} height={60} />
                <Image src='/dribble.png' alt="" width={100} height={60} />
                <Image src='/asana.png' alt="" width={100} height={60} />
            </div >
            <Footer />
        </>
    )
}

export default page