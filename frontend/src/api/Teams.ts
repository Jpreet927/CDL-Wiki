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
    let response = await fetch(BASE_URL + "/api/teams/", options);

    if (!response.ok) {
        throw new Error("Team data not available.");
    }

    let teams = await response.json();
    return teams;
}

export async function getTeamsOrderedByPoints() {
    let response = await fetch(BASE_URL + "/api/teams/points", options);

    if (!response.ok) {
        throw new Error("Team data not available.");
    }

    let teams = await response.json();
    return teams;
}

export async function getTeamById(id: string) {
    let response = await fetch(BASE_URL + "/api/teams/" + id, options);

    if (!response.ok) {
        throw new Error("Team data not available.");
    }

    let teams = await response.json();
    return teams;
}
