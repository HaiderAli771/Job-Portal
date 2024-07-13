import React from 'react'
import Image from 'next/image'
import VideoText from "@/components/VideoText"
const Video = () => {
    return (
        <>
            <div className="pl-20 pr-20">
                <div className='flex flex-row gap-2 justify-center mt-3'>
                    {/* <div className="bottom-0 w-full px-4 py-2 pb-8 bg-black bg-opacity-70 flex flex-row gap-10 justify-center"> */}
                    <iframe className='content-center' width="1100" height="500" src="https://www.youtube.com/embed/qsJo9SdgvwM?si=7JARJb1b8dD7aS3S" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    {/* <VideoText title='1' />
                        <VideoText title='2' />
                        <VideoText title='3' /> */}

                </div>
            </div >
            {/* </div > */}
        </>
    )
}

export default Video 