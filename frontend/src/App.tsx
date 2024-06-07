import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StandingsPage from "./pages/StandingsPage";
import TeamsPage from "./pages/TeamsPage";
import MatchesPage from "./pages/MatchesPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TeamPage from "./pages/TeamPage";
import PlayerPage from "./pages/PlayerPage";
import MajorPage from "./pages/MajorPage";

function App() {
    return (
        <div className="relative text-primary bg-background">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/standings" element={<StandingsPage />} />
                <Route path="/teams" element={<TeamsPage />} />
                <Route path="/teams/:id" element={<TeamPage />} />
                <Route
                    path="/teams/:teamid/players/:playerid"
                    element={<PlayerPage />}
                />
                <Route path="/matches" element={<MatchesPage />} />
                <Route path="/majors" element={<MajorPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
