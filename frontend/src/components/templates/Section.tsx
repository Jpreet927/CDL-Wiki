import React from "react";

const Section = ({
    children,
    title,
}: {
    children: React.ReactNode;
    title: string;
}) => {
    return (
        <section className="2xl:px-80 xl:px-64 lg:px-24 md:px-24 sm:px-12 px-6 pt-20 flex flex-col gap-4">
            <h2>{title}</h2>
            {children}
            <div className="h-[1px] w-full bg-background-2 mt-20"></div>
        </section>
    );
};

export default Section;
