import TeamCard from "@/components/TeamCard";
import Page from "@/components/templates/Page";
import Section from "@/components/templates/Section";
import { TEAM_DATA } from "@/ts/constants/TeamData";

const TeamsPage = () => {
    return (
        <Page title={"Call of Duty League Teams"}>
            <Section title="Teams">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    {TEAM_DATA.map((team) => (
                        <TeamCard team={team} variant="video" />
                    ))}
                </div>
            </Section>
        </Page>
    );
};

export default TeamsPage;
