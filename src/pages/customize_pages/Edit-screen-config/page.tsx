
import { useEffect, useState } from "react";
import UiConfigSidebar from "../../../components/module/project_component/ConfigComponents/ui/UiConfigSidebar";
import PreviewComponent from "../../../components/module/project_component/ConfigComponents/ui/PreviewComponent";
import ScreenConfigdata from "../../../data/CustomizeData/ScreenConfig.json";
import { useSaveChanges } from "../../../context/ui_context/SaveChanges";
import {
  ScreenConfigInterface,
  CurrentConfig,
} from "../../../data/interface/data.interface";
import Navbar from "../../../components/common_component/Navbar";
import Screens from "../../../components/module/project_component/ConfigComponents/ui/Screens";
import AdditionalConfig from "../../../components/module/project_component/ConfigComponents/ui/AdditionalConfig";
import { useDraftScreen } from "../../../context/ui_context/DraftScreenContext";
import { useMainScreenData } from "../../../context/ui_context/mainScreenContext";
// import { useMainScreenData } from "../../../context/ui_context/mainScreenContext";
import { RxCross2 } from "react-icons/rx";
import { Link, Links, useLocation } from "react-router-dom";

import CustomizePopUp from "../../../components/module/project_component/ConfigComponents/common/CustomizePopUp";
import SubmitConfiguration from "../../../components/module/project_component/ConfigComponents/common/SubmitConfiguration";
import { IoArrowBack } from "react-icons/io5";

enum detail {
  DRAFT = "draftChanges",
  SAVE = "saveChanges",
  DISCART = "discartChanges",
}
export interface currentViewInterface {
  screenName: string;
  current_config: CurrentConfig;
}

