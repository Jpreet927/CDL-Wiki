import TeamCard from "@/components/TeamCard";
import Page from "@/components/templates/Page";
import Section from "@/components/templates/Section";
import { TEAM_DATA } from "@/ts/constants/TeamData";
import { PLAYER_DATA } from "@/ts/constants/PlayerData";
import PlayerCard from "@/components/PlayerCard";

const TeamPage = () => {
    const team = TEAM_DATA[0];

    return (
        <Page title={team.name} bannerType="team" team={team}>
            <Section title="Summary">
                <div className="flex gap-24">
                    <div className="w-[40%]">
                        <TeamCard team={team} variant="square" />
                    </div>
                    <div className="h-[80%] grid grid-cols-2 gap-y-16 w-[60%]">
                        <div>
                            <p className="text-secondary">Team Name</p>
                            <p>{team.name}</p>
                        </div>
                        <div>
                            <p className="text-secondary">Date Established</p>
                            <p>{`${team.created}`}</p>
                        </div>
                        <div>
                            <p className="text-secondary">
                                Affiliated Organizations
                            </p>
                            <p>{team.affiliated}</p>
                        </div>
                        <div>
                            <p className="text-secondary">Head Coach</p>
                            <p>{team.coach}</p>
                        </div>
                        <div>
                            <p className="text-secondary">Owner</p>
                            <p>{team.owner}</p>
                        </div>
                        <div>
                            <p className="text-secondary">Location</p>
                            <p>{team.location}</p>
                        </div>
                    </div>
                </div>
            </Section>
            <Section title="Roster">
                <div className="grid grid-cols-4 gap-4">
                    {PLAYER_DATA.map((player) => (
                        <PlayerCard player={player} key={player.id} />
                    ))}
                </div>
            </Section>
            <Section title="Recent Matches">
                <div></div>
            </Section>
        </Page>
    );
};

export default TeamPage;
