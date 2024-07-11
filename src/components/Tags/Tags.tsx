import Link from "next/link";
import Image from "next/image";
interface props {
href: string ,
children:string,


}
const Tags = ({href,children ,}: props) => {
    return (
      <>
        <Link href={href} className='bg-teal-100  rounded-2xl px-3 '>{children}</Link >    
    </>
    )
        }
export default Tags