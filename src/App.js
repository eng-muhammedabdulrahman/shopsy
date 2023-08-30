import { React, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { auth } from "./components/firebase";
import { useAuth } from "./context/GlobalState";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
import Header from "./components/Header";
import Login from "./components/Login";
import Banner from "./components/Banner";
import ProductFeed from "./components/ProductFeed";
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
// import Payment from "./components/Payment";
import Orders from "./components/Orders";
import axios from "axios";
import "./styles/globals.css";

const App = () => {
  // Get api using axios
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

  // Authentication
  const { dispatch } = useAuth();
  // const stripePromise = loadStripe(
  //   "pk_test_51NaQcHDPyXs5r3q1CqlZoPgTLdn1UVFCwsowawbY5dRyZYaR3SZPgyeaJuSjz3S9yZE3mLbf9LxrY5ntHDHiV2un00oVOPjQOT"
  // );
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
      <ErrorBoundary>
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
                <Footer />
              </>
            }
          />

          <Route
            path="*"
            element={
              <>
                <p className="text-4xl font-extrabold p-5 bg-amazon_blue-light text-white w-full h-screen text-center">
                  Page Not Found
                </p>
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          {/* <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </>
            }
          /> */}
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};

export default App;
