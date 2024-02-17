import { ThemeContext } from "@/context/ThemeProvider";
import { useContext } from "react";

type Props = {
    srcDark: string;
    srcLight: string;
    alt: string;
};

const Logo = ({ srcDark, srcLight, alt }: Props) => {
    const { theme } = useContext(ThemeContext);

    return (
        <img
            src={theme === "dark" ? srcDark : srcLight}
            alt={alt}
            className="max-h-full max-w-full"
        />
    );
};

export default Logo;
