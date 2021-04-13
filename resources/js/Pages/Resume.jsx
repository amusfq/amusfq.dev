import React, { createRef, useEffect, useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const Resume = () => {
    const { data } = usePage().props;
    const [pendidikan, setPendidikan] = useState([]);
    const [pengalaman, setPengalaman] = useState([]);
    const [bahasa, setBahasa] = useState([]);
    const [socialMedia, setSocialMedia] = useState([]);
    const [pageSize, setPageSize] = useState([1586, 791]);

    useEffect(() => {
        document.title = "Resume - Achmad Musyaffa Taufiqi";
        setPendidikan(JSON.parse(JSON.parse(data.pendidikan)));
        setPengalaman(JSON.parse(JSON.parse(data.pengalaman)));
        setBahasa(JSON.parse(JSON.parse(data.bahasa)));
        setSocialMedia(JSON.parse(JSON.parse(data.social_media)));
    }, []);

    const print = () => {
        var print = document.getElementById("paper").innerHTML;
        var a = window.open("", "");
        a.document.write(
            '<html><head><meta name="viewport" content="width=device-width, initial-scale=1">'
        );
        a.document.write(
            '<link href="https://unpkg.com/tailwindcss@2.0.2/dist/tailwind.min.css" rel="stylesheet">'
        );
        a.document.write(
            "</head><body style='width: 21cm;min-height: 29.7cm;'>"
        );
        a.document.write(print);
        a.document.write("</body></html>");
        a.document.close();
        a.print();
    };

    const pdf = () => {
        const elm = document.getElementById("pdf");
        let width = elm.offsetWidth;
        let height = elm.offsetHeight;
        html2canvas(elm, {
            width: width,
            height: height,
            scale: 1.75,
            scrollY: -window.scrollY,
        }).then((canvas) => {
            const data = canvas
                .toDataURL("image/jpg")
                .replace("image/jpg", "image/octet-stream");
            let pdf = new jsPDF("p", "px", [height, width]);

            pdf.addImage(data, "JPG", 0, 0);
            pdf.save("Resume - Achmad Musyaffa Taufiqi.pdf");
        });
    };

    return (
        <div className="bg-gray-50">
            <div
                className="mx-auto shadow-md border border-gray-50 bg-white"
                id="paper"
            >
                <div id="pdf">
                    {/* border top blue */}
                    <div className="h-4 bg-blue-500"></div>
                    <div className="flex flex-row space-x-8 p-8">
                        {/* Left Section */}
                        <div className="w-4/6 h-full grid grid-cols-1 gap-4">
                            {/* Me */}
                            <div className="h-40 grid grid-cols-1 place-content-center">
                                <h1 className="roboto font-bold text-3xl">
                                    {data.nama}
                                </h1>
                                <h3 className="roboto text-2xl text-blue-500">
                                    {data.pekerjaan}
                                </h3>
                            </div>
                            {/* Tentang Saya */}
                            <div className="grid grid-cols-1 gap-2">
                                <h1 className="roboto font-bold text-xl text-blue-500">
                                    TENTANG SAYA
                                </h1>
                                <p className="roboto">{data.tentang_saya}</p>
                            </div>
                            {/* Pendidikan */}
                            <div className="grid grid-cols-1 gap-2">
                                <h1 className="roboto font-bold text-xl text-blue-500">
                                    PENDIDIKAN
                                </h1>
                                <div className="grid grid-cols-1 gap-2">
                                    {pendidikan.map((item, index) => (
                                        <Pendidikan
                                            key={index}
                                            jurusan={item.jurusan}
                                            instansi={item.instansi}
                                            tahun={item.tahun}
                                        />
                                    ))}
                                </div>
                            </div>
                            {/* Pengalaman */}
                            <div className="grid grid-cols-1 gap-2">
                                <h1 className="roboto font-bold text-xl text-blue-500">
                                    PENGALAMAN
                                </h1>
                                <div className="grid grid-cols-1 gap-2">
                                    {pengalaman.map((item, index) => (
                                        <Pengalaman
                                            key={index}
                                            bagian={item.bagian}
                                            aplikasi={item.aplikasi}
                                            tahun={item.tahun}
                                            deskripsi={item.deskripsi}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Right Section */}
                        <div className="w-2/6 h-full grid grid-cols-1 gap-4">
                            <div className="h-40">
                                <img
                                    className="h-40 w-40 bg-gray-100 rounded-full shadow-md"
                                    src="me.jpg"
                                    alt="Achmad Musyaffa Taufiqi"
                                />
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <h3 className="roboto text-xl text-gray-600">
                                    {data.email}
                                </h3>
                                <h3 className="roboto text-xl text-gray-600">
                                    {data.no_telp}
                                </h3>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <h3 className="roboto font-bold text-xl text-gray-600">
                                    Pengetahuan Industri
                                </h3>
                                <p className="roboto text-gray-600">
                                    {data.pengetahuan_industri}
                                </p>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <h3 className="roboto font-bold text-xl text-gray-600">
                                    Teknologi dan Alat
                                </h3>
                                <p className="roboto text-gray-600">
                                    {data.teknologi_dan_alat}
                                </p>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <h3 className="roboto font-bold text-xl text-gray-600">
                                    Kemampuan Lain
                                </h3>
                                <p className="roboto text-gray-600">
                                    {data.kemampuan_lain}
                                </p>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <h3 className="roboto font-bold text-xl text-gray-600">
                                    Bahasa
                                </h3>
                                <div>
                                    {bahasa.map((item, index) => (
                                        <p
                                            className="roboto text-gray-600"
                                            key={index}
                                        >
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <h3 className="roboto font-bold text-xl text-gray-600">
                                    Sosial Media
                                </h3>
                                <div>
                                    {socialMedia.map((item, index) => (
                                        <p
                                            className="roboto text-gray-600"
                                            key={index}
                                        >
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-8 right-8 w-full">
                <div
                    className="flex flex-row space-x-4  mx-auto justify-end"
                    style={{ width: "21cm" }}
                >
                    <button
                        className="bg-blue-500 hover:bg-blue-600 w-16 h-16 text-white rounded-full p-4"
                        title="Print"
                        onClick={print}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                            />
                        </svg>
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 w-16 h-16 text-white rounded-full p-4"
                        title="Save to PDF"
                        onClick={pdf}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

const Pendidikan = ({ jurusan, instansi, tahun }) => {
    return (
        <div>
            <h3 className="roboto font-bold text-lg">{jurusan}</h3>
            <p className="roboto text-md">{instansi}</p>
            <span className="roboto text-sm text-gray-600">{tahun}</span>
        </div>
    );
};

const Pengalaman = ({ bagian, aplikasi, tahun, deskripsi }) => {
    return (
        <div>
            <h3 className="roboto font-bold text-lg">{bagian}</h3>
            <p className="roboto text-md text-lg">{aplikasi}</p>
            <span className="roboto text-sm text-gray-600">{tahun}</span>
            <p className="roboto">{deskripsi}</p>
        </div>
    );
};
export default Resume;
