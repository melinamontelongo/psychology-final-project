import { TheoryDictionary } from "@/content/theory";
import { stringToId } from "@/lib/stringToId";
import Link from "next/link";
import Drawer from "@/components/Drawer";

export default function theoryLayout({
    children,
    params,
}: {
    children: React.ReactNode,
    params: { lang: string }
}) {
    const theoryDrawerContent = TheoryDictionary[params.lang];
    return (
        <Drawer
            pageContent={children}
            drawerContent={<>
                {theoryDrawerContent.theory.map((t) => {
                    return (
                        <li key={`sidebarFormatTitle-${stringToId(t.title)}`}>
                            <Link
                                href={`#${stringToId(t.title)}`}
                                className="text-xl md:text-2xl font-bold 2xl:text-4xl text-primary">
                                {t.title}
                            </Link>
                            {t.sections.map((s) => {
                                return (
                                    <Link
                                        href={`#${stringToId(s.title)}`}
                                        key={`sidebarSectionTitle-${stringToId(s.title)}`}
                                        className="ml-5 text-lg 2xl:text-xl">
                                        {s.title}
                                    </Link>
                                )
                            })}
                        </li>
                    )
                })}
            </>}
        />

    )
}