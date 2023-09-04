import NextBtnLink from "@/components/NextBtnLink";
import PauseBtn from "@/components/PauseBtn";
import PrevBtnLink from "@/components/PrevBtnLink";
import { FormatsDictionary } from "@/content/formats"

export default function FormatsPage({ params }: { params: { lang: string } }) {
    const dictionary = FormatsDictionary[params.lang];
    return (
        <div className="min-h-screen pt-20 flex flex-col justify-center items-center">
            <div className="max-w-2xl 2xl:max-w-5xl">
                {dictionary.formats.map((format) => {
                    return (
                        <div>
                            <h2 id="" className="mb-5 text-5xl font-bold 2xl:text-8xl cursor-pointer hover:scale-125 hover:text-primary transition-all">{format.title}</h2>
                            {format.sections.map((section) => {
                                return (
                                    <div>
                                        <h4 className="text-2xl 2xl:text-5xl font-bold">{section.title}</h4>
                                        <p>{section.info}</p>
                                    </div>
                                )
                            })}
                            <div className="flex flex-row flex-wrap gap-2">
                                {format.keywords.map((keyword) => {
                                    return (
                                        <span key={keyword} className="badge badge-lg badge-primary">{keyword}</span>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex flex-row items-center justify-center gap-5">
                <PrevBtnLink href={"/overview"} />
                <PauseBtn />
                <NextBtnLink href={"/theory"} />
            </div>
        </div>
    )
}