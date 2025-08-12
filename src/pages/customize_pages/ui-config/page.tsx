import CustomizeMask from "../../../components/module/project_component/ConfigComponents/common/CustomizeMask";
import { CustomizeDashboardTypeEnums } from "../../../../enum/DashboardLinks";
import HeadingMask from "../../../components/common_component/layered_components/HeadingMask";
const page = () => {
  return (
    <CustomizeMask name={CustomizeDashboardTypeEnums.UI}>
      <div className="  flex">
        <div className=" w-2/3 ">
          <HeadingMask name={"Select Screen"}>
            <></>
          </HeadingMask>
          {/* <h1 className="text-2xl font-semibold mb-8">Select Screen</h1> */}
          <div className="flex flex-wrap gap-8 mt-8 ml-3">
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
          {/* <img
            src="https://images.ctfassets.net/lzny33ho1g45/1QugdJvt8exmS28TqmqkHk/3d48eee5d6f7ffce27ea16621c1b82a9/ios-home-screen-ideas-image1.png?w=1400"
            alt=""
            className="w-3/5"
          /> */}
          <div className=" flex  justify-center p-4">
            {/* iPhone frame with dynamic island notch */}
            <div className="relative w-[393px] h-[840px] bg-black rounded-[3rem] shadow-2xl p-[10px]">
              {/* Screen */}
              <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 pt-8 border bg-black rounded-full z-10" />
                {/* {children} */}{" "}
                <div className="mt-12 h-full px-1 border">ffdvdvvbvb</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomizeMask>
  );
};

export default page;
