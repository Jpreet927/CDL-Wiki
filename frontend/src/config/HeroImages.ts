import hero1 from "../assets/images/CDL-Wiki-Hero.jpg";
import hero2 from "../assets/images/MW2_CDL2023_Major_I_Winner.jpg";
import hero3 from "../assets/images/CDL-Trophy.jpg";

export type HeroImage = {
    src: string;
    alt: string;
};

export const heroImages: HeroImage[] = [
    {
        src: hero1,
        alt: "An image of the CDL Championship trophy",
    },
    {
        src: hero2,
        alt: "The New York Subliners celebrating their win at Major 1 2023",
    },
    {
        src: hero3,
        alt: "The CDL Championship Trophy in green lighting with team logos in the background",
    },
];
