import React from 'react'
import Image from 'next/image'

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

const index = ({ title, description, className, descritionClassName, h1, h1ClassName, name, reviewText, ImgSrc }: Props) => {
    return (
        <>
            <div className='flex flex-row justify-center mb-14'>
                <div className='flex flex-col ml-[21px]  mr-[21px]'>
                    <div className='flex flex-col md:flex md:flex-row xl:justify-center lg:justify-center gap-3'>
                        <div className='flex flex-col md:w-[374px] md:rounded-3xl rounded-3xl bg-white '>
                            <div className='flex flex-col gap-[10px] pt-10  md:rounded-3xl rounded-3xl border-black shadow-2xl p-5'>
                                <Image className='w-[154px]' src='/Stars.png' alt="" width={200} height={200} />
                                <div className='flex flex-row gap-2'>
                                    <div className={`flex flex-col gap-4 ${className} `}>
                                        <h3 className=' text-[30px] gap-[20px] text-black font-bold'>{title}</h3>
                                        <p className='text-[16px] gap-0 md:w-[330px] font-normal'>I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you. </p>
                                        <div className='flex flex-row gap-[5px] items-center pt-10'>
                                            <Image className='w-[64px]' src={ImgSrc} alt="" width={200} height={200} />
                                            <div>
                                                <h1 className='text-[20px] font-bold '>{name}</h1>
                                                <p className='font-normal text-[15px]'>Happy Client</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='flex flex-col justify-center'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index