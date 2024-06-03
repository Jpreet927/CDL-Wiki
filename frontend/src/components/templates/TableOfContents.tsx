import { useHeadingObserver } from "@/hooks/useHeadingObserver";
import { useEffect, useState, useRef } from "react";

type Heading = {
    id: string;
    text: string;
    level: number;
};

const TableOfContents = () => {
    const { activeId, activeIndex } = useHeadingObserver();
    const [headings, setHeadings] = useState<Heading[]>([]);
    const scrollBarRef = useRef<HTMLDivElement>(null);
    const [scrollBarDimensions, setScrollBarDimensions] = useState({
        width: 0,
        height: 0,
    });
    const [scrollHeight, setScrollHeight] = useState(10);
    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        const elements: Heading[] = Array.from(
            document.querySelectorAll("h2")
        ).map((elem: any) => ({
            id: elem.id,
            text: elem.innerText,
            level: Number(elem.nodeName.charAt(1)),
        }));

        setHeadings(elements);
    }, []);

    useEffect(() => {
        if (scrollBarRef.current) {
            setScrollBarDimensions({
                width: scrollBarRef.current.offsetWidth,
                height: scrollBarRef.current.offsetHeight,
            });

            setScrollHeight(
                Math.ceil(scrollBarDimensions.height / headings.length)
            );
            setScrollOffset(
                activeIndex *
                    Math.ceil(scrollBarDimensions.height / headings.length)
            );
        }
    }, [scrollBarRef, headings, activeIndex]);

    return (
        <nav className="min-w-[22%] h-fit sticky top-24 p-12 flex gap-4">
            <div
                className="bg-background-2 rounded-xl min-w-[7px] relative"
                ref={scrollBarRef}
            >
                <div
                    className={`w-[7px] rounded-xl absolute left-0 bg-primary transition-all duration-500 ease-out`}
                    style={{
                        height: scrollHeight,
                        top: scrollOffset,
                    }}
                ></div>
            </div>
            <ul>
                {headings.map((heading, idx) => (
                    <li key={`${idx} - ${heading.text}`}>
                        <a
                            className={
                                activeId === heading.id
                                    ? "text-primary"
                                    : "text-secondary"
                            }
                            href={`#${heading.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                document
                                    .querySelector(`#${heading.id}`)
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                            }}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;
