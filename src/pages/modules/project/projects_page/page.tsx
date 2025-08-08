import { useEffect, useState } from "react";
import { useloader } from "../../../../context/loader_context/LoaderContext";
import { ProjectResponse } from "../../../../../network/public/organization_api/project/Project.interface";
import { AlertmodifiedUrlConfig } from "../../../../../network/public/organization_api/alerts/Alerts.api";
import projects from "../../../../utils/api/Project";
import DashboardMask from "../../../../components/common_component/layered_components/DashboardMask";
import HeadingMask from "../../../../components/common_component/layered_components/HeadingMask";
import Carousel from "../../../../components/module/project_component/Carousel"; // Adjust the path if needed
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

  function formatDateWithTime(isoString: string): string {
    if (!isoString) return "Invalid Date";

    const date = new Date(isoString);
    return date.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  }

  return (
    <DashboardMask name={"Projects"}>
      <HeadingMask name={"Projects"}>
        <div></div>
      </HeadingMask>
      <div className="mt-5 relative  ">
        {/* Header */}
        <div className="absolute top-[-4.5rem] right-2 flex justify-between items-center  mb-6">
          <span
            className={`inline-block px-4 py-1 text-lg font-semibold rounded-full capitalize ${
              apiResponse?.data.status === "active"
                ? "bg-emerald-100 text-emerald-700"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {apiResponse?.data.status}
          </span>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { label: "Project Name", value: apiResponse?.data.name },
            { label: "Project ID", value: apiResponse?.data._id },
            { label: "Plan Name", value: apiResponse?.data.plan_name },
            { label: "Created By", value: apiResponse?.data.createBy },
            {
              label: "Created At",
              value: formatDateWithTime(apiResponse?.data.createdAt || ""),
            },
            // {
            //   label: "Updated At",
            //   value: formatDateWithTime(apiResponse?.data.updatedAt || ""),
            // },
            {
              label: "Website",
              value: (
                <a
                  href={apiResponse?.data.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  {apiResponse?.data.website}
                </a>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full p-5 card-bg rounded-xl shadow-sm"
            >
              <label className="block text-xl font-medium mb-1">
                {item.label}
              </label>
              <p className="text-gray-900 text-base">
                {typeof item.value === "string" ||
                typeof item.value === "number"
                  ? item.value
                  : item.value}
                {/* {item.value} */}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-8 py-6 card-bg mt-4 rounded-xl  ">
          {/* Left side: Text + Button */}
          <div className="md:w-1/2 flex flex-col mt-[-1rem]  justify-center">
            <h1 className="text-3xl  font-semibold  ">
              Customize Your Project
            </h1>
            <p className="text-gray-700 mt-12 text-base md:text-lg font-sm leading-relaxed">
              Hello! If you need any modifications or feature additions to
              better align this project with your specific requirements, feel
              free to reach out. I'm happy to customize the solution to best fit
              your goals. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ipsam fugiat nihil, deserunt aliquid quasi aut!
            </p>
            <button className="mt-28 w-2/5  bg-black text-white text-lg font-semibold py-3 px-6 rounded-lg transition-all duration-200">
              Customize
            </button>
          </div>

          {/* Right side: Image */}
          <div className="md:w-1/2 flex gap-3 justify-center  ">
            <img
              src="https://cdn.dribbble.com/users/5663361/screenshots/20523766/post_template.png"
              alt="Project Preview"
              className="rounded-lg   h-auto md:h-[400px] w-[600px] shadow-md"
            />

            {/* <Carousel /> */}

            {/* <img
              src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios16-iphone13-pro-widgets-home-screen.png" // replace with your image path
              alt="Project Preview"
              className="rounded-lg w-1/4 max-w-sm shadow-md h-1/6 "
            /> */}
          </div>
        </div>
      </div>
    </DashboardMask>
  );
}

export default page;
