import React from "react";
import Image from "next/image";

interface Props {
    title?: string;
    description?: string;
    className?: string;
    descritionClassName?: string;
    h1?: string;
    h1ClassName?: string;
    ImgSrc: any;


}

const index = ({ title, description, className, descritionClassName, h1, h1ClassName, ImgSrc }: Props) => {
    return (
        <>
            <div className={`flex flex-col `}>
                <div className="flex flex-row gap-[39px]">
                    <div className="flex flex-row">
                        <h1 className={`${h1ClassName}`}>{h1}</h1>
                        <Image className='pb-5 ' src={ImgSrc} alt="" width={60} height={60} />
                        <h3 className="md:text-[18px] text-sm pl-2 font-bold">{title}</h3>
                        <p className={`${descritionClassName}`}>{description}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default index;