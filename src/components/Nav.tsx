import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function Nav() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const onClick = () => toast('Coming soon.', { hideProgressBar: true, autoClose: 300, position:'bottom-right'})


  useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          onClick={() => setTheme("light")}
          className="w-6 h-6 dark:hover:stroke-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          onClick={() => setTheme("dark")}
          className="w-6 h-6 hover:stroke-black"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      );
    }
  };
  return (
    <nav className="fixed items-center justify-between w-full pl-24 pr-24 mx-auto blur-nav text-purplish pt-9 pb-9">
      <div className="flex items-center justify-between ">
        <div className="flex contener ">
          <Link href="/" className="text-4xl transition duration-300 hover:text-black dark:hover:text-white font-Pridi filter">
            dm
          </Link>
        </div>
        <div>
          <div className="hidden space-x-16 font-head1kod md:flex">
            <Link
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              href="/about"
              className="transition duration-300 ease-in-out hover:text-black dark:hover:text-white "
            >
              About
            </Link>
            <Link
              href="/experience"
              className="transition duration-300 hover:text-black dark:hover:text-white"
            >
              Experience
            </Link>
            <Link
              href="" onClick={onClick}
              className="transition duration-300 hover:text-black dark:hover:text-white "
            >
              Gallery
            </Link>

            <div className="p-1 cursor-pointer">
              {renderThemeChanger()}

            </div>
          </div>

          <div className="block px-4 py-3 mx-2 opacity-100 md:hidden dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="justify-center p-2 mt-3 space-y-4 shadow shadow-current menu menu-compact dropdown-content bg-opacity-95 bg-slate-300 dark:bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  href="/about"
                  className="transition duration-800"
                >
                  About me
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="transition duration-300 "
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="" onClick={onClick}
                  className="transition duration-300 "
                >
                  Gallery
                </Link>
              </li>

              <Link href="" className="pl-4">
                {renderThemeChanger()}

              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
