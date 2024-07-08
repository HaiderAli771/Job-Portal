import React from 'react'

const Map = () => {
    return (
        <>
            <div className='flex flex-row justify-center bg-[#F9FAFB] '>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.4998382041113!2d-74.45978492427604!3d40.5747211460089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b70e5ba6f4a3%3A0x91802ff4dff8866d!2sFox%20%26%20Foxx%20Crossings!5e0!3m2!1sen!2s!4v1720348930289!5m2!1sen!2s" className='w-[1300px] rounded-2xl h-[400px] ' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </>
    )
}

export default Map