import { useEffect, useState } from "react";
import Page from "@/components/templates/Page";
import Section from "@/components/templates/Section";
import TabPanel from "@/components/templates/TabPanel";
import UpcomingMatch from "@/components/UpcomingMatch";
import PastMatch from "@/components/PastMatch";
import { FormattedMatches, formatMatches } from "@/config/FormatMatches";
import { FUTURE_MATCHES } from "@/ts/constants/MatchData";

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

    useEffect(() => {
        setMatches(formatMatches(FUTURE_MATCHES));
    }, []);

    return (
        <Page title="Matches" bannerType="DEFAULT">
            <Section title="Matches">
                <TabPanel
                    tabItems={majors}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                >
                    <div className="flex mt-8">
                        <button
                            className={`${
                                timeline === "Upcoming"
                                    ? "bg-background-2 font-bold"
                                    : "bg-background"
                            } px-12 py-4 w-[200px] text-center cursor-pointer hover:bg-background-2`}
                            onClick={() => setTimeline("Upcoming")}
                        >
                            <p>Upcoming</p>
                        </button>
                        <button
                            className={`${
                                timeline === "Past"
                                    ? "bg-background-2 font-bold"
                                    : "bg-background"
                            } px-12 py-4 w-[200px] text-center cursor-pointer hover:bg-background-2`}
                            onClick={() => setTimeline("Past")}
                        >
                            <p>Past</p>
                        </button>
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
                    </div>
                </TabPanel>
            </Section>
        </Page>
    );
};

export default MatchesPage;
