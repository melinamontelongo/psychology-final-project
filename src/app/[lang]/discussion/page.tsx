import NextBtnLink from "@/components/NextBtnLink";
import PauseBtn from "@/components/PauseBtn";
import PrevBtnLink from "@/components/PrevBtnLink";
import { DiscussionDictionary } from "@/content/discussion"

export default function DiscussionPage({ params }: { params: { lang: string } }) {
    const dictionary = DiscussionDictionary[params.lang];
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/backgrounds/hero-discussion.jpg")` }}>
            <div className="hero-overlay bg-base-200 bg-opacity-60"></div>
            <div className="hero-content text-neutral-content pt-20">
                <div className="max-w-screen-lg 2xl:max-w-screen-2xl mx-auto px-4">
                    {dictionary.discussion.map((discussion, i) => {
                        return (
                            <div key={`discussion-${i}`}>
                                <h2 id="" className="mb-5 text-3xl md:text-5xl font-bold 2xl:text-8xl text-primary">{discussion.title}</h2>
                                <div className="flex flex-col gap-5 mb-5">
                                    {discussion.sections.map((section) => {
                                        return (
                                            <div key={section.title}>
                                                <h4 className="text-xl sm:text-2xl 2xl:text-5xl font-bold underline decoration-primary underline-offset-4">{section.title}</h4>
                                                {section.info.map((info) => {
                                                    return <p key={info} className="text-lg sm:text-xl 2xl:text-2xl">{info}</p>
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
                    <div className="flex flex-row items-center justify-center gap-5">
                        <PrevBtnLink href={"/theory"} lang={params.lang} />
                        <PauseBtn />
                        <NextBtnLink href={"/references"} lang={params.lang} />
                    </div>
                </div>
            </div>
        </div>
    )
}