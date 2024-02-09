import { extractColors } from "extract-colors";
import { FinalColor } from "extract-colors/lib/types/Color";
import { Team } from "@/ts/types/Team";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const TeamCard = ({ team }: { team: Team }) => {
    const [colors, setColors] = useState<FinalColor[]>([]);

    useEffect(() => {
        getColorsFromImage(team.logo);
    }, []);

    const getColorsFromImage = async (src: string) => {
        const res = await extractColors(src);
        setColors(res);
        console.log(res);
    };

    return (
        <Link to={`/teams/${team.id}`} target="_blank">
            <div className="overflow-hidden aspect-video flex items-center justify-center bg-background-2 relative group">
                <div className="absolute top-0 left-0 w-full h-[150%] flex justify-center items-end opacity-0 group-hover:opacity-100 ease-in-out duration-500">
                    <div
                        className={`h-[200px] w-[200px] blur-3xl ${
                            colors.length > 0 ? `bg-[${colors[0].hex}]` : ""
                        }  `}
                    ></div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                    <h2>{team.name}</h2>
                </div>
                <img
                    src={team.logo}
                    alt="Test Image"
                    className="h-[50px] z-10"
                />
            </div>
        </Link>
    );
};

export default TeamCard;
