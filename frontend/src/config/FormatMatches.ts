import { Match } from "@/ts/types/Match";
import moment from "moment";

export type FormattedMatches = { [key: string]: Match[] };

export const formatMatches = (matches: Match[]): FormattedMatches => {
    let formattedMatches: FormattedMatches = {};

    for (let i = 0; i < matches.length; i++) {
        // make key with format "month date, year" e.g. March 15th, 2024
        const key = moment(new Date(matches[i].date)).format("MMMM Do, YYYY");

        if (formattedMatches.hasOwnProperty(key) === false) {
            formattedMatches[key] = [];
        }

        formattedMatches[key].push(matches[i]);
    }

    return formattedMatches;
};

export const mergeMatches = (
    currentMatches: FormattedMatches,
    newMatches: Match[]
): FormattedMatches => {
    let newFormattedMatches: FormattedMatches = formatMatches(newMatches);
    let merged = {};

    Object.keys(currentMatches).forEach((key) => {
        if (key in newFormattedMatches) {
            currentMatches[key].push(...newFormattedMatches[key]);
            delete newFormattedMatches[key];
        }
    });

    merged = { ...currentMatches, ...newFormattedMatches };
    return merged;
};

export const filterMatches = (
    teams: Set<any>,
    unfiltered: FormattedMatches
) => {
    if (teams.size == 0 || teams.has(-1)) {
        return unfiltered;
    }

    let filteredMatches: FormattedMatches = {};
    Object.keys(unfiltered!).forEach((key) => {
        filteredMatches[key] = [];
    });

    Object.keys(unfiltered).forEach((key: string) => {
        filteredMatches[key] = unfiltered[key].filter((match: Match) => {
            return teams.has(match.team1.id) || teams.has(match.team2.id);
        });

        if (filteredMatches[key].length === 0) delete filteredMatches[key];
    });
    console.log(filteredMatches);

    return filteredMatches;
};
