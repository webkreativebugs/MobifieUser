import React, { useEffect } from 'react';
import { useState } from 'react';
type NavbarProps = {
  onThemeChange: (theme: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ onThemeChange }) => {
   const [
        selectedValue,
        setSelectedValue,
    ] = useState("light");
  // const [data , setData] = useState("light")
  function handlechange(e: string)
  {
   setSelectedValue(e)
  }

  useEffect(()=>{
    onThemeChange(selectedValue)
  },[selectedValue])
  return (
    <nav className="flex flex-wrap justify-between items-center p-4 bg-gray-100 shadow">
      <div className="text-lg font-semibold">🌙 Theme Switcher</div>
      <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
        <div className='flex '>
          <input type="radio" id="light" name="Light" value={selectedValue} checked={ selectedValue ==="light"  } onChange={()=>handlechange("light")}/>
          <label htmlFor="html">Light</label><br/>
          <input type="radio" id="dark" name="Dark" value={selectedValue} checked={ selectedValue ==="dark"  } onChange={()=>handlechange("dark")}/>
          <label htmlFor="css">Dark</label><br/>

        </div>
      
        <button
          onClick={() => onThemeChange(`${selectedValue}-red`)}
          className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 text-sm"
        >
           Red
        </button>
     
        <button
          onClick={() => onThemeChange(`${selectedValue}-blue`)}
          className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm"
        >
          Blue
        </button>
        <button
          onClick={() => onThemeChange(`${selectedValue}-orange`)}
          className="px-3 py-1 rounded bg-orange-500 text-white hover:bg-orange-600 text-sm"
        >
          Orange
        </button>
        <button
          onClick={() => onThemeChange(`${selectedValue}-purple`)}
          className="px-3 py-1 rounded bg-purple-600 text-white hover:bg-purple-700 text-sm"
        >
          Purple
        </button>
         <button
          onClick={() => onThemeChange(`${selectedValue}-green`)}
          className="px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700 text-sm"
        >
          Green
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
