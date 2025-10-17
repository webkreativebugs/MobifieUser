import { useState, Dispatch, SetStateAction } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { GoSidebarExpand } from "react-icons/go";
import { useauth } from "../../context/auth_context/AuthContext";
import LogOut from "../../utils/api/LogOut";
import { SidebarLink } from "../../data/Types/LInkType.interface";
import { MdOutlineScreenShare } from "react-icons/md";

interface SidebarProps {
  active: string;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  links: SidebarLink[];
}

const Sidebar = ({ setShow, active, show, links }: SidebarProps) => {
  const navigate = useNavigate();
  const { onRoleChange } = useauth();
  const [activeLinkName, setActiveLinkName] = useState(active);

  const handleClick = () => {
    LogOut();
    navigate("/login-with-password", { replace: true });
    onRoleChange("");
  };

  return (
    <div
      className={`hidden xl:flex h-screen z-50 bg-primary transition-all duration-300 ${
        show ? "w-1/6" : "w-[80px]"
      }`}
    >
      <div className="flex flex-col justify-between w-full h-full ">
        {/* ------------------ TOP SECTION ------------------ */}
        <div>
          {/* ---------- Logo ---------- */}
          <div className="flex items-center justify-center border-b-2 py-2.5">
            <Link
              to="/"
              className="flex items-center gap-2 text-xl text-[#7ed957] font-extrabold tracking-tight"
            >
              <img
                src="/assets/MobifieLogo.svg"
                alt="Mobifie Logo"
                className="w-[55px]"
              />
              {show && <span className="text-xl leading-none">Mobifie</span>}
            </Link>
          </div>

          {/* ---------- Links ---------- */}
          <div className="p-4 pt-5 space-y-1">
            {links.map((section) => (
              <div key={section.name}>
                {/* Main Link */}
                <NavLink
                  to={section.link}
                  onClick={() => setActiveLinkName(section.name)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2 rounded-lg text-md transition-all duration-200 ${
                      isActive || activeLinkName === section.name
                        ? "active-link"
                        : "normal-link hover:bg-[#ffffff22]"
                    }`
                  }
                >
                  <span className="theme-color text-lg min-w-[24px] flex justify-center">
                    <section.icon />
                  </span>
                  {show && (
                    <span className="capitalize text-lg">{section.name}</span>
                  )}
                </NavLink>

                {/* ---------- Sublinks ---------- */}
                {section.sublink && (
                  <div className="flex flex-col pl-6 mt-2 space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="theme-color text-lg min-w-[24px] flex justify-center">
                        <MdOutlineScreenShare />
                      </span>
                      {show && (
                        <span className="capitalize text-lg">
                          {section.sublink.title}
                        </span>
                      )}
                    </div>

                    {section.sublink.links.map((item) => (
                      <NavLink
                        to={item.link}
                        key={item.name}
                        onClick={() => setActiveLinkName(item.name)}
                        className={({ isActive }) =>
                          `flex items-center gap-3 py-1.5 px-3 rounded-md text-md transition-all duration-200  ${
                            !show && "ml-[-13px]"
                          } ${
                            isActive || activeLinkName === item.name
                              ? "active-link"
                              : "normal-link hover:bg-[#ffffff22]"
                          }`
                        }
                      >
                        <span className="theme-color text-base min-w-[24px] flex justify-center">
                          <item.icon />
                        </span>
                        {show && (
                          <span className="capitalize text-[16px]">
                            {item.name}
                          </span>
                        )}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ------------------ BOTTOM SECTION ------------------ */}
        <div className="  py-4">
          <button
            className="normal-link flex items-center gap-3 ml-5 mb-3 text-lg hover:bg-[#ffffff22] transition-all duration-200 py-2 px-3 rounded-md"
            onClick={handleClick}
          >
            <FiLogOut className="text-xl" />
            {show && "Logout"}
          </button>
          <button
            className="normal-link flex items-center gap-3 ml-5 text-lg hover:bg-[#ffffff22] transition-all duration-200 py-2 px-3 rounded-md"
            onClick={() => setShow(!show)}
          >
            <GoSidebarExpand style={{ fontSize: "20px" }} />
            {show && "Collapse"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
