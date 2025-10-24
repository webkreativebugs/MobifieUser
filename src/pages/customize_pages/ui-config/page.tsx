import CustomizeMask from "../../../components/module/project_component/ConfigComponents/common/CustomizeMask";
import { CustomizeDashboardTypeEnums } from "../../../../enum/DashboardLinks";
import { useEffect, useState } from "react";
import UiConfigSidebar from "../../../components/module/project_component/ConfigComponents/ui/UiConfigSidebar";
import PreviewComponent from "../../../components/module/project_component/ConfigComponents/ui/PreviewComponent";
import ScreenConfigdata from "../../../data/CustomizeData/ScreenConfig.json";
import { CurrentConfig } from "../../../data/interface/data.interface";

interface CurrentScreen {
  screenName: string;
  current_config: CurrentConfig;
}

const Page = () => {
  const [element, setElement] = useState(ScreenConfigdata[0].key);
  const [popUp, setPOpUp] = useState(false);
  const [ispopUpdata, setIsPOpUpdata] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [tab, setTab] = useState("screen");
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

          <div className="px-20 border-b-2 w-full h-10">
            <div className="w-full mt-2 pb-2 flex justify-end gap-6">
              <button onClick={() => setTab("screen")}>Selected Screen</button>
            </div>
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

        <PreviewComponent
          currentConfig={currentScreen.current_config}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
      </div>
    </CustomizeMask>
  );
};

export default Page;
