import Link from "next/link"
import { FaStepBackward } from "react-icons/fa";

interface PrevBtnLinkProps {
    href: string,
    lang: string,
}
const PrevBtnLink = ({ href, lang }: PrevBtnLinkProps) => {
    return (
        <div className="tooltip tooltip-primary" data-tip={`${lang === "es" ? "Anterior" : "Previous"}`}>
            <Link
                href={href}
                className="btn btn-ghost text-3xl 2xl:text-7xl hover:bg-transparent hover:text-white transition-all">
                <FaStepBackward />
            </Link>
        </div>
    )
}

export default PrevBtnLink;