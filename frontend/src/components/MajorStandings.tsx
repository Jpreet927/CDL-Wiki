import { Team } from "@/ts/types/Team";
import { Link } from "react-router-dom";
import Logo from "./templates/Logo";

const MajorStandings = ({ team, idx }: { team: Team; idx: number }) => {
    return (
        <tr className="grid sm:grid-cols-7 grid-cols-5 md:px-12 px-2 py-6 gap-2 w-full bg-background hover:bg-background-2 transition-colors ease-in-out duration-100 border-b-background-2 border-b items-center">
            <p>{idx + 1}</p>
            <Link
                to={`/teams/${team.id}`}
                className="flex gap-2 col-start-2 sm:col-end-5 col-end-4"
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
        </tr>
    );
};

export default MajorStandings;
