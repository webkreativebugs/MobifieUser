import React, { Dispatch, SetStateAction } from "react";
import UiCOmponent from "../../../../../data/CustomizeData/UiDropdown.json";

type UiConfigSidebarProps = {
  element: string;
  setElement: Dispatch<SetStateAction<string>>;
};

function UiConfigSidebar({ element, setElement }: UiConfigSidebarProps) {
  return (
    <>
      <div className={`hidden xl:flex h-95vh w-70`}>
        <div className="  xl:flex xl:flex-col overflow-auto hide-scrollbar rounded-md    bg-primary pb-10 h-full shadow-xl    ">
          <h1 className="text-xl font-semibold m-4 mb-6 px-1">
            Select Component
          </h1>
          <div className="p-5 pt-0 w-full relative mt-5 ">
            {UiCOmponent.map((item, index) => (
              <p
                className={`text-lg  mb-4 cursor-pointer ${
                  item.name == element && "font-semibold"
                }`}
                key={index}
                onClick={() => setElement(item.name)}
              >
                {item.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default UiConfigSidebar;
