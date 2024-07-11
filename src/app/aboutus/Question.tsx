import React from 'react'
import QuestionSection from "@/components/QuestionSection"
import SectionHeader from '@/components/sectionHeader'
import Image from 'next/image'
const Question = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center pt-16 ">
                <SectionHeader descritionClassName='items-center text-[16px] font-normal pt-5' className='text-[40px] font-bold text-center' title='Frequently Asked Questions' description='At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.' />
            </div>
            <div className="flex flex-row justify-between items-center bg-[#dafffa] pr-10 rounded-lg mt-20 pt-10 pb-10 ml-20 mr-20">
                <div className="flex flex-row gap-6 pl-10 ">
                    <SectionHeader className='text-[25px] text-extrabold text-[#309689]' title='01' />
                    <div>
                        <SectionHeader descritionClassName=' text-[16px] font-normal' className='text-[20px] font-bold ' title='Can I upload a CV?' description='Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc' />
                    </div>
                </div>
                <Image className='pb-5' src='/cross.png' alt="" width={40} height={40} />
            </div>
            <QuestionSection title='02' description='How long will the recruitment process take?' />
            <QuestionSection title='03' description='Do you recruit for Graduates, Apprentices and Students?' />
            <QuestionSection title='04' description='What does the recruitment and selection process involve?' />
            <QuestionSection title='05' description='Can I receive notifications for any future jobs that may interest me?' />
        </div>
    )
}

export default Question