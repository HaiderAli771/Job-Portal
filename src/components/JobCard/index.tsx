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
        <div className="mt-[50px] rounded-xl pb-5 shadow-xl md:pl-[22px] pt-6 md:pr-6">
            <div className="flex justify-between">
                <button className="text-[#2d8c7f] bg-teal-100 px-2 rounded-lg">{timeAgo}</button>
                <Image src={iconSrc} alt="icon" width={30} height={30} />
            </div>
            <div className="flex gap-6 items-start mt-9">
                <Image className="items-start" src={logoSrc} alt="Logo" width={50} height={50} />
                <div>
                    <h2 className="text-3xl gap-4 font-bold">{title}</h2>
                    <p className="text-sm font-normal">{companyName}</p>
                </div>
            </div>
            <div className="flex justify-between items-end text-[#6C757D] mt-14">
                <div className="flex gap-3 tracking-tight">
                    <div className="flex gap-2">
                        <Image src="/briefcase.svg" alt="briefcase" width={20} height={20} />
                        <p>{industry}</p>
                    </div>
                    <div className="flex gap-2">
                        <Image src="/clock.svg" alt="clock" width={20} height={20} />
                        <p>{jobType}</p>
                    </div>
                    <div className="flex gap-2">
                        <Image src="/g139.svg" alt="file" width={20} height={20} />
                        <p>{salary}</p>
                    </div>
                    <div className="flex gap-2">
                        <Image src="/map-pin.svg" alt="map-pin" width={20} height={20} />
                        <p>{location}</p>
                    </div>
                </div>
                <Link className="rounded-xl px-2 py-1 hover:bg-[#0d5e54] bg-[#309689] text-white" href={"/Job-Details"}>
                    Job Details
                </Link>
            </div>
        </div>
    );
};
export default JobCard;

