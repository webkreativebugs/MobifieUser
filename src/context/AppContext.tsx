import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ITheme {
  theme: string;
  onThemeChange: (theme: string) => void;
}

type Props = {
  children: ReactNode;
};

const AppContext = createContext({} as ITheme);
const STORE_CONSTANT: string = "THEME";

export const AppProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    const savedTheme: string | null = localStorage.getItem(STORE_CONSTANT);

    if (savedTheme) {
      setTheme(savedTheme as string);
    }
  }, []);

  const handleChange = (selectedTheme: string) => {
    setTheme(selectedTheme);
    localStorage.setItem(STORE_CONSTANT, selectedTheme);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        onThemeChange: handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useTheme = () => useContext(AppContext);
