import { Team } from "@/ts/types/Team";
// import Logo from "./templates/Logo";
import { extractColors } from "extract-colors";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/ThemeProvider";
import { TEAM_LOGOS } from "@/ts/constants/TeamLogos";

const TeamBanner = ({ team }: { team: Team }) => {
    const [color, setColor] = useState<string>("");
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        getColorsFromImage(TEAM_LOGOS[team.id - 1].srcLight);
    }, [team]);

    const getColorsFromImage = async (src: string) => {
        const res = await extractColors(src);
        let bgProperty: string = res[0].hex;
        setColor(bgProperty);
    };

    return (
        <div
            className={`h-[40vh] w-full overflow-hidden relative flex items-center justify-center pt-12 px-24 text-center group ${
                theme === "dark" ? "bg-background-2" : ""
            }`}
            style={{
                backgroundColor: theme === "light" ? `${color}` : "",
            }}
        >
            <div className="flex gap-4 items-center z-[2]">
                {/* <div className="h-[100px] drop-shadow-xl">
                    <Logo
                        srcDark={team.logoLight}
                        srcLight={team.logoLight}
                        alt={team.name + " logo"}
                    />
                </div> */}
                <h1 className="text-white drop-shadow-2xl">{team.name}</h1>
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-[1] bg-blend-overlay">
                <div
                    className={`w-[30%] rounded-full aspect-square blur-[100px] bg-white/35 translate-y-[250px] group-hover:scale-125 transition-transform duration-700`}
                ></div>
            </div>
            <div
                className={`absolute top-0 left-0 w-full h-full opacity-100 flex items-center justify-center group-hover:scale-125 transition-transform duration-700`}
            >
                <div
                    className="aspect-square min-w-[100%] min-h-[100%] rounded-full lg:blur-[200px] lg:translate-y-[250px] md:blur-[150px] md:translate-y-[200px] blur-[80px] translate-y-[150px]"
                    style={{
                        backgroundColor: `${color}`,
                    }}
                ></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-[200%] flex justify-center items-center -translate-y-[10%]">
                <img
                    src={team.logoDark}
                    alt=""
                    className={`min-h-[70%] min-w-[70%] grayscale brightness-0 opacity-[10%] z-[1] select-none pointer-events-none`}
                />
            </div>
        </div>
    );
};

export default TeamBanner;
