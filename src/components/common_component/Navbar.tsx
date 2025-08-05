
// import { MdWbSunny, MdNightlightRound } from 'react-icons/md';
import "../../styles/Navbar.css"
import { useauth } from '../../context/auth_context/AuthContext';
import { useNavigate } from 'react-router-dom';
import LogOut from '../../utils/api/LogOut';

const Navbar = () => {
  const navigate = useNavigate()
  const {onRoleChange} = useauth()
// const [selectedValue, setSelectedValue] = useState(mode);
  // const [data , setData] = useState("light")
  // console.log(selectedValue);

 function handleClick()
 {
    LogOut()
    navigate("/login-with-password",{replace:true});
    onRoleChange("")
               
 }

  return (
    <nav className="flex p-2 justify-end items-center">
      <div className="text-sm font-semibold ">
         {/* <button className='p-1 bg-secondary-inverse rounded secondary-color pl-3 pr-3 ' onClick={handleClick}>Logout</button> */}
      </div>
   
    </nav>
  );
};

export default Navbar;
