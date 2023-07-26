import { React, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import { auth } from "./components/firebase";
import { useAuth } from "./context/GlobalState";
import Banner from "./components/Banner";
import axios from "axios";
import "./components/globals.css";
import ProductFeed from "./components/ProductFeed";

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const { dispatch } = useAuth();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app bg-slate-300">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <main className="max-w-screen-2xl mx-auto">
                {/* Banner */}
                <Banner />
                {/* ProductFeed */}
                <ProductFeed products={products} />
              </main>
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <p className="text-3xl font-extrabold p-5 ">Page Not Found</p>
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
