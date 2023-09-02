import Link from "next/link";
import ToggleLang from "./ToggleLang";
import { NavbarDictionary } from "@/content/navbar";

const Navbar = ({ lang }: { lang: string }) => {
    return (
        <nav className="navbar absolute px-4 py-2 2xl:px-10 2xl:py-5 w-full backdrop-blur bg-zinc-800/70 flex justify-between">
            <Link href="/" className="btn btn-ghost 2xl:text-2xl">{NavbarDictionary[lang]?.introduction}</Link>
            <Link href="/formats" className="btn btn-ghost 2xl:text-2xl">{NavbarDictionary[lang]?.formats}</Link>
            <Link href="/theory" className="btn btn-ghost 2xl:text-2xl">{NavbarDictionary[lang]?.theory}</Link>
            <Link href="/discussion" className="btn btn-ghost 2xl:text-2xl">{NavbarDictionary[lang]?.discussion}</Link>
            <Link href="/references" className="btn btn-ghost 2xl:text-2xl">{NavbarDictionary[lang]?.references}</Link>
            <ToggleLang lang={lang} />
        </nav>
    )
}

export default Navbar;