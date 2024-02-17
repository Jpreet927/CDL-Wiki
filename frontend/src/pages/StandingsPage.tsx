import TeamStandings from "@/components/TeamStandings";
import Section from "@/components/templates/Section";
import { TEAM_DATA } from "@/ts/constants/TeamData";

const StandingsPage = () => {
    return (
        <div className="py-12">
            <Section title="League Standings">
                <table>
                    <th className="grid sm:grid-cols-7 grid-cols-5 md:px-12 px-2 pt-8 pb-2 gap-2 w-full items-center [&>*]:font-bold text-left">
                        <p>Rank</p>
                        <div className="col-start-2 sm:col-end-5 col-end-4 md:pl-12">
                            <p>Team</p>
                        </div>
                        <div className="sm:hidden block">
                            <p>W/L</p>
                        </div>
                        <p className="sm:block hidden">Wins</p>
                        <p className="sm:block hidden">Losses</p>
                        <p>Points</p>
                    </th>
                    <tbody>
                        {TEAM_DATA.map((team, idx) => (
                            <TeamStandings team={team} idx={idx} />
                        ))}
                    </tbody>
                </table>
            </Section>
        </div>
    );
};

export default StandingsPage;
