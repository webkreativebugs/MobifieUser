import React from 'react';
import { FiShoppingBag, FiEdit, FiPieChart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineCalendar, AiOutlineStock, AiOutlineAreaChart, AiOutlineBarChart } from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { BsKanban, BsBarChart } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { GiLouvrePyramid } from 'react-icons/gi';
import { LuCircleHelp } from "react-icons/lu";

import type { SidebarLink } from '../data/Types/LInkType.interface';

export const AdminDashboardLinks: SidebarLink[] = [
  { name: 'Projects', icon: FiShoppingBag ,link:'/projects'},
  { name: 'Alerts', icon: AiOutlineShoppingCart,link:"/alerts" },
  { name: 'Access Manager', icon: BsKanban,link:"/access-manager" },
  { name: 'Billing', icon: FiEdit,link:"/billings" },
  { name: 'Support', icon: BiColorFill ,link:"/support"},
  { name: 'Settings', icon: RiContactsLine,link:"/settings" },
  { name: 'Help', icon: LuCircleHelp,link:"/help" },

  
  
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
