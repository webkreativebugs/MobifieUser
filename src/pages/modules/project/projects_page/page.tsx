import { useEffect, useState } from "react";
// import Navbar from "../../../../components/common_component/Navbar";
import Sidebar from "../../../../components/common_component/Sidebar";
import { useloader } from "../../../../context/loader_context/LoaderContext";
// import { MemberResponse } from "../../../../../network/public/accessManager_api/AccessManager.interface";
import { ProjectResponse } from "../../../../../network/public/organization_api/project/Project.interface";
// import { CustomConfigPageLimits } from "../../../../../network/public/accessManager_api/AccessManager.api";
import { AlertmodifiedUrlConfig } from "../../../../../network/public/organization_api/alerts/Alerts.api";
// import getAccessManagerData from "../../../../utils/api/AccessManager";
import projects from "../../../../utils/api/Project";
// import DynamicTable from "../../../../components/common_component/dynamic_table";
// import { ColumnConfig } from "../../../../components/common_component/dynamic_table/types";
// import Pagination from "../../../../components/common_component/Pagination";
// interface Quary {
//   search?: string;
// }
function page() {
  const { setLoader } = useloader();
  const [apiError, setApiError] = useState<Error>();
  // const [clicked, setClicked] = useState(1);
  const [apiResponse, setApiResponse] = useState<ProjectResponse | undefined>();
  // const [inputQuary, setInputQuary] = useState<Quary>({ search: "" });
  if (apiError) {
    console.log(apiError);
  }
  // const columns: ColumnConfig[] = [
  //   { key: "name", title: "Name" },
  // ];
  // console.log(apiError);

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   const { name, value } = e.target;

  //   setInputQuary((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // useEffect(() => {
  //   // console.log(inputQuary.search);
  //   if (!inputQuary?.search?.trim()) return;

  //   const searchParam = `&search=${encodeURIComponent(
  //     inputQuary.search.trim()
  //   )}`;

  //   AlertmodifiedUrlConfig.search = `${searchParam}`;

  //   projects(setApiResponse, setApiError, setLoader);
  // }, [inputQuary]);

  useEffect(() => {
    setLoader(true);
    AlertmodifiedUrlConfig.page = "1";
    AlertmodifiedUrlConfig.limit = "10";
    AlertmodifiedUrlConfig.search = "";
    projects(setApiResponse, setApiError, setLoader);
    console.log(apiResponse);
  }, []);

  return (
    <div className=" flex">
      <Sidebar active={"Projects"} />
      <div className="w-screen  flex items-center  h-screen">
        {/* <Navbar /> */}
        <div className=" p-6  h-5/6 w-full overflow-auto ">
          <div className="  gap-4">
            <div className="">
              <h1 className="table-heading pl-2">Project Overview</h1>
            </div>
            <div className="flex justify-between">
              <div className="h-96 w-1/2  border-2">
                <div className="bg-white m-2 p-2 h-1/2 w-full"></div>

                <div className="flex w-full  h-1/2">
                  <div className=" w-1/2 bg-white p-2 m-2"></div>
                  <div className="w-1/2 bg-white p-2 m-2"></div>
                </div>
              </div>
              {/* Right Side
               */}
              <div className="h-96 w-1/2 p-2 m-2 border-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
