import { Player } from "../types/Player";
import opticLight from "@/assets/logos/OpTic_Texas_Light.png";
import opticDark from "@/assets/logos/OpTic_Texas_Dark.png";
import dashy from "@/assets/headshots/Dashy_2023 (1).png";
import kenny from "@/assets/headshots/Kenny_2023 (1).png";
import pred from "@/assets/headshots/Pred_2023 (1).png";
import shotzzy from "@/assets/headshots/Shotzzy_2023 (1).png";

export const PLAYER_DATA: Player[] = [
    {
        id: 1,
        alias: "Dashy",
        name: "Brandon Ottell",
        team: {
            id: 1,
            name: "OpTic Texas",
            location: "Texas",
            created: new Date("2021-11-23"),
            affiliated: "Envy",
            coach: "Karma",
            owner: "Hector Rodrigez",
            points: 50,
            bgColoured: "",
            bgDark: "",
            bgLight: "",
            logoLight: opticLight,
            logoDark: opticDark,
        },
        dob: new Date("2021-11-23"),
        nationality: "Canadian",
        role: "Player",
        headshot: dashy,
    },
    {
        id: 1,
        alias: "Kenny",
        name: "Kenneth Williams",
        team: {
            id: 1,
            name: "OpTic Texas",
            location: "Texas",
            created: new Date("2021-11-23"),
            affiliated: "Envy",
            coach: "Karma",
            owner: "Hector Rodrigez",
            points: 50,
            bgColoured: "",
            bgDark: "",
            bgLight: "",
            logoLight: opticLight,
            logoDark: opticDark,
        },
        dob: new Date("2021-11-23"),
        nationality: "American",
        role: "Player",
        headshot: kenny,
    },
    {
        id: 1,
        alias: "Pred",
        name: "Amer Zuberi",
        team: {
            id: 1,
            name: "OpTic Texas",
            location: "Texas",
            created: new Date("2021-11-23"),
            affiliated: "Envy",
            coach: "Karma",
            owner: "Hector Rodrigez",
            points: 50,
            bgColoured: "",
            bgDark: "",
            bgLight: "",
            logoLight: opticLight,
            logoDark: opticDark,
        },
        dob: new Date("2021-11-23"),
        nationality: "Australian",
        role: "Player",
        headshot: pred,
    },
    {
        id: 1,
        alias: "Shotzzy",
        name: "Anthony Quevas Castro",
        team: {
            id: 1,
            name: "OpTic Texas",
            location: "Texas",
            created: new Date("2021-11-23"),
            affiliated: "Envy",
            coach: "Karma",
            owner: "Hector Rodrigez",
            points: 50,
            bgColoured: "",
            bgDark: "",
            bgLight: "",
            logoLight: opticLight,
            logoDark: opticDark,
        },
        dob: new Date("2021-11-23"),
        nationality: "American",
        role: "Player",
        headshot: shotzzy,
    },
];
