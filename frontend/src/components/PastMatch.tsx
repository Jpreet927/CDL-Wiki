import { useState } from "react";
import moment from "moment";
import { Match } from "@/ts/types/Match";
import Logo from "./templates/Logo";
import MatchStats from "./MatchStats";

const PastMatch = ({ match }: { match: Match }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <div
                className="flex flex-col gap-4 p-6 bg-background-2 border-b-[1px] border-background"
                onClick={() => setExpanded(!expanded)}
            >
                <p className="text-secondary text-sm">{`${moment(
                    match.date
                ).format("MM/DD/YYYY @ LT")}`}</p>
                <div className="flex gap-2 items-center justify-between">
                    <div className="flex gap-2 items-center w-[45%]">
                        <div className="h-[30px]">
                            <Logo
                                srcDark={match.team1.logoLight}
                                srcLight={match.team1.logoDark}
                                alt={match.team1.name + "logo"}
                            />
                        </div>
                        <p className="text-sm">{match.team1.name}</p>
                    </div>
                    <p className="font-bold w-[10%]">VS</p>
                    <div className="flex gap-2 items-center w-[45%] justify-end">
                        <p className="text-sm">{match.team2.name}</p>
                        <div className="h-[30px]">
                            <Logo
                                srcDark={match.team2.logoLight}
                                srcLight={match.team2.logoDark}
                                alt={match.team2.name + "logo"}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {expanded && <MatchStats />}
        </>
    );
};

export default PastMatch;