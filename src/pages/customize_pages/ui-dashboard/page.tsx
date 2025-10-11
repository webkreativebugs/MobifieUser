import CustomizeMask from "../../../components/module/project_component/ConfigComponents/common/CustomizeMask";
import { CustomizeDashboardTypeEnums } from "../../../../enum/DashboardLinks";

import { useEffect, useState } from "react";
import UiConfigSidebar from "../../../components/module/project_component/ConfigComponents/ui/UiConfigSidebar";
import PreviewComponent from "../../../components/module/project_component/ConfigComponents/ui/PreviewComponent";
import Ui from "../../../components/module/project_component/ConfigComponents/ui/Ui";
import ScreenConfigdata from "../../../data/CustomizeData/ScreenConfig.json";
import { ScreenConfigInterface } from "../../../data/interface/data.interface";
import { useSaveChanges } from "../../../context/ui_context/SaveChanges";
import HeadingMask from "../../../components/common_component/layered_components/HeadingMask";

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
    <CustomizeMask name={CustomizeDashboardTypeEnums.DASHBOARD}>
      <HeadingMask name={"Dashboard"}>
        <div></div>
      </HeadingMask>

      <div className="mt-5 relative  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div
            //   key={index}
            className="w-full p-5 card-bg rounded-xl shadow-sm"
          >
            <label className="block text-xl font-medium mb-1">
              {/* {item.label} */} Version Publish
            </label>
            <p className="text-gray-900 text-base">
              {/* {typeof item.value === "string" ||
                typeof item.value === "number"
                  ? item.value
                  : item.value} */}
              {/* {item.value} */} v1.1
            </p>
          </div>
          <div
            //   key={index}
            className="w-full p-5 card-bg rounded-xl shadow-sm"
          >
            <label className="block text-xl font-medium mb-1">
              {/* {item.label} */} Last Submit Date
            </label>
            <p className="text-gray-900 text-base">
              {/* {typeof item.value === "string" ||
                typeof item.value === "number"
                  ? item.value
                  : item.value} */}
              {/* {item.value} */} 2025-05-14
            </p>
          </div>
          <div
            //   key={index}
            className="w-full p-5 card-bg rounded-xl shadow-sm"
          >
            <label className="block text-xl font-medium mb-1">
              {/* {item.label} */} Submitted by
            </label>
            <p className="text-gray-900 text-base">
              {/* {typeof item.value === "string" ||
                typeof item.value === "number"
                  ? item.value
                  : item.value} */}
              {/* {item.value} */} Anubhav
            </p>
          </div>
        </div>
      </div>
    </CustomizeMask>
  );
};

export default page;
