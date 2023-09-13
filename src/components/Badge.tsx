const Badge = ({ text }: { text: string }) => {
    return (
        <span className="badge badge-lg badge-primary xl:py-4 xl:px-2 xl:text-xl 2xl:text-4xl 2xl:py-8 2xl:px-4">{text}</span>
    )
}
export default Badge;