import CustomizeMask from "../common/CustomizeMask"
import HeadingMask from "../../../../common_component/layered_components/HeadingMask"
import { useorg } from "../../../../../context/org_context/OrganizationContext";
import { tablinks } from "../../../../../data/TabLinks";
import { Link } from "react-router-dom";
import { CustomizeDashboardTypeEnums } from "../../../../../../enum/DashboardLinks";
import { ReactNode } from "react";
const AppConfigMask = ({ children,displayName }: { children: ReactNode ,displayName:string}) => {
  const { orgDetails } = useorg();
  return (
    <CustomizeMask name={CustomizeDashboardTypeEnums.APP}>
     <HeadingMask name={displayName} >
      <></>
     </HeadingMask>
     <div className="bg-primary  p-5 pb-0 mb-0 ">
      <p className="text-xl font-semibold mb-2 " >{orgDetails?.data.name}</p>
      <p className="text-sm text-gray-500 mb-5">{"Saved at: 12 Aug 25, 04:31 pm"}</p>
      <hr/>
      <div className="mt-5 mb-0 flex border-b border-gray-200">
      {tablinks.map((item, key) => {
        const isActive = location.pathname === item.link;
        return (
          <Link
            to={item.link}
            key={key}
            className={`mr-5 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "border-b-2 border-gray-900 text-black-900"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
     </div>
     <div className=" w-full bg-primary mt-5 p-8">
         {children}
     </div>
    
    </CustomizeMask>
  )
}

export default AppConfigMask
