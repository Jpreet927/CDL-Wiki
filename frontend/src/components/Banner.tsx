import cdlLogo from "@/assets/logos/CDL-logo-only.png";
import Logo from "./templates/Logo";
import { ThemeContext } from "@/context/ThemeProvider";
import { useContext } from "react";

const Banner = ({ title }: { title: string }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="h-[40vh] w-full overflow-hidden relative flex items-center justify-center pt-12 px-24 text-center">
            <h1 className="z-[3]">{title}</h1>
            <div
                className={`bg-white aspect-square w-[40%] blur-[150px] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] z-[2] ${
                    theme === "dark" ? "opacity-20" : "opacity-50"
                }`}
            ></div>
            <div className="bg-gradient-to-t from-background-2 to-black/0 h-full w-full absolute top-0 left-0 z-[1]"></div>
            <div className="absolute top-0 left-0 w-full h-[100%] flex justify-center items-center">
                <div
                    className={
                        theme === "dark" ? "opacity-full" : "opacity-[20%]"
                    }
                >
                    <Logo srcDark={cdlLogo} srcLight={cdlLogo} alt="CDL Logo" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
