import React, { useEffect, useState } from "react";
import { useorg } from "../../context/org_context/OrganizationContext";
import { useloader } from "../../context/loader_context/LoaderContext";
import {
  UpdateOrganizationNameRequest,
  UpdateOrganizationNameResponse,
} from "../../../network/public/organization_api/update_organization/UpdateOrganization.interface";
import OrgDetailsUpdate from "../../utils/api/OrganizationDetailUpdateApi";

// interface PopComponentProps {
//   isPop: boolean;
//   setIsPop: (value: boolean) => void;
//   orgName: {
//     name: string;
//     tag: {
//       key: string;
//       value: string;
//     };
//   };
//   setOrgName: React.Dispatch<
//     React.SetStateAction<{
//       name: string;
//       tag: {
//         key: string;
//         value: string;
//       };
//     }>
//   >;
//   orgDetails: {
//     data: {
//       name: string;
//     };
//   } | null;
//   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
// }

const UpdatePop = ({
  setIspop,
}: {
  setIspop: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { orgDetails } = useorg();
  const { setLoader } = useloader();
  // const [ispop, setIspop] = useState(false);
  const [disable, setDisable] = useState(false);
  const [apiError, setApiError] = useState("");

  const [apiResponse, setApiResponse1] = useState<
    UpdateOrganizationNameResponse | undefined
  >();
  const [orgName, setOrgName] = useState<UpdateOrganizationNameRequest>({
    name: orgDetails?.data.name,
    tag: {
      key: "Tag 1",
      value: "Tag 1",
    },
  });

  useEffect(() => {
    if (orgDetails?.data?.name) {
      setOrgName((prev) => ({
        ...prev,
        name: orgDetails.data.name,
      }));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (orgDetails?.data.name !== orgName.name?.trim() && orgName.name !== "") {
      setLoader(true);
      e.preventDefault();

      console.log(orgName);

      OrgDetailsUpdate(setApiResponse1, orgName, setApiError, setLoader);
      setDisable(true);
    }
  };
  console.log(apiError);
  return (
    <>
      {" "}
      {apiResponse ? (
        <div className="flex h-full flex-col justify-around items-center  ">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6 px-4">
            {apiResponse.message}
          </h1>
          <button
            className=" font-medium py-2 px-8 rounded-full transition duration-300 ease-in-out ml-[26rem] text-2xl border"
            onClick={() => setIspop(false)}
          >
            OK
          </button>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-12">
            <p className="text-2xl font-bold text-gray-900 tracking-wide">
              Update Organization Name
            </p>
            <button
              className="text-gray-400 hover:text-red-500 transition duration-200 text-2xl font-semibold"
              onClick={() => setIspop(false)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="mt-10 flex flex-col gap-2">
            <label htmlFor="org" className="text-sm">
              Organization Name
            </label>
            <input
              id="org"
              type="text"
              value={orgName.name}
              placeholder="Please Enter Organization Name"
              // onChange={(e) => setOrgName(e.target.value)}
              onChange={(e) => {
                //   const value = ;

                // Prevent leading space
                if (
                  e.target.value === " " ||
                  (orgName.name === "" && e.target.value.startsWith(" "))
                )
                  return;

                setOrgName((prev) => ({
                  ...prev,
                  name: e.target.value,
                }));

                //   setOrgName(e.target.value);
              }}
              className="border py-2 pl-3 rounded-lg "
            />{" "}
            <div className=" mt-[-5px] h-3">
              {orgName.name === "" && (
                <p className="text-red-500 text-xs">
                  you must enter Organization's name{" "}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              onClick={() => {
                setIspop(false);
                setOrgName((prev) => ({
                  ...prev,
                  name: orgDetails?.data.name || "",
                }));
              }}
              className="mr-4 border rounded-lg px-5 py-1 hover:bg-[#baf2ba] hover:shadow-green-600"
            >
              Cancel
            </button>
            <button
              onClick={(e) =>
                handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
              }
              className={`mr-4 border rounded-lg px-6 py-1 bg- text-white ${
                orgDetails?.data.name === orgName.name?.trim() ||
                orgName.name === ""
                  ? "bg-[#baf2ba]"
                  : "bg-[#32cd32]"
              }`}
            >
              Save
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default UpdatePop;
