import { useState } from "react";
import moment from "moment";
import { Match } from "@/ts/types/Match";
import Logo from "./templates/Logo";
import MatchStats from "./MatchStats";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PastMatch = ({ match }: { match: Match }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <div
                className="flex flex-col gap-4 p-6 bg-background-2 border-b-[1px] border-background"
                onClick={() => setExpanded(!expanded)}
            >
                <div className="text-secondary text-sm flex justify-between items-center">
                    <p>{`${moment(match.date).format("MM/DD/YYYY @ LT")}`}</p>
                    <div
                        className={`transition-all ease-in-out duration-300 rotate-0 ${
                            expanded ? "rotate-180" : ""
                        }`}
                    >
                        <ExpandMoreIcon />
                    </div>
                </div>
                <div className="flex gap-2 items-center justify-between">
                    <div className="flex gap-4 items-center w-[45%]">
                        <p className="text-4xl font-bold mr-4">
                            {match.team1Score}
                        </p>
                        <div className="max-w-[40px] max-h-[40px] flex items-center justify-center">
                            <Logo
                                srcDark={match.team1.logoLight}
                                srcLight={match.team1.logoDark}
                                alt={match.team1.name + "logo"}
                            />
                        </div>
                        <p className="text-sm font-bold">
                            {match.team1.ticker}
                        </p>
                    </div>
                    <p className="w-[10%] text-secondary">VS</p>
                    <div className="flex gap-4 items-center w-[45%] justify-end">
                        <p className="text-sm font-bold">
                            {match.team2.ticker}
                        </p>
                        <div className="max-w-[40px] max-h-[40px] flex items-center justify-center">
                            <Logo
                                srcDark={match.team2.logoLight}
                                srcLight={match.team2.logoDark}
                                alt={match.team2.name + "logo"}
                            />
                        </div>
                        <p className="text-4xl font-bold ml-4">
                            {match.team2Score}
                        </p>
                    </div>
                </div>
            </div>
            {expanded && <MatchStats />}
        </>
    );
};

export default PastMatch;
