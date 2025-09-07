import { useloader } from "../../../../../context/loader_context/LoaderContext";
import { ReactNode } from "react";
import Sidebar from "../../../../common_component/Sidebar";
import { ConfigDashboardLinks } from "../../../../../data/SidebarLinks";
import Navbar from "../../../../common_component/Navbar";

interface PROPS {
  name: string;
  children: ReactNode;
}

const CustomizeMask = ({ name, children }: PROPS) => {
  const { show,setShow } = useloader();
//   setShow(false);
  return (
    <div className="h-full flex hide-scrollbar">
    <Sidebar setShow={setShow} show={show} active={name} links={ConfigDashboardLinks} />
      <div className="w-screen   max-h-[90vh]">
        <Navbar/>
        <div className=" p-6 mt-20  h-full w-full overflow-auto ">
          <div className=" w-full gap-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeMask;
