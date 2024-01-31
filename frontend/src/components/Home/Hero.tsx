import { useEffect, useState } from "react";
import { heroImages, HeroImage } from "../../config/HeroImages";
import { TEAM_LOGOS } from "../../config/TeamLogos";

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [currentImage, setCurrentImage] = useState<HeroImage>(
        heroImages[currentImageIndex]
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % heroImages.length);
            setCurrentImage(heroImages[currentImageIndex]);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    return (
        <div className="h-screen w-screen bg-cover relative">
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-black/0 h-[50%] w-full"></div>
            <div className="absolute top-0 left-0 bg-gradient-to-b from-black to-black/0 h-[20%] w-full"></div>
            <div className="px-48 py-36 absolute bottom-0 left-0 w-full flex flex-col gap-4">
                <h1 className="text-8xl font-bold text-dark-primary">
                    Call of Duty League
                </h1>
                <p className="text-dark-secondary text-xl mb-4">
                    2023/2024 Season
                </p>
                <div className="flex justify-between">
                    {TEAM_LOGOS.map((team) => (
                        <img
                            src={team.srcLight}
                            alt={team.alt}
                            className="h-[40px]"
                        />
                    ))}
                </div>
            </div>
            <img
                key={currentImageIndex}
                src={currentImage.src}
                alt={currentImage.alt}
                className="w-full h-full object-cover select-none"
            />
        </div>
    );
};

export default Hero;
