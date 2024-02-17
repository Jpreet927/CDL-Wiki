import React from "react";

const Section = ({
    children,
    title,
}: {
    children: React.ReactNode;
    title: string;
}) => {
    return (
        <section className="xl:px-64 lg:px-24 md:px-24 px-12 py-24 flex flex-col gap-4">
            <h1>{title}</h1>
            {children}
        </section>
    );
};

export default Section;
