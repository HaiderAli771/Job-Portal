interface Props {
    title: string;
    description: string;
    className?: string;
    descriptionClassName?: string;
}

const SectionHeader = ({ title, description, className, descriptionClassName }: Props) => {
    return (
        <div className={`{flex flex-col}  ${className}`}>
            <h3>{title}</h3>
            <p className={`${descriptionClassName}`}>{description}</p>
        </div>
    )
}

export default SectionHeader;
