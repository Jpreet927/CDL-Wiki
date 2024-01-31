import React from "react";
import cdlDark from "@/assets/logos/CDL-logo-black.png";
import footerImage from "../assets/images/Footer-Image.webp";
import { NAV_ITEMS, TEAMS_NAV_ITEMS } from "../config/NavItems";
import { TEAM_LOGOS } from "../config/TeamLogos";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import DisplayToggle from "./DisplayToggle";

const Footer = () => {
    return (
        <div className="flex flex-col gap-12">
            <div className="w-full px-72 flex flex-col gap-12">
                <div className="h-[1px] w-full bg-light-background-2"></div>
                <div className="flex justify-between items-center">
                    <h1>Call of Duty League</h1>
                    <img src={cdlDark} alt="CDL Logo" className="h-[30px]" />
                </div>
            </div>
            <div className="w-full px-72 flex justify-between">
                <div className="flex flex-col gap-4">
                    <p className="font-bold">Menu</p>
                    <ul className="grid grid-cols-2 gap-x-24">
                        {NAV_ITEMS.map((item) => (
                            <li>
                                <a
                                    href={item.href}
                                    className="text-light-secondary hover:text-light-primary transition-colors ease-in-out duration-300"
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="font-bold">Teams</p>
                    <ul className="grid grid-cols-4 gap-x-24">
                        {TEAMS_NAV_ITEMS.map((team) => (
                            <li>
                                <a
                                    href={team.href}
                                    className="text-light-secondary hover:text-light-primary transition-colors ease-in-out duration-300"
                                >
                                    {team.team}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="px-72 flex justify-between">
                {TEAM_LOGOS.map((team) => (
                    <img
                        src={team.srcDark}
                        alt={team.alt}
                        className="h-[40px]"
                    />
                ))}
            </div>
            <div className="flex justify-between px-72 mt-10 w-full">
                <div className="flex gap-4 items-center">
                    <p className="font-bold">© 2023 JAIPREET SINGH</p>
                    <div className="w-[1px] h-[20px] bg-light-secondary"></div>
                    <div className="flex gap-2">
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
