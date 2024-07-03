import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-10'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-white text-[70px] font-bold'>Find Your Dream Job Today!</h1>
                    <p className='text-white'>Connecting Talent with Opportunity: Your Gateway to Career Success</p>
                </div>
                <div className="flex items-center space-x-0 bg-white shadow-md rounded-lg m-0 pl-[25px]">
                    <input
                        type="text"
                        placeholder="Job Title or Company"
                        className="flex-grow m-0 p-2 border-none outline-none focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-l-lg"
                    />
                    <select
                        className="m-0 p-2 border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-none"
                    >
                        <option>Select Location</option>
                    </select>
                    <select
                        className="m-0 p-2 border-l  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-none"
                    >
                        <option>Select Category</option>
                    </select>
                    <button
                        className="bg-[#309689] h-[60px] text-white m-0 p-2 rounded-r-lg hover:bg-green-600 focus:outline-none focus:bg-green-700"
                    >
                        Search Job
                    </button>
                </div>
            </div>
        </>
    )
}

export default Hero