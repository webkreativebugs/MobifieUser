import CustomizeMask from "../../../components/module/project_component/ConfigComponents/common/CustomizeMask";
import { CustomizeDashboardTypeEnums } from "../../../../enum/DashboardLinks";
import { useEffect, useState } from "react";
import UiConfigSidebar from "../../../components/module/project_component/ConfigComponents/ui/UiConfigSidebar";

import ScreenConfigdata from "../../../data/CustomizeData/ScreenConfig.json";
import { CurrentConfig } from "../../../data/interface/data.interface";
import { ScreenType } from "../../../../enum/AccessType.enum";
import { Link, useLocation } from "react-router-dom";
import Header1 from "../../../components/module/project_component/ConfigComponents/ui/customComponent/header/Header1";
import BottomTab1 from "../../../components/module/project_component/ConfigComponents/ui/customComponent/bottomTab/BottomTab1";
import { useTheme } from "../../../context/AppContext";

export interface CurrentScreen {
  screenName: string;
  current_config: CurrentConfig;
}

const Page = () => {
  const [element, setElement] = useState(ScreenConfigdata[0].key);
  const [popUp, setPOpUp] = useState(false);
  const [ispopUpdata, setIsPOpUpdata] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [android, setAndroid] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();
  const { type } = location.state || {};

  // const [tab, setTab] = useState("screen");
  const [currentScreen, setCurrentScreen] = useState<CurrentScreen | null>(
    null
  );

  useEffect(() => {
    if (!element) return;
    const storedData = localStorage.getItem("mainscreenData");

    if (!storedData) return;

    try {
      const parsed = JSON.parse(storedData);
      console.log(parsed);
      const found = parsed.find((item: any) => item.screenName === element);
      if (found) {
        setCurrentScreen(found);
      }
    } catch (err) {
      console.error("Failed to parse mainscreenData from localStorage", err);
    }
  }, [element]);

  if (!currentScreen) return null;

  return (
    <CustomizeMask name={CustomizeDashboardTypeEnums.SCREEN}>
      <div className="flex h-[85vh]">
        <UiConfigSidebar
          element={element}
          setElement={setElement}
          ispopUpdata={ispopUpdata}
          setIsPOpUpdata={setIsPOpUpdata}
          setPOpUp={setPOpUp}
          popUp={popUp}
          isEdit={isEdit}
        />

        <div className="w-2/3 relative overflow-y-auto hide-scrollbar overflow-x-hidden mb-2 flex flex-col items-center">
          <h1 className="text-3xl font-semibold absolute left-8">
            {currentScreen.screenName}
          </h1>

          <div className="px-20 border-b-2 w-full h-14 flex justify-end items-center">
            {type == "Edit" ? (
              <></>
            ) : (
              <Link
                onClick={() => setIsEdit(true)}
                className="text-sm px-4 py-2 rounded-md text-black bg-white border shadow-md font-semibold transition hover:bg-gray-100 active:scale-95 active:bg-gray-200"
                to="/project/edit-screen-config"
                state={{ type: "Edit" }}
              >
                Edit Screen
              </Link>
            )}
          </div>

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
                    currentScreen.current_config.header.center.text?.value || ""
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
                    {currentScreen.current_config.header.lefticons.icons?.map(
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
                    {currentScreen.current_config.header.righticons.icons?.map(
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
        </div>

        {/* <PreviewComponent
          currentConfig={currentScreen.current_config}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        /> */}
        <>
          <div
            className="border-l-2 flex flex-col justify-center pl-10 w-[25vw]"
            style={{ height: "100%" }}
          >
            {/* Title + Toggle */}
            <div className="flex items-center justify-between mx-6 mb-2">
              <h1 className="text-3xl font-bold">Preview</h1>
            </div>

            {/* Phone Preview */}
            <div className="flex justify-center p-4">
              {android ? (
                <div className="relative w-full max-w-[393px] h-[48rem] aspect-[393/820] bg-black rounded-[2rem] shadow-2xl p-[10px]">
                  <div className="relative flex flex-col w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full z-10 shadow-inner" />
                    <div className={`${theme} bg-secondary`}>
                      <Header1 header={currentScreen.current_config.header} />
                      <div className="flex-1 overflow-y-auto hide-scrollbar mt-0 mb-1">
                        <img
                          src={currentScreen.current_config.screen.image}
                          alt="home"
                          className="w-full p-0"
                        />
                      </div>
                      <div className="bg-secondary bottom-4">
                        {currentScreen.current_config.bottomtab.isActive && (
                          <BottomTab1 />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative w-full max-w-[393px] h-[48rem] aspect-[393/840] bg-black rounded-[3rem] shadow-2xl p-[10px]">
                  <div className="relative flex flex-col w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />
                    <div className={`${theme} bg-secondary`}>
                      <Header1 header={currentScreen.current_config.header} />
                      <div className="flex-1 overflow-y-auto hide-scrollbar mt-0 mb-1">
                        <img
                          src={currentScreen.current_config.screen.image}
                          alt="home"
                          className="w-full p-0"
                        />
                      </div>
                      <div className="bg-secondary bottom-4">
                        {currentScreen.current_config.bottomtab.isActive && (
                          <BottomTab1 />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Switch device button */}
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setAndroid((prev) => !prev)}
                className="text-sm px-4 py-3 rounded-md bg-black text-white font-semibold transition"
              >
                {!android ? "Switch to Android" : "Switch to iPhone"}
              </button>
            </div>
          </div>
        </>
      </div>
    </CustomizeMask>
  );
};

export default Page;
