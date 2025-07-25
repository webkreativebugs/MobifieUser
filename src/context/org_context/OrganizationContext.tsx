import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import OrgDetails from "../../utils/api/OrganizationDetailsApi";
import {useauth} from "../auth_context/AuthContext"

interface ORG {
  orgDetails: object;
//   setOrgDetails: Dispatch<SetStateAction<string>>;
}

type Props = {
  children: ReactNode;
};


const OrganizationContext = createContext({} as ORG);
export const OrganizationProvider = ({ children }: Props) => {
    const [orgDetails, setOrgDetails] = useState<object>({});
    const {role} =useauth()
    useEffect(()=>{
   
    if(role)
    {
      OrgDetails(setOrgDetails) 
    }
},[role])




useEffect(()=>{
 if(orgDetails)
 {
    console.log(orgDetails);
    
 }
},[orgDetails])

  return (
    <OrganizationContext.Provider
      value={{
        orgDetails,
      }}
    >
      {children}
    </OrganizationContext.Provider>
  );
};

export const useorg = () => useContext(OrganizationContext);
