"use client"
import Link from "next/link";
import ToggleLang from "./ToggleLang";
import { NavbarDictionary } from "@/content/navbar";
import { useScrollTop } from "@/hooks/useScroll";

const Navbar = ({ lang }: { lang: string }) => {
    const { visible } = useScrollTop();

    return (
        <nav className={`navbar fixed px-4 py-2 2xl:px-10 2xl:py-5 w-full bg-base-200 z-50 shadow-lg transition-all duration-500 ease-in-out ${visible ? "top-0" : "-top-20"}`}>
            <div className="md:flex md:justify-between w-full hidden">
                <Link href="/" className="btn btn-ghost 2xl:text-2xl">{NavbarDictionary[lang]?.start}</Link>
                <Link href="/overview" className="btn btn-ghost 2xl:text-2xl">{NavbarDictionary[lang]?.introduction}</Link>
                <Link href="/formats" className="btn btn-ghost 2xl:text-2xl">{NavbarDictionary[lang]?.formats}</Link>
                <Link href="/theory" className="btn btn-ghost 2xl:text-2xl">{NavbarDictionary[lang]?.theory}</Link>
                <Link href="/discussion" className="btn btn-ghost 2xl:text-2xl">{NavbarDictionary[lang]?.discussion}</Link>
                <Link href="/references" className="btn btn-ghost 2xl:text-2xl">{NavbarDictionary[lang]?.references}</Link>
                <ToggleLang lang={lang} />
            </div>
            <div className="md:hidden">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                        <li>
                            <Link href="/" className="2xl:text-2xl uppercase font-bold">{NavbarDictionary[lang]?.start}</Link>
                        </li>
                        <li>
                            <Link href="/overview" className="2xl:text-2xl uppercase font-bold">{NavbarDictionary[lang]?.introduction}</Link>
                        </li>
                        <li>
                            <Link href="/formats" className="2xl:text-2xl uppercase font-bold">{NavbarDictionary[lang]?.formats}</Link>
                        </li>
                        <li>
                            <Link href="/theory" className="2xl:text-2xl uppercase font-bold">{NavbarDictionary[lang]?.theory}</Link>
                        </li>
                        <li>
                            <Link href="/discussion" className="2xl:text-2xl uppercase font-bold">{NavbarDictionary[lang]?.discussion}</Link>
                        </li>
                        <li>
                            <Link href="/references" className="2xl:text-2xl uppercase font-bold">{NavbarDictionary[lang]?.references}</Link>
                        </li>
                        <li className="">
                            <ToggleLang lang={lang} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;