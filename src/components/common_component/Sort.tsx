import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { TbArrowsSort } from "react-icons/tb";

export default function Sort() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Sort by");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const options = ["Date", "Priority", "Name", "Status"];

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left mt-6">
      {/* Dropdown Button */}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer px-6 py-2 bg-gray-100 text-black rounded-lg shadow-md  hover:bg-gray-200 transition"
      >
        <div className="flex items-center gap-2 font-bold text-gray-500">
          <TbArrowsSort />
          {selected}
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-10 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg"
        >
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
