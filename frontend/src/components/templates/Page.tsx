import { ReactNode } from "react";
import Banner from "../Banner";
import TeamBanner from "../TeamBanner";
import { Team } from "@/ts/types/Team";

const Page = ({
    title,
    bannerType = "DEFAULT",
    team,
    children,
}: {
    title: string;
    bannerType?: "TEAM" | "DEFAULT";
    team?: Team;
    children: ReactNode;
}) => {
    return (
        <div>
            {bannerType === "TEAM" ? (
                <TeamBanner team={team!} />
            ) : (
                <Banner title={title} />
            )}
            {children}
        </div>
    );
};

export default Page;
