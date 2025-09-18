import CustomizeMask from "../../../components/module/project_component/ConfigComponents/common/CustomizeMask";
import { CustomizeDashboardTypeEnums } from "../../../../enum/DashboardLinks";

import { useEffect, useState } from "react";
import UiConfigSidebar from "../../../components/module/project_component/ConfigComponents/ui/UiConfigSidebar";
import PreviewComponent from "../../../components/module/project_component/ConfigComponents/ui/PreviewComponent";
import Ui from "../../../components/module/project_component/ConfigComponents/ui/Ui";
import ScreenConfigdata from "../../../data/CustomizeData/ScreenConfig.json";
import { ScreenConfigInterface } from "../../../data/interface/data.interface";
import { useSaveChanges } from "../../../context/ui_context/SaveChanges";

const page = () => {
  const [element, setElement] = useState(ScreenConfigdata[0].key);
  console.log(ScreenConfigdata[0].key);
  const [popUp, setPOpUp] = useState(false);
  const [ispopUpdata, setIsPOpUpdata] = useState(false);

  // const changes = false;
  const { isActive, setIsActive } = useSaveChanges();

  const [screenConfig, setscreenConfig] = useState<ScreenConfigInterface>(
    ScreenConfigdata.find(
      (item) => item.key === element
    ) as ScreenConfigInterface
  );

  useEffect(() => {
    const screenData = ScreenConfigdata.find((item) => item.key === element);
    if (screenData) {
      setscreenConfig(screenData as ScreenConfigInterface);
    }
  }, [element]);

  useEffect(() => {
    if (isActive) {
      setPOpUp(true);
    }
  }, [element]);

  return (
    <CustomizeMask name={CustomizeDashboardTypeEnums.UI}>
      <div className=" flex  h-[85vh]">
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
            //   name: orgDetails?.data.name || "",
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
                onClick={() => {
                  setIsPOpUpdata(true);
                  setIsActive(false);
                  setPOpUp(false);
                }}
                className="px-4 py-2 rounded-lg bg-black text-primary font-semibold hover:bg-opacity-90 shadow-md transition-all"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </CustomizeMask>
  );
};

export default page;