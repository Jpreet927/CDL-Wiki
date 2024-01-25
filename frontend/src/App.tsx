import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StandingsPage from "./pages/StandingsPage";
import TeamsPage from "./pages/TeamsPage";
import PlayersPage from "./pages/PlayersPage";
import MatchesPage from "./pages/MatchesPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="relative text-light-primary dark:text-dark-primary">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/standings" element={<StandingsPage />} />
                <Route path="/teams" element={<TeamsPage />} />
                <Route path="/players" element={<PlayersPage />} />
                <Route path="/matches" element={<MatchesPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </div>
    );
}

export default App;
