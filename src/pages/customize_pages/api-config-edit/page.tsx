import Navbar from "../../../components/common_component/Navbar";
// import Sidebar from "../../../components/common_component/Sidebar";
// import CustomizeMask from "../common/CustomizeMask";
// import CustomizeMask from "../common/CustomizeMask";
// import HeadingMask from "../../../../common_component/layered_components/HeadingMask"
// import HeadingMask from "../../../../common_component/layered_components/HeadingMask"
// import { useorg } from "../../../../../context/org_context/OrganizationContext";
// import { ConfigDashboardLinks } from "../../../data/SidebarLinks";
import TabLinks from "../../../components/module/project_component/ConfigComponents/common/TabLinks"
// import { useTabContext } from "../../../../../context/org_context/TabContext";
import { useState } from "react";
// import { CustomizeDashboardTypeEnums } from "../../../../../../enum/DashboardLinks";
// import { useloader } from "../../../context/loader_context/LoaderContext";
// import { ReactNode } from "react";
// import { ReactNode } from "react";
import { DefaultVAlues } from "../../../constant/APiConfigConstants/ApiConstant";
import WebUrlConfig from "../../../components/module/project_component/ConfigComponents/app/WebUrlConfig";
import ClientConfig from "../../../components/module/project_component/ConfigComponents/app/ClientConfig";
import DefaultConfig from "../../../components/module/project_component/ConfigComponents/app/DefaultConfig";
import YouConfig from "../../../components/module/project_component/ConfigComponents/app/YouConfig";
import ApiConfig from "../../../components/module/project_component/ConfigComponents/app/ApiConfig";
// type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

const page = () => {
  // const { orgDetails } = useorg();

  // const { isEdit } = useTabContext();

  const ChildComponent= ()=>{
    if(selectedScreen===DefaultVAlues.API) return <ApiConfig/>
    if(selectedScreen===DefaultVAlues.CLIENT) return <ClientConfig/>
    if(selectedScreen===DefaultVAlues.DEFAULT) return <DefaultConfig/>
    if(selectedScreen===DefaultVAlues.WEB) return <WebUrlConfig/>
    if(selectedScreen===DefaultVAlues.YOU) return <YouConfig/>
  }

  // const { show, setShow } = useloader();
  const [selectedScreen,setSelectedScreen] = useState(DefaultVAlues.API)
  return (
    <div className="h-full flex hide-scrollbar">
      <div className="w-screen  max-h-[90vh]">
        <Navbar />
        <div className=" p-6 mt-20  h-full w-full overflow-auto ">
          <div className=" w-full gap-4">
            <TabLinks selectedScreen={selectedScreen} setSelectedScreen={setSelectedScreen} disable={false}/>

            <div
              className="mt-5  "
             
            >
              {ChildComponent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
