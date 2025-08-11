import DashboardMask from "../../../../common_component/layered_components/DashboardMask";
import { useloader } from "../../../../../context/loader_context/LoaderContext";
import { DashboardTypeEnums } from "../../../../../../enum/DashboardLinks";
import { ReactNode } from "react";
import CustomizeSidebar from "./CustomizeSidebar";

interface PROPS {
  name: string;
  children: ReactNode;
}

const CustomizeMask = ({ name, children }: PROPS) => {
  const { setShow } = useloader();
  setShow(false);
  return (
    <div>
      <DashboardMask name={DashboardTypeEnums.PROJECT}>
          <div className=" flex h-[84vh] ">
     <CustomizeSidebar  active={name} />
      <div className="w-full ">
       
        <div className=" p-6  h-full w-full overflow-auto hide-scrollbar">
          <div className=" w-full gap-4">{children}</div>
        </div>
      </div>
    </div>
      </DashboardMask>
    </div>
  );
};

export default CustomizeMask;
