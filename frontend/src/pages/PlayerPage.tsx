import { getPlayerById, getPlayersByTeamId } from "@/api/Players";
import IndividualStatsTable from "@/components/IndividualStatsTable";
import PlayerCard from "@/components/PlayerCard";
import TeamCard from "@/components/TeamCard";
import Page from "@/components/templates/Page";
import Section from "@/components/templates/Section";
import Stat from "@/components/templates/Stat";
import { Player } from "@/ts/types/Player";
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PlayerPage = () => {
    const [player, setPlayer] = useState<Player | null>(null);
    const [teammates, setTeammates] = useState<Player[]>([]);
    const { teamid, playerid } = useParams();

    useEffect(() => {
        if (playerid) {
            getPlayerById(playerid).then((player) => setPlayer(player));
        }
    }, [playerid]);

    useEffect(() => {
        if (teamid) {
            getPlayersByTeamId(teamid).then((players: Player[]) => {
                setTeammates(
                    players.filter(
                        (player: Player) => player.id !== Number(playerid)
                    )
                );
            });
        }
    }, [teamid]);

    return (
        player && (
            <Page
                title={`${player.alias} - ${player.team.name}`}
                bannerType="TEAM"
                team={player.team}
            >
                <Section title="Summary">
                    <div className="flex md:gap-16 gap-6 md:flex-row flex-col md:items-start items-center">
                        <div className="h-full aspect-square">
                            <PlayerCard player={player} />
                        </div>
                        <div className="flex flex-col gap-12 w-full">
                            <div className="flex flex-col gap-2">
                                <h2>{player.alias}</h2>
                                <p className="text-secondary">{player.name}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col gap-2">
                                    <h3>Player Details</h3>
                                </div>
                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-4 gap-x-4 gap-y-6">
                                    <div>
                                        <p className="text-secondary text-sm">
                                            Team Name
                                        </p>
                                        <p className="lg:text-xl text-md">{`${player.team.name}`}</p>
                                    </div>
                                    <div>
                                        <p className="text-secondary text-sm">
                                            Role
                                        </p>
                                        <p className="lg:text-xl text-md">{`${player.role}`}</p>
                                    </div>
                                    <div>
                                        <p className="text-secondary text-sm">
                                            Nationality
                                        </p>
                                        <p className="lg:text-xl text-md">{`${player.nationality}`}</p>
                                    </div>
                                    <div>
                                        <p className="text-secondary text-sm">
                                            Date of Birth
                                        </p>
                                        <p className="lg:text-xl text-md">{`${moment(
                                            player.dob
                                        ).format("MMMM Do, YYYY")}`}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col gap-2">
                                    <h3>Player Stats</h3>
                                </div>
                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-4 gap-x-4 gap-y-6">
                                    <div>
                                        <p className="text-secondary text-sm">
                                            Overall K/D
                                        </p>
                                        <Stat
                                            stat={1.1}
                                            extraClasses="lg:text-xl text-md font-bold"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-secondary text-sm">
                                            Hardpoint K/D
                                        </p>
                                        <Stat
                                            stat={1.3}
                                            extraClasses="lg:text-xl text-md font-bold"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-secondary text-sm">
                                            S&D K/D
                                        </p>
                                        <Stat
                                            stat={0.98}
                                            extraClasses="lg:text-xl text-md font-bold"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-secondary text-sm">
                                            Control K/D
                                        </p>
                                        <Stat
                                            stat={1.2}
                                            extraClasses="lg:text-xl text-md font-bold"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section title="Last 5 Matches">
                    <IndividualStatsTable />
                </Section>
                <Section title="Team">
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-4">
                        <div className="flex flex-col gap-4">
                            <TeamCard team={player.team} variant="SQUARE" />
                            <div>
                                <p className="font-bold">{player.team.name}</p>
                            </div>
                        </div>
                        {teammates.map((teammate) => (
                            <div className="flex flex-col gap-4">
                                <PlayerCard
                                    player={teammate}
                                    key={teammate.id}
                                />
                                <div>
                                    <p className="font-bold">
                                        {teammate.alias}
                                    </p>
                                    <p className="text-secondary">
                                        {teammate.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
            </Page>
        )
    );
};

export default PlayerPage;
