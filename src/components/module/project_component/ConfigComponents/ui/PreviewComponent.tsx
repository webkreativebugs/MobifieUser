import { useState } from "react";

import { useTheme } from "../../../../../context/AppContext";

import Header1 from "./customComponent/header/Header1";
import BottomTab1 from "./customComponent/bottomTab/BottomTab1";

import CustomizePopUp from "../common/CustomizePopUp";

import { currentViewInterface } from "../../../../../pages/customize_pages/Edit-screen-config/page";

type PreviewComponentProps = {
  // isEdit: boolean;
  // setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  isSubmitActive: boolean;
  // setIsSubmitActive: React.Dispatch<React.SetStateAction<boolean>>;
  currentView: currentViewInterface;
};

function PreviewComponent({
  // isEdit,
  // setIsEdit,
  isSubmitActive,
  // setIsSubmitActive,
  currentView,
}: PreviewComponentProps) {
  const [android, setAndroid] = useState(false);
  const [submitPopup, setSubmitPOpup] = useState(false);
  // const { isActive, setIsActive } = useSaveChanges();
  const { theme } = useTheme();

  return (
    <>
      <div
        className="border-l-2 flex flex-col justify-center pl-10 w-[25vw]"
        style={{ height: "100%" }}
      >
        {/* Title + Toggle */}
        <div className="flex items-center justify-between mx-6 mb-2">
          <h1 className="text-3xl font-bold">Preview</h1>
          {isSubmitActive && (
            <button
              onClick={() => {
                // setIsSubmitActive(false);
                setSubmitPOpup(true);
              }}
              className="text-sm px-4 py-2 rounded-md text-black bg-white border shadow-md font-semibold transition hover:bg-gray-100 active:scale-95 active:bg-gray-200"
            >
              Submit Changes
            </button>
          )}

          {/* {isEdit ? (
          <button
            onClick={() => setIsActive(false)}
            className="text-sm px-4 py-2 rounded-md text-black bg-white border shadow-md font-semibold transition hover:bg-gray-100 active:scale-95 active:bg-gray-200"
          >
            Save Changes
          </button>
        ) : (
          <Link
            onClick={() => setIsEdit(true)}
            className="text-sm px-4 py-2 rounded-md text-black bg-white border shadow-md font-semibold transition hover:bg-gray-100 active:scale-95 active:bg-gray-200"
            to="/project/edit-screen-config"
            state={{ projectId: 42 }}
          >
            Edit Screen
          </Link>
        )} */}
        </div>

        {/* Phone Preview */}
        <div className="flex justify-center p-4">
          {android ? (
            <div className="relative w-full max-w-[393px] h-[48rem] aspect-[393/820] bg-black rounded-[2rem] shadow-2xl p-[10px]">
              <div className="relative flex flex-col w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full z-10 shadow-inner" />
                <div className={`${theme} bg-secondary`}>
                  <Header1 header={currentView?.current_config.header} />
                  <div className="flex-1 overflow-y-auto hide-scrollbar mt-0 mb-1">
                    <img
                      src={currentView?.current_config.screen.image}
                      alt="home"
                      className="w-full p-0"
                    />
                  </div>
                  <div className="bg-secondary bottom-4">
                    {currentView?.current_config.bottomtab.isActive && (
                      <BottomTab1 />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative w-full max-w-[393px] h-[48rem] aspect-[393/840] bg-black rounded-[3rem] shadow-2xl p-[10px]">
              <div className="relative flex flex-col w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />
                <div className={`${theme} bg-secondary`}>
                  <Header1 header={currentView?.current_config.header} />
                  <div className="flex-1 overflow-y-auto hide-scrollbar mt-0 mb-1">
                    <img
                      src={currentView?.current_config.screen.image}
                      alt="home"
                      className="w-full p-0"
                    />
                  </div>
                  <div className="bg-secondary bottom-4">
                    {currentView?.current_config.bottomtab.isActive && (
                      <BottomTab1 />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Switch device button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setAndroid((prev) => !prev)}
            className="text-sm px-4 py-3 rounded-md bg-black text-white font-semibold transition"
          >
            {!android ? "Switch to Android" : "Switch to iPhone"}
          </button>
        </div>
      </div>
      {submitPopup && (
        <CustomizePopUp setPOpUp={setSubmitPOpup}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-1/2 h-fit rounded-2xl shadow-lg bg-primary p-6 mb-14 text-white"
          >
            {/* <button
              onClick={() => setSubmitPOpup(false)}
              className="absolute top-4 right-4 text-2xl text-red-500 hover:text-red-600 transition-colors"
            >
              <RxCross2 />
            </button> */}
            {/* <SubmitConfiguration
              setSubmitPOpup={setSubmitPOpup}
              setIsSubmitActive={setIsSubmitActive}
            /> */}
          </div>
        </CustomizePopUp>
      )}
    </>
  );
}

export default PreviewComponent;
