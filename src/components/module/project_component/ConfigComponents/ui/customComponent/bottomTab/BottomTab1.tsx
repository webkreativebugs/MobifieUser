import { useState } from "react";
import {
  FaHome,
  FaShoppingCart,
  FaShoppingBag,
  FaHeart,
  FaUser,
} from "react-icons/fa";

export default function BottomTab1() {
  const [active, setActive] = useState("Home");

  const navItems = [
    { name: "Home", icon: <FaHome size={22} /> },
    { name: "Shop", icon: <FaShoppingCart size={22} /> },
    { name: "Bag", icon: <FaShoppingBag size={22} /> },
    { name: "Favorites", icon: <FaHeart size={22} /> },
    { name: "Profile", icon: <FaUser size={22} /> },
  ];

  return (
    <div className=" w-full flex justify-around z-50 m border-t p-2 mb-0 absolute bottom-0 left-0 bg-secondary">
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => setActive(item.name)}
          className={`flex flex-col items-center text-sm  ${
            active === item.name ? "text-red-500 font-semibold" : "text-color"
          }`}
        >
          <div
            className={`${
              active === item.name ? "text-red-500" : "text-color"
            }`}
          >
            {item.icon}
          </div>
          <span>{item.name}</span>
        </button>
      ))}
    </div>
  );
}
