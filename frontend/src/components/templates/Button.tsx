import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    active: boolean;
    style?: string;
    onClick: any;
};

const Button = ({ children, style, active, onClick }: Props) => {
    return (
        <button
            className={`px-12 py-4 w-[200px] text-center bg-background-2 hover:bg-background-3 hover:drop-shadow-xl rounded-md transition-colors duration-300 ease-in-out disabled:bg-gray-300 ${
                active ? "cursor-pointer" : "cursor-not-allowed"
            } ${style}`}
            onClick={(e) => onClick(e)}
            disabled={!active}
        >
            {children}
        </button>
    );
};

export default Button;
