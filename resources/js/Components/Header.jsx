import React, { useEffect, useState } from "react";

const Header = () => {
    let [darkMode, setDarkMode] = useState(false);

    let ls = localStorage.getItem("dark-mode");

    const changeMode = (mode) => {
        let html = document.querySelector("html");
        if (mode) {
            localStorage.setItem("dark-mode", true);
            html.classList.add("dark");
        } else {
            localStorage.setItem("dark-mode", false);
            html.classList.remove("dark");
        }
    };

    const changeTheme = (mode) => {
        changeMode(mode);
        setDarkMode(mode);
    };

    useEffect(() => {
        if (ls) {
            let isTrue = ls == "true";
            changeMode(isTrue);
            setDarkMode(isTrue);
        }
    }, []);
    return (
        <nav className="w-full fixed top-8 z-50">
            <div className="max-w-md px-6 mx-auto sm:px-0 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl flex space-x-4">
                <button
                    className="transform hover:scale-110 duration-200 ease-in-out shadow-md focus:outline-none bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 w-12 h-12 text-white rounded-xl p-3 ml-auto"
                    title="Dark Mode"
                    onClick={() => changeTheme(!darkMode)}
                >
                    {darkMode ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    )}
                </button>
                <div className="flex flex-1">
                    <button
                        className="focus:outline-none focus:ring-2 ring-blue-500 w-auto h-12 text-gray-500 dark:text-white font-medium rounded-xl p-2 ml-auto flex items-center px-4"
                        title="Print"
                    >
                        Indonesia
                        <svg
                            className="w-4 h-4 ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};
export default Header;
