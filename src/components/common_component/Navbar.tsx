
import { MdWbSunny, MdNightlightRound } from 'react-icons/md';
import "../../styles/Navbar.css"
import { useauth } from '../../context/auth_context/AuthContext';
import { useNavigate } from 'react-router-dom';
import LogOut from '../../utils/api/LogOut';
type NavbarProps = {
  onThemeChange: (theme: string) => void;
  theme:string
};

const Navbar: React.FC<NavbarProps> = ({theme, onThemeChange }) => {
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
    <nav className="flex flex-wrap justify-between items-center p-4 bg-secondary shadow">
      <div className="text-lg font-semibold ">
         <button className='p-2 bg-secondary-inverse rounded secondary-color pl-3 pr-3 ' onClick={handleClick}>Logout</button>
      </div>
   
    </nav>
  );
};

export default Navbar;
