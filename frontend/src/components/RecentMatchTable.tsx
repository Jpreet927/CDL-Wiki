import { Match } from "@/ts/types/Match";
import { Team } from "@/ts/types/Team";
import Logo from "./templates/Logo";
import { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

type Props = {
    matches: Match[];
    team: Team;
    errorMessage?: string;
};

const RecentMatchTable = ({ matches, team, errorMessage }: Props) => {
    const [recentMatches, setRecentMatches] = useState<Match[]>([]);

    useEffect(() => {
        if (matches) {
            setRecentMatches(
                matches.map((match) => determineTeam1OrTeam2(match))
            );
        }
    }, [matches]);

    const determineTeam1OrTeam2 = (match: Match) => {
        if (match.team2.id === team.id) {
            [match["team1"], match["team2"]] = [match["team2"], match["team1"]];
            [match["team1Score"], match["team2Score"]] = [
                match["team2Score"],
                match["team1Score"],
            ];
        }

        return match;
    };

    return (
        <>
            <table className="border-separate">
                <thead className="text-left grid sm:grid-cols-7 grid-cols-5 md:px-12 px-2 pt-8 pb-2 gap-2 w-full items-center [&>*]:font-bold">
                    <th className="col-start-1 sm:col-end-4 col-end-2">
                        Versus
                    </th>
                    <th>Win/Loss</th>
                    <th>Score</th>
                    <th>Major</th>
                    <th>Date</th>
                </thead>
                <tbody>
                    {recentMatches.map((match) => (
                        <tr className="grid sm:grid-cols-7 grid-cols-5 md:px-12 px-2 py-6 gap-2 w-full bg-background hover:bg-background-2 transition-colors ease-in-out duration-100 border-b-background-2 border-b items-center">
                            <td className="col-start-1 sm:col-end-4 col-end-2">
                                <Link
                                    to={`/teams/${match.team2.id}`}
                                    className="flex gap-4"
                                >
                                    <div className="w-[15%] flex justify-center items-center max-h-[30px]">
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
                            <td
                                className={`font-bold
                            ${
                                match.team1Score > match.team2Score
                                    ? "text-green-500"
                                    : "text-red-500"
                            }
                            `}
                            >
                                {match.team1Score > match.team2Score
                                    ? "Win"
                                    : "Loss"}
                            </td>
                            <td>{`${match.team1Score} - ${match.team2Score}`}</td>
                            <td>{match.majorId}</td>
                            <td>{`${moment(match.date).format(
                                "MM/DD/YYYY"
                            )}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {errorMessage && (
                <p className="text-secondary text-center">{errorMessage}</p>
            )}
        </>
    );
};

export default RecentMatchTable;
