import CustomizeMask from "../common/CustomizeMask"
import HeadingMask from "../../../../common_component/layered_components/HeadingMask"
// import { useorg } from "../../../../../context/org_context/OrganizationContext";
import TabLinks from "../common/TabLinks";
// import { CustomizeDashboardTypeEnums } from "../../../../../../enum/DashboardLinks";
import { ReactNode } from "react";
const AppConfigMask = ({ children,displayName ,name,display}: { children: ReactNode ,displayName:string,name:string,display:string}) => {
  // const { orgDetails } = useorg();
  return (
    <CustomizeMask name={name}>
     <HeadingMask name={displayName} >
      <></>
     </HeadingMask>
    <TabLinks/>
     <div className="bg-primary   justify-between shadow-md mt-5 p-10  "  style={{display:`${display}`}}>
         {children}
     </div>
    
    </CustomizeMask>
  )
}

export default AppConfigMask
