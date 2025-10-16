import { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";
import { useSaveChanges } from "../../../../../context/ui_context/SaveChanges";
import {
  ScreenConfigInterface,
  HeaderConfigItem,
} from "../../../../../data/interface/data.interface";

import type { AdditionalConfig } from "../../../../../data/interface/data.interface";
type UiConfigSidebarProps = {
  screenConfig: ScreenConfigInterface;
  setscreenConfig: Dispatch<SetStateAction<ScreenConfigInterface>>;
};

function AdditionalConfig({
  screenConfig,
  setscreenConfig,
}: UiConfigSidebarProps) {
  const { isActive, setIsActive } = useSaveChanges();
  console.log(screenConfig);
  useEffect(() => {
    console.log(screenConfig.current_confi.bottomtab.isActive);
  }, [screenConfig]);

  const handleLeftIcon = (iconName: string) => {
    setscreenConfig((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        current_confi: {
          ...prev.current_confi,
          header: {
            ...prev.current_confi.header,
            lefticons: prev.current_confi.header.lefticons?.map((icon) =>
              icon.name === iconName
                ? { ...icon, isActive: !icon.isActive } // new object
                : icon
            ),
          },
        },
      };
    });
    setIsActive(true);
  };

  const handleRightIcon = (iconName: string) => {
    setscreenConfig((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        current_confi: {
          ...prev.current_confi,
          header: {
            ...prev.current_confi.header,
            righticons: prev.current_confi.header.righticons?.map((icon) =>
              icon.name === iconName
                ? { ...icon, isActive: !icon.isActive } // new object
                : icon
            ),
          },
        },
      };
    });
    setIsActive(true);
  };

  return (
    <>
      <div className="w-full p-20 space-y-6">
        <div className="bg-primary rounded-lg w-full h-60 p-4">
          <h1 className="text-xl font-semibold w-full border-b-2 mb-4 pb-1">
            Header Tab Config
          </h1>

          <div className="flex justify-between">
            <div>
              <h1 className="text-xl  w-full  mb-4 pb-1">Left Icons</h1>{" "}
              {screenConfig.current_confi.header.lefticons?.map((icon, idx) => (
                <label key={idx} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={icon.isActive}
                    onChange={() => handleLeftIcon(icon.name)}
                    className="h-4 w-4"
                  />
                  <span>{icon.name}</span>
                </label>
              ))}
            </div>
            <div>
              <h1 className="text-xl  w-full  mb-4 pb-1">Right Icons</h1>{" "}
              {screenConfig.current_confi.header.righticons?.map(
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
            </div>

            <div className="mb-4">
              <h1 className="text-xl  mb-4">Header Text</h1>
              <div className="flex items-center space-x-3">
                {/* <label className="text-gray-700 w-32">App Logo Text:</label> */}

                <input
                  type="text"
                  placeholder="Enter your App logo"
                  value={screenConfig.current_confi.header.text}
                  onChange={(e) => {
                    if (e.target.value.length >= 15) return;

                    setscreenConfig((prev) => ({
                      ...prev,
                      current_confi: {
                        ...prev.current_confi,
                        header: {
                          ...prev.current_confi.header,
                          text: e.target.value,
                        },
                      },
                    }));
                    setIsActive(true);
                  }}
                  className="flex-1 rounded-lg border w-[17rem] border-gray-300 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bg-primary rounded-lg w-full h-60 p-4">
          <h1 className="text-xl font-semibold w-full border-b-2 mb-4 pb-1">
            Right View
          </h1>

          {headerData[0].props.rightIcons.map((icon, idx) => (
            <label key={idx} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={true}
                // onChange={(e) =>
                //   handleToggle("rightIcons", idx, e.target.checked)
                // }
                className="h-4 w-4"
              />
              <span>{icon.name}</span>
            </label>
          ))}
        </div> */}

        {/* bottom tab  */}
        <div className="bg-primary rounded-lg w-full h-60 p-4">
          <h1 className="text-xl font-semibold w-full border-b-2 mb-4 pb-1">
            Bottom Tab Config
          </h1>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={screenConfig.current_confi.bottomtab.isActive}
              onChange={() =>
                setscreenConfig((prev) => ({
                  ...prev,
                  current_confi: {
                    ...prev.current_confi,
                    bottomtab: {
                      ...prev.current_confi.bottomtab,
                      isActive: !prev.current_confi.bottomtab.isActive,
                    },
                  },
                }))
              }
              className="h-4 w-4"
            />
            <span>{screenConfig.current_confi.bottomtab.title}</span>
          </label>
        </div>
      </div>
    </>
  );
}

export default AdditionalConfig;
