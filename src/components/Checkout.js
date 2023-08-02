import React from "react";
import { useAuth } from "../context/GlobalState";
import checkoutImg from "./assets/adsBanner.png";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import "../styles/globals.css";

const Checkout = () => {
  const { user, basket } = useAuth();
  return (
    <div className="flex p-5 bg-gray-100 h-max">
      <div className="checkout-left">
        <img
          className="w-full h-36 mb-2.5 "
          src={checkoutImg}
          alt="adsBanner"
        />
        <div>
          <h3 className="text-lg font-bold "> Hello, {user?.email}</h3>
          <h2 className="ml-6 p-2.5 text-4xl font-bold">
            Your shopping Basket
          </h2>

          {basket.length > 0 ? (
            basket.map((item) => (
              <CheckoutProduct className="flex md:-mt-52 mx-auto flex-row"
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))
          ) : (
            <p className="m-5 text-lg font-semibold border border-solid bg-red-200 p-5 text-center">
              You have no items in your basket. To buy one or more items, click
              "Add to basket".
            </p>
          )}
        </div>
      </div>

      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
