"use client"
import { IoIosArrowUp } from "react-icons/io";
import { useScrollBottom } from "@/hooks/useScroll";

const BackToTop = () => {
    const { visible } = useScrollBottom();

    const scrollToTop = () => {
        if (window) window.scrollTo({ top: 20, behavior: "smooth" });
    }

    return (
        <div className={`fixed p-1 sm:px-4 sm:py-2 right-0 ${visible ? "bottom-0" : "-bottom-20"} transition-all duration-500 ease-in-out`}>
            <button className="btn btn-sm btn-circle md:btn-md 2xl:btn-lg btn-primary" onClick={() => scrollToTop()}>
                <IoIosArrowUp className="text-lg sm:text-xl 2xl:text-2xl" />
            </button>
        </div>
    )
}

export default BackToTop;