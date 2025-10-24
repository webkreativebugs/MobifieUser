import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { CurrentConfig } from "../../data/interface/data.interface";
import Screens from "../../data/CustomizeData/ScreenConfig.json";

// Type for each screen data
export interface MainScreenDataConfig {
  screenName: string;
  current_config: CurrentConfig;
}

// Context type (only what you need)
interface MainScreenDataContextType {
  mainscreenData: MainScreenDataConfig[];
  setMainScreenData: React.Dispatch<
    React.SetStateAction<MainScreenDataConfig[]>
  >;
}

const MainScreenDataContext = createContext<
  MainScreenDataContextType | undefined
>(undefined);

export const MainScreenDataProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [mainscreenData, setMainScreenData] = useState<MainScreenDataConfig[]>(
    []
  );

  useEffect(() => {
    const storedData = localStorage.getItem("mainscreenData");
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);
        setMainScreenData(parsed);
        console.log("Loaded from localStorage:", parsed);
      } catch (err) {
        console.error("Failed to parse mainscreenData from localStorage", err);
      }
    } else {
      const newData: MainScreenDataConfig[] = Screens.map((item) => ({
        screenName: item.key,
        current_config: item.current_confi,
      }));
      setMainScreenData(newData);
      console.log("Initialized from Screens.json");
    }
  }, []);

  useEffect(() => {
    if (mainscreenData.length > 0) {
      localStorage.setItem("mainscreenData", JSON.stringify(mainscreenData));
      console.log("Saved to localStorage:", mainscreenData);
    }
  }, [mainscreenData]);

  return (
    <MainScreenDataContext.Provider
      value={{ mainscreenData, setMainScreenData }}
    >
      {children}
    </MainScreenDataContext.Provider>
  );
};

// Custom hook
export const useMainScreenData = () => {
  const context = useContext(MainScreenDataContext);
  if (!context) {
    throw new Error(
      "useMainScreenData must be used within a MainScreenDataProvider"
    );
  }
  return context;
};
