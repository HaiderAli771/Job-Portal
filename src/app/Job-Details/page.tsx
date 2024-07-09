import React from 'react'
import Header from '../Header'
import Link from 'next/link'
import Image from 'next/image'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import SectionHeader from '@/components/sectionHeader'
export default function Page() {
    return (
     <>
     <div className="bg-black pt-5">
                <Header />
                <h1 className="text-white font-bold text-[60px] text-center pt-16 pb-16">Jobs Details</h1>
            </div>
    <div className='mt-5 m-14  md:w-auto'>
        <div className="flex justify-between  ">
         <button className='text-[#309689] rounded-2xl px-2  bg-teal-100 ' >10 min ago</button>
         <Image src="/Icon.svg" alt="icon" width={30} height={30} />
         </div>
          <div className='flex gap-6 items-start   mt-9'>
          <Image className="items-start" src="/Logo 3.svg" alt="Logo" width={50} height={50} />
              <SectionHeader className='text-3xl gap-6 font-bold' title= 'Corporate Solutions Executive' descriptionClassName='text-sm font-normal' description='Leffler and Sons'/> 
         </div>
         <div className="flex justify-between text-[#6C757D] mt-12 ">
                <div className="flex gap-3 tracking-tight ">
                  <div className="flex gap-2">
                    <Image src="/briefcase.svg" alt="briefcase" width={20} height={20} />
                    <p>Commerce</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src="/clock.svg" alt="clock" width={20} height={20} />
                    <p>Full Time</p>
                  </div>       
                  <div className="flex gap-2">
                    <Image src="/g139.svg" alt="file" width={20} height={20} />
                    <p>$40000 - $42000</p>
                  </div> 
                  <div className="flex gap-2">
                    <Image src="/map-pin.svg" alt="map-pin" width={20} height={20} />
                    <p>New-York, USA </p>
                  </div>
                  </div>
                  <div>
                    <Link  className=" rounded-xl px-[46px] py-2 hover:bg-[#0d5e54] bg-[#309689] text-white" href={"/Apply-now"}>Apply now</Link>
                  </div>
                </div>
           {/* job descripition */}
           <div className='div flex flex-col-2 gap-28' > 
                    <div>
                 <div className='mt-14 leading-10 w-[980px]'>
                    <h1 className='font-bold text-2xl '>Job description</h1>
                    <p className='leading-6 pb-4'>Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc. Et nunc ut tempus duis nisl sed massa.Ornare varius faucibus nisi vitae vitae cras ornare.</p>
                    <p className='leading-6'> Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta eget blandit euismod sem nunc Tortor gravida amet amet sapien mauris massa.Tortor varius nam maecenas duis blandit elit sit sit. Ante mauris morbi diam habitant donec.</p>
                 </div>                 
                 <div className='mt-5 leading-9'>
                    <h1 className='text-2xl font-bold mb-7' >key Responsibilities</h1>
                    <div className='flex gap-3'>
                        <Image src={"/check.svg"} alt="check" width={20} height={20} />
                        <p>Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augu</p>
                    </div>                   
                    <div className='flex gap-3'>
                        <Image src={"/check.svg"} alt="check" width={20} height={20} />
                        <p>Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in. </p>
                    </div>                    
                    <div className='flex gap-3'>
                        <Image src={"/check.svg"} alt="check" width={20} height={20} />
                        <p>Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing cursus fames</p>
                    </div>                    
                    <div className='flex gap-3'>
                        <Image src={"/check.svg"} alt="check" width={20} height={20} />
                        <p>Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta</p>
                    </div>   
                    <div className='flex gap-3'>
                        <Image src={"/check.svg"} alt="check" width={20} height={20} />
                        <p>Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta</p>
                    </div>
                    <div className='flex gap-3'>
                        <Image src={"/check.svg"} alt="check" width={20} height={20} />
                        <p>Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta</p>
                    </div>
                 </div>
                 {/* professional skills  */}                 
                   <h1 className='text-2xl font-bold mb-5 mt-7'>Professional Skills</h1>
                    <div className='leading-9'>
                    <div className='flex gap-3'>
                        <Image src={"/check.svg"} alt="check" width={20} height={20} />
                        <p>Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare.</p>
                    </div>                   
                    <div className='flex gap-3'>
                        <Image src={"/check.svg"} alt="check" width={20} height={20} />
                        <p>Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris.  </p>
                    </div>                    
                    <div className='flex gap-3'>
                        <Image src={"/check.svg"} alt="check" width={20} height={20} />
                        <p>Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae.</p>
                    </div>                    
                    <div className='flex gap-3'>
                        <Image src={"/check.svg"} alt="check" width={20} height={20} />
                        <p>Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae.</p>
                    </div>
                    <div className='flex gap-3'>
                        <Image src={"/check.svg"} alt="check" width={20} height={20} />
                        <p>Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae.</p>
                    </div>
                    </div>
                   <h1 className='text-2xl font-bold mb-5 mt-7'>Tags:</h1>
                   <div className='flex gap-7'>
                    <Link href={"#"} className='bg-teal-100  rounded-2xl px-3 '>Full time</Link >
                    <Link href={"#"} className='bg-teal-100  rounded-2xl px-3'>Commerce</Link >
                    <Link href={"#"} className='bg-teal-100  rounded-2xl px-3 '>New York</Link >
                    <Link href={"#"} className='bg-teal-100  rounded-2xl px-3 '>Coprate</Link >
                    <Link href={"#"} className='bg-teal-100  rounded-2xl px-3 '>Location</Link >
                    </div>                   
                      <div className=' mb-5 flex gap-[21px] mt-10'>
                        <h1 className='text-2xl font-bold'>Share jobs:</h1>
                        <Image src={"/facebook.svg"} alt="facebook" width={25} height={25} />
                        <Image src={"/x.svg"} alt="x" width={25} height={25} />
                        <Image src={"/linkedin.svg"} alt="linkedin" width={25} height={25} />
                      </div>
                       <SectionHeader className='text-5xl gap-6 font-bold mb-5 mt-[60px]' title='Related Jobs' descriptionClassName='text-sm font-normal' description='At eu lobortis pretium tincidunt amet lacus ut aenean aliquet...' />
                                {/* -------------- */}      
                <div className="mt-[50px] pt-6 ">
                  <div className='mt-[50px]rounded-xl pb-5 shadow-xl pr-[20px]  md:pl-[22px] pt-6'>
                       <div className="flex justify-between">
                       <button className="text-[#2d8c7f] bg-teal-100  px-2  rounded-lg">24 min ago</button>
                      <Image src="/Icon.svg" alt="icon" width={30} height={30} />
                      </div>    
                    <div className="flex gap-6 items-start  mt-9">
                     <Image className="items-start" src="/layers.svg" alt="Logo" width={50} height={50} /> 
                      <SectionHeader className='text-3xl gap-4 font-bold' title= 'Internal Creative Cordinator' descriptionClassName='text-sm font-normal' description='Green group' />                 
                     </div>
                   <div className="flex justify-between items-end text-[#6C757D] mt-14 ">
                   <div className="flex gap-3 tracking-tight ">
                    <div className="flex gap-2">
                    <Image src="/briefcase.svg" alt="briefcase" width={20} height={20} />
                    <p> Hotels & Tourism</p>
                   </div>
                   <div className="flex gap-2">
                    <Image src="/clock.svg" alt="clock" width={20} height={20} />
                    <p>Full Time</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src="/g139.svg" alt="file" width={20} height={20} />
                    <p>$40000 - $42000</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src="/map-pin.svg" alt="map-pin" width={20} height={20} />
                    <p>New-York, USA </p>
                  </div>
                  </div>
                    <Link  className=" rounded-xl px-2 py-1 hover:bg-[#0d5e54] bg-[#309689] text-white" href={"/Job-Details"}>Job Details</Link>               
                </div>
                </div>
                <div className="mt-[50px] mt-[50px]rounded-xl pb-5 shadow-xl pr-[20px]  md:pl-[22px]  pt-6 ">
              <div className="flex justify-between">
              <button className="text-[#2d8c7f] bg-teal-100  px-2  rounded-lg">24 min ago</button>
              <Image src="/Icon.svg" alt="icon" width={30} height={30} />
              </div>
                <div className="flex gap-6 items-start   mt-9">
                <Image className="items-start" src="/Logo 4.svg" alt="Logo" width={50} height={50} />
                <SectionHeader className='text-3xl gap-4 font-bold' title= 'Coporate Tactics Facilator' descriptionClassName='text-sm font-normal' description='Cormier turner and Flately Inc'/>          
              </div>
              <div className="flex justify-between items-end text-[#6C757D]  mt-14 ">
                <div className="flex gap-3 tracking-tight ">
                  <div className="flex gap-2">
                    <Image src="/briefcase.svg" alt="briefcase" width={20} height={20} />
                    <p> Hotels & Tourism</p>
                  </div>                
                  <div className="flex gap-2">
                    <Image src="/clock.svg" alt="clock" width={20} height={20} />
                    <p>Full Time</p>
                  </div>                 
                  <div className="flex gap-2">
                    <Image src="/g139.svg" alt="file" width={20} height={20} />
                    <p>$40000 - $42000</p>
                  </div>                  
                  <div className="flex gap-2">
                    <Image src="/map-pin.svg" alt="map-pin" width={20} height={20} />
                    <p>New-York, USA </p>
                  </div>
                  </div>
                    <Link  className=" rounded-xl px-2 py-1 hover:bg-[#0d5e54] bg-[#309689] text-white" href={"/Job-Details"}>Job Details</Link> 
                </div>
              </div>
                <div className="mt-[50px] mt-[50px]rounded-xl pb-5 shadow-xl pr-[20px]  md:pl-[22px]  pt-6 ">
              <div className="flex justify-between">
              <button className="text-[#2d8c7f] bg-teal-100  px-2  rounded-lg">24 min ago</button>
              <Image src="/Icon.svg" alt="icon" width={30} height={30} />
              </div> 
              <div className="flex gap-6 items-start  mt-9">
                <Image className="items-start" src="/Logo 3.svg" alt="Logo" width={50} height={50} />                
                  <SectionHeader className='text-3xl gap-3 font-bold' title= 'District Internet Director' descriptionClassName='text-sm font-normal' description='Von-Rueden - Weber Co'/>                       
              </div>
              <div className="flex justify-between items-end text-[#6C757D] mt-14 ">
                <div className="flex gap-3 tracking-tight ">
                  <div className="flex gap-2">
                    <Image src="/briefcase.svg" alt="briefcase" width={20} height={20} />
                    <p> Hotels & Tourism</p>
                  </div>                
                  <div className="flex gap-2">
                    <Image src="/clock.svg" alt="clock" width={20} height={20} />
                    <p>Full Time</p>
                  </div>                
                  <div className="flex gap-2">
                    <Image src="/g139.svg" alt="file" width={20} height={20} />
                    <p>$40000 - $42000</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src="/map-pin.svg" alt="map-pin" width={20} height={20} />
                    <p>New-York, USA </p>
                  </div>
                  </div>
                    <Link  className=" rounded-xl px-2 py-1 hover:bg-[#0d5e54] bg-[#309689] text-white" href={"/Job-Details"}>Job Details</Link>
                </div>
              </div>                         
              </div>
              </div>                                
           <Sidebar/>
              </div>    
       </div>  
           <Footer/>     
      </>
    )
}