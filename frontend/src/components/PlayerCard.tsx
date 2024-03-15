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
        <Link to={`/teams/${player.team.id}/players/${player.id}`}>
            <div className="flex items-end justify-center bg-background-2 relative group overflow-hidden aspect-square">
                <div className="absolute top-0 left-0 w-full h-[150%] flex justify-center items-end ease-in-out duration-500 z-[2]">
                    <div
                        className={`w-[100%] aspect-square blur-3xl bg-white/80`}
                    ></div>
                </div>
                <div className="absolute top-0 left-0 w-full h-[130%] flex justify-center items-end ease-in-out duration-500 z-[1]">
                    <div
                        className={`w-full h-full`}
                        style={{ backgroundColor: color }}
                    ></div>
                    <div className="w-full h-full bg-gradient-to-b from-black/5 to-black/0 absolute 0 top-0 left-0"></div>
                </div>
                <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
                    <img
                        src={player.team.logoDark}
                        alt=""
                        className="max-h-[80%] max-w-[80%] grayscale brightness-0 opacity-[0.07] z-[1]"
                    />
                </div>
                <img
                    src={player.headshot}
                    alt={"Headshot image of " + player.alias}
                    className="object-cover h-[90%] z-10"
                />
            </div>
        </Link>
    );
};

export default PlayerCard;
