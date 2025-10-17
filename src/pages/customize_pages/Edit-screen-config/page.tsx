import React, { useEffect, useState } from "react";
import UiConfigSidebar from "../../../components/module/project_component/ConfigComponents/ui/UiConfigSidebar";
import Ui from "../../../components/module/project_component/ConfigComponents/ui/Ui";
import PreviewComponent from "../../../components/module/project_component/ConfigComponents/ui/PreviewComponent";
import ScreenConfigdata from "../../../data/CustomizeData/ScreenConfig.json";
// import { useSaveChanges } from "../../../context/ui_context/SaveChanges";
import { useSaveChanges } from "../../../context/ui_context/SaveChanges";
import { ScreenConfigInterface } from "../../../data/interface/data.interface";
import Navbar from "../../../components/common_component/Navbar";
import { useDraftScreenChanges } from "../../../context/ui_context/DraftScreenContext";

function page() {
  const [element, setElement] = useState(ScreenConfigdata[0].key);
  console.log(ScreenConfigdata[0].key);
  const [popUp, setPOpUp] = useState(false);
  const [ispopUpdata, setIsPOpUpdata] = useState(false);
  const [isEdit, setIsEdit] = useState(true);
  const { setIsDraft } = useDraftScreenChanges();

  // const changes = false;
  const { isActive, setIsActive } = useSaveChanges();

  const [screenConfig, setscreenConfig] = useState<ScreenConfigInterface>(
    ScreenConfigdata.find(
      (item) => item.key === element
    ) as ScreenConfigInterface
  );

  useEffect(() => {
    const screenData = ScreenConfigdata.find((item) => item.key === element);
    if (screenData) {
      setscreenConfig(screenData as ScreenConfigInterface);
    }
  }, [element]);

  useEffect(() => {
    if (isActive) {
      setPOpUp(true);
    }
  }, [element]);

  useEffect(() => {
    const allowNavigation = { current: false }; // tracks if user confirmed leaving
    const hasPushedState = { current: false }; // push dummy state only once

    const handlePopState = (event: PopStateEvent) => {
      if (!isActive) {
        // No unsaved changes → allow normal back/forward
        return;
      }

      if (allowNavigation.current) {
        // Navigation confirmed by user → allow it
        allowNavigation.current = false;
        return;
      }

      // Unsaved changes → show popup and block navigation
      setPOpUp(true);

      // Only push dummy state once to prevent infinite loop
      if (!hasPushedState.current) {
        window.history.pushState(null, "", window.location.href);
        hasPushedState.current = true;
      }
    };

    // Push initial dummy state only once
    if (isActive && !hasPushedState.current) {
      window.history.pushState(null, "", window.location.href);
      hasPushedState.current = true;
    }

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isActive, setPOpUp]);

  return (
    <div className="w-full h-screen overflow-y-scroll hide-scrollbar px-5 ">
      <Navbar />
      <div className=" flex  h-[85vh] mt-24 ">
        <UiConfigSidebar
          element={element}
          setElement={setElement}
          ispopUpdata={ispopUpdata}
          setIsPOpUpdata={setIsPOpUpdata}
          setPOpUp={setPOpUp}
          popUp={popUp}
          isEdit={isEdit}
        />
        {/* <CustomizeSidebar active="xfbhfh" /> */}

        <Ui
          screenConfig={screenConfig}
          setscreenConfig={setscreenConfig}
          isEdit={isEdit}
        />

        {/* Remove 'main' prop if PreviewComponent does not accept it */}

        <PreviewComponent
          screenConfig={screenConfig}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      </div>
      {popUp && isActive && (
        <div
          onClick={() => {
            setPOpUp(false);
            // setOrgName((prev) => ({
            //   ...prev,
            //   name: orgDetails?.data.namsddse || "",
            // }));
            // setOrgName(orgDetails?.data.name);
          }}
          className="fixed inset-0 bg-black bg-opacity-55 flex items-center justify-center z-50 mt-[-5rem]"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              // setIsDraft(true);
            }}
            className="w-1/4 h-fit rounded-2xl shadow-lg bg-primary p-6 mb-14 text-white"
          >
            <h1 className="text-xl text-black font-bold mb-10 px-1">
              Make sure to save your changes
            </h1>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => {
                  setIsPOpUpdata(true);
                  setIsActive(false);
                  setPOpUp(false);
                  // setIsDraft(true);
                }}
                className="px-4 py-2 rounded-lg border text-black border-black hover:bg-white hover:text-primary transition-all"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsPOpUpdata(true);
                  setIsActive(false);
                  setPOpUp(false);
                  setIsDraft(true);
                }}
                className="px-4 py-2 rounded-lg bg-black text-primary font-semibold hover:bg-opacity-90 shadow-md transition-all"
              >
                Save Draft
              </button>

              <button
                onClick={() => {
                  setIsPOpUpdata(true);
                  setIsActive(false);
                  setPOpUp(false);
                  setIsDraft(false);
                }}
                className="px-4 py-2 rounded-lg bg-black text-primary font-semibold hover:bg-opacity-90 shadow-md transition-all"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
