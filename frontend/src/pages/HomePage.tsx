import { useNavigate } from "react-router-dom";
import Section from "@/components/templates/Section";
import Button from "@/components/templates/Button";
import Skeleton from "@/components/templates/Skeleton";
import Hero from "@/components/home/Hero";
import ArticleCard from "@/components/ArticleCard";
import TeamCard from "@/components/TeamCard";
import UpcomingMatch from "@/components/UpcomingMatch";
import Alert from "@/components/Alert";
import { getTeams } from "@/api/Teams";
import { getMatchesAfterDatePaginated } from "@/api/Matches";
import { Team } from "@/ts/types/Team";
import { Match } from "@/ts/types/Match";
import { ARTICLE_DATA } from "@/ts/constants/ArticlesData";
import { useQuery } from "@tanstack/react-query";
import TableOfContents from "@/components/templates/TableOfContents";

const HomePage = () => {
    const navigate = useNavigate();
    const {
        isPending: teamsPending,
        error: teamsError,
        data: teams,
    } = useQuery({
        queryKey: ["teamData"],
        queryFn: getTeams,
    });
    const {
        isPending: upcomingMatchesPending,
        error: upcomingMatchesError,
        data: upcomingMatches,
    } = useQuery({
        queryKey: ["matchData"],
        queryFn: () => getMatchesAfterDatePaginated(new Date(), 9, 0),
    });

    return (
        <div>
            <Hero />
            <div className="flex 2xl:px-80 xl:px-64 lg:px-24 md:px-24 sm:px-12 px-6  pt-20">
                <div className="flex flex-col gap-8 ">
                    <Section title="Upcoming Matches">
                        {upcomingMatches &&
                            new Date(Date.now()) >
                                new Date(upcomingMatches.content[0].date) &&
                            new Date(Date.now()) <
                                new Date(
                                    upcomingMatches.content[
                                        upcomingMatches.content.length - 1
                                    ].date
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
                                upcomingMatches.content.map((match: Match) => (
                                    <UpcomingMatch match={match} />
                                ))}

                            {upcomingMatchesPending &&
                                Array(9)
                                    .fill(null)
                                    .map((_, idx) => {
                                        return (
                                            <div className="h-[88px]">
                                                <Skeleton delay={idx * 100} />
                                            </div>
                                        );
                                    })}
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <Button
                                active={true}
                                onClick={() => navigate("/matches")}
                            >
                                View More
                            </Button>
                        </div>
                        {upcomingMatchesError && (
                            <p className="text-secondary text-center">
                                {upcomingMatchesError.message}
                            </p>
                        )}
                    </Section>
                    <Section title="Teams">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                            {teams &&
                                teams.map((team: Team) => {
                                    return (
                                        <TeamCard team={team} variant="VIDEO" />
                                    );
                                })}
                            {teamsPending &&
                                Array(9)
                                    .fill(null)
                                    .map((_, idx) => {
                                        return (
                                            <div className="aspect-video">
                                                <Skeleton delay={idx * 100} />
                                            </div>
                                        );
                                    })}
                        </div>
                        {teamsError && (
                            <p className="text-secondary text-center mt-4">
                                {teamsError.message}
                            </p>
                        )}
                    </Section>
                    <Section title="Latest News">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                            {ARTICLE_DATA.map((article) => (
                                <ArticleCard article={article} />
                            ))}
                        </div>
                    </Section>
                </div>
                <div className="lg:block hidden">
                    <TableOfContents />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
