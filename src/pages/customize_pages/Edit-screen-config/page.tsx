import { useEffect, useMemo, useState } from "react";
import UiConfigSidebar from "../../../components/module/project_component/ConfigComponents/ui/UiConfigSidebar";
import PreviewComponent from "../../../components/module/project_component/ConfigComponents/ui/PreviewComponent";
import ScreenConfigdata from "../../../data/CustomizeData/ScreenConfig.json";
import { useSaveChanges } from "../../../context/ui_context/SaveChanges";
import { ScreenConfigInterface } from "../../../data/interface/data.interface";
import Navbar from "../../../components/common_component/Navbar";
import Screens from "../../../components/module/project_component/ConfigComponents/ui/Screens";
import AdditionalConfig from "../../../components/module/project_component/ConfigComponents/ui/AdditionalConfig";
import { useDraftScreen } from "../../../context/ui_context/DraftScreenContext";
import { useMainScreenData } from "../../../context/ui_context/mainScreenContext";
// import { MainScreenDataConfig } from "../../../context/ui_context/mainScreenContext";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from "react-router-dom";
import { ScreenType } from "../../../../enum/AccessType.enum";

function Page() {
  const [element, setElement] = useState(ScreenConfigdata[0].key);
  const [popUp, setPOpUp] = useState(false);
  const [ispopUpdata, setIsPOpUpdata] = useState(false);
  const [isEdit, setIsEdit] = useState(true);
  const [tab, setTab] = useState("screen");

  const { isActive, setIsActive } = useSaveChanges();
  const { setMainScreenData } = useMainScreenData();
  const { drafts, removeDraft } = useDraftScreen();
  const location = useLocation();
  const { type } = location.state || {};
  console.log(type);

  const storedData = localStorage.getItem("mainscreenData");

  const [screenConfig, setscreenConfig] = useState<ScreenConfigInterface>(
    ScreenConfigdata.find(
      (item) => item.key === element
    ) as ScreenConfigInterface
  );

  const effectiveScreenConfig = useMemo(() => {
    try {
      let draft: any = null;

      // if screen type is "draft"
      if (type === ScreenType.DRAFT) {
        draft = drafts.find(
          (d) =>
            d.screenName === screenConfig.key ||
            d.screenName === screenConfig.key
        );

        // if draft exists -> use it; else -> just return screenConfig as-is
        return draft
          ? { ...screenConfig, current_config: draft.draftScreen }
          : screenConfig;
      }

      // if screen type is MAIN and storedData exists
      if (type === ScreenType.MAIN && storedData) {
        const parsed = JSON.parse(storedData);
        if (Array.isArray(parsed)) {
          draft = parsed.find(
            (d: any) =>
              d.screenName === screenConfig.key ||
              d.screenName === screenConfig.key
          );
        }

        return draft
          ? { ...screenConfig, current_config: draft.draftScreen }
          : screenConfig;
      }

      // default case: just use screenConfig as-is
      return screenConfig;
    } catch (err) {
      console.error("Error computing effectiveScreenConfig:", err);
      return screenConfig;
    }
  }, [type, storedData, drafts, screenConfig]);

  //  const effectiveScreenConfig = useMemo(() => {
  //   try {
  //     let draft: any = null;

  //     if (type === ScreenType.MAIN && storedData) {
  //       const parsedData = JSON.parse(storedData);
  //       if (Array.isArray(parsedData)) {
  //         draft = parsedData.find(
  //           (d: any) => d.screenName === screenConfig.key || d.screenName === screenConfig.key
  //         );
  //       }
  //     } else {
  //       draft = drafts.find(
  //         (d) => d.screenName === screenConfig.key || d.screenName === screenConfig.key
  //       );
  //     }

  //     return draft
  //       ? { ...screenConfig, current_config: draft.draftScreen }
  //       : screenConfig;
  //   } catch (err) {
  //     console.error("Error parsing storedData or computing effectiveScreenConfig:", err);
  //     return screenConfig;
  //   }
  // }, [type, storedData, drafts, screenConfig]);

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

  const handleSaveChanges = () => {
    // 1️⃣ Safely find the draft for the current screen
    const draft = drafts.find((d) => d.screenName === element);
    const latestConfig = draft?.draftScreen || screenConfig.current_confi;

    if (!latestConfig) {
      console.error("No valid config found for:", element);
      return;
    }

    // 2️⃣ Use a stable update function
    setMainScreenData((prev) => {
      // Check if screen exists
      const exists = prev.some((item) => item.screenName === element);
      if (!exists) {
        console.warn(`Screen "${element}" not found in mainScreenData.`);
        return prev;
      }

      // Replace only that one object
      const updated = prev.map((item) =>
        item.screenName === element
          ? { ...item, current_config: latestConfig }
          : item
      );

      console.log("✅ Updated mainScreenData:", updated);
      return updated;
    });

    // 3️⃣ Run after updating state
    removeDraft(element);
    setPOpUp(false);
    setIsActive(false);
  };

  const handleSaveDraft = () => {
    setPOpUp(false);
    setIsActive(false);
  };

  const handleCancel = () => {
    removeDraft(element);
    setPOpUp(false);
    setIsActive(false);
  };

  return (
    <div className="w-full h-screen overflow-y-scroll hide-scrollbar px-5">
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

        <div className="w-2/3 relative  overflow-y-auto hide-scrollbar overflow-x-hidden mb-0 ml-14 flex flex-col items-center mt-1 border-l ">
          <div className="w-full mt-2 pb-2 flex justify-between gap-6 border-b-2 px-4">
            <div>
              <h1 className="text text-2xl">{type}</h1>
            </div>
            <div className="flex gap-4">
              {" "}
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
          </div>

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
          <div className="absolute bottom-0  w-full mb-0 flex justify-end px-8">
            <button
              onClick={handleSaveChanges}
              className="px-6 py-2 rounded-lg bg-black text-white font-semibold hover:bg-opacity-90 shadow-md transition-all"
            >
              Save Changes
            </button>
          </div>
        </div>

        <PreviewComponent
          currentConfig={effectiveScreenConfig.current_confi}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      </div>

      {popUp && isActive && (
        <div
          onClick={() => setPOpUp(false)}
          className="fixed inset-0 bg-black bg-opacity-55 flex items-center justify-center z-50 mt-[-5rem]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-1/4 h-fit rounded-2xl shadow-lg bg-primary p-6 mb-14 text-white"
          >
            <button
              onClick={() => setPOpUp(false)}
              className="absolute top-1 right-1 text-xl text-red-500"
            >
              <RxCross2 />
            </button>
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
                Save Draft
              </button>
              <button
                onClick={handleSaveChanges}
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

export default Page;
