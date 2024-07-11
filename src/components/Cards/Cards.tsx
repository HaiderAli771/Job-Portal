import Image from "next/image";
interface props {
    iconSrc: string;
    title : string;
    description : string | number;
}
const Cards = ({ iconSrc, title, description }: props) => {
    return (  <div className="flex gap-[17px] mt-3 items-start ">
        <Image className="mt-1" src={iconSrc} alt="clock" width={27} height={27} />
        <div className='text-base leading-6 gap-[5px] tracking-tight font-bold'>
        <h3>{title}</h3>
        <p className=' tracking-tight text-sm font-normal '>{ description}</p> 
         </div>
    </div>
    );
}   
export default Cards