import React from 'react'
import Header from '../Header'
import Image from 'next/image'
import Map from './Map'
import Footer from '../Footer'
import Timing from "@/components/Timing"
import SectionHeader from '@/components/sectionHeader'
const page = () => {
    return (
        <>
            <div className="bg-black">
                <Header />
                <h1 className="text-white font-bold text-lg md:text-[60px] text-center pt-16 pb-16">Contact Us</h1>
            </div>
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12">
                <div className=" md:p-8 p-2 flex flex-col  xl:flex-row">
                    <div className="md:w-1/2  p-2 md:p-8">
                        <SectionHeader className='md:text-4xl  text-md font-bold pb-4  md:w-[500px]' title='You Will Grow, You Will Succeed. We Promise That' descritionClassName='text-gray-600 mb-8 md:text-sm text-xs font-normal pt-4' description=' Pellentesque acu facilisis nunc mi proin. Dignissim mattis in lectus tincidunt tincidunt ultricies. Diam convallis morbi pellentesque adipiscing.' />

                        <div className='flex flex-col md:flex-row justify-between'>
                            <div>
                                <Timing descritionClassName=' md:text-[16px] text-sm font-normal text-green-500' className='md:text-xl text-base font-semibold mb-2' title='Call for inquiry' description='+257 388-6895' ImgSrc='/phone.png' />

                                <Timing descritionClassName=' md:text-[16px] txet-sm font-normal text-green-500' className='md:text-xl text-md font-semibold mb-2' title='Send us email' description='kramulous@sbcglobal.net' ImgSrc='/mail.png' />
                            </div>

                            <div className='md:pl-20 xl:w-[285px]'>
                                <Timing descritionClassName=' md:text-[16px] text-sm font-normal text-green-500 md:w-[200px]' className='md:text-xl text-md font-semibold mb-2' title='Opening hours' description='Mon - Fri: 10AM - 10PM' ImgSrc='/clock.png' />
                                <Timing descritionClassName=' md:text-[16px] text-sm font-normal text-green-500 md:w-[200px]' className='md:text-xl text-md font-semibold mb-2' title='Office' description='19 North Road Piscataway, NY 08854' ImgSrc='/map.png' />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[600px] bg-blue-50 p-2 md:p-8 rounded-lg">
                        <h2 className="md:text-2xl text-sm font-semibold mb-4">Contact Info</h2>
                        <form className="md:space-y-4">
                            <div className="md:flex md:flex-row flex-col justify-between">
                                <div>
                                    <h1 className='pl-1 text-sm md:text-base pb-2'>First Name</h1>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className=" p-3 border text-sm md:text-base w-full md:w-60 border-gray-300 rounded-lg"
                                    />
                                </div>
                                <div>
                                    <h1 className='pl-1 text-sm md:text-base pb-2 pt-2'>Last Name</h1>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className=" p-3 border w-full md:w-60 text-sm md:text-base border-gray-300 rounded-lg"
                                    />
                                </div>
                            </div>
                            <div>
                                <h1 className='pl-1 text-sm md:text-base pb-2 pt-2'>Email Address</h1>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full p-3 border text-sm md:text-base border-gray-300 rounded-lg"
                                />
                            </div>
                            <div>
                                <h1 className='pl-1 text-sm md:text-base pb-2 pt-2'>Message</h1>
                                <textarea
                                    placeholder="Your Message"
                                    className="w-full p-3 border text-sm md:text-base border-gray-300 rounded-lg"
                                />
                            </div>
                            <button
                                type="submit"
                                className=" bg-[#309689] text-white text-sm md:text-base p-3 rounded-lg">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div >
            </div >
            <Map />
            <div className='flex flex-col md:flex-row items-center pb-10 pt-10 md:justify-between gap-5 md:gap-10 md:pt-20 md:pb-20 md:pl-36 md:pr-36'>
                <Image  src='/zoom.png ' alt="" width={100} height={60} />
                <Image src='/tinder.png' alt="" width={100} height={60} />
                <Image src='/dribble.png' alt="" width={100} height={60} />
                <Image src='/asana.png' alt="" width={100} height={60} />
            </div >
            <Footer />
        </>
    )
}
export default page