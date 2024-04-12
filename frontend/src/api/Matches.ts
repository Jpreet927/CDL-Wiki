import { formatDate } from "@/config/FormatDates";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function getMatchesBeforeDate(date: Date) {
    let response = await fetch(
        BASE_URL +
            `/api/match/past?date=${encodeURIComponent(formatDate(date))}`
    );

    let matches = await response.json();

    if ("errorMessage" in matches) {
        throw new Error("No past matches available.");
    }

    return matches;
}

export async function getMatchesAfterDate(date: Date) {
    let response = await fetch(
        BASE_URL +
            `/api/match/future?date=${encodeURIComponent(formatDate(date))}`
    );

    let matches = await response.json();

    if ("errorMessage" in matches) {
        throw new Error("No upcoming matches available.");
    }

    return matches;
}

export async function getMatchesByMajorBeforeDate(id: string, date: Date) {
    let response = await fetch(
        BASE_URL +
            `/api/match/major/${id}/past?date=${encodeURIComponent(
                formatDate(date)
            )}`
    );

    let matches = await response.json();

    if ("errorMessage" in matches) {
        throw new Error("No past matches available.");
    }

    return matches;
}

export async function getMatchesByMajorAfterDate(id: string, date: Date) {
    let response = await fetch(
        BASE_URL +
            `/api/match/major/${id}/future?date=${encodeURIComponent(
                formatDate(date)
            )}`
    );

    let matches = await response.json();

    if ("errorMessage" in matches) {
        throw new Error("No upcoming matches available.");
    }

    return matches;
}

export async function getRecentMatchesByTeamId(id: string, date: Date) {
    let response = await fetch(
        BASE_URL +
            `/api/match/team/${id}/latest/past?date=${encodeURIComponent(
                formatDate(date)
            )}`
    );

    let matches = await response.json();

    if ("errorMessage" in matches) {
        throw new Error("No past matches available.");
    }

    return matches;
}

export async function getUpcomingMatchesByTeamId(id: string, date: Date) {
    let response = await fetch(
        BASE_URL +
            `/api/match/team/${id}/latest/future?date=${encodeURIComponent(
                formatDate(date)
            )}`
    );

    let matches = await response.json();

    if ("errorMessage" in matches) {
        throw new Error("No upcoming matches available.");
    }

    return matches;
}
