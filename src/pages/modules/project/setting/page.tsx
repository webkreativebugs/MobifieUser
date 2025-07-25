import React, { useState } from "react";
import Navbar from "../../../../components/common_component/Navbar";
import { useTheme } from "../../../../context/AppContext";
import Sidebar from "../../../../components/common_component/Sidebar";
import { useauth } from "../../../../context/auth_context/AuthContext";

function page() {
  const { onRoleChange } = useauth();
  const { theme, onThemeChange } = useTheme();
  const [display, setDisplay] = useState("Project");
  const handleChange = (value: string) => {
    switch (value) {
      //   case "Account":
      //     setDisplay("Account");
      //     break;

      case "Project":
        setDisplay("Project");
        break;

      case "Appearance":
        setDisplay("Appearance");
        break;
      case "Billing":
        setDisplay("Billing");
        break;
      case "Security":
        setDisplay("Security");
        break;
    }
  };

  return (
    <>
      <div className="app-container flex">
        <Sidebar active={"Settings"} />
        <div className=" w-full ">
          <Navbar theme={theme} onThemeChange={onThemeChange} />
          <div className="p-5 w-full h-fit hide-scrollbar overflow-scroll max-h-[90vh] ">
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
                  <div className="w-1/3 rounded-[20px] shadow-md bg-white  p-6 flex flex-col gap-5">
                    <div className="flex justify-between">
                      <p className="text-2xl">Organization ID</p> <p>copy</p>
                    </div>
                    <div>
                      <p>345werwe345wesde4ee5</p>
                    </div>
                  </div>{" "}
                  {/*  project id*/}
                  <div className="w-1/3 rounded-[20px] shadow-md bg-white  p-6 flex flex-col gap-5">
                    <div className="flex justify-between">
                      <p className="text-2xl">Organization Name</p>{" "}
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
                    </div>
                    <div>
                      <p>Anubhav's Org - 2025-07-10</p>
                    </div>
                  </div>{" "}
                  {/*  project name*/}
                  <div className="w-1/3 rounded-[20px] shadow-md bg-white  p-6 flex flex-col gap-5">
                    <div className="">
                      <p className="text-2xl">Created On</p>
                    </div>
                    <div>
                      <p>07/10/25 - 07:43:53 AM</p>
                    </div>
                  </div>{" "}
                  {/*  project time zone*/}
                </div>
                <div className="w-full rounded-[20px] shadow-md bg-white h-[8rem] mb-3"></div>{" "}
                {/*  tags */}
                <div className="w-full rounded-[20px] shadow-md bg-white h-[8rem]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
