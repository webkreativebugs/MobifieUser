import { Dispatch, SetStateAction, useState } from "react";
import { useSaveChanges } from "../../../../../context/ui_context/SaveChanges";
import { ScreenConfigInterface } from "../../../../../data/interface/data.interface";

type UiConfigSidebarProps = {
  screenConfig: ScreenConfigInterface;
  setscreenConfig: Dispatch<SetStateAction<ScreenConfigInterface>>;
};

function AdditionalConfig({
  screenConfig,
  setscreenConfig,
}: UiConfigSidebarProps) {
  const { setIsActive } = useSaveChanges();

  // local state for the common text input
  const [commonText, setCommonText] = useState(
    screenConfig.current_confi.header?.center?.text?.value || ""
  );

  // toggle left icon
  const handleLeftIcon = (iconName: string) => {
    setscreenConfig((prev) => ({
      ...prev,
      current_confi: {
        ...prev.current_confi,
        header: {
          ...prev.current_confi.header!,
          lefticons: {
            ...prev.current_confi.header?.lefticons!,
            icons: prev.current_confi.header?.lefticons?.icons?.map((icon) =>
              icon.name === iconName
                ? { ...icon, isActive: !icon.isActive }
                : icon
            ),
          },
        },
      },
    }));
    setIsActive(true);
  };

  // toggle right icon
  const handleRightIcon = (iconName: string) => {
    setscreenConfig((prev) => ({
      ...prev,
      current_confi: {
        ...prev.current_confi,
        header: {
          ...prev.current_confi.header!,
          righticons: {
            ...prev.current_confi.header?.righticons!,
            icons: prev.current_confi.header?.righticons?.icons?.map((icon) =>
              icon.name === iconName
                ? { ...icon, isActive: !icon.isActive }
                : icon
            ),
          },
        },
      },
    }));
    setIsActive(true);
  };

  // toggle text (only one active at a time)
  const handleTextToggle = (
    position: "lefticons" | "righticons" | "center"
  ) => {
    setscreenConfig((prev) => {
      const newHeader = { ...prev.current_confi.header! };

      // deactivate all
      if (newHeader.lefticons?.text) newHeader.lefticons.text.isActive = false;
      if (newHeader.righticons?.text)
        newHeader.righticons.text.isActive = false;
      if (newHeader.center?.text) newHeader.center.text.isActive = false;

      // activate selected one
      if (newHeader[position]?.text) {
        newHeader[position]!.text!.isActive = true;
      }

      return {
        ...prev,
        current_confi: {
          ...prev.current_confi,
          header: newHeader,
        },
      };
    });

    setIsActive(true);
  };

  // update text value for all three at once
  const handleCommonTextChange = (value: string) => {
    if (value.length > 15) return; // ✅ max length
    setCommonText(value);

    setscreenConfig((prev) => {
      const newHeader = { ...prev.current_confi.header! };

      if (newHeader.lefticons?.text) newHeader.lefticons.text.value = value;
      if (newHeader.righticons?.text) newHeader.righticons.text.value = value;
      if (newHeader.center?.text) newHeader.center.text.value = value;

      return {
        ...prev,
        current_confi: {
          ...prev.current_confi,
          header: newHeader,
        },
      };
    });

    setIsActive(true);
  };

  // toggle bottom tab
  const handleBottomTabToggle = () => {
    setscreenConfig((prev) => ({
      ...prev,
      current_confi: {
        ...prev.current_confi,
        bottomtab: {
          ...prev.current_confi.bottomtab!,
          isActive: !prev.current_confi.bottomtab?.isActive,
        },
      },
    }));
    setIsActive(true);
  };

  return (
    <div className="w-full p-20 space-y-6">
      {/* HEADER CONFIG */}
      <div className="bg-primary rounded-lg w-full p-4">
        <h1 className="text-xl font-semibold border-b-2 mb-4 pb-1">
          Header Tab Config
        </h1>

        {/* 🔹 Common Input Field */}
        {/* <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Common Header Text
          </label>
          <input
            type="text"
            value={commonText}
            onChange={(e) => handleCommonTextChange(e.target.value)}
            placeholder="Enter text (applies to left, center, right)"
            className="rounded border px-2 py-1 w-full"
          />
        </div> */}

        <div className="flex justify-between gap-6">
          {/* LEFT ICONS */}
          <div>
            <h2 className="text-lg mb-2">Left Icons</h2>
            {screenConfig.current_confi.header?.lefticons?.icons?.map(
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
            <label className="flex items-center space-x-2 mt-2">
              <input
                type="checkbox"
                checked={
                  screenConfig.current_confi.header?.lefticons?.text?.isActive
                }
                onChange={() => handleTextToggle("lefticons")}
                className="h-4 w-4"
              />
              <span>Header title</span>
            </label>
          </div>

          {/* CENTER */}
          <div>
            <h2 className="text-lg mb-2">Center Text</h2>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={
                  screenConfig.current_confi.header?.center?.text?.isActive
                }
                onChange={() => handleTextToggle("center")}
                className="h-4 w-4"
              />
              <span>Header title</span>
            </label>
          </div>

          {/* RIGHT ICONS */}
          <div>
            <h2 className="text-lg mb-2">Right Icons</h2>
            {screenConfig.current_confi.header?.righticons?.icons?.map(
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
            <label className="flex items-center space-x-2 mt-2">
              <input
                type="checkbox"
                checked={
                  screenConfig.current_confi.header?.righticons?.text?.isActive
                }
                onChange={() => handleTextToggle("righticons")}
                className="h-4 w-4"
              />
              <span>Header title</span>
            </label>
          </div>
        </div>
      </div>
      {/* input text */}
      <div className="bg-primary rounded-lg w-full p-4">
        <div className="mb-4">
          <h1 className="text-xl font-semibold border-b-2 mb-4 pb-1">
            Header title
          </h1>
          <label className="block text-sm font-medium mb-1"></label>
          <input
            type="text"
            value={commonText}
            onChange={(e) => handleCommonTextChange(e.target.value)}
            placeholder="Enter text (applies to left, center, right)"
            className="rounded border px-2 py-1 w-full"
          />
        </div>
      </div>
      {/* BOTTOM TAB CONFIG */}
      <div className="bg-primary rounded-lg w-full p-4">
        <h1 className="text-xl font-semibold border-b-2 mb-4 pb-1">
          Bottom Tab Config
        </h1>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={screenConfig.current_confi.bottomtab?.isActive}
            onChange={handleBottomTabToggle}
            className="h-4 w-4"
          />
          <span>{screenConfig.current_confi.bottomtab?.title}</span>
        </label>
      </div>
    </div>
  );
}

export default AdditionalConfig;
