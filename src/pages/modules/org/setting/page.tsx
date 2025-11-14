import { useEffect, useState } from "react";
import { useorg } from "../../../../context/org_context/OrganizationContext";
import ThemePicker from "../../../../components/module/org_component/theme_component/ThemePicker";
import DisablePop from "../../../../components/common_component/DisablePop";
import UpdatePop from "../../../../components/common_component/UpdatePop";
import DeletePop from "../../../../components/common_component/DeletePop";
import { FaRegEdit } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import Toast from "../../../../components/common_component/Toast";
import DashboardMask from "../../../../components/common_component/layered_components/DashboardMask";
import { DashboardTypeEnums } from "../../../../../enum/DashboardLinks";
import UpdateTimezone from "../../../../components/common_component/UpdateTimezone";

enum components {
  DISABLE = "disable",
  UPDATE = "update",
  DELETE = "delete",
  UPDATEDATE = "updatedate",
}

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
      case components.UPDATEDATE:
        setComponentToRender(<UpdateTimezone setIspop={setIspop} />);
        break;
      default:
        setComponentToRender(null);
        break;
    }
  };
  const currentTime = "2024-11-29T13:10:00.000Z";
  const [timeZone, setTimeZone] = useState("GMT");
  function getTimezoneAbbrFromISO(isoString: string) {
    const date = new Date(isoString);

    const match = date.toUTCString().match(/\b[A-Z]{2,4}\b$/);
    return match ? match[0] : "Unknown";
  }

  // useEffect(() => {
  //   const currentCode = getTimezoneAbbrFromISO(currentTime);
  //   if (currentCode) {
  //     setTimeZone(currentCode);
  //   }
  // });

  const timezones = [
    { label: "UTC", value: "UTC", offset: "+00:00" },
    { label: "Greenwich Mean Time (GMT)", value: "GMT", offset: "+00:00" },
    { label: "Indian Standard Time (IST)", value: "IST", offset: "+05:30" },
    { label: "Eastern Standard Time (EST)", value: "EST", offset: "-05:00" },
    { label: "Central Standard Time (CST)", value: "CST", offset: "-06:00" },
    { label: "Mountain Standard Time (MST)", value: "MST", offset: "-07:00" },
    { label: "Pacific Standard Time (PST)", value: "PST", offset: "-08:00" },
    { label: "Japan Standard Time (JST)", value: "JST", offset: "+09:00" },
    { label: "China Standard Time (CST)", value: "CHST", offset: "+08:00" },
    { label: "Korea Standard Time (KST)", value: "KST", offset: "+09:00" },
    {
      label: "Australian Eastern Standard Time (AEST)",
      value: "AEST",
      offset: "+10:00",
    },
    {
      label: "Australian Western Standard Time (AWST)",
      value: "AWST",
      offset: "+08:00",
    },
    { label: "British Summer Time (BST)", value: "BST", offset: "+01:00" },
    { label: "Central European Time (CET)", value: "CET", offset: "+01:00" },
    { label: "Eastern European Time (EET)", value: "EET", offset: "+02:00" },
    { label: "Arabian Standard Time (AST)", value: "AST", offset: "+03:00" },
    { label: "Singapore Standard Time (SGT)", value: "SGT", offset: "+08:00" },
    {
      label: "New Zealand Standard Time (NZST)",
      value: "NZST",
      offset: "+12:00",
    },
    { label: "Hawaii Standard Time (HST)", value: "HST", offset: "-10:00" },
    { label: "Alaska Standard Time (AKST)", value: "AKST", offset: "-09:00" },
  ];

  useEffect(() => {});

  return (
    <>
      <DashboardMask name={DashboardTypeEnums.SETTINGS}>
        <div className="">
          <h1 className="table-heading text-3xl pl-2 ">Settings</h1>
        </div>
        <div className="h-auto border-t-2 mt-4  ">
          {" "}
          {/* //component */}
          <div className=" mt-4 flex gap-6  mb-5   ">
            <div className="w-2/5 rounded-[20px] mt-4 card-bg card  px-6 py-4 flex flex-col gap-2">
              <div className="flex justify-between  ">
                <p className="text-xl font-medium ">Organization ID</p>{" "}
                <button onClick={() => handleCopy()}>
                  <IoCopyOutline className=" w-5 h-5" />
                </button>
              </div>
              <div>
                <p>{orgDetails?.data._id}</p>
              </div>
            </div>{" "}
            {/*  project name*/}
            <div className="w-2/5 rounded-[20px] mt-4 card-bg card  px-6 py-4 flex flex-col gap-2 ">
              <div className="">
                <p className="text-xl font-medium">Created On</p>
              </div>
              <div>
                <p>{formatDateWithTime(orgDetails?.data.created_at ?? "")}</p>
              </div>
            </div>{" "}
            {/*  disable*/}
          </div>
          {/* edit name  */}
          <div className="w-full rounded-[20px] card-bg  card h-[7rem] p-5 px-6 gap-4 flex flex-col  mb-5">
            <div className="flex justify-between">
              <p className="text-xl font-medium">Organization Name</p>{" "}
              <button
                onClick={() => {
                  setIspop(true);
                  YourComponent("Update");
                }}
              >
                {" "}
                <FaRegEdit className=" w-5 h-5" />
              </button>
            </div>
            <div>
              <p>{orgDetails?.data.name}</p>
            </div>
          </div>
          {/*  delete org */}
          <div className="w-full rounded-[20px] card-bg  card h-[7rem] p-5 px-6 flex flex-col gap-4">
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
          {/* //timezone */}
          <div className="w-full relative rounded-[20px] card-bg  card h-[8rem] p-4 px-6 mt-5 flex flex-col gap-4">
            <div className="flex justify-end items-center absolute top-5 right-2">
              {getTimezoneAbbrFromISO(currentTime) !== timeZone && (
                <div className=" w-1/3 flex justify-end items-start  h-full ">
                  {" "}
                  <button
                    onClick={() => {
                      setIspop(true);
                      YourComponent(components.UPDATEDATE);
                    }}
                    className="mr-4 border rounded-lg px-6 py-1 bg-red-500 text-white hover:bg-red-600"
                  >
                    Update
                  </button>
                </div>
              )}
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <p className="text-lgmb-2">Select Timezone</p>{" "}
                <select
                  value={timeZone}
                  onChange={(e) => setTimeZone(e.target.value)}
                  className="w-full mb-4 p-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  {timezones.map((tz) => (
                    <option key={tz.value} value={tz.value}>
                      {tz.label} ({tz.offset})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                {" "}
                <p className="text-xl  mb-2">Select Date Formate</p>{" "}
                <select
                  // value={dateFormat}
                  // onChange={(e) => setDateFormat(e.target.value)}
                  className="w-full mb-4 p-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  {[
                    { label: "DD/MM/YYYY", value: "DD/MM/YYYY" },
                    { label: "MM/DD/YYYY", value: "MM/DD/YYYY" },
                    { label: "YYYY-MM-DD", value: "YYYY-MM-DD" },
                    { label: "DD MMM YYYY", value: "DD MMM YYYY" },
                  ].map((fmt) => (
                    <option key={fmt.value} value={fmt.value}>
                      {fmt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-5 rounded-[20px] card-bg card h-[7rem] p-5 px-6 flex items-center justify-between ">
          <div className="flex items-center gap-4">
            {/* Top view open box icon (SVG or Font Awesome fallback) */}
            <div className="w-10 h-10 flex items-center justify-center card-bg rounded-full">
              {/* Replace with custom SVG if needed */}
              <i className="fas fa-cube text-xl text-gray-600"></i>
            </div>

            {/* Theme name + color */}
            <div className="">
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
      <Toast msg={"ID copied"} show={iscopy} onClose={() => setIscopy(false)} />
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
            className="p-6 card h-fit w-1/3 rounded-[20px] shadow-md font-semibold bg-primary"
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
