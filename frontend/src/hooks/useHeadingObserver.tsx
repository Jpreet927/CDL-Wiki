import { useEffect, useState, useRef } from "react";

export function useHeadingObserver() {
    const observer = useRef<IntersectionObserver | null>(null);
    const [activeId, setActiveId] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    const entryMap: { [key: string]: number } = {};

    useEffect(() => {
        const handleObserver = (entries: any[]) => {
            entries.forEach((entry: any) => {
                if (entry?.isIntersecting) {
                    setActiveIndex(entryMap[entry.target.id]);
                    setActiveId(entry.target.id);
                }
            });
        };

        observer.current = new IntersectionObserver(handleObserver, {
            rootMargin: "0% 0% -60% 0px",
        });

        const elements: any = document.querySelectorAll("h2");
        elements.forEach((elem: any, index: number) => {
            entryMap[elem.id] = index;
            observer?.current?.observe(elem);
        });

        return () => observer.current?.disconnect();
    }, []);

    return { activeId, activeIndex };
}
