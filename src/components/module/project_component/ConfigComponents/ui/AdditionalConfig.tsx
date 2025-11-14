import { useEffect, useState } from "react";
import { ScreenConfigInterface } from "../../../../../data/interface/data.interface";
import { useSaveChanges } from "../../../../../context/ui_context/SaveChanges";
import { useDraftScreen } from "../../../../../context/ui_context/DraftScreenContext";

type UiConfigSidebarProps = {
  screenConfig: ScreenConfigInterface;
  setscreenConfig: React.Dispatch<React.SetStateAction<ScreenConfigInterface>>;
};

function AdditionalConfig({
  screenConfig,
  setscreenConfig,
}: UiConfigSidebarProps) {
  const { setIsActive } = useSaveChanges();
  const { drafts, addDraft, updateDraft } = useDraftScreen();

  // ✅ Check if there is a draft for this screen
  const currentDraft = drafts.find((d) => d.screenName === screenConfig.key);
  const effectiveConfig = currentDraft
    ? { ...screenConfig, current_confi: currentDraft.draftScreen }
    : screenConfig;

  // local state for common text input
  const [commonText, setCommonText] = useState(
    effectiveConfig.current_confi.header?.center?.text?.value || ""
  );

  // Update local state when config changes
  useEffect(() => {
    const header = effectiveConfig.current_confi.header;
    let activeText =
      header?.lefticons?.text?.value ||
      header?.center?.text?.value ||
      header?.righticons?.text?.value ||
      "";
    setCommonText(activeText);
  }, [effectiveConfig]);

  // Helper to update both normal config and draft
  const updateConfig = (
    newCurrentConfig: ScreenConfigInterface["current_confi"]
  ) => {
    setscreenConfig((prev) => ({ ...prev, current_confi: newCurrentConfig }));

    if (currentDraft) {
      updateDraft(screenConfig.key, {
        screenName: screenConfig.key,
        draftScreen: newCurrentConfig,
      });
    } else {
      addDraft({
        screenName: screenConfig.key,
        draftScreen: newCurrentConfig,
      });
    }

    setIsActive(true);
  };

  // ✅ Toggle left icon
  const handleLeftIcon = (iconName: string) => {
    const newHeader = { ...effectiveConfig.current_confi.header! };
    newHeader.lefticons!.icons = newHeader.lefticons!.icons?.map((icon) =>
      icon.name === iconName ? { ...icon, isActive: !icon.isActive } : icon
    );
    updateConfig({ ...effectiveConfig.current_confi, header: newHeader });
  };

  // ✅ Toggle right icon
  const handleRightIcon = (iconName: string) => {
    const newHeader = { ...effectiveConfig.current_confi.header! };
    newHeader.righticons!.icons = newHeader.righticons!.icons?.map((icon) =>
      icon.name === iconName ? { ...icon, isActive: !icon.isActive } : icon
    );
    updateConfig({ ...effectiveConfig.current_confi, header: newHeader });
  };

  // ✅ Toggle header text (only one active at a time)
  const handleTextToggle = (
    position: "lefticons" | "righticons" | "center"
  ) => {
    const newHeader = { ...effectiveConfig.current_confi.header! };
    if (newHeader.lefticons?.text) newHeader.lefticons.text.isActive = false;
    if (newHeader.righticons?.text) newHeader.righticons.text.isActive = false;
    if (newHeader.center?.text) newHeader.center.text.isActive = false;

    if (newHeader[position]?.text) newHeader[position].text.isActive = true;

    updateConfig({ ...effectiveConfig.current_confi, header: newHeader });
  };

  // ✅ Update common header text
  const handleCommonTextChange = (value: string) => {
    if (value.length > 100) return;
    setCommonText(value);

    const newHeader = { ...effectiveConfig.current_confi.header! };
    if (newHeader.lefticons?.text) newHeader.lefticons.text.value = value;
    if (newHeader.center?.text) newHeader.center.text.value = value;
    if (newHeader.righticons?.text) newHeader.righticons.text.value = value;

    updateConfig({ ...effectiveConfig.current_confi, header: newHeader });
  };

  // ✅ Toggle bottom tab
  const handleBottomTabToggle = () => {
    const newBottomTab = {
      ...effectiveConfig.current_confi.bottomtab!,
      isActive: !effectiveConfig.current_confi.bottomtab?.isActive,
    };
    updateConfig({ ...effectiveConfig.current_confi, bottomtab: newBottomTab });
  };

  return (
    <div className="w-full p-20 space-y-6">
      {/* HEADER CONFIG */}
      <div className="bg-primary rounded-lg w-full p-4">
        <h1 className="text-xl font-semibold border-b-2 mb-4 pb-1">
          Header Tab Config
        </h1>
        <div className="flex justify-between gap-6">
          {/* LEFT ICONS */}
          <div>
            <h2 className="text-lg mb-2">Left Icons</h2>
            {effectiveConfig.current_confi.header?.lefticons?.icons?.map(
              (icon, idx) => (
                <label key={idx} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={icon.isActive}
                    onChange={() => handleLeftIcon(icon.name)}
                    className="h-4 w-4"
                  />
                  <span>{icon.name}</span>
                </label>
              )
            )}
            {effectiveConfig.current_confi.header?.lefticons?.text && (
              <label className="flex items-center space-x-2 mt-2">
                <input
                  type="checkbox"
                  checked={
                    effectiveConfig.current_confi.header.lefticons.text.isActive
                  }
                  onChange={() => handleTextToggle("lefticons")}
                  className="h-4 w-4"
                />
                <span>Header title</span>
              </label>
            )}
          </div>

          {/* CENTER */}
          <div>
            <h2 className="text-lg mb-2">Center Text</h2>
            {effectiveConfig.current_confi.header?.center?.text && (
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={
                    effectiveConfig.current_confi.header.center.text.isActive
                  }
                  onChange={() => handleTextToggle("center")}
                  className="h-4 w-4"
                />
                <span>Header title</span>
              </label>
            )}
          </div>

          {/* RIGHT ICONS */}
          <div>
            <h2 className="text-lg mb-2">Right Icons</h2>
            {effectiveConfig.current_confi.header?.righticons?.icons?.map(
              (icon, idx) => (
                <label key={idx} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={icon.isActive}
                    onChange={() => handleRightIcon(icon.name)}
                    className="h-4 w-4"
                  />
                  <span>{icon.name}</span>
                </label>
              )
            )}
            {effectiveConfig.current_confi.header?.righticons?.text && (
              <label className="flex items-center space-x-2 mt-2">
                <input
                  type="checkbox"
                  checked={
                    effectiveConfig.current_confi.header.righticons.text
                      .isActive
                  }
                  onChange={() => handleTextToggle("righticons")}
                  className="h-4 w-4"
                />
                <span>Header title</span>
              </label>
            )}
          </div>
        </div>
      </div>

      {/* HEADER TITLE INPUT */}
      <div className="bg-primary rounded-lg w-full p-4">
        <div className="mb-4">
          <h1 className="text-xl font-semibold border-b-2 mb-4 pb-1">
            Header title
          </h1>
          <input
            type="text"
            value={commonText}
            onChange={(e) => handleCommonTextChange(e.target.value)}
            placeholder="Enter text (max 100 chars)"
            className="rounded border px-2 py-1 w-full"
          />
        </div>
      </div>

      {/* BOTTOM TAB CONFIG */}
      <div className="bg-primary rounded-lg w-full p-4">
        <h1 className="text-xl font-semibold border-b-2 mb-4 pb-1">
          Bottom Tab Config
        </h1>
        {effectiveConfig.current_confi.bottomtab && (
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={effectiveConfig.current_confi.bottomtab.isActive}
              onChange={handleBottomTabToggle}
              className="h-4 w-4"
            />
            {/* <span>{effectiveConfig.current_confi.bottomtab.key}</span> */}
          </label>
        )}
      </div>
    </div>
  );
}

export default AdditionalConfig;
