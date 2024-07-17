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
        <div className=" leading-6 bg-white ring-2 ring-gray-200 md:ring-0 shadow-xl md:shadow-sm rounded-2xl  h-auto pb-4 md:pb-2  w-auto m-4 md:m-0  ">
               <div className={className}>
                <Image className=" ml-2 items-center" src={iconSrc} alt="Icon" width={70} height={70} />
              <h1 className={h1className}>{heading}</h1>
              </div>
               <p className="pb-5  md:px-2  px-4  text-center">
              {paragraph}
               </p>
               <Link className=" flex flex-row justify-center mx-5  items-center  rounded-2xl px-3 py-1  bg-teal-100 sm:mb-9 md:w-auto md:mx-28   text-[#309689]" href="/Jobs">{jobs}</Link>
            </div>
    )
}
 export default Textimonial