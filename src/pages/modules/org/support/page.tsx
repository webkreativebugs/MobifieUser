import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
import HeadingMask from "../../../../components/common_component/layered_components/HeadingMask";
import DashboardMask from "../../../../components/common_component/layered_components/DashboardMask";
import { DashboardTypeEnums } from "../../../../../enum/DashboardLinks";
// import { modifiedUrlConfig } from "../../../../../network/public/organization_api/faqs/allfaqs/AllFaqs.api";
import { MdMoreHoriz } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import fetchAllFaqs from "../../../../utils/api/Faqs";
import { useloader } from "../../../../context/loader_context/LoaderContext";
// import { FAQResponse } from "../../../../../network/public/organization_api/faqs/allfaqs/AllFaqs.interface";
import Report from "../../../../components/module/project_component/ConfigComponents/ui/supportComponent/Report";
import Search from "../../../../components/module/project_component/ConfigComponents/ui/supportComponent/Search";
// import { OrganizationDetailsConfig } from "../../../../../network/public/organization_api/organization_detail/OrganizationalDetails.api";
// import createSupport from "../../../../utils/api/supportticketApi/CreateNewSupportTicket";
// import { DiVim } from "react-icons/di";
import Toast from "../../../../components/common_component/Toast";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {
  ListAllSupportTicketsResponse,
  ListAllSupportTicketsCallback,
} from "../../../../../network/public/project_api/getsupportTicket/GetSupportTicket.interface";
import getSupport from "../../../../utils/api/supportticketApi/GetSupportTickets";
import UpdateSupportTicket from "../../../../components/module/project_component/ConfigComponents/ui/supportComponent/UpdateSupportTicket";
import { Link } from "react-router-dom";
import FilterSortSearchRapper from "../../../../components/common_component/FilterSortSearchRapper";

enum popupComponent {
  DELETE = "deleteTicket",
  UPDATE = "updateTicket",
  CREATE = "createnewTicket",
}
interface SupportTicket {
  customer_id: string;

  description: string;

  escalation_level: string;

  priority: string;

  project_id: string;

  status: string;

  subject: string;

  _id: string;
}

const dummy = {
  customer_id: "",

  description: "",

  escalation_level: "",

  priority: "",

  project_id: "",

  status: "",

  subject: "",

  _id: "",
};

