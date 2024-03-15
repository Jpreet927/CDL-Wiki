import IndividualStatsTable from "@/components/IndividualStatsTable";
import PlayerCard from "@/components/PlayerCard";
import TeamCard from "@/components/TeamCard";
import Page from "@/components/templates/Page";
import Section from "@/components/templates/Section";
import Stat from "@/components/templates/Stat";
import { PLAYER_DATA } from "@/ts/constants/PlayerData";
import { Player } from "@/ts/types/Player";
import moment from "moment";

const PlayerPage = () => {
    const player1: Player = PLAYER_DATA[0];

    return (
        <Page
            title={`${player1.alias} - ${player1.team.name}`}
            bannerType="team"
            team={player1.team}
        >
            <Section title="Summary">
                <div className="flex gap-16">
                    <div className="w-[33%]">
                        <PlayerCard player={player1} />
                    </div>
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-2">
                            <h2>{player1.alias}</h2>
                            <p className="text-secondary">{player1.name}</p>
                        </div>
                        <div className="grid grid-cols-4 gap-x-4 gap-y-6">
                            <div>
                                <p className="text-secondary text-sm">
                                    Team Name
                                </p>
                                <p className="text-xl">{`${player1.team.name}`}</p>
                            </div>
                            <div>
                                <p className="text-secondary text-sm">Role</p>
                                <p className="text-xl">{`${player1.role}`}</p>
                            </div>
                            <div>
                                <p className="text-secondary text-sm">
                                    Nationality
                                </p>
                                <p className="text-xl">{`${player1.nationality}`}</p>
                            </div>
                            <div>
                                <p className="text-secondary text-sm">
                                    Date of Birth
                                </p>
                                <p className="text-xl">{`${moment(
                                    player1.dob
                                ).format("MMMM Do, YYYY")}`}</p>
                            </div>
                            <div>
                                <p className="text-secondary text-sm">
                                    Overall K/D
                                </p>
                                <Stat
                                    stat={1.1}
                                    extraClasses="text-xl font-bold"
                                />
                            </div>
                            <div>
                                <p className="text-secondary text-sm">
                                    Hardpoint K/D
                                </p>
                                <Stat
                                    stat={1.3}
                                    extraClasses="text-xl font-bold"
                                />
                            </div>
                            <div>
                                <p className="text-secondary text-sm">
                                    S&D K/D
                                </p>
                                <Stat
                                    stat={0.98}
                                    extraClasses="text-xl font-bold"
                                />
                            </div>
                            <div>
                                <p className="text-secondary text-sm">
                                    Control K/D
                                </p>
                                <Stat
                                    stat={1.2}
                                    extraClasses="text-xl font-bold"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Section title="Last 5 Matches">
                <IndividualStatsTable />
            </Section>
            <Section title="Team">
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
                    <TeamCard team={player1.team} variant="SQUARE" />
                    <PlayerCard player={PLAYER_DATA[1]} />
                    <PlayerCard player={PLAYER_DATA[2]} />
                    <PlayerCard player={PLAYER_DATA[3]} />
                </div>
            </Section>
        </Page>
    );
};

export default PlayerPage;
