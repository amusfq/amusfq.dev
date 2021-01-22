module.exports = {
    purge: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    darkMode: "class",
    theme: {
        extend: {
            zIndex: {
                "-10": "-10",
            },
        },
    },
    variants: {
        extend: {
            translate: ["group-hover"],
        },
    },
    plugins: [],
};
