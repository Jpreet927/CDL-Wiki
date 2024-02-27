import { useContext, useEffect, useState } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MonitorOutlinedIcon from "@mui/icons-material/MonitorOutlined";
import { ThemeContext } from "@/context/ThemeProvider";

const DisplayToggle = () => {
    const { setTheme } = useContext(ThemeContext);
    // only used for toggle component
    const [activeMode, setActiveMode] = useState("");

    useEffect(() => {
        let theme: string | null = localStorage.getItem("theme");

        if (theme) {
            setActiveMode(theme);

            if (theme === "system") {
                theme = handleSystemTheme();
            }

            document.documentElement.setAttribute("data-theme", theme);
        }
    }, []);

    const toggleTheme = (mode: string) => {
        let theme: string = mode;

        if (mode === "system") {
            theme = handleSystemTheme();
        }

        document.documentElement.setAttribute("data-theme", theme);
        setTheme(theme);
        localStorage.setItem("theme", mode);
        setActiveMode(mode);
    };

    const handleSystemTheme = () => {
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            return "dark";
        } else {
            return "light";
        }
    };

    return (
        <div className="border border-background-2 rounded-full p-1 flex w-fit gap-1 h-[45px]">
            <div
                className={`rounded-full aspect-square p-2 flex justify-center items-center cursor-pointer ${
                    activeMode === "light"
                        ? "bg-background-2"
                        : "opacity-50 hover:opacity-100"
                }`}
                onClick={() => toggleTheme("light")}
            >
                <LightModeOutlinedIcon />
            </div>
            <div
                className={`rounded-full aspect-square p-2 flex justify-center items-center cursor-pointer ${
                    activeMode === "system"
                        ? "bg-background-2"
                        : "opacity-50 hover:opacity-100"
                }`}
                onClick={() => toggleTheme("system")}
            >
                <MonitorOutlinedIcon />
            </div>
            <div
                className={`rounded-full aspect-square p-2 flex justify-center items-center cursor-pointer ${
                    activeMode === "dark"
                        ? "bg-background-2"
                        : "opacity-50 hover:opacity-100"
                }`}
                onClick={() => toggleTheme("dark")}
            >
                <DarkModeOutlinedIcon />
            </div>
        </div>
    );
};

export default DisplayToggle;
