import { useEffect, useState } from "react";
import { heroImages, HeroImage } from "../../config/HeroImages";
import { TEAM_LOGOS } from "../../ts/constants/TeamLogos";
import Logo from "../templates/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { blurContainer, blurItem } from "@/config/FramerVariants";

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [currentImage, setCurrentImage] = useState<HeroImage>(
        heroImages[currentImageIndex]
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % heroImages.length);
            setCurrentImage(heroImages[currentImageIndex]);
        }, 5000);

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    return (
        <div className="h-screen w-screen bg-cover relative">
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-black/0 h-[50%] w-full z-[9]"></div>
            <div className="absolute top-0 left-0 bg-gradient-to-b from-black to-black/0 h-[20%] w-full z-[9]"></div>
            <div className="lg:px-48 md:px-24 px-12 py-36 absolute bottom-0 left-0 w-full flex flex-col gap-4 z-[10]">
                <motion.h1
                    className="md:text-8xl text-6xl font-bold text-primary-dark font-heading"
                    variants={blurItem}
                    transition={{ duration: 1.5 }}
                    initial="initial"
                    animate="animate"
                >
                    Call of Duty League
                </motion.h1>
                <motion.p
                    className="text-secondary-dark text-xl mb-4"
                    variants={blurItem}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    initial="initial"
                    animate="animate"
                >
                    2023/2024 Season
                </motion.p>
                <motion.div
                    className="md:flex md:justify-between grid grid-cols-6 gap-4 items-center w-full"
                    variants={blurContainer}
                    initial="initial"
                    animate="animate"
                >
                    {TEAM_LOGOS.map((team) => (
                        <motion.div
                            className="h-[40px]"
                            variants={blurItem}
                            transition={{ duration: 1.5 }}
                        >
                            <Logo
                                srcDark={team.srcLight}
                                srcLight={team.srcDark}
                                alt={team.alt}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentImageIndex}
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className="w-full h-full object-cover select-none z-[2]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        type: "tween",
                        duration: 1,
                    }}
                />
            </AnimatePresence>
        </div>
    );
};

export default Hero;
