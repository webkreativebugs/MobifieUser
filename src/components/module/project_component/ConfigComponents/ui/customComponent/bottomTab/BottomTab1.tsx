import React from "react";
import { FaHome, FaHeart, FaUser, FaShoppingBag, FaBars } from "react-icons/fa";

export default function BottomTab1() {
  return (
    <nav className=" w-full bg-white border-t shadow-md">
      <div className="flex justify-around items-center py-2">
        {/* Home */}
        <button className="flex flex-col items-center text-gray-600 hover:text-red-600">
          <FaHome size={20} />
          <span className="text-xs">Home</span>
        </button>

        {/* Wishlist */}
        <button className="flex flex-col items-center text-gray-600 hover:text-red-600">
          <FaHeart size={20} />
          <span className="text-xs">Wishlist</span>
        </button>

        {/* Categories (Menu) */}
        <button className="flex flex-col items-center text-gray-600 hover:text-red-600">
          <FaBars size={20} />
          <span className="text-xs">Menu</span>
        </button>

        {/* Account */}
        <button className="flex flex-col items-center text-gray-600 hover:text-red-600">
          <FaUser size={20} />
          <span className="text-xs">Account</span>
        </button>

        {/* Cart */}
        <button className="flex flex-col items-center text-gray-600 hover:text-red-600">
          <FaShoppingBag size={20} />
          <span className="text-xs">Cart</span>
        </button>
      </div>
    </nav>
  );
}
