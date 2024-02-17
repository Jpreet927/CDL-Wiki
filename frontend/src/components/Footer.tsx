import { useContext } from "react";
import cdlDark from "@/assets/logos/CDL-logo-black.png";
import cdlLight from "@/assets/logos/CDL-logo-white.png";
import footerImage from "../assets/images/Footer-Image.webp";
import { NAV_ITEMS, TEAMS_NAV_ITEMS } from "../config/NavItems";
import { TEAM_LOGOS } from "../ts/constants/TeamLogos";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import DisplayToggle from "./DisplayToggle";
import { ThemeContext } from "@/context/ThemeProvider";

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="flex flex-col gap-12">
            <div className="w-full xl:px-64 lg:px-48 md:px-24 px-12 flex flex-col gap-12">
                <div className="h-[1px] w-full bg-background-2"></div>
                <div className="flex justify-between items-center gap-2">
                    <h1>Call of Duty League</h1>
                    <img
                        src={theme === "dark" ? cdlLight : cdlDark}
                        alt="CDL Logo"
                        className="sm:h-[30px] h-[20px]"
                    />
                </div>
            </div>
            <div className="w-full xl:px-64 lg:px-48 md:px-24 px-12 flex md:flex-row flex-col justify-between gap-16">
                <div className="flex flex-col gap-4">
                    <p className="font-bold">Menu</p>
                    <ul className="grid md:grid-cols-2 sm:grid-cols-3 grid-cols-2 xl:gap-x-24 gap-x-2">
                        {NAV_ITEMS.map((item) => (
                            <li>
                                <a
                                    href={item.href}
                                    className="text-secondary hover:text-primary transition-colors ease-in-out duration-300"
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="font-bold">Teams</p>
                    <ul className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 xl:gap-x-24 gap-x-2">
                        {TEAMS_NAV_ITEMS.map((team) => (
                            <li>
                                <a
                                    href={team.href}
                                    className="text-secondary hover:text-primary transition-colors ease-in-out duration-300"
                                >
                                    {team.team}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="xl:px-64 lg:px-48 md:px-24 px-12 md:flex md:justify-between grid grid-cols-6 gap-4 items-center w-full">
                {TEAM_LOGOS.map((team) => (
                    <img
                        src={theme === "dark" ? team.srcLight : team.srcDark}
                        alt={team.alt}
                        className="max-h-[40px]"
                    />
                ))}
            </div>
            <div className="flex md:flex-row flex-col md:justify-between xl:px-64 lg:px-48 md:px-24 px-12 gap-2 mt-10 w-full">
                <div className="flex gap-4 items-center md:justify-normal justify-between">
                    <p className="font-bold">© 2023 JAIPREET SINGH</p>
                    <div className="w-[1px] h-[20px] bg-background-2 md:block hidden"></div>
                    <div className="flex gap-3">
                        <a href="https://github.com/Jpreet927" target="_blank">
                            <GitHubIcon />
                        </a>
                        <a href="https://twitter.com/Jpreet_" target="_blank">
                            <TwitterIcon />
                        </a>
                    </div>
                </div>
                <DisplayToggle />
            </div>
            <div className="w-full overflow-hidden h-[500px] flex justify-center">
                <img
                    src={footerImage}
                    alt="CDL logo displayed on a large screen"
                    className="w-full object-cover grayscale"
                />
            </div>
        </div>
    );
};

export default Footer;