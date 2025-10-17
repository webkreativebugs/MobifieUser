import  { useState, Dispatch, SetStateAction } from "react";
import { ScreenConfigInterface } from "../../../../../data/interface/data.interface";

import Screens from "./Screens";
import AdditionalConfig from "./AdditionalConfig";

type UiConfigSidebarProps = {
  screenConfig: ScreenConfigInterface;
  setscreenConfig: Dispatch<SetStateAction<ScreenConfigInterface>>;
  isEdit: boolean;
};

function Ui({ screenConfig, setscreenConfig, isEdit }: UiConfigSidebarProps) {
  const [tab, setTab] = useState("screen");

  console.log(setscreenConfig, screenConfig);
  console.log(screenConfig);

  // useEffect(() => {
  //   setTab("screen");
  // }, [element]);

  return (
    <>
      <div className=" w-2/3  relative  overflow-y-auto hide-scrollbar overflow-x-hidden mb-2   flex  flex-col items-center ">
        {" "}
        <h1 className="text-3xl font-semibold absolute left-8">
          {screenConfig.title}
        </h1>
        {isEdit ? (
          <>
            {/* <h1 className="text-2xl font-semibold mb-8">Select Screen</h1> */}
            <div className="px-20 border-b-2 w-full h-10 ">
              <div className=" w-full mt-2 pb-2  flex justify-end gap-6">
                <button
                  onClick={() => setTab("screen")}
                  className={`text-xl ${tab === "screen" && "font-bold"}`}
                >
                  Screen
                </button>
                <button
                  onClick={() => setTab("AdditionalConfig")}
                  className={`text-xl ${
                    tab == "AdditionalConfig" && "font-bold"
                  }`}
                >
                  Additional Config
                </button>
              </div>
            </div>
            <>
              {tab === "screen" ? (
                <Screens
                  screenConfig={screenConfig}
                  setscreenConfig={setscreenConfig}
                />
              ) : (
                <AdditionalConfig
                  screenConfig={screenConfig}
                  setscreenConfig={setscreenConfig}
                />
              )}
            </>
          </>
        ) : (
          <>
            <div className="px-20 border-b-2 w-full h-10 ">
              <div className=" w-full mt-2 pb-2  flex justify-end gap-6">
                <button onClick={() => setTab("screen")} className={`}`}>
                  Selected Screen
                </button>
              </div>
            </div>
            <>
              <div className=" w-full p-16  rounded-lg   ">
                {/* Center Text Section */}
                <div className="card-bg p-4 rounded-md shadow-sm mb-6">
                  <div className="flex items-center gap-4">
                    <span className="w-32 font-medium">Header Text</span>
                    <input
                      type="text"
                      value={
                        screenConfig.current_confi.header.center.text?.value ||
                        ""
                      }
                      readOnly
                      className="flex-1 px-3 py-2 border rounded-md bg-gray-100"
                    />
                  </div>
                </div>

                {/* Left Icons Section */}
                <div className="card-bg p-4 rounded-md shadow-sm mb-6">
                  <h2 className="text-lg font-medium">Left Icons</h2>
                  {screenConfig.current_confi.header.lefticons.icons?.map(
                    (icon, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2 border rounded-md bg-white mb-2"
                      >
                        <span>{icon.name}</span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-sm font-semibold ${
                            icon.isActive
                              ? "bg-blue-100 text-blue-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {icon.isActive ? "Enabled" : "Disabled"}
                        </span>
                      </div>
                    )
                  )}
                </div>

                {/* Right Icons Section */}
                <div className="card-bg p-4 rounded-md shadow-sm">
                  <h2 className="text-lg font-medium">Right Icons</h2>
                  {screenConfig.current_confi.header.righticons.icons?.map(
                    (icon, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2 border rounded-md bg-white mb-2"
                      >
                        <span>{icon.name}</span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-sm font-semibold ${
                            icon.isActive
                              ? "bg-blue-100 text-blue-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {icon.isActive ? "Enabled" : "Disabled"}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </>
          </>
        )}
        {/* Example: Display the 'name' property of the first UI component */}
      </div>
    </>
  );
}

export default Ui;
