import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 dark:bg-gray-800">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200">404</h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Oops! Page not found.</p>
      <p className="mt-2 text-gray-500 dark:text-gray-300">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="mt-6 px-4 py-2 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md transition duration-300 ease-in-out">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
