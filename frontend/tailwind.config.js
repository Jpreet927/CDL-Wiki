/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: ["class"],
    theme: {
        extend: {
            colors: {
                primary: "rgba(var(--primary))",
                secondary: "rgba(var(--secondary))",
                "primary-dark": "rgba(var(--primary-dark))",
                "secondary-dark": "rgba(var(--secondary-dark))",
                background: "rgba(var(--background))",
                "background-2": "rgba(var(--background-2))",
                "stat-green": "rgba(var(--stat-green))",
                "stat-red": "rgba(var(--stat-red))",
                accent: "rgba(var(--accent))",
            },
            backgroundImage: {
                "hero-image": "url('./src/assets/images/CDL-Wiki-Hero.jpg')",
            },
            fontFamily: {
                heading: "var(--heading)",
                body: "var(--body)",
            },
        },
    },
    plugins: [],
};
