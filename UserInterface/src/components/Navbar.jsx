import { useState } from 'react';
import React from 'react';
import logo from '../assets/YouTube_Logo_2017.svg.png';
import logo2 from '../assets/images.jpg';
import { Link } from 'react-router-dom';

function Navbar({ openChange }) {
  const toggleSidebar = () => {
    console.log("Sidebar toggle triggered");
    openChange();
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      <nav className="fixed z-30 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              {/* Button to toggle sidebar */}
              <button
                onClick={toggleSidebar}
                className="fixed top-1 lg:top-2 left-3 z-40 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-100 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              <a className="flex ml-14 md:mr-24">
                <img src={logo} className="mr-2.5 h-6" alt="YouTube Logo" />
              </a>

              <form
                action="#"
                method=""
                className="hidden lg:block lg:pl-3.5"
                style={{ marginLeft: 300 }}
              >
                <label htmlFor="topbar-search" className="sr-only">
                  Search
                </label>
                <div className="relative mt-1 lg:w-96">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    style={{ height: 34 }}
                    name="search"
                    id="topbar-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>

            {/* Profile dropdown */}
            <div className="relative ml-auto lg:ml-4">
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                id="user-menu-button-2"
                aria-expanded={dropdownVisible}
                onClick={toggleDropdown}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src={logo2}
                  alt="User"
                />
              </button>
              {dropdownVisible && (
                <div className="absolute right-0 z-50 mt-2 w-48 text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg" id="dropdown-2">
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900" role="none">
                      Varshit Gupta
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate" role="none">
                       varshitgupta45@gmail.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <Link to={"/your_channel"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to={"/settings"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link to={"/login"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
