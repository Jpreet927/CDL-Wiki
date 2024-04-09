import TeamCard from "@/components/TeamCard";
import Page from "@/components/templates/Page";
import Section from "@/components/templates/Section";
import PlayerCard from "@/components/PlayerCard";
import RecentMatchTable from "@/components/RecentMatchTable";
import moment from "moment";
import { Team } from "@/ts/types/Team";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTeamById } from "@/api/Teams";
import { Player } from "@/ts/types/Player";
import { getPlayersByTeamId } from "@/api/Players";
import { Match } from "@/ts/types/Match";
import { getRecentMatchesByTeamId } from "@/api/Matches";

const TeamPage = () => {
    const [team, setTeam] = useState<Team | null>(null);
    const [players, setPlayers] = useState<Player[]>([]);
    const [matches, setMatches] = useState<Match[]>([]);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getTeamById(id).then((team) => setTeam(team));
            getPlayersByTeamId(id).then((players) => setPlayers(players));
            getRecentMatchesByTeamId(id, new Date(Date.now())).then((matches) =>
                setMatches(matches)
            );
        }
    }, [id]);

    return (
        team && (
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
                                    <p className="text-secondary text-sm">
                                        Owner
                                    </p>
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
                        {players &&
                            players.map((player) => {
                                return (
                                    <div className="flex flex-col gap-4">
                                        <PlayerCard
                                            player={player}
                                            key={player.id}
                                        />
                                        <div>
                                            <p className="font-bold">
                                                {player.alias}
                                            </p>
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
                    {matches && (
                        <RecentMatchTable matches={matches} team={team} />
                    )}
                </Section>
            </Page>
        )
    );
};

export default TeamPage;
