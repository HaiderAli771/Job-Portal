import Link from "next/link";
interface props{
    href: string;
    children:string;
  }
   const Catageory = ({ href, children }: props) => {
    return (
      <Link href={href} className="text-[#309689] text-sm md:text-normal hover:bg-[#03c6ac] text-center bg-[#baf3eb] rounded-2xl px-1 py-1">
        {children}
      </Link>
    );
  };
  export default Catageory;
  