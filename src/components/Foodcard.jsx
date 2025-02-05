import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/CartSlice";

const Foodcard = ({ name, img, desc, id, rating, price, handleToast }) => {
  const disptach = useDispatch();
  return (
    <div className="font-sans max-w-[250px] bg-white shadow-lg rounded-lg overflow-hidden  ">
      <img
        src={img}
        alt="Onion Pizza"
        className="w-full cursor-grab h-[200px] object-cover rounded-t-lg hover:scale-105 transition-all duration-300 ease-in-out transform"
      />
      <div className="px-4 py-3">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <span className="text-green-600 font-semibold">₹{price}</span>
        </div>
        <p className="text-sm text-gray-600 mt-2">{desc.slice(0, 42)}....</p>
        <div className="flex justify-between items-center mt-3">
          <span className="flex items-center text-yellow-400">
            <AiFillStar className="mr-1" />
            {rating}
          </span>
          <button
            onClick={() => {
              disptach(addToCart({ id, name, img, rating, price, qty: 1 }));
              handleToast(name);
            }}
            className="px-4 py-2 text-sm text-white bg-green-500 hover:bg-green-600 rounded-full shadow-md transition-all duration-200 ease-in-out focus:outline-none"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Foodcard;
