import { formatDate } from "@/config/FormatDates";
import { options } from "./Teams";
import { Match } from "@/ts/types/Match";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function getMatchesBeforeDate(date: Date) {
    let response = await fetch(
        BASE_URL +
            `/api/match/past?date=${encodeURIComponent(formatDate(date))}`,
        options
    );

    if (!response.ok) {
        throw new Error("No past matches available.");
    }

    let matches = await response.json();
    return matches;
}

export async function getMatchesBeforeDatePaginated(
    date: Date,
    size: number,
    offset: number
) {
    let response = await fetch(
        BASE_URL +
            `/api/match/past?date=${encodeURIComponent(
                formatDate(date)
            )}&offset=${encodeURIComponent(offset)}&size=${encodeURIComponent(
                size
            )}`,
        options
    );

    if (!response.ok) {
        throw new Error("No past matches available.");
    }

    let matches = await response.json();
    return { content: matches.content, isLast: matches.last };
}

export async function getMatchesAfterDate(date: Date) {
    let response = await fetch(
        BASE_URL +
            `/api/match/future?date=${encodeURIComponent(formatDate(date))}`,
        options
    );

    if (!response.ok) {
        throw new Error("No upcoming matches available.");
    }

    let matches = await response.json();
    return matches;
}

export async function getMatchesAfterDatePaginated(
    date: Date,
    size: number,
    offset: number
) {
    let response = await fetch(
        BASE_URL +
            `/api/match/future?date=${encodeURIComponent(
                formatDate(date)
            )}&offset=${encodeURIComponent(offset)}&size=${encodeURIComponent(
                size
            )}`,
        options
    );

    if (!response.ok) {
        throw new Error("No upcoming matches available.");
    }

    let matches = await response.json();
    return { content: matches.content, isLast: matches.last };
}

export async function getMatchesByMajorBeforeDate(id: string, date: Date) {
    let response = await fetch(
        BASE_URL +
            `/api/match/major/${id}/past?date=${encodeURIComponent(
                formatDate(date)
            )}`,
        options
    );

    if (!response.ok) {
        throw new Error("No past matches available.");
    }

    let matches = await response.json();
    return matches;
}

export async function getMatchesByMajorBeforeDatePaginated(
    id: string,
    date: Date,
    size: number,
    offset: number
) {
    let response = await fetch(
        BASE_URL +
            `/api/match/major/${id}/past?date=${encodeURIComponent(
                formatDate(date)
            )}&offset=${encodeURIComponent(offset)}&size=${encodeURIComponent(
                size
            )}`,
        options
    );

    if (!response.ok) {
        throw new Error("No past matches available.");
    }

    let matches = await response.json();
    return { content: matches.content, isLast: matches.last };
}

export async function getMatchesByMajorAfterDate(id: string, date: Date) {
    let response = await fetch(
        BASE_URL +
            `/api/match/major/${id}/future?date=${encodeURIComponent(
                formatDate(date)
            )}`,
        options
    );

    if (!response.ok) {
        throw new Error("No upcoming matches available.");
    }

    let matches = await response.json();
    return matches;
}

export async function getMatchesByMajorAfterDatePaginated(
    id: string,
    date: Date,
    size: number,
    offset: number
) {
    let response = await fetch(
        BASE_URL +
            `/api/match/major/${id}/future?date=${encodeURIComponent(
                formatDate(date)
            )}&offset=${encodeURIComponent(offset)}&size=${encodeURIComponent(
                size
            )}`,
        options
    );

    if (!response.ok) {
        throw new Error("No past matches available.");
    }

    let matches = await response.json();
    return { content: matches.content, isLast: matches.last };
}

export async function getRecentMatchesByTeamId(id: string, date: Date) {
    let response = await fetch(
        BASE_URL +
            `/api/match/team/${id}/latest/past?date=${encodeURIComponent(
                formatDate(date)
            )}`,
        options
    );

    if (!response.ok) {
        throw new Error("No past matches available.");
    }

    let matches = await response.json();
    return matches;
}

export async function getUpcomingMatchesByTeamId(id: string, date: Date) {
    let response = await fetch(
        BASE_URL +
            `/api/match/team/${id}/latest/future?date=${encodeURIComponent(
                formatDate(date)
            )}`,
        options
    );

    if (!response.ok) {
        throw new Error("No upcoming matches available.");
    }

    let matches = await response.json();
    return matches;
}

export async function getMatchesByTeamBeforeDatePaginated(
    id: string,
    date: Date,
    size: number,
    offset: number
) {
    let response = await fetch(
        BASE_URL +
            `/api/match/team/${id}/past?date=${encodeURIComponent(
                formatDate(date)
            )}&offset=${encodeURIComponent(offset)}&size=${encodeURIComponent(
                size
            )}`,
        options
    );

    if (!response.ok) {
        throw new Error("No past matches available.");
    }

    let matches = await response.json();
    return { content: matches.content, isLast: matches.last };
}

export async function getMatchesByTeamAfterDatePaginated(
    id: string,
    date: Date,
    size: number,
    offset: number
) {
    let response = await fetch(
        BASE_URL +
            `/api/match/team/${id}/future?date=${encodeURIComponent(
                formatDate(date)
            )}&offset=${encodeURIComponent(offset)}&size=${encodeURIComponent(
                size
            )}`,
        options
    );

    if (!response.ok) {
        throw new Error("No past matches available.");
    }

    let matches = await response.json();
    return { content: matches.content, isLast: matches.last };
}

export async function getTournamentMatchesByMajor(id: string) {
    let response = await fetch(
        BASE_URL + `/api/match/major/tournament/${id}`,
        options
    );

    if (!response.ok) {
        throw new Error("No matches available.");
    }

    let matches = await response.json();

    let organizedByRound: { [key: string]: Match[] } = {};
    matches.forEach((match: Match) => {
        const key = match.round;
        if (organizedByRound.hasOwnProperty(key) === false) {
            organizedByRound[key] = [];
        }
        organizedByRound[key].push(match);
    });

    // Object.keys(organizedByRound).forEach((key) => {
    //     organizedByRound[key].sort((a, b) => {
    //         if (a.date < b.date) {
    //             return -1;
    //         } else if (a.date > b.date) {
    //             return 1;
    //         } else {
    //             return a.roundOrder - b.roundOrder;
    //         }
    //     });
    // });

    Object.keys(organizedByRound).forEach((key) => {
        organizedByRound[key].sort((a, b) => {
            if (a.roundOrder > b.roundOrder) return 1;
            if (a.roundOrder < b.roundOrder) return -1;
            return 0;
        });
    });

    return organizedByRound;
}
