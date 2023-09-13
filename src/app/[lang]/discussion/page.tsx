import NextBtnLink from "@/components/NextBtnLink";
import PauseBtn from "@/components/PauseBtn";
import PrevBtnLink from "@/components/PrevBtnLink";
import { DiscussionDictionary } from "@/content/discussion"

export default function DiscussionPage({ params }: { params: { lang: string } }) {
    const dictionary = DiscussionDictionary[params.lang];
    return (
        <div className="min-h-screen pt-20 flex flex-col justify-center items-center">
            <div className="max-w-screen-lg 2xl:max-w-screen-2xl mx-auto px-4">
                {dictionary.discussion.map((discussion, i) => {
                    return (
                        <div key={`discussion-${i}`}>
                            <h2 id="" className="mb-5 text-5xl font-bold 2xl:text-8xl text-primary">{discussion.title}</h2>
                            <div className="flex flex-col gap-5 mb-5">
                                {discussion.sections.map((section) => {
                                    return (
                                        <div key={section.title}>
                                            <h4 className="text-2xl 2xl:text-5xl font-bold underline decoration-primary underline-offset-4">{section.title}</h4>
                                            {section.info.map((info) => {
                                                return <p key={info} className="text-xl 2xl:text-2xl">{info}</p>
                                            })}

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