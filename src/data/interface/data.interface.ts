// interface ConfigItem {
//   title: string;
//   image: string;
//   component: string;
//   isActive?: boolean; // optional, but useful for BottomTab too
// }

// interface ScreenItem {
//   title: string;
//   image: string;
//   component: string;
// }


// interface BottomTabItem {
//   title: string;
//   image: string;
//   component?: string;
//   isActive?: boolean;
// }

// export interface AdditionalConfig {
//   header: ConfigItem[];
//   bottomtab: ConfigItem[];
// }

// export interface CurrentConfig {
//   screen: ConfigItem;
//   header: ConfigItem;
//   bottomtab: BottomTabItem;
// }

// export interface ScreenConfigInterface {
//   key: string;
//   title: string;
//   current_confi: CurrentConfig;
//   Screen: ScreenItem[];
//   additional_config: AdditionalConfig;
// }





// Reusable interface for icons
interface IconItem {
  name: string;
  url: string;
  isActive?:boolean
}

// Config item for Header (with extra fields)
export interface HeaderConfigItem {
  title: string;
  image: string;
  component: string;
  lefticons?: IconItem[];
  righticons?: IconItem[];
  text?: string;
}

// General config item (for screen or others)
export interface ConfigItem {
  title: string;
  image: string;
  component: string;
  isActive?: boolean;
}

// Screen list item
export interface ScreenItem {
  title: string;
  image: string;
  component: string;
}

// Bottom tab item
export interface BottomTabItem {
  title: string;
  image: string;
  component?: string;
  isActive?: boolean;
}

// Additional config section
export interface AdditionalConfig {
  header: HeaderConfigItem[];
  bottomtab: BottomTabItem[];
}

// Current config section
export interface CurrentConfig {
  screen: ConfigItem;
  header: HeaderConfigItem;
  bottomtab: BottomTabItem;
}

// Main Screen Config
export interface ScreenConfigInterface {
  key: string;
  title: string;
  current_confi: CurrentConfig;
  Screen: ScreenItem[];
  additional_config: AdditionalConfig;
}
