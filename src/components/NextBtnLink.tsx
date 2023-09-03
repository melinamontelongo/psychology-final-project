import Link from "next/link"
import { FaStepForward } from "react-icons/fa";

interface NextBtnLinkProps {
    href: string,
}
const NextBtnLink = ({ href }: NextBtnLinkProps) => {
    return (
        <Link
            href={href}
            className="btn btn-ghost text-3xl 2xl:text-7xl hover:text-white transition-all"
            aria-label="See next page">
            <FaStepForward />
        </Link>
    )
}

export default NextBtnLink;