import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo2.png";
import "../globals.css";

import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
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
              objectFit="contain"
              alt="logo-img"
            />
          </Link>
        </div>
        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            placeholder="Searsh.."
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <Link to="/login">
            <div className="cursor-pointer">
              <div className="hover:underline">Hello Guest</div>
              <div className="font-extrabold md:text-sm">Sign In</div>
            </div>
          </Link>
          <Link to="/orders">
            <div className="header-option">
              <div className="hover:underline">Returns</div>
              <div className="font-extrabold md:text-sm">& Orders</div>
            </div>
          </Link>

          <Link to="/basket">
            <div className="relative link flex items-center">
              <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                0
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
        <p className="link">Prime Video</p>
        <p className="link">Shopsy Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal care</p>
      </div>
    </header>
  );
};

export default Header;
