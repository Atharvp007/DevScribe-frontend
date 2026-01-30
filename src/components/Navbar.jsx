import React from "react";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { FaMoon } from "react-icons/fa";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const user = false; // change to true when logged in

  return (
    <div className="py-2 fixed w-full dark:bg-gray-800 dark:border-b-gray-600 border-b-gray-300 border-b-2 bg-white z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-0">
        {/* LOGO SECTION */}
        <div className="flex gap-7 items-center">
          {/* LOGO */}
          <Link to="/">
            <div className="flex gap-2 items-center">
              <img
                src={Logo}
                alt="logo"
                className="w-7 h-7 md:w-10 md:h-10 dark:invert"
              />
              <h1 className="font-bold text-3xl md:text-4xl">DevScribe</h1>
            </div>
          </Link>

          {/* SEARCH BAR (Desktop only) */}
          <div className="relative hidden md:block">
            <Input
              type="text"
              placeholder="Search..."
              className="border border-gray-700 dark:border-gray-900 bg-gray-300 dark:bg-gray-900 
                  w-75 hidden md:block"
            />

            <Button className="absolute right-0 top-0 h-full px-4">
              <Search />
            </Button>
          </div>
        </div>

        {/* NAV LINKS */}
        <nav className="flex gap-4 items-center">
          <ul className="hidden md:flex gap-7 items-center text-xl font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          {/* RIGHT SIDE BUTTONS */}
          <div className="flex items-center gap-3 ml-4">
            {/* Dark Mode Button */}
            <button className="bg-black p-2 rounded-md cursor-pointer">
              <FaMoon className="text-white text-lg" />
            </button>

            {/* LOGIN / USER SECTION */}
            {user ? (
              <div>
                {/* User Profile Dropdown Later */}
                <p>User Profile</p>
              </div>
            ) : (
              <div className="ml-7 md:flex gap-2">
                <Link to="/login">
                  <Button>Login</Button>
                </Link>

                <Link className="hidden md:block" to="/signup">
                  <Button>Signup</Button>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
