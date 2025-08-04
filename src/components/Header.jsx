import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaGithub } from 'react-icons/fa';

const Header = () => {
  const totalItems = useSelector((state) => state.cart.items.length);

  return (
    <header className="bg-cyan-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold tracking-tight hover:text-orange-300 transition duration-200">
          🛍️ ShoppyGlobe
        </Link>

        <nav className="flex items-center gap-6 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-orange-300 transition duration-150"
          >
            Home
          </Link>
          <Link
            to="/cart"
            className="relative hover:text-orange-300 transition duration-150"
          >
            Cart
            <span className="ml-1 inline-block bg-white text-cyan-900 text-sm font-bold px-2 py-0.5 rounded-full shadow-sm">
              {totalItems}
            </span>
          </Link>

          {/* GitHub Button */}
          <a
            href="https://github.com/HarshitJaiswal-24/shoppyglobe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-cyan-900 px-3 py-1.5 rounded-full font-semibold text-sm hover:bg-orange-300 hover:text-white transition duration-200 shadow-sm"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
