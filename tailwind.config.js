/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        fontFamily: {
            main: ["Big Shoulders Display", "sans-serif"],
            sub: ["Lexend Deca", "serif"],
        },
        screens: {
            mobile: "375px",
            desktop: "1440px",
        },
    },
    plugins: [],
};
