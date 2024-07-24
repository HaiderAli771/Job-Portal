import React from "react";
import Image from "next/image";

interface Props {
  title?: string;
  description?: string;
  className?: string;
  descritionClassName?: string;
  h1?: string;
  h1ClassName?: string;
  name?: string;
  reviewText?: string;
  ImgSrc?: string;
}

const index = ({ title, description, h1, h1ClassName }: Props) => {
  return (
    <>
      <div className={``}>
        <div className="flex flex-row justify-between  items-center rounded-lg pr-10 mt-10 pt-4 pb-2 ml-20 mr-20 ">
          <div className="flex flex-row gap-6 pl-10 pr-10">
            <h3 className="text-[25px] text-extrabold text-[#309689]">
              {title}
            </h3>
            <div>
              <p className="text-[20px] font-bold">{description}</p>
            </div>
            <div>
              <h1 className={`${h1ClassName}`}>{h1}</h1>
            </div>
          </div>
          <Image
            className="pb-5"
            src="/add.png"
            alt=""
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className="border-[#cecdcd] border-[0.1px] ml-[81px] mr-[81px] "></div>
    </>
  );
};

export default index;
