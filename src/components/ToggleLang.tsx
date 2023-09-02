"use client"
import { setLanguage } from '@/lib/changeLanguage';
import { useRef } from "react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import englishFlag from "../assets/english.png";
import spanishFlag from "../assets/spanish.png";

const ToggleLang = ({ lang }: { lang: string }) => {
    const router = useRouter();
    const labelRef = useRef<HTMLLabelElement>(null);
    
    const changeLang = async () => {
        if(labelRef?.current) labelRef.current.classList.toggle("swap-active");
        const chosenLang:string = labelRef?.current?.classList.contains("swap-active") ? "es" : "en";
        await setLanguage(chosenLang);
        router.refresh();
    }
    return (<>
        <label ref={labelRef} className={`swap swap-flip ${lang === "es" && "swap-active"} btn btn-ghost`} onClick={() => changeLang()}>
            <div className={`swap-on flex items-center`}>
                <Image src={spanishFlag} alt="Spanish language" width={32} height={32} />
                <p className="2xl:text-2xl">Esp</p>
            </div>
            <div className={`swap-off flex items-center`}>
                <Image src={englishFlag} alt="English language" width={32} height={32} />
                <p className="2xl:text-2xl">Eng</p>
            </div>

        </label>
    </>)
}

export default ToggleLang;