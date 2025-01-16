import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md w-full">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="text-lg font-bold">
          <a href="/" className="hover:text-blue-300">
            petsCare
          </a>
        </div>

        {/* Menu Links for Desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="/about" className="text-sm hover:text-blue-300">
            About
          </a>
          <a href="/services" className="text-sm hover:text-blue-300">
            Services
          </a>
          <a href="/contact" className="text-sm hover:text-blue-300">
            Contact
          </a>
        </nav>

        {/* Login Button */}
        <div className="hidden md:block">
          <button className="bg-white text-blue-600 text-sm px-4 py-2 rounded hover:bg-blue-500 hover:text-white">
            Login
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-sm hover:text-blue-300">
            Home
          </Link>
          <Link to="/about" className="text-sm hover:text-blue-300">
            About
          </Link>
          <Link to="/services" className="text-sm hover:text-blue-300">
            Services
          </Link>
          <Link to="/contact" className="text-sm hover:text-blue-300">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
