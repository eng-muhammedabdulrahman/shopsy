import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo2.png";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={Logo} alt="logo-img" />
      </Link>
      <div className="header-searsh">
        <input className="header-searshInput" placeholder="Searsh.." type="text" />
        <button className="header-searchIcon" type="submit">
        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="header-nav">
        <Link to="/login">
          <div className="header-option">
            <div className="header-optionLineOne">Hello Guest</div>
            <div className="header-optionLineTwo">Sign In</div>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header-option">
            <div className="header-optionLineOne">Returns</div>
            <div className="header-optionLineTwo">& Orders</div>
          </div>
        </Link>
        <div className="header-option">
          <div className="header-optionLineOne">Your</div>
          <div className="header-optionLineTwo">Prime</div>
        </div>
        <Link to="/checkout">
          <div className="header-optionBasket">
            <Link to="/basket">
            <i class="fa-sharp fa-solid fa-basket-shopping" style={{color:"white"}}></i>
            </Link>
            <span className="header-optionLineTwo header-basketCount">
            6
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
