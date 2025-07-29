import { useEffect, useState } from "react";
import Navbar from "../../../../components/common_component/Navbar";
// import { useTheme } from "../../../../context/AppContext";
import Sidebar from "../../../../components/common_component/Sidebar";
import Faq from "../../../../components/common_component/Faq";
import fetchAllFaqs from "../../../../utils/api/Faqs";
import { useloader } from "../../../../context/loader_context/LoaderContext";
import { modifiedUrlConfig } from "../../../../../network/public/organization_api/faqs/allfaqs/AllFaqs.api";
import { FAQResponse } from "../../../../../network/public/organization_api/faqs/allfaqs/AllFaqs.interface";

interface Quary {
  type?: string;
  search?: string;
}

function page() {
  // const { onRoleChange } = useauth();
  const { setLoader } = useloader();
  const [apiError, setApiError] = useState("");
  // const { theme, onThemeChange } = useTheme();
  const [quary, setQuary] = useState<Quary>();
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

    console.log("srger");
    setLoader(true);
    fetchAllFaqs(setApiResponse, setApiError, setLoader);
  }, [quary]);

  return (
    <div className="custom-container flex">
      <Sidebar active={"Access Manager"} />
      <div className=" w-full ">
        <Navbar />
        <div className="p-5 w-full h-fit hide-scrollbar overflow-scroll max-h-[90vh] ">
          <div>
            <div className="mt-2">
              <h1 className="table-heading pl-2">Access Manager</h1>
            </div>
          </div>
        </div>
      </div>

      {apiError}
    </div>
  );
}

export default page;
