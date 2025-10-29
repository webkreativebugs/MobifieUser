import { useEffect, useMemo, useState } from "react";
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
import { RxCross2 } from "react-icons/rx";
import { useLocation } from "react-router-dom";
import { ScreenType } from "../../../../enum/AccessType.enum";
import CustomizePopUp from "../../../components/module/project_component/ConfigComponents/common/CustomizePopUp";
import SubmitConfiguration from "../../../components/module/project_component/ConfigComponents/common/SubmitConfiguration";

enum detail {
  DRAFT = "draftChanges",
  SAVE = "saveChanges",
  DISCART = "discartChanges",
}
interface CurrentScreen {
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
  const { setMainScreenData } = useMainScreenData();
  const { drafts, removeDraft } = useDraftScreen();
  const location = useLocation();
  const { type } = location.state || {};
  console.log(type);

  const storedData = localStorage.getItem("mainscreenData");

  const [currentScreen, setCurrentScreen] = useState<CurrentScreen | null>(
    null
  );

  useEffect(() => {
    if (!element) return;
    const storedData = localStorage.getItem("mainscreenData");

    if (!storedData) return;

    try {
      const parsed = JSON.parse(storedData);
      console.log(parsed);
      const found = parsed.find((item: any) => item.screenName === element);
      if (found) {
        setCurrentScreen(found);
      }
    } catch (err) {
      console.error("Failed to parse mainscreenData from localStorage", err);
    }
  }, [element]);

  if (!currentScreen) return null;

  const [screenConfig, setscreenConfig] = useState<ScreenConfigInterface>(
    ScreenConfigdata.find(
      (item) => item.key === element
    ) as ScreenConfigInterface
  );

  const effectiveScreenConfig = useMemo(() => {
    try {
      let draft: any = null;

      if (type === ScreenType.DRAFT) {
        draft = drafts.find(
          (d) =>
            d.screenName === screenConfig.key ||
            d.screenName === screenConfig.key
        );

        return draft
          ? { ...screenConfig, current_config: draft.draftScreen }
          : screenConfig;
      }

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

      return screenConfig;
    } catch (err) {
      console.error("Error computing effectiveScreenConfig:", err);
      return screenConfig;
    }
  }, [type, storedData, drafts, screenConfig]);

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
    const draft = drafts.find((d) => d.screenName === element);
    const latestConfig = draft?.draftScreen || screenConfig.current_confi;

    if (!latestConfig) {
      console.error("No valid config found for:", element);
      return;
    }

    setMainScreenData((prev) => {
      const exists = prev.some((item) => item.screenName === element);
      if (!exists) {
        console.warn(`Screen "${element}" not found in mainScreenData.`);
        return prev;
      }

      const updated = prev.map((item) =>
        item.screenName === element
          ? { ...item, current_config: latestConfig }
          : item
      );

      console.log("✅ Updated mainScreenData:", updated);
      return updated;
    });

    removeDraft(element);
    setPOpUp(false);
    setIsActive(false);
    setIsSubmitActive(true);
  };

  const handleSaveDraft = () => {
    setPOpUp(false);
    setIsActive(false);
    console.log(drafts);
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
          <h1 className="text-xl text-black font-bold mb-10 px-1">
            Once you submit, you won’t be able to retrieve your previous
            changes.
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
                handleSaveChanges();
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

        <div className="w-2/3 relative overflow-y-auto hide-scrollbar overflow-x-hidden mb-0 ml-14 flex flex-col items-center mt-1 border-l ">
          <div className="w-full mt-2 pb-2 flex justify-between gap-6 border-b-2 px-4">
            <div>
              <h1 className="text text-2xl">{type}</h1>
            </div>
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

          {drafts.find((item) => item.screenName === element) && (
            <div className="absolute bottom-0 w-full mb-0 flex justify-end gap-4 px-8">
              <button
                onClick={() => handleClick(detail.DISCART)}
                className="px-6 py-2 rounded-lg border text-black border-black hover:bg-white hover:text-primary transition-all"
              >
                Discard
              </button>
              <button
                onClick={() => handleClick(detail.DRAFT)}
                className="px-6 py-2 rounded-lg bg-black text-white font-semibold hover:bg-opacity-90 shadow-md transition-all"
              >
                Save Draft
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

        <PreviewComponent
          currentConfig={effectiveScreenConfig.current_confi}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          isSubmitActive={isSubmitActive}
          setIsSubmitActive={setIsSubmitActive}
        />
      </div>

      {popUp && isActive && (
        <CustomizePopUp setPOpUp={setPOpUp}>
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
        </CustomizePopUp>
      )}

      {popUp2 && (
        <CustomizePopUp setPOpUp={setPOpUp2}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-1/4 h-fit rounded-2xl shadow-lg bg-primary p-6 mb-14 text-white"
          >
            {display}
          </div>
        </CustomizePopUp>
      )}
    </div>
  );
}

export default Page;
