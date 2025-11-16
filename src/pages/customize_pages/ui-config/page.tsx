import CustomizeMask from "../../../components/module/project_component/ConfigComponents/common/CustomizeMask";
import { CustomizeDashboardTypeEnums } from "../../../../enum/DashboardLinks";
import { useEffect, useState } from "react";
import UiConfigSidebar from "../../../components/module/project_component/ConfigComponents/ui/UiConfigSidebar";

import ScreenConfigdata from "../../../data/CustomizeData/ScreenConfig.json";
import { ScreenConfigInterface } from "../../../data/interface/data.interface";
// import { useSaveChanges } from "../../../context/ui_context/SaveChanges";

const page = () => {
  const [element, setElement] = useState(ScreenConfigdata[0].key);
  const [popUp, setPOpUp] = useState(false);
  const [ispopUpdata, setIsPOpUpdata] = useState(false);

  // const changes = false;
  // const { isActive, setIsActive } = useSaveChanges();

  const [screenConfig, setscreenConfig] = useState<ScreenConfigInterface>(
    ScreenConfigdata.find(
      (item) => item.key === element
    ) as ScreenConfigInterface
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
        />
        {/* <CustomizeSidebar active="xfbhfh" /> */}
        <Ui screenConfig={screenConfig} setscreenConfig={setscreenConfig} />

        {/* Remove 'main' prop if PreviewComponent does not accept it */}
        <PreviewComponent screenConfig={screenConfig} />
      </div>
      {popUp && isActive && (
        <div
          onClick={() => {
            setPOpUp(false);
            // setOrgName((prev) => ({
            //   ...prev,
            //   name: orgDetails?.data.namsddse || "",
            // }));
            // setOrgName(orgDetails?.data.name);
          }}
          className="fixed inset-0 bg-black bg-opacity-55 flex items-center justify-center z-50 mt-[-5rem]"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-1/4 h-fit rounded-2xl shadow-lg bg-primary p-6 mb-14 text-white"
          >
            <h1 className="text-xl text-black font-bold mb-10 px-1">
              Make sure to save your changes
            </h1>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => {
                  setIsPOpUpdata(true);
                  setIsActive(false);
                  setPOpUp(false);
                }}
                className="px-4 py-2 rounded-lg border text-black border-black hover:bg-white hover:text-primary transition-all"
              >
                Cancel
              </button>

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
