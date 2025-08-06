import { useState } from "react";
import { useorg } from "../../../../context/org_context/OrganizationContext";
import ThemePicker from "../../../../components/module/org_component/theme_component/ThemePicker";
import DisablePop from "../../../../components/common_component/DisablePop";
import UpdatePop from "../../../../components/common_component/UpdatePop";
import DeletePop from "../../../../components/common_component/DeletePop";
import { FaRegEdit } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import Toast from "../../../../components/common_component/Toast";
import DashboardMask from "../../../../components/common_component/layered_components/DashboardMask";

function page() {
  const { orgDetails } = useorg();
  const [iscopy, setIscopy] = useState(false);
  const [ispop, setIspop] = useState(false);
  const [themePopup, setThemePopup] = useState(false);

  function formatDateWithTime(isoDateString: string): string {
    const date = new Date(isoDateString);

    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, 
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
          <DashboardMask name={"Settings"}>
             <div className="">
                <h1 className="table-heading pl-2">Settings</h1>
              </div>
              <div className="h-auto border-t-2 mt-4">
                {" "}
                {/* //component */}
                <div className=" mt-2 flex gap-3 py-5">
                  <div className="w-1/3 rounded-[20px] shadow-muted card  p-6 flex flex-col gap-5">
                    <div className="flex justify-between  ">
                      <p className="text-xl font-medium ">Organization ID</p>{" "}
                      <button onClick={() => handleCopy()}>
                        <IoCopyOutline className=" w-4 h-4" />
                      </button>
                    </div>
                    <div>
                      <p>{orgDetails?.data._id}</p>
                    </div>
                  </div>{" "}
                  {/*  project id*/}
                  <div className="w-1/3 rounded-[20px] shadow-muted card  p-6 flex flex-col gap-5">
                    <div className="flex justify-between">
                      <p className="text-xl font-medium">Organization Name</p>{" "}
                      <button
                        onClick={() => {
                          setIspop(true);
                          YourComponent("Update");
                        }}
                      >
                        {" "}
                        <FaRegEdit className=" w-4 h-4" />
                      </button>
                    </div>
                    <div>
                      <p>{orgDetails?.data.name}</p>
                    </div>
                  </div>{" "}
                  {/*  project name*/}
                  <div className="w-1/3 rounded-[20px] shadow-muted card   p-6 flex flex-col gap-5">
                    <div className="">
                      <p className="text-xl font-medium">Created On</p>
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
                <div className="w-full rounded-[20px]  shadow-muted card h-[8rem] p-6 flex flex-col gap-5">
                  <div className="flex justify-between">
                    <p className="text-xl font-medium ">Delete Organization</p>{" "}
                    <div>
                      <button
                        onClick={() => {
                          setIspop(true);
                          YourComponent("Disable");
                        }}
                        className="mr-4 border rounded-lg px-5 py-1 button"
                      >
                        Deactivate
                      </button>
                      <button
                        onClick={() => {
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
              <div className="w-full mt-5 rounded-[20px] shadow-muted card h-[8rem] p-6 flex items-center justify-between bg-white">
                {/* Left side: Icon + Theme Name */}
                <div className="flex items-center gap-4">
                  {/* Top view open box icon (SVG or Font Awesome fallback) */}
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
                    {/* Replace with custom SVG if needed */}
                    <i className="fas fa-cube text-xl text-gray-600"></i>
                  </div>

                  {/* Theme name + color */}
                  <div className="shadow-muted">
                    <div className="text-sm text-gray-500">Selected Theme</div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold text-gray-800">
                        Ocean Blue
                      </span>
                      <span className="w-4 h-4 rounded-full bg-blue-500 border border-gray-300"></span>
                    </div>
                  </div>
                </div>

                {/* Right side: Action button */}
                <button
                  className="px-4 py-2 rounded-lg text-sm font-medium button transition"
                  onClick={() => setThemePopup(true)}
                >
                  Change Theme
                </button>
              </div>
          </DashboardMask>
          <Toast
            msg={"ID copied"}
            show={iscopy}
            onClose={() => setIscopy(false)}
          />
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
            className="p-6 card h-fit w-1/3 rounded-[20px] shadow-md font-semibold"
          >
            {ComponentToRender}
          </div>
        </div>
      )}
      {themePopup && <ThemePicker onClose={() => setThemePopup(false)} />}
    </>
  );
}

export default page;
