import { Link } from "react-router-dom";
import cdlWhite from "../assets/logos/CDL-logo-white.png";

const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center py-8 px-24 z-[998] text-dark-secondary">
            <img src={cdlWhite} alt="CDL Logo" className="h-[30px]" />
            <ul className="flex items-center gap-24">
                <li className="hover:text-dark-primary transition-colors ease-in-out duration-300">
                    <Link to="/">Home</Link>
                </li>
                <li className="hover:text-dark-primary transition-colors ease-in-out duration-300">
                    <Link to="/standings">Standings</Link>
                </li>
                <li className="hover:text-dark-primary transition-colors ease-in-out duration-300">
                    <Link to="/teams">Teams</Link>
                </li>
                <li className="hover:text-dark-primary transition-colors ease-in-out duration-300">
                    <Link to="/players">Players</Link>
                </li>
                <li className="hover:text-dark-primary transition-colors ease-in-out duration-300">
                    <Link to="/matches">Matches</Link>
                </li>
                <li className="hover:text-dark-primary transition-colors ease-in-out duration-300">
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
