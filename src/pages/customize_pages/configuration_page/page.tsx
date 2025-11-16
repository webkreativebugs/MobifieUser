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
import "react-datepicker/dist/react-datepicker.css";
import FilterSortSearchRapper from "../../../components/common_component/FilterSortSearchRapper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Page = () => {
  // const { isDraft } = useDraftScreenChanges();
  const {  setIsEdit } = useTabContext();
  const [element] = useState(ScreenConfigdata[0].key);
  const [query, setQuery] = useState({ app: "", screen: "" });
  const [popUp, setPOpUp] = useState(false);
  const { isActive } = useSaveChanges();
  const { drafts } = useDraftScreen();

  const [screenConfig, setscreenConfig] = useState<ScreenConfigInterface>(
    ScreenConfigdata.find(
      (item) => item.key === element
    ) as ScreenConfigInterface
  );

  console.log(popUp , screenConfig);
  

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

      <div className="mt-5 w-full flex  gap-4">
        <div className="w-1/2 ">
          {/* --- App Config Card --- */}
          <>
            {config.length > 0 ? (
              <>
                <div className="flex flex-col w-full items-center justify-center gap-6 px-8 py-6 card-bg mt-4 rounded-xl">
                  <div className="w-full flex justify-between px-3">
                    <h1 className="text-xl font-semibold">App Configuration</h1>
                    <button
                      onClick={() => setIsEdit(true)}
                      className="border-black border px-4 py-1 rounded-md"
                    >
                      <Link
                        to="../project/api-config"
                        state={{ type: "draft" }}
                      >
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
                      <span className="text-md font-semibold">Edit by :</span>{" "}
                      Anubhav
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-4 px-8 py-6 card-bg mt-4 rounded-xl shadow-md">
                  {/* Filters */}
                  <div className="flex gap-4 w-full">
                    <FilterSortSearchRapper />
                  </div>

                  {/* Headers (no Action) */}
                  <div className="w-full grid grid-cols-4 border-b-2 border-gray-300 pb-2">
                    {[
                      "Configuration",
                      "Created Date",
                      "Created by",
                      "Action",
                    ].map((item, i) => (
                      <h1
                        key={i}
                        className="font-semibold text-lg text-gray-800 text-center"
                      >
                        {item}
                      </h1>
                    ))}
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
              </>
            ) : (
              <div className="w-full px-8 py-10 mt-4 rounded-xl bg-white shadow-md flex flex-col items-center justify-center gap-4 border border-gray-200">
                <div
                  onClick={() => setIsEdit(true)}
                  className="cursor-pointer flex flex-col items-center group"
                >
                  {/* Plus icon circle */}
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-[#7ed957]/20 transition-all duration-300 shadow-sm group-hover:shadow-md">
                    <span className="text-5xl text-[#7ed957] group-hover:scale-110 transition-all duration-300">
                      +
                    </span>
                  </div>

                  {/* Heading */}
                  <h2 className="text-xl font-semibold text-gray-800 mt-4">
                    App Configuration
                  </h2>

                  {/* Description */}
                  <p className="text-gray-500 text-center max-w-[280px] text-sm">
                    No configuration found. Click below to create your first
                    configuration.
                  </p>

                  {/* Button */}
                  <button className="mt-3 px-5 py-2 bg-[#7ed957] text-black font-medium rounded-lg shadow group-hover:bg-[#6ac74c] transition">
                    <Link to="../project/api-config" state={{ type: "draft" }}>
                      Create New
                    </Link>
                  </button>
                </div>
              </div>
            )}
          </>
        </div>
        <div className="w-1/2">
          {/* screen Configuration  */}
          <>
            {config.length > 0 ? (
              <>
                <div className="flex flex-col w-full items-center justify-center gap-6 px-8 py-6 card-bg mt-4 rounded-xl">
                  <div className="w-full flex justify-between px-3">
                    <h1 className="text-xl font-semibold">
                      Screen Configuration
                    </h1>
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
                      <span className="text-md font-semibold">Edit by :</span>{" "}
                      Anubhav
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-4 px-8 py-6 card-bg mt-4 rounded-xl shadow-md">
                  <div className="flex gap-4 w-full">
                    <FilterSortSearchRapper />
                  </div>

                  <div className="w-full grid grid-cols-4 border-b-2 border-gray-300 pb-2">
                    {[
                      "Configuration",
                      "Created Date",
                      "Created by",
                      "Action",
                    ].map((item, i) => (
                      <h1
                        key={i}
                        className="font-semibold text-lg text-gray-800 text-center"
                      >
                        {item}
                      </h1>
                    ))}
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
              </>
            ) : (
              <div className="w-full px-8 py-10 mt-4 rounded-xl bg-white shadow-md flex flex-col items-center justify-center gap-4 border border-gray-200">
                <div
                  onClick={() => setIsEdit(true)}
                  className="cursor-pointer flex flex-col items-center group"
                >
                  {/* Big + Icon */}
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-[#7ed957]/20 transition-all duration-300 shadow-sm group-hover:shadow-md">
                    <span className="text-5xl text-[#7ed957] group-hover:scale-110 transition-all duration-300">
                      +
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold text-gray-800 mt-4">
                    Screen Configuration
                  </h2>

                  <p className="text-gray-500 text-center max-w-[280px] text-sm">
                    No screen configuration found. Click below to start creating
                    screens.
                  </p>

                  <button className="mt-3 px-5 py-2 bg-[#7ed957] text-black font-medium rounded-lg shadow hover:bg-[#6ac74c] transition">
                    <Link
                      to="/project/edit-screen-config"
                      state={{ type: ScreenType.MAIN }}
                    >
                      Create New
                    </Link>
                  </button>
                </div>
              </div>
            )}
          </>
        </div>
      </div>
    </CustomizeMask>
  );
};

export default Page;
