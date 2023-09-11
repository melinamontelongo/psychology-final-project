import debounce from "lodash.debounce";
import { useState, useEffect } from "react";

export const useScroll = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = debounce(() => {
        const currentScrollPos = window.scrollY;
        setVisible(currentScrollPos > 10);
        setPrevScrollPos(currentScrollPos);
    }, 100);
    
    useEffect(() => {
        if (!window) return;
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

   return {visible};
}