import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    title?: string;
    description?: string;
    className?: string;
    descritionClassName?: string;
    h1?: string;
    h1ClassName?: string;
    name?: string;
    reviewText?: string;
    ImgSrc?: any;


}

export const index = ({ title, description, className, descritionClassName, h1, h1ClassName, name, reviewText, ImgSrc }: Props) => {
    return (
        <>

            <div className="flex flex-row justify-center gap-20">

                <div className="bg-white pl-2 pr-2  rounded-xl overflow-hidden">
                    <Image className='' src={ImgSrc} alt="" width={600} height={200} />
                    <div className="p-4">
                        <div className={`flex flex-col ${className} `}>
                            <h1 className={`${h1ClassName}`}>{h1}</h1>
                            <p className='text-black text-left gap-0 '>30 March 2024</p>
                            <p className='md:text-xl text-left text-base font-medium md:font-bold mt-2 md:w-[600px] gap-0'>{title}</p>
                        </div>
                        <Link href="#" className="text-[#309689] text-left mt-4 block">Read more &rarr;</Link>
                    </div>
                </div>

            </div >
        </>
    )
}

export default index;