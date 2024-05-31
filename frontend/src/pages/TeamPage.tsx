import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import moment from "moment";
import Skeleton from "@/components/templates/Skeleton";
import Page from "@/components/templates/Page";
import Section from "@/components/templates/Section";
import TeamCard from "@/components/TeamCard";
import PlayerCard from "@/components/PlayerCard";
import UpcomingMatch from "@/components/UpcomingMatch";
import RecentMatchTable from "@/components/RecentMatchTable";
import { Player } from "@/ts/types/Player";
import { Match } from "@/ts/types/Match";
import { getTeamById } from "@/api/Teams";
import { getPlayersByTeamId } from "@/api/Players";
import {
    getMatchesByTeamAfterDatePaginated,
    getRecentMatchesByTeamId,
} from "@/api/Matches";

const TeamPage = () => {
    const { id } = useParams();

    const {
        // isPending: teamPending,
        error: teamError,
        data: team,
    } = useQuery({
        queryKey: ["teamData", id],
        queryFn: () => getTeamById(id!),
        enabled: !!id,
    });
    const {
        isPending: playersPending,
        error: playersError,
        data: players,
    } = useQuery({
        queryKey: ["playersData", id],
        queryFn: () => getPlayersByTeamId(id!),
        enabled: !!id,
    });
    const {
        isPending: recentMatchesPending,
        error: recentMatchesError,
        data: recentMatches,
    } = useQuery({
        queryKey: ["recentMatchesData", id],
        queryFn: () => getRecentMatchesByTeamId(id!, new Date(Date.now())),
        enabled: !!id,
    });
    const {
        isPending: upcomingMatchesPending,
        error: upcomingMatchesError,
        data: upcomingMatches,
    } = useQuery({
        queryKey: ["upcomingMatchesData", id],
        queryFn: () =>
            getMatchesByTeamAfterDatePaginated(
                id!,
                new Date("2024-01-01 00:00:00"),
                6,
                0
            ),
        enabled: !!id,
    });

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
                    {teamError && (
                        <p className="text-secondary text-center">
                            {teamError.message}
                        </p>
                    )}
                </Section>
                <Section title="Roster">
                    <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
                        {players &&
                            players.map((player: Player) => {
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
                        {playersPending &&
                            Array(4)
                                .fill(null)
                                .map((_, idx) => (
                                    <div className="aspect-square">
                                        <Skeleton delay={idx * 100} />
                                    </div>
                                ))}
                        {playersError && (
                            <p className="text-secondary text-center">
                                {playersError.message}
                            </p>
                        )}
                    </div>
                </Section>
                <Section title="Upcoming Matches">
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
                        {upcomingMatchesError && (
                            <p className="text-secondary text-center">
                                {upcomingMatchesError.message}
                            </p>
                        )}
                    </div>
                </Section>
                <Section title="Recent Matches">
                    {recentMatches && (
                        <RecentMatchTable
                            matches={recentMatches}
                            team={team}
                            errorMessage={recentMatchesError?.message}
                        />
                    )}
                    {recentMatchesPending && (
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
                    )}
                </Section>
            </Page>
        )
    );
};

export default TeamPage;
