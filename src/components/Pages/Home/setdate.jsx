import React, { useState } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

const FlightDateSelection = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleOpenModal}
            >
                Select Flight Date
            </button>

            {showModal && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-lg">
                        <div className="flex items-center mb-4">
                            <CalendarIcon className="h-6 w-6 mr-2" />
                            <h2 className="text-lg font-bold">Select Date</h2>
                        </div>

                        <div className="flex justify-center">
                            {/* Datepicker Component */}
                            {/* Replace this with an actual datepicker component */}
                            <input
                                type="date"
                                className="border border-gray-300 rounded-lg p-2"
                            />
                        </div>

                        <div className="fixed inset-0 flex items-center justify-center">
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <div className="flex justify-end">
                                    <XMarkIcon
                                        className="h-6 w-6 text-gray-500 hover:text-gray-800 cursor-pointer"
                                        onClick={handleCloseModal}
                                    />
                                </div>
                                {/* Tampilan Kalender */}
                                {/* ... */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FlightDateSelection;
