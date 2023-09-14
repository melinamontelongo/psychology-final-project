import Link from "next/link"
import { FaStepForward } from "react-icons/fa";

interface NextBtnLinkProps {
    href: string,
    lang: string,
}
const NextBtnLink = ({ href, lang }: NextBtnLinkProps) => {
    return (
        <div className="tooltip tooltip-primary" data-tip={`${lang === "es" ? "Siguiente" : "Next"}`}>
            <Link
                href={href}
                className="btn btn-ghost text-3xl 2xl:text-7xl hover:bg-transparent hover:text-white transition-all">
                <FaStepForward />
            </Link>
        </div>
    )
}

export default NextBtnLink;