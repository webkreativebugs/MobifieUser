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
import SearchMask from "../../../../components/common_component/layered_components/SearchMask";
import FilterMask from "../../../../components/common_component/layered_components/FilterMask";
interface Quary {
  search?: string;
  type?: string;
}
function page() {
  const { setLoader } = useloader();
  const [apiError, setApiError] = useState<Error>();
  const [selectQuary, setSelectQuary] = useState<Quary>({ type: "All" });
  const [clicked, setClicked] = useState(1);
  const [apiResponse, setApiResponse] = useState<MemberResponse | undefined>();
  const [inputQuary, setInputQuary] = useState<Quary>({ search: "" });
  if (apiError) {
    console.log(apiError);
  }
  const columns: ColumnConfig[] = [
    { key: "email", title: "Email" },
    { key: "role", title: "Organization Role" },
  ];

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

    CustomConfigPageLimits.search = `${searchParam}`;

    getAccessManagerData(setApiResponse, setApiError, setLoader);
  }, [inputQuary]);

  useEffect(() => {
    if (!selectQuary) return;

    setLoader(true);

    const type = selectQuary?.type?.toString();

    if (type === "All") {
      CustomConfigPageLimits.search = "";
    } else {
      CustomConfigPageLimits.search = `&category=${encodeURIComponent(
        type || ""
      )}`;
      if (selectQuary.search) {
        CustomConfigPageLimits.search += `&search=${encodeURIComponent(
          selectQuary.search
        )}`;
      }
    }

    getAccessManagerData(setApiResponse, setApiError, setLoader);
    setClicked(1);
    // setLoader(false);
  }, [selectQuary]);

  useEffect(() => {
    setLoader(true);
    CustomConfigPageLimits.page = "1";
    CustomConfigPageLimits.limit = "10";
    CustomConfigPageLimits.search = "";
    getAccessManagerData(setApiResponse, setApiError, setLoader);
  }, []);

  return (
    <DashboardMask name={"Access Manager"}>
      <HeadingMask name={"Access Manager"}>
        <SearchMask
          handler={handleInputChange}
          value={inputQuary?.search?.toString() ?? ""}
        />
        <FilterMask
          handler={handleInputChange}
          optionsArray={["All", "Project", "Organization"]}
          value={selectQuary?.type?.toString() || " "}
        />
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
