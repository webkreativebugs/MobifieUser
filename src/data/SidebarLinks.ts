import { FiShoppingBag, FiEdit } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineCalendar } from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';
import { BsKanban } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
// import { GiLouvrePyramid } from 'react-icons/gi';
// import { LuCircleHelp } from "react-icons/lu";
import { FaFolderOpen } from "react-icons/fa"
import { MdNotificationsActive } from "react-icons/md"
import { HiOutlineKey } from "react-icons/hi"
import { FiActivity } from "react-icons/fi"
import { FiSettings } from "react-icons/fi"
import { MdSupportAgent } from "react-icons/md"
import { FaMoneyBillWave } from "react-icons/fa"
import { FiHelpCircle } from "react-icons/fi"
import {DashboardTypeEnums} from "../../enum/DashboardLinks"

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

  
  
  // { name: 'line', icon: AiOutlineStock },
  // { name: 'area', icon: AiOutlineAreaChart },
  // { name: 'bar', icon: AiOutlineBarChart },
  // { name: 'pie', icon: FiPieChart },
  // { name: 'financial', icon: RiStockLine },
  // { name: 'color-mapping', icon: BsBarChart },
  // { name: 'pyramid', icon: GiLouvrePyramid },
  // { name: 'stacked', icon: AiOutlineBarChart },
];

export const DeveloperDashboardLinks: SidebarLink[] = [
  { name: 'Projects', icon: FiShoppingBag ,link:'/projects'},
  { name: 'Alerts', icon: AiOutlineShoppingCart,link:"/alerts" },
  { name: 'Activity Feed', icon: IoMdContacts,link:"active-feed" },
  { name: 'Settings', icon: RiContactsLine,link:"/settings" },
  { name: 'Help', icon: AiOutlineCalendar,link:"/help" },
  { name: 'Access Manager', icon: BsKanban,link:"/access-manager" },
  { name: 'Billing', icon: FiEdit,link:"/billings" },
  { name: 'Support', icon: BiColorFill ,link:"/support"},
];

export const AccountsDashboardLinks: SidebarLink[] = [
  { name: 'Projects', icon: FiShoppingBag ,link:'/projects'},
  { name: 'Alerts', icon: AiOutlineShoppingCart,link:"/alerts" },
  { name: 'Activity Feed', icon: IoMdContacts,link:"active-feed" },
  { name: 'Settings', icon: RiContactsLine,link:"/settings" },
  { name: 'Help', icon: AiOutlineCalendar,link:"/help" },
  { name: 'Access Manager', icon: BsKanban,link:"/access-manager" },
  { name: 'Billing', icon: FiEdit,link:"/billings" },
  { name: 'Support', icon: BiColorFill ,link:"/support"},
];
