import { Team } from "@/ts/types/Team";
import Logo from "./templates/Logo";
import { extractColors } from "extract-colors";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/ThemeProvider";

const TeamBanner = ({ team }: { team: Team }) => {
    const [color, setColor] = useState<string>("");
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        getColorsFromImage(team.logoLight);
        console.log(theme);
    }, []);

    const getColorsFromImage = async (src: string) => {
        const res = await extractColors(src);
        let bgProperty: string = res[0].hex;
        setColor(bgProperty);
    };

    return (
        <div className="h-[33vh] w-full overflow-hidden relative flex items-center justify-center pt-12">
            <div className="flex gap-4 items-center h-[40px] z-[2]">
                <Logo
                    srcDark={team.logoLight}
                    srcLight={team.logoDark}
                    alt={team.name + " logo"}
                />
                <h2>{team.name}</h2>
            </div>
            <div className="absolute top-0 left-0 w-full h-[150%] flex justify-end items-end z-[1]">
                <div
                    className={`w-[30%] rounded-full aspect-square blur-3xl bg-white/20 translate-x-44 translate-y-44`}
                ></div>
            </div>
            <div
                className={`absolute top-0 right-0 w-[100%] h-full opacity-100 flex items-end justify-end`}
                style={{
                    backgroundImage: `linear-gradient(315deg, ${color} 0%, ${
                        theme === "dark"
                            ? "rgb(7, 7, 7) 50%)"
                            : "rgb(255, 255, 255) 50%)"
                    }`,
                }}
            ></div>
            <div className="absolute top-0 left-0 w-full h-[150%] flex justify-center items-center">
                <img
                    src={team.logoDark}
                    alt=""
                    className="max-h-[300%] max-w-[300%] grayscale brightness-0 opacity-[2%] z-[1] select-none pointer-events-none"
                />
            </div>
        </div>
    );
};

export default TeamBanner;
