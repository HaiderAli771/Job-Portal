interface Props {
    title: string;
    description: string;
    className?: string;
    descritionClassName: string;
}

const SectionHeader = ({ title, description, className, descritionClassName }: Props) => {
    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            <h3>{title}</h3>
            <p className={`${descritionClassName}`}>{description}</p>
        </div>
    )
}

export default SectionHeader;
