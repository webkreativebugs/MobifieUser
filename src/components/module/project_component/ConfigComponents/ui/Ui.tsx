import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import UiCOmponent from "../../../../../data/CustomizeData/UiDropdown.json";
import { LayoutData } from "../../../../../pages/customize_pages/ui-config/page";
import Screens from "./Screens";
import HeaderScreen from "./HeaderScreen";
import BottomTab from "./BottomTab";
export type UiConfigSidebarProps = {
  element: string;
  setElement: Dispatch<SetStateAction<string>>;
  handleUI: (item: any, data: string) => void;
};

// interface Section {
//   type: string;
//   url: string;
// }

// interface ScreenData {
//   name: string;
//   type: string;
//   header: string;
//   footer: string;
//   main: string;
// }

function Ui({ element, setElement, handleUI }: UiConfigSidebarProps) {
  const [tab, setTab] = useState("screen");
  const [view, setView] = useState<React.ReactNode>("screen");

  //   const [layout, setLayout] = useState<ScreenData>({
  //     name: "",
  //     type: "",
  //     header: "",
  //     footer: "",
  //     main: "",
  //   });

  console.log(element + " " + " ui");

  useEffect(() => {
    switch (tab) {
      case "header":
<<<<<<< HEAD
        setView(<HeaderScreen />);
=======
        setView(<HeaderScreen element={element} />);
>>>>>>> 20116fd45904cfe4d9f61e041965fdcb2fe851c6
        break;

      case "bottom":
        setView(<BottomTab />);
        break;

      default:
        setView(
          <Screens
            data={UiCOmponent.find((item) => item.name === element)}
            handleUI={handleUI}
          />
        );
    }
  }, [tab, element]);

  return (
    <>
      <div className=" w-2/3  relative  overflow-y-auto hide-scrollbar overflow-x-hidden mb-2   flex  flex-col items-center ">
        <h1 className="text-3xl font-semibold absolute left-8">{element}</h1>
        {/* <h1 className="text-2xl font-semibold mb-8">Select Screen</h1> */}
        <div className="px-20 border-b-2 w-full h-10">
          <div
            className={`${
              (element == "Bottom Tab" || element == "Header") && "hidden"
            }  w-full mt-2 pb-2  flex justify-end gap-6 `}
          >
            <button
              onClick={() => setTab("screen")}
              className={`text-xl ${tab === "screen" && "font-bold"}`}
            >
              Screen
            </button>
            <button
              onClick={() => setTab("header")}
              className={`text-xl ${tab === "header" && "font-bold"}`}
            >
              Header
            </button>
            <button
              onClick={() => setTab("bottom")}
              className={`text-xl ${tab === "bottom" && "font-bold"}`}
            >
              Bottom Tab
            </button>
          </div>
        </div>
        <>{view}</>
        {/* Example: Display the 'name' property of the first UI component */}
      </div>
    </>
  );
}

export default Ui;
