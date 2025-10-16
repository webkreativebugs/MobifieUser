import { Dispatch, SetStateAction, useEffect, useState } from "react";
// import UiCOmponent from "../../../../../data/CustomizeData/UiDropdown.json";
import ScreenConfig from "../../../../../data/CustomizeData/ScreenConfig.json";
import { useSaveChanges } from "../../../../../context/ui_context/SaveChanges";

type UiConfigSidebarProps = {
  element: string;
  setElement: Dispatch<SetStateAction<string>>;
  ispopUpdata: boolean;
  setIsPOpUpdata: Dispatch<SetStateAction<boolean>>;
  setPOpUp: Dispatch<SetStateAction<boolean>>;
  popUp: boolean;
};

function UiConfigSidebar({
  element,
  setElement,
  setPOpUp,
  popUp,
}: UiConfigSidebarProps) {
  console.log(element);
  const [tempElement, setTepElement] = useState<string>("");
  const { isActive } = useSaveChanges();

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
      <div className={`hidden xl:flex h-95vh w-72 `}>
        <div className="  xl:flex xl:flex-col overflow-auto hide-scrollbar rounded-md  w-full   bg-primary pb-10 h-full shadow-xl    ">
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
        </div>
      </div>
    </>
  );
}

export default UiConfigSidebar;
