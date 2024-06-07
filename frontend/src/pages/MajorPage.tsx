import { getMajorById } from "@/api/Majors";
import MajorStandings from "@/components/MajorStandings";
import Page from "@/components/templates/Page";
import Section from "@/components/templates/Section";
import Skeleton from "@/components/templates/Skeleton";
import TabPanel from "@/components/templates/TabPanel";
import { Team } from "@/ts/types/Team";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const majors = [
    { id: 1, title: "Major 1" },
    { id: 2, title: "Major 2" },
    { id: 3, title: "Major 3" },
    { id: 4, title: "Major 4" },
    { id: 5, title: "Champs" },
];

const MajorPage = () => {
    const [activeTab, setActiveTab] = useState(1);
    const {
        isPending,
        error,
        data: placings,
    } = useQuery({
        queryKey: ["majorId", activeTab],
        queryFn: () => getMajorById(activeTab + ""),
    });
    console.log(placings);

    return (
        <Page title="Majors" bannerType="DEFAULT">
            <Section title="Majors">
                <TabPanel
                    tabItems={majors}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                >
                    <table>
                        <th className="grid sm:grid-cols-7 grid-cols-5 md:px-12 px-2 pt-8 pb-2 gap-2 w-full items-center [&>*]:font-bold text-left">
                            <p>Rank</p>
                            <div className="col-start-2 sm:col-end-5 col-end-4 md:pl-12">
                                <p>Team</p>
                            </div>
                            <div className="sm:hidden block">
                                <p>W/L</p>
                            </div>
                            <p className="sm:block hidden">Wins</p>
                            <p className="sm:block hidden">Losses</p>
                            <p>Points</p>
                        </th>
                        <tbody>
                            {placings &&
                                placings.map(
                                    (team: Team, idx: number) =>
                                        team && (
                                            <MajorStandings
                                                team={team}
                                                idx={idx}
                                                key={team.id}
                                            />
                                        )
                                )}
                        </tbody>
                        {isPending && (
                            <div className="flex flex-col gap-2">
                                {Array(12)
                                    .fill(null)
                                    .map((_, idx) => {
                                        return (
                                            <div className="h-[84px]">
                                                <Skeleton delay={idx * 200} />
                                            </div>
                                        );
                                    })}
                            </div>
                        )}
                        {error && (
                            <p className="text-secondary text-center mt-12">
                                {error.message}
                            </p>
                        )}
                    </table>
                </TabPanel>
            </Section>
        </Page>
    );
};

export default MajorPage;
