import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import OrgDetails from "../../utils/api/OrganizationDetailsApi";
import { useauth } from "../auth_context/AuthContext";
import { OrganizationResponse } from "../../../network/public/organization_api/organization_detail/OrganizationalDetails.interface";

interface ORG {
  orgDetails: OrganizationResponse | undefined;
  //   setOrgDetails: Dispatch<SetStateAction<string>>;
}

type Props = {
  children: ReactNode;
};

const OrganizationContext = createContext({} as ORG);
export const OrganizationProvider = ({ children }: Props) => {
  const [orgDetails, setOrgDetails] = useState<
    OrganizationResponse | undefined
  >();
  const { role } = useauth();
  useEffect(() => {
    if (role) {
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
