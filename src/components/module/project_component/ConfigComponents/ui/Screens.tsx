import {  Dispatch, SetStateAction } from "react";
import { ScreenConfigInterface } from "../../../../../data/interface/data.interface";
import { useSaveChanges } from "../../../../../context/ui_context/SaveChanges";
type UiConfigSidebarProps = {
  screenConfig: ScreenConfigInterface;
  setscreenConfig: Dispatch<SetStateAction<ScreenConfigInterface>>;
};

function Screens({ screenConfig, setscreenConfig }: UiConfigSidebarProps) {
  const {  setIsActive } = useSaveChanges();
  const addNewDesign = (newUrl: string) => {
    setscreenConfig((prev) => ({
      ...prev,
      current_confi: {
        ...prev.current_confi,
        screen: {
          ...prev.current_confi.screen,
          image: newUrl,
        },
      },
    }));
    setIsActive(true);
  };

  return (
    <>
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
    </>

  );
}

export default Screens;