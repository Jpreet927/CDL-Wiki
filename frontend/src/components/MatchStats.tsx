import { PLAYER_STATS_DATA } from "@/ts/constants/PlayerStatsData";
import Stat from "./templates/Stat";
import Logo from "./templates/Logo";

const MatchStats = () => {
    return (
        <table className="">
            <thead className="text-left grid sm:grid-cols-8 grid-cols-5 md:px-12 px-2 py-6 gap-2 w-full items-center [&>*]:font-bold">
                <th className="col-start-1 sm:col-end-4 col-end-2">Player</th>
                <th>Kills</th>
                <th>Deaths</th>
                <th>K/D Ratio</th>
                <th>+/-</th>
                <th>Damage</th>
            </thead>
            <tbody>
                {PLAYER_STATS_DATA.map((stats) => (
                    <tr className="grid sm:grid-cols-8 grid-cols-5 md:px-12 px-2 py-6 gap-2 w-full bg-background hover:bg-background-2 transition-colors ease-in-out duration-100 border-b-background-2 border-b items-center">
                        <td className="col-start-1 sm:col-end-4 col-end-2 flex gap-4">
                            <div className="h-[30px]">
                                <Logo
                                    srcDark={stats.player.team.logoLight}
                                    srcLight={stats.player.team.logoDark}
                                    alt={stats.player.team.name + " logo"}
                                />
                            </div>
                            {stats.player.alias}
                        </td>
                        <td>{stats.kills}</td>
                        <td>{stats.deaths}</td>
                        <td>
                            <Stat
                                stat={+(stats.kills / stats.deaths).toFixed(2)}
                            />
                        </td>
                        <td
                            className={
                                stats.kills / stats.deaths > 1.0
                                    ? "text-stat-green"
                                    : "text-stat-red"
                            }
                        >
                            {stats.kills / stats.deaths >= 0
                                ? `+${stats.kills - stats.deaths}`
                                : `-${stats.deaths - stats.kills}`}
                        </td>
                        <td>{stats.damage}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MatchStats;
