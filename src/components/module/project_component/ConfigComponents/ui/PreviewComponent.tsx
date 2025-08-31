import { useState } from "react";
// import { ScreenData } from "../../../../../pages/customize_pages/ui-config/page";
interface ScreenData {
  name: string;
  // type: string;
  header: string;
  footer: string;
  url: string;
}

function PreviewComponent({ layout }: { layout: ScreenData }) {
  const [android, setAndroid] = useState(false);
  console.log(layout);

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
              <div className="flex-shrink-2">
                <img
                  src={layout.header}
                  className="w-full mt-6"
                  onClick={() => alert("want to delete")}
                />
              </div>

              {/* Scrollable Main */}
              <div className="flex-1 overflow-y-auto hide-scrollbar mt-2 mb-1">
                {/* {props.main.map((url, idx) => ( */}
                <div className="flex">
                  <img
                    src={layout.url}
                    alt={layout.name}
                    className="w-full p-0"
                  />
                </div>
                {/* ))} */}
              </div>

              {/* Footer */}
              <div className="mb-[-1rem]">
                <img src={layout.footer} className="w-full" />
              </div>
            </div>
          </div>
        ) : (
          /* iPHONE */
          <div className="relative w-full max-w-[393px] h-[48rem]   aspect-[393/840] bg-black rounded-[3rem] shadow-2xl p-[10px]">
            <div className="flex flex-col w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
              {/* Dynamic Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />

              {/* Header */}
              <div className="flex-shrink-2">
                <img
                  src={layout.header}
                  className="w-full mt-6"
                  onClick={() => alert("want to delete")}
                />
              </div>

              {/* Scrollable Main */}
              <div className="flex-1 overflow-y-auto hide-scrollbar mt-2 mb-1">
                {/* {props.main.map((url, idx) => ( */}
                <div className="flex">
                  <img
                    src={layout.url}
                    alt={layout.name}
                    className="w-full p-0"
                  />
                </div>
                {/* ))} */}
              </div>

              {/* Footer */}
              <div className="mb-[-1rem]">
                <img src={layout.footer} className="w-full" />
              </div>
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
