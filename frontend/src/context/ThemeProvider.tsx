import React, { ReactNode, createContext, useState } from "react";

type Context = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const defaultContext: Context = {
    // if theme from local storage is null or system, resolve it to light/dark
    theme:
        !localStorage.getItem("theme") ||
        localStorage.getItem("theme") === "system"
            ? window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light"
            : localStorage.getItem("theme")!,
    setTheme: () => null,
};

export const ThemeContext = createContext(defaultContext);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<string>(defaultContext.theme);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
