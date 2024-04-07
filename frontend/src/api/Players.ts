const BASE_URL = import.meta.env.VITE_API_URL;

export async function getPlayersByTeamId(id: string) {
    let response = await fetch(BASE_URL + "/api/players/team/" + id);
    let players = await response.json();

    return players;
}

export async function getPlayerById(id: string) {
    let response = await fetch(BASE_URL + "/api/players/" + id);
    let player = await response.json();

    return player;
}
