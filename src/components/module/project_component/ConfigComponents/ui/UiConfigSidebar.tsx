import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import UiCOmponent from "../../../../../data/CustomizeData/UiDropdown.json";
import ScreenConfig from "../../../../../data/CustomizeData/ScreenConfig.json";
import { useSaveChanges } from "../../../../../context/ui_context/SaveChanges";
import { themes } from "../../../../../data/ThemeSection";
import ThemePicker from "../../../../../components/module/org_component/theme_component/ThemePicker";
import { useTheme } from "../../../../../context/AppContext";

type UiConfigSidebarProps = {
  element: string;
  setElement: Dispatch<SetStateAction<string>>;
  ispopUpdata: boolean;
  setIsPOpUpdata: Dispatch<SetStateAction<boolean>>;
  setPOpUp: Dispatch<SetStateAction<boolean>>;
  popUp: boolean;
  isEdit: boolean;
};

function UiConfigSidebar({
  element,
  setElement,
  ispopUpdata,
  setIsPOpUpdata,
  setPOpUp,
  popUp,
  isEdit,
}: UiConfigSidebarProps) {
  console.log(element);
  const [tempElement, setTepElement] = useState<string>("");
  const { isActive, setIsActive } = useSaveChanges();
  const [themePopup, setThemePopup] = useState(false);
  const { theme, secondaryColor } = useTheme();

  const handleClick = (elem: string) => {
    setTepElement(elem);
    // console.log(isActive);
    if (isActive) {
      setPOpUp(true);
    }
  };

  useEffect(() => {
    if (!isActive && !popUp) {
      // setPOpUp(false);
      setElement(tempElement);
    }
  });
  return (
    <>
      <div
        className={`hidden xl:flex h-95vh w-72  flex-col  bg-primary rounded-md shadow-xl `}
      >
        <div className="  xl:flex xl:flex-col  overflow-auto hide-scrollbar   w-full    pb-10 h-full    ">
          <h1 className="text-xl font-semibold m-4 mb-6 px-1">Select Screen</h1>
          <div className="p-5 pt-0 w-full relative mt-5 ">
            {ScreenConfig.map((item, index) => (
              <p
                className={`text-lg  mb-4 cursor-pointer ${
                  item.key === element && "font-semibold"
                } ${item.key === "home" && element === "" && "font-semibold"}`}
                key={index}
                onClick={() => handleClick(item.key)}
              >
                {item.title}
              </p>
            ))}
          </div>

          {/* <div>
            <select className="border p-2 rounded">
              {themes.map((item, idx) => (
                <option key={idx} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div> */}
        </div>
        <div className=" mt-5 rounded-[20px] card-bg card h-[7rem] p-5 px-6 flex flex-col items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-4">
            <div className="">
              <div className="text-sm text-gray-500">Selected Theme</div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-gray-800">
                  {theme}
                </span>
                <span
                  className={`w-6 h-6 rounded-full bg-secondary border border-gray-300 ${theme}`}
                ></span>
              </div>
            </div>
          </div>

          {/* Right side: Action button */}
          {isEdit && (
            <button
              className="px-4 w-full py-2 rounded-lg text-sm font-medium button transition"
              onClick={() => setThemePopup(true)}
            >
              Change Theme
            </button>
          )}
        </div>
      </div>
      {themePopup && isEdit && (
        <ThemePicker onClose={() => setThemePopup(false)} />
      )}
    </>
  );
}

export default UiConfigSidebar;
