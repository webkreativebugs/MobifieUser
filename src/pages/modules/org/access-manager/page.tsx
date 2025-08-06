import { useEffect, useState } from "react";
// import Navbar from "../../../../components/common_component/Navbar";
// import Sidebar from "../../../../components/common_component/Sidebar";
import { useloader } from "../../../../context/loader_context/LoaderContext";
import { MemberResponse } from "../../../../../network/public/accessManager_api/Access.Manager.interface";
import { CustomConfigPageLimits } from "../../../../../network/public/accessManager_api/Access.Manager.api";
import getAccessManagerData from "../../../../utils/api/AccessManager";
import DynamicTable from "../../../../components/common_component/dynamic_table";
import { ColumnConfig } from "../../../../components/common_component/dynamic_table/types";
import Pagination from "../../../../components/common_component/Pagination";
import DashboardMask from "../../../../components/common_component/layered_components/DashboardMask";
import HeadingMask from "../../../../components/common_component/layered_components/HeadingMask";
interface Quary {
  search?: string;
}
function page() {
  const { setLoader } = useloader();
  const [apiError, setApiError] = useState<Error>();
  const [clicked, setClicked] = useState(1);
  const [apiResponse, setApiResponse] = useState<MemberResponse | undefined>();
  const [inputQuary, setInputQuary] = useState<Quary>({ search: "" });
  if (apiError) {
    console.log(apiError);
  }
  const columns: ColumnConfig[] = [
    { key: "email", title: "Email" },
    { key: "role", title: "Organization Role" },
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

    CustomConfigPageLimits.search = `${searchParam}`;

    getAccessManagerData(setApiResponse, setApiError, setLoader);
  }, [inputQuary]);

  useEffect(() => {
    setLoader(true);
    CustomConfigPageLimits.page = "1";
    CustomConfigPageLimits.limit = "10";
    CustomConfigPageLimits.search = "";
    getAccessManagerData(setApiResponse, setApiError, setLoader);
  }, []);

  return (
          <DashboardMask name={"Access"}>
          <HeadingMask name={"Access Manager"}>
             <div className=" relative w-2/4 text-black">
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
            <select
           
              name="type"
              onChange={handleInputChange}
              className="w-2/4  px-3 text-black rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition duration-300 shadow-sm cursor-pointer bg-white"
            >
              <option value="All">All</option>
              <option value="Project">Project</option>
              <option value="Organization">Organization</option>
            </select>
         </HeadingMask>
      
         
          {apiResponse && (
            <>
              <div className="mt-10">
                <DynamicTable
                  data={apiResponse.data.members}
                  columns={columns}
                  globalSearch={false}
                  emptyMessage="No Alert"
                  page={"access-manager"}
                />
              </div>
              <Pagination
                length={apiResponse.data.pagination.total_pages}
                setApiResponse={setApiResponse}
                type={"access"}
                clicked={clicked}
                setClicked={setClicked}
              />
            </>
          )}
     </DashboardMask>
  );
}

export default page;
