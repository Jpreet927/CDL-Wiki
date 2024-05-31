import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import moment from "moment";
import IndividualStatsTable from "@/components/IndividualStatsTable";
import PlayerCard from "@/components/PlayerCard";
import TeamCard from "@/components/TeamCard";
import Page from "@/components/templates/Page";
import Section from "@/components/templates/Section";
import Stat from "@/components/templates/Stat";
import { getPlayerById, getPlayersByTeamId } from "@/api/Players";
import { Player } from "@/ts/types/Player";
import Skeleton from "@/components/templates/Skeleton";

const PlayerPage = () => {
    const { teamid, playerid } = useParams();

    const {
        isPending: teammatesPending,
        error: teammatesError,
        data: teammates,
    } = useQuery({
        queryKey: ["playersData", teamid],
        queryFn: () => getPlayersByTeamId(teamid!),
        enabled: !!teamid,
    });
    const {
        // isPending: playerPending,
        error: playerError,
        data: player,
    } = useQuery({
        queryKey: ["playerData", playerid],
        queryFn: () => getPlayerById(playerid!),
        enabled: !!playerid,
    });

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
                    {playerError && (
                        <p className="text-secondary text-center">
                            {playerError.message}
                        </p>
                    )}
                </Section>
                <Section title="Last 5 Matches">
                    <IndividualStatsTable />
                    {/* {recentMatchesPending && (
                        <div className="flex flex-col gap-2">
                            {Array(5)
                                .fill(null)
                                .map((_, idx) => {
                                    return (
                                        <div className="h-[84px]">
                                            <Skeleton delay={idx * 200} />
                                        </div>
                                    );
                                })}
                        </div>
                    )}
                    {recentMatchesError && (
                        <p className="text-secondary text-center">
                            {recentMatchesError.message}
                        </p>
                    )} */}
                </Section>
                <Section title="Team">
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-4">
                        <div className="flex flex-col gap-4">
                            <TeamCard team={player.team} variant="SQUARE" />
                            <div>
                                <p className="font-bold">{player.team.name}</p>
                            </div>
                        </div>
                        {teammates
                            .filter(
                                (player: Player) =>
                                    player.id !== Number(playerid)
                            )
                            .map((teammate: Player) => (
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
                        {teammatesPending &&
                            Array(4)
                                .fill(null)
                                .map((_, idx) => (
                                    <div className="aspect-square">
                                        <Skeleton delay={idx * 100} />
                                    </div>
                                ))}
                        {teammatesError && (
                            <p className="text-secondary text-center">
                                {teammatesError.message}
                            </p>
                        )}
                    </div>
                </Section>
            </Page>
        )
    );
};

export default PlayerPage;
