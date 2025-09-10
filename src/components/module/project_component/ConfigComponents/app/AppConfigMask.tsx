import CustomizeMask from "../common/CustomizeMask"
// import HeadingMask from "../../../../common_component/layered_components/HeadingMask"
// import { useorg } from "../../../../../context/org_context/OrganizationContext";
import TabLinks from "../common/TabLinks";
// import { CustomizeDashboardTypeEnums } from "../../../../../../enum/DashboardLinks";
import { ReactNode } from "react";
type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
const AppConfigMask = ({ children,name,display,direction="row" }: { children: ReactNode ,displayName:string,name:string,display:string,direction?: FlexDirection }) => {
  // const { orgDetails } = useorg();
  return (
    <CustomizeMask name={name}>
     {/* <HeadingMask name={displayName} >
      <></>
     </HeadingMask> */}
     <div className="flex justify-center"><TabLinks/></div>
    
     <div className="items-center  justify-center mt-5 p-10  "  style={{display:`${display}`,flexDirection:`${direction}`}}>
         {children}
     </div>
    
    </CustomizeMask>
  )
}

export default AppConfigMask
