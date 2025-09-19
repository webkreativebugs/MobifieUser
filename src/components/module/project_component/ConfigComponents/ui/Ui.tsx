import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { ScreenConfigInterface } from "../../../../../data/interface/data.interface";

import Screens from "./Screens";
import AdditionalConfig from "./AdditionalConfig";

export type UiConfigSidebarProps = {
  screenConfig: ScreenConfigInterface;
  setscreenConfig: Dispatch<SetStateAction<ScreenConfigInterface>>;
};

function Ui({ screenConfig, setscreenConfig }: UiConfigSidebarProps) {
  const [tab, setTab] = useState("screen");

  console.log(setscreenConfig, screenConfig);
  console.log(tab);

  // useEffect(() => {
  //   setTab("screen");
  // }, [element]);

  return (
    <>
      <div className=" w-2/3  relative  overflow-y-auto hide-scrollbar overflow-x-hidden mb-2   flex  flex-col items-center ">
        <h1 className="text-3xl font-semibold absolute left-8">
          {screenConfig.title}
        </h1>
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
              className={`text-xl ${tab == "AdditionalConfig" && "font-bold"}`}
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
        {/* Example: Display the 'name' property of the first UI component */}
      </div>
    </>
  );
}

export default Ui;
