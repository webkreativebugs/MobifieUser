import Navbar from "../../../../common_component/Navbar";
import Sidebar from "../../../../common_component/Sidebar";
// import CustomizeMask from "../common/CustomizeMask";
// import HeadingMask from "../../../../common_component/layered_components/HeadingMask"
// import HeadingMask from "../../../../common_component/layered_components/HeadingMask"
// import { useorg } from "../../../../../context/org_context/OrganizationContext";
import { ConfigDashboardLinks } from "../../../../../data/SidebarLinks";
import TabLinks from "../common/TabLinks";
// import { useTabContext } from "../../../../../context/org_context/TabContext";
import { useState } from "react";
// import { CustomizeDashboardTypeEnums } from "../../../../../../enum/DashboardLinks";
import { useloader } from "../../../../../context/loader_context/LoaderContext";
// import { ReactNode } from "react";
import { DefaultVAlues } from "../../../../../constant/APiConfigConstants/ApiConstant";
import WebUrlConfig from "./WebUrlConfig";
import ClientConfig from "./ClientConfig";
import DefaultConfig from "./DefaultConfig";
import YouConfig from "./YouConfig";
import ApiConfig from "./ApiConfig";
type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

const AppConfigMask = ({
  name,
  display,
  direction = "row",
}: {
  
  displayName: string;
  name: string;
  display: string;
  direction?: FlexDirection;
}) => {
  // const { orgDetails } = useorg();

  // const { isEdit } = useTabContext();

  const ChildComponent= ()=>{
    if(selectedScreen===DefaultVAlues.API) return <ApiConfig/>
    if(selectedScreen===DefaultVAlues.CLIENT) return <ClientConfig/>
    if(selectedScreen===DefaultVAlues.DEFAULT) return <DefaultConfig/>
    if(selectedScreen===DefaultVAlues.WEB) return <WebUrlConfig/>
    if(selectedScreen===DefaultVAlues.YOU) return <YouConfig/>
  }

  const { show, setShow } = useloader();
  const [selectedScreen,setSelectedScreen] = useState(DefaultVAlues.API)
  return (
    <div className="h-full flex hide-scrollbar">
      {true && (
        <Sidebar
          setShow={setShow}
          show={show}
          active={name}
          links={ConfigDashboardLinks}
        />
      )}
      <div className="w-screen  max-h-[90vh]">
        <Navbar />
        <div className=" p-6 mt-20  h-full w-full overflow-auto ">
          <div className=" w-full gap-4">
            <TabLinks selectedScreen={selectedScreen} setSelectedScreen={setSelectedScreen} />

            <div
              className="mt-5  "
              style={{ display: `${display}`, flexDirection: `${direction}` }}
            >
              {ChildComponent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppConfigMask;
