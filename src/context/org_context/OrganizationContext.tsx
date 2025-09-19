import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import OrgDetails from "../../utils/api/OrganizationDetailsApi";
// import { useloader } from "../loader_context/LoaderContext";
// import { OrganizationDetailsConfig } from "../../../network/public/organization_api/organization_detail/OrganizationalDetails.api";
import { useauth } from "../auth_context/AuthContext";
import { OrganizationResponse } from "../../../network/public/organization_api/organization_detail/OrganizationalDetails.interface";
import { OrganizationDetailsConfig } from "../../../network/public/organization_api/organization_detail/OrganizationalDetails.api";

interface ORG {
  orgDetails: OrganizationResponse | undefined;
  //   setOrgDetails: Dispatch<SetStateAction<string>>;
}

type Props = {
  children: ReactNode;
};

const OrganizationContext = createContext({} as ORG);
export const OrganizationProvider = ({ children }: Props) => {
  //  const {loader,setLoader}=useloader();
  const [orgDetails, setOrgDetails] = useState<
    OrganizationResponse | undefined
  >();
  const { role } = useauth();
  
  // useEffect(()=>{
  //   if(!OrganizationDetailsConfig.orgName)
  //   {
  //     if(authResponse!==undefined)
  //     {
  //       OrganizationDetailsConfig.orgName=authResponse.user.organization
  //        console.log("This is organization details",authResponse);
  //     }
  
  //   }
  // })
  //
  useEffect(() => {
    if (role) {
   
      if(OrganizationDetailsConfig.orgName!=="")
      OrgDetails(setOrgDetails);
    }
  }, [role]);

  useEffect(() => {
    if (orgDetails) {
      console.log(orgDetails);
    }
  }, [orgDetails]);




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
