import { useEffect, useState } from "react";
import Navbar from "../../../../components/common_component/Navbar";
import Sidebar from "../../../../components/common_component/Sidebar";
import { useloader } from "../../../../context/loader_context/LoaderContext";
// import { MemberResponse } from "../../../../../network/public/accessManager_api/AccessManager.interface";
import { AlertResponse } from "../../../../../network/public/organization_api/alerts/Alerts.interface";
// import { CustomConfigPageLimits } from "../../../../../network/public/accessManager_api/AccessManager.api";
import { AlertmodifiedUrlConfig } from "../../../../../network/public/organization_api/alerts/Alerts.api";
// import getAccessManagerData from "../../../../utils/api/AccessManager";
import getAlerts from "../../../../utils/api/Alert";
import DynamicTable from "../../../../components/common_component/dynamic_table";
import { ColumnConfig } from "../../../../components/common_component/dynamic_table/types";
import Pagination from "../../../../components/common_component/Pagination";
interface Quary {
  search?: string;
}
function page() {
  const { setLoader } = useloader();
  const [apiError, setApiError] = useState<Error>();
  const [clicked, setClicked] = useState(1);
  const [apiResponse, setApiResponse] = useState<AlertResponse | undefined>();
  const [inputQuary, setInputQuary] = useState<Quary>({ search: "" });
  if (apiError) {
    console.log(apiError);
  }
  const columns: ColumnConfig[] = [
    { key: "title", title: "Alert" },
    { key: "message", title: "Alert Message" },
    { key: "priority", title: "Priority" },
    { key: "status", title: "Status" },
    // { key: "project_id", title: "Project ID" },
  ];
  // console.log(apiError);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setInputQuary((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    // console.log(inputQuary.search);
    if (!inputQuary?.search?.trim()) return;

    const searchParam = `&search=${encodeURIComponent(
      inputQuary.search.trim()
    )}`;

    AlertmodifiedUrlConfig.search = `${searchParam}`;

    getAlerts(setApiResponse, setApiError, setLoader);
  }, [inputQuary]);

  useEffect(() => {
    setLoader(true);
    AlertmodifiedUrlConfig.page = "1";
    AlertmodifiedUrlConfig.limit = "10";
    AlertmodifiedUrlConfig.search = "";
    getAlerts(setApiResponse, setApiError, setLoader);
  }, []);

  return (
    <div className="custom-container flex">
      <Sidebar active={"Alerts"} />
      <div className=" w-full ">
        <Navbar />
        <div className="p-5 w-full max-h-[90vh] overflow-auto ">
          <div>
            <div className="mt-2">
              <h1 className="table-heading pl-2">Access Manager</h1>
            </div>
          </div>
          <div className="w-3/5 flex justify-between items-center mt-4 gap-4">
            {/* Search Input */}
            <div className="relative w-3/4 text-black">
              <input
                type="text"
                placeholder="Search..."
                value={inputQuary?.search?.toString() ?? ""}
                name="search"
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition duration-300 shadow-sm"
              />
              {/* Search Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </div>
          </div>
          {apiResponse && (
            <>
              <div className="mt-10">
                <DynamicTable
                  data={apiResponse.data.alerts}
                  columns={columns}
                  globalSearch={false}
                  emptyMessage="No Alert"
                  page={"access-manager"}
                />
              </div>
              <Pagination
                length={apiResponse.data.pagination.total_pages}
                setApiResponse={setApiResponse}
                type={"alert"}
                clicked={clicked}
                setClicked={setClicked}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default page;
