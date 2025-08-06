import  { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { AdminDashboardLinks } from '../../data/SidebarLinks';
import { useNavigate } from 'react-router-dom';
import { useauth } from '../../context/auth_context/AuthContext';
const logo ="../../../../public/assets/MobifieLogo.svg"
import LogOut from '../../utils/api/LogOut';
import { FiLogOut } from "react-icons/fi"

interface SidebarProps {
  active: string;
}

const Sidebar = ({ active }: SidebarProps) => {
    const navigate = useNavigate()
    const {onRoleChange} = useauth()
    const [activeLinkName, setActiveLinkName] = useState(active);
  // const [show,setShow] = useState(true)
 function handleClick()
 {
    LogOut()
    navigate("/login-with-password",{replace:true});
    onRoleChange("")
               
 }
  // const normalLink = 'flex items-center gap-3 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 hover:bg-gray-100 m-2';

  return (
    <div className='hidden xl:flex justify-center items-center h-screen ml-6  w-80'>
  

      <div className="  xl:flex xl:flex-col overflow-auto hide-scrollbar rounded-3xl w-full  bg-primary pb-10 h-[90vh] shadow-xl justify-center   ">
        {/* <div className="flex justify-between items-center  ">
          <Link to="/" className="mt-4 flex  text-xl text-[#7ed957] font-extrabold tracking-tight">
            <img src={logo} alt="Mobifie Logo" className="w-[60px] " />
            <span className="mt-4 text-xl">Mobifie</span>
          </Link>
          <button
            type="button"
            onClick={() => console.log('Menu toggle')} // replace with real toggle if needed
            className="text-xl rounded-full p-3 hover:bg-gray-100 mt-4 block md:hidden"
          >
            <MdOutlineCancel />
          </button>
        </div> */}

        <div className="p-5 mt-5 w-full ">
          {AdminDashboardLinks.map((section) => (
            <div key={section.name}>
              {/* <p className="text-color-secondary mt-4 uppercase">{section.title}</p> */}
            
                <NavLink
                  to={section.link} 
                
                  key={section.name}
                  onClick={() => setActiveLinkName(section.name)}
                  className={` ${activeLinkName === section.name ? "active-link   " : "normal-link" }`}
                >
                 <span   className={` ${activeLinkName === section.name ? "theme-inverse" : "theme-color" }`}> <section.icon /></span>
                  <span className="capitalize text-lg ">{section.name}</span>
                </NavLink>
            </div>
          ))}
        
       
        </div>
          <button className='normal-link mt-6 ml-6 ' onClick={handleClick}><FiLogOut/>Logout</button>
      </div>
      { /**************************Mobile Section***************************** */}
      <div>
       <div className="h-screen hidden overflow-auto hide-scrollbar  border-r-2 pb-10 w-2/12 shadow-md ">
        <div className="flex justify-between items-center">
          <Link to="/" className="mt-4 flex  text-xl text-[#7ed957] font-extrabold tracking-tight">
            <img src={logo} alt="Mobifie Logo" className="w-[80px] " />
            <span className="mt-4 text-2xl">Mobifie</span>
          </Link>
          <button
            type="button"
            onClick={() => console.log('Menu toggle')} // replace with real toggle if needed
            className="text-xl rounded-full p-3 hover:bg-gray-100 mt-4 block md:hidden"
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className="p-5 ">
          {AdminDashboardLinks.map((section) => (
            <div key={section.name}>
              {/* <p className="text-color-secondary mt-4 uppercase">{section.title}</p> */}
            
                <a
                  // to={`/${section.link}`} 
                  key={section.name}
                  onClick={() => {setActiveLinkName(section.name);navigate(`/${section.link}`,{replace:true})}}
                  className={`   ${activeLinkName === section.name ? "active-link " : "normal-link" }`}
                >
                  <section.icon />
                </a>
            </div>
          ))}
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Sidebar;
