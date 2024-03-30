import { useEffect, useState } from "react";
import Page from "@/components/templates/Page";
import Section from "@/components/templates/Section";
import TabPanel from "@/components/templates/TabPanel";
import UpcomingMatch from "@/components/UpcomingMatch";
import PastMatch from "@/components/PastMatch";
import { FormattedMatches, formatMatches } from "@/config/FormatMatches";
import { FUTURE_MATCHES } from "@/ts/constants/MatchData";
import Dropdown from "@/components/templates/Dropdown";
import { TEAM_LOGOS } from "@/ts/constants/TeamLogos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Select } from "antd";

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

    const handleSelect = (value: string) => {};

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
                                { id: 0, team: "All" },
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
                    </div>
                </TabPanel>
            </Section>
        </Page>
    );
};

export default MatchesPage;
