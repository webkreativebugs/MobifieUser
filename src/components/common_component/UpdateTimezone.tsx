import React, { useState } from "react";
import DeleteOrg from "../../utils/api/Delete";
import { useloader } from "../../context/loader_context/LoaderContext";

function UpdateTimezone({
  setIspop,
}: {
  setIspop: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { setLoader } = useloader(); // ✅ use global loader context
  const [apiResponse, setApiResponse] = useState<any>(null);
  const [apiError, setApiError] = useState<any>(null);
  const [disable, setDisable] = useState<boolean>(false);
  // const [orgName, setOrgName] = useState<{ name: string }>({ name: "" });

  const handleDelete = () => {
    setLoader(true); // ✅ starts the loader
    DeleteOrg(setApiResponse, setApiError, setLoader);
    setDisable(true);
  };

  return (
    <>
      {apiResponse ? (
        <div className="flex h-full flex-col justify-around items-center  ">
          <h1 className="text-2xl font-semibold  mb-6 px-4 primary-inverse">
            {apiResponse.message}
          </h1>
          <button
            className="px-5 py-2 rounded-lg bg-gradient-to-r border button text-white  shadow-md transition "
            onClick={() => setIspop(false)}
          >
            OK
          </button>
        </div>
      ) : (
        <div>
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <p className="text-2xl font-boldtracking-wide">
              Update Timezone and Date
            </p>
            <button
              className=" hover:text-red-500 transition duration-200 text-2xl font-semibold"
              onClick={() => setIspop(false)}
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {/* Body */}
          <p className="text-lg leading-relaxed mb-16">
            Are you sure you want to Update Date and Timezone?
          </p>

          {/* Footer */}
          <div className="flex justify-end gap-3">
            <button
              className="px-5 py-2 rounded-lg border button"
              onClick={() => setIspop(false)}
              disabled={disable}
            >
              Cancel
            </button>
            <button
              className={`px-5 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-md transition ${
                disable ? "opacity-60 cursor-not-allowed" : ""
              }`}
              onClick={handleDelete}
              disabled={disable}
            >
              Yes, Update
            </button>
          </div>
        </div>
      )}
      {apiError}
    </>
  );
}

export default UpdateTimezone;

// import React from "react";
// import DeleteOrg from "../../utils/api/Delete";

// import { useState } from "react";

// function DeletePop() {
//   // Example initial states, adjust types and initial values as needed
//   const [apiResponse, setApiResponse] = useState<any>(null);
//   const [apiError, setApiError] = useState<any>(null);
//   const [loader, setLoader] = useState<boolean>(false);
//   const [disable, setDisable] = useState<boolean>(false);
//   const [orgDetails, setOrgDetails] = useState<any>(null);
//   const [orgName, setOrgName] = useState<{ name: string }>({ name: "" });

//   const handleDelete = () => {
//     setLoader(true);

//     console.log(orgName);

//     DeleteOrg(setApiResponse, setApiError, setLoader);
//     setDisable(true);
//   };

//   return (
//     <>
//       {apiResponse ? (
//         <div className="flex justify-center items-center mt-10">
//           <div className=" p-8 max-w-md w-full text-center ">
//             <h1 className="text-2xl font-semibold text-gray-800 mb-6 px-4">
//               {apiResponse.message}
//             </h1>
//             <button
//               className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition duration-300 ease-in-out"
//               onClick={() => console.log("OK clicked")}
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div className="">
//           {/* Header */}
//           <div className="flex justify-between items-center mb-12">
//             <p className="text-2xl font-bold text-gray-900 tracking-wide">
//               Delete Organization
//             </p>
//             <button
//               className="text-gray-400 hover:text-red-500 transition duration-200 text-2xl font-semibold"
//               onClick={() => console.log("Close clicked")}
//               aria-label="Close"
//             >
//               ×
//             </button>
//           </div>

//           {/* Body */}
//           <p className="text-gray-600 text-lg leading-relaxed mb-16">
//             Are you sure you want to Delete this organization? This action can
//             be reversed later.
//           </p>

//           {/* Footer */}
//           <div className="flex justify-end gap-3">
//             <button
//               className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 hover:shadow-sm transition"
//               onClick={() => console.log("Cancel clicked")}
//             >
//               Cancel
//             </button>
//             <button
//               className="px-5 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-md transition"
//               onClick={() => handleDelete()}
//             >
//               Yes, Delete
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default DeletePop;

// // import React from "react";

// // function DeletePop() {
// //   return (
// //     <div>
// //       <div className="flex justify-between mt-2">
// //         <p className="text-3xl">Organization Name</p>{" "}
// //         <button
// //           className="mt-[-40px] mr-[-16px] "
// //           onClick={() => {
// //             setIspop(false);
// //             setOrgName((prev) => ({
// //               ...prev,
// //               name: orgDetails?.data.name || "",
// //             }));
// //             //   setOrgName(orgDetails?.data.name);
// //           }}
// //         >
// //           {" "}
// //           <svg
// //             width="30"
// //             height="30"
// //             viewBox="0 0 24 24"
// //             fill="none"
// //             xmlns="http://www.w3.org/2000/svg"
// //           >
// //             <path
// //               d="M6 6L18 18M18 6L6 18"
// //               stroke="#1d1e1d"
// //               stroke-width="2"
// //               stroke-linecap="round"
// //               stroke-linejoin="round"
// //             />
// //           </svg>
// //         </button>
// //       </div>
// //       <div className="mt-10 flex flex-col gap-2">
// //         <label htmlFor="org" className="text-sm">
// //           Organization Name
// //         </label>
// //         <input
// //           id="org"
// //           type="text"
// //           value={orgName.name}
// //           placeholder="Please Enter Organization Name"
// //           // onChange={(e) => setOrgName(e.target.value)}
// //           onChange={(e) => {
// //             //   const value = ;

// //             // Prevent leading space
// //             if (
// //               e.target.value === " " ||
// //               (orgName.name === "" && e.target.value.startsWith(" "))
// //             )
// //               return;

// //             setOrgName((prev) => ({
// //               ...prev,
// //               name: e.target.value,
// //             }));

// //             //   setOrgName(e.target.value);
// //           }}
// //           className="border py-2 pl-3 rounded-lg "
// //         />{" "}
// //         <div className=" mt-[-5px] h-3">
// //           {orgName.name === "" && (
// //             <p className="text-red-500 text-xs">
// //               you must enter Organization's name{" "}
// //             </p>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default DeletePop;
