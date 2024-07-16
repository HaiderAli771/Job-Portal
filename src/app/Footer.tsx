import React from 'react';
import SectionHeader from '@/components/sectionHeader';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4 pt-[30px]">
                <div className="flex md:pl-0 md:pr-0 pl-2 pr-2 flex-col md:text-start text-center md:flex-row  ">
                    <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
                        <SectionHeader descritionClassName='text-[15px] mt-4 font-normal' className='text-[20px] font-extrabold ' title='Job' description='Quis enim pellentesque viverra tellus eget malesuada facilisis. Congue nibh vivamus aliquet nunc mauris d...' />
                    </div>
                    <div className="flex flex-col items-center w-full sm:w-1/4 mb-6 sm:mb-0">
                        <h6 className="text-lg font-bold pr-[16px] ">Company</h6>
                        <div className="mt-4 flex flex-col gap-3">
                            <Link className="text-sm" href='' >About Us</Link>
                            <Link className="text-sm" href=''>Our Team</Link>
                            <Link className="text-sm" href=''>Partners</Link>
                            <Link className="text-sm" href=''>For Candidates</Link>
                            <Link className="text-sm" href=''>For Employers</Link>
                        </div>
                    </div>
                    <div className="w-full flex flex-col sm:w-1/4 mb-6 sm:mb-0">
                        <h6 className="text-lg font-bold">Job Categories</h6>
                        <div className="mt-4 flex flex-col gap-3">
                            <Link className="text-sm" href=''>Telecommunications</Link>
                            <Link className="text-sm" href=''>Hotels & Tourism</Link>
                            <Link className="text-sm" href=''>Construction</Link>
                            <Link className="text-sm" href=''>Education</Link>
                            <Link className="text-sm " href=''>Financial Services</Link>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
                        <SectionHeader descritionClassName='text-sm mt-4 font-normal gap-0' className='text-lg font-bold gap-0' title='Newsletter' description='Eu nunc pretium vitae platea. Non netus elementum vulputate' />
                        <div className="flex flex-col gap-2 mt-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full border-white border-[1px] rounded-lg bg-black p-2"
                            />
                            <button className="rounded-xl w-full bg-[#309689] text-white py-2  mt-2">
                                Subscribe now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center mt-8 text-center text-sm">
                    <p>© Copyright Job Portal 2024.</p>
                    <div className="flex justify-center gap-4 pr-2">
                        <Link href="#" className="hover:underline">Privacy Policy</Link>
                        <Link href="#" className="hover:underline">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;