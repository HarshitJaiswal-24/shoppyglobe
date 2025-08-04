import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center bg-gray-50">
    <h1 className="text-6xl font-extrabold text-cyan-900 mb-4">404</h1>
    <h2 className="text-3xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
    <p className="text-gray-600 max-w-md">
      Oops! The page you're looking for doesn't exist, has been moved, or is temporarily unavailable.
    </p>
    <Link
      to="/"
      className="mt-6 inline-block bg-cyan-900 text-white px-6 py-2 rounded-md shadow hover:bg-orange-300 transition duration-200"
    >
      ⬅ Go Back Home
    </Link>
  </div>
);

export default NotFound;
