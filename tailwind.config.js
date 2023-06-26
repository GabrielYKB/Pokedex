/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                "bounce-fast": "bounce 0.6s ",
            },
        },
    },
    plugins: [
        // ...
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/line-clamp"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
