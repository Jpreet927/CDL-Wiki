import { getTeams } from "@/api/Teams";
import TeamCard from "@/components/TeamCard";
import Page from "@/components/templates/Page";
import Section from "@/components/templates/Section";
import { Team } from "@/ts/types/Team";
import { useEffect, useState } from "react";

const TeamsPage = () => {
    const [teams, setTeams] = useState<Team[] | null>(null);

    useEffect(() => {
        getTeams().then((teams) => setTeams(teams));
    }, []);

    return (
        <Page title={"Call of Duty League Teams"} bannerType="DEFAULT">
            <Section title="Teams">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    {teams &&
                        teams.map((team) => (
                            <TeamCard
                                team={team}
                                variant="VIDEO"
                                key={team.id}
                            />
                        ))}
                </div>
            </Section>
        </Page>
    );
};

export default TeamsPage;
