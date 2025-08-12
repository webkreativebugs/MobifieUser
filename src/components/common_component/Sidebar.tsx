import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { MdOutlineCancel } from "react-icons/md";
// import { AdminDashboardLinks } from "../../data/SidebarLinks";
import { useNavigate } from "react-router-dom";
import { useauth } from "../../context/auth_context/AuthContext";
const logo = "../../../../public/assets/MobifieLogo.svg";
import LogOut from "../../utils/api/LogOut";
import { FiLogOut } from "react-icons/fi";
import { Dispatch, SetStateAction } from "react";
// import { GoSidebarCollapse } from "react-icons/go";
import { GoSidebarExpand } from "react-icons/go";
import { SidebarLink } from "../../data/Types/LInkType.interface";
import dropdownData from "../../data/CustomizeData/UiDropdown.json";
import { RiArrowDropDownLine } from "react-icons/ri";
interface SidebarProps {
  active: string;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  links: SidebarLink[];
}

const Sidebar = ({ setShow, active, show, links }: SidebarProps) => {
  const navigate = useNavigate();
  const { onRoleChange } = useauth();
  const[showDropdown,setShowDropdown]=useState(false)
  const [activeLinkName, setActiveLinkName] = useState(active);
  // const [show,setShow] = useState(true)
  function handleClick() {
    LogOut();
    navigate("/login-with-password", { replace: true });
    onRoleChange("");
  }
  // const normalLink = 'flex items-center gap-3 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 hover:bg-gray-100 m-2';

  return (
    <>
      <div className={`hidden xl:flex h-screen z-50   ${show ? "w-1/6" : ""}`}>
        <div className="  xl:flex xl:flex-col overflow-auto hide-scrollbar  w-full justify-between  bg-primary pb-10 h-full shadow-xl    ">
          <div className="  xl:flex xl:flex-col   ">
            <div className=" pl-5 border-b-2 flex justify-between items-center   ">
              <Link
                to="/"
                className="mt-4 flex  text-xl text-[#7ed957] font-extrabold tracking-tight"
              >
                <img src={logo} alt="Mobifie Logo" className="w-[60px] " />
                {show && <span className="mt-4 text-xl ">Mobifie</span>}
              </Link>
            </div>

            <div className="p-5 pt-0 w-full relative ">
              {links.map((section) => (
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
                    }  ${section.dropdown&&"items-start"} w-full` }
                  >
                    <span
                      className={` ${
                        activeLinkName === section.name
                          ? "theme-color text-3xl"
                          : "theme-color text-2xl font-light"
                      } `}
                    >
                      {" "}
                      <section.icon />
                    </span>
                    {show ? (
                      <div className="w-full">
                        <div className="capitalize text-lg flex items-center justify-between  ">
                          {section.name}
                          {section.dropdown &&<button className="text-2xl" onClick={()=>setShowDropdown(!showDropdown)} ><RiArrowDropDownLine/></button>}
                        </div>
                        {section.dropdown&&showDropdown && (
                          <div className="relative mt-1 ">
                            <ul className="">
                              {dropdownData.map((item, index) => (
                                <li
                                  key={index}
                                  className=" py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer transition-colors"
                                >
                                  {item.name}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ) : (
                      <span className="capitalize text-lg"></span>
                    )}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
          <div>
            <button className="normal-link mt-6 ml-6 " onClick={handleClick}>
              <FiLogOut />
              {show && "Logout"}
            </button>
            <button
              className="normal-link mt-6 ml-6 "
              onClick={() => setShow(!show)}
            >
              <GoSidebarExpand style={{ fontSize: "20px" }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