function Page() {
  const [element, setElement] = useState(ScreenConfigdata[0].key);
  const [popUp, setPOpUp] = useState(false);
  const [popUp2, setPOpUp2] = useState(false);
  const [ispopUpdata, setIsPOpUpdata] = useState(false);
  const [isEdit, setIsEdit] = useState(true);
  const [isSubmitActive, setIsSubmitActive] = useState(false);
  const [tab, setTab] = useState("screen");
  const [display, setDisplay] = useState<JSX.Element | null>(null);

  const { isActive, setIsActive } = useSaveChanges();
  const { mainscreenData } = useMainScreenData();
  const { drafts, removeDraft } = useDraftScreen();
  // const { mainscreenData } = useMainScreenData();
  // const { drafts, removeDraft } = useDraftScreen();
  const location = useLocation();
  const { type } = location.state || {};
  console.log(type);
  const [currentView, setCurrentView] = useState<
    currentViewInterface | undefined
  >();
  console.log(setIsEdit);
  console.log(setIsEdit);

  useEffect(() => {
    const draft = drafts.find((d) => d.screenName === element);

    if (draft) {
      console.log("Setting from drafts:", draft);

      setCurrentView({
        screenName: draft.screenName,
        current_config: draft.draftScreen, // or whatever field holds config
      });
    } else {
      if (!mainscreenData || !Array.isArray(mainscreenData)) return;

      const found = mainscreenData.find(
        (item: any) => item.screenName === element
      );

      if (found) {
        console.log("Setting from mainscreenData:", found);

        setCurrentView({
          screenName: found.screenName,
          current_config: found.current_config,
        });
      }
    }
  }, [element, drafts, mainscreenData]);

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
    const allowNavigation = { current: false };
    const hasPushedState = { current: false };

    const handlePopState = (event: PopStateEvent) => {
      console.log(event);

      if (!isActive) return;

      if (allowNavigation.current) {
        allowNavigation.current = false;
        return;
      }

      setPOpUp(true);

      if (!hasPushedState.current) {
        window.history.pushState(null, "", window.location.href);
        hasPushedState.current = true;
      }
    };

    if (isActive && !hasPushedState.current) {
      window.history.pushState(null, "", window.location.href);
      hasPushedState.current = true;
    }

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isActive]);

  // const handleSaveChanges = () => {
  //   const draft = drafts.find((d) => d.screenName === element);
  //   const latestConfig = draft?.draftScreen || screenConfig.current_confi;
  // const handleSaveChanges = () => {
  //   const draft = drafts.find((d) => d.screenName === element);
  //   const latestConfig = draft?.draftScreen || screenConfig.current_confi;

  //   if (!latestConfig) {
  //     console.error("No valid config found for:", element);
  //     return;
  //   }
  //   if (!latestConfig) {
  //     console.error("No valid config found for:", element);
  //     return;
  //   }

  //   setMainScreenData((prev) => {
  //     const exists = prev.some((item) => item.screenName === element);
  //     if (!exists) {
  //       console.warn(`Screen "${element}" not found in mainScreenData.`);
  //       return prev;
  //     }
  //   setMainScreenData((prev) => {
  //     const exists = prev.some((item) => item.screenName === element);
  //     if (!exists) {
  //       console.warn(`Screen "${element}" not found in mainScreenData.`);
  //       return prev;
  //     }

  //     const updated = prev.map((item) =>
  //       item.screenName === element
  //         ? { ...item, current_config: latestConfig }
  //         : item
  //     );
  //     const updated = prev.map((item) =>
  //       item.screenName === element
  //         ? { ...item, current_config: latestConfig }
  //         : item
  //     );

  //     console.log("✅ Updated mainScreenData:", updated);
  //     return updated;
  //   });
  //     console.log("✅ Updated mainScreenData:", updated);
  //     return updated;
  //   });

  //   removeDraft(element);
  //   setPOpUp(false);
  //   setIsActive(false);
  // setIsSubmitActive(true);
  // };

  const handleSaveDraft = () => {
    setPOpUp(false);
    setIsSubmitActive(true);
  };

  const handleCancel = () => {
    removeDraft(element);
    setPOpUp(false);
    setIsActive(false);
  };

  const handleClick = (value: detail) => {
    setPOpUp2(true);

    if (value === detail.SAVE) {
      setDisplay(
        <>
          <SubmitConfiguration
            // setSubmitPOpup={setSubmitPOpup}
            handleSave={handleSaveDraft}
            setIsSubmitActive={setIsSubmitActive}
            setPOpUp2={setPOpUp2}
            handleCancel={handleCancel}
          />

          <button
            onClick={() => setPOpUp2(false)}
            className="absolute top-1 right-1 text-xl text-red-500"
          >
            <RxCross2 />
          </button>
        </>
      );
    } else if (value === detail.DRAFT) {
      setDisplay(
        <>
          <h1 className="text-xl text-black font-bold mb-10 px-1">
            Are you sure you want to save this as a draft?
          </h1>
          <button
            onClick={() => setPOpUp2(false)}
            className="absolute top-1 right-1 text-xl text-red-500"
          >
            <RxCross2 />
          </button>
          <div className="flex justify-end gap-4 mt-6">
            <button
              onClick={() => {
                handleSaveDraft();
                setPOpUp2(false);
              }}
              className="px-8 py-2 rounded-lg bg-black text-primary font-semibold hover:bg-opacity-90 shadow-md transition-all"
            >
              Sure
            </button>
            <button
              onClick={() => {
                handleCancel();
                setPOpUp2(false);
              }}
              className="px-4 py-2 rounded-lg border text-black border-black hover:bg-white hover:text-primary transition-all"
            >
              Cancel
            </button>
          </div>
        </>
      );
    } else if (value === detail.DISCART) {
      setDisplay(
        <>
          <h1 className="text-xl text-black font-bold mb-10 px-1">
            Are you sure you want to discard your changes?
          </h1>
          <button
            onClick={() => setPOpUp2(false)}
            className="absolute top-1 right-1 text-xl text-red-500"
          >
            <RxCross2 />
          </button>
          <div className="flex justify-end gap-4 mt-6">
            <button
              onClick={() => {
                handleCancel();
                setPOpUp2(false);
              }}
              className="px-8 py-2 rounded-lg bg-black text-primary font-semibold hover:bg-opacity-90 shadow-md transition-all"
            >
              Sure
            </button>
            <button
              onClick={() => setPOpUp2(false)}
              className="px-4 py-2 rounded-lg border text-black border-black hover:bg-white hover:text-primary transition-all"
            >
              Cancel
            </button>
          </div>
        </>
      );
    }
  };

  // useEffect(() => {
  //   if (isActive) {
  //     setIsSubmitActive(false);
  //   }
  // }, [isActive]);

  return (
    <div className="w-full relative h-screen overflow-y-scroll hide-scrollbar px-5">
      <div
        className="absolute z-50 flex items-center gap-2 mt-6 cursor-pointer 
  text-gray-600 hover:text-gray-900 transition"
      >
        <Link to={"/project/ui-config"}>
          {" "}
          <IoArrowBack className="text-xl" />
        </Link>

        <span className="text-lg font-medium">Back to Project</span>
      </div>

      <Navbar />
      <div className="flex h-[85vh] mt-24">
        <UiConfigSidebar
          element={element}
          setElement={setElement}
          ispopUpdata={ispopUpdata}
          setIsPOpUpdata={setIsPOpUpdata}
          setPOpUp={setPOpUp}
          popUp={popUp}
          isEdit={isEdit}
        />

        <div className="w-2/3 relative overflow-y-auto hide-scrollbar overflow-x-hidden mb-0 ml-14 flex flex-col items-center mt-1 border-l ">
          <div className="w-full mt-2 pb-2 flex justify-between gap-6 border-b-2 px-4">
            {/* <div>
              <h1 className="text text-2xl">{type}</h1>
            </div> */}
            <div className="flex gap-4">
              <button
                onClick={() => setTab("screen")}
                className={`text-xl ${tab === "screen" && "font-bold"}`}
              >
                Screen
              </button>
              <button
                onClick={() => setTab("AdditionalConfig")}
                className={`text-xl ${
                  tab === "AdditionalConfig" && "font-bold"
                }`}
              >
                Additional Config
              </button>
            </div>
            <div className="flex gap-4">
              {(isSubmitActive || drafts.length > 0) && !isActive && (
                <>
                  {" "}
                  <button
                    onClick={() => handleClick(detail.DISCART)}
                    className="px-6 py-2 rounded-lg border text-black border-black hover:bg-white hover:text-primary transition-all"
                  >
                    Discard
                  </button>
                  <Link
                    // onClick={() => Navigate(to="/project/configuration/review")}
                    to="/project/configuration/review"
                    className="px-6 py-2 rounded-lg bg-black text-white font-semibold hover:bg-opacity-90 shadow-md transition-all"
                  >
                    Save Draft
                  </Link>
                </>
              )}
            </div>
          </div>

          {tab === "screen" ? (
            <Screens
              // currentView={currentView}
              // setCurrentView={setCurrentView}
              screenConfig={screenConfig}
              setscreenConfig={setscreenConfig}
            />
          ) : (
            <AdditionalConfig
              screenConfig={screenConfig}
              setscreenConfig={setscreenConfig}
            />
          )}

          {drafts.find((item) => item.screenName === element && isActive) && (
            <div className="absolute bottom-0 w-full mb-0 flex justify-end gap-4 px-8">
              <button
                onClick={() => handleClick(detail.DISCART)}
                className="px-6 py-2 rounded-lg border text-black border-black hover:bg-white hover:text-primary transition-all"
              >
                Discard
              </button>

              <button
                onClick={() => handleClick(detail.SAVE)}
                className="px-6 py-2 rounded-lg bg-black text-white font-semibold hover:bg-opacity-90 shadow-md transition-all"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
        {currentView && (
          <PreviewComponent
            currentView={currentView}
            // isEdit={isEdit}
            // setIsEdit={setIsEdit}
            // isEdit={isEdit}
            // setIsEdit={setIsEdit}
            isSubmitActive={isSubmitActive}
            // setIsSubmitActive={setIsSubmitActive}
            // setIsSubmitActive={setIsSubmitActive}
          />
        )}
      </div>

      {popUp && isActive && (
        <CustomizePopUp setPOpUp={setPOpUp}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-1/4 h-fit rounded-2xl shadow-lg bg-primary p-6 mb-14 text-white"
          >
            {/* <button
              onClick={() => setPOpUp(false)}
              className="absolute top-1 right-1 text-xl text-red-500"
            >
              <RxCross2 />
            </button> */}
            <h1 className="text-xl text-black font-bold mb-10 px-1">
              Make sure to save your changes
            </h1>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={handleCancel}
                className="px-4 py-2 rounded-lg border text-black border-black hover:bg-white hover:text-primary transition-all"
              >
                Discard
              </button>
              <button
                onClick={handleSaveDraft}
                className="px-4 py-2 rounded-lg bg-black text-primary font-semibold hover:bg-opacity-90 shadow-md transition-all"
              >
                Save Changes
              </button>
            </div>
          </div>
        </CustomizePopUp>
      )}

      {popUp2 && (
        <CustomizePopUp setPOpUp={setPOpUp2}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative w-2/3  h-fit rounded-2xl shadow-lg bg-primary p-6 mb-14 text-white`}
          >
            {display}
          </div>
        </CustomizePopUp>
      )}
    </div>
  );
}

export default Page;
