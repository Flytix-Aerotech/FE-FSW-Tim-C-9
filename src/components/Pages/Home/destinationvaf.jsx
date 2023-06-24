import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const DestinationFavorite = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="max-w-screen-xl mx-auto">
                <h1 className="text-left font-bold mb-6">Destinasi Favorit</h1>
                <div className="flex flex-wrap mb-8 gap-2">
                    <button
                        className={`flex items-center mr-2 px-4 py-3 ${
                            activeButton === 1
                                ? "bg-purple-700/100 text-white"
                                : "bg-deep-purple-200 text-gray-900"
                        } text-black rounded-xl`}
                        onClick={() => handleButtonClick(1)}
                    >
                        <MagnifyingGlassIcon
                            className="h-5 w-5 mr-2"
                            strokeWidth={2.5}
                        />
                        Semua
                    </button>

                    <button
                        className={`flex items-center mr-2 px-4 py-2 ${
                            activeButton === 2
                                ? "bg-purple-700/100 text-white"
                                : "bg-deep-purple-200 text-gray-900"
                        } text-black rounded-xl`}
                        onClick={() => handleButtonClick(2)}
                    >
                        <MagnifyingGlassIcon
                            className="h-5 w-5 mr-2"
                            strokeWidth={2.5}
                        />
                        Asia
                    </button>
                    <button
                        className={`flex items-center mr-2 px-4 py-2 ${
                            activeButton === 3
                                ? "bg-purple-700/100 text-white"
                                : "bg-deep-purple-200 text-gray-900"
                        } text-black rounded-xl`}
                        onClick={() => handleButtonClick(3)}
                    >
                        <MagnifyingGlassIcon
                            className="h-5 w-5 mr-2"
                            strokeWidth={2.5}
                        />{" "}
                        Amerika
                    </button>
                    <button
                        className={`flex items-center mr-2 px-4 py-2 ${
                            activeButton === 4
                                ? "bg-purple-700/100 text-white"
                                : "bg-deep-purple-200 text-gray-900"
                        } text-black rounded-xl`}
                        onClick={() => handleButtonClick(4)}
                    >
                        <MagnifyingGlassIcon
                            className="h-5 w-5 mr-2"
                            strokeWidth={2.5}
                        />
                        Australia
                    </button>
                    <button
                        className={`flex items-center mr-2 px-4 py-2 ${
                            activeButton === 5
                                ? "bg-purple-700/100 text-white"
                                : "bg-deep-purple-200 text-gray-900"
                        } text-black rounded-xl`}
                        onClick={() => handleButtonClick(5)}
                    >
                        <MagnifyingGlassIcon
                            className="h-5 w-5 mr-2"
                            strokeWidth={2.5}
                        />
                        Eropa
                    </button>
                    <button
                        className={`flex items-center mr-2 px-4 py-2 ${
                            activeButton === 6
                                ? "bg-purple-700/100 text-white"
                                : "bg-deep-purple-200 text-gray-900"
                        } text-black rounded-xl`}
                        onClick={() => handleButtonClick(6)}
                    >
                        <MagnifyingGlassIcon
                            className="h-5 w-5 mr-2"
                            strokeWidth={2.5}
                        />
                        Afrika
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {/* Destinasi Favorit 1 */}
                <div className="bg-white rounded-lg shadow-md p-4">
                    <img
                        src="Frame 152.png"
                        alt="Destination 1"
                        className="w-full object-cover rounded-t-lg"
                    />
                    <div className="mt-4">
                        <h1 className="text-sm font-medium">
                            Jakarta -&gt; Bangkok{" "}
                        </h1>
                        <p className="text-deep-purple-500 text-sm font-semibold">
                            AirAsia
                        </p>
                        <p className="text-xs font-medium">
                            20 - 30 Maret 2023
                        </p>
                        <div className="flex items-center mt-0">
                            <span className="text-sm font-normal">
                                Mulai dari&nbsp;
                            </span>
                            <span className="text-red-600 font-bold">
                                IDR 950.000
                            </span>
                        </div>
                    </div>
                </div>

                {/* Destinasi Favorit 2 */}
                <div className="bg-white rounded-lg shadow-md p-4">
                    <img
                        src="Frame 152.png"
                        alt="Destination 2"
                        className="w-full object-cover rounded-t-lg"
                    />
                    <div className="mt-4">
                        <h1 className="text-sm font-medium">
                            Jakarta -&gt; Bangkok{" "}
                        </h1>
                        <p className="text-deep-purple-500 text-sm font-semibold">
                            AirAsia
                        </p>
                        <p className="text-xs font-medium">
                            20 - 30 Maret 2023
                        </p>
                        <div className="flex items-center mt-0">
                            <span className="text-sm font-normal">
                                Mulai dari&nbsp;
                            </span>
                            <span className="text-red-600 font-bold">
                                IDR 950.000
                            </span>
                        </div>
                    </div>
                </div>

                {/* Destinasi Favorit 3 */}
                <div className="bg-white rounded-lg shadow-md p-4">
                    <img
                        src="Rectangle 24.png"
                        alt="Destination 3"
                        className="w-full object-cover rounded-t-lg"
                    />
                    <div className="mt-4">
                        <h1 className="text-sm font-medium">
                            Jakarta -&gt; Sydney{" "}
                        </h1>
                        <p className="text-deep-purple-500 text-sm font-semibold">
                            AirAsia
                        </p>
                        <p className="text-xs font-medium">5 - 25 Maret 2023</p>
                        <div className="flex items-center mt-0">
                            <span className="text-sm font-normal">
                                Mulai dari&nbsp;
                            </span>
                            <span className="text-red-500 font-bold">
                                IDR 3.650.000
                            </span>
                        </div>
                    </div>
                </div>

                {/* Destinasi Favorit 4 */}
                <div className="bg-white rounded-lg shadow-md p-4">
                    <img
                        src="Rectangle 24.png"
                        alt="Destination 4"
                        className="w-full object-cover rounded-t-lg"
                    />
                    <div className="mt-4">
                        <h1 className="text-sm font-medium">
                            Jakarta -&gt; Sydney{" "}
                        </h1>
                        <p className="text-deep-purple-500 text-sm font-semibold">
                            AirAsia
                        </p>
                        <p className="text-xs font-medium">5 - 25 Maret 2023</p>
                        <div className="flex items-center mt-0">
                            <span className="text-sm font-normal">
                                Mulai dari&nbsp;
                            </span>
                            <span className="text-red-500 font-bold">
                                IDR 3.650.000
                            </span>
                        </div>
                    </div>
                </div>

                {/* Destinasi Favorit 5 */}
                <div className="bg-white rounded-lg shadow-md p-4">
                    <img
                        src="Frame 152.png"
                        alt="Destination 5"
                        className="w-full object-cover rounded-t-lg"
                    />
                    <div className="mt-2">
                        <h1 className="text-sm font-medium">
                            Jakarta -&gt; Bangkok{" "}
                        </h1>
                        <p className="text-deep-purple-500 text-sm font-semibold">
                            AirAsia
                        </p>
                        <p className="text-xs font-medium">
                            20 - 30 Maret 2023
                        </p>
                        <div className="flex items-center mt-0">
                            <span className="text-sm font-normal">
                                Mulai dari&nbsp;
                            </span>
                            <span className="text-red-600 font-bold">
                                IDR 950.000
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationFavorite;
