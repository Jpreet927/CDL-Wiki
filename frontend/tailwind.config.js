/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "light-primary": "var(--light-primary)",
                "light-secondary": "var(--light-secondary)",
                "light-background": "var(--light-background)",
                "light-background-2": "var(--light-background-2)",
                "dark-primary": "var(--dark-primary)",
                "dark-secondary": "var(--dark-secondary)",
            },
            backgroundImage: {
                "hero-image": "url('./src/assets/images/CDL-Wiki-Hero.jpg')",
            },
        },
    },
    plugins: [],
};
