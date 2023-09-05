import PrevBtnLink from "@/components/PrevBtnLink";
import RollbackBtnLink from "@/components/RollbackBtnLink";
import StopBtn from "@/components/StopBtn";
import Link from "next/link";

export default function ReferencesPage({ params }: { params: { lang: string } }) {
    const lang = params.lang;
    return (
        <div className="min-h-screen pt-20 flex flex-col justify-center items-center gap-10">
            <div className="max-w-2xl 2xl:max-w-5xl">
                <h2 id="" className="mb-5 text-5xl font-bold 2xl:text-8xl cursor-pointer hover:scale-125 hover:text-primary transition-all">{lang === "en" ? "References" : "Referencias"}</h2>
                <h4 className="text-2xl 2xl:text-5xl font-bold">
                    {lang === "en" ? "Full project and reference list can be found " : "El trabajo completo y la lista de referencias pueden ser encontrados "}

                    <Link className="text-primary hover:underline" target="_blank" href="https://drive.google.com/file/d/1nZJwVTQ0J_-xHHwzDy6IQcV9ygA30ghx/view">{lang === "en" ? " here" : " aquí"}</Link>
                </h4>
                {lang === "en" && <p className="text-xl 2xl:text-2xl font-bold text-base-content">Only available in spanish as of now.</p>}
            </div>
            <div className="flex flex-row items-center justify-center gap-5">
                <PrevBtnLink href={"/discussion"} />
                <StopBtn />
                <RollbackBtnLink href={"/"} />
            </div>
        </div>
    )
}