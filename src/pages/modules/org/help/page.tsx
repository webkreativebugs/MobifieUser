import  { useEffect, useState } from "react";
import Navbar from "../../../../components/common_component/Navbar";
// import { useTheme } from "../../../../context/AppContext";
import Sidebar from "../../../../components/common_component/Sidebar";
import Faq from "../../../../components/common_component/Faq";
import fetchAllFaqs from "../../../../utils/api/Faqs";
import { useloader } from "../../../../context/loader_context/LoaderContext";
<<<<<<< HEAD
import { FAQResponse,} from "../../../../../network/public/organization_api/faqs/allfaqs/AllFaqs.interface";
=======
import { modifiedUrlConfig } from "../../../../../network/public/organization_api/faqs/allfaqs/AllFaqs.api";
import {
  FAQResponse,
  FAQCallback,
} from "../../../../../network/public/organization_api/faqs/allfaqs/AllFaqs.interface";
>>>>>>> 283f200b96db00e8fa8057c4226b89234d2fbd1a

interface Quary {
  type?: string;
  search?: string;
}

function page() {
  // const { onRoleChange } = useauth();
  const { setLoader } = useloader();
  const [apiError, setApiError] = useState("");
<<<<<<< HEAD
=======
  const { theme, onThemeChange } = useTheme();
  const [quary, setQuary] = useState<Quary>();
>>>>>>> 283f200b96db00e8fa8057c4226b89234d2fbd1a
  //   const [apiResponse, setApiResponse] = useState();
  const [apiResponse, setApiResponse] = useState<FAQResponse | undefined>(
    undefined
  );
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setQuary((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    modifiedUrlConfig.search = `?category=${encodeURIComponent(
      quary?.type?.toString() || ""
    )}${quary?.search ? `&search=${encodeURIComponent(quary.search)}` : ""}`;

    if (!apiResponse) {
      console.log("srger");
      setLoader(true);
      fetchAllFaqs(setApiResponse, setApiError, setLoader);
    }
  }, [handleInputChange]);

  return (
    <div className="custom-container flex">
      <Sidebar active={"Help"} />
      <div className=" w-full ">
        <Navbar/>
        <div className="p-5 w-full h-fit hide-scrollbar overflow-scroll max-h-[90vh] ">
          <div>
            <div className="mt-2">
              <h1 className="table-heading pl-2">FAQs</h1>
            </div>
            <div className="h-auto border-t-2 mt-4 flex flex-col items-center">
              <div className="w-3/5 flex justify-between items-center mt-4 gap-4">
                {/* Search Input */}
                <div className="relative w-3/4">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={quary?.search?.toString()}
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

                {/* Select Dropdown */}
                <select
                  value={quary?.type?.toString()} // fallback to empty string to avoid uncontrolled warning
                  name="type"
                  onChange={handleInputChange}
                  className="w-1/4 py-2 px-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition duration-300 shadow-sm cursor-pointer bg-white"
                >
                  <option value="">Select</option>
                  <option value="Project">Project</option>
                  <option value="Organization">Organization</option>
                </select>
              </div>
              {apiResponse && <Faq data={apiResponse?.data} />}
            </div>
          </div>
        </div>
      </div>

      {apiError}
    </div>
  );
}

export default page;
