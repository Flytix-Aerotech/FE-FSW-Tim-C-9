import React from "react";
import { Link } from "react-router-dom";

const ProtectedUser = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-300 to-blue-200">
      <div className="flex flex-col items-center justify-center p-10 overflow-hidden bg-white shadow sm:rounded-lg">
        <h1 class="text-9xl font-bold text-purple-400">404</h1>
        <h1 class="text-3xl md:text-6xl font-medium text-center py-8">Oops! Unable to access user</h1>
        <p class="text-lg md:text-2xl px-12 font-medium text-center">Sorry, an error has occured, Unable to access user!</p>
        <div className="mt-4">
          <Link
            to="/login"
            className="px-6 py-3 mr-6 font-semibold text-white rounded-md bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500"
          >
            You must be logged in!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProtectedUser;
