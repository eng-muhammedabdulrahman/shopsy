import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useAuth } from "../context/GlobalState";
import Currency from "react-currency-formatter";
import primImg from "./assets/primeImage.png";
import "../styles/globals.css";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const { dispatch } = useAuth();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <img
        className="w-52 h-52 mx-auto"
        src={image}
        width={200}
        height={200}
        objectfit="contain"
        alt="Product-Img"
      />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="EGP" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src={primImg} alt="" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto button" onClick={addToBasket}>
        Add To Basket
      </button>
    </div>
  );
}

export default Product;
