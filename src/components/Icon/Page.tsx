import Image from "next/image";
interface props {
    iconSrc: string
}
const Icon = ({iconSrc}: props) => {
    return (
        <>
            <Image src={iconSrc} alt="facebook" width={25} height={25} /> 
        </>
    )
}
export default Icon