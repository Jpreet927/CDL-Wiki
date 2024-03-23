import { useEffect, useState } from "react";
import Page from "@/components/templates/Page";
import Section from "@/components/templates/Section";
import { FUTURE_MATCHES } from "@/ts/constants/MatchData";
import TabPanel from "@/components/templates/TabPanel";
import { FormattedMatches, formatMatches } from "@/config/FormatMatches";

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
                    <div className="flex flex-col gap-8 mt-12">
                        {matches &&
                            Object.keys(matches).map((key) => (
                                <div className="flex flex-col gap-4">
                                    <p className="font-bold text-3xl">{key}</p>
                                    {matches[key].map((match) => (
                                        <div>
                                            <p>{match.team1.name}</p>
                                            <p>{match.team2.name}</p>
                                        </div>
                                    ))}
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
