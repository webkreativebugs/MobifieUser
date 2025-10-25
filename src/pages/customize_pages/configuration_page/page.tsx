import CustomizeMask from "../../../components/module/project_component/ConfigComponents/common/CustomizeMask";
import { CustomizeDashboardTypeEnums } from "../../../../enum/DashboardLinks";

import { useEffect, useState } from "react";
// import UiConfigSidebar from "../../../components/module/project_component/ConfigComponents/ui/UiConfigSidebar";
// import PreviewComponent from "../../../components/module/project_component/ConfigComponents/ui/PreviewComponent";
// import Ui from "../../../components/module/project_component/ConfigComponents/ui/Ui";
import ScreenConfigdata from "../../../data/CustomizeData/ScreenConfig.json";
import { ScreenConfigInterface } from "../../../data/interface/data.interface";
import { useSaveChanges } from "../../../context/ui_context/SaveChanges";
import HeadingMask from "../../../components/common_component/layered_components/HeadingMask";
import { Link } from "react-router-dom";
import { useTabContext } from "../../../context/org_context/TabContext";
import { useDraftScreenChanges } from "../../../context/ui_context/DraftScreenContext";
import { useDraftScreen } from "../../../context/ui_context/DraftScreenContext";
// const { isEdit, setIsEdit } = useTabContext();
import { ScreenType } from "../../../../enum/AccessType.enum";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
const config = [
  {
    configuration: "User Authentication Setup",
    createdDate: "2025-05-10",
    createdBy: "Anubhav",
    action: "Edit",
  },
  {
    configuration: "Payment Gateway Integration",
    createdDate: "2025-05-12",
    createdBy: "Ravi",
    action: "View",
  },
  {
    configuration: "Push Notification Config",
    createdDate: "2025-05-15",
    createdBy: "Priya",
    action: "Edit",
  },
  {
    configuration: "Theme Customization",
    createdDate: "2025-05-18",
    createdBy: "Kunal",
    action: "Delete",
  },
  {
    configuration: "App Version Control",
    createdDate: "2025-05-20",
    createdBy: "Neha",
    action: "Edit",
  },
];
interface configInterface {
  configuration: string;
  createdDate: Date;
  createdBy: string;
  action: string;
}

