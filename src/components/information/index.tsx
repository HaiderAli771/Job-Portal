
interface Props {
    title?: string;
    description?: string;
    className?: string;
    descritionClassName?: string;
    h1?: string;
    h1ClassName?: string;


}

const Information = ({ title, description, className, descritionClassName, h1, h1ClassName }: Props) => {
    return (
        <>
            <div className={`flex flex-col ${className} `}>
                <h1 className='text-[#309689] text-[30px] md:text-[40px] font-bold'>{h1}</h1>
                <h3 className='  text-black font-medium text-[18px] md:text-[24px]'>{title}</h3>
                <p className=' font-normal text-[14px] md:text-[17px] lg:w-[280px]'>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum </p>
            </div>

        </>
    )
}

export default Information;