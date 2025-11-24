import  { useState, Dispatch, SetStateAction } from "react";
import { ScreenConfigInterface } from "../../../../../data/interface/data.interface";

// import Screens from "./Screens";
// import AdditionalConfig from "./AdditionalConfig";

export type UiConfigSidebarProps = {
  screenConfig: ScreenConfigInterface;
  setscreenConfig: Dispatch<SetStateAction<ScreenConfigInterface>>;
  isEdit: boolean;
};

function Ui({ screenConfig, setscreenConfig }: UiConfigSidebarProps) {
  const [tab, setTab] = useState("screen");
  console.log(tab);

  console.log(setscreenConfig, screenConfig);
  console.log(screenConfig);

  // useEffect(() => {
  //   setTab("screen");
  // }, [element]);

  return (
    <>
      <div className=" w-2/3  relative  overflow-y-auto hide-scrollbar overflow-x-hidden mb-2   flex  flex-col items-center ">
        {" "}
        <h1 className="text-3xl font-semibold absolute left-8">
          {screenConfig.title}
        </h1>
        <>
          <div className="px-20 border-b-2 w-full h-10 ">
            <div className=" w-full mt-2 pb-2  flex justify-end gap-6">
              <button onClick={() => setTab("screen")} className={`}`}>
                Selected Screen
              </button>
            </div>
          </div>
          <>
            <div className="w-full px-20 pt-4 space-y-2">
              {/* Header Text Section */}
              <div className="card-bg shadow rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-gray-800">
                  Header Text
                </h2>
                <div className="flex items-center gap-4">
                  <label className="w-32 text-gray-600 font-medium">
                    Center Text:
                  </label>
                  <input
                    type="text"
                    value={
                      screenConfig.current_confi.header.center.text?.value || ""
                    }
                    readOnly
                    className="flex-1 px-3 py-2 border rounded-md bg-gray-100"
                  />
                </div>
              </div>

              {/* Left Icons Table */}
              <div className="card-bg shadow rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-gray-800">
                  Left Icons
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto">
                    <thead>
                      <tr className="bg-gray-100 text-left">
                        <th className="px-4 py-2">Icon Name</th>
                        <th className="px-4 py-2">Preview</th>
                        <th className="px-4 py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {screenConfig.current_confi.header.lefticons.icons?.map(
                        (icon, idx) => (
                          <tr key={idx} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2">{icon.name}</td>
                            <td className="px-4 py-2">
                              <div
                                className="w-6 h-6"
                                dangerouslySetInnerHTML={{ __html: icon.url }}
                              />
                            </td>
                            <td className="px-4 py-2">
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                  icon.isActive
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                                }`}
                              >
                                {icon.isActive ? "Enabled" : "Disabled"}
                              </span>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right Icons Table */}
              <div className="card-bg shadow rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-gray-800">
                  Right Icons
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto">
                    <thead>
                      <tr className="bg-gray-100 text-left">
                        <th className="px-4 py-2">Icon Name</th>
                        <th className="px-4 py-2">Preview</th>
                        <th className="px-4 py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {screenConfig.current_confi.header.righticons.icons?.map(
                        (icon, idx) => (
                          <tr key={idx} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2">{icon.name}</td>
                            <td className="px-4 py-2">
                              <div
                                className="w-6 h-6"
                                dangerouslySetInnerHTML={{ __html: icon.url }}
                              />
                            </td>
                            <td className="px-4 py-2">
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                  icon.isActive
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                                }`}
                              >
                                {icon.isActive ? "Enabled" : "Disabled"}
                              </span>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        </>
      </div>
    </>
  );
}

export default Ui;
