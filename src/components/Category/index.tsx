import SectionHeader from "../sectionHeader";
import Link from "next/link";
import Image from "next/image";


interface Props {
    title?: string;
    description?: string;
    className?: string;
    descritionClassName?: string;
    h1?: string;
    h1ClassName?: string;
    ImageSrc?: any;

}

const Category = ({ title, description, className, descritionClassName, ImageSrc, h1, h1ClassName }: Props) => {
    return (
        <>
            <div >
                <div className='flex flex-col justify-center items-center gap-6 w-[240px] h-[205px] bg-white shadow-xl rounded-xl'>
                    <Image className="w-[40px] h-[40px]" src={ImageSrc} alt="" width={200} height={200} />
                    <h3 className='md:text-[20px] text-[17px] gap-3 text-center items-center justify-center '>{title}</h3>
                    <p className='md:text-[16px] text-[13px] font-medium  w-24 rounded-lg bg-[#a0dad2] text-white flex flex-row justify-center items-center'>{description}</p>
                </div>
            </div >
        </>
    )
}

export default Category;