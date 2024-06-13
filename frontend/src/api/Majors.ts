import { Team } from "@/ts/types/Team";
import { options } from "./Teams";
import { Major } from "@/ts/types/Major";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function getMajorById(id: string) {
    let response = await fetch(BASE_URL + "/api/majors/" + id, options);

    if (!response.ok) {
        throw new Error("Major data not available.");
    }

    let major: Major = await response.json();

    const placings: Team[] = [];
    placings.push(major["first"]);
    placings.push(major["second"]);
    placings.push(major["third"]);
    placings.push(major["fourth"]);
    placings.push(major["fifth"]);
    placings.push(major["sixth"]);
    placings.push(major["seventh"]);
    placings.push(major["eighth"]);
    placings.push(major["ninth"]);
    placings.push(major["tenth"]);
    placings.push(major["eleventh"]);
    placings.push(major["twelfth"]);

    return {
        prizePool: major.prizePool,
        venue: major.venue,
        location: major.location,
        startDate: major.startDate,
        endDate: major.endDate,
        placings,
    };
}
