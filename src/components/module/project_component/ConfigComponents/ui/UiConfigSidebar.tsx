import React, { Dispatch, SetStateAction } from "react";
import UiCOmponent from "../../../../../data/CustomizeData/UiDropdown.json";

type UiConfigSidebarProps = {
  element: string;
  setElement: Dispatch<SetStateAction<string>>;
};

function UiConfigSidebar({ element, setElement }: UiConfigSidebarProps) {
  return (
    <>
      <div className={`hidden xl:flex h-95vh w-72 `}>
        <div className="  xl:flex xl:flex-col overflow-auto hide-scrollbar rounded-md  w-full   bg-primary pb-10 h-full shadow-xl    ">
          <h1 className="text-xl font-semibold m-4 mb-6 px-1">Select Screen</h1>
          <div className="p-5 pt-0 w-full relative mt-5 ">
            {UiCOmponent.map((item, index) => (
              <p
                className={`text-lg  mb-4 cursor-pointer ${
                  item.key == element && "font-semibold"
                }`}
                key={index}
                onClick={() => setElement(item.key)}
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
