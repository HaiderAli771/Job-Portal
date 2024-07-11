import Image from "next/image";
interface Props {
   paragraph: string;
}
const  Text = ({ paragraph }: Props) => {
  return (  
    <div className='flex gap-3'>
    <Image src={"/check.svg"} alt="check" width={20} height={20} />
    <p>{paragraph} </p>
</div>   
);
};
export default Text;
