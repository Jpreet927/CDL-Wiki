import { Team } from "./Team";

export type Match = {
    id: number;
    majorId: number;
    team1: Team;
    team2: Team;
    team1Score: number;
    team2Score: number;
    round: string;
    date: Date;
};
