import React, { useEffect } from 'react';
import { useState } from 'react';
import { MdWbSunny, MdNightlightRound } from 'react-icons/md';
import "../../styles/Navbar.css"
type NavbarProps = {
  onThemeChange: (theme: string) => void;
  theme:string
};

const Navbar: React.FC<NavbarProps> = ({theme, onThemeChange }) => {
  const mode = theme.split('-')[0];

// const [selectedValue, setSelectedValue] = useState(mode);
  // const [data , setData] = useState("light")
  // console.log(selectedValue);
  
  function handlechange(e: string)
  {
   onThemeChange(e)
  }


  return (
    <nav className="flex flex-wrap justify-between items-center p-4 bg-gray-100 shadow">
      <div className="text-lg font-semibold"></div>
      <div className="flex flex-wrap gap-2 mt-2 md:mt-0 morning">
 <div className="flex items-center gap-4 relative">
  <label htmlFor="light" className="flex items-center cursor-pointer ">
    <input
      type="radio"
      id="light"
      name="theme"
      value="light"
      checked={mode === "light"}
      onChange={() => handlechange(`light-${theme.split('-')[1]}`)}
      className={`hidden ${mode === "light"?"morning":""} `}
    />
    <MdWbSunny
      size={24}
      className={`transition-colors ${
        mode === "light" ? "text-yellow-500" : "text-gray-400"
      }`}
    />
  </label>

  <label htmlFor="dark" className="flex items-center cursor-pointer">
    <input
      type="radio"
      id="dark"
      name="theme"
      value="dark"
      checked={mode === "dark"}
       onChange={() => handlechange(`dark-${theme.split('-')[1]}`)}
      className={`hidden ${mode === "light"?"morning":""} `}
    />
    <MdNightlightRound
      size={24}
      className={`transition-colors ${
        mode === "dark" ? "text-purple-500" : "text-gray-400"
      }`}
    />
  </label>
</div>
      <div className='custom-theme-dropdown shadow-lg'>
        <button
          onClick={() => onThemeChange(`${mode}-red`)}
          className="px-3 py-1 my-1 rounded bg-red-500 text-white hover:bg-red-600 text-sm"
        >
           {mode}-red
        </button>
     
        <button
          onClick={() => onThemeChange(`${mode}-blue`)}
          className="px-3 py-1 my-1  rounded bg-blue-600 text-white hover:bg-blue-700 text-sm"
        >
         {mode}-blue
        </button>
        <button
          onClick={() => onThemeChange(`${mode}-orange`)}
          className="px-3 py-1 my-1  rounded bg-orange-500 text-white hover:bg-orange-600 text-sm"
        >
          {mode}-orange
        </button>
        <button
          onClick={() => onThemeChange(`${mode}-purple`)}
          className="px-3 py-1 my-1  rounded bg-purple-600 text-white hover:bg-purple-700 text-sm"
        >
          {mode}-purple
        </button>
         <button
          onClick={() => onThemeChange(`${mode}-green`)}
          className="px-3 py-1 my-1  rounded bg-green-600 text-white hover:bg-green-700 text-sm"
        >
          {mode}-green
        </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
