
import { MdWbSunny, MdNightlightRound } from 'react-icons/md';
import "../../styles/Navbar.css"
import { useauth } from '../../context/auth_context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LogOut from '../../utils/api/LogOut';
type NavbarProps = {
  onThemeChange: (theme: string) => void;
  theme:string
};

const Navbar: React.FC<NavbarProps> = ({theme, onThemeChange }) => {
  const [mode,setMode] = useState(theme.split('-')[1]);
  const navigate = useNavigate()
  const {onRoleChange} = useauth()
// const [selectedValue, setSelectedValue] = useState(mode);
  // const [data , setData] = useState("light")
  // console.log(selectedValue);
  
  function handlechange(e: string)
  {
   onThemeChange(e)
  }
 function handleClick()
 {
    LogOut()
    navigate("/login-with-password",{replace:true});
    onRoleChange("")
               
 }

  return (
    <nav className="flex flex-wrap justify-between items-center p-4 bg-gray-100 shadow">
      <div className="text-lg font-semibold">
         <button onClick={handleClick}>Logout</button>
      </div>
      <div className="flex flex-wrap gap-2 mt-2 md:mt-0 morning">
       
 <div className="flex items-center gap-4 relative">
  {mode==="light"?
  <label htmlFor="light" className="flex items-center cursor-pointer ">
    <input
      type="radio"
      id="light"
      name="theme"
      value="light"
      checked={mode === "light"}
      onChange={() => handlechange(`${theme.split('-')[0]}-light`)}
      className={`hidden ${mode === "light"?"morning":""} `}
      onClick={()=>{setMode("dark");handlechange(`${theme.split('-')[0]}-light`)}}
    />
    <MdWbSunny
      size={24}
      className={`transition-colors ${
        mode === "light" ? "text-yellow-500" : "text-gray-400"
      }`}
    />
  </label>
:
  <label htmlFor="dark" className="flex items-center cursor-pointer">
    <input
      type="radio"
      id="dark"
      name="theme"
      value="dark"
      checked={mode === "dark"}
      onChange={() => handlechange(`${theme.split('-')[1]}-dark`)}
      className={`hidden ${mode === "light"?"morning":""} `}
      onClick={()=>{setMode("light");handlechange(`${theme.split('-')[0]}-dark`)}}
    />
    <MdNightlightRound
      size={24}
      className={`transition-colors ${
        mode === "dark" ? "text-purple-500" : "text-gray-400"
      }`}
    />
  </label>
}
</div>

      <div className='custom-theme-dropdown shadow-lg'>
        <button
          onClick={() => onThemeChange(`midnight-${mode}`)}
          className="px-3 py-1 my-1 rounded bg-gray-500 text-white hover:bg-gray-600 text-sm"
        >
           midnight-{mode}
        </button>
       <button
          onClick={() => onThemeChange(`sunny-${mode}`)}
          className="px-3 py-1 my-1 rounded bg-orange-500 text-white hover:bg-orange-600 text-sm"
        >
           sunny-{mode}
        </button>
      
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
