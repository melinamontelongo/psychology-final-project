"use client"
import { IoIosArrowUp } from "react-icons/io";
import { useScrollBottom } from "@/hooks/useScroll";

const BackToTop = () => {
    const { visible } = useScrollBottom();

    const scrollToTop = () => {
        if (window) window.scrollTo({ top: 20, behavior: "smooth" });
    }

    return (
        <div className={`fixed px-4 py-2 right-0 ${visible ? "bottom-0" : "-bottom-20"} transition-all duration-500 ease-in-out`}>
            <button className="btn btn-circle btn-primary" onClick={() => scrollToTop()}>
                <IoIosArrowUp className="text-xl" />
            </button>
        </div>
    )
}

export default BackToTop;