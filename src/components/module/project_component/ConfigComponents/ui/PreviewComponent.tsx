import { useState } from "react";
import { useSaveChanges } from "../../../../../context/ui_context/SaveChanges";
import { ScreenConfigInterface } from "../../../../../data/interface/data.interface";
import { useTheme } from "../../../../../context/AppContext";

import Header1 from "./customComponent/header/Header1";
import BottomTab1 from "./customComponent/bottomTab/BottomTab1";
import { Link } from "react-router-dom";
// import { ScreenData } from "../../../../../pages/customize_pages/ui-config/page";
type screenConfig = {
  screenConfig: ScreenConfigInterface;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

function PreviewComponent({ screenConfig, isEdit, setIsEdit }: screenConfig) {
  const [android, setAndroid] = useState(false);
  console.log(screenConfig.current_confi.bottomtab.isActive);
  const { isActive, setIsActive } = useSaveChanges();
  const { theme } = useTheme();
  console.log(isActive);

  return (
    <div
      className="border-l-2 flex flex-col justify-center pl-10 w-[25vw]"
      style={{ height: "100%" }}
    >
      {/* Title + Toggle */}
      <div className="flex items-center justify-between mx-6 mb-2">
        <h1 className="text-3xl font-bold">Preview</h1>
        {isEdit ? (
          <button
            onClick={() => {
              setIsActive(false);
              // setIsEdit(false);
            }}
            className="text-sm px-4 py-2 rounded-md text-black bg-white border shadow-md font-semibold transition 
             hover:bg-gray-100 active:scale-95 active:bg-gray-200"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="text-sm px-4 py-2 rounded-md text-black bg-white border shadow-md font-semibold transition 
             hover:bg-gray-100 active:scale-95 active:bg-gray-200"
          >
            <Link to="/project/edit-screen-config" state={{ projectId: 42 }}>
              Edit Screen
            </Link>
          </button>
        )}
      </div>

      {/* Phone Preview */}
      <div className="flex justify-center p-4">
        {android ? (
          /* ANDROIDsdsds */
          <div className="relative w-full max-w-[393px] h-[48rem]  aspect-[393/820] bg-black rounded-[2rem] shadow-2xl p-[10px]">
            <div className="relative flex flex-col w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
              {/* Punch-hole camera */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full z-10 shadow-inner" />

              <div className={`${theme} bg-secondary`}>
                {/* Header */}
                <Header1 screenConfig={screenConfig} />

                {/* Scrollable Main */}

                <div className="flex-1 overflow-y-auto hide-scrollbar mt-0 mb-1">
                  <div className="flex">
                    {/* {!currentscreenConfig.screen.isActive && ( */}
                    <img
                      src={screenConfig.current_confi.screen.image}
                      alt="home"
                      className="w-full p-0"
                    />
                    {/* )} */}
                  </div>
                </div>

                {/* Footer */}
                <div className=" bg-secondary bottom-4">
                  {screenConfig.current_confi.bottomtab.isActive && (
                    <BottomTab1 />
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* iPHONE */
          <div className="relative w-full max-w-[393px] h-[48rem]   aspect-[393/840] bg-black rounded-[3rem] shadow-2xl p-[10px]">
            <div className=" relative flex flex-col w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
              {/* Dynamic Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />

              <div className={`${theme} bg-secondary`}>
                {/* Header */}
                <Header1 screenConfig={screenConfig} />

                {/* Scrollable Main */}

                <div className="flex-1 overflow-y-auto hide-scrollbar mt-0 mb-1">
                  <div className="flex">
                    {/* {!currentscreenConfig.screen.isActive && ( */}
                    <img
                      src={screenConfig.current_confi.screen.image}
                      alt="home"
                      className="w-full p-0"
                    />
                    {/* )} */}
                  </div>
                </div>

                {/* Footer */}
                <div className=" bg-secondary">
                  {screenConfig.current_confi.bottomtab.isActive && (
                    <BottomTab1 />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-4">
        {" "}
        <button
          onClick={() => setAndroid((prev) => !prev)}
          className="text-sm px-4 py-3 rounded-md bg-black text-white font-semibold transition"
        >
          {!android ? "Switch to Android" : "Switch to iPhone"}
        </button>
      </div>
    </div>
  );
}

export default PreviewComponent;
