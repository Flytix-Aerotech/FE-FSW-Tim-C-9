import React, { useState } from "react";

const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md"
        onClick={toggleModal}
      >
        tiket
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Pencarian</h2>
            <form>
              <input
                type="text"
                placeholder="Kata Kunci"
                className="w-full py-2 px-4 border border-gray-300 rounded-md mb-4"
              />
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md"
              >
                Cari
              </button>
            </form>
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={toggleModal}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchModal;
