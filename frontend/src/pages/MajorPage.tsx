import { getMajorById } from "@/api/Majors";
import MajorStandings from "@/components/MajorStandings";
import Page from "@/components/templates/Page";
import Section from "@/components/templates/Section";
import Skeleton from "@/components/templates/Skeleton";
import TabPanel from "@/components/templates/TabPanel";
import { Team } from "@/ts/types/Team";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { MAJOR_PRIZES } from "@/ts/constants/MajorData";
import moment from "moment";
import { getTournamentMatchesByMajor } from "@/api/Matches";
import Bracket from "@/components/Bracket";

const majors = [
    { id: 1, title: "Major 1" },
    { id: 2, title: "Major 2" },
    { id: 3, title: "Major 3" },
    { id: 4, title: "Major 4" },
    { id: 5, title: "Champs" },
];

const MajorPage = () => {
    const [activeMajor, setActiveMajor] = useState(1);
    const [activeTab, setActiveTab] = useState<"Placings" | "Bracket">(
        "Placings"
    );
    const {
        isPending: majorPending,
        error: majorError,
        data: majorData,
    } = useQuery({
        queryKey: ["majorId", activeMajor],
        queryFn: () => getMajorById(activeMajor + ""),
    });
    const { error: matchesError, data: matchesData } = useQuery({
        queryKey: ["matches", activeMajor],
        queryFn: () => getTournamentMatchesByMajor(activeMajor + ""),
    });

    return (
        <Page title="Majors" bannerType="DEFAULT">
            <Section title="Majors">
                <TabPanel
                    tabItems={majors}
                    activeTab={activeMajor}
                    setActiveTab={setActiveMajor}
                >
                    {majorData && (
                        <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 my-8">
                            <div>
                                <p className="text-secondary text-sm">
                                    Location
                                </p>
                                <p>
                                    {majorData.location
                                        ? majorData.location
                                        : "N/A"}
                                </p>
                            </div>
                            <div>
                                <p className="text-secondary text-sm">Venue</p>
                                <p>
                                    {majorData.venue ? majorData.venue : "N/A"}
                                </p>
                            </div>
                            <div>
                                <p className="text-secondary text-sm">
                                    Prize Pool
                                </p>
                                <p>
                                    {majorData.prizePool
                                        ? `$${majorData.prizePool.toLocaleString()}`
                                        : "N/A"}
                                </p>
                            </div>
                            <div>
                                <p className="text-secondary text-sm">Dates</p>
                                <p>
                                    {majorData.startDate && majorData.endDate
                                        ? `${moment(majorData.startDate).format(
                                              "MM/DD/YYYY"
                                          )} - ${moment(
                                              majorData.endDate
                                          ).format("MM/DD/YYYY")}`
                                        : "N/A"}
                                </p>
                            </div>
                        </div>
                    )}
                    <div className="flex gap-4 items-center mt-8">
                        <button
                            className={`${
                                activeTab === "Placings"
                                    ? "font-bold bg-background-2"
                                    : "bg-background"
                            } px-12 py-4 w-[200px] text-center cursor-pointer hover:bg-background-2 rounded-md transition-colors duration-300 ease-in-out`}
                            onClick={() => setActiveTab("Placings")}
                        >
                            <p>Placings</p>
                        </button>
                        <div className="w-[1px] h-[50px] bg-background-2"></div>
                        <button
                            className={`${
                                activeTab === "Bracket"
                                    ? "font-bold bg-background-2"
                                    : "bg-background"
                            } px-12 py-4 w-[200px] text-center cursor-pointer hover:bg-background-2 rounded-md transition-colors duration-300 ease-in-out`}
                            onClick={() => setActiveTab("Bracket")}
                        >
                            <p>Bracket</p>
                        </button>
                    </div>
                    {activeTab === "Placings" ? (
                        <table className="w-full">
                            <th className="grid grid-cols-5 md:px-12 px-2 pt-8 pb-2 gap-2 w-full items-center [&>*]:font-bold text-left">
                                <p>Rank</p>
                                <div className="col-start-2 col-end-4 md:pl-12">
                                    <p>Team</p>
                                </div>
                                <div className="sm:hidden block">
                                    <p>W/L</p>
                                </div>
                                <p className="sm:block hidden">Earnings</p>
                                <p className="sm:block hidden">Points</p>
                            </th>
                            <tbody>
                                {majorData &&
                                    majorData.placings.map(
                                        (team: Team, idx: number) =>
                                            team && (
                                                <MajorStandings
                                                    team={team}
                                                    earnings={
                                                        MAJOR_PRIZES[
                                                            activeMajor
                                                        ][idx].earnings
                                                    }
                                                    points={
                                                        MAJOR_PRIZES[
                                                            activeMajor
                                                        ][idx].points
                                                    }
                                                    idx={idx}
                                                    key={team.id}
                                                />
                                            )
                                    )}
                            </tbody>
                            {majorPending && (
                                <div className="flex flex-col gap-2 w-full">
                                    {Array(12)
                                        .fill(null)
                                        .map((_, idx) => {
                                            return (
                                                <div className="h-[84px]">
                                                    <Skeleton
                                                        delay={idx * 200}
                                                    />
                                                </div>
                                            );
                                        })}
                                </div>
                            )}
                            {majorError && (
                                <p className="text-secondary text-center mt-12">
                                    {majorError.message}
                                </p>
                            )}
                        </table>
                    ) : (
                        <>
                            {matchesData && <Bracket matches={matchesData} />}
                            {matchesError && (
                                <p className="text-secondary text-center mt-12">
                                    {matchesError.message}
                                </p>
                            )}
                        </>
                    )}
                </TabPanel>
            </Section>
        </Page>
    );
};

export default MajorPage;
