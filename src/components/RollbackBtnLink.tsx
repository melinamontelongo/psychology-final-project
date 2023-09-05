import Link from "next/link"
import { AiOutlineRollback } from "react-icons/ai";

interface PrevBtnLinkProps {
    href: string,
}
const RollbackBtnLink = ({ href }: PrevBtnLinkProps) => {
    return (
        <Link
            href={href}
            className="btn btn-ghost text-3xl 2xl:text-7xl hover:text-white transition-all"
            aria-label="See next page">
            <AiOutlineRollback />
        </Link>
    )
}

export default RollbackBtnLink;