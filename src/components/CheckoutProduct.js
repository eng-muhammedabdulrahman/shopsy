import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import primImg from "./assets/primeImage.png";
import { useAuth } from "../context/GlobalState";


function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  hasPrime,
}) {
  const { dispatch } = useAuth();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="grid grid-cols-5">
      <img src={image} width="200" height="200" objectfit="contain" alt="" />

      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p className="font-semibold">{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3 text-justify">{description}</p>
        <div className="font-semibold">
          <Currency quantity={price} currency="EGP" />
        </div>

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src={primImg}
              alt="PrimeImage"
            />
            <p className="text-xs text-gray-500">Free Next-day Delivery</p>
          </div>
        )}
      </div>

      {/* Right add/remove buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button " onClick={removeFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
