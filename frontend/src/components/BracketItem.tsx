import { Team } from "@/ts/types/Team";
import Logo from "./templates/Logo";

type Props = {
    team: Team;
    score: number;
    winner: boolean;
};

const BracketItem = ({ team, score, winner }: Props) => {
    return (
        <div className="h-16 w-80 flex items-center justify-between gap-2">
            <div className="h-full flex items-center gap-1 bg-background-2 w-full">
                <div className="h-full aspect-square p-4 grid items-center">
                    <Logo
                        srcDark={team.logoLight}
                        srcLight={team.logoDark}
                        alt={team.name + " logo"}
                    />
                </div>
                <p className="">{team.name}</p>
            </div>
            <div
                className={`h-full aspect-square grid items-center justify-center ${
                    winner ? "bg-stat-green" : "bg-background-2"
                }`}
            >
                <p className="text-2xl font-bold">{score}</p>
            </div>
        </div>
    );
};

export default BracketItem;
