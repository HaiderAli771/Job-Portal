import Image from 'next/image'
import Link from 'next/link'
interface props {
  
    timeAgo: string | number;
    iconSrc: string;
    logoSrc: string;
    title: string;
    companyName: string;
    industry: string;
    jobType: string;
    salary: number | string;
    location: string;
}
const JobCard = ({ timeAgo, iconSrc, logoSrc, title, companyName, industry, jobType, salary, location }:props) => {
    return (
        <div className="mt-[50px] rounded-xl pb-5 md:mx-0 mx-2 md:ring-0 ring-2 ring-slate-200  shadow-2xl md:pl-[22px] md:pt-6 p-6 md:pr-6">
            <div className="flex justify-between">
                <button className="text-[#2d8c7f] bg-teal-100 px-2 rounded-lg">{timeAgo}</button>
                <Image src={iconSrc} alt="icon" width={30} height={30} />
            </div>
            <div className="flex gap-6 items-start mt-9 ">
                <Image className="items-start" src={logoSrc} alt="Logo" width={50} height={50} />
                <div>
                    <h2 className="text-xl gap-4 font-bold">{title}</h2>
                    <p className="text-sm  md:pt-0 pt-4 font-normal">{companyName}</p>
                </div>
            </div>
            <div className="flex justify-between md:flex-row flex-col md:items-end md:pl-0 pl-10 items-center  text-[#6C757D] mt-4 md:mt-14">
                <div className="flex md:flex-row flex-col gap-3 tracking-tight">
                    <div className="flex gap-2 items-center text-sm">
                        <Image src="/briefcase.svg" alt="briefcase" width={20} height={20} />
                        <p >{industry}</p>
                    </div>
                    <div className="flex gap-2 items-center text-sm">
                        <Image src="/clock.svg" alt="clock" width={20} height={20} />
                        <p >{jobType}</p> 
                    </div>
                    <div className="flex gap-2 items-center text-sm ">
                        <Image src="/g139.svg" alt="file" width={20} height={20} />
                        <p>{salary}</p>
                    </div>
                    <div className="flex gap-2 items-center text-sm">
                        <Image src="/map-pin.svg" alt="map-pin" width={20} height={20} />
                        <p>{location}</p>
                    </div>
                </div>
                <Link className="rounded-xl md:mr-0 mr-11 md:mt-0 mt-5 px-2 text-center text-sm py-1 hover:bg-[#0d5e54] bg-[#309689] text-white" href={"/Job-Details"}>
                    Job Details
                </Link>
            </div>
        </div>
    );
};
export default JobCard;

