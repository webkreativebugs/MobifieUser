import CustomizeMask from "../../../components/module/project_component/ConfigComponents/common/CustomizeMask";
import { CustomizeDashboardTypeEnums } from "../../../../enum/DashboardLinks";
import { useEffect, useState } from "react";
import ScreenConfigdata from "../../../data/CustomizeData/ScreenConfig.json";
import { ScreenConfigInterface } from "../../../data/interface/data.interface";
import { useSaveChanges } from "../../../context/ui_context/SaveChanges";
import HeadingMask from "../../../components/common_component/layered_components/HeadingMask";
import { Link } from "react-router-dom";
import { useTabContext } from "../../../context/org_context/TabContext";
import {
  useDraftScreen,
} from "../../../context/ui_context/DraftScreenContext";
import { ScreenType } from "../../../../enum/AccessType.enum";
import { FaSearch } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "react-datepicker/dist/react-datepicker.css";

const Page = () => {
  // const { isDraft } = useDraftScreenChanges();
  const {  setIsEdit } = useTabContext();
  const element= useState(ScreenConfigdata[0].key);
  const [query, setQuery] = useState({ app: "", screen: "" });
  const [popUp, setPOpUp] = useState(false);
  const { isActive } = useSaveChanges();
  const { drafts } = useDraftScreen();

  const [screenConfig, setscreenConfig] = useState<ScreenConfigInterface>(
    ScreenConfigdata.find(
      (item) => item.key === element
    ) as ScreenConfigInterface
  );

  console.log(popUp,screenConfig);
  

  const [appDateRange, setAppDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [screenDateRange, setScreenDateRange] = useState<
    [Date | null, Date | null]
  >([null, null]);

  // 🔹 Load config from localStorage
  const [config, setConfig] = useState<
    { title: string; createddate: number; createdby: string }[]
  >([]);

  useEffect(() => {
    const existingData = localStorage.getItem("configDetails");
    if (existingData) {
      const parsed = JSON.parse(existingData);
      setConfig(parsed);
    }
  }, []);

  useEffect(() => {
    const screenData = ScreenConfigdata.find((item) => item.key === element);
    if (screenData) setscreenConfig(screenData as ScreenConfigInterface);
  }, [element]);

  useEffect(() => {
    if (isActive) setPOpUp(true);
  }, [element]);

  // 🔹 Filter by date and search
  const filterData = (type: "app" | "screen") => {
    const [start, end] = type === "app" ? appDateRange : screenDateRange;
    const search =
      type === "app" ? query.app.toLowerCase() : query.screen.toLowerCase();

    return config.filter((item) => {
      const itemDate = new Date(item.createddate);
      const matchesDate =
        !start || !end || (itemDate >= start && itemDate <= end);
      const matchesSearch = item.title.toLowerCase().includes(search);
      return matchesDate && matchesSearch;
    });
  };

  return (
    <CustomizeMask name={CustomizeDashboardTypeEnums.CONFIGURATION}>
      <HeadingMask name={"Configuration"}>
        <div></div>
      </HeadingMask>

      <div className="mt-5">
        <div className="w-full flex gap-8">
          {/* --- App Config Card --- */}
          <div className="flex flex-col w-1/2 items-center justify-center gap-6 px-8 py-6 card-bg mt-4 rounded-xl">
            <div className="w-full flex justify-between px-3">
              <h1 className="text-xl font-semibold">App Configuration</h1>
              <button
                onClick={() => setIsEdit(true)}
                className="border-black border px-4 py-1 rounded-md"
              >
                <Link to="../project/api-config" state={{ type: "draft" }}>
                  Add New
                </Link>
              </button>
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

          {/* --- Screen Config Card --- */}
          <div className="flex flex-col w-1/2 items-center justify-center gap-6 px-8 py-6 card-bg mt-4 rounded-xl">
            <div className="w-full flex justify-between px-3">
              <h1 className="text-xl font-semibold">Screen Configuration</h1>
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

        {/* --- Configuration Lists --- */}
        <div className="w-full flex gap-8">
          {/* --- App Configuration List --- */}
          <div className="flex flex-col w-1/2 gap-4 px-8 py-6 card-bg mt-4 rounded-xl shadow-md">
            {/* Filters */}
            <div className="flex gap-4 w-full">
              <div className="flex w-1/2 items-center gap-2">
                <label className="text-gray-700 font-medium">Date Range:</label>
                <DatePicker
                  selectsRange={true}
                  startDate={appDateRange[0]}
                  endDate={appDateRange[1]}
                  onChange={(update) => setAppDateRange(update)}
                  isClearable={true}
                  placeholderText="Select range"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>

              <div className="flex w-1/2 items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-blue-500 mx-6">
                <FaSearch className="text-gray-500" size={18} />
                <input
                  type="text"
                  value={query.app}
                  onChange={(e) =>
                    setQuery((prev) => ({ ...prev, app: e.target.value }))
                  }
                  placeholder="Search..."
                  className="flex-1 outline-none text-gray-800 text-sm bg-transparent"
                />
              </div>
            </div>

            {/* Headers (no Action) */}
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

            {/* Filtered Data */}
            {filterData("app").map((item, index) => (
              <div
                key={index}
                className={`w-full grid grid-cols-4 items-center text-center py-2 border-b border-gray-200 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <p className="text-gray-700 font-medium truncate px-2 whitespace-nowrap">
                  {item.title}
                </p>
                <p className="text-gray-700 truncate px-2 whitespace-nowrap">
                  {new Date(item.createddate).toLocaleDateString()}
                </p>
                <p className="text-gray-700 truncate px-2 whitespace-nowrap">
                  {item.createdby}
                </p>
                <p className="text-gray-700 truncate px-2  text-center pl-16 ml-5 ">
                  <BsThreeDotsVertical />
                </p>
              </div>
            ))}
          </div>

          {/* --- Screen Configuration List (same as App) --- */}
          <div className="flex flex-col w-1/2 gap-4 px-8 py-6 card-bg mt-4 rounded-xl shadow-md">
            <div className="flex gap-4 w-full">
              <div className="flex w-1/2 items-center gap-2">
                {/* <label className="text-gray-700 font-medium">Date Range:</label> */}
                <DatePicker
                  selectsRange={true}
                  startDate={screenDateRange[0]}
                  endDate={screenDateRange[1]}
                  onChange={(update) => setScreenDateRange(update)}
                  isClearable={true}
                  placeholderText="Select time interval"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>

              <div className="flex w-1/2 items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-blue-500 mx-6">
                <FaSearch className="text-gray-500" size={18} />
                <input
                  type="text"
                  value={query.screen}
                  onChange={(e) =>
                    setQuery((prev) => ({ ...prev, screen: e.target.value }))
                  }
                  placeholder="Search..."
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

            {filterData("screen").map((item, index) => (
              <div
                key={index}
                className={`w-full grid grid-cols-4 items-center text-center py-2 border-b border-gray-200 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <p className="text-gray-700 font-medium truncate px-2 whitespace-nowrap">
                  {item.title}
                </p>
                <p className="text-gray-700 truncate px-2 whitespace-nowrap">
                  {new Date(item.createddate).toLocaleDateString()}
                </p>
                <p className="text-gray-700 truncate px-2 whitespace-nowrap">
                  {item.createdby}
                </p>
                <p className="text-gray-700 truncate px-2  text-center pl-16 ml-5 ">
                  <BsThreeDotsVertical />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CustomizeMask>
  );
};

export default Page;
