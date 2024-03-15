import { PLAYER_STATS_DATA } from "@/ts/constants/PlayerStatsData";
import { PlayerStats } from "@/ts/types/PlayerStats";
import { MATCH_DATA } from "@/ts/constants/MatchData";
import Logo from "./templates/Logo";
import { Link } from "react-router-dom";
import { Match } from "@/ts/types/Match";
import Stat from "./templates/Stat";

const IndividualStatsTable = () => {
    const match: Match = MATCH_DATA[0];

    return (
        <table>
            <thead className="text-left grid sm:grid-cols-8 grid-cols-5 md:px-12 px-2 pt-8 pb-2 gap-2 w-full items-center [&>*]:font-bold">
                <th className="col-start-1 sm:col-end-4 col-end-2">Versus</th>
                <th>K/D</th>
                <th>Kills</th>
                <th>Deaths</th>
                <th>Assists</th>
                <th>Damage</th>
            </thead>
            <tbody>
                <tr className="grid sm:grid-cols-8 grid-cols-5 md:px-12 px-2 py-6 gap-2 w-full bg-background hover:bg-background-2 transition-colors ease-in-out duration-100 border-b-background-2 border-b items-center">
                    <td className="col-start-1 sm:col-end-4 col-end-2">
                        <Link
                            to={`/teams/${match.team2.id}`}
                            className="flex gap-4"
                        >
                            <div className="flex justify-center items-center h-[30px]">
                                <Logo
                                    srcDark={match.team2.logoLight}
                                    srcLight={match.team2.logoDark}
                                    alt={match.team2.name + "logo"}
                                />
                            </div>
                            <p className="sm:block hidden">
                                {match.team2.name}
                            </p>
                        </Link>
                    </td>
                    <td>
                        <Stat stat={1.2} extraClasses="font-bold" />
                    </td>
                    <td>78</td>
                    <td>65</td>
                    <td>19</td>
                    <td>4580</td>
                </tr>
            </tbody>
        </table>
    );
};

export default IndividualStatsTable;
