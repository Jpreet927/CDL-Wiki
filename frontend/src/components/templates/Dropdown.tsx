type Props = {
    id: number;
    team: string;
    [key: string]: unknown;
};

const Dropdown = (items: Props[]) => {
    return (
        <select>
            {items.map((item) => (
                <option value="">{item.team}</option>
            ))}
        </select>
    );
};

export default Dropdown;
