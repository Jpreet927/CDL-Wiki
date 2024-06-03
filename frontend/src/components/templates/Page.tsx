import { ReactNode } from "react";
import Banner from "../Banner";
import TeamBanner from "../TeamBanner";
import { Team } from "@/ts/types/Team";
import TableOfContents from "./TableOfContents";

type Props = {
    title: string;
    bannerType?: "TEAM" | "DEFAULT";
    team?: Team;
    tocVisible?: boolean;
    children: ReactNode;
};

const Page = ({
    title,
    bannerType = "DEFAULT",
    team,
    tocVisible = false,
    children,
}: Props) => {
    return (
        <div className="relative">
            {bannerType === "TEAM" ? (
                <TeamBanner team={team!} />
            ) : (
                <Banner title={title} />
            )}
            <div className="flex gap-8 2xl:px-80 xl:px-64 lg:px-24 md:px-24 sm:px-12 px-6 pt-20">
                <div className="w-full">{children}</div>
                <div className="lg:block hidden">
                    {tocVisible && <TableOfContents />}
                </div>
            </div>
        </div>
    );
};

export default Page;
