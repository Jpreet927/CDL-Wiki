import Section from "@/components/templates/Section";
import Hero from "@/components/home/Hero";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLE_DATA } from "@/ts/constants/ArticlesData";
import { TEAM_DATA } from "@/ts/constants/TeamData";
import { MATCH_DATA } from "@/ts/constants/MatchData";
import TeamCard from "@/components/TeamCard";
import UpcomingMatch from "@/components/UpcomingMatch";

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Section title="Upcoming Matches">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    {MATCH_DATA.map((match) => (
                        <UpcomingMatch match={match} />
                    ))}
                </div>
            </Section>
            <Section title="Teams">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    {TEAM_DATA.map((team) => (
                        <TeamCard team={team} variant="video" />
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
