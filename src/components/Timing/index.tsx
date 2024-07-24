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
      <div className={`flex flex-col ${className} `}>
        <div className="">
          <div className="mb-10">
            <Image
              className="pb-2"
              src={ImgSrc}
              alt=""
              width={28}
              height={28}
            />
            <h3 className={`${className} `}>{title}</h3>
            <p className={`${descritionClassName}`}>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
