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
