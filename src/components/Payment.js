import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/GlobalState";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "../context/AppReducer";
import CurrencyFormat from "react-currency-format";
import { CardElement } from "@stripe/react-stripe-js";

const Payment = () => {
  const { basket, user } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault ()
  }
  const handleChange = () => {

  };
  return (
    <div className="bg-white">
      <div className="payment-container">
        <h1 className="text-center font-normal text-2xl p-2.5 bg-gray-200 border border-solid border-gray-400">
          Checkout (<Link to="/checkout">{basket.length} items</Link>)
        </h1>
        {/* Delivery Address */}
        <div className="flex p-5 border border-solid border-gray-400">
          <div className="flex">
            <h3 className="font-bold text-lg">Delivery Address</h3>
          </div>
          <div className="flex flex-col text-base font-medium mx-10">
            <p>{user?.email}</p>
            <p>Cairo, Egypt</p>
          </div>
        </div>
        {/* Review Items */}
        <div className="flex p-5 border-solid border-gray-400">
          <div className="flex">
            <h3 className="font-bold text-lg">Review items and delivery</h3>
          </div>
          <div className="flex flex-col">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* Payment method */}
        <div className="flex p-5 border border-solid border-gray-400">
          <h3 className="flex font-bold text-lg text-left">Payment Method</h3>
          <div className="flex-col w-full">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <CurrencyFormat
                renderText={(value) => (
                  <h3 className="pt-5 font-bold text-lg">
                    Order Totle : {value}
                  </h3>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£ "}
              />
              <button type="submit" className=" my-4 w-full button">Buy Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
