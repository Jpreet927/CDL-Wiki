import { formatDate } from "@/config/FormatDates";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function getRecentMatchesByTeamId(id: string, date: Date) {
    let response = await fetch(
        BASE_URL +
            `/api/match/team/${id}/latest/past?date=${encodeURIComponent(
                formatDate(date)
            )}`
    );
    let matches = await response.json();

    return matches;
}
