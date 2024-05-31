const Skeleton = ({ delay = 0 }: { delay?: number }) => {
    const animationStyle = {
        animationDelay: `${delay}ms`,
        animationFillMode: "both",
    };

    return (
        <div
            className="min-w-full min-h-full animate-pulse bg-background-2 delay-75"
            style={animationStyle}
        ></div>
    );
};

export default Skeleton;
