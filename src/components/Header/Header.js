import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo2.png";
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={Logo} alt="logo-img" />
      </Link>
      <div className="header-searsh">
        <input className="header-searshInput" type="text" />
        <img src={SearchIcon} alt="searsh-icon"/>
      </div>
    </div>
  );
};

export default Header;
