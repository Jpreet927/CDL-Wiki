import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import cdlWhite from "../assets/logos/CDL-logo-white.png";
import cdlDark from "../assets/logos/CDL-logo-black.png";
import { ThemeContext } from "@/context/ThemeProvider";
import Logo from "./templates/Logo";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NAV_ITEMS } from "@/config/NavItems";

const Navbar = () => {
    const location = useLocation();
    const [backgroundVisible, setBackgroundVisible] = useState(false);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const { theme } = useContext(ThemeContext);
    const background = theme === "dark" ? "bg-black/80" : "bg-white/80";

    useEffect(() => {
        // adds background to navbar when user scrolls
        const toggleBackground = () => {
            if (window.scrollY > 100) {
                setBackgroundVisible(true);
            } else {
                setBackgroundVisible(false);
            }
        };

        // reset mobile nav state if window size changes while mobile nav is open
        const removeNavBackground = () => {
            if (window.innerWidth > 768) {
                setMobileNavOpen(false);
            }
        };

        window.addEventListener("scroll", toggleBackground);
        window.addEventListener("resize", removeNavBackground);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full flex md:flex-row flex-col justify-between items-center py-8 xl:px-24 lg:px-12 px-8 z-[998] text-primary transition-all ease-in-out duration-300 ${
                backgroundVisible || mobileNavOpen
                    ? `${background} backdrop-blur-xl`
                    : ""
            }`}
        >
            <div className="flex w-full justify-between items-center">
                <div className="h-[30px]">
                    <Logo
                        srcDark={cdlWhite}
                        srcLight={cdlDark}
                        alt="CDL Logo"
                    />
                </div>
                <div className="md:hidden block">
                    {mobileNavOpen ? (
                        <CloseIcon
                            className="cursor-pointer"
                            onClick={() => setMobileNavOpen(false)}
                        />
                    ) : (
                        <MenuIcon
                            className="cursor-pointer"
                            onClick={() => setMobileNavOpen(true)}
                        />
                    )}
                </div>
            </div>
            <ul
                className={`md:flex md:items-center md:w-auto w-full md:h-auto h-screen md:py-0 py-12 md:px-0 px-4 md:flex-row flex-col ${
                    mobileNavOpen ? "flex" : "hidden"
                } lg:gap-24 gap-12`}
            >
                {NAV_ITEMS.map((item) => (
                    <li
                        className={`hover:opacity-100 transition-opacity ease-in-out duration-300 md:text-base text-2xl ${
                            location.pathname === item.href ||
                            (item.href !== "/" &&
                                location.pathname.startsWith(item.href))
                                ? "opacity-100 underline underline-offset-8"
                                : "opacity-75"
                        }`}
                        onClick={() => setMobileNavOpen(false)}
                    >
                        <Link to={item.href}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
