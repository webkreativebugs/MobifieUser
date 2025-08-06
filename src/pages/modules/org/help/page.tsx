import  { useEffect, useState } from "react";
import Faq from "../../../../components/common_component/Faq";
import fetchAllFaqs from "../../../../utils/api/Faqs";
import { useloader } from "../../../../context/loader_context/LoaderContext";
import { modifiedUrlConfig } from "../../../../../network/public/organization_api/faqs/allfaqs/AllFaqs.api";
import Pagination from "../../../../components/common_component/Pagination";
import FilterMask from "../../../../components/common_component/layered_components/FilterMask";
import {
  FAQResponse,
} from "../../../../../network/public/organization_api/faqs/allfaqs/AllFaqs.interface";
import SearchMask from "../../../../components/common_component/layered_components/SearchMask";
import DashboardMask from "../../../../components/common_component/layered_components/DashboardMask";
import HeadingMask from "../../../../components/common_component/layered_components/HeadingMask";

interface Quary {
  type?: string;
  search?: string;
}

function page() {
 const { setLoader } = useloader();
const [apiError, setApiError] = useState<Error>();
const [clicked, setClicked] = useState(1)
const [selectQuary, setSelectQuary] = useState<Quary>({ type: "All" });
const [inputQuary, setInputQuary] = useState<Quary>({ search: "" });
const [apiResponse, setApiResponse] = useState<FAQResponse | undefined>();

if(apiError)
{
  console.log(apiError);
  
}
 
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
  if (!selectQuary) return;

  setLoader(true);

  const type = selectQuary?.type?.toString();

  if (type === "All") {
    modifiedUrlConfig.search = "";
  } else {
    modifiedUrlConfig.search = `&category=${encodeURIComponent(type || "")}`;
    if (selectQuary.search) {
      modifiedUrlConfig.search += `&search=${encodeURIComponent(selectQuary.search)}`;
    }
  }
  
  fetchAllFaqs(setApiResponse, setApiError,setLoader);
  setClicked(1)
  // setLoader(false);
}, [selectQuary]);


 useEffect(() => {
  if (!inputQuary?.search?.trim()) return;

  const type = selectQuary?.type?.toString();
  const categoryParam = type && type !== "All" ? `&category=${encodeURIComponent(type)}` : "?category=";
  const searchParam = `&search=${encodeURIComponent(inputQuary.search.trim())}`;

  modifiedUrlConfig.search = `${categoryParam}${searchParam}`;

  // setLoader(true);
  fetchAllFaqs(setApiResponse, setApiError , setLoader);
  // setLoader(false);
}, [inputQuary]);


 useEffect(() => {
  setLoader(true);
  setSelectQuary({ type: "All" });
}, []);


  return (
          <DashboardMask name="Help">
           <HeadingMask name="FAQ">
                {/* Search Input */}
                <SearchMask value={inputQuary?.search?.toString()??""} handler={handleInputChange} />

                {/* Select Dropdown */}
                <FilterMask handler={handleInputChange} value={selectQuary?.type?.toString()||" "} optionsArray={["All","Project","Organization"]} />
             </HeadingMask>
              {apiResponse &&<>
              <Faq data={apiResponse?.data} />
              <Pagination
               setApiResponse={setApiResponse} 
               type={"faq"}
               length={apiResponse.data.pagination.total_pages}
               clicked={clicked}
               setClicked={setClicked}
               />
              </> }
            
         </DashboardMask>
  );
}

export default page;
