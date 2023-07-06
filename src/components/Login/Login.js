import React from "react";
import Logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={Logo} alt="logo-img" />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input type="email" value="" />
          <h5>Password</h5>
          <input type="password" value="" />
          <button className="login-signInBtn" type="submit">
            Sign in
          </button>
          <p>
            By continuing, you agree to Shopsy Online Condition of Use and
            Privacy Notice.
          </p>
          <button className="login-registerBtn">
            Create your Shopsy Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
