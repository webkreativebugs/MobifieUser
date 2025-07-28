// import React from "react";

// const PopComponent = ({
//     setIsPop,
//     orgName,
//     setOrgName,
//     orgDetails,
//     handleSubmit,
// }) => {
//     const handleClose = () => {
//         setIsPop(false);
//         setOrgName((prev) => ({
//             ...prev,
//             name: orgDetails?.data.name || "",
//         }));
//     };

//     return (
//         <div
//             onClick={handleClose}
//             className="fixed inset-0 bg-black bg-opacity-55 flex items-center justify-center z-50 mt-[-5rem]"
//         >
//             <div
//                 onClick={(e) => e.stopPropagation()}
//                 className="p-6 bg-white h-72 w-1/3 rounded-[20px] shadow-md font-semibold"
//             >
//                 <div className="flex justify-between mt-2">
//                     <p className="text-3xl">Organization Name</p>
//                     <button
//                         className="mt-[-40px] mr-[-16px]"
//                         onClick={handleClose}
//                     >
//                         <svg
//                             width="30"
//                             height="30"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path
//                                 d="M6 6L18 18M18 6L6 18"
//                                 stroke="#1d1e1d"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                             />
//                         </svg>
//                     </button>
//                 </div>

//                 <div className="mt-10 flex flex-col gap-2">
//                     <label htmlFor="org" className="text-sm">
//                         Organization Name
//                     </label>
//                     <input
//                         id="org"
//                         type="text"
//                         value={orgName.name}
//                         placeholder="Please Enter Organization Name"
//                         onChange={(e) => {
//                             if (
//                                 e.target.value === " " ||
//                                 (orgName.name === "" && e.target.value.startsWith(" "))
//                             )
//                                 return;

//                             setOrgName((prev) => ({
//                                 ...prev,
//                                 name: e.target.value,
//                             }));
//                         }}
//                         className="border py-2 pl-3 rounded-lg"
//                     />
//                     <div className="mt-[-5px] h-3">
//                         {orgName.name === "" && (
//                             <p className="text-red-500 text-xs">
//                                 You must enter Organization's name
//                             </p>
//                         )}
//                     </div>
//                 </div>

//                 <div className="flex justify-end mt-6">
//                     <button
//                         onClick={handleClose}
//                         className="mr-4 border rounded-lg px-5 py-1 hover:bg-[#baf2ba] hover:shadow-green-600"
//                     >
//                         Cancel
//                     </button>
//                     <button
//                         onClick={(e) => handleSubmit(e)}
//                         className={`mr-4 border rounded-lg px-6 py-1 text-white ${orgDetails?.data.name === orgName.name?.trim() ||
//                                 orgName.name === ""
//                                 ? "bg-[#baf2ba]"
//                                 : "bg-[#32cd32]"
//                             }`}
//                     >
//                         Save
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PopComponent;
