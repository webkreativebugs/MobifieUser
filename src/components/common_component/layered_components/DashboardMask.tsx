import { ReactNode } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

interface Name {
  name: string;
  children: ReactNode;
}

const DashboardMask = ({ name, children }: Name) => {
  return (
    <div className=" flex">
      <Sidebar active={name} />

      <div className="w-screen   h-screen">
        <Navbar />
        <div className=" p-6  h-full w-full overflow-auto ">
          <div className=" w-full gap-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMask;
