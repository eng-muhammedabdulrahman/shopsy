import React from "react";
import Logo from "./assets/logo2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className=" text-white h-10 text-center pt-2 hover:cursor-pointer bg-slate-700 active:bg-slate-600">
        <button>Back To Top</button>
      </div>
      <div className="hidden lg:flex w-full m-auto space-x-20 pl-64 h-72 pt-10 bg-amazon_blue-light">
        <div className="table-cell bg-amazon_blue-light">
          <div className="text-white items-center font-bold text-xl">
            Get to Know Us
          </div>
          <ul className="flex flex-col text-sm pt-2 text-white">
            <li className="link pb-1">About Shopsy</li>
            <li className="link pb-1">Careers</li>
            <li className="link pb-1">Shopsy Science</li>
          </ul>
        </div>
        <div className="table-cell items-center bg-amazon_blue-light">
          <div className="text-white font-bold text-xl">Shop with Us</div>
          <ul className="flex flex-col text-sm pt-2 text-white">
            <li className="link pb-1">Your Account</li>
            <li className="link pb-1">Your Orders</li>
            <li className="link pb-1">Your Addresses</li>
            <li className="link pb-1">Your Lists</li>
          </ul>
        </div>
        <div className="table-cell items-center bg-amazon_blue-light">
          <div className="text-white font-bold text-xl">Make Money with Us</div>
          <ul className="flex flex-col text-sm pt-2 text-white">
            <li className="link pb-1">Protect and build your brand</li>
            <li className="link pb-1">Advertise Your Products</li>
            <li className="link pb-1">Sell on Shopsy</li>
            <li className="link pb-1">Fulfillment by Shopsy</li>
          </ul>
        </div>
        <div className="table-cell items-center bg-amazon_blue-light">
          <div className="text-white font-bold text-xl">Let Us Help You</div>
          <ul className="flex flex-col text-sm pt-2 text-white">
            <li className="link pb-1">Help</li>
            <li className="link pb-1">Shipping & Delivery</li>
            <li className="link pb-1">Returns & Replacements</li>
          </ul>
        </div>
      </div>
      <div className="bg-amazon_blue-light border-t border-l-slate-100">
      <div className="w-full h-20 py-0 bg-amazon_blue-light">
      <Link to="/">
        <img
          className="mt-5 mb-1 object-contain w-40 mr-auto ml-auto"
          src={Logo}
          alt="logo-img"
        />
      </Link>
      </div>
      </div>
      <div className="bg-amazon_blue h-12 text-white text-center pt-3">
        <p>
          Created By @ <span>Muhammed Abdulrahman</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
