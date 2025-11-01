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
import { DefaultVAlues } from "../../../../../constant/APiConfigConstants/ApiConstant";
import WebUrlConfig from "./WebUrlConfig";
import ClientConfig from "./ClientConfig";
import DefaultConfig from "./DefaultConfig";
import YouConfig from "./YouConfig";
import ApiConfig from "./ApiConfig";
import { Link } from "react-router-dom";
type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

const AppConfigMask = ({
  isDisable,
  // displayName,
  name,
  display,
  direction = "row",
}: {
  isDisable: boolean;
  displayName: string;
  name: string;
  display: string;
  direction?: FlexDirection;
}) => {
  // const { orgDetails } = useorg();

  // const { isEdit } = useTabContext();

  const ChildComponent = () => {
    if (selectedScreen === DefaultVAlues.API) return <ApiConfig isDisable />;
    if (selectedScreen === DefaultVAlues.CLIENT) return <ClientConfig />;
    if (selectedScreen === DefaultVAlues.DEFAULT) return <DefaultConfig />;
    if (selectedScreen === DefaultVAlues.WEB) return <WebUrlConfig />;
    if (selectedScreen === DefaultVAlues.YOU) return <YouConfig />;
  };

  const { show, setShow } = useloader();
  const [selectedScreen, setSelectedScreen] = useState(DefaultVAlues.API);
  return (
    <div className="h-full flex hide-scrollbar">
      {isDisable && (
        <Sidebar
          setShow={setShow}
          show={show}
          active={name}
          links={ConfigDashboardLinks}
        />
      )}
      <div className="w-screen  max-h-[90vh]">
        <Navbar />
        <div
          className={` p-6 mt-20  h-full flex justify-center overflow-auto w-full`}
        >
          <div className={`w-full gap-4 ${!isDisable ? "w-3/4" : "w-full"}`}>
            <div className="card-bg w-full p-4 shadow-md my-3">
              {isDisable ? (
                <div className="card-bg mt-4">
                  <Link
                    // onClick={() => setIsEdit(true)}
                    className="text-sm px-4 py-2 rounded-md text-black  border shadow-md font-semibold transition hover:bg-gray-100 active:scale-95 active:bg-gray-200"
                    to="/project/new-app-config"
                    // state={{ type: ScreenType.MAIN }}
                  >
                    Edit Config
                  </Link>
                </div>
              ) : (
                <>
                  <div className="card-bg mt-4">
                    <Link
                      // onClick={() => setIsEdit(true)}
                      className="text-sm px-4 py-2 rounded-md text-black  border shadow-md font-semibold transition hover:bg-gray-100 active:scale-95 active:bg-gray-200"
                      to="/project/new-app-config"
                      // state={{ type: ScreenType.MAIN }}
                    >
                      Edit Config
                    </Link>
                  </div>
                </>
              )}
            </div>
            <TabLinks
              isDisable
              selectedScreen={selectedScreen}
              setSelectedScreen={setSelectedScreen}
            />

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
