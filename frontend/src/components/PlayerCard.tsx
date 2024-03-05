import { ThemeContext } from "@/context/ThemeProvider";
import { Player } from "@/ts/types/Player";
import { extractColors } from "extract-colors";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PlayerCard = ({ player }: { player: Player }) => {
    const [color, setColor] = useState<string>("");
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        getColorsFromImage(player.team.logoLight);
        console.log(theme);
    }, []);

    const getColorsFromImage = async (src: string) => {
        const res = await extractColors(src);
        let bgProperty: string = res[0].hex;
        setColor(bgProperty);
    };

    return (
        <Link to={`/player/${player.id}`} className="flex flex-col gap-4">
            <div className="flex items-end justify-center bg-background-2 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[150%] flex justify-center items-end opacity-0 group-hover:opacity-100 ease-in-out duration-500 z-[1]">
                    <div
                        className={`w-[75%] aspect-square blur-2xl bg-white/40`}
                    ></div>
                </div>
                <div className="absolute top-0 left-0 w-full h-[130%] flex justify-center items-end opacity-0 group-hover:opacity-100 ease-in-out duration-500 z-[2]">
                    <div
                        className={`w-[80%] aspect-square blur-3xl`}
                        style={{ backgroundColor: color }}
                    ></div>
                    <div className="w-full h-full bg-gradient-to-b from-background to-black/0 absolute 0 top-0 left-0"></div>
                </div>
                <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
                    <img
                        src={player.team.logoDark}
                        alt=""
                        className="max-h-[80%] max-w-[80%] grayscale brightness-0 opacity-25 z-[1]"
                    />
                </div>
                <img
                    src={player.headshot}
                    alt={"Headshot image of " + player.alias}
                    className="object-cover h-[90%] z-10"
                />
            </div>
            <div>
                <p className="font-bold">{player.alias}</p>
                <p className="text-secondary">{player.name}</p>
            </div>
        </Link>
    );
};

export default PlayerCard;
