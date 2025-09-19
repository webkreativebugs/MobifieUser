import { TabLinks } from "./Types/LInkType.interface"
import {FiUser, FiSettings } from "react-icons/fi";
import { FaServer } from "react-icons/fa";
import { MdOutlineWeb, MdOutlinePerson } from "react-icons/md";
export const tablinks:TabLinks[] = [
 
  { name: "Api", link: "/project/api-config",Icon:FaServer },
  { name: "Client", link: "/project/client-config",Icon:MdOutlinePerson },
  { name: "You", link: "/project/you-config" ,Icon:FiUser},
  { name: "Web", link: "/project/weburl-config",Icon:MdOutlineWeb },
  { name: "Default " , link: "/project/default-config",Icon:FiSettings},
]
