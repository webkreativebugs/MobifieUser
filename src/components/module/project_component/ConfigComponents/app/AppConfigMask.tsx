import Navbar from "../../../../common_component/Navbar";
import Sidebar from "../../../../common_component/Sidebar";
// import CustomizeMask from "../common/CustomizeMask";
// import HeadingMask from "../../../../common_component/layered_components/HeadingMask"
// import HeadingMask from "../../../../common_component/layered_components/HeadingMask"
// import { useorg } from "../../../../../context/org_context/OrganizationContext";
import { ConfigDashboardLinks } from "../../../../../data/SidebarLinks";
import TabLinks from "../common/TabLinks";
import { useTabContext } from "../../../../../context/org_context/TabContext";
// import { CustomizeDashboardTypeEnums } from "../../../../../../enum/DashboardLinks";
import { useloader } from "../../../../../context/loader_context/LoaderContext";
import { ReactNode } from "react";
type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

const AppConfigMask = ({
  children,
  name,
  display,
  direction = "row",
}: {
  children: ReactNode;
  displayName: string;
  name: string;
  display: string;
  direction?: FlexDirection;
}) => {
  // const { orgDetails } = useorg();

  const { isEdit } = useTabContext();
  const { show, setShow } = useloader();
  return (
    <div className="h-full flex hide-scrollbar">
      {isEdit && (
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
            <TabLinks />

            <div
              className="mt-5  "
              style={{ display: `${display}`, flexDirection: `${direction}` }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppConfigMask;
