import { HomeDictionary } from "../../content/home"

export default function HomePage({params} : {params: {lang: string}}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{HomeDictionary[params.lang]?.title}</h1>
      <h2>{HomeDictionary[params.lang]?.subtitle}</h2>
    </main>
  )
}
