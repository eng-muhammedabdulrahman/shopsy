import CheckoutProduct from "./CheckoutProduct";
import checkoutImg from "./assets/adsBanner.png";
import { useAuth } from "../context/GlobalState";

function Checkout() {
  const { user, basket } = useAuth();
  return (
    <div className="bg-gray-100">
      <main className="container mx-auto p-1">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <img
            className="w-full mb-2 object-contain"
            src={checkoutImg}
            alt="adsBanner"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {basket.lenght === 0
                ? "Your Shopsy Basket is empty."
                : "Shopping Basket"}
            </h1>

            {basket.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* Right */}
        <div></div>
      </main>
    </div>
  );
}

export default Checkout;
