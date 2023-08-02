import React from "react";
import CurrencyFormat from "react-currency-format";
import { useAuth } from "../context/GlobalState";
import { getBasketTotal } from "../context/AppReducer";
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
  const { basket } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="felx flex-col md:grid-flow-row justify-between w-72 h-36 p-5 ml-5 bg-gray-100 border border-solid border-gray-300 rounded">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"£ "}
      />
      <button
        className="mx-10 my-4 button"
        onClick={() => navigate("/payment")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
