import Section from "@/components/templates/Section";
import Hero from "@/components/home/Hero";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLE_DATA } from "@/ts/constants/ArticlesData";
import { MATCH_DATA } from "@/ts/constants/MatchData";
import TeamCard from "@/components/TeamCard";
import UpcomingMatch from "@/components/UpcomingMatch";
import { useEffect, useState } from "react";
import { Team } from "@/ts/types/Team";
import { getTeams } from "@/api/Teams";
import Alert from "@/components/Alert";

const HomePage = () => {
    const [teams, setTeams] = useState<Team[] | null>(null);

    useEffect(() => {
        getTeams().then((teams) => setTeams(teams));
    }, []);

    return (
        <div>
            <Hero />
            <Section title="Upcoming Matches">
                {new Date(Date.now()) > new Date(MATCH_DATA[0].date) &&
                    new Date(Date.now()) <
                        new Date(MATCH_DATA[MATCH_DATA.length - 1].date) && (
                        <Alert>
                            <p>
                                The Call of Duty League is live now on{" "}
                                <a
                                    href="https://www.youtube.com/@CODLeague"
                                    className="underline underline-offset-4"
                                >
                                    YouTube
                                </a>
                                !
                            </p>
                        </Alert>
                    )}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    {MATCH_DATA.map((match) => (
                        <UpcomingMatch match={match} />
                    ))}
                </div>
            </Section>
            <Section title="Teams">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    {teams &&
                        teams.map((team) => (
                            <TeamCard team={team} variant="VIDEO" />
                        ))}
                </div>
            </Section>
            <Section title="Latest News">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    {ARTICLE_DATA.map((article) => (
                        <ArticleCard article={article} />
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default HomePage;
