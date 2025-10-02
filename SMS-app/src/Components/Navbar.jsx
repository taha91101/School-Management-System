import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context.jsx/AuthContext";
import { Sidebar } from "./Sidebar";
import { useState } from "react";

export const Navbar = () => {
  const { role } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left Section: Sidebar + Logo */}
          <div className="flex items-center space-x-3">
            <Sidebar />
            <Link
              to="/profile"
              className="text-lg font-semibold text-gray-800 hover:text-blue-600"
            >
              Profile
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className=" md:flex items-center space-x-6">
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600">
                Profile
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition">
                <button
                  className="block w-full px-4 py-2 text-red-600 hover:bg-red-50"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {/* Hamburger Icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="space-y-1 px-4 py-3">

            <button
              onClick={handleLogout}
              className="block w-full text-left text-red-600 hover:bg-red-50 rounded px-3 py-2"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
