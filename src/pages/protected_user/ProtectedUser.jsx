import React from "react";
import { Link } from "react-router-dom";

const ProtectedUser = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-300 to-blue-200">
      <div className="flex flex-col justify-center items-center bg-white shadow overflow-hidden sm:rounded-lg p-10">
        <h1 class="text-9xl font-bold text-purple-400">404</h1>
        <h1 class="text-3xl md:text-6xl font-medium text-center py-8">Oops! Unable to access user</h1>
        <p class="text-lg md:text-2xl px-12 font-medium text-center">Sorry, an error has occured, Unable to access user!</p>
        <div className="mt-4">
          <Link
            to="/login"
            className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6"
          >
            You must be logged in!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProtectedUser;
