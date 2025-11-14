import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { CurrentConfig } from "../../data/interface/data.interface";
import Screens from "../../data/CustomizeData/ScreenConfig.json";

export interface MainScreenDataConfig {
  screenName: string;
  current_config: CurrentConfig;
}

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
    if (typeof window === "undefined") return; // 🧠 Skip if SSR (Next.js)

    const storedData = localStorage.getItem("mainscreenData");

    if (storedData && storedData !== "undefined") {
      try {
        const parsed = JSON.parse(storedData);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMainScreenData(parsed);
          console.log("✅ Loaded from localStorage:", parsed);
          return;
        }
      } catch (err) {
        console.error(" Failed to parse mainscreenData:", err);
      }
    }

    // 🧱 First-time setup only if nothing in localStorage
    const newData: MainScreenDataConfig[] = Screens.map((item) => ({
      screenName: item.key,
      current_config: item.current_confi,
    }));

    setMainScreenData(newData);
    localStorage.setItem("mainscreenData", JSON.stringify(newData));
    console.log("🆕 Initialized from Screens.json");
  }, []);

  // 💾 Automatically update localStorage when data changes
  useEffect(() => {
    if (mainscreenData.length > 0 && typeof window !== "undefined") {
      localStorage.setItem("mainscreenData", JSON.stringify(mainscreenData));
      console.log("💾 Saved updated data to localStorage");
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
