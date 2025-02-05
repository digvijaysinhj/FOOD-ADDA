import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center mx-6 mt-4 p-4 mb-10 bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg rounded-lg">
      <div className="text-white text-center lg:text-left space-y-2">
        <h3 className="text-lg font-semibold">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-3xl font-extrabold">FOOD-ADDA</h1>
      </div>

      <div className="mt-4 lg:mt-0">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for food..."
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 w-full lg:w-80 rounded-full text-gray-300 bg-gray-800 border border-transparent focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300 ease-in-out shadow-md"
        />
      </div>
    </nav>
  );
};

export default Navbar;
