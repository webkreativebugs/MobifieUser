import Navbar from "../../../../common_component/Navbar";
import Sidebar from "../../../../common_component/Sidebar";
// import CustomizeMask from "../common/CustomizeMask";
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
  disable
}: {
  
  displayName: string;
  name: string;
  display: string;
  direction?: FlexDirection;
  disable:boolean
}) => {
  // const { orgDetails } = useorg();

  // const { isEdit } = useTabContext();

  const ChildComponent= (disable:boolean)=>{
    if(selectedScreen===DefaultVAlues.API) return <ApiConfig disable={disable}/>
    if(selectedScreen===DefaultVAlues.CLIENT) return <ClientConfig disable={disable}/>
    if(selectedScreen===DefaultVAlues.DEFAULT) return <DefaultConfig disable={disable}/>
    if(selectedScreen===DefaultVAlues.WEB) return <WebUrlConfig disable={disable}/>
    if(selectedScreen===DefaultVAlues.YOU) return <YouConfig disable={disable}/>
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
            <TabLinks selectedScreen={selectedScreen} setSelectedScreen={setSelectedScreen} disable={disable}/>

            <div
              className={`mt-5`  }
              style={{ display: `${display}`, flexDirection: `${direction}` }}
            >
              {ChildComponent(disable)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppConfigMask;
