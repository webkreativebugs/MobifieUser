import { useState } from "react";
import {  NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { ConfigDashboardLinks } from "../../../../../data/SidebarLinks"
// import { Dispatch,SetStateAction } from "react"

interface SidebarProps {
  active: string;
//   show:boolean;
//   setShow: Dispatch<SetStateAction<boolean>>
}

const CustomizeSidebar = ({ active, }: SidebarProps) => {
//   const navigate = useNavigate();
  const [activeLinkName, setActiveLinkName] = useState(active);
  // const [show,setShow] = useState(true)

  // const normalLink = 'flex items-center gap-3 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 hover:bg-gray-100 m-2';

  return (
   <>

    <div className={`hidden xl:flex h-full w-1/6`}>

      <div className="  xl:flex xl:flex-col overflow-auto hide-scrollbar  w-full  bg-primary pb-10 h-full shadow-xl    ">
       
        <div className="p-5 pt-0 w-full relative ">
          
          {ConfigDashboardLinks.map((section) => (
            <div key={section.name}>
              {/* <p className="text-color-secondary mt-4 uppercase">{section.title}</p> */}

              <NavLink
                to={section.link}
                key={section.name}
                onClick={() => setActiveLinkName(section.name)}
                className={` ${
                  activeLinkName === section.name
                    ? "active-link   "
                    : "normal-link"
                }`}
              >
                <span
                  className={` ${
                    activeLinkName === section.name
                      ? "theme-color"
                      : "theme-color"
                  }`}
                >
                  {" "}
                  <section.icon />
                </span>
             <span className="capitalize text-lg ">{section.name}</span>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      </div>
    
  
    </>
          
  );
};

export default CustomizeSidebar;
