import Image from "next/image"
import Link from "next/link"
interface props {
iconSrc:string,
heading:string,
paragraph:string,
jobs:string | number ,
className?:string,
h1className?:string
}
const Textimonial =({iconSrc,heading,paragraph,className, h1className, jobs}: props) => {
    return (
        <div className=" leading-6 bg-white  rounded-2xl h-[300px] md:w-[250px]">
               <div className={className}>
                <Image className=" ml-2 items-center" src={iconSrc} alt="Icon" width={70} height={70} />
              <h1 className={h1className}>{heading}</h1>
              </div>
               <p className="pb-5 px-2  text-center">
              {paragraph}
               </p>
               <Link className="ml-[58px]  rounded-2xl px-3 py-1 bg-teal-100 text-[#309689]" href="/Jobs">{jobs}</Link>
            </div>
    )
}
 export default Textimonial