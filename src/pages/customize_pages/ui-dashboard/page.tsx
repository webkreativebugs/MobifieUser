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
import { Link } from "react-router-dom";
import { useTabContext } from "../../../context/org_context/TabContext";
// const { isEdit, setIsEdit } = useTabContext();

const details = [
  { title: "Version Publish", value: "v1.1" },
  { title: "Last Submit Date", value: "2025-05-14.1" },
  { title: "Submitted by", value: "Anubhav" },
];

const page = () => {
  const { isEdit, setIsEdit } = useTabContext();
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

      <div className="mt-5   ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {details.map((item, index) => (
            <div
              key={index}
              className="w-full p-5 card-bg rounded-xl shadow-sm"
            >
              <label className="block text-xl font-medium mb-1">
                {item.title}
              </label>
              <p className="text-gray-900 text-base">
                {/* {typeof item.value === "string" ||
                typeof item.value === "number"
                  ? item.value
                  : item.value} */}
                {item.value}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full flex gap-8">
          <div className="flex flex-col w-1/2 items-center justify-center gap-6 px-8 py-6 card-bg mt-4 rounded-xl  ">
            {/* Left side: Text + Button */}

            <div className="w-full flex  justify-between  px-3">
              <h1 className="text-xl  font-semibold  ">App Configuration</h1>{" "}
              <div className="">
                {" "}
                <button
                  onClick={() => setIsEdit(true)}
                  className="border-black border px-4 py-1 rounded-md"
                >
                  <Link to="../project/api-config" state={{ type: "draft" }}>
                    Add New
                  </Link>
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full px-3">
              <p>
                <span className="text-md font-semibold">Last Edit :</span>{" "}
                2025-05-14
              </p>
              <p>
                <span className="text-md font-semibold">Edit by :</span> Anubhav
              </p>
            </div>
          </div>
          <div className="flex flex-col w-1/2 items-center justify-center gap-6 px-8 py-6 card-bg mt-4 rounded-xl  ">
            {/* Left side: Text + Button */}

            <div className="w-full flex  justify-between  px-3">
              <h1 className="text-xl  font-semibold  ">Screen Configuration</h1>{" "}
              <div>
                {" "}
                <button className="border-black border px-4 py-1 rounded-md">
                  <Link
                    to="/project/edit-screen-config"
                    state={{ projectId: 42 }}
                  >
                    Add New
                  </Link>
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full px-3">
              <p>
                <span className="text-md font-semibold">Last Edit :</span>{" "}
                2025-05-14
              </p>
              <p>
                <span className="text-md font-semibold">Edit by :</span> Anubhav
              </p>
            </div>
          </div>
        </div>
      </div>
    </CustomizeMask>
  );
};

export default page;
