const Stat = ({
    stat,
    extraClasses = "",
}: {
    stat: number;
    extraClasses?: string;
}) => {
    return (
        <p
            className={
                (stat > 1.0 ? "text-stat-green" : "text-stat-red") +
                " " +
                extraClasses
            }
        >
            {stat.toFixed(2)}
        </p>
    );
};

export default Stat;
