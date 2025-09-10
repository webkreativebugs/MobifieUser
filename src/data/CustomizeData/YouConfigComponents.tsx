import { YouConfigType} from "../../../enum/YouConfig.enum"
import { FaRegUser } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { BsTruck } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
// import { MdKeyboardArrowRight, MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
// import { CiCircleChevRight, CiCircleChevUp, CiCircleChevDown } from "react-icons/ci";
// import { CiSquareChevRight,  CiSquareChevUp, CiSquareChevDown } from "react-icons/ci";
// import { FaCaretRight, FaCaretUp, FaCaretDown } from "react-icons/fa";


export const YouConfigDefaultValue = {

  [YouConfigType.PROFILE]: {
    key: YouConfigType.PROFILE,
    icon:FaRegUser,
    text:"Profile",
    subtext:"Add your personal details"
  },
  [YouConfigType.ORDER]: {
    key: YouConfigType.ORDER,
    icon:FiBox,
    text:"Orders",
    subtext:"Check your order status"
  },
  [YouConfigType.ADDRESS]: {
    key: YouConfigType.ADDRESS,
    icon:BsTruck,
    text:"Addresse",
    subtext:"Save addresses for hassle-free checkout"
  },
  [YouConfigType.SETTING]: {
    key: YouConfigType.SETTING,
    icon:IoSettingsOutline,
    text:"Setting",
    subtext:"Manage your account"
  },

};


