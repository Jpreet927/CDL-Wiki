import TeamCard from "@/components/TeamCard";
import Page from "@/components/templates/Page";
import Section from "@/components/templates/Section";
import { TEAM_DATA } from "@/ts/constants/TeamData";
import { PLAYER_DATA } from "@/ts/constants/PlayerData";
import { MATCH_DATA } from "@/ts/constants/MatchData";
import PlayerCard from "@/components/PlayerCard";
import RecentMatchTable from "@/components/RecentMatchTable";
import moment from "moment";

const TeamPage = () => {
    const team = TEAM_DATA[0];

    return (
        <Page title={team.name} bannerType="TEAM" team={team}>
            <Section title="Summary">
                <div className="flex md:gap-16 gap-6 md:flex-row flex-col md:items-start items-center">
                    <div className="h-full aspect-square">
                        <TeamCard team={team} variant="SQUARE" />
                    </div>
                    <div className="flex flex-col gap-12 w-full">
                        <div className="flex flex-col gap-2">
                            <h2>{team.name}</h2>
                        </div>
                        <div className="w-full grid grid-cols-2 gap-y-12 gap-x-6">
                            <div>
                                <p className="text-secondary text-sm">
                                    Date Established
                                </p>
                                <p className="text-xl">{`${moment(
                                    team.created
                                ).format("MMMM Do, YYYY")}`}</p>
                            </div>
                            <div>
                                <p className="text-secondary text-sm">
                                    CDL Points
                                </p>
                                <p className="text-xl">{team.points}</p>
                            </div>
                            <div>
                                <p className="text-secondary text-sm">
                                    Affiliated Organizations
                                </p>
                                <p className="text-xl">{team.affiliated}</p>
                            </div>
                            <div>
                                <p className="text-secondary text-sm">
                                    Head Coach
                                </p>
                                <p className="text-xl">{team.coach}</p>
                            </div>
                            <div>
                                <p className="text-secondary text-sm">Owner</p>
                                <p className="text-xl">{team.owner}</p>
                            </div>
                            <div>
                                <p className="text-secondary text-sm">
                                    Location
                                </p>
                                <p className="text-xl">{team.location}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Section title="Roster">
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
                    {PLAYER_DATA.map((player) => {
                        return (
                            <div className="flex flex-col gap-4">
                                <PlayerCard player={player} key={player.id} />
                                <div>
                                    <p className="font-bold">{player.alias}</p>
                                    <p className="text-secondary">
                                        {player.name}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Section>
            <Section title="Recent Matches">
                <RecentMatchTable matches={MATCH_DATA} team={team} />
            </Section>
        </Page>
    );
};

export default TeamPage;
