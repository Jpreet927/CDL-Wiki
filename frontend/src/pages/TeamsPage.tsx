import Page from "@/components/templates/Page";
import { TEAM_DATA } from "@/ts/constants/TeamData";

const TeamsPage = () => {
    const team = TEAM_DATA[9];

    return <Page title={team.name}>TeamsPage</Page>;
};

export default TeamsPage;
