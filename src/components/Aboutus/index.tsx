import React from "react";
import Image from "next/image";
interface Props {
  title?: string;
  description?: string;
  className?: string;
  descritionClassName?: string;
  h1?: string;
  h1ClassName?: string;
  ImgSrc?: string;
}

const index = ({
  title,
  description,
  className,
  descritionClassName,
  ImgSrc,
}: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center shadow-md   rounded-lg shadow-[#e3e3e3] md:w-[400px] h-[250px] pt-10">
        <Image className="pb-5" src={ImgSrc} alt="" width={36} height={36} />
        <div className={`flex flex-col ${className} `}>
          <h3 className={`${className} `}>{title}</h3>
          <p className={`${descritionClassName}`}>{description}</p>
        </div>
      </div>
    </>
  );
};

export default index;
