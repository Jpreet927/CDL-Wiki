import Section from "@/components/templates/Section";
import Hero from "@/components/home/Hero";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLE_DATA } from "@/ts/constants/ArticlesData";
import TeamCard from "@/components/TeamCard";
import UpcomingMatch from "@/components/UpcomingMatch";
import { useEffect, useState } from "react";
import { Team } from "@/ts/types/Team";
import { getTeams } from "@/api/Teams";
import Alert from "@/components/Alert";
import { Match } from "@/ts/types/Match";
import { getMatchesAfterDatePaginated } from "@/api/Matches";
import Button from "@/components/templates/Button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [teams, setTeams] = useState<Team[] | null>(null);
    const [upcomingMatches, setUpcomingMatches] = useState<Match[] | null>(
        null
    );
    const [upcomingMatchesError, setUpcomingMatchesError] =
        useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        getTeams().then((teams) => setTeams(teams));
        getMatchesAfterDatePaginated(new Date("2024-01-01 00:00:00"), 9, 0)
            .then((matches) => {
                setUpcomingMatches(matches.content);
            })
            .catch((err) => setUpcomingMatchesError(err.message));
    }, []);

    return (
        <div>
            <Hero />
            <Section title="Upcoming Matches">
                {upcomingMatches &&
                    new Date(Date.now()) > new Date(upcomingMatches[0].date) &&
                    new Date(Date.now()) <
                        new Date(
                            upcomingMatches[upcomingMatches.length - 1].date
                        ) && (
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
                    {upcomingMatches &&
                        upcomingMatches.map((match) => (
                            <UpcomingMatch match={match} />
                        ))}
                </div>
                <div className="w-full flex justify-center items-center">
                    <Button active={true} onClick={() => navigate("/matches")}>
                        View More
                    </Button>
                </div>
                {upcomingMatchesError && (
                    <p className="text-secondary text-center">
                        {upcomingMatchesError}
                    </p>
                )}
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
