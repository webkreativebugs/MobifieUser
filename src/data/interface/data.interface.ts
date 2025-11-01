// Single icon inside header
export interface IconItem {
  name: string;
  url: string;
  isActive?: boolean;
}

// Text object inside header (with isActive toggle)
export interface HeaderText {
  value: string;   // ✅ corrected from "vlaue" → matches JSON key
  isActive: boolean;
}

// Group for left/right icons
export interface HeaderIconGroup {
  text?: HeaderText;
  icons?: IconItem[];
}

// Center section (only text)
export interface HeaderCenter {
  text?: HeaderText;
}

// Config item for Header
export interface HeaderConfigItem {
  title: string;
  image: string;
  component: string;
  lefticons: HeaderIconGroup;
  righticons: HeaderIconGroup;
  center: HeaderCenter;
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
  header?: HeaderConfigItem;     
  bottomtab?: BottomTabItem[];  
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

//draft screen configuration 
export interface DraftScreenConfig {
  screenName:string,
  draftScreen:CurrentConfig
}

















// interface IconItem {
//   name: string;
//   url: string;
//   isActive?:boolean
// }

// // Config item for Header (with extra fields)
// export interface HeaderConfigItem {
//   title: string;
//   image: string;
//   component: string;
//   lefticons?: IconItem[];
//   righticons?: IconItem[];
//   text?: string;
// }

// // General config item (for screen or others)
// export interface ConfigItem {
//   title: string;
//   image: string;
//   component: string;
//   isActive?: boolean;
// }

// // Screen list item
// export interface ScreenItem {
//   title: string;
//   image: string;
//   component: string;
// }

// // Bottom tab item
// export interface BottomTabItem {
//   title: string;
//   image: string;
//   component?: string;
//   isActive?: boolean;
// }

// // Additional config section
// export interface AdditionalConfig {
//   header: HeaderConfigItem[];
//   bottomtab: BottomTabItem[];
// }

// // Current config section
// export interface CurrentConfig {
//   screen: ConfigItem;
//   header: HeaderConfigItem;
//   bottomtab: BottomTabItem;
// }

// // Main Screen Config
// export interface ScreenConfigInterface {
//   key: string;
//   title: string;
//   current_confi: CurrentConfig;
//   Screen: ScreenItem[];
//   additional_config: AdditionalConfig;
// }
