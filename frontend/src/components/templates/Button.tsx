import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    style?: string;
    onClick: any;
};

const Button = ({ children, style, onClick }: Props) => {
    return (
        <div
            className={`px-12 py-4 w-[200px] text-center cursor-pointer bg-background-2 rounded-md transition-colors duration-300 ease-in-out ${style}`}
            onClick={(e) => onClick(e)}
        >
            {children}
        </div>
    );
};

export default Button;
