import { Team } from "./Team";

export type Player = {
    id: number;
    alias: string;
    name: string;
    team: Team;
    dob: Date;
    nationality: string;
    role: string;
    headshot: string;
};
