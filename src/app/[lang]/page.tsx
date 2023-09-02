import { HomeDictionary } from "../../content/home"
import HomeBgImage from "../../assets/home-hero2.jpg"
export default function HomePage({ params }: { params: { lang: string } }) {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${HomeBgImage.src})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-left text-neutral-content">
        <div className="max-w-2xl 2xl:max-w-5xl">
          <h1 className="mb-5 text-4xl font-bold 2xl:text-8xl">{HomeDictionary[params.lang]?.title}</h1>
          <h2 className="mb-5 text-2xl font-bold 2xl:text-6xl">{HomeDictionary[params.lang]?.subtitle}</h2>
          <div className="mb-5 text-xl 2xl:text-4xl font-bold">
            <p>{HomeDictionary[params.lang]?.degree}</p>
            <p>{HomeDictionary[params.lang]?.faculty}</p>
            <p>Universidad de la República</p>
          </div>
          <div className="mb-5 text-xl 2xl:text-4xl font-bold">
            <p>- Melina Montelongo</p>
          </div>
         {/*  <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  )
}
