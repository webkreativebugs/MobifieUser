import React from "react";

export default function Header1({
  logoText,
  placeholder,
  leftIcons = [],
  rightIcons = [],
}: {
  logoText: string;
  placeholder: string;
  leftIcons: { name: string; svg: string }[];
  rightIcons: { name: string; svg: string }[];
}) {
  console.log(rightIcons);
  return (
    <header className="bg-white shadow p-2">
      {/* Top Row: Left Icons + Logo + Right Icons */}
      <div className="flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          {leftIcons.map((icon, i) => (
            <button
              key={i}
              className="w-6 h-6 text-gray-700"
              dangerouslySetInnerHTML={{ __html: icon.svg }}
            />
          ))}
          <span className="text-red-600 text-xl font-bold italic">
            {logoText}
          </span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5 text-gray-700">
          {rightIcons.map((icon, i) => (
            <button
              key={i}
              className="w-6 h-6 hover:text-red-600"
              dangerouslySetInnerHTML={{ __html: icon.svg }}
            />
          ))}
        </div>
      </div>

      {/* Search Bar */}
      {/* <div className="mt-3 flex items-center border rounded-lg px-3 py-2">
        <input
          type="text"
          placeholder={placeholder}
          className="flex-1 outline-none text-gray-700 placeholder-gray-400"
        />
      </div> */}
    </header>
  );
}
