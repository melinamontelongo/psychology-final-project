import Link from "next/link"
import { FaStepBackward } from "react-icons/fa";

interface PrevBtnLinkProps {
    href: string,
}
const PrevBtnLink = ({ href }: PrevBtnLinkProps) => {
    return (
        <Link
            href={href}
            className="btn btn-ghost text-3xl 2xl:text-7xl hover:text-white transition-all"
            aria-label="See next page">
            <FaStepBackward />
        </Link>
    )
}

export default PrevBtnLink;