const page = () => {
  const { isDraft } = useDraftScreenChanges();
  const { isEdit, setIsEdit } = useTabContext();
  const [element, setElement] = useState(ScreenConfigdata[0].key);
  const [query, setQuery] = useState({
    app: "",
    screen: "",
  });
  console.log(ScreenConfigdata[0].key);
  const [popUp, setPOpUp] = useState(false);
  //   const [ispopUpdata, setIsPOpUpdata] = useState(false);

  // const changes = false;
  const { isActive } = useSaveChanges();
  const { drafts } = useDraftScreen();

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
    <CustomizeMask name={CustomizeDashboardTypeEnums.CONFIGURATION}>
      <HeadingMask name={"Configuration"}>
        <div></div>
      </HeadingMask>

      <div className="mt-5   ">
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
                <button
                  onClick={() => setIsEdit(true)}
                  className="border-black border px-4 py-1 rounded-md"
                >
                  {drafts.length > 0 ? (
                    <Link
                      to="/project/draft-screen-config"
                      state={{ type: ScreenType.DRAFT }}
                    >
                      Edit Draft
                    </Link>
                  ) : (
                    <Link
                      to="/project/edit-screen-config"
                      state={{ type: ScreenType.MAIN }}
                    >
                      Add New
                    </Link>
                  )}
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

        <div className="w-full flex gap-8">
          {/* app-configuration  */}
          <div className="flex flex-col w-1/2   gap-4 px-8 py-6 card-bg mt-4 rounded-xl shadow-md ">
            <div className="flex  gap-4 w-full ">
              {/* Date Field */}
              <div className="flex w-1/2 items-center gap-3">
                <label
                  htmlFor="date"
                  className="w-24 text-gray-700 font-medium"
                >
                  Date:
                </label>
                <input
                  id="date"
                  type="text"
                  placeholder="Enter date"
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Search Field */}
              <div className="flex w-1/2 items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-blue-500 mx-6">
                <FaSearch className="text-gray-500" size={18} />
                <input
                  id="search"
                  type="text"
                  value={query.app}
                  onChange={(e) =>
                    setQuery((prev) => ({
                      ...prev,
                      app: e.target.value,
                    }))
                  }
                  placeholder="Search something..."
                  className="flex-1 outline-none text-gray-800 text-sm bg-transparent"
                />
              </div>
            </div>

            <div className="w-full grid grid-cols-4 border-b-2 border-gray-300 pb-2">
              {["Configuration", "Created Date", "Created by", "Action"].map(
                (item, i) => (
                  <h1
                    key={i}
                    className="font-semibold text-lg text-gray-800 text-center"
                  >
                    {item}
                  </h1>
                )
              )}
            </div>

            {/* Rows */}
            {config
              .filter((item) =>
                item.configuration
                  .toLowerCase()
                  .includes(query.app.toLowerCase())
              )
              .map((item, index) => (
                <div
                  key={item.configuration}
                  className={`relative w-full grid grid-cols-4 items-center text-center py-2 border-b border-gray-200 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <p className="text-gray-700 font-medium truncate px-2 whitespace-nowrap">
                    {item.configuration}
                  </p>
                  <p className="text-gray-700 truncate px-2 whitespace-nowrap">
                    {item.createdDate}
                  </p>
                  <p className="text-gray-700 truncate px-2 whitespace-nowrap">
                    {item.createdBy}
                  </p>

                  <div className="relative flex justify-center group cursor-pointer">
                    <BsThreeDotsVertical className="text-gray-600 text-xl hover:text-gray-900 transition" />
                    <div className="absolute top-7 right-0 hidden group-hover:block bg-white border border-gray-200 rounded-md shadow-lg w-28 py-1 z-10">
                      <button className="w-full text-left px-3 py-1.5 text-sm hover:bg-gray-100">
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {/* Screen-configuration  */}
          <div className="flex flex-col w-1/2  gap-4 px-8 py-6 card-bg mt-4 rounded-xl shadow-md ">
            <div className="flex  gap-4 w-full ">
              {/* Date Field */}
              <div className="flex w-1/2 items-center gap-1">
                <label
                  htmlFor="date"
                  className="w-24 text-gray-700 font-medium"
                >
                  Date:
                </label>
                <input
                  id="date"
                  type="text"
                  placeholder="Enter date"
                  className="flex-1 border border-gray-300 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Search Field */}
              <div className="flex w-1/2 items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-blue-500 mx-6">
                <FaSearch className="text-gray-500" size={18} />
                <input
                  id="search"
                  type="text"
                  value={query.screen}
                  onChange={(e) =>
                    setQuery((prev) => ({
                      ...prev,
                      screen: e.target.value,
                    }))
                  }
                  placeholder="Search something..."
                  className="flex-1 outline-none text-gray-800 text-sm bg-transparent"
                />
              </div>
            </div>

            <div className="w-full grid grid-cols-4 border-b-2 border-gray-300 pb-2">
              {["Configuration", "Created Date", "Created by", "Action"].map(
                (item, i) => (
                  <h1
                    key={i}
                    className="font-semibold text-lg text-gray-800 text-center"
                  >
                    {item}
                  </h1>
                )
              )}
            </div>

            {/* Rows */}
            {config
              .filter((item) =>
                item.configuration
                  .toLowerCase()
                  .includes(query.screen.toLowerCase())
              )
              .map((item, index) => (
                <div
                  key={item.configuration}
                  className={`relative w-full grid grid-cols-4 items-center text-center py-2 border-b border-gray-200 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <p className="text-gray-700 font-medium truncate px-2 whitespace-nowrap">
                    {item.configuration}
                  </p>
                  <p className="text-gray-700 truncate px-2 whitespace-nowrap">
                    {item.createdDate}
                  </p>
                  <p className="text-gray-700 truncate px-2 whitespace-nowrap">
                    {item.createdBy}
                  </p>

                  <div className="relative flex justify-center group cursor-pointer">
                    <BsThreeDotsVertical className="text-gray-600 text-xl hover:text-gray-900 transition" />
                    <div className="absolute top-7 right-0 hidden group-hover:block bg-white border border-gray-200 rounded-md shadow-lg w-28 py-1 z-10">
                      <button className="w-full text-left px-3 py-1.5 text-sm hover:bg-gray-100">
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </CustomizeMask>
  );
};

export default page;
