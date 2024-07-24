import Link from "next/link";
import React from "react";

interface props {
  href: string;
  children: string;
}
const Tags = ({ href, children }: props) => {
  return (
    <>
      <Link
        href={href}
        className="bg-teal-100 text-sm md:text-normal rounded-2xl px-3 py-2 md:py-2 mx-3 md:mx-0 "
      >
        {children}
      </Link>
    </>
  );
};
export default Tags;
