import { useEffect, useState, useContext } from "react";
import { extractColors } from "extract-colors";
import { Team } from "@/ts/types/Team";
import { Link } from "react-router-dom";
import { ThemeContext } from "@/context/ThemeProvider";

const TeamCard = ({ team }: { team: Team }) => {
    const [color, setColor] = useState<string>("");
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        getColorsFromImage(team.logoLight);
    }, []);

    const getColorsFromImage = async (src: string) => {
        const res = await extractColors(src);
        let bgProperty: string = res[0].hex;
        setColor(bgProperty);
        console.log(res);
    };

    return (
        <Link to={`/teams/${team.id}`} target="_blank">
            <div className="overflow-hidden aspect-video flex items-center justify-center bg-background-2 relative group">
                <div className="absolute top-0 left-0 w-full h-[150%] flex justify-center items-end opacity-0 group-hover:opacity-100 ease-in-out duration-500 z-[1]">
                    <div
                        className={`w-[37%] aspect-square blur-2xl bg-white/40`}
                    ></div>
                </div>
                <div className="absolute top-0 left-0 w-full h-[150%] flex justify-center items-end opacity-0 group-hover:opacity-100 ease-in-out duration-500">
                    <div
                        className={`w-[50%] aspect-square blur-3xl`}
                        style={{ backgroundColor: color }}
                    ></div>
                    <div className="w-full h-full bg-gradient-to-b from-background to-black/0 absolute 0 top-0 left-0"></div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                    <h2>{team.name}</h2>
                </div>
                <img
                    src={theme === "dark" ? team.logoLight : team.logoDark}
                    alt="Test Image"
                    className="h-[50px] z-10"
                />
            </div>
        </Link>
    );
};

export default TeamCard;
