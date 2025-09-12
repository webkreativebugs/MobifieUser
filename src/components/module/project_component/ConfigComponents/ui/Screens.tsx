import React, { useState } from "react";
import UiCOmponent from "../../../../../data/CustomizeData/UiDropdown.json";
<<<<<<< HEAD
import COmponent from "../../../../../data/CustomizeData/Component.json";
import type { UiConfigSidebarProps } from "./Ui";
=======
import headerconfig from "../../../../../data/CustomizeData/HeaderConfig.json";
import bottomconfig from "../../../../../data/CustomizeData/BottomTabConfig.json";
import type { UiConfigSidebarProps } from "./Ui";
import Header from "./customComponent/header/Header1";
import Header1 from "./customComponent/header/Header1";
import BottomTab1 from "./customComponent/bottomTab/BottomTab1";
import PageRenderer from "../../../../uiComponents/PageRerender";
import { componentsMap } from "../../../../../components/uiComponents/mapComponents";
>>>>>>> 20116fd45904cfe4d9f61e041965fdcb2fe851c6

interface Section {
  type: string;
  url: string;
}

interface ScreenData {
  name: string;
  type: string;
  header: Section;
  footer: Section;
  main: string[];
}

function Screens({ data, handleUI }: UiConfigSidebarProps | any) {
  return (
<<<<<<< HEAD
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
=======
    <>
      <div className="columns-3 gap-6 px-8 mt-16">
        {data?.designs?.map((item: string, idx: number) =>
          data?.name === "Header" || data?.name === "Bottom Tab" ? (
            <div
              key={idx}
              className="mb-4 break-inside-avoid border p-2 pb-4 w-[18rem] max-h-[27rem] overflow-hidden rounded-lg bg-white shadow"
            >
              <button className="w-full block">
                {data?.name === "Header" ? (
                  <>
                    {headerconfig.map((block, i) => {
                      const Component = componentsMap[block.component]; // name se component uthao
                      if (!Component) return null;
                      return (
                        <button
                        // onClick={() => handleUI(item, data.name)}
                        >
                          <Component key={i} {...block.props} />
                        </button>
                      );
                    })}
                  </>
                ) : (
                  <PageRenderer config={bottomconfig} />
                )}
              </button>
            </div>
          ) : (
            <div
              key={idx}
              className="mb-4 break-inside-avoid border p-2 pb-4 w-[18rem] max-h-[27rem] overflow-hidden rounded-lg bg-white shadow"
            >
              <button
                onClick={() => handleUI(item, data.name)}
                className="w-full block"
              >
                <img
                  src={item}
                  alt=""
                  className="w-full h-auto object-contain"
                />
              </button>
            </div>
          )
        )}
      </div>
    </>
>>>>>>> 20116fd45904cfe4d9f61e041965fdcb2fe851c6
  );
}

export default Screens;