function page() {
  // const navigate = useNavigate();
  // const navigate = useNavigate();
  const { setLoader } = useloader();
  var count = 1;

  const [searchValue, setSearchValue] = useState("");
  const [Popupdisplay, setPopupdisplay] = useState("");
  const [supportTicketData, setSupportTicketData] = useState<SupportTicket>();
  const [openId, setOpenId] = useState<string | null>(null);
  const [apiResponse, setApiResponse] =
    useState<ListAllSupportTicketsResponse>();
  const [apiError, setApiError] = useState<Error>();
  const [popUp, setPOpUp] = useState<boolean>(false);

  console.log(apiError);

  useEffect(() => {
    // setLoader(true);

    // const type = "All";

    // if (type === "All") {
    //   modifiedUrlConfig.search = "";
    // } else {
    //   modifiedUrlConfig.search = `&category=${encodeURIComponent(type || "")}`;
    //   if (searchValue) {
    //     modifiedUrlConfig.search += `&search=${encodeURIComponent(
    //       searchValue
    //     )}`;
    //   }
    // }

    getSupport(setApiResponse, setApiError, setLoader);
    // setClicked(1);
    // if (apiResponse) {
    //   setLoader(false);
    // }
  }, []);

  // useEffect(() => {
  //   if (!searchValue.trim()) return;

  //   const type = "All";
  //   const categoryParam =
  //     type && type !== "All"
  //       ? `&category=${encodeURIComponent(type)}`
  //       : "?category=";
  //   const searchParam = `&search=${encodeURIComponent(searchValue.trim())}`;

  //   modifiedUrlConfig.search = `${categoryParam}${searchParam}`;

  //   // setLoader(true);
  //   // fetchAllFaqs(setApiResponse, setApiError, setLoader);
  //   // setLoader(false);
  //   console.log(apiResponse);
  // }, [searchValue, OrganizationDetailsConfig.orgName]);

  useEffect(() => {}, []);
  const [isTost, setIsTost] = useState<boolean>(false);

  return (
    <DashboardMask name={DashboardTypeEnums.SUPPORT}>
      <HeadingMask name={"Support Portal"}>
        <div>This is a Support page</div>
      </HeadingMask>

      <div className="flex flex-col lg:flex-row w-full gap-6 px-4 mt-8 h-[calc(100vh-200px)]">
        {/* LEFT: FAQ Section */}
        <div className="flex-1 flex flex-col  rounded-2xl  p-1 overflow-hidden">
          {/* Search Bar */}
          <div className="w-full  mx-auto mb-4 ">
            <FilterSortSearchRapper />
            {/* <Search searchValue={searchValue} setSearchValue={setSearchValue} /> */}
          </div>

          {/* FAQ List */}
          <div className="flex-1 overflow-y-auto hide-scrollbar w-full py-6 mx-auto ">
            {/* {!apiResponse && searchValue !== null ? (
              <>
                <Report />
              </>
            ) : (
              <></>
            )} */}
            <>
              {apiResponse && apiResponse.data?.tickets?.length > 0 ? (
                <div className="space-y-1">
                  {apiResponse.data.tickets.slice(0, 4).map((item, idx) => (
                    <>
                      <div
                        key={idx}
                        className="bg-white border relative border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <h4 className="text-lg font-semibold text-gray-900 flex items-start">
                          <span className="mr-2 text-blue-500 font-bold">
                            Q.
                          </span>
                          {item.subject}
                        </h4>
                        <p className="mt-1 text-gray-700 leading-relaxed flex items-start">
                          <span className="mr-2 text-green-500 font-bold">
                            A.
                          </span>
                          {item.description}
                        </p>
                        <button
                          className="absolute top-2 right-3 text-xl font-semibold p-1 rounded-full hover:bg-gray-100"
                          onMouseEnter={() => setOpenId(item._id)}
                          onMouseLeave={() => setOpenId("")}
                        >
                          <MdMoreHoriz />
                        </button>

                        {/* --- Dropdown Menu --- */}
                        {openId == item._id && (
                          <div
                            className="absolute right-0 mt-[-45px] w-28 bg-white flex flex-col  rounded-lg border shadow-xl border-gray-200 z-50"
                            onMouseEnter={() => setOpenId(item._id)}
                            onMouseLeave={() => setOpenId("")}
                          >
                            <button
                              onClick={() => {
                                setSupportTicketData(item);
                                setPOpUp(true);
                                setPopupdisplay(popupComponent.UPDATE);
                              }}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                              Update Ticket
                            </button>

                            {/* <button
                        onClick={() =>
                          navigate("/billing/details", {
                            state: {
                              id: "12345",
                              name: "bill",
                            },
                          })
                        }
                        className="block w-full px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
                      >
                       View Details
                      </button> */}
                            <Link
                              to="/support/ticket_details"
                              state={{ id: item._id, name: "supportticket" }}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                              View Details
                            </Link>
                          </div>
                        )}
                      </div>
                    </>
                  ))}
                </div>
              ) : (
                <div className="w-full text-center text-gray-500 mt-20">
                  <h1>Support ticket is Loading...</h1>
                </div>
              )}
            </>
            <>
              {apiResponse && apiResponse.data?.tickets?.length > 0 && (
                <div className="w-full flex justify-center items-center gap-6 mt-4">
                  {/* Previous Button */}
                  <button
                    className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200 disabled:opacity-50"
                    // disabled={!apiResponse?.data.pageInfo.hasPreviousPage}
                    onClick={() => {
                      // handlePrev()
                    }}
                  >
                    <IoIosArrowBack className="text-2xl text-[#7ed957]" />
                    <span>Prev</span>
                  </button>

                  {/* Next Button */}
                  {apiResponse?.data.pageInfo.hasNextPage && (
                    <button
                      onClick={() => {
                        getSupport(setApiResponse, setApiError, setLoader);
                      }}
                      className="flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200"
                    >
                      <span>Next</span>
                      <IoIosArrowForward className="text-2xl text-[#7ed957]" />
                    </button>
                  )}
                </div>
              )}
            </>

            <div className="w-full text-center text-gray-500 mt-20">
              <button
                onClick={() => {
                  setPOpUp(true);
                  setPopupdisplay(popupComponent.CREATE);
                }}
                className="px-8 py-1.5 border-2 border-gray-500 text-black font-medium rounded-xl hover:bg-blue-50 transition-all duration-200"
              >
                Create New
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: Quick Help Sidebar */}
        <div className="lg:w-1/3 bg-white border border-gray-200 rounded-2xl p-6 shadow-md h-fit lg:h-full">
          <h4 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Quick Help
          </h4>

          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              📩 <span className="font-medium">Email:</span>{" "}
              support@besthirez.com
            </li>
            <li>
              📞 <span className="font-medium">Phone:</span> +91 98765 43210
            </li>
            <li>
              💬 <span className="font-medium">Chat:</span> Available 9 AM – 6
              PM
            </li>
          </ul>

          <div className="mt-6 border-t pt-4">
            <h5 className="font-semibold text-gray-800 mb-2 text-sm">
              Popular Topics:
            </h5>
            <ul className="text-sm text-blue-600 space-y-1">
              <li>🔹 How to manage your account</li>
              <li>🔹 Resetting your password</li>
              <li>🔹 Updating billing information</li>
            </ul>
          </div>
        </div>
      </div>
      {popUp && (
        <div
          onClick={() => {
            setPOpUp(false);
            // setOrgName((prev) => ({
            //   ...prev,
            //   name: orgDetails?.data.namsddse || "",
            // }));
            // setOrgName(orgDetails?.data.name);
          }}
          className="fixed inset-0 bg-black bg-opacity-55 flex items-center justify-center z-50 mt-[-5rem] "
        >
          {Popupdisplay === popupComponent.UPDATE && (
            <UpdateSupportTicket
              setPOpUp={setPOpUp}
              setIsTost={setIsTost}
              supportTicketData={supportTicketData ? supportTicketData : dummy}
            />
          )}
          {Popupdisplay === popupComponent.CREATE && (
            <Report setPOpUp={setPOpUp} setIsTost={setIsTost} />
          )}
        </div>
      )}
      {/* {tost && } */}
      <Toast
        msg={"Request sent"}
        show={isTost}
        onClose={() => setIsTost(false)}
        duration={900}
      />
    </DashboardMask>
  );
}

export default page;
