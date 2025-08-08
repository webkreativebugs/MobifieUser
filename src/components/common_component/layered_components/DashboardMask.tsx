import { ReactNode, useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

interface Name {
  name: string;
  children: ReactNode;
}
 
const DashboardMask = ({ name, children }: Name) => {
  const [show,setShow]=useState(true);
  return (
    <div className=" flex">
      {show&&
    <Sidebar location={"project"} active={name} />
      }
      <div className="w-screen   max-h-[90vh]">
        <Navbar show={show} setShow={setShow} />
        <div className=" p-6  h-full w-full overflow-auto ">
          <div className=" w-full gap-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMask;
