import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { FaMoon, FaSun } from "react-icons/fa";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import Logo from "../assets/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import { toast } from "sonner";
import axios from "axios";
import { setUser } from "../redux/authSlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const { theme } = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async (e) => {
    try {
      const res = await axios.get(`http://localhost:8000/api/v1/user/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/");
        dispatch(setUser(null));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
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
            <Button onClick={() => dispatch(toggleTheme())} className="">
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </Button>

            {/* LOGIN / USER SECTION */}
            {user ? (
              <div className="ml-7 flex gap-3 items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-40" align="start">
                    <DropdownMenuGroup>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuItem>
                        Profile
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Billing
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          Invite users
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            <DropdownMenuItem>Email</DropdownMenuItem>
                            <DropdownMenuItem>Message</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>More...</DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                      <DropdownMenuItem>
                        New Team
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>GitHub</DropdownMenuItem>
                      <DropdownMenuItem>Support</DropdownMenuItem>
                      <DropdownMenuItem disabled>API</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        Log out
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link to="/login">
                  <Button className="hidden md:block" onClick={logoutHandler}>
                    Logout
                  </Button>
                </Link>
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
