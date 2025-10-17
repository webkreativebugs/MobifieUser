// import { FaFolderOpen } from "react-icons/fa"
// import { MdNotificationsActive } from "react-icons/md"
import { HiOutlineKey } from "react-icons/hi"
import { FiActivity } from "react-icons/fi"
import { FiSettings } from "react-icons/fi"
// import { MdSupportAgent } from "react-icons/md"
// import { FaMoneyBillWave } from "react-icons/fa"
import { FiHelpCircle } from "react-icons/fi"
import { FaCogs } from "react-icons/fa"; // App config (gears)
import { GoBell } from "react-icons/go";
import { TfiReceipt } from "react-icons/tfi";
import { HiOutlineSupport } from "react-icons/hi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaRegFolderOpen } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md"; // UI config (design tools)
// import { MdScreenShare } from "react-icons/md"; 
import {DashboardTypeEnums} from "../../enum/DashboardLinks"
import { CustomizeDashboardTypeEnums } from "../../enum/DashboardLinks"

import type { SidebarLink } from '../data/Types/LInkType.interface';

export const AdminDashboardLinks: SidebarLink[] = [
  { name: DashboardTypeEnums.PROJECT, icon: FaRegFolderOpen ,link:'/project',dropdown:false},
  { name: DashboardTypeEnums.ALERTS, icon: GoBell,link:"/alerts",dropdown:false },
  { name: DashboardTypeEnums.ACTIVITY, icon: FiActivity,link:"/activity",dropdown:false },
  { name: DashboardTypeEnums.ACCESS, icon: HiOutlineKey,link:"/access-manager",dropdown:false },
  { name: DashboardTypeEnums.BILLING, icon: TfiReceipt,link:"/billings",dropdown:false },
  { name: DashboardTypeEnums.BUILDS, icon: TfiReceipt,link:"/builds",dropdown:false },
  { name: DashboardTypeEnums.SUPPORT, icon: HiOutlineSupport ,link:"/support",dropdown:false},
  { name: DashboardTypeEnums.SETTINGS, icon: FiSettings,link:"/settings",dropdown:false },
  { name: DashboardTypeEnums.HELP, icon: FiHelpCircle,link:"/help" ,dropdown:false},
];

export const ConfigDashboardLinks :SidebarLink[] =[
  { name: CustomizeDashboardTypeEnums.DASHBOARD, icon: MdOutlineSpaceDashboard, link: "/project/dashboard",dropdown:false ,
    sublink:{ title:"Configuration", links:[{ name: CustomizeDashboardTypeEnums.APP, icon: FaCogs, link: "/project/api-config",dropdown:false },
  { name: CustomizeDashboardTypeEnums.SCREEN , icon: MdOutlineDesignServices, link: "/project/ui-config",dropdown:true },]} },
  // { name: CustomizeDashboardTypeEnums.APP, icon: FaCogs, link: "/project/api-config",dropdown:false },
  // { name: CustomizeDashboardTypeEnums.SCREEN , icon: MdOutlineDesignServices, link: "/project/ui-config",dropdown:true },
  // { name: CustomizeDashboardTypeEnums.SCREEN, icon: MdScreenShare, link: "/project/screen-config",dropdown:false },
]