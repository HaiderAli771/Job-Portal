import Image from "next/image";
interface Props {
   paragraph: string;
}
const  Text = ({ paragraph }: Props) => {
  return (  
    <div className='flex gap-3 place-items-start leading-[28px] text-sm md:text-normal md:items-center'>
    <Image className="mt-2 md:mt-0" src={"/check.svg"} alt="check" width={20} height={20} />
    <p>{paragraph} </p>
</div>   
);
};
export default Text;
