import { IconType } from 'react-icons';
// const img = "../../../public/assets/headerComponent/Screenshot 2025-08-12 141151.png"
// export interface SidebarLink {
//   name: string;
//   icon: IconType;
//   link:string;
//   dropdown:booleannnn
// }
export interface SidebarLink {
  name: string;
  icon: IconType;
  link: string;
  dropdown: boolean;
  action:string;
}

export interface TabLinks{
  name:string;
  link:string
  Icon:IconType

}
