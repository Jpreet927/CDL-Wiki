import { ReactNode } from "react";
import Banner from "../Banner";
import TeamBanner from "../TeamBanner";
import { Team } from "@/ts/types/Team";

const Page = ({
    title,
    bannerType,
    team,
    children,
}: {
    title: string;
    bannerType: string;
    team?: Team;
    children: ReactNode;
}) => {
    return (
        <div>
            {bannerType === "team" ? (
                <TeamBanner team={team!} />
            ) : (
                <Banner title={title} />
            )}
            {children}
        </div>
    );
};

export default Page;
