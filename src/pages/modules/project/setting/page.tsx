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
              <div className="mt-2 pl-4 flex  gap-6">
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
              </div>
              <div className="h-auto border-t-2 mt-4">
                {" "}
                {/* //component */}
                <div className=" mt-2 flex gap-3 py-5">
                  <div className="w-1/3 rounded-[20px] shadow-md bg-white h-[8rem]">
                    {/* <div>
                      <h3>Project ID</h3>
                      <p></p>
                    </div>
                    <div></div> */}
                  </div>{" "}
                  {/*  project id*/}
                  <div className="w-1/3 rounded-[20px] shadow-md bg-white h-[8rem]"></div>{" "}
                  {/*  project name*/}
                  <div className="w-1/3 rounded-[20px] shadow-md bg-white h-[8rem]"></div>{" "}
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
