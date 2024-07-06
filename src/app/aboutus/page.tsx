import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../Header";
const page = () => {
    return (
        <>
            <div className="bg-black pt-5">
                <Header />
                <h1 className="text-white font-bold text-[60px] text-center pt-16 pb-16">About Us</h1>
            </div>
            <div className="flex flex-row justify-center pt-20">
                <h1 className="text-[40px] font-bold w-[580px]">Et nunc ut tempus duis nisl sed massa</h1>
                <p className="w-[680px]">Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc.</p>
            </div>
            <div className="flex flex-col justify-center items-center pt-20 gap-2">
                <Image className='' src='/herobackground.png' alt="" width={1000} height={500} />
                <h1 className="text-[30px] font-bold pt-16">How It&apos;s Works</h1>
                <p className="w-[680px] flex  flex-col items-center justify-center">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id scelerisque rhoncus.</p>
            </div>
            <div className="flex flex-row justify-center items-center gap-10 mt-32 ml-10 mr-10 mb-32">
                <div className="flex flex-col justify-center items-center shadow-sm rounded-md shadow-black w-[400px] h-[250px] pt-10">
                    <Image className='pb-5' src='/contact.png' alt="" width={36} height={36} />
                    <h1 className="text-[30px] font-bold">Create Account</h1>
                    <p className="w-[240px] flex flex-col items-center pb-5">Nunc sed a nisl purus. Nibh dis faucibus proin lacus </p>

                </div>
                <div className="flex flex-col justify-center items-center shadow-sm rounded-md shadow-black w-[400px] h-[250px] pt-10">
                    <Image className='pb-5' src='/file.png' alt="" width={36} height={36} />
                    <h1 className="text-[30px] font-bold">Upload Resume</h1>
                    <p className="w-[240px] flex flex-col items-center pb-5">Nunc sed a nisl purus. Nibh dis faucibus proin lacus</p>

                </div>
                <div className="flex flex-col justify-center items-center shadow-sm rounded-md shadow-black w-[400px] h-[250px] pt-10">
                    <Image className='pb-5' src='/briefcase1.png' alt="" width={36} height={36} />
                    <h1 className="text-[30px] font-bold">Find Jobs</h1>
                    <p className="w-[240px] flex flex-col items-center pb-5">Nunc sed a nisl purus. Nibh dis faucibus proin lacus  </p>

                </div>
                <div className="flex flex-col justify-center items-center shadow-sm rounded-md shadow-black w-[400px] h-[250px] pt-10">
                    <Image className='pb-5' src='/tick.png' alt="" width={36} height={36} />
                    <h1 className="text-[30px] font-bold">Apply Job</h1>
                    <p className="w-[240px] flex flex-col items-center pb-5">Nunc sed a nisl purus. Nibh dis faucibus proin lacus  </p>

                </div>
            </div>
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
                            <h1 className="text-white w-10 h-10 mt-[6px] bg-[#309689] rounded-md text-center text-[20px] content-center">1</h1>                        <div className='flex flex-col justify-center'>
                                <h3 className='text-[20px] text-white w-[280px]'>Elit gravida lorem amet porta risus vitae at</h3>
                                <Link className=' text-[#309689]' href='/viewall'>Learn More</Link>
                            </div>
                        </div>
                        <div className='flex flex-row gap-2 mt-3'>
                            <h1 className="text-white w-10 h-10 mt-[6px] bg-[#309689] rounded-md text-center text-[20px] content-center">2</h1>                        <div className='flex flex-col justify-center'>
                                <h3 className='text-[20px] text-white w-[280px]'>Elit gravida lorem amet porta risus vitae at</h3>
                                <Link className=' text-[#309689]' href='/viewall'>Learn More</Link>
                            </div>
                        </div>
                        <div className='flex flex-row gap-2 mt-3'>
                            <h1 className="text-white w-10 h-10 mt-[6px] bg-[#309689] rounded-md text-center text-[20px] content-center">3</h1>                        <div className='flex flex-col justify-center'>
                                <h3 className='text-[20px] text-white w-[280px]'>Elit gravida lorem amet porta risus vitae at</h3>
                                <Link className=' text-[#309689]' href='/viewall'>Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="flex flex-col justify-center items-center pt-16 ">
                <h1 className="text-[40px] font-bold">Frequently Asked Questions</h1>
                <p>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.</p>
            </div>
            <div className="flex flex-row justify-between items-center bg-[#dafffa] pr-10 rounded-lg mt-20 pt-10 pb-10 ml-20 mr-20">
                <div className="flex flex-row gap-6 pl-10 ">
                    <h1 className="text-[25px] text-extrabold text-[#309689] ">01</h1>
                    <div>
                        <h1 className="text-[20px] font-bold">Can I upload a CV?</h1>
                        <p className="">Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc </p>
                    </div>
                </div>
                <Image className='pb-5' src='/cross.png' alt="" width={40} height={40} />
            </div>
            <div className="flex flex-row justify-between  items-center rounded-lg pr-10 mt-10 pt-4 pb-2 ml-20 mr-20 ">
                <div className="flex flex-row gap-6 pl-10 pr-10">
                    <h1 className="text-[25px] text-extrabold text-[#309689] ">02</h1>
                    <div>
                        <h1 className="text-[20px] font-bold">How long will the recruitment process take?</h1>
                    </div>
                </div>
                <Image className='pb-5 p' src='/add.png' alt="" width={40} height={40} />
            </div>
            <div className="border-[#cecdcd] border-[0.1px] ml-[81px] mr-[81px] "></div>
            <div className="flex flex-row justify-between  items-center rounded-lg pr-10 mt-10 pt-4 pb-2 ml-20 mr-20 ">
                <div className="flex flex-row gap-6 pl-10 pr-10">
                    <h1 className="text-[25px] text-extrabold text-[#309689] ">03</h1>
                    <div>
                        <h1 className="text-[20px] font-bold">Do you recruit for Graduates, Apprentices and Students?</h1>
                    </div>
                </div>
                <Image className='pb-5 p' src='/add.png' alt="" width={40} height={40} />
            </div>
            <div className="border-[#cecdcd] border-[0.1px] ml-[81px] mr-[81px] "></div>
            <div className="flex flex-row justify-between  items-center rounded-lg pr-10 mt-10 pt-4 pb-2 ml-20 mr-20 ">
                <div className="flex flex-row gap-6 pl-10 pr-10">
                    <h1 className="text-[25px] text-extrabold text-[#309689] ">04</h1>
                    <div>
                        <h1 className="text-[20px] font-bold">What does the recruitment and selection process involve?</h1>
                    </div>
                </div>
                <Image className='pb-5' src='/add.png' alt="" width={40} height={40} />
            </div>
            <div className="border-[#cecdcd] border-[0.1px] ml-[81px] mr-[81px] "></div>
            <div className="flex flex-row justify-between  items-center rounded-lg pr-10 mt-10 pt-4 pb-2 ml-20 mr-20 ">
                <div className="flex flex-row gap-6 pl-10 pr-10">
                    <h1 className="text-[25px] text-extrabold text-[#309689] ">05</h1>
                    <div>
                        <h1 className="text-[20px] font-bold">Can I receive notifications for any future jobs that may interest me?</h1>
                    </div>
                </div>
                <Image className='pb-5' src='/add.png' alt="" width={40} height={40} />
            </div>
            <div className="border-[#cecdcd] border-[0.1px] ml-[81px] mr-[81px] "></div>

            <div className="flex flex-row justify-center gap-10">
                <Image className='pb-5 pt-24' src='/quality.png' alt="" width={600} height={600} />
                <div  >
                    <h1 className="w-[471px] text-[40px] font-bold pb-10 pt-32">We&apos;re Only Working With The Best</h1>
                    <p className="w-[600px] pb-10">Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. </p>
                    <div className="flex flex-row gap-[39px]">
                        <div className="flex flex-row">
                            <Image className='pb-5' src='/bestjobs.png' alt="" width={60} height={60} />
                            <h1 className="text-[20px] pl-2 font-bold">Quality Jobs</h1>
                        </div>
                        <div className="flex flex-row">
                            <Image className='pb-5' src='/resume.png' alt="" width={60} height={60} />
                            <h1 className="text-[20px] pl-2 font-bold">Resume Builder</h1>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <Image className='pb-5' src='/bestjobs.png' alt="" width={60} height={60} />
                        <h1 className="text-[20px]  font-bold">Top Companies</h1>
                        <Image className='pb-5 p' src='/topcompany.png' alt="" width={60} height={60} />
                        <h1 className="text-[20px]  font-bold">Top Talent</h1>
                    </div>
                </div>

            </div>
        </>
    )
}

export default page