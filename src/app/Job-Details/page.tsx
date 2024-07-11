import React from 'react'
import Header from '../Header'
import Link from 'next/link'
import Image from 'next/image'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import SectionHeader from '@/components/sectionHeader'
import JobCard from "@/components/JobCard";
import Text from '@/components/Text/Text'
import Tags from '@/components/Tags/Tags'
import Icon from '@/components/Icon/Page'
export default function Page() {
    return (
     <>
     <div className="bg-black pt-5">
                <Header />
                <h1 className="text-white font-bold text-[60px] text-center pt-16 pb-16">Jobs Details</h1>
            </div>
    <div className='mt-5 m-14  md:w-auto'>
    <JobCard
                 timeAgo= "24 min ago"
                 iconSrc= "/Icon.svg"
                 logoSrc="/Logo 3.svg"
                 title= "Coprate Solutions Executive "
                 companyName= "Bauch, schuppe and schullit Co"
                 industry= "commerce"
                 jobType= "Full Time"
                 salary= "$40000 - $42000"
                 location= "New-York, USA"  
                 />
           <div className='div flex flex-col-2 gap-28' > 
                    <div>
                 <div className='mt-14 leading-10 w-[980px]'>
                    <h1 className='font-bold text-2xl '>Job description</h1>
                    <p className='leading-6 pt-3 pb-4'>Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc. Et nunc ut tempus duis nisl sed massa.Ornare varius faucibus nisi vitae vitae cras ornare.</p>
                    <p className='leading-6'> Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta eget blandit euismod sem nunc Tortor gravida amet amet sapien mauris massa.Tortor varius nam maecenas duis blandit elit sit sit. Ante mauris morbi diam habitant donec.</p>
                 </div>                 
                 <div className='mt-5 leading-9'>
                    <h1 className='text-2xl font-bold mb-7' >key Responsibilities</h1>
                    <Text
                     paragraph='Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augu' />
                    <Text 
                    paragraph='Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in.'
                    />
                    <Text 
                    paragraph='Ornare varius faucibus nisi vitae vitae cras ornare. Cras facilisis dignissim augue lorem amet adipiscing cursus fames'
                    />
                    <Text 
                    paragraph='Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta'
                    />
                    <Text 
                    paragraph='Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta'
                    />
                    <Text 
                    paragraph='Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta'
                    />                 
                 </div>                 
                   <h1 className='text-2xl font-bold mb-5 mt-7'>Professional Skills</h1>
                    <div className='leading-9'>
                    <Text
                    paragraph='Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus nisi vitae vitae cras ornare.'
                    />
                    <Text
                    paragraph='Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris.'
                    />                  
                    <Text
                    paragraph='Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae'
                    />                    
                    <Text
                    paragraph='Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae'
                    />                    
                    <Text
                    paragraph='Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae'
                    />                             
                    </div>
                   <h1 className='text-2xl font-bold mb-5 mt-7'>Tags:</h1>
                   <div className='flex gap-7'>
                   <Tags
                    href='Full time'
                    children='Full time'
                    />
                   <Tags
                    href='Commerce'
                    children='Commerce'
                    />
                   <Tags
                    href='New York'
                    children='New York'
                    />
                   <Tags
                    href='Coprate'
                    children='Coprate'
                    />
                   <Tags
                    href='Location'
                    children='Location'
                      />
                    </div>                   
                      <div className=' mb-5 flex gap-[21px] mt-10'>
                        <h1 className='text-2xl font-bold'>Share jobs:</h1>
                        <Icon
                        iconSrc="/facebook.svg"/>
                        <Icon 
                        iconSrc="/x.svg"/>
                         <Icon
                        iconSrc="/Linkedin.svg"/>  
                      </div>
                       <SectionHeader className='text-5xl gap-6 font-bold mb-5 mt-[60px]' title='Related Jobs' descriptionClassName='text-sm font-normal' description='At eu lobortis pretium tincidunt amet lacus ut aenean aliquet...' />     
                <div className="mt-[50px] pt-6 ">
                <JobCard
                 timeAgo= "24 min ago"
                 iconSrc= "/Icon.svg"
                 logoSrc="/layers.svg"
                 title= "Internal Creative Cordinator"
                 companyName= "Green group"
                 industry= "commerce"
                 jobType= "Full Time"
                 salary= "$40000 - $42000"
                 location= "New-York, USA"  
                 />
                  
                  <JobCard
                 timeAgo= "24 min ago"
                 iconSrc= "/Icon.svg"
                 logoSrc="/Logo 4.svg"
                 title= "Coporate Tactics Facilator"
                 companyName= "Cormier turner and Flately Inc"
                 industry= "Hotels and Tourism"
                 jobType= "Full Time"
                 salary= "$40000 - $42000"
                 location= "New-York, USA"  
                 />                
                <JobCard
                 timeAgo= "24 min ago"
                 iconSrc= "/Icon.svg"
                 logoSrc="/Logo 3.svg"
                 title= "District Internet Director"
                 companyName= "Von-Rueden - Weber Co"
                 industry= "Hotels and Tourism"
                 jobType= "Full Time"
                 salary= "$40000 - $42000"
                 location= "New-York, USA"  
                 />                                         
              </div>
              </div>                                
           <Sidebar/>
              </div>    
       </div>  
           <Footer/>     
      </>
    )
}