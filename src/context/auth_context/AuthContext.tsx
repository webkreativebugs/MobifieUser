import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
// import { useNavigate } from "react-router-dom";
// import {  useNavigate } from "react-router-dom";
// import AuthMe from "../../utils/api/AuthMe";
// import { decoder } from "../../utils/JwtDecoder";
// import { useNavigate } from "react-router-dom";

interface USERROLE {
  role: string;
  onRoleChange: (theme: string) => void;
}

type Props = {
  children: ReactNode;
};

const AuthContext = createContext({} as USERROLE);
const STORE_CONSTANT: string = "token";
export const AuthProvider = ({ children }: Props) => {
  
  
  // const navigate = useNavigate()
  const [role, setRole] = useState<string>("");
  // const [authResponse, setAuthResponse] = useState<LoginResponse>();
  useEffect(() => {
    const savedTheme: string | null = sessionStorage.getItem(STORE_CONSTANT);

    if (savedTheme) {
      setRole(savedTheme as string);
    }
  }, []);

// useEffect(()=>{
//  if(role==="")
//  {
// navigate("/", { replace: true });
//  }
// },[role])
  // useEffect(() => {
  //   if (authResponse) {
  //     handleChange(authResponse.token);

  //     console.log("This is auth api =" , authResponse);
      
  //   }
  // }, [authResponse]);

  const handleChange = (selectedTheme: string) => {
    setRole(selectedTheme);
    sessionStorage.setItem(STORE_CONSTANT, selectedTheme);
     
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
