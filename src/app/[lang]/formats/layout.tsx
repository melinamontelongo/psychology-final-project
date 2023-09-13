import { FormatsDictionary } from "@/content/formats"
import { stringToId } from "@/lib/stringToId";
import Link from "next/link";
import Drawer from "@/components/Drawer";

export default function formatLayout({
    children,
    params,
}: {
    children: React.ReactNode,
    params: { lang: string }
}) {
    const formatSidebarContent = FormatsDictionary[params.lang];
    return (
        <Drawer
            pageContent={children}
            drawerContent={<>
                {formatSidebarContent.formats.map((f) => {
                    return (
                        <li key={`sidebarFormatTitle-${stringToId(f.title)}`}>
                            <Link
                                href={`#${stringToId(f.title)}`}
                                className="text-2xl font-bold 2xl:text-4xl text-primary">
                                {f.title}
                            </Link>
                            {f.sections.map((s) => {
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