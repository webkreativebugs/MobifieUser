import React, { useEffect, useState } from "react";
import HeadingMask from "../../../../components/common_component/layered_components/HeadingMask";
import DashboardMask from "../../../../components/common_component/layered_components/DashboardMask";
import { DashboardTypeEnums } from "../../../../../enum/DashboardLinks";
import { modifiedUrlConfig } from "../../../../../network/public/organization_api/faqs/allfaqs/AllFaqs.api";
import { useNavigate } from "react-router-dom";
import fetchAllFaqs from "../../../../utils/api/Faqs";
import { useloader } from "../../../../context/loader_context/LoaderContext";
import { FAQResponse } from "../../../../../network/public/organization_api/faqs/allfaqs/AllFaqs.interface";
import Report from "../../../../components/module/project_component/ConfigComponents/ui/supportComponent/Report";
import Search from "../../../../components/module/project_component/ConfigComponents/ui/supportComponent/Search";
import { OrganizationDetailsConfig } from "../../../../../network/public/organization_api/organization_detail/OrganizationalDetails.api";
import { DiVim } from "react-icons/di";
import Toast from "../../../../components/common_component/Toast";

function page() {
  const navigate = useNavigate();
  const { setLoader } = useloader();

  const [searchValue, setSearchValue] = useState("");
  const [apiResponse, setApiResponse] = useState<FAQResponse | undefined>();
  const [apiError, setApiError] = useState<Error>();
  const [popUp, setPOpUp] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);

    const type = "All";

    if (type === "All") {
      modifiedUrlConfig.search = "";
    } else {
      modifiedUrlConfig.search = `&category=${encodeURIComponent(type || "")}`;
      if (searchValue) {
        modifiedUrlConfig.search += `&search=${encodeURIComponent(
          searchValue
        )}`;
      }
    }

    fetchAllFaqs(setApiResponse, setApiError, setLoader);
    // setClicked(1);
    // setLoader(false);
  }, []);

  useEffect(() => {
    if (!searchValue.trim()) return;

    const type = "All";
    const categoryParam =
      type && type !== "All"
        ? `&category=${encodeURIComponent(type)}`
        : "?category=";
    const searchParam = `&search=${encodeURIComponent(searchValue.trim())}`;

    modifiedUrlConfig.search = `${categoryParam}${searchParam}`;

    // setLoader(true);
    fetchAllFaqs(setApiResponse, setApiError, setLoader);
    // setLoader(false);
    console.log(apiResponse);
  }, [searchValue, OrganizationDetailsConfig.orgName]);

  useEffect(() => {
    // modifiedUrlConfig.orgName=orgDetails!==undefined?orgDetails.data._id:""
    // setLoader(true);
    // setSelectQuary({ type: "All" });
  }, []);
  const [isTost, setIsTost] = useState<boolean>(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your message has been submitted. We'll get back to you soon!");
    setForm({ name: "", email: "", message: "" });
  };
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
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
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
              {apiResponse && apiResponse.data?.faqs?.length > 0 ? (
                <div className="space-y-1">
                  {apiResponse.data.faqs.slice(0, 4).map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 flex items-start">
                        <span className="mr-2 text-blue-500 font-bold">Q.</span>
                        {item.question}
                      </h4>
                      <p className="mt-1 text-gray-700 leading-relaxed flex items-start">
                        <span className="mr-2 text-green-500 font-bold">
                          A.
                        </span>
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full text-center text-gray-500 mt-20"></div>
              )}
            </>
            <div className="w-full text-center text-gray-500 mt-20">
              <button
                onClick={() => setPOpUp(true)}
                className="px-8 py-1.5 border border-black text-black font-medium rounded-xl hover:bg-blue-50 transition-all duration-200"
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
          <Report setPOpUp={setPOpUp} setIsTost={setIsTost} />
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
