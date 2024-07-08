import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from './Footer'
import News from './news'
import SectionHeader from '@/components/sectionHeader'
const recentjobs = () => {
    return (
        <>
            <div className='flex flex-row justify-between items-center bg-white pl-10 pr-10 mb-16 mt-10'>
                <SectionHeader className=' font-bold text-[30px] pt-10' title='Recent jobs available' />
                <Link className='underline text-[#309689]' href='/viewall'>View All</Link>
            </div>
            <div className='p-10 m-10  rounded-2xl shadow-md'>
                <div className='flex flex-row justify-between pl-2'>
                    <div className=' w-24 rounded-lg bg-[#a0dad2] text-white'>
                        <p className='flex flex-row justify-center items-center'>10 min ago</p>
                    </div>
                    <Image className='w-[24px] h-[24px] ' src='/Icon.png' alt="" width={200} height={200} />
                </div>
                <div className='flex flex-row gap-2 mt-3'>
                    <Image className='w-[40px] h-[40px] ' src='/Logo (5).png' alt="" width={200} height={200} />
                    <div className='flex flex-col justify-center'>
                        <SectionHeader descritionClassName='text-[13px] font-medium gap-0' className=' text-[20px] gap-0' title='Forward Security Director' description='Bauch, Schuppe and Schulist Co' />

                    </div>
                </div>
                <div className='flex flex-row items-center justify-between gap-2 pt-5'>
                    <div className='flex flex-row gap-2'>
                        <Image className='w-[24px] h-[24px]   ' src='/briefcase(2) 2.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Hotel And Tourism' />
                        <Image className='w-[24px] h-[24px]  ' src='/clock (1).png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0' title='Full Time' />
                        <Image className='w-[24px] h-[24px]  ' src='/wallet.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='$40000-$42000' />
                        <Image className='w-[24px] h-[24px]  ' src='/map.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='New-York, USA' />
                    </div>
                    <Link className='flex flex-row justify-center items-center rounded-lg text-white w-[100px] h-[40px] bg-[#309689]' href='/jobdetail'>Job Detail</Link>
                </div>
            </div>
            <div className='p-10 m-10  rounded-2xl shadow-md'>
                <div className='flex flex-row justify-between pl-2'>
                    <div className=' w-24 rounded-lg bg-[#a0dad2] text-white'>
                        <p className='flex flex-row justify-center items-center'>12 min ago</p>
                    </div>
                    <Image className='w-[24px] h-[24px] ' src='/Icon.png' alt="" width={200} height={200} />
                </div>
                <div className='flex flex-row gap-2 mt-3'>
                    <Image className='w-[40px] h-[40px] ' src='/Logo (6).png' alt="" width={200} height={200} />
                    <div className='flex flex-col justify-center'>
                        <SectionHeader descritionClassName='text-[13px] font-medium gap-0' className=' text-[20px] gap-0' title='FRegional Creative Facilitator' description='Wisozk - Becker Co' />
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between gap-2 pt-5'>
                    <div className='flex flex-row gap-2'>
                        <Image className='w-[24px] h-[24px]   ' src='/briefcase(2) 2.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Media' />
                        <Image className='w-[24px] h-[24px]  ' src='/clock (1).png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Part Time' />
                        <Image className='w-[24px] h-[24px]  ' src='/wallet.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='$28000-$32000' />
                        <Image className='w-[24px] h-[24px]  ' src='/map.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Los- Angeles, USA' />
                    </div>
                    <Link className='flex flex-row justify-center items-center rounded-lg text-white w-[100px] h-[40px] bg-[#309689]' href='/jobdetail'>Job Detail</Link>
                </div>
            </div>
            <div className='p-10 m-10  rounded-2xl shadow-md'>
                <div className='flex flex-row justify-between pl-2'>
                    <div className=' w-24 rounded-lg bg-[#a0dad2] text-white'>
                        <p className='flex flex-row justify-center items-center'>15 min ago</p>
                    </div>
                    <Image className='w-[24px] h-[24px] ' src='/Icon.png' alt="" width={200} height={200} />
                </div>
                <div className='flex flex-row gap-2 mt-3'>
                    <Image className='w-[40px] h-[40px] ' src='/Logo (7).png' alt="" width={200} height={200} />
                    <div className='flex flex-col justify-center'>
                        <SectionHeader descritionClassName='text-[13px] font-medium gap-0' className=' text-[20px] gap-0' title='Internal Integration Planner' description='Mraz, Quigley and Feest Inc.' />
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between gap-2 pt-5'>
                    <div className='flex flex-row gap-2'>
                        <Image className='w-[24px] h-[24px]   ' src='/briefcase(2) 2.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Construction' />
                        <Image className='w-[24px] h-[24px]  ' src='/clock (1).png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Full Time' />
                        <Image className='w-[24px] h-[24px]  ' src='/wallet.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='$48000-$50000' />
                        <Image className='w-[24px] h-[24px]  ' src='/map.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Texas, USA' />
                    </div>
                    <Link className='flex flex-row justify-center items-center rounded-lg text-white w-[100px] h-[40px] bg-[#309689]' href='/jobdetail'>Job Detail</Link>
                </div>
            </div>
            <div className='p-10 m-10  rounded-2xl shadow-md'>
                <div className='flex flex-row justify-between pl-2'>
                    <div className=' w-24 rounded-lg bg-[#a0dad2] text-white'>
                        <p className='flex flex-row justify-center items-center'>24 min ago</p>
                    </div>
                    <Image className='w-[24px] h-[24px] ' src='/Icon.png' alt="" width={200} height={200} />
                </div>
                <div className='flex flex-row gap-2 mt-3'>
                    <Image className='w-[40px] h-[40px] ' src='/Logo (8).png' alt="" width={200} height={200} />
                    <div className='flex flex-col justify-center'>
                        <SectionHeader descritionClassName='text-[13px] font-medium gap-0' className=' text-[20px] gap-0' title='District Intranet Director' description='VonRueden - Weber Co' />
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between gap-2 pt-5'>
                    <div className='flex flex-row gap-2'>
                        <Image className='w-[24px] h-[24px]   ' src='/briefcase(2) 2.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Commerce' />
                        <Image className='w-[24px] h-[24px]  ' src='/clock (1).png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Full Time' />
                        <Image className='w-[24px] h-[24px]  ' src='/wallet.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='$42000-$48000' />
                        <Image className='w-[24px] h-[24px]  ' src='/map.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Florida, USA' />
                    </div>
                    <Link className='flex flex-row justify-center items-center rounded-lg text-white w-[100px] h-[40px] bg-[#309689]' href='/jobdetail'>Job Detail</Link>
                </div>
            </div>
            <div className='p-10 m-10  rounded-2xl shadow-md'>
                <div className='flex flex-row justify-between pl-2'>
                    <div className=' w-24 rounded-lg bg-[#a0dad2] text-white'>
                        <p className='flex flex-row justify-center items-center'>26 min ago</p>
                    </div>
                    <Image className='w-[24px] h-[24px] ' src='/Icon.png' alt="" width={200} height={200} />
                </div>
                <div className='flex flex-row gap-2 mt-3'>
                    <Image className='w-[40px] h-[40px] ' src='/Logo (9).png' alt="" width={200} height={200} />
                    <div className='flex flex-col justify-center'>
                        <SectionHeader descritionClassName='text-[13px] font-medium gap-0' className=' text-[20px] gap-0' title='Corporate Tactics Facilitator' description='Cormier, Turner and Flatley Inc' />
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between gap-2 pt-5'>
                    <div className='flex flex-row gap-2'>
                        <Image className='w-[24px] h-[24px]   ' src='/briefcase(2) 2.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Commerce' />
                        <Image className='w-[24px] h-[24px]  ' src='/clock (1).png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Full Time' />
                        <Image className='w-[24px] h-[24px]  ' src='/wallet.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='$38000-$40000' />
                        <Image className='w-[24px] h-[24px]  ' src='/map.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Boston, USA' />
                    </div>
                    <Link className='flex flex-row justify-center items-center rounded-lg text-white w-[100px] h-[40px]  bg-[#309689]' href='/jobdetail'>Job Detail</Link>
                </div>
            </div>
            <div className='flex flex-col items-center gap-10 h-[690px] justify-center bg-[#cffff8]'>
                <SectionHeader descritionClassName=' text-center font-normal text-[17px]' className='  text-[25px] font-bold text-center' title='Browse by Category' description='At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.' />
                <div className='flex flex-row gap-5 '>
                    <div className='flex flex-col justify-center items-center gap-6 w-[260px] h-[205px] bg-white shadow-xl rounded-xl'>
                        <Image className='w-[40px] h-[40px] ' src='/g516.png' alt="" width={200} height={200} />
                        <h1>Agriculture</h1>
                        <p className='  w-24 rounded-lg bg-[#a0dad2] text-white flex flex-row justify-center items-center'>1254 Jobs</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-6 w-[260px] h-[205px] bg-white shadow-xl rounded-xl'>
                        <Image className='w-[40px] h-[40px] ' src='/agriculture 2.png' alt="" width={200} height={200} />
                        <h1>Metal Production</h1>
                        <p className='  w-24 rounded-lg bg-[#a0dad2] text-white flex flex-row justify-center items-center'>816 Jobs</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-6 w-[260px] h-[205px] bg-white shadow-xl rounded-xl'>
                        <Image className='w-[40px] h-[40px] ' src='/agriculture 2 (1).png' alt="" width={200} height={200} />
                        <h1>Commerce</h1>
                        <p className='  w-24 rounded-lg bg-[#a0dad2] text-white flex flex-row justify-center items-center'>2082 Jobs</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-6 w-[260px] h-[205px] bg-white shadow-xl rounded-xl'>
                        <Image className='w-[40px] h-[40px] ' src='/agriculture 2 (2).png' alt="" width={200} height={200} />
                        <h1>Construction</h1>
                        <p className='  w-24 rounded-lg bg-[#a0dad2] text-white flex flex-row justify-center items-center'>1582 Jobs</p>
                    </div>
                </div>
                <div className='flex flex-row justify-center gap-5'>
                    <div className='flex flex-col justify-center items-center gap-6 w-[260px] h-[205px] bg-white shadow-xl rounded-xl'>
                        <Image className='w-[40px] h-[40px] ' src='/agriculture 2 (3).png' alt="" width={200} height={200} />
                        <h1>Hotels & Tourism</h1>
                        <p className='  w-24 rounded-lg bg-[#a0dad2] text-white flex flex-row justify-center items-center'>1582 Jobs</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-6 w-[260px] h-[205px] bg-white shadow-xl rounded-xl'>
                        <Image className='w-[40px] h-[40px] ' src='/g2817.png' alt="" width={200} height={200} />
                        <h1>Education</h1>
                        <p className='  w-24 rounded-lg bg-[#a0dad2] text-white flex flex-row justify-center items-center'>2082 Jobs</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-6 w-[260px] h-[205px] bg-white shadow-xl rounded-xl'>
                        <Image className='w-[40px] h-[40px] ' src='/agriculture 2 (4).png' alt="" width={200} height={200} />
                        <h1>Financial Services</h1>
                        <p className='  w-24 rounded-lg bg-[#a0dad2] text-white flex flex-row justify-center items-center'>1582 Jobs</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-6 w-[260px] h-[205px] bg-white shadow-xl rounded-xl'>
                        <Image className='w-[40px] h-[40px] ' src='/agriculture 2 (5).png' alt="" width={200} height={200} />
                        <h1>Transport</h1>
                        <p className='  w-24 rounded-lg bg-[#a0dad2] text-white flex flex-row justify-center items-center'>2082 Jobs</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-14 pt-20 justify-center pl-6 pr-6'>
                <Image src='/group.png' alt="" width={400} height={425} />
                <div className='flex flex-col gap-8 justify-center'>
                    <SectionHeader descritionClassName='font-normal text-[16px] w-[600px]' className=' text-[50px] font-bold w-[551px]' title='Good Life Begins With A Good Company' description='Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean. Vulputate praesent congue faucibus in euismod feugiat euismod volutpat' />
                    <div className='flex flex-row items-center gap-10'>
                        <Link className='flex flex-row justify-center items-center rounded-lg text-white w-[110px] h-[50px]  bg-[#309689]' href='/jobdetail'>Search Jobs</Link>
                        <Link className=' underline text-[#309689]' href='/viewall'>View All</Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center gap-[20px] pt-14'>
                <div className='pl-6 pr-6'>
                    <SectionHeader h1='12K+' h1ClassName='text-[#309689] text-[40px] font-bold' descritionClassName=' font-normal text-[17px] w-[306px]' className='  text-black font-medium text-[24px]' title='Client Worldwide' description='At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum' />
                </div>
                <div className='pl-6 pr-6'>
                    <SectionHeader h1='20K+' h1ClassName='text-[#309689] text-[40px] font-bold' descritionClassName=' font-normal text-[17px] w-[306px]' className='  text-black font-medium text-[24px]' title='Active Resume' description='At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum ' />
                </div>
                <div className='pl-6 pr-6'>
                    <SectionHeader h1='18K+' h1ClassName='text-[#309689] text-[40px] font-bold' descritionClassName=' font-normal text-[17px] w-[306px]' className='  text-black font-medium text-[24px]' title='Company' description='At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum ' />
                </div>
            </div>
            <div className='flex flex-row bg-black pl-16 pr-16 m-[150px]  rounded-xl'>
                <div className='flex flex-col gap-8'>
                    <SectionHeader descritionClassName='text-white w-[600px] font-normal text-[16px]' className='text-[50px] font-bold text-white w-[470px] pt-11 ' title='Create A Better Future For Yourself' description='At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.Blandit a massa elementum id scelerisque rhoncus' />

                    <Link className='flex mb-11 flex-row justify-center items-center rounded-lg text-white w-[110px] h-[50px]  bg-[#309689]' href='/searchjobs'>Search Jobs</Link>
                </div>

                <Image className=' ' src='/worker.png' alt="" width={600} height={420} />
            </div>
            <div className='bg-[#cffff8] flex flex-col justify-center '>
                <div className='flex flex-col justify-center items-center gap-5 mb-14 mt-14'>
                    <SectionHeader descritionClassName=' text-center font-normal text-[16px]' className='  text-black text-[40px] font-bold text-center' title='Testimonial From Our Customers' description='At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id...' />
                </div>
                <div className='flex flex-row justify-center mb-14'>
                    <div className='flex flex-col ml-[21px]  mr-[21px]'>
                        <div className='flex flex-col md:flex md:flex-row xl:justify-center lg:justify-center gap-3'>
                            <div className='flex flex-col md:w-[374px] md:rounded-3xl rounded-3xl bg-white '>
                                <div className='flex flex-col gap-[20px] md:rounded-3xl rounded-3xl border-black shadow-2xl p-5'>
                                    <Image className='w-[154px]' src='/Stars.png' alt="" width={200} height={200} />
                                    <SectionHeader descritionClassName='text-[16px] gap-0 md:w-[330px] font-normal' className=' text-[30px] text-black font-bold' title='Amazing services' description='I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.' />
                                    <div className='flex flex-row gap-2'>
                                        <Image className='w-[64px]' src='/Avatar.png' alt="" width={200} height={200} />
                                        <div className='flex flex-col justify-center'>
                                            <SectionHeader descritionClassName='text-[16px] text-[#888787] gap-0 font-normal' className='font-bold gap-0' title='Marco Kihn' description='Happy Customer' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col ml-[21px]  mr-[21px]'>
                        <div className='flex flex-col md:flex md:flex-row xl:justify-center lg:justify-center gap-3'>
                            <div className='flex flex-col md:w-[374px] md:rounded-3xl rounded-3xl bg-white '>
                                <div className='flex flex-col gap-[20px] md:rounded-3xl rounded-3xl border-black shadow-2xl p-5'>
                                    <Image className='w-[154px]' src='/Stars.png' alt="" width={200} height={200} />
                                    <SectionHeader descritionClassName='text-[16px] gap-0 md:w-[330px] font-normal' className=' text-[30px] text-black font-bold' title='Everything simple' description='I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.' />
                                    <div className='flex flex-row gap-2'>
                                        <Image className='w-[64px]' src='/Avatar (3).png' alt="" width={200} height={200} />
                                        <div className='flex flex-col justify-center'>
                                            <SectionHeader descritionClassName='text-[16px] text-[#888787] gap-0 font-normal' className='font-bold gap-0' title='Kristin Hester' description='Happy Customer' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col  ml-[21px]  mr-[21px]'>
                        <div className='flex flex-col md:flex md:flex-row xl:justify-center lg:justify-center gap-3'>
                            <div className='flex flex-col md:w-[374px] md:rounded-3xl rounded-3xl bg-white '>
                                <div className='flex flex-col gap-[20px] md:rounded-3xl rounded-3xl border-black shadow-2xl p-5'>
                                    <Image className='w-[154px]' src='/Stars.png' alt="" width={200} height={200} />
                                    <SectionHeader descritionClassName='text-[16px] gap-0 md:w-[330px] font-normal' className=' text-[30px] text-black font-bold' title='Awesome, thank you!' description='I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.' />
                                    <div className='flex flex-row gap-2'>
                                        <Image className='w-[64px]' src='/Avatar (1).png' alt="" width={200} height={200} />
                                        <div className='flex flex-col justify-center'>
                                            <SectionHeader descritionClassName='text-[16px] text-[#888787] gap-0 font-normal' className='font-bold gap-0' title='Zion Cisneros' description='Happy Customer' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <News />
            <Footer />
        </>
    )
}

export default recentjobs