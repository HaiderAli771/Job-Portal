interface Props {
    title?: string;
    description?: string;
    className?: string;
    descritionClassName?: string;
    h1?: string;
    h1ClassName?: string;


}

const SectionHeader = ({ title, description, className, descritionClassName, h1, h1ClassName }: Props) => {
    return (
        <>
            <div className={`flex flex-col ${className} `}>
                <h1 className={`${h1ClassName}`}>{h1}</h1>
                <h3 className={`${className} `}>{title}</h3>
                <p className={`${descritionClassName}`}>{description}</p>
            </div>

        </>
    )
}
export default SectionHeader;
