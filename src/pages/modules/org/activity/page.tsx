import { useEffect, useState } from "react";
// import Navbar from "../../../../components/common_component/Navbar";
// import Sidebar from "../../../../components/common_component/Sidebar";
import { useloader } from "../../../../context/loader_context/LoaderContext";
import { ActivityResponse } from "../../../../../network/public/organization_api/activity/Activity.interface";
// import { CustomConfigPageLimits } from "../../../../../network/public/accessManager_api/AccessManager.api";
import fetchAllActivity from "../../../../utils/api/Activity";
import DynamicTable from "../../../../components/common_component/dynamic_table";
import { ColumnConfig } from "../../../../components/common_component/dynamic_table/types";
import { ActivitymodifiedUrlConfig } from "../../../../../network/public/organization_api/activity/Activity.api";
import Pagination from "../../../../components/common_component/Pagination";
import DashboardMask from "../../../../components/common_component/layered_components/DashboardMask";
import HeadingMask from "../../../../components/common_component/layered_components/HeadingMask";
import SearchMask from "../../../../components/common_component/layered_components/SearchMask";
import FilterMask from "../../../../components/common_component/layered_components/FilterMask";
import { OrganizationDetailsConfig } from "../../../../../network/public/organization_api/organization_detail/OrganizationalDetails.api";
interface Quary {
  search?: string;
  type?:string
}
function page() {
  const { setLoader } = useloader();
  const [apiError, setApiError] = useState<Error>();
  const [clicked, setClicked] = useState(1);
  const [selectQuary, setSelectQuary] = useState<Quary>({ type: "All" });
  const [apiResponse, setApiResponse] = useState<
    ActivityResponse | undefined
  >();
  const [inputQuary, setInputQuary] = useState<Quary>({ search: "" });
  if (apiError) {
    console.log(apiError);
  }
  const columns: ColumnConfig[] = [
  { key: "activity_details", title: "Activity" },
  { key: "email", title: "Email" },
  { key: "submodule", title: "Module" },
  { key: "created_at", title:"Created At"}
];
  // console.log(apiError);

 const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;

  if (e.target.tagName === "INPUT") {
    setInputQuary((prev) => ({
      ...prev,
      [name]: value,
    }));
  } else {
    setSelectQuary((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};


  useEffect(() => {
    // console.log(inputQuary.search);
    if (!inputQuary?.search?.trim()) return;

    const searchParam = `&search=${encodeURIComponent(
      inputQuary.search.trim()
    )}`;

    ActivitymodifiedUrlConfig.search = `${searchParam}`;

    fetchAllActivity(setApiResponse, setApiError, setLoader);
  }, [inputQuary]);

   useEffect(() => {
  if (!selectQuary) return;

  setLoader(true);

  const type = selectQuary?.type?.toString();

  if (type === "All") {
    ActivitymodifiedUrlConfig.search = "";
  } else {
    ActivitymodifiedUrlConfig.search = `&category=${encodeURIComponent(type || "")}`;
    if (selectQuary.search) {
      ActivitymodifiedUrlConfig.search += `&search=${encodeURIComponent(selectQuary.search)}`;
    }
  }
  
  fetchAllActivity(setApiResponse, setApiError,setLoader);
  setClicked(1)
  // setLoader(false);
}, [selectQuary]);

  useEffect(() => {
    setLoader(true);
    ActivitymodifiedUrlConfig.page = "1";
    ActivitymodifiedUrlConfig.limit = "10";
    ActivitymodifiedUrlConfig.search = "";
    fetchAllActivity(setApiResponse, setApiError, setLoader);
  }, [OrganizationDetailsConfig.orgName]);

  return (
  <DashboardMask name={"Activity"}>
           <HeadingMask name={"Activity Feed"}>
           <SearchMask handler={handleInputChange} value={inputQuary?.search?.toString() ?? ""} />
           <FilterMask handler={handleInputChange} value={selectQuary?.type?.toString()||" "} optionsArray={["All","Project","Organization"]} />
           </HeadingMask>
  
         {
         apiResponse &&
       <>
      <div className="mt-10">
        <DynamicTable  data={apiResponse.data.activities} columns={columns} globalSearch={false} emptyMessage="No Alert" page={"activity"} />
      </div>
      <Pagination 
      length={apiResponse.data.pagination.total_pages} 
      setApiResponse={setApiResponse} 
      type={"activity"} 
      clicked={clicked}
      setClicked={setClicked}
      />
      </>
     }

  </DashboardMask>
       
  );
}

export default page;
