import { useEffect, useState } from "react";
import { extractColors } from "extract-colors";
import { Team } from "@/ts/types/Team";
import { Link } from "react-router-dom";
import Logo from "./templates/Logo";
import { TEAM_LOGOS } from "@/ts/constants/TeamLogos";

type Props = {
    team: Team;
    variant: "VIDEO" | "SQUARE";
};

const TeamCard = ({ team, variant }: Props) => {
    const [color, setColor] = useState<string>("");

    useEffect(() => {
        getColorsFromImage(TEAM_LOGOS[team.id - 1].srcLight);
    }, [team]);

    const getColorsFromImage = async (src: string) => {
        const res = await extractColors(src);
        let bgProperty: string = res[0].hex;
        setColor(bgProperty);
    };

    return (
        <Link to={`/teams/${team.id}`}>
            <div
                className={`overflow-hidden ${
                    variant.toUpperCase() === "VIDEO"
                        ? "aspect-video"
                        : "aspect-square"
                } flex items-center justify-center bg-background-2 relative group`}
            >
                <div className="absolute top-0 left-0 w-full h-[150%] flex justify-center items-end opacity-0 group-hover:opacity-100 ease-in-out duration-500 z-[1]">
                    <div
                        className={`${
                            variant.toUpperCase() === "VIDEO"
                                ? "w-[37%]"
                                : "w-[50%]"
                        } aspect-square blur-2xl bg-white/40`}
                    ></div>
                </div>
                <div className="absolute top-0 left-0 w-full h-[150%] flex justify-center items-end opacity-0 group-hover:opacity-100 ease-in-out duration-500">
                    <div
                        className={`${
                            variant.toUpperCase() === "VIDEO"
                                ? "w-[50%]"
                                : "w-[75%]"
                        } aspect-square blur-3xl`}
                        style={{ backgroundColor: color }}
                    ></div>
                    <div className="w-full h-full bg-gradient-to-b from-background to-black/0 absolute 0 top-0 left-0"></div>
                </div>
                <div
                    className={`absolute bottom-0 left-0 w-full p-6 z-10 ${
                        variant.toUpperCase() === "VIDEO" ? "block" : "hidden"
                    }`}
                >
                    <h3>{team.name}</h3>
                </div>
                <div
                    className={`${
                        variant.toUpperCase() === "VIDEO"
                            ? "h-[50px]"
                            : "h-[33%]"
                    } z-10`}
                >
                    <Logo
                        srcDark={team.logoLight}
                        srcLight={team.logoDark}
                        alt={`${team.name} logo`}
                    />
                </div>
            </div>
        </Link>
    );
};

export default TeamCard;
