import { ReactNode } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { useloader } from "../../../context/loader_context/LoaderContext";
interface Name {
  name: string;
  children: ReactNode;
}
 
const DashboardMask = ({ name, children }: Name) => {
const {show , setShow} = useloader()
  return (
    <div className=" flex">
    <Sidebar setShow={setShow} show={show} active={name} />
      <div className="w-screen   max-h-[90vh]">
        <Navbar/>
        <div className=" p-6 mt-20  h-full w-full overflow-auto ">
          <div className=" w-full gap-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMask;
