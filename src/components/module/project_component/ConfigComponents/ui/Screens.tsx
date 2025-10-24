import React from "react";
import { ScreenConfigInterface } from "../../../../../data/interface/data.interface";
import { useSaveChanges } from "../../../../../context/ui_context/SaveChanges";
import { useDraftScreen } from "../../../../../context/ui_context/DraftScreenContext";

type UiConfigSidebarProps = {
  screenConfig: ScreenConfigInterface;
  setscreenConfig: React.Dispatch<React.SetStateAction<ScreenConfigInterface>>;
};

function Screens({ screenConfig, setscreenConfig }: UiConfigSidebarProps) {
  const { isActive, setIsActive } = useSaveChanges();
  const { addDraft, updateDraft, drafts } = useDraftScreen();

  const addNewDesign = (newUrl: string) => {
    const updated = {
      ...screenConfig,
      current_confi: {
        ...screenConfig.current_confi,
        screen: {
          ...screenConfig.current_confi.screen,
          image: newUrl,
        },
      },
    };

    // 1️⃣ Update normal screenConfig
    setscreenConfig(updated);
    setIsActive(true);

    // 2️⃣ Update or add in drafts context using 'key' instead of 'title'
    const existing = drafts.find((d: any) => d.screenName === screenConfig.key);
    if (existing) {
      updateDraft(screenConfig.key, {
        screenName: screenConfig.key,
        draftScreen: updated.current_confi,
      });
    } else {
      addDraft({
        screenName: screenConfig.key,
        draftScreen: updated.current_confi,
      });
    }
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
            className="w-full block"
          >
            <img
              src={screenItem.image}
              alt=""
              className="w-full h-auto object-contain"
            />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Screens;
