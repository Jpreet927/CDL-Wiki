import React, { ReactNode, createContext, useState } from "react";

type Context = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const defaultContext: Context = {
    theme:
        localStorage.getItem("theme") ||
        (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"),
    setTheme: () => null,
};

export const ThemeContext = createContext(defaultContext);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<string>("");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
