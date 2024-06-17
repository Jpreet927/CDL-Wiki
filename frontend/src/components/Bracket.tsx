import { Match } from "@/ts/types/Match";
import BracketItem from "./BracketItem";

type Props = {
    matches: Match[];
};

const Bracket = ({ matches }: Props) => {
    console.log(matches);

    return (
        <div>
            <div className="flex flex-col gap-8">
                {matches &&
                    matches.map((match) => (
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between w-80">
                                <p>{match.round}</p>
                                <p className="mr-4">Score</p>
                            </div>
                            <BracketItem
                                team={match.team1}
                                score={match.team1Score}
                                winner={
                                    match.team1Score > match.team2Score
                                        ? true
                                        : false
                                }
                            />
                            <BracketItem
                                team={match.team2}
                                score={match.team2Score}
                                winner={
                                    match.team2Score > match.team1Score
                                        ? true
                                        : false
                                }
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Bracket;
