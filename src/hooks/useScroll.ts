import debounce from "lodash.debounce";
import { useState, useEffect } from "react";

export const useScrollBottom = () => {
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

    return { visible };
}

export const useScrollTop = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = debounce(() => {
        const currentScrollPos = window.scrollY;
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 100) || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    }, 100);

    useEffect(() => {
        if (!window) return;
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    return { visible };
}