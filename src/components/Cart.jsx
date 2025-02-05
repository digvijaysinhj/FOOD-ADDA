import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalItems = cartItems.reduce(
    (totalQty, item) => totalQty + item.qty,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();
  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] p-5 h-full bg-white 
         ${activeCart ? "translate-x-0" : "translate-x-full"}
       transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3 ">
          <span className="text-xl  text-gray-800 font-normal">My Order</span>

          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md cursor-pointer hover:text-red-300 hover:border-red-300"
          />
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((Food) => {
            return (
              <ItemCard
                key={Food.id}
                id={Food.id}
                name={Food.name}
                price={Food.price}
                img={Food.img}
                qty={Food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800">
            Your Cart is Empty
          </h2>
        )}

        <div className="absolute bottom-0 ">
          <h3 className="font-semibold tetx-gray-800">Items:{totalItems}</h3>
          <h3 className="font-semibold tetx-gray-800">
            Total Amount:{totalPrice}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button
            onClick={() => navigate("/success")}
            className="bg-green-500 font-bold px-3 py-2 w-full lg:w-[18vw] mb-5 text-white rounded-lg"
          >
            Checkout
          </button>
        </div>
      </div>{" "}
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${
          totalItems > 0 && "animate-bounce delay-500 transition-all"
        }`}
      />
    </>
  );
};

export default Cart;
