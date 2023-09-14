import PrevBtnLink from "@/components/PrevBtnLink";
import RollbackBtnLink from "@/components/RollbackBtnLink";
import StopBtn from "@/components/StopBtn";
import Link from "next/link";

export default function ReferencesPage({ params }: { params: { lang: string } }) {
    const lang = params.lang;
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/backgrounds/hero-references.jpg")` }}>
            <div className="hero-overlay bg-base-200 bg-opacity-60"></div>
            <div className="hero-content text-neutral-content pt-20">
                <div className="max-w-screen-lg 2xl:max-w-screen-2xl mx-auto px-4">
                    <h2 id="" className="mb-5 text-5xl font-bold 2xl:text-8xl text-primary">{lang === "en" ? "References" : "Referencias"}</h2>
                    <h4 className="text-2xl 2xl:text-5xl font-bold">
                        {lang === "en" ? "Full project and reference list can be found " : "El trabajo completo y la lista de referencias pueden ser encontrados "}

                        <Link className="underline decoration-primary underline-offset-4 hover:text-primary" target="_blank" href="/tfg/tfg-Melina-Montelongo.pdf">{lang === "en" ? " here" : " aquí"}</Link>
                    </h4>
                    {lang === "en" && <p className="text-xl 2xl:text-2xl font-bold text-base-content">Only available in spanish as of now.</p>}
                    <div className="flex flex-row items-center justify-center gap-5">
                        <PrevBtnLink href={"/discussion"} lang={params.lang} />
                        <StopBtn />
                        <RollbackBtnLink href={"/"} lang={params.lang} />
                    </div>
                </div>
            </div>
        </div>
    )
}