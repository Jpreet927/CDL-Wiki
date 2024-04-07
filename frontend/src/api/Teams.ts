const BASE_URL = import.meta.env.VITE_API_URL;

export async function getTeams() {
    let response = await fetch(BASE_URL + "/api/teams/");
    let teams = await response.json();

    return teams;
}

export async function getTeamsOrderedByPoints() {
    let response = await fetch(BASE_URL + "/api/teams/points");
    let teams = await response.json();

    return teams;
}

export async function getTeamById(id: string) {
    let response = await fetch(BASE_URL + "/api/teams/" + id);
    let team = await response.json();

    return team;
}
