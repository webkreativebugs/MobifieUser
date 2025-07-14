import React from 'react';
import { FiShoppingBag, FiEdit, FiPieChart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineCalendar, AiOutlineStock, AiOutlineAreaChart, AiOutlineBarChart } from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { BsKanban, BsBarChart } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { GiLouvrePyramid } from 'react-icons/gi';

import type { SidebarLink } from '../data/Types/LInkType.interface';

export const AdminDashboardLinks: SidebarLink[] = [
  { name: 'Projects', icon: FiShoppingBag },
  { name: 'Alerts', icon: AiOutlineShoppingCart },
  { name: 'Activity Feed', icon: IoMdContacts },
  { name: 'Settings', icon: RiContactsLine },
  { name: 'Help', icon: AiOutlineCalendar },
  { name: 'Access Manager', icon: BsKanban },
  { name: 'Billing', icon: FiEdit },
  { name: 'Support', icon: BiColorFill },
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
  { name: 'ecommerce', icon: FiShoppingBag },
  { name: 'orders', icon: AiOutlineShoppingCart },
  { name: 'employees', icon: IoMdContacts },
  { name: 'customers', icon: RiContactsLine },
  { name: 'calendar', icon: AiOutlineCalendar },
  { name: 'kanban', icon: BsKanban },
  { name: 'editor', icon: FiEdit },
  { name: 'color-picker', icon: BiColorFill },
  { name: 'line', icon: AiOutlineStock },
  { name: 'area', icon: AiOutlineAreaChart },
  { name: 'bar', icon: AiOutlineBarChart },
  { name: 'pie', icon: FiPieChart },
  { name: 'financial', icon: RiStockLine },
  { name: 'color-mapping', icon: BsBarChart },
  { name: 'pyramid', icon: GiLouvrePyramid },
  { name: 'stacked', icon: AiOutlineBarChart },
];

export const AccountsDashboardLinks: SidebarLink[] = [
  { name: 'ecommerce', icon: FiShoppingBag },
  { name: 'orders', icon: AiOutlineShoppingCart },
  { name: 'employees', icon: IoMdContacts },
  { name: 'customers', icon: RiContactsLine },
  { name: 'calendar', icon: AiOutlineCalendar },
  { name: 'kanban', icon: BsKanban },
  { name: 'editor', icon: FiEdit },
  { name: 'color-picker', icon: BiColorFill },
  { name: 'line', icon: AiOutlineStock },
  { name: 'area', icon: AiOutlineAreaChart },
  { name: 'bar', icon: AiOutlineBarChart },
  { name: 'pie', icon: FiPieChart },
  { name: 'financial', icon: RiStockLine },
  { name: 'color-mapping', icon: BsBarChart },
  { name: 'pyramid', icon: GiLouvrePyramid },
  { name: 'stacked', icon: AiOutlineBarChart },
];
