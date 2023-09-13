import Badge from "@/components/Badge";
import NextBtnLink from "@/components/NextBtnLink";
import PauseBtn from "@/components/PauseBtn";
import PrevBtnLink from "@/components/PrevBtnLink";
import ImageCarousel from "@/components/ImageCarousel";
import { TheoryDictionary } from "@/content/theory";

export default function TheoryPage({ params }: { params: { lang: string } }) {
    const dictionary = TheoryDictionary[params.lang];
    return (
        <div className="min-h-screen pt-20 flex flex-col justify-center items-center">
            <div className="max-w-screen-lg 2xl:max-w-screen-2xl mx-auto px-4">
                {dictionary.theory.map((theory, i) => {
                    return (
                        <div key={`theory-${i}`}>
                            <h2 id="" className="mb-5 text-5xl font-bold 2xl:text-8xl cursor-pointer hover:scale-125 hover:text-primary transition-all">{theory.title}</h2>
                            <div className="flex flex-col gap-5 mb-5">
                                {theory.sections.map((section) => {
                                    return (
                                        <div key={section.title}>
                                            <h4 className="text-2xl 2xl:text-5xl font-bold">{section.title}</h4>
                                            <div className="mb-2">
                                                {section.list.map((item) => {
                                                    return <p key={item} className="text-xl 2xl:text-2xl">{item}</p>
                                                })}
                                            </div>
                                            <div>
                                                {section.images && section.images.length > 0 && (
                                                    <ImageCarousel images={section.images} />
                                                )}
                                            </div>
                                            <div className="flex flex-row flex-wrap gap-2">
                                                {section.keywords.map((keyword) => {
                                                    return <Badge key={keyword} text={keyword} />
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex flex-row items-center justify-center gap-5">
                <PrevBtnLink href={"/formats"} />
                <PauseBtn />
                <NextBtnLink href={"/discussion"} />
            </div>
        </div>
    )
}