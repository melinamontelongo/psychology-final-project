import { IntroductionDictionary } from "../../content/introduction"
import NextBtnLink from "@/components/NextBtnLink";
import PauseBtn from "@/components/PauseBtn";
import PrevBtnLink from "@/components/PrevBtnLink";

export default function HomePage({ params }: { params: { lang: string } }) {
  const dictionary = IntroductionDictionary[params.lang];

  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/backgrounds/home-hero2.jpg")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-base-content pt-20">
        <div className="max-w-2xl 2xl:max-w-5xl">
          <h1 className="mb-5 text-4xl font-bold 2xl:text-8xl">{dictionary?.title}</h1>
          <h2 className="mb-5 text-2xl font-bold 2xl:text-6xl">{dictionary?.subtitle}</h2>
          <div className="mb-5 text-xl 2xl:text-4xl font-bold">
            <p>{dictionary?.degree}</p>
            <p>{dictionary?.faculty}</p>
            <p>Universidad de la República</p>
          </div>
          <div className="mb-5 text-xl 2xl:text-4xl font-bold">
            <p>- Melina Montelongo</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-5">
            <PrevBtnLink href={"/"} />
            <PauseBtn />
            <NextBtnLink href={"/overview"} />
          </div>
        </div>
      </div>
    </div>
  )
}
