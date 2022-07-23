import { Link } from 'react-router-dom';
import { GoMarkGithub } from 'react-icons/go';
import { FcLandscape, FcNightLandscape } from 'react-icons/fc';
import { useState } from 'react';
import { useAuth } from '../firebase/AuthContext';
import { useAppContext } from '../context/context';
function Navbar() {
  const { isDarkMode, setIsDarkMode } = useAppContext();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className={isDarkMode ? 'dark' : undefined}>
      <nav className="dark:border-b dark:border-gray-400 px-4 lg:px-6 py-2.5 bg-cyan-400 bg-opacity-40 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to={'/'} className="flex gap-2 items-center">
            <GoMarkGithub className="text-white" size={25} />
            <span className="text-sm md:text-lg font-semibold text-white">
              Github Searcher
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            {isDarkMode ? (
              <FcNightLandscape
                onClick={() => setIsDarkMode(false)}
                className="hidden cursor-pointer lg:flex mx-5"
                size={30}
              />
            ) : (
              <FcLandscape
                onClick={() => setIsDarkMode(true)}
                className="hidden cursor-pointer lg:flex mx-5"
                size={30}
              />
            )}

            <button
              onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden focus:outline-none focus:ring-gray-200 dark:text-gray-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
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
          <div
            className={`${
              !isHamburgerOpen && 'hidden'
            } justify-between items-center w-full lg:py-2 lg:flex lg:w-auto lg:order-1`}
          >
            <ul className="flex flex-col mt-4 lg:items-center font-medium lg:flex-row text-center lg:space-x-16 lg:mt-0 space-y-2 lg:space-y-0">
              <li
                onClick={() => setIsDarkMode((prev) => !prev)}
                className="block py-2 pr-4 pl-3 text-white rounded dark:bg-black bg-blue-500 lg:bg-transparent lg:hidden lg:text-white lg:p-0 dark:text-white cursor-pointer select-none"
              >
                {isDarkMode ? 'Turn off dark mode' : 'Turn on dark mode'}
              </li>
              <li>
                <Link
                  to={'/'}
                  className="block py-2 pr-4 pl-3 text-white rounded lg:hover:text-gray-600 dark:lg:hover:text-gray-300 lg:transition-all bg-blue-700 lg:bg-transparent lg:p-0 dark:text-white cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={'/about'}
                  className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:hover:text-gray-600 dark:lg:hover:text-gray-300 lg:transition-all lg:bg-transparent lg:p-0 dark:text-white cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={'/contact'}
                  className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:hover:text-gray-600 dark:lg:hover:text-gray-300 lg:transition-all lg:bg-transparent lg:p-0 dark:text-white cursor-pointer"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to={'/signin'}
                  onClick={logout}
                  className="block py-2 pr-4 pl-3 text-white rounded bg-red-700 lg:p-0 lg:bg-red-600 lg:hover:bg-red-800 lg:transition-all lg:w-24 lg:h-8 lg:flex lg:items-center lg:justify-center dark:text-white cursor-pointer"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
