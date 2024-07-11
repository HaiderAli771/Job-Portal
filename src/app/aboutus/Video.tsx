import React from 'react'
import Image from 'next/image'
import VideoText from "@/components/VideoText"
const Video = () => {
    return (
        <>
            <div className="pl-20 pr-20">
                <div
                    className=" relative h-screen rounded-md bg-cover bg-center flex flex-col justify-center opacity-100 "
                    style={{ backgroundImage: 'url("/worker(1).png")' }}
                >
                    <div className="flex flex-col justify-center items-center">
                        <Image className='pb-5 ' src='/play.png' alt="" width={80} height={80} />
                        <h1 className="text-[40px] font-bold text-white w-[450px] text-center">Good Life Begins With A Good Company</h1>
                    </div>
                    <div className="absolute bottom-0 w-full px-4 py-2 pb-8 bg-black bg-opacity-70 flex flex-row gap-10 justify-center">
                        <div className='flex flex-row gap-2 mt-3'>
                            <VideoText title='1' />
                            <VideoText title='2' />
                            <VideoText title='3' />

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Video