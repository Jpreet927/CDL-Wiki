import { Player } from "./Player";

export type PlayerStats = {
    player: Player;
    matchId: number;
    mode: string;
    map: string;
    kills: number;
    deaths: number;
    assists: number;
    damage: number;
};
