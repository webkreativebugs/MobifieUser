import { IconType } from 'react-icons';

export interface SidebarLink {
  name: string;
  icon: IconType;
}

export interface SidebarSection {
  title: string;
  links: SidebarLink[];
}
