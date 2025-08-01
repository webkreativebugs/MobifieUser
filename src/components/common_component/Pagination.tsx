import { useState, useEffect } from "react";
import { useloader } from "../../context/loader_context/LoaderContext";
import getAccessManagerData from "../../utils/api/AccessManager";
import { CustomConfigPageLimits } from "../../../network/public/accessManager_api/AccessManager.api";
import { modifiedUrlConfig } from "../../../network/public/organization_api/faqs/allfaqs/AllFaqs.api";
import { AlertmodifiedUrlConfig } from "../../../network/public/organization_api/alerts/Alerts.api";
import { ActivitymodifiedUrlConfig } from "../../../network/public/organization_api/activity/Activity.api";
import fetchAllFaqs from "../../utils/api/Faqs";
import fetchAllActivity from "../../utils/api/Activity";
// import fetchAllAlerts from "../../utils/api/Alerts";
import getAlerts from "../../utils/api/Alert";
// import { MemberResponse } from "../../../network/public/accessManager_api/AccessManager.interface"
import { Dispatch, SetStateAction } from "react";
// import { FAQResponse } from "../../../network/public/organization_api/faqs/allfaqs/AllFaqs.interface"
// const forward = "../../../../public/assets/forward.svg"
// const backward = "../../../../public/assets/backward.svg"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

interface Props {
  length: number;
  setApiResponse: any;
  type: string;
  clicked: number;
  setClicked: Dispatch<SetStateAction<number>>;
}

const Pagination = ({
  length,
  setApiResponse,
  type,
  clicked,
  setClicked,
}: Props) => {
  const { setLoader } = useloader();

  const [apiError, setApiError] = useState<Error>();
  if (apiError) {
    console.log(apiError);
  }
  function handleClick(i: number) {
    setClicked(i + 1);
  }

  useEffect(() => {
    if (type === "access") {
      setLoader(true);
      CustomConfigPageLimits.page = clicked.toString();
      CustomConfigPageLimits.limit = "10";
      CustomConfigPageLimits.search = "";
      getAccessManagerData(setApiResponse, setApiError, setLoader);
    }
    if (type === "faq") {
      setLoader(true);
      modifiedUrlConfig.page = clicked.toString();
      modifiedUrlConfig.limit = "10";
      fetchAllFaqs(setApiResponse, setApiError, setLoader);
    }
    if (type === "alert") {
      setLoader(true);
      AlertmodifiedUrlConfig.page = clicked.toString();
      AlertmodifiedUrlConfig.limit = "10";
      getAlerts(setApiResponse, setApiError, setLoader);
    }
    if(type==="activity")
    {
      setLoader(true);
      ActivitymodifiedUrlConfig.page = clicked.toString();
      ActivitymodifiedUrlConfig.limit = "10";
      fetchAllActivity(setApiResponse, setApiError, setLoader)

    }
  }, [clicked]);

  return (
    <div className="pagination-container container mt-10 mb-10  gap-2">
      <button
        className={`px-2 pagination ${clicked !== 1 ? "" : "hidden"} `}
        style={{ width: "40px" }}
        onClick={() => {
          if (clicked > 1) setClicked(clicked - 1);
        }}
      >
        <IoIosArrowBack />
        {/* <img className="" src={`${clicked !== 1 ? backward : ""}`} /> */}
      </button>
      {Array.from({ length }).map((_, i) => (
        <button
          key={i}
          className={`text-center pagination p-0 ${
            clicked == i + 1 && "active"
          }`}
          onClick={() => handleClick(i)}
        >
          <p className="   fs-6" style={{ height: "auto" }}>
            {" "}
            {i + 1}
          </p>
        </button>
      ))}
      <button
        className={`pagination px-2 ${
          clicked !== Math.floor(length) ? "" : "hidden"
        }  `}
        style={{ width: "40px" }}
        onClick={() => {
          if (clicked < length) setClicked(clicked + 1);
        }}
      >
        <IoIosArrowForward />
        {/* {clicked !== Math.floor(length) ? <img src={forward} style={{ width: "24px", height: "24px" }} /> : ''} */}
      </button>
    </div>
  );
};

export default Pagination;
