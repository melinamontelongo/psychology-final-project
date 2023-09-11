import ImageCarousel from "@/components/ImageCarousel";
import NextBtnLink from "@/components/NextBtnLink";
import PauseBtn from "@/components/PauseBtn";
import PrevBtnLink from "@/components/PrevBtnLink";
import { FormatsDictionary } from "@/content/formats"
import Image from "next/image";

export default function FormatsPage({ params }: { params: { lang: string } }) {
    const dictionary = FormatsDictionary[params.lang];
    return (
        <div className="min-h-screen pt-20 flex flex-col justify-center items-center">
            <div className="max-w-screen-lg 2xl:max-w-screen-2xl mx-auto px-4">
                {dictionary.formats.map((format, i) => {
                    return (
                        <div key={`formats-${i}`} className="">
                            <h2 id="" className="mb-5 text-5xl font-bold 2xl:text-8xl cursor-pointer hover:scale-125 hover:text-primary w-fit transition-all">{format.title}</h2>
                            <div className="flex flex-col gap-5 mb-5">
                                {format.sections.map((section) => {
                                    return (
                                        <div key={section.title} className="flex flex-col gap-2">
                                            <div>
                                                <h4 className="text-3xl 2xl:text-6xl font-bold">{section.title}</h4>
                                                {section.info.map((i) => {
                                                    return <p className="text-xl 2xl:text-2xl" key={i}>{i}</p>
                                                })}
                                            </div>
                                            <div>
                                                {section.images?.length > 0 && (
                                                    <ImageCarousel images={section.images} />
                                                )}
                                            </div>
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