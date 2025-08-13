import CustomizeMask from "../../../components/module/project_component/ConfigComponents/common/CustomizeMask";
import { CustomizeDashboardTypeEnums } from "../../../../enum/DashboardLinks";
import HeadingMask from "../../../components/common_component/layered_components/HeadingMask";
import UiCOmponent from "../../../data/CustomizeData/UiDropdown.json";
import { useState } from "react";
import CustomizeSidebar from "../../../components/module/project_component/ConfigComponents/common/CustomizeSidebar";
import UiConfigSidebar from "../../../components/module/project_component/ConfigComponents/ui/UiConfigSidebar";
const page = () => {
  const [first, setfirst] = useState("");
  const [element, setElement] = useState(UiCOmponent[0].name);
  return (
    <CustomizeMask name={CustomizeDashboardTypeEnums.UI}>
      <div className=" flex">
        <UiConfigSidebar element={element} setElement={setElement} />
        {/* <CustomizeSidebar active="xfbhfh" /> */}
        <div className=" w-2/3 ">
          <h1 className="text-3xl font-semibold ml-12 mb-6">{element}</h1>
          {/* <h1 className="text-2xl font-semibold mb-8">Select Screen</h1> */}

          {/* Example: Display the 'name' property of the first UI component */}
          <div className="flex flex-wrap justify-around ml-4 px-8 w-full  gap-x-1 gap-y-4 ">
            {" "}
            {UiCOmponent[0]?.designs &&
              UiCOmponent[0].designs.map((item, idx) => (
                // <div
                //   className=""
                //   key={idx}
                //   dangerouslySetInnerHTML={{ __html: item.html }}
                // />
                <div className="w-[24rem] border p-5 rounded-lg">
                  <button onClick={() => setfirst(item.image)}>
                    <img src={item.image} alt="" />
                  </button>

                  {/* <p>{item.title}</p> */}
                </div>
              ))}
          </div>
        </div>
        <div className="  border-l-2 flex flex-col justify-center ml-10 pl-10 ">
          <h1 className="text-3xl mx-6 font-bold mb-0">Preview</h1>
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
                <div className="mt-12 h-full px-1 ">
                  <img src={first} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomizeMask>
  );
};

export default page;
