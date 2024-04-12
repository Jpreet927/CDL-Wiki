import { useEffect, useState } from "react";
import Page from "@/components/templates/Page";
import Section from "@/components/templates/Section";
import TabPanel from "@/components/templates/TabPanel";
import UpcomingMatch from "@/components/UpcomingMatch";
import PastMatch from "@/components/PastMatch";
import { FormattedMatches, formatMatches } from "@/config/FormatMatches";
import { TEAM_LOGOS } from "@/ts/constants/TeamLogos";
import { Select } from "antd";
import {
    getMatchesAfterDate,
    getMatchesBeforeDate,
    getMatchesByMajorAfterDate,
    getMatchesByMajorBeforeDate,
} from "@/api/Matches";
import Button from "@/components/templates/Button";

const majors = [
    { title: "Season" },
    { title: "Major 1" },
    { title: "Major 2" },
    { title: "Major 3" },
    { title: "Major 4" },
    { title: "Champs" },
];

const MatchesPage = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [timeline, setTimeline] = useState<string>("Upcoming");
    const [matches, setMatches] = useState<FormattedMatches | null>({});
    const [unfilteredMatches, setUnfilteredMatches] =
        useState<FormattedMatches | null>({});
    const [matchesError, setMatchesError] = useState<string>("");
    const [page, setPage] = useState<number>(0);

    useEffect(() => {
        setMatches(null);
        setMatchesError("");

        if (activeTab === 0) {
            if (timeline === "Past") {
                getMatchesBeforeDate(new Date(Date.now()))
                    .then((matches) => {
                        setMatches(formatMatches(matches));
                        setUnfilteredMatches(formatMatches(matches));
                    })
                    .catch((err) => setMatchesError(err.message));
            } else {
                getMatchesAfterDate(new Date(Date.now()))
                    .then((matches) => {
                        setMatches(formatMatches(matches));
                        setUnfilteredMatches(formatMatches(matches));
                    })
                    .catch((err) => setMatchesError(err.message));
            }
        } else {
            if (timeline === "Past") {
                getMatchesByMajorBeforeDate(
                    activeTab + "",
                    new Date(Date.now())
                )
                    .then((matches) => {
                        setMatches(formatMatches(matches));
                        setUnfilteredMatches(formatMatches(matches));
                    })
                    .catch((err) => setMatchesError(err.message));
            } else {
                getMatchesByMajorAfterDate(activeTab + "", new Date(Date.now()))
                    .then((matches) => {
                        setMatches(formatMatches(matches));
                        setUnfilteredMatches(formatMatches(matches));
                    })
                    .catch((err) => setMatchesError(err.message));
            }
        }
    }, [activeTab, timeline]);

    const handleSelect = (values: any) => {
        const valuesSet = new Set(values);
        if (valuesSet.size == 0 || valuesSet.has(-1)) {
            setMatches(unfilteredMatches);
            return;
        }

        let filteredMatches: FormattedMatches = {};
        Object.keys(matches!).forEach((key) => {
            filteredMatches[key] = [];
        });

        Object.keys(matches!).forEach((key) => {
            filteredMatches[key] = matches![key].filter(
                (match) =>
                    valuesSet.has(Number(match.team1.id)) ||
                    valuesSet.has(Number(match.team2.id))
            );

            if (filteredMatches[key].length === 0) delete filteredMatches[key];
        });

        setMatches(filteredMatches);
    };

    const handleLoadMore = () => {
        setPage((prev) => prev + 1);
    };

    return (
        <Page title="Matches" bannerType="DEFAULT">
            <Section title="Matches">
                <TabPanel
                    tabItems={majors}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                >
                    <div className="flex justify-between items-center mt-8">
                        <div className="flex gap-4 items-center">
                            <button
                                className={`${
                                    timeline === "Upcoming"
                                        ? "font-bold bg-background-2"
                                        : "bg-background"
                                } px-12 py-4 w-[200px] text-center cursor-pointer hover:bg-background-2 rounded-md transition-colors duration-300 ease-in-out`}
                                onClick={() => setTimeline("Upcoming")}
                            >
                                <p>Upcoming</p>
                            </button>
                            <div className="w-[1px] h-[50px] bg-background-2"></div>
                            <button
                                className={`${
                                    timeline === "Past"
                                        ? "font-bold bg-background-2"
                                        : "bg-background"
                                } px-12 py-4 w-[200px] text-center cursor-pointer hover:bg-background-2 rounded-md transition-colors duration-300 ease-in-out`}
                                onClick={() => setTimeline("Past")}
                            >
                                <p>Past</p>
                            </button>
                        </div>
                        <Select
                            mode="multiple"
                            allowClear
                            placeholder="Select a team"
                            className="w-[250px] bg-background [&>*]:!bg-background [&>*]:!text-primary [&>*]:!border-background-2 [&>*]:!placeholder-red-500"
                            dropdownStyle={{
                                background: "rgba(var(--background))",
                                color: "white",
                            }}
                            onChange={handleSelect}
                            options={[
                                { id: -1, team: "All" },
                                ...TEAM_LOGOS,
                            ].map((team) => {
                                return {
                                    value: team.id,
                                    label: team.team,
                                };
                            })}
                        />
                    </div>
                    <div className="flex flex-col gap-8 mt-12">
                        {matches &&
                            Object.keys(matches).map((key) => (
                                <div className="flex flex-col">
                                    <p className="font-bold text-3xl mb-4">
                                        {key}
                                    </p>
                                    {matches[key].map((match) =>
                                        timeline == "Upcoming" ? (
                                            <UpcomingMatch match={match} />
                                        ) : (
                                            <PastMatch match={match} />
                                        )
                                    )}
                                    <div className="w-full h-[1px] bg-background-2 mt-4"></div>
                                </div>
                            ))}
                        {matchesError && (
                            <p className="text-secondary text-center">
                                {matchesError}
                            </p>
                        )}
                    </div>
                    <div className="w-full flex justify-center mt-8">
                        <Button onClick={handleLoadMore}>Load More</Button>
                    </div>
                </TabPanel>
            </Section>
        </Page>
    );
};

export default MatchesPage;
