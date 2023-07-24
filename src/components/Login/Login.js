import React, { useState } from "react";
import Logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../globals.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <div className="flex flex-col items-center h-screen bg-white">
      <Link to="/">
        <img
          className="mt-5 mb-1 object-contain w-40 mr-auto ml-auto"
          src={Logo}
          alt="logo-img"
        />
      </Link>
      <div className="w-96 h-fit flex flex-col rounded-md border border-solid border-gray-300 p-5">
        <h1 className="font-medium text-3xl mb-5">Sign in</h1>
        <form>
          <h5 className="mb-1 font-semibold">Email</h5>
          <input
            className="h-8 mb-2.5 bg-white w-full pl-1 border border-solid border-gray-500 outline-none"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5 className="mb-1 font-semibold">Password</h5>
          <input
            className="h-8 mb-2.5 bg-white w-full pl-1 border border-solid border-gray-500 outline-none"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-yellow-600 border border-solid mt-2.5 cursor-pointer w-full h-8 font-medium"
            type="submit"
          >
            Sign in
          </button>
          <p className="text-sm mt-4">
            By continuing, you agree to Shopsy Online Condition of Use and
            Privacy Notice.
          </p>
          <button
            className="rounded-sm w-full h-8 bg-gray-200 border border-solid border-gray-400 mt-2.5 cursor-pointer"
            onClick={register}
          >
            Create your Shopsy Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
