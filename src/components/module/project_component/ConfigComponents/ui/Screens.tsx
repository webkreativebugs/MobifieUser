// import React, { useState } from "react";
// import UiCOmponent from "../../../../../data/CustomizeData/UiDropdown.json";
// import COmponent from "../../../../../data/CustomizeData/Component.json";
import type { UiConfigSidebarProps } from "./Ui";

// interface Section {
//   type: string;
//   url: string;
// }

// interface ScreenData {
//   name: string;
//   type: string;
//   header: Section;
//   footer: Section;
//   main: string[];
// }

function Screens({ data, handleUI }: UiConfigSidebarProps | any) {
  return (
    <div className="columns-3 gap-6  px-8 mt-16 ">
      {/* <h1 className="text-black">{element}</h1> */}
      {data?.designs?.map((item: string, idx: number) => (
        <div
          key={idx}
          className="mb-4 break-inside-avoid border p-2 pb-4 w-[15rem] max-h-[27rem] overflow-hidden rounded-lg bg-white shadow"
        >
          <button
            onClick={() => handleUI(item, data.name)}
            className="w-full block"
          >
            <img src={item} alt="" className="w-full h-auto object-contain" />
          </button>
        </div>
      ))}
      {/* <div dangerouslySetInnerHTML={{ __html: COmponent[0].value }} /> */}
    </div>
  );
}

export default Screens;
