import { useQuery } from "@tanstack/react-query";
import { getTeams } from "@/api/Teams";
import TeamCard from "@/components/TeamCard";
import Page from "@/components/templates/Page";
import Section from "@/components/templates/Section";
import Skeleton from "@/components/templates/Skeleton";
import { Team } from "@/ts/types/Team";

const TeamsPage = () => {
    const {
        isPending,
        error,
        data: teams,
    } = useQuery({ queryKey: ["teamData"], queryFn: getTeams });

    return (
        <Page title={"Call of Duty League Teams"} bannerType="DEFAULT">
            <Section title="Teams">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    {teams &&
                        teams.map((team: Team) => (
                            <TeamCard
                                team={team}
                                variant="VIDEO"
                                key={team.id}
                            />
                        ))}

                    {isPending &&
                        Array(9)
                            .fill(null)
                            .map((_, idx) => {
                                return (
                                    <div className="aspect-video">
                                        <Skeleton delay={idx * 100} />
                                    </div>
                                );
                            })}
                    {error && (
                        <p className="text-secondary text-center mt-4">
                            {error.message}
                        </p>
                    )}
                </div>
            </Section>
        </Page>
    );
};

export default TeamsPage;
