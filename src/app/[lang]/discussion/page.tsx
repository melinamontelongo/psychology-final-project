import NextBtnLink from "@/components/NextBtnLink";
import PauseBtn from "@/components/PauseBtn";
import PrevBtnLink from "@/components/PrevBtnLink";
import { DiscussionDictionary } from "@/content/discussion"

export default function DiscussionPage({ params }: { params: { lang: string } }) {
    const dictionary = DiscussionDictionary[params.lang];
    return (
        <div className="min-h-screen pt-20 flex flex-col justify-center items-center">
            <div className="max-w-2xl 2xl:max-w-5xl">
                {dictionary.discussion.map((discussion, i) => {
                    return (
                        <div key={`discussion-${i}`}>
                            <h2 id="" className="mb-5 text-5xl font-bold 2xl:text-8xl cursor-pointer hover:scale-125 hover:text-primary transition-all">{discussion.title}</h2>
                            <div className="flex flex-col gap-5 mb-5">
                                {discussion.sections.map((section) => {
                                    return (
                                        <div key={section.title}>
                                            <h4 className="text-2xl 2xl:text-5xl font-bold">{section.title}</h4>
                                            <p>{section.info}</p>
                                        </div>
                                    )
                                })}
                                <div className="flex flex-row flex-wrap gap-2">
                                    {discussion.keywords.map((keyword) => {
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
                <PrevBtnLink href={"/theory"} />
                <PauseBtn />
                <NextBtnLink href={"/references"} />
            </div>
        </div>
    )
}