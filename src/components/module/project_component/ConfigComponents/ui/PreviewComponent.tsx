import { useState } from "react";
import { useUi } from "../../../../../../src/context/ui_context/UiContext";
import Header1 from "./customComponent/header/Header1";
import BottomTab1 from "./customComponent/bottomTab/BottomTab1";
import { componentsMap } from "../../../../../components/uiComponents/mapComponents";
// import { ScreenData } from "../../../../../pages/customize_pages/ui-config/page";
interface ScreenData {
  name: string;
  // type: string;
  header: string;
  footer: string;
  url: string;
}

function PreviewComponent({ element }: { element: string }) {
  const [android, setAndroid] = useState(false);
  // console.log(layout);

  const { uiConfig } = useUi();
  console.log(uiConfig[element]);
  const headerData = uiConfig[element]["Header"];
  const mainData = uiConfig[element]["Main"];
  const bottomTabData = uiConfig[element]["BottomTab"];
  console.log(mainData);

  return (
    <div
      className="border-l-2 flex flex-col justify-center pl-10 w-[25vw]"
      style={{ height: "100%" }}
    >
      {/* Title + Toggle */}
      <div className="flex items-center justify-between mx-6 mb-2">
        <h1 className="text-3xl font-bold">Preview</h1>
        <button
          className="text-sm px-4 py-2 rounded-md text-black bg-white border shadow-md font-semibold transition 
             hover:bg-gray-100 active:scale-95 active:bg-gray-200"
        >
          Save Changes
        </button>
      </div>

      {/* Phone Preview */}
      <div className="flex justify-center p-4">
        {android ? (
          /* ANDROID */
          <div className="relative w-full max-w-[393px] h-[48rem]  aspect-[393/820] bg-black rounded-[2rem] shadow-2xl p-[10px]">
            <div className="flex flex-col w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
              {/* Punch-hole camera */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full z-10 shadow-inner" />

              {/* Header */}
              {/* <div className="flex-shrink-2 mt-6">
                <Header1 />

                <img
                  src={layout.header}
                  className="w-full mt-6"
                  onClick={() => alert("want to delete")}
                />
              </div> */}

              <>
                {(() => {
                  const Component = componentsMap[headerData.component];
                  if (!Component) {
                    return <h1 className="bg-black">No </h1>;
                  }

                  return (
                    <button className="mt-6">
                      <Component {...headerData?.props} />
                    </button>
                  );
                })()}
              </>

              {/* Scrollable Main */}
              <div className="flex-1 overflow-y-auto hide-scrollbar mt-2 mb-1">
                {mainData[0].designs.map((url, idx) => (
                  <div className="flex">
                    <img
                      key={idx}
                      src={url}
                      alt={mainData[0].name}
                      className="w-full p-0"
                    />
                  </div>
                ))}
              </div>

              {/* Footer */}
              <>
                {(() => {
                  const Component = componentsMap[bottomTabData.component];
                  if (!Component) {
                    return <h1 className="bg-black">No </h1>;
                  }

                  return (
                    <button className="">
                      <Component {...bottomTabData?.props} />
                    </button>
                  );
                })()}
              </>
            </div>
          </div>
        ) : (
          /* iPHONE */
          <div className="relative w-full max-w-[393px] h-[48rem]   aspect-[393/840] bg-black rounded-[3rem] shadow-2xl p-[10px]">
            <div className="flex flex-col w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
              {/* Dynamic Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />

              {/* Header */}
              <>
                {(() => {
                  const Component = componentsMap[headerData.component];
                  if (!Component) {
                    return <h1 className="bg-black">No </h1>;
                  }

                  return (
                    <button className="mt-8">
                      <Component {...headerData?.props} />
                    </button>
                  );
                })()}
              </>

              {/* Scrollable Main */}

              <div className="flex-1 overflow-y-auto hide-scrollbar mt-2 mb-1">
                {mainData[0].designs.map((url, idx) => (
                  <div className="flex">
                    <img
                      key={idx}
                      src={url}
                      alt={mainData[0].name}
                      className="w-full p-0"
                    />
                  </div>
                ))}
              </div>

              {/* Footer */}
              <>
                {(() => {
                  const Component = componentsMap[bottomTabData.component];
                  if (!Component) {
                    return <h1 className="bg-black">No </h1>;
                  }

                  return (
                    <button className="">
                      <Component {...bottomTabData?.props} />
                    </button>
                  );
                })()}
              </>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-4">
        {" "}
        <button
          onClick={() => setAndroid((prev) => !prev)}
          className="text-sm px-4 py-3 rounded-md bg-black text-white font-semibold transition"
        >
          {!android ? "Switch to Android" : "Switch to iPhone"}
        </button>
      </div>
    </div>
  );
}

export default PreviewComponent;
