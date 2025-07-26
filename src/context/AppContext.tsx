import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {checkdomain} from '../../network/public/domain/CheckDomain.api'
import {VerifyDomainResponse} from '../../network/public/domain/CheckDomain.interface'
interface ITheme {
  theme: string;
  secondaryColor: string;
  onThemeChange: (theme: string) => void;
  onColorChange: (color:string)  => void
  domainResponse:VerifyDomainResponse|null

}

type Props = {
  children: ReactNode;
};

const AppContext = createContext({} as ITheme);
const STORE_CONSTANT: string = "THEME";
const COLOR_CONSTANT:string ="COLOR"

export const AppProvider = ({ children }: Props) => {

  const [theme, setTheme] = useState<string>("");
  const [secondaryColor , setSecondaryColor] = useState<string>("")
  const [domainResponse , setDomainResponse] =useState<VerifyDomainResponse|null>(null);

  useEffect(() => {
    const savedTheme: string | null = localStorage.getItem(STORE_CONSTANT);
    const savedColor: string | null = localStorage.getItem(COLOR_CONSTANT);
    if (savedTheme) {
      setTheme(savedTheme as string);
    }
     if (savedColor) {
      setSecondaryColor(savedColor as string);
    }
    VerifyDomain()
  }, []);

  const VerifyDomain = async ()=>{


          checkdomain((response, error) => {
            if(error)
            {
              console.log(error);
              
            }
            setDomainResponse(response)
    });
    }
useEffect(()=>{
 console.log(domainResponse);
 
},[domainResponse])
  const handleChange = (selectedTheme: string) => {
    setTheme(selectedTheme);
    localStorage.setItem(STORE_CONSTANT, selectedTheme);  
  };
  const handleColorChange = (selectedColor: string) => {
    setSecondaryColor(selectedColor);
    localStorage.setItem(COLOR_CONSTANT, selectedColor);
    console.log(theme);
    
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        secondaryColor,
        onThemeChange: handleChange,
        onColorChange: handleColorChange,
        domainResponse
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useTheme = () => useContext(AppContext);
