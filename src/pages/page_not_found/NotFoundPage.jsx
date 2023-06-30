import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-300 to-blue-200">
        <div className="flex flex-col justify-center items-center bg-white shadow overflow-hidden sm:rounded-lg p-10">
          <h1 className="text-9xl font-bold text-purple-400">404</h1>
          <h1 className="text-6xl font-medium py-8">Oops! Page not found</h1>
          <p className="text-2xl px-12 font-medium">The page you are looking for does not exist.</p>
          <p className="text-2xl pb-8 px-12 font-medium"> It might have been moved or deleted.</p>
          <div className="mt-4">
            <Link
              to="/"
              className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ErrorPage;
