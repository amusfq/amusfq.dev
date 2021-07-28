import React, { useEffect, useState } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/inertia-react";
import { SimpleImg } from "react-simple-img";
import { motion, AnimatePresence } from "framer-motion";
import { Transition } from "@headlessui/react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

const Index = () => {
    const { me, projects } = usePage().props;
    const [lang, setLang] = useState(0);
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState(1);
    const [images, setImages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});

    const changeLanguage = (id) => {
        localStorage.setItem("lang", id);
        setLang(id);
    };

    const scrollDown = () => {
        let about = document.querySelector("#about-me");
        window.scrollTo(0, about.offsetTop);
    };

    const openModal = (state, index) => {
        let selected = projects[index];
        let images = selected.foto.split(",");
        setSelectedProject(selected);
        setImages(images);
        setIsOpen(state);
    };

    const closeModal = () => {
        setSelectedProject({});
        setPage(0);
        setImages([]);
        setIsOpen(false);
    };
    const paginate = (newDirection) => {
        if (newDirection === -1) {
            if (page === 0) {
                setPage(images.length - 1);
            } else {
                setPage(page - 1);
            }
        } else {
            if (page === images.length - 1) {
                setPage(0);
            } else {
                setPage(page + 1);
            }
        }
        setDirection(newDirection);
    };
    useEffect(() => {
        document.title = "Portfolio - Achmad Musyaffa Taufiqi";
        let ls = localStorage.getItem("lang");
        if (ls) {
            setLang(Number(ls));
        }
    }, []);

    return (
        <>
            <Header lang={lang} changeLanguage={changeLanguage} />
            <div className="max-w-md px-6 mx-auto sm:px-0 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl flex flex-col space-y-4 mt-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">
                    {/* Left Grid */}
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "auto", opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="flex justify-center lg:justify-end h-64"
                    >
                        <SimpleImg
                            className="w-64 h-64 max-h-64 rounded-full ring-4 ring-blue-500"
                            src="me.jpg"
                            alt="Achmad Musyaffa Taufiqi"
                        />
                    </motion.div>
                    {/* Right Grid */}
                    <div className="flex flex-col justify-center space-y-4">
                        {/* Header Text */}
                        <div className="flex flex-col space-y-2">
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="font-bold text-3xl block text-center lg:text-left text-gray-800 dark:text-gray-200"
                            >
                                {me[lang].header.split(";")[0]}
                            </motion.div>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="font-bold text-3xl block text-center lg:text-left text-gray-800 dark:text-gray-200"
                            >
                                {me[lang].header.split(";")[1]}
                            </motion.div>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="relative inline-flex justify-center lg:justify-start"
                            >
                                <div className="font-bold text-3xl text-center lg:text-left text-gray-800 dark:text-gray-200">
                                    {me[lang].header.split(";")[2]}
                                </div>
                                <svg
                                    className="absolute w-full-2 text-blue-400 -z-10 lg:-left-1 h-3 bottom-0"
                                    fill="currentColor"
                                >
                                    <rect
                                        height="100%"
                                        rx="6"
                                        ry="6"
                                        width="100%"
                                    ></rect>
                                </svg>
                            </motion.div>
                        </div>
                        {/* Scroll Button */}
                        <div>
                            <button
                                className="group focus:outline-none focus:ring-2 ring-blue-500 w-auto text-gray-500 dark:text-gray-200 font-medium rounded-xl p-2 flex items-center mx-auto lg:mx-0"
                                title={me[lang].scroll}
                                onClick={scrollDown}
                            >
                                {me[lang].scroll}
                                <svg
                                    className="w-4 h-4 ml-2 transform group-hover:translate-y-2 duration-200 ease-in-out"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pt-32" id="about-me">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="flex flex-col lg:flex-row items-center whitespace-nowrap"
                    >
                        <span className="font-bold text-3xl text-gray-800 dark:text-gray-200">
                            {me[lang].tentang.split(";")[0]}
                        </span>
                        <motion.svg
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "auto", opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            className="w-20 h-1 text-blue-500 mt-3 lg:ml-6 lg:mt-0"
                            fill="currentColor"
                        >
                            <rect height="100%" width="100%"></rect>
                        </motion.svg>
                    </motion.div>
                    <motion.div
                        initial={{ y: 150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="grid grid-rows-2 mt-6 lg:grid-cols-3 lg:grid-rows-1"
                    >
                        <div className="text-lg text-center lg:text-left lg:col-span-2 leading-loose dark:text-white">
                            {me[lang].tentang.split(";")[1]}
                            <a
                                href="https://tailwindcss.com/"
                                className="transform hover:-translate-y-2 duration-200 ease-in-out mx-2 rounded-full py-1 px-4 shadow-md hover:shadow-xl cursor-pointer inline-flex items-center dark:bg-white dark:text-black"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    focusable="false"
                                    className="mr-2 w-5 h-5"
                                    width="1.67em"
                                    height="1em"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 256 154"
                                >
                                    <defs>
                                        <linearGradient
                                            x1="-2.778%"
                                            y1="32%"
                                            x2="100%"
                                            y2="67.556%"
                                            id="IconifyId-1771a8fa3ad-4e7d6c-0"
                                        >
                                            <stop
                                                stopColor="#2298BD"
                                                offset="0%"
                                            ></stop>
                                            <stop
                                                stopColor="#0ED7B5"
                                                offset="100%"
                                            ></stop>
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M128 0C93.867 0 72.533 17.067 64 51.2C76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
                                        fill="url(#IconifyId-1771a8fa3ad-4e7d6c-0)"
                                    ></path>
                                </svg>
                                TailwindCSS
                            </a>
                            {me[lang].tentang.split(";")[2]}
                            <a
                                href="https://reactjs.org/"
                                className="transform hover:-translate-y-2 duration-200 ease-in-out mx-2 rounded-full py-1 px-4 shadow-md hover:shadow-xl cursor-pointer inline-flex items-center dark:bg-white dark:text-black"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    focusable="false"
                                    className="mr-2 w-5 h-5"
                                    width="1.13em"
                                    height="1em"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 256 228"
                                >
                                    <path
                                        d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345c.522 2.107.986 4.173 1.386 6.193zM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94zM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18zM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3zM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86z"
                                        fill="#00D8FF"
                                    ></path>
                                </svg>
                                React
                            </a>
                            {me[lang].tentang.split(";")[3]}
                        </div>
                        <div className="mt-6 lg:mt-0 flex items-start justify-end">
                            <InertiaLink
                                href="/resume"
                                className="transform -translate-y-2 hover:translate-y-0 duration-200 ease-in-out shadow-lg hover:shadow focus:outline-none bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white font-bold rounded-full px-8 py-4"
                                title={me[lang].download}
                            >
                                {me[lang].download}
                            </InertiaLink>
                        </div>
                    </motion.div>
                </div>
                <div className="pt-32">
                    <div className="flex flex-col items-center">
                        <span className="font-bold text-3xl text-gray-800 dark:text-gray-200">
                            {me[lang].projects}
                        </span>
                        <svg
                            className="w-20 h-1 text-blue-500 mt-3"
                            fill="currentColor"
                        >
                            <rect height="100%" width="100%"></rect>
                        </svg>
                    </div>
                    <div className="text-lg grid grid-rows-2 mt-6 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-1">
                        {projects &&
                            projects.map((item, index) => (
                                <Project
                                    index={index}
                                    key={index}
                                    img={item.foto}
                                    title={item.judul}
                                    teknologi={item.teknologi}
                                    lang={me[lang].more}
                                    isOpen={openModal}
                                />
                            ))}
                    </div>
                    <div className="flex justify-center mt-8">
                        <a
                            href="https://github.com/amusfq"
                            target="_blank"
                            className="transform -translate-y-2 hover:translate-y-0 duration-200 ease-in-out shadow-lg hover:shadow focus:outline-none bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white font-bold rounded-full px-8 py-2"
                            title={me[lang].more}
                        >
                            {me[lang].more}
                        </a>
                    </div>
                </div>
                <div className="pt-32">
                    <motion.div
                        initial={{ y: 150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col items-center"
                    >
                        <span className="font-bold text-3xl text-gray-800 dark:text-gray-200">
                            {me[lang].skills.split(";")[0]}
                        </span>
                        <svg
                            className="w-20 h-1 text-blue-500 mt-3"
                            fill="currentColor"
                        >
                            <rect height="100%" width="100%"></rect>
                        </svg>
                    </motion.div>
                    <motion.div
                        initial={{ y: 150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="text-lg mt-8 text-center px-4 md:px-24 dark:text-white"
                    >
                        {me[lang].skills.split(";")[1]}
                        <a
                            href="https://www.php.net/"
                            className="transform hover:-translate-y-2 duration-200 ease-in-out mx-2 rounded-full py-1 px-4 shadow-md hover:shadow-xl cursor-pointer inline-flex items-center dark:bg-white dark:text-black"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                focusable="false"
                                className="mr-2 w-5 h-5"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 256 135"
                            >
                                <defs>
                                    <radialGradient
                                        id="IconifyId-1771e795389-64e5cd-1"
                                        cx=".837"
                                        cy="-125.811"
                                        r="363.057"
                                        gradientTransform="matrix(.463 0 0 .463 76.464 81.918)"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop
                                            offset="0"
                                            stopColor="#fff"
                                        ></stop>
                                        <stop
                                            offset=".5"
                                            stopColor="#4c6b97"
                                        ></stop>
                                        <stop
                                            offset="1"
                                            stopColor="#231f20"
                                        ></stop>
                                    </radialGradient>
                                </defs>
                                <ellipse
                                    fill="url(#IconifyId-1771e795389-64e5cd-1)"
                                    cx="128"
                                    cy="67.3"
                                    rx="128"
                                    ry="67.3"
                                ></ellipse>
                                <ellipse
                                    fill="#6181B6"
                                    cx="128"
                                    cy="67.3"
                                    rx="123"
                                    ry="62.3"
                                ></ellipse>
                                <g fill="#FFF">
                                    <path d="M152.9 87.5l6.1-31.4c1.4-7.1.2-12.4-3.4-15.7c-3.5-3.2-9.5-4.8-18.3-4.8h-10.6l3-15.6c.1-.6 0-1.2-.4-1.7s-.9-.7-1.5-.7h-14.6c-1 0-1.8.7-2 1.6l-6.5 33.3c-.6-3.8-2-7-4.4-9.6c-4.3-4.9-11-7.4-20.1-7.4H52.1c-1 0-1.8.7-2 1.6L37 104.7c-.1.6 0 1.2.4 1.7s.9.7 1.5.7h14.7c1 0 1.8-.7 2-1.6l3.2-16.3h10.9c5.7 0 10.6-.6 14.3-1.8c3.9-1.3 7.4-3.4 10.5-6.3c2.5-2.3 4.6-4.9 6.2-7.7l-2.6 13.5c-.1.6 0 1.2.4 1.7s.9.7 1.5.7h14.6c1 0 1.8-.7 2-1.6l7.2-37h10c4.3 0 5.5.8 5.9 1.2c.3.3.9 1.5.2 5.2L134.1 87c-.1.6 0 1.2.4 1.7s.9.7 1.5.7h15c.9-.3 1.7-1 1.9-1.9zm-67.6-26c-.9 4.7-2.6 8.1-5.1 10c-2.5 1.9-6.6 2.9-12 2.9h-6.5l4.7-24.2h8.4c6.2 0 8.7 1.3 9.7 2.4c1.3 1.6 1.6 4.7.8 8.9z"></path>
                                    <path d="M215.3 42.9c-4.3-4.9-11-7.4-20.1-7.4h-28.3c-1 0-1.8.7-2 1.6l-13.1 67.5c-.1.6 0 1.2.4 1.7s.9.7 1.5.7h14.7c1 0 1.8-.7 2-1.6l3.2-16.3h10.9c5.7 0 10.6-.6 14.3-1.8c3.9-1.3 7.4-3.4 10.5-6.3c2.6-2.4 4.8-5.1 6.4-8c1.6-2.9 2.8-6.1 3.5-9.6c1.7-8.7.4-15.5-3.9-20.5zM200 61.5c-.9 4.7-2.6 8.1-5.1 10c-2.5 1.9-6.6 2.9-12 2.9h-6.5l4.7-24.2h8.4c6.2 0 8.7 1.3 9.7 2.4c1.4 1.6 1.7 4.7.8 8.9z"></path>
                                </g>
                                <g fill="#000004">
                                    <path d="M74.8 48.2c5.6 0 9.3 1 11.2 3.1c1.9 2.1 2.3 5.6 1.3 10.6c-1 5.2-3 9-5.9 11.2c-2.9 2.2-7.3 3.3-13.2 3.3h-8.9l5.5-28.2h10zM39 105h14.7l3.5-17.9h12.6c5.6 0 10.1-.6 13.7-1.8c3.6-1.2 6.8-3.1 9.8-5.9c2.5-2.3 4.5-4.8 6-7.5s2.6-5.7 3.2-9c1.6-8 .4-14.2-3.5-18.7s-10.1-6.7-18.6-6.7H52.1L39 105z"></path>
                                    <path d="M113.3 19.6h14.6l-3.5 17.9h13c8.2 0 13.8 1.4 16.9 4.3c3.1 2.9 4 7.5 2.8 13.9L151 87.1h-14.8l5.8-29.9c.7-3.4.4-5.7-.7-6.9c-1.1-1.2-3.6-1.9-7.3-1.9h-11.7l-7.5 38.7h-14.6l13.1-67.5z"></path>
                                    <path d="M189.5 48.2c5.6 0 9.3 1 11.2 3.1c1.9 2.1 2.3 5.6 1.3 10.6c-1 5.2-3 9-5.9 11.2c-2.9 2.2-7.3 3.3-13.2 3.3H174l5.5-28.2h10zM153.7 105h14.7l3.5-17.9h12.6c5.6 0 10.1-.6 13.7-1.8c3.6-1.2 6.8-3.1 9.8-5.9c2.5-2.3 4.5-4.8 6-7.5s2.6-5.7 3.2-9c1.6-8 .4-14.2-3.5-18.7s-10.1-6.7-18.6-6.7h-28.3L153.7 105z"></path>
                                </g>
                            </svg>
                            PHP
                        </a>
                        {me[lang].skills.split(";")[2]}
                        <a
                            href="https://www.javascript.com/"
                            className="transform hover:-translate-y-2 duration-200 ease-in-out mx-2 rounded-full py-1 px-4 shadow-md hover:shadow-xl cursor-pointer inline-flex items-center dark:bg-white dark:text-black"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                focusable="false"
                                className="mr-2 w-5 h-5"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 256 256"
                            >
                                <path
                                    d="M0 0h256v256H0V0z"
                                    fill="#F7DF1E"
                                ></path>
                                <path
                                    d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996"
                                    fill="#000"
                                ></path>
                                <path
                                    d="M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"
                                    fill="#000"
                                ></path>
                            </svg>
                            Javascript
                        </a>
                        {me[lang].skills.split(";")[3]}
                    </motion.div>
                    <div className="grid grid-cols-1 justify-items-center gap-8 mt-8">
                        <div className="flex space-x-8">
                            <motion.a
                                initial={{ y: 150, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                                href="https://reactjs.org"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    focusable="false"
                                    className="text-5xl h-12 w-auto filter-grayscale hover:filter-none transform hover:scale-125 duration-100 ease-out cursor-pointer"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 256 228"
                                >
                                    <path
                                        d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345c.522 2.107.986 4.173 1.386 6.193zM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94zM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18zM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3zM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86z"
                                        fill="#00D8FF"
                                    ></path>
                                </svg>
                            </motion.a>
                            <motion.a
                                initial={{ y: 150, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                href="https://tailwindcss.com"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    focusable="false"
                                    className="text-5xl h-12 w-auto filter-grayscale hover:filter-none transform hover:scale-125 duration-100 ease-out cursor-pointer"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 256 154"
                                >
                                    <defs>
                                        <linearGradient
                                            x1="-2.778%"
                                            y1="32%"
                                            x2="100%"
                                            y2="67.556%"
                                            id="IconifyId-1771e3f8fac-dad491-2"
                                        >
                                            <stop
                                                stopColor="#2298BD"
                                                offset="0%"
                                            ></stop>
                                            <stop
                                                stopColor="#0ED7B5"
                                                offset="100%"
                                            ></stop>
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M128 0C93.867 0 72.533 17.067 64 51.2C76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
                                        fill="url(#IconifyId-1771e3f8fac-dad491-2)"
                                    ></path>
                                </svg>
                            </motion.a>
                            <motion.a
                                initial={{ y: 150, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.6 }}
                                href="https://laravel.com"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    focusable="false"
                                    className="text-5xl h-12 w-auto filter-grayscale hover:filter-none transform hover:scale-125 duration-100 ease-out cursor-pointer"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 256 264"
                                >
                                    <path
                                        d="M255.856 59.62c.095.351.144.713.144 1.077v56.568c0 1.478-.79 2.843-2.073 3.578L206.45 148.18v54.18a4.135 4.135 0 0 1-2.062 3.579l-99.108 57.053c-.227.128-.474.21-.722.299c-.093.03-.18.087-.278.113a4.15 4.15 0 0 1-2.114 0c-.114-.03-.217-.093-.325-.134c-.227-.083-.464-.155-.68-.278L2.073 205.938A4.128 4.128 0 0 1 0 202.36V32.656c0-.372.052-.733.144-1.083c.031-.119.103-.227.145-.346c.077-.216.15-.438.263-.639c.077-.134.19-.242.283-.366c.119-.165.227-.335.366-.48c.119-.118.274-.206.408-.309c.15-.124.283-.258.453-.356h.005L51.613.551a4.135 4.135 0 0 1 4.125 0l49.546 28.526h.01c.165.104.305.232.454.351c.134.103.284.196.402.31c.145.149.248.32.371.484c.088.124.207.232.279.366c.118.206.185.423.268.64c.041.118.113.226.144.35c.095.351.144.714.145 1.078V138.65l41.286-23.773V60.692c0-.36.052-.727.145-1.072c.036-.124.103-.232.144-.35c.083-.217.155-.44.268-.64c.077-.134.19-.242.279-.366c.123-.165.226-.335.37-.48c.12-.118.269-.206.403-.309c.155-.124.289-.258.454-.356h.005l49.551-28.526a4.13 4.13 0 0 1 4.125 0l49.546 28.526c.175.103.309.232.464.35c.128.104.278.197.397.31c.144.15.247.32.37.485c.094.124.207.232.28.366c.118.2.185.423.267.64c.047.118.114.226.145.35zm-8.115 55.258v-47.04l-17.339 9.981l-23.953 13.792v47.04l41.297-23.773h-.005zm-49.546 85.095V152.9l-23.562 13.457l-67.281 38.4v47.514l90.843-52.3zM8.259 39.796v160.177l90.833 52.294v-47.505L51.64 177.906l-.015-.01l-.02-.01c-.16-.093-.295-.227-.444-.34c-.13-.104-.279-.186-.392-.3l-.01-.015c-.134-.129-.227-.289-.34-.433c-.104-.14-.227-.258-.31-.402l-.005-.016c-.093-.154-.15-.34-.217-.515c-.067-.155-.154-.3-.196-.464v-.005c-.051-.196-.061-.403-.082-.604c-.02-.154-.062-.309-.062-.464V63.57L25.598 49.772l-17.339-9.97v-.006zM53.681 8.893L12.399 32.656l41.272 23.762L94.947 32.65L53.671 8.893h.01zm21.468 148.298l23.948-13.786V39.796L81.76 49.778L57.805 63.569v103.608l17.344-9.986zM202.324 36.935l-41.276 23.762l41.276 23.763l41.271-23.768l-41.27-23.757zm-4.13 54.676l-23.953-13.792l-17.338-9.981v47.04l23.948 13.787l17.344 9.986v-47.04zm-94.977 106.006l60.543-34.564l30.264-17.272l-41.246-23.747l-47.489 27.34l-43.282 24.918l41.21 23.325z"
                                        fill="#FF2D20"
                                    ></path>
                                </svg>
                            </motion.a>
                        </div>
                        <div className="flex space-x-8">
                            <motion.a
                                initial={{ y: 150, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.9 }}
                                href="https://getbootstrap.com/"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    focusable="false"
                                    className="text-5xl h-12 w-auto filter-grayscale hover:filter-none transform hover:scale-125 duration-100 ease-out cursor-pointer"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 256 256"
                                >
                                    <path
                                        d="M0 222.991C0 241.223 14.779 256 33.009 256H222.99C241.223 256 256 241.221 256 222.991V33.01C256 14.777 241.221 0 222.991 0H33.01C14.777 0 0 14.779 0 33.009V222.99z"
                                        fill="#563D7C"
                                    ></path>
                                    <path
                                        d="M106.158 113.238V76.985h31.911c3.04 0 5.97.253 8.792.76c2.822.506 5.319 1.41 7.49 2.713c2.17 1.303 3.907 3.112 5.21 5.427c1.302 2.316 1.954 5.283 1.954 8.9c0 6.513-1.954 11.217-5.862 14.111c-3.907 2.895-8.9 4.342-14.979 4.342h-34.516zM72.075 50.5v155h75.112c6.947 0 13.713-.868 20.298-2.605c6.585-1.737 12.446-4.414 17.584-8.032c5.137-3.618 9.226-8.286 12.265-14.002c3.04-5.717 4.559-12.483 4.559-20.298c0-9.697-2.352-17.982-7.055-24.856c-4.704-6.875-11.832-11.687-21.384-14.437c6.947-3.328 12.194-7.598 15.74-12.808c3.545-5.21 5.318-11.722 5.318-19.538c0-7.236-1.194-13.314-3.582-18.235c-2.388-4.92-5.753-8.864-10.095-11.831c-4.341-2.967-9.551-5.102-15.63-6.404c-6.078-1.303-12.808-1.954-20.189-1.954H72.075zm34.083 128.515v-42.549h37.121c7.381 0 13.315 1.7 17.802 5.102c4.486 3.401 6.73 9.081 6.73 17.041c0 4.053-.688 7.381-2.063 9.986c-1.375 2.605-3.22 4.668-5.536 6.187c-2.315 1.52-4.993 2.605-8.032 3.257c-3.04.65-6.223.976-9.552.976h-36.47z"
                                        fill="#FFF"
                                    ></path>
                                </svg>
                            </motion.a>
                            <motion.a
                                initial={{ y: 150, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 1.2 }}
                                href="https://python.org/"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    className="text-5xl h-12 w-auto filter-grayscale hover:filter-none transform hover:scale-125 duration-100 ease-out cursor-pointer"
                                    viewBox="0 0 110.421 109.846"
                                    version="1.0"
                                >
                                    <defs>
                                        <linearGradient id="a">
                                            <stop
                                                offset="0"
                                                stopColor="#ffe052"
                                            />
                                            <stop
                                                offset="1"
                                                stopColor="#ffc331"
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            gradientUnits="userSpaceOnUse"
                                            y2="168.101"
                                            x2="147.777"
                                            y1="111.921"
                                            x1="89.137"
                                            id="d"
                                            xlinkHref="#a"
                                        />
                                        <linearGradient id="b">
                                            <stop
                                                offset="0"
                                                stopColor="#387eb8"
                                            />
                                            <stop
                                                offset="1"
                                                stopColor="#366994"
                                            />
                                        </linearGradient>
                                        <linearGradient
                                            gradientUnits="userSpaceOnUse"
                                            y2="131.853"
                                            x2="110.149"
                                            y1="77.07"
                                            x1="55.549"
                                            id="c"
                                            xlinkHref="#b"
                                        />
                                    </defs>
                                    <g color="#000">
                                        <path
                                            style={{ marker: "none" }}
                                            d="M99.75 67.469c-28.032 0-26.281 12.156-26.281 12.156l.031 12.594h26.75V96H62.875s-17.938-2.034-17.938 26.25 15.657 27.281 15.657 27.281h9.343v-13.125s-.503-15.656 15.407-15.656h26.531s14.906.241 14.906-14.406V82.125s2.263-14.656-27.031-14.656zM85 75.938a4.808 4.808 0 014.813 4.812A4.808 4.808 0 0185 85.563a4.808 4.808 0 01-4.813-4.813A4.808 4.808 0 0185 75.937z"
                                            fill="url(#c)"
                                            overflow="visible"
                                            transform="translate(-44.938 -67.469)"
                                        />
                                        <path
                                            d="M100.546 177.315c28.032 0 26.281-12.156 26.281-12.156l-.03-12.594h-26.75v-3.781h37.374s17.938 2.034 17.938-26.25c0-28.285-15.657-27.282-15.657-27.282h-9.343v13.125s.503 15.657-15.407 15.657h-26.53s-14.907-.241-14.907 14.406v24.219s-2.263 14.656 27.031 14.656zm14.75-8.469a4.808 4.808 0 01-4.812-4.812 4.808 4.808 0 014.812-4.813 4.808 4.808 0 014.813 4.813 4.808 4.808 0 01-4.813 4.812z"
                                            style={{ marker: "none" }}
                                            fill="url(#d)"
                                            overflow="visible"
                                            transform="translate(-44.938 -67.469)"
                                        />
                                    </g>
                                </svg>
                            </motion.a>
                            <motion.a
                                initial={{ y: 150, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 1.5 }}
                                href="#"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-5xl h-12 w-auto filter-grayscale hover:filter-none transform hover:scale-125 duration-100 ease-out cursor-pointer"
                                    viewBox="-26 -20 507 552"
                                    fill="#fff"
                                >
                                    <linearGradient
                                        id="w"
                                        x1="121.0946"
                                        x2="261.7725"
                                        y1="55.8074"
                                        y2="235.867"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset="0" stopColor="#a47ede" />
                                        <stop offset="1" stopColor="#9866d3" />
                                    </linearGradient>
                                    <linearGradient
                                        id="x"
                                        x1="314.1754"
                                        x2="443.4638"
                                        y1="207.291"
                                        y2="372.7726"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset="0" stopColor="#3b009b" />
                                        <stop offset="1" stopColor="#390086" />
                                    </linearGradient>
                                    <linearGradient
                                        id="y"
                                        x1="115.2882"
                                        x2="252.7405"
                                        y1="326.1631"
                                        y2="502.094"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset="0" stopColor="#340084" />
                                        <stop offset="1" stopColor="#290064" />
                                    </linearGradient>
                                    <clipPath id="z">
                                        <path d="M435.279 113.284L247.191 4.692c-10.835-6.257-28.567-6.257-39.402 0L19.701 113.284C8.865 119.539 0 134.896 0 147.408v217.185c.843 14.571 8.286 26.639 19.701 34.123l188.088 108.592c10.835 6.257 28.567 6.257 39.402 0l188.088-108.592c12.248-8.146 19.219-20.408 19.701-34.123V147.408c-.44-13.165-8.323-26.443-19.701-34.124z" />
                                    </clipPath>
                                    <g clipPath="url(#z)">
                                        <path
                                            fill="url(#x)"
                                            d="M222.588 124.487h267.464V397.98H222.588z"
                                        />
                                        <path
                                            fill="url(#y)"
                                            d="M490.052 407.802L145.845 208.63H-29.911v329.723h519.963z"
                                        />
                                        <path
                                            fill="url(#w)"
                                            d="M-29.911 405.093l519.963-300.885V-14.513H-29.911z"
                                        />
                                    </g>
                                    <path d="M75.83 256.001c-.891-148.089 197.459-213.479 282.996-75.878l-65.635 37.98C253.569 152.569 155.19 176.002 151.659 256c1.06 73.729 97.754 107.978 141.536 37.893l65.635 37.979c-75.382 130.863-279.198 83.781-283-75.871zM326 213h12.5l-8.541 82.5h-12.735zM352.776 213h12.5l-8.541 82.5H344zM312 232.592h62.5v12.072H312zM308.5 262H371v12.072h-62.5z" />
                                </svg>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
            <Transition
                show={isOpen}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 p-4 overflow-y-auto">
                    <div className="mt-0 md:mt-24 max-w-md px-6 mx-auto sm:px-0 sm:max-w-lg md:max-w-2xl bg-white rounded-md shadow-lg">
                        <div className="relative w-full h-96">
                            <button
                                onClick={() => paginate(-1)}
                                className="absolute cursor-pointer focus:outline-none z-50 bottom-0 left-0 h-16 w-16 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-tr-md text-white p-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={() => paginate(1)}
                                className="absolute cursor-pointer focus:outline-none z-50 bottom-0 right-0 h-16 w-16 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-tl-md text-white p-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            <div className="grid h-96 max-h-96">
                                <AnimatePresence
                                    initial={false}
                                    custom={direction}
                                >
                                    <motion.img
                                        key={page}
                                        className="absolute inset-0 z-10 h-96 max-h-96 w-full object-cover object-top rounded-t-md"
                                        src={`storage/images/${images[page]}`}
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: {
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30,
                                            },
                                            opacity: { duration: 0.2 },
                                        }}
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragElastic={1}
                                        onDragEnd={(
                                            e,
                                            { offset, velocity }
                                        ) => {
                                            const swipe = swipePower(
                                                offset.x,
                                                velocity.x
                                            );

                                            if (
                                                swipe <
                                                -swipeConfidenceThreshold
                                            ) {
                                                paginate(1);
                                            } else if (
                                                swipe > swipeConfidenceThreshold
                                            ) {
                                                paginate(-1);
                                            }
                                        }}
                                    />
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className="border-t-4 border-gray-800 p-8">
                            <div className="pb-4 border-b">
                                <h1 className="font-bold text-3xl">
                                    {selectedProject.judul}
                                </h1>
                                <h2 className="font-bold text-xl">
                                    {selectedProject.untuk}
                                </h2>
                            </div>
                            <div className="py-4">
                                {selectedProject.keterangan}
                            </div>
                            <div className="flex flex-row justify-between items-center mt-4">
                                {selectedProject.link ? (
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        className="focus:outline-none rounded px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold"
                                    >
                                        {me[lang].more}
                                    </a>
                                ) : (
                                    <div />
                                )}
                                <button
                                    onClick={closeModal}
                                    className="focus:outline-none w-8 h-8 text-gray-300 hover:text-gray-500 transform hover:scale-150 duration-200 ease-in-out"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
            <Footer lang={me[lang].contact} />
        </>
    );
};

const Project = ({ index, img, title, teknologi, lang, isOpen }) => {
    return (
        <div className="cursor-pointer group relative h-52 w-full flex flex-col bg-gray-100 overflow-hidden shadow-md">
            <div className="p-4 transform duration-500 ease-in-out opacity-0 group-hover:opacity-100 absolute z-40 top-0 left-0 right-0 bottom-0 bg-white">
                <div className="flex flex-col">
                    <h1 className="transform -translate-y-32 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-500 ease-in-out text-center text-gray-800 font-bold text-xl">
                        {title}
                    </h1>
                    <h3 className="transform -translate-y-32 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-500 ease-in-out text-center text-blue-500">
                        {teknologi.replace(",", " / ")}
                    </h3>
                    <button
                        onClick={() => isOpen(true, index)}
                        className="transform translate-y-32 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-500 ease-in-out mt-8 self-center bg-blue-500 hover:bg-blue-600 px-4 py-1 font-bold rounded-md text-white"
                    >
                        {lang}
                    </button>
                </div>
            </div>
            <SimpleImg
                className="absolute inset-0 z-10 h-52 max-h-52 w-full object-cover object-top"
                src={`storage/images/${img.split(",")[0]}`}
                alt={title}
                importance="low"
            />
            <div className="absolute z-0 top-1/2 left-0 right-0 transform -translate-y-1/2 text-center text-xl font-bold">
                No Image
            </div>
        </div>
    );
};

export default Index;
