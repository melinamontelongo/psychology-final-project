import Link from "next/link"
import { AiOutlineRollback } from "react-icons/ai";

interface PrevBtnLinkProps {
    href: string,
    lang: string,
}
const RollbackBtnLink = ({ href, lang }: PrevBtnLinkProps) => {
    return (
        <div className="tooltip tooltip-primary" data-tip={`${lang === "es" ? "Repetir" : "Repeat"}`}>
            <Link
                href={href}
                className="btn btn-ghost text-3xl 2xl:text-7xl hover:bg-transparent hover:text-white transition-all">
                <AiOutlineRollback />
            </Link>
        </div>
    )
}

export default RollbackBtnLink;