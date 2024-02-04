import React, { useEffect, useState } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MonitorOutlinedIcon from "@mui/icons-material/MonitorOutlined";

const DisplayToggle = () => {
    const [activeMode, setActiveMode] = useState("system");

    useEffect(() => {
        let theme: string | null = localStorage.getItem("theme");
        if (theme) {
            document.documentElement.setAttribute("data-theme", theme);
            setActiveMode(theme);
        }
    }, []);

    const toggleTheme = (mode: string) => {
        document.documentElement.setAttribute("data-theme", mode);
        localStorage.setItem("theme", mode);
        setActiveMode(mode);
    };

    return (
        <div className="border border-background-2 rounded-full p-1 flex gap-1 h-[45px]">
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
