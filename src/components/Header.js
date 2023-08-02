import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/logo2.png";
import { useAuth } from "../context/GlobalState";
import "../styles/globals.css";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { auth } from "./firebase";

const Header = () => {
  const { user, basket } = useAuth();
  const handleAuthentication = () => {
    auth.signOut();
  };
  return (
    <header className="sticky top-0 z-50">
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Link to="/">
            <img
              className="cursor-pointer"
              src={Logo}
              width="150"
              height="40"
              objectfit="contain"
              alt="logo-img"
            />
          </Link>
        </div>
        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-600  ">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            placeholder="Searsh.."
            type="text"
          />
          <SearchIcon className="flex items-center rounded-md px-4 py-2.5 text-xs font-medium h-12 p-4 ease-in-out hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg" />
        </div>
        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <Link to={!user && "/login"}>
            <div className="cursor-pointer" onClick={handleAuthentication}>
              <div className="hover:underline">
                Hello {user ? `${user.email}` : "Guest"}
              </div>
              <div className="font-extrabold md:text-sm">
                {user ? "Sign Out" : "Sign In"}
              </div>
            </div>
          </Link>
          <Link to="/orders">
            <div className="cursor-pointer">
              <div className="hover:underline">Returns</div>
              <div className="font-extrabold md:text-sm">& Orders</div>
            </div>
          </Link>

          <Link to="/Checkout">
            <div className="relative link flex items-center">
              <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                {basket?.length}
              </span>

              <ShoppingCartIcon className="h-10" />
              <p className="hidden md:inline font-extrabold md:text-sm mt-2">
                Basket
              </p>
            </div>
          </Link>
        </div>
      </div>
      {/* Bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <Link to="/Prime Video">
          <p className="link">Prime Video</p>
        </Link>
        <Link to="/Shopsy Business">
          <p className="link">Shopsy Business</p>
        </Link>
        <Link to="/Today's Deals">
          <p className="link">Today's Deals</p>
        </Link>
        <Link to="/Electronics">
          <p className="link hidden lg:inline-flex">Electronics</p>
        </Link>
        <Link to="/Food & Grocery">
          <p className="link hidden lg:inline-flex">Food & Grocery</p>
        </Link>
        <Link to="/Prime">
          <p className="link hidden lg:inline-flex">Prime</p>
        </Link>
        <Link to="/Buy Again">
          <p className="link hidden lg:inline-flex">Buy Again</p>
        </Link>
        <Link to="/Shopper Toolkit">
          <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        </Link>
        <Link to="/Health & Personal care">
          <p className="link hidden lg:inline-flex">Health & Personal care</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
