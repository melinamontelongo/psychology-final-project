import Badge from "@/components/Badge";
import ImageCarousel from "@/components/ImageCarousel";
import NextBtnLink from "@/components/NextBtnLink";
import PauseBtn from "@/components/PauseBtn";
import PrevBtnLink from "@/components/PrevBtnLink";
import { FormatsDictionary } from "@/content/formats"
import { stringToId } from "@/lib/stringToId";

export default function FormatsPage({ params }: { params: { lang: string } }) {
    const dictionary = FormatsDictionary[params.lang];
    return (
        <div className="min-h-screen pt-20 flex flex-col justify-center items-center">
            <div className="w-screen md:max-w-screen-lg 2xl:max-w-screen-2xl mx-auto px-4">
                {dictionary.formats.map((format) => {
                    return (
                        <div key={stringToId(format.title)} id={stringToId(format.title)} className="pb-4">
                            <h2 className="mb-5 text-3xl md:text-5xl font-bold 2xl:text-8xl text-primary">{format.title}</h2>
                            <div className="flex flex-col gap-5 mb-5">
                                {format.sections.map((section) => {
                                    return (
                                        <div key={stringToId(section.title)} id={stringToId(section.title)} className="flex flex-col gap-2">
                                            <div>
                                                <h4 className="text-xl sm:text-2xl 2xl:text-5xl font-bold underline decoration-primary underline-offset-4">{section.title}</h4>
                                                {section.info.map((i) => {
                                                    return <p className="text-lg sm:text-xl 2xl:text-2xl" key={i}>{i}</p>
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
                                            <Badge key={keyword} text={keyword} />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex flex-row items-center justify-center gap-5 pb-5">
                <PrevBtnLink href={"/overview"} lang={params.lang} />
                <PauseBtn />
                <NextBtnLink href={"/theory"} lang={params.lang} />
            </div>
        </div>
    )
}