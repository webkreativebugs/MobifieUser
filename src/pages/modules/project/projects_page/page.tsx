import { useEffect, useState } from "react";
import { useloader } from "../../../../context/loader_context/LoaderContext";
import { ProjectResponse } from "../../../../../network/public/organization_api/project/Project.interface";
import { AlertmodifiedUrlConfig } from "../../../../../network/public/organization_api/alerts/Alerts.api";
import projects from "../../../../utils/api/Project";
import DashboardMask from "../../../../components/common_component/layered_components/DashboardMask";
import HeadingMask from "../../../../components/common_component/layered_components/HeadingMask";
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
   <DashboardMask name={"Projects"} >
    <HeadingMask name={"Projects"}>
      <div>

      </div>
    </HeadingMask>

   </DashboardMask>
  );
}

export default page;
