import CustomizeMask from "../../../components/module/project_component/ConfigComponents/common/CustomizeMask";
import { CustomizeDashboardTypeEnums } from "../../../../enum/DashboardLinks";
const page = () => {
  return (
    <CustomizeMask name={CustomizeDashboardTypeEnums.UI}>
      <div className="  flex">
        <div className=" w-2/3 ">
          <h1 className="text-2xl font-semibold mb-8">Select Screen</h1>
          <div className="flex flex-wrap gap-8 ml-3">
            <div className="h-[16rem] w-[9rem] border rounded-md">1</div>
            <div className="h-[16rem] w-[9rem] border rounded-md">1</div>
            <div className="h-[16rem] w-[9rem] border rounded-md">1</div>
            <div className="h-[16rem] w-[9rem] border rounded-md">1</div>
            <div className="h-[16rem] w-[9rem] border rounded-md">1</div>
            <div className="h-[16rem] w-[9rem] border rounded-md">1</div>
            <div className="h-[16rem] w-[9rem] border rounded-md">1</div>
            <div className="h-[16rem] w-[9rem] border rounded-md">1</div>
            <div className="h-[16rem] w-[9rem] border rounded-md">1</div>
            <div className="h-[16rem] w-[9rem] border rounded-md">1</div>
          </div>
        </div>
        <div className="w-1/3  flex justify-center items-center">
          <img
            src="https://images.ctfassets.net/lzny33ho1g45/1QugdJvt8exmS28TqmqkHk/3d48eee5d6f7ffce27ea16621c1b82a9/ios-home-screen-ideas-image1.png?w=1400"
            alt=""
            className="w-3/5"
          />
        </div>
      </div>
    </CustomizeMask>
  );
};

export default page;
