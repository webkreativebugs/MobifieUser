import CustomizeMask from "../common/CustomizeMask"
import HeadingMask from "../../../../common_component/layered_components/HeadingMask"
// import { useorg } from "../../../../../context/org_context/OrganizationContext";
import TabLinks from "../common/TabLinks";
// import { CustomizeDashboardTypeEnums } from "../../../../../../enum/DashboardLinks";
import { ReactNode } from "react";
const AppConfigMask = ({ children,displayName ,name}: { children: ReactNode ,displayName:string,name:string}) => {
  // const { orgDetails } = useorg();
  return (
    <CustomizeMask name={name}>
     <HeadingMask name={displayName} >
      <></>
     </HeadingMask>
    <TabLinks/>
     <div className=" w-full bg-primary mt-5 p-8">
         {children}
     </div>
    
    </CustomizeMask>
  )
}

export default AppConfigMask
