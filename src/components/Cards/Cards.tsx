import Image from "next/image";
interface props {
    iconSrc: string;
    title : string;
    description : string | number;
}
const Cards = ({ iconSrc, title, description }: props) => {
    return (  <div className="flex gap-[17px] mt-3 items-start ">
        <Image className="mt-1 md:w-[27px] md:h-[27px] " src={iconSrc} alt="clock" width={20} height={20} />
        <div className='md:text-base text-sm leading-6 gap-[5px] tracking-tight font-bold'>
        <h3>{title}</h3>
        <p className=' tracking-tight text-sm font-normal '>{ description}</p> 
         </div>
    </div>
    );
}   
export default Cards