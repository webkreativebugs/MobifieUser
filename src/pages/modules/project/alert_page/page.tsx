import { useEffect, useState } from "react";
// import Navbar from "../../../../components/common_component/Navbar";
// import Sidebar from "../../../../components/common_component/Sidebar";
// import { useloader } from "../../../../context/loader_context/LoaderContext";
// import { MemberResponse } from "../../../../../network/public/accessManager_api/AccessManager.interface";
import { AlertResponse } from "../../../../../network/public/organization_api/alerts/Alerts.interface";
// import { CustomConfigPageLimits } from "../../../../../network/public/accessManager_api/AccessManager.api";
import { AlertmodifiedUrlConfig } from "../../../../../network/public/organization_api/alerts/Alerts.api";
import DashboardMask from "../../../../components/common_component/layered_components/DashboardMask";
import getAlerts from "../../../../utils/api/Alert";
// import DynamicTable from "../../../../components/common_component/dynamic_table";
// import { ColumnConfig } from "../../../../components/common_component/dynamic_table/types";
import Pagination from "../../../../components/common_component/Pagination";
import HeadingMask from "../../../../components/common_component/layered_components/HeadingMask"
import SearchMask from "../../../../components/common_component/layered_components/SearchMask";
import FilterMask from "../../../../components/common_component/layered_components/FilterMask";
import AlertCards from "../../../../components/module/project_component/AlertCards";
import { OrganizationDetailsConfig } from "../../../../../network/public/organization_api/organization_detail/OrganizationalDetails.api";
import ShimmerTiles from "../../../../components/common_component/Shimmer";
import PageNotFound from "../../../../components/common_component/PageNotFound";
const noData = '../../../../../public/assets/oops_no_data/no-alerts.png'
// import { changeTimezone } from "../../../../utils/dashboard/TimezoneConverter";
interface Quary {
  search?: string;
    type?: string;
}
function page() {
  // const { setLoader } = useloader();
  const [apiError, setApiError] = useState<Error>();
  const [clicked, setClicked] = useState(1);
  const [apiResponse, setApiResponse] = useState<AlertResponse | undefined>();
  const [inputQuary, setInputQuary] = useState<Quary>({ search: "" });
  const [selectQuary, setSelectQuary] = useState<Quary>({ type: "All" });
  if (apiError) {
    console.log(apiError);
  }
  // const columns: ColumnConfig[] = [
  //   { key: "message", title: "Alerts", },
  //   { key: "created_at", title:"Created At",},
  //   { key: "type", title:"Type",},
   
  // ];
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

    AlertmodifiedUrlConfig.search = `${searchParam}`;

    getAlerts(setApiResponse, setApiError);
  }, [inputQuary]);

   useEffect(() => {
  if (!selectQuary) return;

  // setLoader(true);

  const type = selectQuary?.type?.toString();

  if (type === "All") {
    AlertmodifiedUrlConfig.search = "";
  } else {
    AlertmodifiedUrlConfig.search = `&category=${encodeURIComponent(type || "")}`;
    if (selectQuary.search) {
      AlertmodifiedUrlConfig.search += `&search=${encodeURIComponent(selectQuary.search)}`;
    }
  }
  
  getAlerts(setApiResponse, setApiError);
  setClicked(1)
  // setLoader(false);
}, [selectQuary]);


  useEffect(() => {
    // setLoader(true);
    AlertmodifiedUrlConfig.page = "1";
    AlertmodifiedUrlConfig.limit = "10";
    AlertmodifiedUrlConfig.search = "";
    getAlerts(setApiResponse, setApiError);
   
  }, [OrganizationDetailsConfig.orgName]);


  return (
          <DashboardMask name={"Alerts"}>
           <HeadingMask name={"Alerts"}>
            <SearchMask handler={handleInputChange} value={inputQuary?.search?.toString() ?? ""} />
            <FilterMask handler={handleInputChange} value={selectQuary?.type?.toString()||" "} optionsArray={["All","Critical","Organization"]} />
           </HeadingMask>
           
            {/* Search Input */}
           
           {apiResponse && apiResponse.data.pagination.total_pages>=1 ?  (
            <>
              <div className="mt-10">
                {/* <DynamicTable
                  data={apiResponse.data.alerts}
                  columns={columns}
                  globalSearch={false}
                  emptyMessage="No Alert"
                  page={"alert"}
                /> */}
                <AlertCards data={apiResponse.data.alerts} />
              </div>
            { 
             apiResponse && apiResponse.data.pagination.total_pages>1 &&

              <Pagination
                length={apiResponse.data.pagination.total_pages}
                setApiResponse={setApiResponse}
                type={"alert"}
                clicked={clicked}
                setClicked={setClicked}
              />
            }
            </>):
            (
            <>
              { apiResponse ?
            <PageNotFound noData={noData} />:
            <ShimmerTiles />
              }
              </>
            )
          }

          </DashboardMask>
  );
}

export default page;
