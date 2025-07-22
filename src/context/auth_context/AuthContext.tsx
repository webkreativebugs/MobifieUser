import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import AuthMe from "../../utils/api/AuthMe";
// import { useNavigate } from "react-router-dom";
interface USERROLE {
  role: string;
  onRoleChange: (theme: string) => void;
}

type Props = {
  children: ReactNode;
};

const AuthContext = createContext({} as USERROLE);
const STORE_CONSTANT: string = "Role";
export const AuthProvider = ({ children }: Props) => {
  const [role, setRole] = useState<string>("");
  const [apiResponse, setApiResponse] = useState<string>("");
  useEffect(() => {
    const savedTheme: string | null = localStorage.getItem(STORE_CONSTANT);

    if (savedTheme) {
      setRole(savedTheme as string);
    }
  }, []);

  useEffect(() => {
    if (role != "auth") {
      AuthMe(setApiResponse);
    }
  });

  const handleChange = (selectedTheme: string) => {
    // const navigate = useNavigate()
    setRole(selectedTheme);
    localStorage.setItem(STORE_CONSTANT, selectedTheme);
    // navigate("/")
  };
  return (
    <AuthContext.Provider
      value={{
        role,
        onRoleChange: handleChange,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useauth = () => useContext(AuthContext);
