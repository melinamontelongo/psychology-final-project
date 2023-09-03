import HomeBgImage from "../../../assets/home-hero.jpg"
import { OverviewDictionary } from "@/content/overview";
import PrevBtnLink from "@/components/PrevBtnLink";
import PauseBtn from "@/components/PauseBtn";
import NextBtnLink from "@/components/NextBtnLink";

export default function OverviewPage({ params }: { params: { lang: string } }) {
    const dictionary = OverviewDictionary[params.lang];
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${HomeBgImage.src})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content pt-20">
                <div className="max-w-2xl 2xl:max-w-5xl">
                    <div className="text-left">
                        <h2 className="mb-5 text-5xl font-bold 2xl:text-8xl cursor-pointer hover:scale-125 hover:text-primary transition-all">{dictionary.formatsTitle}</h2>
                        <ul className="flex flex-col gap-2">
                            {dictionary.formatsList.map((f) => {
                                return <li key={f} className="mb-5 mb-5 text-xl 2xl:text-4xl font-bold">{f}</li>
                            })}
                        </ul>
                    </div>
                    <div className="text-right">
                        <h2 className="mb-5 text-5xl font-bold 2xl:text-8xl cursor-pointer hover:scale-125 hover:text-primary transition-all">{dictionary.theoryTitle}</h2>
                        <ul className="flex flex-col gap-2">
                            {dictionary.theoryList.map((t) => {
                                return <li key={t} className="mb-5 mb-5 text-xl 2xl:text-4xl font-bold">{t}</li>
                            })}
                        </ul>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-5">
                        <PrevBtnLink href={"/"} />
                        <PauseBtn />
                        <NextBtnLink href={"/"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}