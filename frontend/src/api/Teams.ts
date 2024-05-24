const BASE_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const options: RequestInit = {
    headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
    },
    mode: "cors",
};

export async function getTeams() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    let response = await fetch(BASE_URL + "/api/teams/", options);
    let teams = await response.json();

    return teams;
}

export async function getTeamsOrderedByPoints() {
    let response = await fetch(BASE_URL + "/api/teams/points", options);
    let teams = await response.json();

    return teams;
}

export async function getTeamById(id: string) {
    let response = await fetch(BASE_URL + "/api/teams/" + id, options);
    let team = await response.json();

    return team;
}
