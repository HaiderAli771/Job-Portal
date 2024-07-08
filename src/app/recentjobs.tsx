import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from './Footer'
import News from './news'
const recentjobs = () => {
    return (
        <>
            <div className='flex flex-row justify-between bg-white pl-10 pr-10 mb-16 mt-10'>
                <h1 className='font-bold text-[30px]'>Recent jobs available</h1>
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
                        <h3 className='text-[20px]'>Forward Security Director</h3>
                        <p className='text-[13px] font-medium'>Bauch, Schuppe and Schulist Co</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between gap-2 pt-5'>
                    <div className='flex flex-row gap-2'>
                        <Image className='w-[24px] h-[24px]   ' src='/briefcase(2) 2.png' alt="" width={200} height={200} />
                        <p className='text-[#6C757D] mr-4'>Hotel and Tourism</p>
                        <Image className='w-[24px] h-[24px]  ' src='/clock (1).png' alt="" width={200} height={200} />
                        <p className='text-[#6C757D] mr-4'>Full Time</p>
                        <Image className='w-[24px] h-[24px]  ' src='/wallet.png' alt="" width={200} height={200} />
                        <p className='text-[#6C757D] mr-4'>$40000-$42000</p>
                        <Image className='w-[24px] h-[24px]  ' src='/map.png' alt="" width={200} height={200} />
                        <p className='text-[#6C757D] mr-4'>New-York, USA</p>
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
                        <h3 className='text-[20px]'>FRegional Creative Facilitator</h3>
                        <p className='text-[13px] font-medium'>Wisozk - Becker Co</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between gap-2 pt-5'>
                    <div className='flex flex-row gap-2'>
                        <Image className='w-[24px] h-[24px]   ' src='/briefcase(2) 2.png' alt="" width={200} height={200} />
                        <p className='text-[#6C757D] mr-4'>Media</p>
                        <Image className='w-[24px] h-[24px]  ' src='/clock (1).png' alt="" width={200} height={200} />
                        <p className='text-[#6C757D] mr-4'>Part Time</p>
                        <Image className='w-[24px] h-[24px]  ' src='/wallet.png' alt="" width={200} height={200} />
                        <p className='text-[#6C757D] mr-4'>$28000-$32000</p>
                        <Image className='w-[24px] h-[24px]  ' src='/map.png' alt="" width={200} height={200} />
                        <p className='text-[#6C757D] mr-4'>Los- Angeles, USA</p>
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
                        <h3 className='text-[20px]'>Internal Integration Planner</h3>
                        <p className='text-[13px] font-medium'>Mraz, Quigley and Feest Inc.</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between gap-2 pt-5'>
                    <div className='flex flex-row gap-2'>
                        <Image className='w-[24px] h-[24px]   ' src='/briefcase(2) 2.png' alt="" width={200} height={200} />
                        <p className='text-[#6C757D] mr-4'>Construction</p>
                        <Image className='w-[24px] h-[24px]  ' src='/clock (1).png' alt="" width={200} height={200} />
                        <p className='text-[#6C757D] mr-4'>Full Time</p>
                        <Image className='w-[24px] h-[24px]  ' src='/wallet.png' alt="" width={200} height={200} />
                        <p className='text-[#6C757D] mr-4'>$48000-$50000</p>
                        <Image className='w-[24px] h-[24px]  ' src='/map.png' alt="" width={200} height={200} />
                        <p className='text-[#6C757D] mr-4'>Texas, USA</p>
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
                        <h3 className='text-[20px]'>District Intranet Director</h3>
                        <p className='text-[13px] font-medium'>VonRueden - Weber Co</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between gap-2 pt-5'>
                    <div className='flex flex-row gap-2'>
                        <Image className='w-[24px] h-[24px]   ' src='/briefcase(2) 2.png' alt="" width={200} height={200} />
                        <p className='text-[#6C757D] mr-4'>Commerce</p>
                        <Image className='w-[24px] h-[24px]  ' src='/clock (1).png' alt="" width={200} height={200} />
                        <p className='text-[#6C757D] mr-4'>Full Time</p>
                        <Image className='w-[24px] h-[24px]  ' src='/wallet.png' alt="" width={200} height={200} />
                        <p className='text-[#6C757D] mr-4'>$42000-$48000</p>
                        <Image className='w-[24px] h-[24px]  ' src='/map.png' alt="" width={200} height={200} />
                        <p className='text-[#6C757D] mr-4'>Florida, USA</p>
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
                        <h3 className='text-[20px]'>Corporate Tactics Facilitator</h3>
                        <p className='text-[13px] font-medium'>Cormier, Turner and Flatley Inc</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between gap-2 pt-5'>
                    <div className='flex flex-row gap-2'>
                        <Image className='w-[24px] h-[24px]   ' src='/briefcase(2) 2.png' alt="" width={200} height={200} />
                        <p className='text-[#6C757D] mr-4'>Commerce</p>
                        <Image className='w-[24px] h-[24px]  ' src='/clock (1).png' alt="" width={200} height={200} />
                        <p className='text-[#6C757D] mr-4'>Full Time</p>
                        <Image className='w-[24px] h-[24px]  ' src='/wallet.png' alt="" width={200} height={200} />
                        <p className='text-[#6C757D] mr-4'>$38000-$40000</p>
                        <Image className='w-[24px] h-[24px]  ' src='/map.png' alt="" width={200} height={200} />
                        <p className='text-[#6C757D] mr-4'>Boston, USA</p>
                    </div>
                    <Link className='flex flex-row justify-center items-center rounded-lg text-white w-[100px] h-[40px]  bg-[#309689]' href='/jobdetail'>Job Detail</Link>
                </div>
            </div>
            <div className='flex flex-col items-center gap-10 h-[690px] justify-center bg-[#cffff8]'>
                <h1 className='font-bold text-[25px]'>Browse by Category</h1>
                <p>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.</p>
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
                    <h1 className='text-[50px] font-bold w-[551px]'>Good Life Begins With A Good Company</h1>
                    <p className='w-[600px]'>Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean. Vulputate praesent congue faucibus in euismod feugiat euismod volutpat</p>
                    <div className='flex flex-row items-center gap-10'>
                        <Link className='flex flex-row justify-center items-center rounded-lg text-white w-[110px] h-[50px]  bg-[#309689]' href='/jobdetail'>Search Jobs</Link>
                        <Link className=' underline text-[#309689]' href='/viewall'>View All</Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center gap-[20px] pt-14'>
                <div className='pl-6 pr-6'>
                    <h1 className='text-[#309689] text-[40px] font-bold'>12K+</h1>
                    <h3 className='text-black font-medium text-[24px]'>Client Worldwide</h3>
                    <p className='w-[306px]'>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum </p>
                </div>
                <div className='pl-6 pr-6'>
                    <h1 className='text-[#309689] text-[40px] font-bold'>20K+</h1>
                    <h3 className='text-black font-medium text-[24px]'>Active Resume</h3>
                    <p className='w-[306px]'>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum </p>
                </div>
                <div className='pl-6 pr-6'>
                    <h1 className='text-[#309689] text-[40px] font-bold'>18K+</h1>
                    <h3 className='text-black font-medium text-[24px]'>Company</h3>
                    <p className='w-[306px]'>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum </p>
                </div>
            </div>
            <div className='flex flex-row bg-black pl-16 pr-16 m-[150px] rounded-xl'>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-[50px] font-bold text-white w-[470px] mt-11 '>Create A Better Future For Yourself</h1>
                    <p className='text-white w-[600px]'>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.Blandit a massa elementum id scelerisque rhoncus
                    </p>
                    <Link className='flex mb-11 flex-row justify-center items-center rounded-lg text-white w-[110px] h-[50px]  bg-[#309689]' href='/searchjobs'>Search Jobs</Link>
                </div>

                <Image className=' ' src='/worker.png' alt="" width={600} height={420} />
            </div>
            <div className='bg-[#cffff8] flex flex-col justify-center '>
                <div className='flex flex-col justify-center items-center gap-5 mb-14 mt-14'>
                    <h1 className='text-black text-[40px] font-bold'>Testimonial From Our Customers</h1>
                    <p>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id...</p>
                </div>
                <div className='flex flex-row justify-center mb-14'>
                    <div className='flex flex-col ml-[21px]  mr-[21px]'>
                        <div className='flex flex-col md:flex md:flex-row xl:justify-center lg:justify-center gap-3'>
                            <div className='flex flex-col md:w-[374px] md:rounded-3xl rounded-3xl bg-white '>
                                <div className='flex flex-col gap-[20px] md:rounded-3xl rounded-3xl border-black shadow-2xl p-5'>
                                    <Image className='w-[154px]' src='/Stars.png' alt="" width={200} height={200} />
                                    <h1 className='text-[30px] text-black font-bold'>Amazing services</h1>
                                    <p className='md:w-[330px]'>I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.</p>
                                    <div className='flex flex-row gap-2'>
                                        <Image className='w-[64px]' src='/Avatar.png' alt="" width={200} height={200} />
                                        <div className='flex flex-col justify-center'>
                                            <h5 className='font-bold'>Marco Kihn</h5>
                                            <h4 className='text-[#888787]'>Happy Customer</h4>
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
                                    <h1 className='text-[30px] text-black font-bold'>Everything simple </h1>
                                    <p className='md:w-[330px]'>I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.</p>
                                    <div className='flex flex-row gap-2'>
                                        <Image className='w-[64px]' src='/Avatar (3).png' alt="" width={200} height={200} />
                                        <div className='flex flex-col justify-center'>
                                            <h5 className='font-bold'>Kristin Hester</h5>
                                            <h4 className='text-[#888787]'>Happy Customer</h4>
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
                                    <h1 className='text-[30px] text-black font-bold'>Awesome, thank you!</h1>
                                    <p className='md:w-[330px]'>I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.</p>
                                    <div className='flex flex-row gap-2'>
                                        <Image className='w-[64px]' src='/Avatar (1).png' alt="" width={200} height={200} />
                                        <div className='flex flex-col justify-center'>
                                            <h5 className='font-bold'>Zion Cisneros</h5>
                                            <h4 className='text-[#888787]'>Happy Customer</h4>
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