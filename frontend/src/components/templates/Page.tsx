import { ReactNode } from "react";
import Banner from "../Banner";

const Page = ({ title, children }: { title: string; children: ReactNode }) => {
    return (
        <div>
            <Banner title={title} />
            {children}
        </div>
    );
};

export default Page;
