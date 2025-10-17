// import { MdWbSunny, MdNightlightRound } from 'react-icons/md';
import "../../styles/Navbar.css";
// import { useauth } from "../../context/auth_context/AuthContext";
// import { useorg } from ""
import { useorg } from "../../context/org_context/OrganizationContext";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { FiMenu } from "react-icons/fi";
// import { Dispatch,SetStateAction } from "react";
// import LogOut from "../../utils/api/LogOut";

const Navbar = () => {
  const { orgDetails } = useorg();
  // const navigate = useNavigate();
  // const { onRoleChange } = useauth();
  // const [selectedValue, setSelectedValue] = useState(mode);
  // const [data , setData] = useState("light")
  // console.log(selectedValue);

  return (
    <nav className="absolute top-0 left-0 w-full max-w-screen bg-primary border-b-2 z-40 p-6 flex items-center justify-end">
      {/* <Link to="/" className="flex">
        <img
          src="/assets/MobifieLogo.svg"
          alt="Mobifie Logo"
          className="w-[55px]"
        />
        <span className="">Mobifie</span>
      </Link> */}

      {orgDetails ? (
        <div className="text-xl primary-inverse font-semibold pl-2 ">
          {orgDetails.data.name}
        </div>
      ) : (
        <div className="h-7 primary-inverse font-semibold pl-2 "> </div>
      )}
    </nav>
  );
};

export default Navbar;
