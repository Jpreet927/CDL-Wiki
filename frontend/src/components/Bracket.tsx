import { Match } from "@/ts/types/Match";
import BracketItem from "./BracketItem";

type Props = {
    matches: { [key: string]: Match[] };
};

const RoundHeading = ({ round }: { round: string }) => {
    return (
        <div className="flex justify-between w-80 bg-background-2 py-2 px-4 text-sm text-secondary">
            <p className="font-bold">{round}</p>
            <p className="mr-2 font-bold">Score</p>
        </div>
    );
};

const BracketConnector1 = ({
    height,
    width1,
    width2,
}: {
    height: string;
    width1: string;
    width2: string;
}) => {
    return (
        <div className={`flex items-center ${height}`}>
            <div className="flex flex-col h-full justify-between">
                <div
                    className={`bg-background-3 self-end h-[1px] ${width1}`}
                ></div>
                <div
                    className={`bg-background-3 self-end h-[1px] ${width2}`}
                ></div>
            </div>
            <div className={`bg-background-3 h-full w-[1px]`}></div>
            <div className="bg-background-3 h-[1px] w-[24px]"></div>
        </div>
    );
};

const BracketConnector2 = () => {
    return <div className="bg-background-3 h-[1px] w-[24px]"></div>;
};

const Bracket = ({ matches }: Props) => {
    console.log(matches);

    return (
        <div className="w-full overflow-scroll overflow-y-hidden py-12">
            <div className="flex items-center">
                <div className="flex flex-col gap-48">
                    <div className="flex items-center gap-8 h-fit">
                        <div className="flex flex-col gap-8 h-full">
                            {matches["WINNERS_1"].map((match) => (
                                <div className="flex flex-col gap-2">
                                    <RoundHeading round={match.round} />
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
                        <div className="flex flex-col gap-[255px] mt-[44px]">
                            <BracketConnector1
                                height={"h-[180px]"}
                                width1={"w-[24px]"}
                                width2={"w-[24px]"}
                            />
                            <BracketConnector1
                                height={"h-[180px]"}
                                width1={"w-[24px]"}
                                width2={"w-[24px]"}
                            />
                        </div>
                        <div className="flex flex-col gap-64 h-full justify-between">
                            {matches["WINNERS_2"].map((match) => (
                                <div className="flex flex-col gap-2">
                                    <RoundHeading round={match.round} />
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
                        <div className="flex flex-col gap-[255px] mt-[44px]">
                            <BracketConnector1
                                height={"h-[435px]"}
                                width1={"w-[24px]"}
                                width2={"w-[24px]"}
                            />
                        </div>
                        <div className="flex flex-col gap-8">
                            {matches["WINNERS_FINAL"].map((match) => (
                                <div className="flex flex-col gap-2">
                                    <RoundHeading round={match.round} />
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
                        <div className="bg-background-3 h-[1px] w-full mt-[48px]"></div>
                    </div>
                    <div className="flex items-center gap-8 h-fit">
                        <div className="flex flex-col gap-8 h-full">
                            {matches["ELIMINATION_1"].map((match) => (
                                <div className="flex flex-col gap-2">
                                    <RoundHeading round={match.round} />
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
                        <div className="flex flex-col gap-[255px] mt-[44px]">
                            <BracketConnector1
                                height={"h-[180px]"}
                                width1={"w-[24px]"}
                                width2={"w-[24px]"}
                            />
                            <BracketConnector1
                                height={"h-[180px]"}
                                width1={"w-[24px]"}
                                width2={"w-[24px]"}
                            />
                        </div>
                        <div className="flex flex-col gap-64 h-full">
                            {matches["ELIMINATION_2"].map((match) => (
                                <div className="flex flex-col gap-2">
                                    <RoundHeading round={match.round} />
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
                        <div className="flex flex-col gap-[435px] mt-[40px]">
                            <BracketConnector2 />
                            <BracketConnector2 />
                        </div>
                        <div className="flex flex-col gap-64 h-full">
                            {matches["ELIMINATION_3"].map((match) => (
                                <div className="flex flex-col gap-2">
                                    <RoundHeading round={match.round} />
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
                        <div className="flex flex-col gap-[255px] mt-[44px]">
                            <BracketConnector1
                                height={"h-[435px]"}
                                width1={"w-[24px]"}
                                width2={"w-[24px]"}
                            />
                        </div>
                        <div className="flex flex-col gap-8 h-full">
                            {matches["ELIMINATION_4"].map((match) => (
                                <div className="flex flex-col gap-2">
                                    <RoundHeading round={match.round} />
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
                        <div className="flex flex-col mt-[40px]">
                            <BracketConnector2 />
                        </div>
                        <div className="flex flex-col gap-8 h-full">
                            {matches["ELIMINATION_FINAL"].map((match) => (
                                <div className="flex flex-col gap-2">
                                    <RoundHeading round={match.round} />
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
                </div>
                <div className="mt-[40px] mr-12">
                    <BracketConnector1
                        height={"h-[1000px]"}
                        width1={"w-[48px]"}
                        width2={"w-[24px]"}
                    />
                </div>
                <div className="flex items-center gap-24 h-fit">
                    <div className="flex flex-col gap-8">
                        {matches["GRAND_FINAL"].map((match) => (
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
            </div>
        </div>
    );
};

export default Bracket;
