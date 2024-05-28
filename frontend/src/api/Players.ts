import { options } from "./Teams";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function getPlayersByTeamId(id: string) {
    let response = await fetch(BASE_URL + "/api/players/team/" + id, options);

    if (!response.ok) {
        throw new Error("No past matches available.");
    }

    let players = await response.json();
    return players;
}

export async function getPlayerById(id: string) {
    let response = await fetch(BASE_URL + "/api/players/" + id, options);

    if (!response.ok) {
        throw new Error("No past matches available.");
    }

    let player = await response.json();
    return player;
}
