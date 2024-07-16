import React from 'react'
import Header from '../Header'
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
     {/* <div className="bg-black pt-5">
                <Header />
                <h1 className="text-white font-bold text-[60px] text-center pt-16 pb-16">Jobs Details</h1>
            </div> */}
    <div className='mt-5 w-auto items-center ml-4 mr-3'>
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
          <div className='div flex lg:flex-row flex-col gap-6 lg:gap-28' > 
                    <div>
                 <div className='mt-14 leading-10 mx-4 '>
                    <h1 className='font-bold text-2xl text-center md:text-start underline'>Job description</h1>
                    <p className='leading-6 pt-3 pb-4'>Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc. Et nunc ut tempus duis nisl sed massa.Ornare varius faucibus nisi vitae vitae cras ornare.</p>
                    <p className='leading-6'> Cras facilisis dignissim augue lorem amet adipiscing cursus fames mauris. Tortor amet porta proin in. Orci imperdiet nisi dignissim pellentesque morbi vitae. Quisque tincidunt metus lectus porta eget blandit euismod sem nunc Tortor gravida amet amet sapien mauris massa.Tortor varius nam maecenas duis blandit elit sit sit. Ante mauris morbi diam habitant donec.</p>
                 </div>                 
                  <div className='mt-5 mx-4 leading-9'>
                    <h1 className='text-2xl text-center md:text-start font-bold mb-7 underline' >key Responsibilities</h1>
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
                   <h1 className='text-2xl font-bold text-center underline md:text-start md:ml-4 mb-5 mt-7'>Professional Skills</h1>
                    <div className='leading-9 mx-4'>
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
                  <h1 className='text-2xl font-bold mb-5 mt-7 underline text-center  md:ml-4 md:text-start'>Tags:</h1>
                   <div className='flex flex-col md:flex-row gap-7 mx-4 text-center md:text-start'>
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
                     <div className=' mb-5 flex justify-center  md:justify-start md:ml-4 gap-[21px] mt-10'>
                        <h1 className='text-2xl underline font-bold'>Share jobs:</h1>
                        <Icon
                        iconSrc="/facebook.svg"/>
                        <Icon 
                        iconSrc="/x.svg"/>
                         <Icon
                        iconSrc="/Linkedin.svg"/>  
                      </div> 
                        <SectionHeader className='md:text-5xl md:ml-4 text-4xl text-center md:text-start md:gap-6 gap-0 font-bold md:mb-5 mb-3 mt-[30px]' title='Related Jobs' descritionClassName='text-sm font-normal ' description='At eu lobortis pretium tincidunt amet lacus ut aenean aliquet...' />     
                <div className=" mt-0 md:ml-4 mx-2   ">
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
           {/* <Footer/>      */}
      </>
    )
}