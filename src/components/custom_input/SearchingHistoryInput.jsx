import React from "react";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchingHistoryInput = ({ onClose, setSearchHistory }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchHistory(searchQuery);
  };

  const [recentSearches, setRecentSearches] = React.useState([]);

  const handleClearRecentSearches = () => {
    setRecentSearches([]);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg flex flex-col w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <form onSubmit={handleSubmit} className="flex">
            <div className="relative flex-1 mr-2">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <MagnifyingGlassIcon className="h-5 w-5" />
              </span>
              <input
                type="text"
                placeholder="Masukkan code"
                className="border border-gray-300 text-sm rounded-lg py-2 pl-10 pr-2 flex-1 w-52 sm:w-72 outline-none focus:border-purple-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
          <button type="button" onClick={onClose} className="text-black hover:text-gray-700 ml-1">
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          </button>
        </div>
        <hr className="my-4 mt-2  border-gray-400" />
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Pencarian Terkini</h3>
          <button className="text-red-500 font-semibold" onClick={handleClearRecentSearches}>
            Hapus
          </button>
        </div>
        {/* Tampilkan daftar pencarian terkini */}
        {recentSearches.map((search, index) => (
          <div key={index}>{search}</div>
        ))}
        <div>
          <div className="mt-4">
            {recentSearches.includes("ABC1234") && (
              <div className="flex justify-between items-center py-2">
                <span>ABC1234</span>
                <button className="text-red-500 hover:text-red-700" onClick={() => handleClearRecentSearches(recentSearches.indexOf("ABC1234"))}>
                  Hapus
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchingHistoryInput;
