import { Team } from "@/ts/types/Team";
import { Link } from "react-router-dom";
import Logo from "./templates/Logo";

type Props = { team: Team; earnings: number; points: number; idx: number };

const MajorStandings = ({ team, earnings, points, idx }: Props) => {
    return (
        <tr className="grid grid-cols-5 md:px-12 px-2 py-6 gap-2 w-full bg-background hover:bg-background-2 transition-colors ease-in-out duration-100 border-b-background-2 border-b items-center">
            <p>{idx + 1}</p>
            <Link
                to={`/teams/${team.id}`}
                className="flex gap-2 col-start-2 col-end-4"
            >
                <div className="w-[25%] flex justify-center items-center max-h-[30px]">
                    <Logo
                        srcDark={team.logoLight}
                        srcLight={team.logoDark}
                        alt={team.name + "logo"}
                    />
                </div>
                <p className="sm:block hidden">{team.name}</p>
            </Link>
            <p>{`$${earnings.toLocaleString()}`}</p>
            <p>{points}</p>
        </tr>
    );
};

export default MajorStandings;
