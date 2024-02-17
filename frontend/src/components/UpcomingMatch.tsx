import { Match } from "@/ts/types/Match";
import moment from "moment";

const UpcomingMatch = ({ match }: { match: Match }) => {
    return (
        <div className="flex flex-col gap-4 p-6 bg-background-2">
            <p className="text-secondary text-sm">{`${moment(match.date).format(
                "MM/DD/YYYY @ hh:mm"
            )} EST`}</p>
            <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center w-[45%]">
                    <img
                        src={match.team1.logoLight}
                        alt=""
                        className="max-h-[30px]"
                    />
                    <p className="text-sm">{match.team1.name}</p>
                </div>
                <p className="font-bold w-[10%]">VS</p>
                <div className="flex gap-2 items-center w-[45%] justify-end">
                    <p className="text-sm">{match.team2.name}</p>
                    <img
                        src={match.team2.logoLight}
                        alt=""
                        className="max-h-[30px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default UpcomingMatch;
