const Stat = ({
    stat,
    extraClasses = "",
}: {
    stat: number | string;
    extraClasses?: string;
}) => {
    return (
        <p
            className={
                (Number(stat) > 1.0 ? "text-stat-green" : "text-stat-red") +
                " " +
                extraClasses
            }
        >
            {Number(stat).toFixed(2)}
        </p>
    );
};

export default Stat;
