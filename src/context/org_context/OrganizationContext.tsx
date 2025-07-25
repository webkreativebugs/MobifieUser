import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import OrgDetails from "../../utils/api/OrganizationDetailsApi";
import { Dispatch, SetStateAction } from "react";
import {useauth} from "../auth_context/AuthContext"

interface ORG {
  orgDetails: string;
  setOrgDetails: Dispatch<SetStateAction<string>>;
}

type Props = {
  children: ReactNode;
};


const OrganizationContext = createContext({} as ORG);
export const OrganizationProvider = ({ children }: Props) => {
    const {role} =useauth()
    useEffect(()=>{
   
    if(role)
    {
      OrgDetails() 
    }
},[role])

  const [orgDetails, setOrgDetails] = useState<string>("");

  return (
    <OrganizationContext.Provider
      value={{
        orgDetails,
        setOrgDetails,
      }}
    >
      {children}
    </OrganizationContext.Provider>
  );
};

export const useorg = () => useContext(OrganizationContext);
