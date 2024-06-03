export const blurContainer = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delayChildren: 1,
            staggerChildren: 0.1,
            ease: "easeInOut",
        },
    },
};

export const blurItem = {
    initial: {
        y: 50,
        opacity: 0,
        filter: "blur(8px)",
    },
    animate: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
    },
};

export const opacityTranslateY = {
    hidden: { opacity: 0, y: 20 },
    visible: (opacityVal: number = 1) => ({
        opacity: opacityVal,
        y: 0,
    }),
};
