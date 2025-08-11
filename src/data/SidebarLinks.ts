import { FaFolderOpen } from "react-icons/fa"
import { MdNotificationsActive } from "react-icons/md"
import { HiOutlineKey } from "react-icons/hi"
import { FiActivity } from "react-icons/fi"
import { FiSettings } from "react-icons/fi"
import { MdSupportAgent } from "react-icons/md"
import { FaMoneyBillWave } from "react-icons/fa"
import { FiHelpCircle } from "react-icons/fi"
import { FaCogs } from "react-icons/fa"; // App config (gears)
import { MdOutlineDesignServices } from "react-icons/md"; // UI config (design tools)
import { MdScreenShare } from "react-icons/md"; // Screen config (screen display)
import {DashboardTypeEnums} from "../../enum/DashboardLinks"
import { CustomizeDashboardTypeEnums } from "../../enum/DashboardLinks"

import type { SidebarLink } from '../data/Types/LInkType.interface';

export const AdminDashboardLinks: SidebarLink[] = [
  { name: DashboardTypeEnums.PROJECT, icon: FaFolderOpen ,link:'/projects'},
  { name: DashboardTypeEnums.ALERTS, icon: MdNotificationsActive,link:"/alerts" },
  { name: DashboardTypeEnums.ACTIVITY, icon: FiActivity,link:"/activity" },
  { name: DashboardTypeEnums.ACCESS, icon: HiOutlineKey,link:"/access-manager" },
  { name: DashboardTypeEnums.BILLING, icon: FaMoneyBillWave,link:"/billings" },
  { name: DashboardTypeEnums.SUPPORT, icon: MdSupportAgent ,link:"/support"},
  { name: DashboardTypeEnums.SETTINGS, icon: FiSettings,link:"/settings" },
  { name: DashboardTypeEnums.HELP, icon: FiHelpCircle,link:"/help" },
];

export const ConfigDashboardLinks :SidebarLink[] =[
  { name: CustomizeDashboardTypeEnums.APP, icon: FaCogs, link: "/app-config" },
  { name: CustomizeDashboardTypeEnums.UI, icon: MdOutlineDesignServices, link: "/ui-config" },
  { name: CustomizeDashboardTypeEnums.SCREEN, icon: MdScreenShare, link: "/screen-config" },
]