import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const AboutCompany = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="w-full max-w-4xl mt-5">
                {/* Header */}
                <header className="bg-purple-500 text-white text-center py-4 rounded-xl">
                    <div className="flex justify-between items-center px-4">
                        <Link to="/" className="flex items-center">
                            <ArrowLeftIcon className="h-6 w-6 mr-2" />
                            Back
                        </Link>
                        <h1 className="text-2xl font-bold">About</h1>
                        <div className="w-6"></div>
                    </div>
                </header>

                {/* Content */}
                <div className="container mx-auto py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Content */}
                        <div className=" flex-col p-4 bg-white rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">
                                Our Mission
                            </h2>
                            <p className="text-gray-700">
                                Misi kami adalah membuat perjalanan udara jadi
                                lebih mudah dan menyenangkan.
                            </p>
                        </div>
                        {/* Right Content */}
                        <div className="p-4 bg-white rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">
                                Our Vision
                            </h2>
                            <p className="text-gray-700">
                                Visi kami di Flytix adalah menjadi tempat
                                terbaik untuk beli dan booking tiket pesawat
                                online.
                            </p>
                        </div>
                    </div>

                    {/* Team Development */}
                    <div className="mt-12">
                        <h2 className="text-3xl font-bold text-center mb-6">
                            Team Development
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {/* Team Member 1 */}
                            <div className="p-4 bg-white rounded-lg shadow-lg">
                                <div className="flex flex-col items-center mb-2">
                                    <img
                                        src="dev-1.jpg"
                                        alt="Developer 1"
                                        className="w-24 h-24 rounded-full"
                                    />
                                    <h3 className="text-xl font-bold mt-2 text-center">
                                        Muhammad Helmy Fadlail Albab
                                    </h3>
                                </div>
                                <div className="flex items-center mt-2 text-sm">
                                    <img
                                        src="Logo_Universitas_Brawijaya.png"
                                        alt="University Logo"
                                        className="w-6 h-6 mr-2"
                                    />
                                    <span>Universitas Brawijaya</span>
                                </div>
                                <p className="text-gray-700 mt-3">
                                    Product Owner
                                </p>
                            </div>
                            {/* Team Member 2 */}
                            <div className="p-4 bg-white rounded-lg shadow-lg">
                                <div className="flex flex-col items-center mb-2">
                                    <img
                                        src="dev-2.jpg"
                                        alt="Developer 2"
                                        className="w-24 h-24 rounded-full"
                                    />
                                    <h3 className="text-xl font-bold mt-2 text-center">
                                        Dza Habbin Nofaylah
                                    </h3>
                                </div>
                                <div className="flex items-center mt-2 text-sm">
                                    <img
                                        src="Uniba Madura.png"
                                        alt="University Logo"
                                        className="w-6 h-6 mr-2"
                                    />
                                    <span>
                                        Universitas Bahaudin Mudhary Madura
                                    </span>
                                </div>
                                <p className="text-gray-700 mt-5">
                                    Scrum Master
                                </p>
                            </div>
                            {/* Team Member 3 */}
                            <div className="p-4 bg-white rounded-lg shadow-lg">
                                <div className="flex flex-col items-center mb-2">
                                    <img
                                        src="dev-3.jpg"
                                        alt="Developer 3"
                                        className="w-24 h-24 rounded-full"
                                    />
                                    <h3 className="text-xl font-bold mt-2 text-center">
                                        Muhammad Huda Nugroho
                                    </h3>
                                </div>
                                <div className="flex items-center mt-2 text-sm">
                                    <img
                                        src="Logo-Universitas-Gunadarma.png"
                                        alt="University Logo"
                                        className="w-6 h-6 mr-2"
                                    />
                                    <span>Universitas Gunadarma</span>
                                </div>
                                <p className="text-gray-700 mt-10">
                                    Back-end Developer
                                </p>
                            </div>
                            {/* Team Member 4 */}
                            <div className="p-4 bg-white rounded-lg shadow-lg">
                                <div className="flex flex-col items-center mb-2">
                                    <img
                                        src="dev-4.jpg"
                                        alt="Developer 4"
                                        className="w-24 h-24 rounded-full"
                                    />
                                    <h3 className="text-xl font-bold mt-2 text-center">
                                        Theresia Nawangsih
                                    </h3>
                                </div>
                                <div className="flex items-center mt-2 text-sm">
                                    <img
                                        src="lambang-its.png"
                                        alt="University Logo"
                                        className="w-6 h-6 mr-2"
                                    />
                                    <span>
                                        Institut Teknologi Sepuluh November
                                    </span>
                                </div>
                                <p className="text-gray-700 mt-10">
                                    Back-end Developer
                                </p>
                            </div>
                            {/* Team Member 5 */}
                            <div className="p-4 bg-white rounded-lg shadow-lg">
                                <div className="flex flex-col items-center mb-2">
                                    <img
                                        src="dev-5.jpg"
                                        alt="Developer 5"
                                        className="w-24 h-24 rounded-full"
                                    />
                                    <h3 className="text-xl font-bold mt-2 text-center">
                                        Christin Henin Oei
                                    </h3>
                                </div>
                                <div className="flex items-center mt-2 text-sm">
                                    <img
                                        src="Logo_Universitas_Brawijaya.png"
                                        alt="University Logo"
                                        className="w-6 h-6 mr-2"
                                    />
                                    <span>Universitas Brawijaya</span>
                                </div>
                                <p className="text-gray-700 mt-10">
                                    Back-end Developer
                                </p>
                            </div>
                            {/* Team Member 6 */}
                            <div className="p-4 bg-white rounded-lg shadow-lg">
                                <div className="flex flex-col items-center mb-2">
                                    <img
                                        src="dev-6.jpg"
                                        alt="Developer 6"
                                        className="w-24 h-24 rounded-full"
                                    />
                                    <h3 className="text-xl font-bold mt-2 text-center">
                                        Endang Hendayatna
                                    </h3>
                                </div>
                                <div className="flex items-center mt-2 text-sm">
                                    <img
                                        src="unsap.png"
                                        alt="University Logo"
                                        className="w-6 h-6 mr-2"
                                    />
                                    <span>Universitas Sebelas April</span>
                                </div>
                                <p className="text-gray-700 mt-10">
                                    Front-end Developer
                                </p>
                            </div>
                            {/* Team Member 7 */}
                            <div className="p-4 bg-white rounded-lg shadow-lg">
                                <div className="flex flex-col items-center mb-2">
                                    <img
                                        src="dev-7.jpg"
                                        alt="Developer 7"
                                        className="w-24 h-24 rounded-full"
                                    />
                                    <h3 className="text-xl font-bold mt-2 text-center">
                                        Fauzi Ibnu Hakim
                                    </h3>
                                </div>
                                <div className="flex items-center mt-2 text-sm">
                                    <img
                                        src="unsap.png"
                                        alt="University Logo"
                                        className="w-6 h-6 mr-2"
                                    />
                                    <span>Universitas Sebelas April</span>
                                </div>
                                <p className="text-gray-700 mt-10">
                                    Front-end Developer
                                </p>
                            </div>
                            {/* Team Member 8 */}
                            <div className="p-4 bg-white rounded-lg shadow-lg">
                                <div className="flex flex-col items-center mb-2">
                                    <img
                                        src="dev-1.jpg"
                                        alt="Developer 8"
                                        className="w-24 h-24 rounded-full"
                                    />
                                    <h3 className="text-xl font-bold mt-2 text-center">
                                        Yana Wahyu Indra Pramugari
                                    </h3>
                                </div>
                                <div className="flex items-center mt-2 text-sm">
                                    <img
                                        src="logo unesa.png"
                                        alt="University Logo"
                                        className="w-6 h-6 mr-2"
                                    />
                                    <span>Universitas Negeri Surabaya</span>
                                </div>
                                <p className="text-gray-700 mt-3">
                                    Front-end Developer
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <footer className="bg-purple-500 text-white text-center py-4 mt-5 rounded-xl">
                        &copy; {new Date().getFullYear()} FlyTix AeroTech. All
                        rights reserved.
                    </footer>
                </div>
            </div>
        </div>
    );
};
export default AboutCompany;
