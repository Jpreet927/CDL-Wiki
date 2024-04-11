import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import cdlWhite from "../assets/logos/CDL-logo-white.png";
import cdlDark from "../assets/logos/CDL-logo-black.png";
import { ThemeContext } from "@/context/ThemeProvider";
import Logo from "./templates/Logo";

const Navbar = () => {
    const location = useLocation();
    const [backgroundVisible, setBackgroundVisible] = useState(false);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        // adds background to navbar when user scrolls
        const toggleBackground = () => {
            if (window.scrollY > 100) {
                setBackgroundVisible(true);
            } else {
                setBackgroundVisible(false);
            }
        };

        window.addEventListener("scroll", toggleBackground);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full flex justify-between items-center py-8 px-24 z-[998] text-primary transition-all ease-in-out duration-300 ${
                backgroundVisible
                    ? `${
                          theme === "dark" ? "bg-black/80" : "bg-white/80"
                      } backdrop-blur-xl`
                    : ""
            }`}
        >
            <div className="h-[30px]">
                <Logo srcDark={cdlWhite} srcLight={cdlDark} alt="CDL Logo" />
            </div>
            <ul className="flex items-center gap-24">
                <li
                    className={`hover:opacity-100 transition-opacity ease-in-out duration-300 ${
                        location.pathname === "/"
                            ? "opacity-100 underline underline-offset-8"
                            : "opacity-75"
                    }`}
                >
                    <Link to="/">Home</Link>
                </li>
                <li
                    className={`hover:opacity-100 transition-opacity ease-in-out duration-300 ${
                        location.pathname.includes("/teams")
                            ? "opacity-100 underline underline-offset-8"
                            : "opacity-75"
                    }`}
                >
                    <Link to="/teams">Teams</Link>
                </li>
                <li
                    className={`hover:opacity-100 transition-opacity ease-in-out duration-300 ${
                        location.pathname.includes("/standings")
                            ? "opacity-100 underline underline-offset-8"
                            : "opacity-75"
                    }`}
                >
                    <Link to="/standings">Standings</Link>
                </li>
                <li
                    className={`hover:opacity-100 transition-opacity ease-in-out duration-300 ${
                        location.pathname.includes("/matches")
                            ? "opacity-100 underline underline-offset-8"
                            : "opacity-75"
                    }`}
                >
                    <Link to="/matches">Matches</Link>
                </li>
                <li
                    className={`hover:opacity-100 transition-opacity ease-in-out duration-300 ${
                        location.pathname.includes("/about")
                            ? "opacity-100 underline underline-offset-8"
                            : "opacity-75"
                    }`}
                >
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
