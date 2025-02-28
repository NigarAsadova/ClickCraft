import { useState } from "react";
import { NavLink } from "react-router-dom";
import menuIcon from "../../assets/icons/menu-icon.svg";
import logo from "../../assets/icons/main-logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="flex items-center justify-between p-4">
        <ul className="hidden md:flex text-[#77798F] font-normal text-2xl leading-[28.13px] gap-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#865BFF] transition-all duration-300" : "hover:text-[#865BFF] transition-all duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Portfolios"
              className={({ isActive }) =>
                isActive ? "text-[#865BFF] transition-all duration-300" : "hover:text-[#865BFF] transition-all duration-300"
              }
            >
              Portfolios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Community"
              className={({ isActive }) =>
                isActive ? "text-[#865BFF] transition-all duration-300" : "hover:text-[#865BFF] transition-all duration-300"
              }
            >
              Community
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive ? "text-[#865BFF] transition-all duration-300" : "hover:text-[#865BFF] transition-all duration-300"
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <img src={menuIcon} alt="menu icon" className="w-6 h-6" />
        </button>
      </div>
      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-custom-blue-gradient
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <div className="flex items-center justify-between mb-4">
          <h5
            id="drawer-navigation-label"
            className="text-base font-semibold text-gray-500 uppercase dark:text-black"
          >
            Menu
          </h5>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        {/* Mobile Navigation Links */}
        <ul className="flex flex-col gap-4 text-black font-normal text-xl">
          <li>
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-[#865BFF] transition-all duration-300" : "hover:text-[#865BFF] transition-all duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Portfolios"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-[#865BFF] transition-all duration-300" : "hover:text-[#865BFF] transition-all duration-300"
              }
            >
              Portfolios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Community"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-[#865BFF] transition-all duration-300" : "hover:text-[#865BFF] transition-all duration-300"
              }
            >
              Community
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-[#865BFF] transition-all duration-300" : "hover:text-[#865BFF] transition-all duration-300"
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
