import React from "react";
import {
  ScreenConfigInterface,
  CurrentConfig,
} from "../../../../../data/interface/data.interface";
import { useSaveChanges } from "../../../../../context/ui_context/SaveChanges";
import { useDraftScreen } from "../../../../../context/ui_context/DraftScreenContext";

interface currentViewInterface {
  screenName: string;
  current_config: CurrentConfig;
}

type UiConfigSidebarProps = {
  screenConfig: ScreenConfigInterface;
  setscreenConfig: React.Dispatch<React.SetStateAction<ScreenConfigInterface>>;
  // currentView: currentViewInterface;
  // setCurrentView: React.Dispatch<React.SetStateAction<currentViewInterface>>;
};

function Screens({
  // currentView,
  // setCurrentView,
  screenConfig,
  setscreenConfig,
}: UiConfigSidebarProps) {
  const { setIsActive } = useSaveChanges();
  const { addDraft, updateDraft, drafts } = useDraftScreen();
  // console.log(currentView);

  const currentDraft = drafts.find((d) => d.screenName === screenConfig.key);

  const effectiveConfig = currentDraft
    ? { ...screenConfig, current_confi: currentDraft.draftScreen }
    : screenConfig;

  const addNewDesign = (newUrl: string) => {
    if (newUrl === effectiveConfig.current_confi.screen.image) return;

    const updatedConfig: ScreenConfigInterface["current_confi"] = {
      ...effectiveConfig.current_confi,
      screen: {
        ...effectiveConfig.current_confi.screen,
        image: newUrl,
      },
    };

    setscreenConfig((prev) => ({
      ...prev,
      current_confi: updatedConfig,
    }));

    if (currentDraft) {
      updateDraft(screenConfig.key, {
        screenName: screenConfig.key,
        draftScreen: updatedConfig,
      });
    } else {
      addDraft({
        screenName: screenConfig.key,
        draftScreen: updatedConfig,
      });
    }

    setIsActive(true);
  };

  return (
    <div className="columns-3 gap-4 px-2 mt-16">
      {screenConfig.Screen.map((screenItem, idx) => (
        <div
          key={idx}
          className="mb-4 break-inside-avoid border p-2 pb-4 w-[15rem] max-h-[27rem] overflow-hidden rounded-lg bg-white shadow"
        >
          <button
            onClick={() => addNewDesign(screenItem.image)}
            className="w-full block hover:opacity-90 transition"
          >
            <img
              src={screenItem.image}
              alt={`screen-${idx}`}
              className="w-full h-auto object-contain"
            />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Screens;
