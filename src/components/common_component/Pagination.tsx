import { useState, useEffect } from "react";
import { useloader } from "../../context/loader_context/LoaderContext";
import getAccessManagerData from "../../utils/api/AccessManager";
import { CustomConfigPageLimits } from "../../../network/public/accessManager_api/Access.Manager.api";
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
  // function handleClick(i: number) {
  //   setClicked(i + 1);
  // }

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
      // setLoader(true);
      AlertmodifiedUrlConfig.page = clicked.toString();
      AlertmodifiedUrlConfig.limit = "10";
      getAlerts(setApiResponse, setApiError);
    }
    if(type==="activity")
    {
      setLoader(true);
      ActivitymodifiedUrlConfig.page = clicked.toString();
      ActivitymodifiedUrlConfig.limit = "10";
      fetchAllActivity(setApiResponse, setApiError, setLoader)

    }
  }, [clicked]);

  const getPages = () => {
    let pages = [];

    if (length <= 5) {
      // Show all pages if less than or equal to 5
      for (let i = 0; i < length; i++) {
        pages.push(i + 1);
      }
    } else {
      // Always show first 3
      if (clicked <= 3) {
        pages = [1, 2, 3, "...", length - 1, length];
      }
      // Middle range
      else if (clicked > 3 && clicked < length - 2) {
        pages = [
          1,
          "...",
          clicked - 1,
          clicked,
          clicked + 1,
          "...",
          length
        ];
      }
      // Near the end
      else {
        pages = [1, 2, "...", length - 2, length - 1, length];
      }
    }

    return pages;
  };

  return (
     <div className="pagination-container container mt-10 mb-10 flex items-center gap-2">
      {/* Prev button */}
      <button
        className={`px-2 pagination ${clicked !== 1 ? "" : "hover:cursor-not-allowed "}`}
        disabled={clicked===1}
        style={{ width: "40px" }}
        onClick={() => clicked > 1 && setClicked(clicked - 1)}
      >
        <IoIosArrowBack />
      </button>

      {/* Page numbers */}
      {getPages().map((page, idx) =>
        page === "..." ? (
          <span key={idx} className="px-2 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={idx}
            className={`text-center pagination p-0 ${
              clicked === page ? "active" : ""
            }`}
            onClick={() => {
              if (typeof page === "number") setClicked(page);
            }}
          >
            <p className="fs-6">{page}</p>
          </button>
        )
      )}

      {/* Next button */}
      <button
        className={`pagination px-2 ${
          clicked !== Math.floor(length) ? "" : "hover:cursor-not-allowed"
        }`}
        disabled={ Math.floor(length)===1}
        style={{ width: "40px" }}
        onClick={() => clicked < length && setClicked(clicked + 1)}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
