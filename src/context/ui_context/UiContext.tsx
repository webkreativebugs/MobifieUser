import UiCOmponent from "../../data/CustomizeData/UiDropdown.json";
import HeaderConfig from "../../data/CustomizeData/HeaderConfig.json";
import BottomTabConfig from "../../data/CustomizeData/BottomTabConfig.json";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface Icon {
  name: string;
  svg: string;
}

interface HeaderProps {
  logoText: string;
  placeholder: string;
  leftIcons: Icon[];
  rightIcons: Icon[];
}

interface BottomTabProps {
  tabs: { label: string; icon: string }[];
}

interface ComponentConfig {
  component: string;
  type: string;
  props?: HeaderProps | BottomTabProps;
}

interface Main {
  name: string;
  designs: string[];
}

export interface PageConfig {
  [key: string]: {
    Header: ComponentConfig;
    BottomTab: ComponentConfig;
    Main: Main[];
  };
}

//interface for screen config

export interface UIConfig {
  Header: ComponentConfig;
  BottomTab: ComponentConfig;
  Main: Main[];
}

interface UiContextType {
  uiConfig: PageConfig;
  setUiConfig: React.Dispatch<React.SetStateAction<PageConfig>>;
}

interface ScreenContextType {
  screenConfig: UIConfig;
  setScreenConfig: React.Dispatch<React.SetStateAction<UIConfig>>;
}

const UiContext = createContext<UiContextType>({
  uiConfig: {},
  setUiConfig: () => {},
});

const ScreenUiContext = createContext<ScreenContextType>({
  screenConfig: {
    Header: { component: "", type: "" },
    BottomTab: { component: "", type: "" },
    Main: [],
  },
  setScreenConfig: () => {},
});

export const UiContextProvider = ({ children }: { children: ReactNode }) => {
  const [uiConfig, setUiConfig] = useState<PageConfig>({});
  function buildConfig(
    headers: ComponentConfig[],
    bottomTabs: ComponentConfig[],
    mains: Main[]
  ): PageConfig {
    const config: PageConfig = {};

    mains.forEach((main) => {
      config[main.name] = {
        Header: headers[0],
        BottomTab: bottomTabs[0],
        Main: [main],
      };
    });

    return config;
  }
  useEffect(() => {
    const merged = buildConfig(HeaderConfig, BottomTabConfig, UiCOmponent);
    console.log(merged);
    setUiConfig(merged);
  }, []);

  return (
    <UiContext.Provider value={{ uiConfig, setUiConfig }}>
      {children}
    </UiContext.Provider>
  );
};

export const useUi = () => useContext(UiContext);

export const ScreenUiContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [screenConfig, setScreenConfig] = useState<UIConfig>({
    Header: { component: "", type: "" },
    BottomTab: { component: "", type: "" },
    Main: [],
  });

  return (
    <ScreenUiContext.Provider value={{ screenConfig, setScreenConfig }}>
      {children}
    </ScreenUiContext.Provider>
  );
};

export const ScreenUi = () => useContext(ScreenUiContext);
