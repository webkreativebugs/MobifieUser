import React, { useState } from "react";
import Deactivate from "../../utils/api/Deactivate";
import { useloader } from "../../context/loader_context/LoaderContext";

function DisablePop({
  setIspop,
}: {
  setIspop: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { setLoader } = useloader(); // ✅ global loader context
  const [apiResponse, setApiResponse] = useState<any>(null);
  const [apiError, setApiError] = useState<any>(null);
  const [disable, setDisable] = useState<boolean>(false);

  const handleDeactivate = () => {
    setLoader(true); // ✅ show loader globally
    Deactivate(setApiResponse, setApiError, setLoader);
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
        <div className="">
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <p className="text-2xl font-bold  tracking-wide">
              Deactivate Organization
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
            Are you sure you want to deactivate this organization? This action
            can be reversed later.
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
              onClick={handleDeactivate}
              disabled={disable}
            >
              Yes, Deactivate
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default DisablePop;
