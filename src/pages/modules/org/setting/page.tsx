import React, { useEffect, useState } from "react";
import Navbar from "../../../../components/common_component/Navbar";
import { useTheme } from "../../../../context/AppContext";
import Sidebar from "../../../../components/common_component/Sidebar";
// import { useauth } from "../../../../context/auth_context/AuthContext";
import { useorg } from "../../../../context/org_context/OrganizationContext";
// import {UpdateOrganizationNameRequest,UpdateOrganizationNameResponse} from "../../../../../network/public/organization_api/update_organization/UpdateOrganization.interface";
import ThemePicker from "../../../../components/module/org_component/theme_component/ThemePicker";
// import OrgDetailsUpdate from "../../../../utils/api/OrganizationDetailUpdateApi";
// import { useloader } from "../../../../context/loader_context/LoaderContext";
import DisablePop from "../../../../components/common_component/DisablePop";
import UpdatePop from "../../../../components/common_component/UpdatePop";
import DeletePop from "../../../../components/common_component/DeletePop";

function page() {
  // const { onRoleChange } = useauth();
  // const { setLoader } = useloader();
  const { theme, onThemeChange } = useTheme();
  // const [display, setDisplay] = useState("Project");
  const { orgDetails } = useorg();
  const [iscopy, setIscopy] = useState(false);
  const [ispop, setIspop] = useState(false);
  const [themePopup , setThemePopup] = useState(false)
  // const [disable, setDisable] = useState(false);
  // const [apiError, setApiError] = useState("");

  // const [apiResponse, setApiResponse1] = useState<
  //   UpdateOrganizationNameResponse | undefined
  // >();
  // const [orgName, setOrgName] = useState<UpdateOrganizationNameRequest>({
  //   name: orgDetails?.data.name,
  //   tag: {
  //     key: "Tag 1",
  //     value: "Tag 1",
  //   },
  // });

  // useEffect(() => {
  //   if (orgDetails?.data?.name) {
  //     setOrgName((prev) => ({
  //       ...prev,
  //       name: orgDetails.data.name,
  //     }));
  //   }
  // }, []);
  //   console.log(orgDetails);

  // const handleChange = (value: string) => {
  //   switch (value) {
  //     //   case "Account":
  //     //     setDisplay("Account");
  //     //     break;

  //     case "Project":
  //       setDisplay("Project");
  //       break;

  //     case "Appearance":
  //       setDisplay("Appearance");
  //       break;
  //     case "Billing":
  //       setDisplay("Billing");
  //       break;
  //     case "Security":
  //       setDisplay("Security");
  //       break;
  //   }
  // };

  function formatDateWithTime(isoDateString: string): string {
    const date = new Date(isoDateString);

    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, // for AM/PM format
      //   timeZone: "Asia/Kolkata", // change based on your timezone
    };

    return date.toLocaleString("en-US", options);
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(orgDetails?.data._id ?? "");
      setIscopy(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  //   const handleSubmit = () => {

  //       console.log(orgName);
  //     }
  //   };
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   if (orgDetails?.data.name !== orgName.name?.trim() && orgName.name !== "") {
  //     setLoader(true);
  //     e.preventDefault();

  //     console.log(orgName);

  //     OrgDetailsUpdate(setApiResponse1, orgName, setApiError, setLoader);
  //     setDisable(true);
  //   }
  // };

  // const handleDelete = (e: React.FormEvent<HTMLFormElement>) => {
  //   //pop wiil set if return true then call api
  //   if (orgDetails?.data.name !== orgName.name?.trim() && orgName.name !== "") {
  //     setLoader(true);
  //     e.preventDefault();

  //     console.log(orgName);

  //     OrgDetailsUpdate(setApiResponse1, orgName, setApiError, setLoader);
  //     setDisable(true);
  //   }
  // };

  // const SwitchRenderer = (value:String) => {
  //   // const [selectedComponent, setSelectedComponent] = useState<ComponentKey | null>(null);

  //   const renderComponent = () => {
  //     switch (value) {
  //       case "A":
  //         return <DisablePop />;
  //       case "B":
  //         return <UpdatePop />;
  //       case "C":
  //         return <DeletePop />;
  //     }

  // };
  const [ComponentToRender, setComponentToRender] =
    useState<React.ReactNode>(null);

  const YourComponent = (value: String) => {
    switch (value) {
      case "Disable":
        setComponentToRender(<DisablePop setIspop={setIspop} />);
        break;
      case "Update":
        setComponentToRender(<UpdatePop setIspop={setIspop} />);
        break;
      case "Delete":
        setComponentToRender(<DeletePop setIspop={setIspop} />);
        break;
      default:
        setComponentToRender(null);
        break;
    }
  };

  return (
    <>
      <div className=" flex">
        <Sidebar active={"Settings"} />
        <div className=" w-full ">
          <Navbar theme={theme} onThemeChange={onThemeChange} />
          <div className="p-5 w-full hide-scrollbar custom-container overflow-scroll max-h-[90vh] h-[100vh] ">
            <div>
              <div className="mt-2">
                <h1 className="table-heading pl-2">Settings</h1>
              </div>
              {/* <div className="mt-2 pl-4 flex  gap-6">
                {["Project", "Appearance", "Billing"].map((value) => (
                  <button
                    key={value}
                    value={value}
                    className={`text-lg font-medium px-5 py-1  ${
                      display === value ? "border rounded-lg  shadow-sm" : ""
                    }`}
                    onClick={(e) => handleChange(e.currentTarget.value)}
                  >
                    {value}
                  </button>
                ))}
              </div> */}
              <div className="h-auto border-t-2 mt-4">
                {" "}
                {/* //component */}
                <div className=" mt-2 flex gap-3 py-5">
                  <div className="w-1/3 rounded-[20px] shadow-card card  p-6 flex flex-col gap-5">
                    <div className="flex justify-between  ">
                      <p className="text-2xl ">Organization ID</p>{" "}
                      <button onClick={() => handleCopy()}>
                        {iscopy ? (
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="1"
                              y="1"
                              width="22"
                              height="22"
                              rx="6"
                              fill="#ecfdf5"
                              stroke="#10b981"
                              stroke-width="1.5"
                            />
                            <path
                              d="M7 12l3 3 7-7"
                              stroke="#10b981"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="1"
                              y="1"
                              width="22"
                              height="22"
                              rx="6"
                              fill="#f9fafa"
                              stroke="#94a3b8"
                              stroke-width="1.5"
                            />

                            <path d="M8 8H16V16H8V8Z" fill="#0f172a" />
                            <path d="M10 6H18V14H16V8H10V6Z" fill="#0f172a" />
                          </svg>
                        )}
                      </button>
                    </div>
                    <div>
                      <p>{orgDetails?.data._id}</p>
                    </div>
                  </div>{" "}
                  {/*  project id*/}
                  <div className="w-1/3 rounded-[20px] shadow-card card  p-6 flex flex-col gap-5">
                    <div className="flex justify-between">
                      <p className="text-2xl">Organization Name</p>{" "}
                      <button
                        onClick={() => {
                          setIspop(true);
                          YourComponent("Update");
                        }}
                      >
                        {" "}
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="1"
                            y="1"
                            width="22"
                            height="22"
                            rx="6"
                            fill="#f9fafa"
                            stroke="#94a3b8"
                            stroke-width="1.5"
                          />

                          <path
                            d="M15.232 5.232l3.536 3.536-9.192 9.192H6v-3.576l9.232-9.152z"
                            fill="#0f172a"
                          />
                        </svg>
                      </button>
                    </div>
                    <div>
                      <p>{orgDetails?.data.name}</p>
                    </div>
                  </div>{" "}
                  {/*  project name*/}
                  <div className="w-1/3 rounded-[20px] shadow-card card   p-6 flex flex-col gap-5">
                    <div className="">
                      <p className="text-2xl">Created On</p>
                    </div>
                    <div>
                      <p>
                        {formatDateWithTime(orgDetails?.data.created_at ?? "")}
                      </p>
                    </div>
                  </div>{" "}
                  {/*  disable*/}
                  
                </div>
                
                {/* <div className="w-full rounded-[20px] shadow-md bg-white h-[8rem] mb-5 p-6 flex flex-col gap-5">
                  <div className="flex justify-between">
                    <p className="text-2xl">Disable Organization</p>{" "}
                   
                    
                  </div>
                  <div>
                    <p>
                      Disabling this organization will temporarily deactivate
                      all associated projects and integrations. You can
                      re-enable it anytime from the settings.
                    </p>
                  </div>
                </div> */}
                {/*  delete org */}
                
                <div className="w-full rounded-[20px]  shadow-card card h-[8rem] p-6 flex flex-col gap-5">
                  <div className="flex justify-between">
                    <p className="text-2xl ">Delete Organization</p>{" "}
                    <div>
                      <button
                        onClick={() => {
                          setIspop(true);
                          YourComponent("Disable");
                        }}
                        className="mr-4 border rounded-lg px-5 py-1 button"
                      >
                        Disable
                      </button>
                      <button
                        onClick={(e) => {
                          setIspop(true);
                          YourComponent("Delete");
                        }}
                        className="mr-4 border rounded-lg px-6 py-1 bg-red-500 text-white hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div>
                    <p>
                      Before deleting this organization, you must delete all its
                      projects and integrations. This action cannot be undone.
                    </p>
                  </div>
                </div>
                
              </div>
              <div className="w-full mt-5 rounded-[20px] shadow-card card h-[8rem] p-6 flex items-center justify-between bg-white">
  {/* Left side: Icon + Theme Name */}
  <div className="flex items-center gap-4">
    {/* Top view open box icon (SVG or Font Awesome fallback) */}
    <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
      {/* Replace with custom SVG if needed */}
      <i className="fas fa-cube text-xl text-gray-600"></i>
    </div>

    {/* Theme name + color */}
    <div>
      <div className="text-sm text-gray-500">Selected Theme</div>
      <div className="flex items-center gap-2">
        <span className="text-lg font-semibold text-gray-800">Ocean Blue</span>
        <span className="w-4 h-4 rounded-full bg-blue-500 border border-gray-300"></span>
      </div>
    </div>
  </div>

  {/* Right side: Action button */}
  <button className="px-4 py-2 rounded-lg text-sm font-medium button transition"
  onClick={()=>setThemePopup(true)}
   >
    Change Theme
  </button>
  </div>
              
            </div>
            
          </div>
          
        </div>
      </div>
      {ispop && (
        <div
          onClick={() => {
            setIspop(false);
            // setOrgName((prev) => ({
            //   ...prev,
            //   name: orgDetails?.data.name || "",
            // }));
            // setOrgName(orgDetails?.data.name);
          }}
          className="fixed inset-0 bg-black bg-opacity-55 flex items-center justify-center z-50 mt-[-5rem]"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="p-6 bg-white  h-72 w-1/3 rounded-[20px] shadow-md font-semibold"
          >
            {ComponentToRender}
          </div>
        </div>
      )}
      {themePopup&&<ThemePicker onClose={() => setThemePopup(false)} />}
    </>
  );
}

export default page;
