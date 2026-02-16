/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                brandBlue: "#3664E7",
                brandGold: "#E7B836",
                brandDark: "#0B0F1A",
                brandGlass: "rgba(255,255,255,0.05)",
            }

        },
    },
    plugins: [],
};
