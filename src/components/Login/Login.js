import React, { useState } from "react";
import Logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth , email , password);
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={Logo} alt="logo-img" />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input type="password" value={password}
          onChange={(e) => setPassword(e.target.value)}
           />
          <button className="login-signInBtn" type="submit">
            Sign in
          </button>
          <p>
            By continuing, you agree to Shopsy Online Condition of Use and
            Privacy Notice.
          </p>
          <button className="login-registerBtn" onClick={register}>
            Create your Shopsy Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
