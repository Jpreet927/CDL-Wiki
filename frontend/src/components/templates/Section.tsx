import React from "react";

const Section = ({
    children,
    title,
}: {
    children: React.ReactNode;
    title: string;
}) => {
    return (
        <section className="flex flex-col gap-4 pt-12">
            <h2 id={title.split(" ").join("")}>{title}</h2>
            {children}
            <div className="h-[1px] w-full bg-background-2 mt-12"></div>
        </section>
    );
};

export default Section;
