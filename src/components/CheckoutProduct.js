import React from "react";
import Currency from "react-currency-formatter";
import { StarIcon } from "@heroicons/react/solid";
import { useAuth } from "../context/GlobalState";

const CheckoutProduct = ({ id, image, title, price, rating, hiddenButton }) => {
  const { dispatch } = useAuth();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="flex  py-3 my-5 bg-white">
      <img className=" object-contain w-44 h-44 " src={image} alt="" />
      <div className="pl-5">
        <p className="my-3">{title}</p>
        <div className="mb-5">
          <Currency quantity={price} currency="EGP" />
        </div>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        {!hiddenButton && (
          <button className="button" onClick={removeFromBasket}>
            Remove from Basket
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
