import React, { useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import { motion } from "framer-motion";

const Header = ({ lang = 0, changeLanguage }) => {
    let [darkMode, setDarkMode] = useState(false);

    const changeMode = (mode) => {
        let html = document.querySelector("html");
        if (mode) {
            document.cookie = "dark-mode=true";
            html.classList.add("dark");
        } else {
            document.cookie = "dark-mode=false";
            html.classList.remove("dark");
        }
    };

    const changeTheme = (mode) => {
        changeMode(mode);
        setDarkMode(mode);
    };

    useEffect(() => {
        let cookie = document.cookie
            .split(";")
            .filter((item) => item.includes("dark-mode"))[0];
        let isTrue = false;
        if (cookie) {
            isTrue = cookie.split("=")[1] == "true";
        }
        changeMode(isTrue);
        setDarkMode(isTrue);
    }, []);
    return (
        <nav className="w-full fixed top-8 z-40">
            <div className="max-w-md px-6 mx-auto sm:px-0 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl flex space-x-4 justify-between">
                <button
                    className="transform hover:scale-110 duration-200 ease-in-out shadow-md focus:outline-none bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 w-12 h-12 text-white rounded-xl p-3"
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
                <div className="relative">
                    <Menu>
                        {({ open }) => (
                            <>
                                <Menu.Button
                                    className="focus:outline-none focus:ring-2 ring-blue-500 w-auto h-12 text-gray-500 dark:text-white font-medium rounded-xl p-2 flex items-center px-4"
                                    title="Print"
                                >
                                    {lang ? "English" : "Indonesia"}
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
                                </Menu.Button>
                                {open && (
                                    <Menu.Items
                                        as={motion.div}
                                        static
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-0 bg-white z-10 focus:outline-none focus:ring-2 ring-blue-500 rounded-md shadow-md"
                                    >
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${
                                                        active
                                                            ? "bg-gray-50"
                                                            : ""
                                                    } ${
                                                        lang === 0
                                                            ? "bg-gray-50"
                                                            : ""
                                                    } w-full text-left px-4 py-2 rounded-md flex flex-row justify-between items-center space-x-2`}
                                                    onClick={() =>
                                                        changeLanguage(0)
                                                    }
                                                >
                                                    <span className="w-full">
                                                        Indonesia
                                                    </span>
                                                    {lang === 0 && (
                                                        <svg
                                                            className="w-5 h-5 text-blue-500"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    )}
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${
                                                        active
                                                            ? "bg-gray-50"
                                                            : ""
                                                    } ${
                                                        lang === 1
                                                            ? "bg-gray-50"
                                                            : ""
                                                    } w-full text-left px-4 py-2 rounded-md flex flex-row justify-between items-center space-x-2`}
                                                    onClick={() =>
                                                        changeLanguage(1)
                                                    }
                                                >
                                                    <span className="w-full">
                                                        English
                                                    </span>
                                                    {lang === 1 && (
                                                        <svg
                                                            className="w-5 h-5 text-blue-500"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    )}
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                )}
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </nav>
    );
};
export default Header;
